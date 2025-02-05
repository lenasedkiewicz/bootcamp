/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getHotDeal = ({ hotDealsProduct }) => hotDealsProduct;
export const getPromotedProduct = ({ promotedProduct }) => promotedProduct;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(product => product.isCompare);

/* actions */
const createActionName = actionName => `app/lists/${actionName}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');
const SET_STARS_VALUE = createActionName('SET_STARS_VALUE');
const SET_USER_RATING = createActionName('SET_USER_RATING');

/* action creators */

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  payload,
});

export const toggleCompare = payload => ({
  type: TOGGLE_COMPARE,
  payload,
});

export const setStarsValue = payload => ({
  type: SET_STARS_VALUE,
  payload,
});

export const setRating = payload => ({
  type: SET_USER_RATING,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(products =>
        products.id === action.payload
          ? { ...products, isFavorite: !products.isFavorite }
          : products
      );
    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isCompare: !product.isCompare }
          : product
      );
    case SET_STARS_VALUE:
      return statePart.map(products =>
        products.id === action.payload.id
          ? { ...products, stars: action.payload.starsNumber }
          : products
      );
    case SET_USER_RATING:
      return statePart.map(products =>
        products.id === action.payload ? { ...products, userRating: true } : products
      );
    default:
      return statePart;
  }
}
