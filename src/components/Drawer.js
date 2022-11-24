import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./Home/Home";
import { Login } from "../views/login/Login";
import { useEffect } from "react";

const NavBar = createDrawerNavigator();

// const RutasAlumnos = () => {
//   return (
//     <NavBar.Navigator>
//       <NavBar.Screen name="Home" component={Home} />
//       <NavBar.Screen name="publicaciones" component={Home} />
//     </NavBar.Navigator>
//   )
// }


export const MyDrawer = () =>  {

  const auth = async()=>{

    const token = await  AsyncStorage.getItem('token');
 
  
      return (<Login/>)

   }

useEffect(()=>{

auth()
},[])


}

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
