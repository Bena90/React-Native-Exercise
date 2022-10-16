import React from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
    const [ newGoal, setNewGoal ] = React.useState('')

    const { addGoalHandler, visible, onCancel } = props

    const goalInputHandler = (input) => { 
        setNewGoal(input)
    }

    const addHandler = () => {
        addGoalHandler(newGoal)
        setNewGoal('')
    }

    return(
        <Modal  visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                style={styles.textInput} 
                placeholder='Enter the goal' 
                onChangeText={goalInputHandler} 
                value={newGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Add Goal' onPress={addHandler}/>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Cancel' onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'rgba(33,150,243,0.3)',
      },
      textInput: {
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        padding: 5,
        width: '70%',
        backgroundColor: '#fff',
      },
      buttonContainer: {
      },
      buttonStyle: {
        margin: 10,
      },
      image:{
        width: 100,
        height:100,
        margin:20,
      }
})



 export default GoalInput;