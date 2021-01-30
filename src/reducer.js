export const initialState = {
  basket: [],
  user: null,
}

export const getBasketTotal = basket =>
  basket.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item, i) => i !== action.id),
      }
    default:
      return state
  }
}

export default reducer
