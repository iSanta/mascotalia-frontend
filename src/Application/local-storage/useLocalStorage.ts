const useLocalStorage = () => {
  const save = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  const get = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const remove = (key: string): void => {
    localStorage.removeItem(key);
  };
  const removeAllItems = (): void => {
    localStorage.clear();
  };

  return {
    save,
    get,
    remove,
    removeAllItems
  };
};

export default useLocalStorage;
