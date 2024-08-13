import BackUi from "@/components/BackUi";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, Image, Modal, Text, View, StyleSheet } from "react-native";

export default function Index() {
	const [visible, setVisible] = useState(true);
	const handleAccess = () => {
		setVisible(false);
		router.navigate("/email");
	};
	return (
		<BackUi>
			<Modal visible={visible} transparent={true}>
				<View style={styles.centeredView}>
					<View style={styles.modal}>
						<Image source={require("../assets/images/shield.png")} style={styles.image} />
						<Button title="Access" onPress={handleAccess} color="#8D8BFF" />
					</View>
				</View>
			</Modal>
		</BackUi>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modal: {
		width: 200,
		height: 300,
		backgroundColor: "#EAF1F9",
		borderRadius: 10,
		opacity: 0.8,
		alignItems: "center",
	},
	image: {
		textAlign: "center",
	},
	access: {
		textAlign: "center",
		fontSize: 20,
	},
	accessContainer: { backgroundColor: "#8D8BFF", padding: 10, borderRadius: 10, marginTop: 20 },
});
