import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blcak',
            tabBarInactiveTintColor: 'gray',
        }}>
            // 隐藏默认的 index Tab
            <Tabs.Screen name="index" options={{
                href: null,
            }}/>
            <Tabs.Screen name="conversation" options={{
                title: "对话",
                tabBarIcon: ({color, size, focused }) => (
                    <Ionicons
                        name={focused ? "chatbubbles" : "chatbubbles-outline"} 
                        size={size} 
                        color={color}
                    />
                ),
                headerShown: false
            }}/>
            <Tabs.Screen name="explore"  options={{
                title: "发现",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? "compass" : "compass-outline"}
                        size={size} 
                        color={color}
                    />
                )
            }}/>
            <Tabs.Screen name="compose"  options={{
                title: "创作",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? "create" : "create-outline"}
                        size={size} 
                        color={color}
                    />
                )
            }}/>
            <Tabs.Screen name="notification"  options={{
                title: "通知",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? "notifications" : "notifications-outline"}
                        size={size} 
                        color={color}
                    />
                )
            }}/>
            <Tabs.Screen name="me"  options={{
                title: "我的",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? "person" : "person-outline"}
                        size={size} 
                        color={color}
                    />
                )
            }}/>
        </Tabs>
    )
}