import { Text, View, StyleSheet } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'

export default function ConversationId(){
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Stack.Screen
                options={{
                    title: `Chat with ${id}`,
                    headerStyle: styles.header
                }}
            />
            <Text>Conversation with {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "green"
    }
})