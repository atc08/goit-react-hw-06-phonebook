import React from 'react';
import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, ondeleteContact }) => {
  return (
    <li className={s.ContactListItem}>
      <p className={s.ContactListItemText}>
        {name}: {number}
      </p>
      <button type="button" onClick={() => ondeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  ondeleteContact: PropTypes.func,
};

export default ContactListItem;
