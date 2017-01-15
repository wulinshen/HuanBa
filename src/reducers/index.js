import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

import CartReducer from './CartReducer';

import ItemFormReducer from './ItemFormReducer';
import ItemReducer from './ItemReducer';

import OwnerFormReducer from './OwnerFormReducer';
import OwnerReducer from './OwnerReducer';





export default combineReducers({
  auth: AuthReducer,

  cart: CartReducer,

  itemForm: ItemFormReducer,
  itemsData: ItemReducer,

  ownerForm: OwnerFormReducer,
  ownersData: OwnerReducer
});
