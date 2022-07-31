import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };//this function is responsible for fatching that user input as the user types.

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');//reset the state with empty.
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            {/* The Modal component is a basic way to present content above an enclosing view. */}
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Course Goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                /*onChangeText Callback that is called when the text input's text changes.
                 Changed text is passed as a single string argument to the callback handler.*/
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                    {/* Button component doesn't have a style prop.  */}
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',

    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%', //when we use prop. in persentage we must use quotes in react native.
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
});


