import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeId = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeId);
  });
  return debouncedValue;
};