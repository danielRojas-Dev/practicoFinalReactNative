import { createDrawerNavigator } from "@react-navigation/drawer";
import { logout, useSession, useSetSession } from "../context/SessionProvider";
import Home from "./Home/Home";
import { Login } from "../views/login/Login";
import { Materias } from "../views/materias/Materias";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
const NavBar = createDrawerNavigator();

const CerrarSesion = () => {
  const setSession = useSetSession();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setSession(null);
    } catch (error) {
      console.log(error);
    }
  };

  return Alert.alert("Cerrar Sesion", "¿Desea Cerrar Sesion?", [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: handleLogout },
  ]);
};

export const MyDrawer = () => {
  const session = useSession();
  // console.log(session);
  return session === null ? (
    <Login />
  ) : (
    <NavBar.Navigator>
      <>
        <NavBar.Screen name="Inicio" component={Home} />
        <NavBar.Screen name="Materias" component={Materias} />
        <NavBar.Screen name="Cerrar Sesion">
          {(props) => <CerrarSesion {...props} />}
        </NavBar.Screen>
      </>
    </NavBar.Navigator>
  );
};

// export function MyDrawer() {
//   return (
//     <NavBar.Navigator>
//       <NavBar.Screen name="Home" component={Home} />
//       <NavBar.Screen name="Tareas" component={ListTask} />
//       <NavBar.Screen
//         name="Nueva Tarea"
//         options={{
//           drawerItemStyle: { display: "none" },
//         }}
//         component={FormNewTask}
//       />
//     </NavBar.Navigator>
//   );
// }
