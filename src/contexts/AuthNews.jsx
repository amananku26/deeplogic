import { createContext, useState } from "react";
import axios from "axios";
export let AuthContextNews = createContext();
export default function AuthNews({ children }) {
  let [arr, setArr] = useState([]);
  let showNews = async () => {
    let data = await axios.get("http://localhost:3001/getTimeStories");

    setArr([...data.data]);
  };
  return (
    <AuthContextNews.Provider value={{ showNews, arr }}>
      {children}
    </AuthContextNews.Provider>
  );
}
