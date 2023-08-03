/**
 * @link https://leetcode.com/problems/design-twitter/
 */
class Twitter {
	follows: {[userId: string]: Set<number>} = {};
	tweets: number[][] = [];


	postTweet(userId: number, tweetId: number): void {
		this.tweets.push([userId, tweetId]);
	};


	getNewsFeed(userId: number): number[] {
		const tweetIds: number[] = [];
		const followerIds = this.follows[userId] || new Set();
		followerIds.add(userId);

		for (let i = this.tweets.length - 1; i >= 0; i--) {
			if (tweetIds.length === 10) break;
			if (followerIds.has(this.tweets[i][0]))
				tweetIds.push(this.tweets[i][1]);
		};

		return tweetIds;
	};


	follow(followerId: number, followeeId: number): void {
		if (!(followerId in this.follows)) this.follows[followerId] = new Set();
		this.follows[followerId].add(followeeId);
	};


	unfollow(followerId: number, followeeId: number): void {
		if (!(followerId in this.follows)) return;
		this.follows[followerId].delete(followeeId);
	};
};
