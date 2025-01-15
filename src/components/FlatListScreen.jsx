import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {id: 1, title: 'Item1'},
  {id: 2, title: 'Item2'},
  {id: 3, title: 'Item3'},
  {id: 4, title: 'Item4'},
  {id: 5, title: 'Item5'},
  {id: 6, title: 'Item6'},
  {id: 7, title: 'Item7'},
  {id: 8, title: 'Item8'},
  {id: 9, title: 'Item9'},
  {id: 10, title: 'Item10'},
];

const FlatListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>r
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    paddingTop: 15,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: 'gray',
    borderWidth: 10,
    borderColor: 'yellow',
    padding: 6,
    marginVertical: 10,
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
export default FlatListScreen;
