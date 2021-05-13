import React from "react";
import { Button, View } from "react-native";

const AddButton = ({ data, submitHandler }) => {
	const getRandomItem = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr?.length);

		const item = arr[randomIndex];
		return item;
	};
	const randomItem = getRandomItem(data);

	return (
		<View>
			<Button
            color="black"
            onPress={() => submitHandler(randomItem)} title="+" />
		</View>
	);
};

export default AddButton;
