// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname)); // Serve static files like page2.html
app.use(express.json()); // Parse JSON bodies

const postsFile = path.join(__dirname, 'posts.json');

// Helper: Read posts
function readPosts() {
  try {
    const data = fs.readFileSync(postsFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper: Write posts
function writePosts(posts) {
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

// Get all posts
app.get('/api/posts', (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

// Add a new post
app.post('/api/posts', (req, res) => {
  const { username, content } = req.body;
  if (!username || !content) {
    return res.status(400).json({ error: 'Username and content required' });
  }

  const posts = readPosts();
  const newPost = {
    id: Date.now(),
    username,
    content,
    timestamp: new Date().toISOString()
  };
  posts.push(newPost);
  writePosts(posts);
  res.json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
