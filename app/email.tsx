import BackUi from "@/components/BackUi";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Button, View, TextInput } from "react-native";

const Email = () => {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [otpVisible, setOtpVisible] = useState(false);
	const sendOtp = () => {
		setOtpVisible(true);
	};

	const handleSubmit = () => {
		router.navigate("/home");
	};

	return (
		<BackUi style={{}}>
			{otpVisible ? (
				<>
					<TextInput value={otp} onChangeText={setOtp} placeholder="OTP" style={styles.input} />
					<Button title="Submit" onPress={handleSubmit} color="#8D8BFF" />
					<Pressable style={{ marginTop: 20 }} onPress={() => setOtpVisible(false)}>
						<Text style={{ color: "white", textAlign: "center" }}>Change Email?</Text>
					</Pressable>
				</>
			) : (
				<>
					<TextInput
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
						style={styles.input}
					/>
					<Button title="Sent OTP" onPress={sendOtp} color="#8D8BFF" />
				</>
			)}
		</BackUi>
	);
};

export default Email;

const styles = StyleSheet.create({
	input: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 50,
		marginTop: 200,
		marginBottom: 20,
		padding: 10,
	},
});
