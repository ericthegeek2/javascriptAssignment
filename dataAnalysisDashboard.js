const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
];


/*const currentDate = new Date("2024-05-17T00:00:00"); // Assuming today's date for comparison
const usersWithRecentPosts = users.filter(user =>
  user.posts.some(post => (currentDate - new Date(post.timestamp) ) / (1000 * 60 * 60 * 24) <= 7)
);
console.log(usersWithRecentPosts)

const namesOfUsersPostedRecent = usersWithRecentPosts.map((usersWithRecentPosts) =>{
  return usersWithRecentPosts.name
})
console.log(namesOfUsersPostedRecent);

namesOfUsersPostedRecent.forEach(element => {
   console.log(`${element} posted atleast once in the past week`);
});



const usersWithLessLikes = usersWithRecentPosts.filter((usersWithRecentPosts) =>(
   usersWithRecentPosts.posts.some(() =>{
    return usersWithRecentPosts
   })
))

const usersWithLessLikesArray = usersWithLessLikes.map((usersWithLessLikes) =>{
  return usersWithLessLikes.name
})

console.log(usersWithLessLikesArray);*/

const analyzeSocialMediaData = (users) => {
  const oneWeekAgo = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);

  // Step 1: Identify active users who posted at least once in the past week
  const activeUsers = users.filter(user => 
    user.posts.some(post => new Date(post.timestamp) > oneWeekAgo)
  );
  
 



// Step 2: Filter out posts with fewer than 10 likes
const activeUsersWithPopularPosts = activeUsers.map(user => ({
  ...user,
  popularPosts: user.posts.filter(post => post.likes >= 10)
}));

// Step 3: Calculate average likes per active user for their popular posts
const { totalLikes, totalPopularPosts } = activeUsersWithPopularPosts.reduce(
  (acc, user) => {
    const userLikes = user.popularPosts.reduce((sum, post) => sum + post.likes, 0);
    return {
      totalLikes: acc.totalLikes + userLikes,
      totalPopularPosts: acc.totalPopularPosts + user.popularPosts.length
    };
  },
  { totalLikes: 0, totalPopularPosts: 0 }
);

const numActiveUsers = activeUsersWithPopularPosts.length;
const averageLikesPerUser = numActiveUsers > 0 ? totalLikes / numActiveUsers : 0;

return {
  num_active_users: numActiveUsers,
  total_popular_posts: totalPopularPosts,
  average_likes_per_user: averageLikesPerUser
};
}
const result = analyzeSocialMediaData(users);
console.log(result);


  
  
    


