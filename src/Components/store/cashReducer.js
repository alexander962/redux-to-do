const defaultState = {
  cash: 0,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

export const cashReducer = (state = defaultState, action) => {
  // определяем тип action
  switch (action.type) {
    case ADD_CASH:
      // первым параметром передаём старое состояние, вторым текущее колличество денег на счету и к этому колличеству денег нам прилетело в action
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({
  type: ADD_CASH,
  payload,
});

export const getCashAction = (payload) => ({
  type: GET_CASH,
  payload,
});
