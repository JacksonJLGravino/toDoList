import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import SvgComponent from "../../assets/Logo";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Task from "../../components/Task";

export default function Home() {
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputTask, setInputTask] = useState("");
  const [checkCount, setCheckCount] = useState(0);

  function handleAddTask() {
    setTasks((prevState) => [...prevState, inputTask]);
    setInputTask("");
  }

  function handleCountingCheck(c: boolean) {
    let value = checkCount;
    if (c == true) {
      value--;
      setCheckCount(value);
    } else {
      value++;
      setCheckCount(value);
    }
  }

  function handleTaskRemove(c: boolean, item: string) {
    Alert.alert("Remover", `Deseja remover a tarefa "${item}"?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task !== item));
          if (c === true) {
            let value = checkCount;
            value--;
            setCheckCount(value);
          }
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgComponent />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, inputOnFocus && styles.textInputFocused]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={inputTask}
            onChangeText={setInputTask}
            onFocus={() => setInputOnFocus(true)}
            onBlur={() => setInputOnFocus(false)}
          />

          <TouchableOpacity style={styles.formButton} onPress={handleAddTask}>
            <AntDesign name="pluscircleo" size={18} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.listHeader}>
          <View style={styles.parts}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.count}>{tasks.length}</Text>
          </View>
          <View style={styles.parts}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.count}>{checkCount}</Text>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              text={item}
              onRemove={(c) => handleTaskRemove(c, item)}
              countingCheck={(c) => handleCountingCheck(c)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Entypo name="clipboard" size={56} color="#333333" />
              <Text style={styles.listEmptyText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
