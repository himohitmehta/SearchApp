import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AddButton from "./components/Button/AddButton";
import SearchInput from "./components/Inputs/search";
import ListItem from "./components/List/ListItem";

const styles = StyleSheet.create({
	container: {
		
		backgroundColor: "#fff",
    padding:40
  }
});

// list of items
const data = [
	{ text: "Buy Coffee", key: "1" },
	{ text: "Create an App", key: "2" },
	{ text: "Play Fortnite", key: "3" },
	{ text: "Bring that table", key: "4" },
	{ text: "Watch Cricket", key: "5" },
	{ text: "Sleep", key: "6" },
  { text: "Listen Music", key: "7" },
  { text: "Run", key: "8" },
  { text: "Learn Something New", key: "9" },
];

export default function App() {
	// the default list
	const [words, setWords] = useState(data);
	// search filter list
	const [wordFilter, setWordFilter] = useState(data);

	// function to update list as the input in the search bar changes

	const searchUser = (text) => {
		setWordFilter(() =>
			words.filter((i) => i.text.toLowerCase().includes(text.toLowerCase())),
		);
	};
	// function to add item to both the lists
	const submitHandler = ({ text }) => {
		setWords((prevWords) => {
			return [{ text, key: Math.random().toString() }, ...prevWords];
		});
		setWordFilter((prevWords) => {
			return [{ text, key: Math.random().toString() }, ...prevWords];
		});
	};

	return (
    // Container for the screen
		<View style={styles.container}>
      {/* Container for search and add button */}
			<View style={{  display:'flex', flexDirection:'row' }}>
				<View style={{
          flexGrow:2, padding:8
        }}>
          {/* Search Bar  */}
					<SearchInput
						onChangeText={(text) => {
							searchUser(text);
						}}
					/>
				</View>
				<View style={{
          flexGrow:1,
          padding:8
        }}>
          {/* Add Button */}
					<AddButton data={words} submitHandler={submitHandler} />
				</View>
			</View>
			<View>
        {/* List of items */}
				<FlatList
					data={wordFilter}
					renderItem={({ item }) => <ListItem item={item} />}
				/>
			</View>
		</View>
	);
}
