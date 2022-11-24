import { MyDrawer } from "./src/components/Drawer";
import { NavigationContainer } from "@react-navigation/native";
import SessionProvider from "./src/context/SessionProvider";

export default function App() {
  return (
    
    <NavigationContainer>
      <SessionProvider>
             <MyDrawer />
      </SessionProvider>
    </NavigationContainer>
    
  );
}
