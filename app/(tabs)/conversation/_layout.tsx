import { Stack } from "expo-router";

export default function ConversationLayout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "对话"
            }}/>
            <Stack.Screen name="[id]" options={{
            }}/>
        </Stack>

    )
}