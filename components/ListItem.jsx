import { Pressable, StyleSheet, Text, View } from "react-native";

function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Pressable
        onPress={props.deleteToList.bind(this, props.id)}
        style={({ press }) => press && styles.pressList}
      >
        <Text style={styles.listText}>{props.value}</Text>
      </Pressable>
    </View>
  );
}
export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#311b6b",
  },
  pressList: {
    opacity: 0.5,
  },
  listText: {
    color: "#fff",
  },
});
