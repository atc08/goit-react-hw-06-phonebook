import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
