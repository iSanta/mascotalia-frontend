import { useEffect } from 'react'
import { DB_NAME, DB_VERSION, IDBStore } from './IDBStore';


const useWebDb = (storeName: IDBStore) => {
    let dbInstance: IDBDatabase | null = null;

    useEffect(() => {
        initDB();
    }, [])

    //ToDo: Reciclar el request
    const initDB = (): Promise<boolean> => {
        return new Promise((resolve) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = () => {
                const db = request.result;

                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName, { keyPath: 'id' });
                }
            };

            request.onsuccess = () => {
                const db = request.result;
                const version = db.version;
                resolve(true);
            };

            request.onerror = () => {
                resolve(false);
            };
        });
    };

    const addData = <T>(data: T): Promise<T | string | null> => {
        return new Promise((resolve) => {
            //Se verifica si ya hay abierta una conexión
            //Si la hay usa el estado, de lo contrario la abre nuevamente
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onsuccess = () => {
                const db = request.result;
                const tx = db.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                store.put(data);
                resolve(data);
            };

            request.onerror = () => {
                const error = request.error?.message
                if (error) {
                    resolve(error);
                } else {
                    resolve('Unknown error');
                }
            };
        });
    };

    const deleteData = (key: string): Promise<boolean> => {
        return new Promise((resolve) => {
            // again open the connection
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onsuccess = () => {
                const db = request.result;
                const tx = db.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                const res = store.delete(key);

                res.onsuccess = () => {
                    resolve(true);
                };
                res.onerror = () => {
                    resolve(false);
                }
            };
        });
    };

    const existsInDB = (id: string | number): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('MascotaliaDB', DB_VERSION);

            request.onsuccess = () => {
                const db = request.result;

                if (db.objectStoreNames.contains(storeName)) {
                    const tx = db.transaction(storeName, 'readonly');
                    const store = tx.objectStore(storeName);
                    const getRequest = store.get(id);

                    getRequest.onsuccess = () => {
                        resolve(!!getRequest.result);
                    };

                    getRequest.onerror = () => {
                        reject(getRequest.error?.message || "Error al buscar el registro");
                    };
                }

            };

            request.onerror = () => {
                reject(request.error?.message || "Error al abrir la base de datos");
            };
        });
    };

    const getAllRecords = async <T>(): Promise<T[]> => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("MascotaliaDB", DB_VERSION);

            request.onsuccess = () => {
                const db = request.result;

                if (db.objectStoreNames.contains(storeName)) {
                    const tx = db.transaction(storeName, "readonly");
                    const store = tx.objectStore(storeName);
                    const getAllRequest = store.getAll();

                    getAllRequest.onsuccess = () => resolve(getAllRequest.result);
                    getAllRequest.onerror = () => reject("Error al obtener registros");
                }
            };

            request.onerror = () => reject("Error al abrir la base de datos");
        });
    };



    return { addData, deleteData, existsInDB, getAllRecords }

}

export default useWebDb