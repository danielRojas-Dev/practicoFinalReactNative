import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { set } from "react-native-reanimated";


const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {

    const [session, setSession] = useState(null);
    const [dataUser, setDataUser]= useState()

    const existToken = async () => {
        const token = await AsyncStorage.getItem("token");
        
        if (token === null) {
            return
        }

        setSession(token)
  }

  useEffect(() => {
   existToken()
      if (session === null) {
        setSession(null);

    } else {
       setSession(session);
        }
  }, []);

  const setNewSession = async (token, dataUser) => {
    setSession(token);
    setDataUser(dataUser)
    await AsyncStorage.setItem("token", token);
  };

  return (
    <SessionContext.Provider value={[session, setNewSession, dataUser]}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext)[0];
const useSetSession = () => useContext(SessionContext)[1];
const useDataUser = () => useContext(SessionContext)[2];

export { useSession, useSetSession, useDataUser };
export default SessionProvider;
