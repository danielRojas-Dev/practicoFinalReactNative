import React, { useRef, useState } from "react";

import { styles } from "../../assets/css/styleList";
import { View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormNewTask = ({ navigation, route }) => {
  const { tareas } = route.params;

  const inputRef = useRef();

  const [task, setTask] = tareas;

  const [newTask, setNewTask] = useState("");

  const newTarea = { title: newTask, isCompleted: false };

  const insertTask = (paramTask, newTarea) => {
    const News = [...paramTask, newTarea];

    setTask(News);
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={(e) => {
          setNewTask(e);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          insertTask(task, newTarea);

          navigation.navigate("Tareas", { tareasNew: newTask });
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormNewTask;
