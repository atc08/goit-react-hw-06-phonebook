import React from 'react';
import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, ondeleteContact }) => {
  return (
    <>
      <p className={s.ContactListItemText}>
        {name}: {number}
      </p>
      <button type="button" onClick={() => ondeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  ondeleteContact: PropTypes.func,
};

export default ContactListItem;
