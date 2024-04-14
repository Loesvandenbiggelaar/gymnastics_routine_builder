export function roundValue(val) {
	return (Math.round(parseFloat(val) * 100) / 100).toFixed(2);
}

// for calculating the difficulty, we are not interested in combinations. So we can flatten the routine.
export function flatten_routine(routine) {
	return routine.flat();
}
