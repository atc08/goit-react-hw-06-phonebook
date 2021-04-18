import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/add', addedContact => ({
  payload: {
    id: uuidv4(),
    ...addedContact,
  },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

export { addContact, deleteContact, changeFilter };
