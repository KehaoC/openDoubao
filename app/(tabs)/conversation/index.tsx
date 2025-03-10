import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
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
        <View style={styles.container}>
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
            <FlatList
                data={data}
                style={styles.list}
                renderItem={( {item} ) => {
                    return (
                        <Link href={`/conversation/${item.name}`} style={styles.itemContainer}>
                            <Image
                                source={item.avatar}
                                style={styles.avatar}
                            />
                            <View style={styles.contentContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.message}>{item.lastMessage}</Text>
                            </View>
                        </Link>
                    )
                }}
            />
        </View>
    )
}

// 在 StyleSheet.create 中添加样式
const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 8,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    contentContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    message: {
        fontSize: 14,
        fontWeight: '300',
        color: '#666',
    },
})

const data = [
    {
        avatar: require('@/assets/images/avatars/doubao.png'),
        name: '豆包',
        lastMessage: '聊聊新话题'
    },
    {
        avatar: require('@/assets/images/avatars/mia.png'),
        name: 'Mia (美国开朗女生) ',
        lastMessage: "I'm not quite sure I get what you mean..."
    },
    {
        avatar: require('@/assets/images/avatars/shengongbao.png'),
        name: '申公豹（结巴版）',
        lastMessage: '十日不见，你对我结巴的事还耿耿于怀？'
    },
]