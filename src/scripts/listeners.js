// Add event listeners for buttons.
const gamesButton = document.getElementById('gamesButton');
gamesButton.addEventListener('click', window.games.render);

const membersButton = document.getElementById('membersButton');
membersButton.addEventListener('click', window.members.render);

const sessionsButton = document.getElementById('sessionsButton');
sessionsButton.addEventListener('click', window.sessions.render);

//Click the games button to set the default view for our app
if (storage.games.length == 0){
    setTimeout(window.games.render, 500);
} else {
    gamesButton.dispatchEvent(new Event('click'));
};

document.body.addEventListener('deleteGame', (evt) => {
    storage.games = storage.games.filter(g => g.id !== evt.detail.id)
    storage.saveToLocalStorage()
    window.games.render()
});

document.body.addEventListener('deleteMember', (evt) => {
    storage.members = storage.members.filter(m => m.id !== evt.detail.id)
    storage.saveToLocalStorage()
    window.members.render()
});

document.body.addEventListener('deleteSession', (evt) => {
    storage.sessions = storage.sessions.filter(s => s.id !== evt.detail.id)
    storage.saveToLocalStorage()
    window.sessions.render()
});

document.body.addEventListener('addGame', (evt) => {
    const nextId = Math.max(...window.storage.games.map(g => g.id)) + 1
    console.log('ID where are you?', nextId);
    console.log('addGame', evt);
    storage.games.push({
        name: evt.detail.form.get('name'),
        id: nextId,
        genre: evt.detail.form.get('genre'),
        type: evt.detail.form.get('type'),
        numPlayers: evt.detail.form.get('numPlayers'),
        storageLocations: evt.detail.form.get('storageLocation')
    });
    storage.saveToLocalStorage()
    window.games.render();
});

//Listen for the event add member button
document.body.addEventListener('addMember', (evt) => {
    console.log('addMember', evt);
    storage.members.push({
        name: evt.detail.form.get('name'), 
        age: evt.detail.form.get('age'), 
        id: new Date().getTime() 
    });
    storage.saveToLocalStorage()
    window.members.render();
});

//Listener Event for the add session button 
document.body.addEventListener('addSession', (evt) => {
    console.log('addSession', evt);
    storage.sessions.push({
        name: evt.detail.form.get('description'),
        sessionDate: evt.detail.form.get('date'),
        gameId: evt.detail.form.get('gameId'),
        memberIds: evt.detail.form.getAll('memberIds'),
        id: new Date().getTime() 
    });
    storage.saveToLocalStorage()
    window.sessions.render();
});