import {FlatList, Text} from 'react-native';
import React from 'react';
import ContactItem from '../../components/ContactItem';
import {users} from './userInfoContact';
import {style} from './style';

const ContactListScreen = () => {
  const renderItem = ({item}) => (
    <ContactItem name={item.name} email={item.email} />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Text style={style.heading}>Contacts</Text>}
      contentContainerStyle={style.list}
    />
  );
};

export default ContactListScreen;
