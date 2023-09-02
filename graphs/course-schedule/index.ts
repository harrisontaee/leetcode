/**
 * @link https://leetcode.com/problems/course-schedule/
 */
const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
	const visited = new Set<number>();
	const graph = Array.from({length: numCourses}, () => new Set<number>());
	for (let [prereq, course] of prerequisites) graph[course].add(prereq);


	const dfs = (course: number): boolean => {
		 if (visited.has(course)) return false;
		 if (!graph[course].size) return true;
		 visited.add(course);

		 for (let prereq of graph[course]) {
			  if (!dfs(prereq)) return false;
		 };

		 visited.delete(course);
		 graph[course].clear();
		 return true;
	};


	for (let course = 0; course < numCourses; course++) {
		 if (!dfs(course)) return false;
	};

	return true;
};