/**
 * @link https://leetcode.com/problems/course-schedule-ii/
 */
const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
	const order = new Set<number>();
	const prereqs = Array.from({length : numCourses}, () => []);
	const visited = new Set<number>();
	for (let [course, prereq] of prerequisites) prereqs[course].push(prereq);


	const dfs = (course : number) => {
		 if (visited.has(course)) return false;
		 if (!prereqs[course].length){
			  order.add(course);
			  return true;
		 };

		 visited.add(course);
		 for (let prereq of prereqs[course]) {
			  if (!dfs(prereq)) return false;
		 };

		 order.add(course);
		 visited.delete(course);
		 prereqs[course] = [];
		 return true;
	};


	for (let course = 0; course < numCourses; course++) {
		 if (!dfs(course)) return [];
	};

	return Array.from(order);
};