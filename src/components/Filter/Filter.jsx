import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Enter name for search"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
