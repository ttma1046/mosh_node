console.log('Before');
getUser(1, user => {

        console.log('User', user)
        // Get the repositories.
        getRepositories(user.githubUsername, repos =>
            console.log('Repos', repos)
        );
    }
);
console.log('After');

// Callbacks
// Promises
// Async/await

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