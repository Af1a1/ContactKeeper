import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAT_FILTER,
} from '../type';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Aflal Ahamed',
        email: 'aflalahamed@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Cristiano Ronaldo',
        email: 'cristianoronaldo@gmail.com',
        phone: '111-222-1111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Lionel messi',
        email: 'messi@gmail.com',
        phone: '111-333-1111',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contact

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
