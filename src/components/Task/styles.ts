import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginHorizontal: 24,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    marginBottom: 8,
  },
  button: {
    width: 24,
    height: 24,
  },
  buttonUncheck: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 12,
  },
  buttonCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    marginHorizontal: 8,
    width: "80%",
    fontSize: 14,
    color: "#F2F2F2",
  },
  taskTextCheck: {
    marginHorizontal: 8,
    width: "80%",
    fontSize: 14,
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
