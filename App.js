import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './componets/GoalInput';
import GoalItem from './componets/GoalItem';

export default function App() {
  const [ goals, setGoals ] = React.useState([])
  const [ modal, setModal ] = React.useState(false)

  const startAddGoalHandler = () => {
    setModal(true)
  }

  const endAddGoalHandler = () => {
    setModal(false)
  }

  const addGoalHandler = (goal) => {
    const newGoal = {
      id: Math.random(),
      goal
    }
    setGoals (prev => [...prev, newGoal])
    endAddGoalHandler()
  }

  const deleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id)
    setGoals(updatedGoals)
  }

  return (
    <>
      <StatusBar style='auto'/>
      <View style={styles.container}>
        <Button title='Add new Goal' color='rgb(33,150,243)' onPress={startAddGoalHandler} />
        {modal && <GoalInput 
                    visible={modal} 
                    onCancel={endAddGoalHandler}  
                    addGoalHandler={addGoalHandler} 
                  />}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
            renderItem={(item) => {
              return(
                <GoalItem 
                  item={item} 
                  onDeleteItem={deleteGoal}
                  />
              )
            }
            } 
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    
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
