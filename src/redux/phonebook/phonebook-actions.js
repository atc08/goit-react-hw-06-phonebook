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

export default { addContact };
