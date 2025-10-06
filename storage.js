// storage.js

// Save a new user
function saveUser(username, password) {
    localStorage.setItem("user_" + username, password);
}

// Get a user's password
function getUser(username) {
    return localStorage.getItem("user_" + username);
}

// Save current logged-in user
function setLoggedInUser(username) {
    localStorage.setItem("loggedInUser", username);
}

// Get current logged-in user
function getLoggedInUser() {
    return localStorage.getItem("loggedInUser");
}

// Log out current user
function logoutUser() {
    localStorage.removeItem("loggedInUser");
}
