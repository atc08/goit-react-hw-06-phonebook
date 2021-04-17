import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            ondeleteContact={() => ondeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  ondeleteContact: PropTypes.func,
};

const getFilteredContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(
    contact => console.log(contact.name),
    // contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilteredContact(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  ondeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
