import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = addedContact => ({
  type: types.ADD,
  // payload: addedContact,
  payload: {
    id: uuidv4(),
    addedContact,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

export default { addContact, deleteContact, changeFilter };
