// Add event listeners for buttons.
const gamesButton = document.getElementById('gamesButton');
gamesButton.addEventListener('click', window.games.render);

const membersButton = document.getElementById('membersButton');
membersButton.addEventListener('click', window.family.render);

const sessionsButton = document.getElementById('sessionsButton');
sessionsButton.addEventListener('click', window.sessions.render);

//Click the games button to set the default view for our app
gamesButton.dispatchEvent(new Event('click'));

document.body.addEventListener('deleteGame', (evt) => {
    storage.games = storage.games.filter(g => g.id !== evt.detail.id)
    storage.saveToLocalStorage()
    window.games.render()
});

document.body.addEventListener('addGame', (evt) => {
    console.log('add', evt);
    storage.games.push({name: evt.detail.form.get('name'), id: new Date().getTime() });
    storage.saveToLocalStorage()
    window.games.render();
});