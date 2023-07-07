import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [courseLists, setCourseLists] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddListHandler(){
    setModelIsVisible(true);
  }
   //cancel
   function endAddListHandler(){
    setModelIsVisible(false);
  }
  //add list 
  function addListHandler(enterListText){
    setCourseLists((currentCourseList)=>[
      ...currentCourseList,
      {text: enterListText, id: Math.random().toString()}
    ]);
    endAddListHandler();
  }
 
  //delete list
  function deleteListHandler(id){
    setCourseLists((currentCourseList)=>{
      return currentCourseList.filter((list)=> list.id !== id);
    });
  }
  return (
    <>
    <StatusBar/>
   <View style={styles.appContainer}>
    <Button title="Add New Lists" onPress={startAddListHandler} color={'#311b6b'}/>
    <ListInput visible={modelIsVisible} onAddList={addListHandler} onCancel={endAddListHandler}/>
    <View style={styles.listContainer}>
    <FlatList
      data={courseLists}
      renderItem={(itemData)=>{
        return (
          <ListItem value={itemData.item.text} id={itemData.item.id} deleteToList={deleteListHandler}  />
        );
      }}
      keyExtractor={(item, index)=>{
        return item.id;
      }}
      alwaysBounceVertical={false}
    />
    </View>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  listContainer: {
    flex: 5
  },
  
});
