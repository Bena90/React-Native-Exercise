import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ goal, setNewGoal ] = React.useState('');
  const [ goals, setGoals ] = React.useState([])

  const goalInputHandler = (input) => { 
    setNewGoal(input)
  }

  const addGoalHandler = () => {
    const newGoal = {
      id: Math.random(),
      goal
    }
    console.log(newGoal)

    setGoals (prev => [...prev, newGoal])
    setNewGoal('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter the goal' 
          onChangeText={goalInputHandler} 
        />
        <Button  title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList >
          {
            goals.length
              ? 
              goals?.map ((goal) =>
                <View style={styles.goalItem}  key={goal.id}>
                  <Text style={styles.goalText}> {goal.goal} </Text>
                </View>
              )
              :
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>No goals yet!</Text>
              </View>
          }

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
    width: '70%',

  },
  goalsContainer: {
    flex: 2,
    marginTop: 15,
    flexDirection: 'column',
    width: '100%'
  },
  goalItem: {
    margin: 10,
    padding: 10,
    borderWidth:1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'rgb(33,150,243)',
  },
  goalText: {
    color: '#ffffff'
  }

});
