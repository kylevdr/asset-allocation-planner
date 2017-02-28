export function setRiskProfile(value) {
	return {
		type: 'SET_RISK_PROFILE',
		payload: value
	};
}

export function setCurrentAllocation(name, value) {
	return {
		type: 'SET_CURRENT_ALLOCATION',
		payload: {
			key: name,
			value: Number(value)
		}
	};
}