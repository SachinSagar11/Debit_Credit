
import { DEPOSIT, CREDIT } from './action';

const initialState = {
  balance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        balance: state.balance + action.amount
      };
    case CREDIT:
      return {
        balance: state.balance - action.amount
      };
    default:
      return state;
  }
};

export default reducer;