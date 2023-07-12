import { useEffect, useState } from "react";

export default function useDebounce(value, timeout = 0) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let to = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => {
      clearTimeout(to);
    };
  }, [value, timeout]);
  return debounceValue;
}
