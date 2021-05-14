import React from "react";
import { TextInput, View } from "react-native";

// Search input Component
const SearchInput = ({ onChangeText }) => {
	return (
		<View>
			<TextInput
				placeholder="Search..."
				onChangeText={onChangeText}
				style={{ padding: 8, border: "2px solid black" }}
			/>
		</View>
	);
};

export default SearchInput;
