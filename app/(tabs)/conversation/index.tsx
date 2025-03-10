import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { useState } from 'react'
import { Link, Stack, router } from 'expo-router'

import IconButton from '@/components/iconButton'
import Dropdown from '@/components/dropdown'
import {data} from '@/data/mock'

export default function Index() {
    const [showDropdown, setShowDropdown] = useState(false)

    const onPressSearch = () => {
        router.push('/conversation/search')
    }

    const onPressAdd = () => {
        setShowDropdown(!showDropdown);
    }

    const onCloseDropdown = () => {
        setShowDropdown(false);
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
            <Dropdown visible={showDropdown} onClose={onCloseDropdown}/>
            <FlatList
                data={data}
                style={styles.list}
                renderItem={( {item} ) => {
                    return (
                        <Link href={`/conversation/${item.id}`} style={styles.itemContainer}>
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
