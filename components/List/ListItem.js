import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 1,
		borderRadius: 10,
	},
});

const ListItem = ({ item }) => {
	return (
		<View>
			<Text style={styles.item}>{item.text}</Text>
		</View>
	);
};

export default ListItem;
