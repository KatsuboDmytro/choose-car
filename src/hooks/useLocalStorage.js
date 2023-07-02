import { useState, useEffect } from 'react';

export const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
