import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    // Check if we already have saved data
    const localData = localStorage.getItem(key);

    // If found, parse it back to an object/array
    if (localData !== null) {
      return localData;
    }
    // Otherwise, use the fallback default value
    return initialValue;
  });

  useEffect(() => {
    // Turn state into a string so localStorage can save it
    localStorage.setItem(key, state);
  }, [key, state]); // Re-run whenever the key or data updates

  return [state, setState];
}

/*
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    if (localData !== null) {
      return localData; // no JSON.parse needed for strings
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state); // save raw string
  }, [key, state]);

  return [state, setState];
}
*/
