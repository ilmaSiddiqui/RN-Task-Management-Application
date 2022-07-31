import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.golaItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed})=> pressed && styles.pressedItem }
            >
                {/* Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children. */}

                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    golaItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});