/**
 * @link https://leetcode.com/problems/task-scheduler/
 */
const leastInterval = (tasks: string[], n: number): number => {
	const freqs = new Map<string, number>();
	for (let task of tasks) freqs.set(task, (freqs.get(task) || 0) + 1);

	const max = Math.max(...freqs.values());
	const maxes = [...freqs.values()].reduce((acc, freq) => acc + (freq === max ? 1 : 0), 0);
	return Math.max((max - 1) * (n + 1) + maxes, tasks.length);
};
