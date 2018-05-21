// Callbacks
// Promises
// Async/await

console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayUser(user) {
    // Get the repositories.
    getRepositories(user.githubUsername, displayRepos);
}

function displayRepos(repos) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(
        () => {
            console.log('Reading a user from a database...');
            callback({ id: id, githubUsername: 'ttma1046' });
        }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(
        () => {
            console.log('Reading a repos for a user from a database...');
            callback(['repo1', 'repo2', 'repo3']);
        }, 2000);
}