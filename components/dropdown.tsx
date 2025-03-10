import { Text, View, Dimensions, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

type Props = {
    visible: boolean
    onClose: () => void
}

export default function Dropdown({ visible, onClose }: Props) {
    if (!visible) {
        return null
    }

    return (
        <>
        <Pressable style={styles.overlay} onPress={onClose} />
        <View style={styles.container}>
            <Pressable style={styles.item} onPress={() => alert("hi")}>
                <Ionicons name="create-outline" size={30}/>
                <Text style={styles.text}>创建新对话</Text>
            </Pressable>
            <View style={styles.item}>
                <Ionicons name="person-add-outline" size={30}/>
                <Text style={styles.text}>创建 AI 智能体</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name="scan-outline" size={30}/>
                <Text style={styles.text}>扫一扫</Text>
            </View>
            <View style={[styles.item, {borderBottomWidth: 0}]}>
                <Ionicons name="headset-outline" size={30}/>
                <Text style={styles.text}>Ola Friend 耳机</Text>
            </View>
        </View>
        </>
    )
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    container: {
        position: 'absolute',
        top: 15,
        left: screenWidth * 0.5 - 10,
        zIndex: 1001,
        width: screenWidth * 0.5,
        height: screenWidth * 0.5,
        padding: 4,
        // borderWidth: 1,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        // iOS 阴影
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Android 阴影
        elevation: 5,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    }
})