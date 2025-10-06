// Shared forum posts storage
let forumPosts = JSON.parse(localStorage.getItem('forumPosts')) || [];

// Add a new post
function addForumPost(username, message) {
  const post = {
    username: username || "Anonymous",
    message: message,
    timestamp: new Date().toLocaleString()
  };
  forumPosts.push(post);
  localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

// Get all posts
function getForumPosts() {
  return forumPosts;
}
