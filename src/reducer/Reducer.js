const initialState = {
  count: 0,
  expenses: []
};

export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'INCREMENT':
      state.count += 1;
      return state;
    case 'DECREMENT':
      state.count += 1;
      return state;
    case 'ADD_EXPENSE':
      return Object.assign({}, state, {
        expenses: state.expenses.concat(payload)
      })
    default:
      return state
  }
}
