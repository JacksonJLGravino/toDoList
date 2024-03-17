import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "black",
    paddingVertical: 70,
    alignItems: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 24,
    position: "relative",
    top: -27,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#0D0D0D",
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
  },
  textInputFocused: {
    borderColor: "#5E60CE",
  },
  formButton: {
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    marginBottom: 8,
  },
  parts: {
    flexDirection: "row",
    justifyContent: "center",
  },
  created: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE",
  },
  completed: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#8284FA",
  },
  count: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    borderRadius: 50,
    textAlign: "center",
    marginLeft: 8,
    paddingHorizontal: 8,
  },
  listEmpty: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  listEmptyText1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
    marginTop: 16,
  },
  listEmptyText2: {
    fontSize: 14,
    color: "#808080",
  },
});
