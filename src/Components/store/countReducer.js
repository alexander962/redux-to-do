const defaultState = {
  count: 0,
};

export const ADD_COUNT = "ADD_COUNT";
export const DELETE_COUNT = "DELETE_COUNT";
export const ASYNC_ADD_COUNT = "ASYNC_ADD_COUNT";
export const ASYNC_DELETE_COUNT = "ASYNC_DELETE_COUNT";

export const countReducer = (state = defaultState, action) => {
  // определяем тип action
  switch (action.type) {
    case ADD_COUNT:
      // первым параметром передаём старое состояние, вторым текущее колличество денег на счету и к этому колличеству денег нам прилетело в action
      return { ...state, count: state.count + 1 };
    case DELETE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const addCountAction = (payload) => ({
  type: ADD_COUNT,
  payload,
});

export const deleteCountAction = (payload) => ({
  type: DELETE_COUNT,
  payload,
});

export const asyncAddCountAction = (payload) => ({
  type: ASYNC_ADD_COUNT,
  payload,
});

export const asyncDeleteCountAction = (payload) => ({
  type: ASYNC_DELETE_COUNT,
  payload,
});
