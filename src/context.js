import React, { useState, useEffect } from "react";

export const Context = React.createContext();


export function ContextController({ children }) {
  let intialState = {
    posts: [],
    random: "",
    
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}