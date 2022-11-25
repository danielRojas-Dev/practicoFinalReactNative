import { createDrawerNavigator } from "@react-navigation/drawer";
import {useSession, useSetSession} from "../context/SessionProvider"
import Home from "./Home/Home";
import { Login } from "../views/login/Login";
import { Materias } from "../views/materias/Materias";
const NavBar = createDrawerNavigator();

const RutasAlumnos = () => {

  const session = useSetSession();
  const CerrarSesion = ()=>{  
    try {
      session(null)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    
    <NavBar.Navigator>
      <NavBar.Screen name="Inicio" component={Home} />
      <NavBar.Screen name="Materias" component={Materias} />
      <NavBar.Screen name="Cerrar Sesion" component={CerrarSesion}/>
    </NavBar.Navigator>
  )
}

export const MyDrawer = () => {
try {
  const session = useSession()

  if (session === null) {
    return <Login/>
  } else {
     return (
      <RutasAlumnos/>
   )
  }

} catch (error) {
  console.log(error);
}


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
