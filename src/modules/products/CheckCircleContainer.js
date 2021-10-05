// /container/counterContainer.js

import { connect } from 'react-redux'
import toggle from './CheckCircle'
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => {
   return {
      toggle: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      toggle: (id) => dispatch(toggle(id)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(toggle);