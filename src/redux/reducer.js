import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';
import productsReducer from '../store/reducers/products';
import customers from '../store/reducers/customers'
export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
  products: productsReducer,
});
