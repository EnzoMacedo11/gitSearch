import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({})

export default function UserProvider({children}){
    const [userList,setUserList]=useState([])

  useEffect(() => {
    loadUserList();
  }, []);

  useEffect(() => {
    saveUserList();
  }, [userList]);

 async function saveUserList() {
    try {
      await AsyncStorage.setItem("userList", JSON.stringify(userList));
    } catch (error) {
      console.error("Erro ao salvar userList no AsyncStorage:", error);
    }
  };

  async function loadUserList() {
    try {
      const data = await AsyncStorage.getItem("userList");
      if (data) {
        setUserList(JSON.parse(data));
      }
    } catch (error) {
      console.error("Erro ao carregar userList do AsyncStorage:", error);
    }
  };
   
    return(
        <UserContext.Provider value={{userList,setUserList}}>
            {children}
        </UserContext.Provider>
    )
}