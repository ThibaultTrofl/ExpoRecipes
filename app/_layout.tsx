import { Stack } from "expo-router";
import { Platform, UIManager } from "react-native";

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const RootLayout = () => {
    return <Stack
        screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerShown: false,}}
    >
    </Stack>
};

export default RootLayout;
