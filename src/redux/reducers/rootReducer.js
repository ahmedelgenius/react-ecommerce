import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
const rootReducer = combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subcategory: subcategoryReducer,
  products: productReducer,
});

export default rootReducer;
