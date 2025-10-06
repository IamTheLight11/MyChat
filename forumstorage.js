// forumstorage.js
// This script manages storing and retrieving forum posts

// Load posts from localStorage or initialize empty array
function getForumPosts() {
    let posts = localStorage.getItem("forumPosts");
    if (posts) {
        return JSON.parse(posts);
    }
    return [];
}

// Save posts array to localStorage
function saveForumPosts(posts) {
    localStorage.setItem("forumPosts", JSON.stringify(posts));
}

// Add a new post
function addForumPost(username, content) {
    let posts = getForumPosts();
    posts.unshift({ username, content, timestamp: new Date().toLocaleString() });
    saveForumPosts(posts);
}
