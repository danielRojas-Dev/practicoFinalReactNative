import { createDrawerNavigator } from "@react-navigation/drawer";
import {useSession} from "../context/SessionProvider"
import Home from "./Home/Home";
import { Login } from "../views/login/Login";

const NavBar = createDrawerNavigator();

const RutasAlumnos = () => {
  return (
    <NavBar.Navigator>
      <NavBar.Screen name="Home" component={Home} />
      <NavBar.Screen name="publicaciones" component={Home} />
    </NavBar.Navigator>
  )
}

export const MyDrawer = () => {

  const session = useSession()

  useEffect(() => {
    
    

  }, [session]);


  if (session === null) {
    return <Login/>
  } else {
     return (
      <RutasAlumnos/>
   )
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
