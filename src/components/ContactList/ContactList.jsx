import React from 'react';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.ContactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          {...contact}
          ondeleteContact={ondeleteContact}
        />
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

export default ContactList;
