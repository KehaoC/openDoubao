import { Text, View, StyleSheet, Image } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'

import IconButton from '@/components/iconButton';
import {data} from '@/data/mock'

export default function ConversationId(){
    const { id } = useLocalSearchParams();
    const index = parseInt(id as string);
    const currentRole = data[index]

    return (
        <View>
            <Stack.Screen
                options={{
                    headerBackButtonDisplayMode: 'minimal',
                    headerTintColor: 'black',
                    headerTitleAlign: 'left',
                    headerTitle: () => (
                        <View style={styles.headerTitle}>
                            <Image 
                                source={currentRole.avatar}
                                style={styles.avatar}
                            />
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{currentRole.name}</Text>
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.headerRight}>
                            <IconButton
                                name="call-outline"
                                onPress={() => {alert("Call")}}
                                size={24}
                            />
                            <IconButton
                                name="volume-high-outline"
                                onPress={() => {alert("Call")}}
                                size={24}
                            />
                            <IconButton
                                name="ellipsis-horizontal"
                                onPress={() => {alert("Call")}}
                                size={24}
                            />
                        </View>
                    )
                }}
            />
            <Text>Conversation with {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 100

    },
    nameContainer: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
    },
    headerRight: {
        flexDirection: 'row',
        gap: 8
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})