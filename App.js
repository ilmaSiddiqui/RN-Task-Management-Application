// on the top of this code we have imported all the components which is we are using in our Native application.
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }//this function will opens the modal

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);//this will updating this CourseGoals state based on the all courseGoals by upanding a new goal.
    endAddGoalHandler();//if goal was added it will call automatically for closing.
  };//this function should be fired when the button is clicked

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }//this function will delete the goal on press the goal.

  return (
    <>
      <StatusBar style='light' />

      {/*  View
     The most fundamental component for building a UI,View is a container that supports 
     layout with flexbox,style, some touch handling, and accessibility controls.
    */ }
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        {/* <--------------------------------------------------------------------------------------------------------------------------> */}
        {/* 
        <ScrollView alwaysBounceVertical={false}>

          {---ScrollView Component that wraps platform ScrollView while providing integration with touch locking "responder" system.
      ScrollView renders all its react child components at once, 
         but this has a performance downside. ---}

           {courseGoals.map((goal) => (
            <View style={styles.golaItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}

          {---<Text>List of goals...</Text>
          Text is a React component for displaying text.
        Text supports nesting, styling, and touch handling.---}
        </ScrollView>  
        */}

        <View style={styles.goalsContainer}>
          <FlatList
            //   {/* FlatList renders items lazily, when they are about to appear,
            // and removes items that scroll way off screen to save memory and processing time. */}
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />;
            }}
            keyExtractor={(item, index) => {
              //  keyExtractor Used to extract a unique key for a given item at the specified index. 
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
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 5
  },

});
