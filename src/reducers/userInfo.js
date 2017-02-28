const initialState = {
    riskProfile: 5,
    largeCap: 0,
    midSmallCap: 0,
    international: 0,
    bonds: 0,
    cash: 0,
    total: 0,
};

export default function userInfo(state = initialState, action) {
  switch(action.type) {
    case "SET_RISK_PROFILE": {
      return Object.assign({}, state, {riskProfile: action.payload});
    }
    case "SET_CURRENT_ALLOCATION": {
      // Calculate new total
      let total = 0;
      for (let key in state) {
        if (key !== "riskProfile" && key !== "total" && key !== action.payload.key) {
          total += state[key];
        }
      }
      total += action.payload.value;

      // Return new state with updated info from form and new total
      return Object.assign({}, state, {[action.payload.key]: action.payload.value}, {total});
    }
    default: {
      return state;
    }
  }
}