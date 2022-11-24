import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {

    const [session, setSession] = useState(null);

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

  const setNewSession = async (token) => {
    setSession(token);
    await AsyncStorage.setItem("token", token);
  };

  return (
    <SessionContext.Provider value={[session, setNewSession]}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext)[0];
const useSetSession = () => useContext(SessionContext)[1];

export { useSession, useSetSession };
export default SessionProvider;
