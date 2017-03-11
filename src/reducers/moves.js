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
        international: 0,
        bonds: 0,
        cash: 0
      };
      let deltas = [];
      let moves = [];

      // Calculate ideals and deltas
      for (let key in ideals) {
        ideals[key] = userInfo.total * assetAllocation[key] / 100;
        deltas.push({
          key: key,
          value: userInfo[key] - ideals[key]
        });
      }

      // Sort deltas from least to greatest value
      deltas.sort((a, b) => a.value - b.value);

      // Determine fewest transactions
      while (deltas[0].value < -.001) {
        /*
         * Transaction will move money from category with most positive delta
         * to category with most negative delta
         */
        let moveFrom = deltas[deltas.length - 1].key;
        let moveTo = deltas[0].key;
        /*
         * If "move from" category needs to give more money than "move to" category needs
         * to receive, move amount will be the value that "move to" category needs to receive.
         * Else if "move to" category needs to receive more money than "move from" category
         * has to give, move amount will be the value that "move from" category has to give.
         */
        let moveAmount = 0;
        if (deltas[0].value + deltas[deltas.length - 1].value > 0) {
          moveAmount = 0 - deltas[0].value;
        } else {
          moveAmount = deltas[deltas.length - 1].value;
        }
        // Add text for the transaction to the moves array to be displayed in NextSteps component
        moves.push(`${text.move} ${text.currency}${moveAmount.toFixed(2)} ${text.from} ${text[moveFrom]} ${text.to} ${text[moveTo]}.`);
        // Simulate the transaction
        deltas[deltas.length - 1].value -= moveAmount;
        deltas[0].value += moveAmount;
        // Re-sort deltas with new values
        deltas.sort((a, b) => a.value - b.value);
      }

      // Return new state
      return Object.assign({}, state, { ideals, moves });
    }
    default: {
      return state;
    }
  }
}