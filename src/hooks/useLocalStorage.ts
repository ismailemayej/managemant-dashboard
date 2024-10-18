/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useLocalStorage.js
import useLocalStorage from 'use-local-storage';

const useCustomLocalStorage = (key:any, initialValue:any) => {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
  
  return [storedValue, setStoredValue];
};

export default useCustomLocalStorage;
