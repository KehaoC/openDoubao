import { Text, View, StyleSheet } from 'react-native'
import { Link, Stack } from 'expo-router'

import IconButton from '@/components/iconButton'

export default function Index() {
    const onPressSearch = () => {
        alert('搜索')
    }

    const onPressAdd = () => {
        alert('添加')
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: "对话",
                    headerRight: () => (
                        <View style={styles.headerRightContainer}>
                            <IconButton name="search-outline"  onPress={onPressSearch}/>
                            <IconButton name="add-circle-outline" onPress={onPressAdd}/>
                        </View>
                    )
                }}
            />
            <Text>Conversation</Text>
            <Link href="/conversation/doubao">Doubao</Link>
            <Link href="/conversation/qinche">Qinche</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        gap: 15,
    }
})