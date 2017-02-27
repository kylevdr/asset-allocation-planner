const initialState = {
    riskProfile: 5,
    largeCap: 0,
    midSmallCap: 0,
    international: 0,
    bonds: 0,
    cash: 0
};

export default function userInfo(state = initialState, action) {
  switch(action.type) {
    case "SET_RISK_PROFILE": {
      return Object.assign({}, state, {riskProfile: action.payload});
    }
    default: {
      return state;
    }
  }
}