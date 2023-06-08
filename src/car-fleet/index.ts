/**
 * @link https://leetcode.com/problems/car-fleet/
 */
export function carFleet(target: number, position: number[], speed: number[]): number {
	let fleets = 0;
	let minTime = -Infinity;

	position
		.map((p, i) => ({distance: target - p, speed: speed[i]}))
		.sort((a, b) => a.distance - b.distance)
		.forEach(car => {
			const time = car.distance / car.speed;
			if (time <= minTime) return;
			minTime = time;
			fleets++;
		});

	return fleets;
};