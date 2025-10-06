// Load posts from localStorage
let forumPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];

// Function to display posts
function displayForumPosts() {
    const feed = document.getElementById("forum-feed");
    feed.innerHTML = ""; // clear existing posts

    forumPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            <p><strong>${post.username}</strong></p>
            <p>${post.content}</p>
            <p class="meta">${post.timestamp}</p>
        `;
        feed.appendChild(postDiv);
    });
}

// Function to add a post
function addForumPost(content) {
    const currentUser = localStorage.getItem("loggedInUser");
    if (!currentUser) {
        alert("You must be logged in to post!");
        return;
    }

    if (!content.trim()) {
        alert("Cannot post empty content!");
        return;
    }

    const timestamp = new Date().toLocaleString();
    forumPosts.push({
        username: currentUser,
        content: content,
        timestamp: timestamp
    });

    localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
    displayForumPosts();
}

// Initialize on page load
window.onload = displayForumPosts;
