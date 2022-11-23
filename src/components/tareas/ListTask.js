import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Card } from "@rneui/themed";
import { styles } from "../../assets/css/styleList";
import ListItem from "./ListItem";

import tasks from "../../data/task.json";
import { ScrollView } from "react-native-gesture-handler";

export default function ListTask({ navigation, route }) {
  const [task, setTask] = useState([]);
  const [reload, setReload] = useState(false);
  // const { tareasNew } = route.params;
  useEffect(() => {
    setTask(tasks);
  }, []);

  useEffect(() => {}, [task]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <Card.Title style={styles.title}>Mis Tareas</Card.Title>
          <Card.Divider />
          {task.map((tareita, i) => {
            return (
              <ListItem
                tareita={tareita}
                task={task}
                key={i}
                id={i}
                setTask={setTask}

                // tareasNew={tareasNew}
              />
            );
          })}

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Nueva Tarea", {
                tareas: [task, setTask],
              })
            }
          >
            <Text>Nueva Tarea</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </View>
  );
}
