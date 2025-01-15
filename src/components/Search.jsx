import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = [
    {id: 1, name: 'John', phone: '123456789'},
    {id: 2, name: 'Jane', phone: '987654321'},
    {id: 3, name: 'Bob', phone: '555555555'},
    {id: 4, name: 'Alice', phone: '111111111'},
    {id: 5, name: 'Charlie', phone: '222222222'},
  ];
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const renderItem = ({item}) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="search contacts.."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filterContacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2d',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#90caf9',
    borderWidth: 1,
    margin: 10,
  },
  listContainer: {
    padding: 20,
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 15,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
});
