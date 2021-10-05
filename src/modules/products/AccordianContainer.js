import { connect } from 'react-redux';
import { toggleGreen } from '../../store/actions/products';
import Accordian from './Accordian';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const mapDispatchToProps = dispatch => ({
 toggleGreen: productId => {
 	dispatch(toggleGreen(productId));
 }
});

export default connect(null, toggleGreen)(Accordian);