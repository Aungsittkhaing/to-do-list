import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function ListInput(props) {
  const [enterListText, setEnterListText] = useState("");

  //add list
  function addListHandler() {
    props.onAddList(enterListText);
    setEnterListText("");
  }

  //control list with buttton
  function listInputHandler(enterText) {
    setEnterListText(enterText);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/icon.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={listInputHandler}
          placeholder="enter your lists"
          value={enterListText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Lists"
              color={"#311b6b"}
              onPress={addListHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color={"#f31282"} onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default ListInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2693E8",
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#cccccc",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    marginRight: 8,
    borderRadius: 6,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
