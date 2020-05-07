import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/header/Header';
import ListItem from './components/listitem/ListItem';
import AddItem from './components/additem';
import UUIDGenerator from 'react-native-uuid-generator';
const App = () => {
	const [ items, setItems ] = useState([
		{ id: UUIDGenerator.getRandomUUID(), text: 'milk' },
		{ id: UUIDGenerator.getRandomUUID(), text: 'eggs' },
		{ id: UUIDGenerator.getRandomUUID(), text: 'bread' },
		{ id: UUIDGenerator.getRandomUUID(), text: 'juice' }
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id !== id);
		});
	};

	const addItem = (text) => {
		if (!text) {
			Alert.alert('Error', 'Enter the item to add in the list', [ { text: 'ok' } ], { cancelable: true });
		} else {
			setItems((prevItems) => {
				return [ { id: UUIDGenerator.getRandomUUID(), text }, ...prevItems ];
			});
		}
	};

	return (
		<View style={styles.container}>
			<Header />
			<AddItem addItem={addItem} />
			<FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default App;
