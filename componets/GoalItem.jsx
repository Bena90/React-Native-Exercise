import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
    const { item, onDeleteItem } = props
    
    const deleteGoal = (id) => {
        onDeleteItem(id)
    }

    return (
        <View style={styles.goalItem}  key={item.item.id}>
            <Pressable 
                onPress={() => deleteGoal(item.item.id)}
                android_ripple={{ color: '#dddddd'}}
            >
                <Text style={styles.goalText}> {item.item.goal} </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalItem