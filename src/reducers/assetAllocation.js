const initialState = {
    largeCap: 23,
    midSmallCap: 23,
    international: 11,
    bonds: 32,
    cash: 11
};

export default function assetAllocation(state = initialState, action) {
    switch(action.type) {
        case "SET_RISK_PROFILE": {
            switch(action.payload) {
                case 1: {
                    return Object.assign({}, state, {
                        largeCap: 8,
                        midSmallCap: 8,
                        international: 4,
                        bonds: 50,
                        cash: 30
                    });
                }
                case 2: {
                    return Object.assign({}, state, {
                        largeCap: 11,
                        midSmallCap: 11,
                        international: 6,
                        bonds: 47,
                        cash: 25
                    });
                }
                case 3: {
                    return Object.assign({}, state, {
                        largeCap: 15,
                        midSmallCap: 15,
                        international: 7,
                        bonds: 43,
                        cash: 20
                    });
                }
                case 4: {
                    return Object.assign({}, state, {
                        largeCap: 18,
                        midSmallCap: 18,
                        international: 9,
                        bonds: 40,
                        cash: 15
                    });
                }
                case 5: {
                    return Object.assign({}, state, {
                        largeCap: 23,
                        midSmallCap: 23,
                        international: 11,
                        bonds: 32,
                        cash: 11
                    });
                }
                case 6: {
                    return Object.assign({}, state, {
                        largeCap: 27,
                        midSmallCap: 27,
                        international: 14,
                        bonds: 23,
                        cash: 9
                    });
                }
                case 7: {
                    return Object.assign({}, state, {
                        largeCap: 32,
                        midSmallCap: 32,
                        international: 16,
                        bonds: 15,
                        cash: 5
                    });
                }
                case 8: {
                    return Object.assign({}, state, {
                        largeCap: 33,
                        midSmallCap: 33,
                        international: 17,
                        bonds: 12,
                        cash: 5
                    });
                }
                case 9: {
                    return Object.assign({}, state, {
                        largeCap: 35,
                        midSmallCap: 35,
                        international: 17,
                        bonds: 8,
                        cash: 5
                    });
                }
                case 10: {
                    return Object.assign({}, state, {
                        largeCap: 36,
                        midSmallCap: 36,
                        international: 18,
                        bonds: 5,
                        cash: 5
                    });
                }
                default: {
                    return state;
                }
            }
        }
        default: {
            return state;
        }
    }
}