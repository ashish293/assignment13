import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#262450", paddingTop: 50 }}>
			<StatusBar style="light" />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="email" />
				<Stack.Screen name="home" />
			</Stack>
		</SafeAreaView>
	);
}
