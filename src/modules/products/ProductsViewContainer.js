import { compose, withState } from 'recompose';

import ProductsScreen from './ProductsView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  ProductsScreen,
);
