import { View, StyleSheet } from "react-native";

const BackUi = ({ children, style }: { children: any; style?: any }) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default BackUi;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#262450",
		padding: 10,
	},
});
