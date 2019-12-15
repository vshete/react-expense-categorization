export default function reducer({count, ...restProps} = {count: 0,expenses: []}, {type, payload}) {
  switch (type) {
    case 'INCREMENT':
      return {count: count + 1, ...restProps}
    case 'DECREMENT':
      return {count: count - 1, ...restProps}
    case 'ADD_EXPENSE':
      addExpense(restProps, payload)
      return {count, ...restProps}
    default:
      return {count, ...restProps}
  }
}

function addExpense(restProps, payload) {
  if(restProps.expenses) {
    restProps.expenses.push({amount: payload.amount})
  } else {
    restProps.expenses = [{amount :payload.amount}];
  }
}
