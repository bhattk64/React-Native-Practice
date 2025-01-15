import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {id: 1, title: 'Item 1'},
  {id: 2, title: 'Item 2'},
  {id: 3, title: 'Item 3'},
  {id: 4, title: 'Item 4'},
  {id: 5, title: 'Item 5'},
  {id: 6, title: 'Item 6'},
  {id: 7, title: 'Item 7'},
  {id: 8, title: 'Item 8'},
  {id: 9, title: 'Item 9'},
  {id: 10, title: 'Item 10'},
  {id: 11, title: 'Item 11'},
  {id: 12, title: 'Item 12'},
  {id: 13, title: 'Item 13'},
  {id: 14, title: 'Item 14'},
  {id: 15, title: 'Item 15'},
  {id: 16, title: 'Item 16'},
  {id: 17, title: 'Item 17'},
  {id: 18, title: 'Item 18'},
  {id: 19, title: 'Item 19'},
  {id: 20, title: 'Item 20'},
];

const Grid = () => {
  return (
    <View style={style.maincontainer}>
      <Text style={style.heading}>Grid</Text>
      <ScrollView contentContainerStyle={style.container}>
        {data.map(item => (
          <View key={item.id} style={style.gridItem}>
            <Text style={style.itemText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '48%',
    height: 100,
    backgroundColor: '#f8f9',
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default Grid;
