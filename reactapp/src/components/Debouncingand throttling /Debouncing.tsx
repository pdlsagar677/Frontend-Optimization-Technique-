import React, { useState, useEffect } from "react";

function DebounceDemo() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // wait 500ms after user stops typing

    return () => clearTimeout(handler); // cancel previous timeout
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API Call with query:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <h2>Debounce Demo</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default DebounceDemo;
