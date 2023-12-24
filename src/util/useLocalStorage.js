import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    // Get data from localStorage on initial render
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Create state and setPeople function
    const [value, setValue] = useState(initial);

    // Use useEffect to update localStorage when value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;