// Check if there is already a posts array in localStorage
let forumPosts = JSON.parse(localStorage.getItem('forumPosts')) || [];

// Function to add a new post
function addPost(username, message) {
  const post = {
    username: username || "Anonymous", // anyone can post, default to Anonymous
    message: message,
    timestamp: new Date().toLocaleString()
  };
  forumPosts.push(post);
  localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

// Function to get all posts
function getPosts() {
  return forumPosts;
}
