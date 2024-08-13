import BackUi from "@/components/BackUi";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
	const [tabId, setTabId] = useState(1);

	const tablist = [
		{
			id: 1,
			title: "Access",
		},
		{
			id: 2,
			title: "Consent",
		},
		{
			id: 3,
			title: "Approve",
		},
	];

	const Tab1 = () => {
		return (
			<View>
				<Text style={styles.tabText}>Tab 1</Text>
			</View>
		);
	};
	const Tab2 = () => {
		return (
			<View>
				<Text style={styles.tabText}>Tab 2</Text>
			</View>
		);
	};
	const Tab3 = () => {
		return (
			<View>
				<Text style={styles.tabText}>Tab 3</Text>
			</View>
		);
	};

	return (
		<BackUi>
			<View style={styles.tabContainer}>
				{tablist.map((tab) => (
					<LinearGradient
						// Background Linear Gradient
						colors={tabId === tab.id ? ["#0DA6C2", "#0E39C6"] : ["transparent", "transparent"]}
						style={{
							borderColor: "#ffffffaa",
							borderRadius: 8,
							borderWidth: tabId === tab.id ? 0.4 : 0,
						}}
					>
						<Pressable
							key={tab.id}
							style={{
								paddingVertical: 10,
								paddingHorizontal: 20,
							}}
							onPress={() => setTabId(tab.id)}
						>
							<Text
								style={{
									color: tabId === tab.id ? "white" : "white",
									textAlign: "center",
								}}
							>
								{tab.title}
							</Text>
						</Pressable>
					</LinearGradient>
				))}
			</View>
			{tabId === 1 ? <Tab1 /> : tabId === 2 ? <Tab2 /> : <Tab3 />}
		</BackUi>
	);
};
export default Home;

const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: "#19173D",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	tabText: {
		color: "white",
		textAlign: "center",
	},
});
