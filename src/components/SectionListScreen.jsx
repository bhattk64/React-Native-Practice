import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Banana'},
      {id: 3, name: 'Cherry'},
    ],
  },

  {
    title: 'Vegetables',
    data: [
      {id: 4, name: 'carrot'},
      {id: 5, name: 'potato'},
      {id: 6, name: 'Tomato'},
    ],
  },
];
const SectionListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View style={styles.headers}>
      <Text style={styles.headerstitles}>{section.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingTop: 15,
  },
  item: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
  },

  title: {
    backgroundColor: 'Blue',
    padding: 7,
    fontSize: 16,
  },
  headers: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  headerstitles: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
