import { useEffect, useState } from 'react'
import * as signalR from '@microsoft/signalr'
import { ConnectionProps } from '@/Domain/web-sockets/ConnectionProps';

const useSignalR = ({ socketHost, eventsToListen }: ConnectionProps) => {
    const [connection, setConnection] = useState(null);
    const [socketMessage, setSocketMessages] = useState<{ eventIdentifier: string, message: string }>(null);

    useEffect(() => {
        // Iniciar conexión a SignalR
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(socketHost)
            .build();

        newConnection.start()
            .then(() => console.log("Connected"))
            .catch(err => console.error("Connection Error ", err));

        // Setear la instancia de la conexión
        setConnection(newConnection);

        return () => {
            // Detener la conexión cuando el componente se desmonte
            connection && connection.stop();
        };
    }, []);

    useEffect(() => {
        if (!connection) return;
        // Agregar los aventos que se van a escuchar 
        addListeners(eventsToListen);

    }, [connection])

    const addListeners = (events: string[]) => {
        events.forEach(event => {
            connection.on(event, (eventIdentifier: string, message: string) => {
                setSocketMessages({ eventIdentifier, message });
            });
        });
    }

    //Envío de mensajes del cliente al servidor
    const sendMessage = (event: string, eventIdentifier: string, message?: string) => {
        if (connection) {
            // Invocar el método en el servidor SignalR (event debe ser el nombre del método)
            // no del string
            connection
                .invoke(event, eventIdentifier, message)  
                .catch((err) => console.error("Error al enviar mensaje: ", err));
        }
    };

    return {
        sendMessage,
        socketMessage,
    }

}

export default useSignalR