import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subcategory: subcategoryReducer,
  products: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
});

export default rootReducer;
