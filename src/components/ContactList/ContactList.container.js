import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import ContactList from './ContactList';

const getFilteredContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilteredContact(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  ondeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
