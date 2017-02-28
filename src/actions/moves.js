export function calculateMoves(userInfo, assetAllocation) {
	return {
		type: 'CALCULATE_MOVES',
		payload: {userInfo, assetAllocation}
	};
}