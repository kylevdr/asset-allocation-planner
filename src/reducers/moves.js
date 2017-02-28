import text from '../text/text';

const initialState = {
    ideals: {},
    moves: []
};

export default function userInfo(state = initialState, action) {
  switch(action.type) {
    case "CALCULATE_MOVES": {

      // Declare variables
      let { userInfo, assetAllocation } = action.payload;
      let ideals = {
        largeCap: 0,
        midSmallCap: 0,
        international : 0,
        bonds: 0,
        cash: 0
      };
      let deltas = {};
      let moves = [];

      // Define helper functions
      function getLargestKey(object) {
        let largestValue = 0;
        let largestKey = '';
        for (let key in object) {
          if (object[key] > largestValue) {
            largestValue = object[key];
            largestKey = key;
          }
        }
        return { key: largestKey, value: largestValue};
      }

      function getSmallestKey(object) {
        let smallestValue = 0;
        let smallestKey = '';
        for (let key in object) {
          if (object[key] < smallestValue) {
            smallestValue = object[key];
            smallestKey = key;
          }
        }
        return { key: smallestKey, value: smallestValue };
      }

      // Calculate ideals and deltas
      for (let key in ideals) {
        ideals[key] = userInfo.total * assetAllocation[key] / 100;
        deltas[key] = userInfo[key] - ideals[key];
      }

      // Determine fewest moves
      while (getSmallestKey(deltas).value < -.001) {
        let moveFrom = getLargestKey(deltas).key;
        let moveTo = getSmallestKey(deltas).key;
        let moveAmount = 0;
        if (deltas[moveTo] + deltas[moveFrom] > 0) {
          moveAmount = 0 - deltas[moveTo];
        } else {
          moveAmount = deltas[moveFrom];
        }
        moves.push(`${text.move} ${text.currency}${moveAmount.toFixed(2)} ${text.from} ${text[moveFrom]} ${text.to} ${text[moveTo]}.`);
        deltas[moveFrom] -= moveAmount;
        deltas[moveTo] += moveAmount;
      }

      // Return new state
      return Object.assign({}, state, { ideals, moves });
    }
    default: {
      return state;
    }
  }
}