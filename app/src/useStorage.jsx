import { useEffect, useState } from "react";

function storeText(key, initValue) {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  if (local) {
    return JSON.parse(local);
  }

  if (session) {
    return JSON.parse(session);
  }

  return initValue;
}

function UseStorage(key, initValue) {

  const [text, setText] = useState(() => storeText(key, initValue));

  useEffect(() => {
    const textJSON = JSON.stringify(text);
    localStorage.setItem(key, textJSON);
    sessionStorage.setItem(key, textJSON);
  }, [key, text]);

  return [text, setText];
}

export default UseStorage;