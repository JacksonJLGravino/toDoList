import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  text: string;
  countingCheck: (c: boolean) => void;
  onRemove: (c: boolean) => void;
};

export default function Task({ text, countingCheck, onRemove }: Props) {
  const [checked, isChecked] = useState(false);

  const toggleCheck = () => {
    if (checked == false) {
      isChecked(true);
      countingCheck(checked);
    } else {
      isChecked(false);
      countingCheck(checked);
    }
  };

  return (
    <View style={styles.task}>
      <TouchableOpacity style={styles.button} onPress={toggleCheck}>
        {checked == false ? (
          <View style={styles.buttonUncheck} />
        ) : (
          <View style={styles.buttonCheck}>
            <AntDesign name="check" size={14} color="#F2F2F2" />
          </View>
        )}
      </TouchableOpacity>
      <Text style={[checked == false ? styles.taskText : styles.taskTextCheck]}>
        {text}
      </Text>
      <TouchableOpacity onPress={() => onRemove(checked)}>
        <FontAwesome name="trash-o" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
