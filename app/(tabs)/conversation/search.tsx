import { Text, View, TextInput, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    const [keyword, setKeyword] = useState("")

    const onCancel = () => {
        setKeyword("");
        router.back();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={24} color="gray" />
                    <TextInput style={styles.inputBox}
                        placeholder="搜索消息、智能体"
                        value={keyword}
                        onChangeText={setKeyword}
                        autoFocus
                    />
                </View>
                <Pressable style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.cancelText}>取消</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        margin: 10,
        paddingLeft: 10,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        flex: 0.85,  // 搜索框占 80%
        backgroundColor: '#f5f5f5',
    },
    inputBox: {
        flex: 1,
    },
    cancelButton: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1
    },
    cancelText: {
        color: '#333',
        fontSize: 18,
        fontWeight: '400'
    }
})