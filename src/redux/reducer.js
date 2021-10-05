import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';
import products from '../store/reducers/products';
export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
  products,
});
