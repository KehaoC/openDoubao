import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    name: string | undefined,
    size?: number,
    color?: string | undefined
    onPress: () => void
}

export default function IconButton({ name, size = 24 , color = 'black', onPress}: Props) {
    // 将string类型限制为Ionicons支持的图标名称
    const iconName = name as keyof typeof Ionicons['glyphMap'];
    
    return (
        <Pressable onPress={onPress}>
            <Ionicons
                name={iconName}
                size={size}
                color={color}
            />
        </Pressable>
    )
}
