import React from "react";
import { Button, View } from "react-native";

const AddButton = ({ data, submitHandler }) => {
	//function to get random item from list of items
	const getRandomItem = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr?.length);

		const item = arr[randomIndex];
		return item;
	};
	// random item to add
	const randomItem = getRandomItem(data);

	return (
		<View>
			<Button
				color="black"
				onPress={() => submitHandler(randomItem)}
				title="+"
			/>
		</View>
	);
};

export default AddButton;
