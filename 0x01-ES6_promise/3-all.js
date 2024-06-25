export default handleProfileSignup {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photo, user]) => {
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(error => {
            console.error('Signup system offline');
        });
}
