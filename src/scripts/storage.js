const games = [
    {name: 'Settlers of Catan', id: 1},
    {name: 'Monopoly', id: 2},
    {name: 'Candy land', id: 3},
    {name: 'Snow White', id: 4},
    {name: 'Exploding Kittens', id: 5},
    {name: 'Cave Man Poetry', id: 6},
    {name: 'Forbidden Desert', id: 7},
]
const members = [
    {name: 'Adam', id: 1},
    {name: 'Benjamin', id: 2},
    {name: 'Caleb', id: 3},
    {name: 'Dan', id: 4},
    {name: 'Ethan', id: 5},
    {name: 'Frank', id: 6},
    {name: 'Gideon', id: 7},
    {name: 'Millie', id: 8},
]
const sessions = [
    {name: 'Date Night', sessionDate: '2024-07-04', gameId: 3, memberIds: [1,8]},
    {name: 'Forbidden Desert 20', sessionDate: '2024-06-03', gameId: 7, memberIds: [5,6,7]},
    {name: 'Date Night', sessionDate: '2024-07-11', gameId: 3, memberIds: [8, 1]},
]

window.storage = {
    games: games,
    members: members,
    sessions: sessions,
    default: {
        games: games,
        members: members,
        sessions: sessions,
    },

    saveToLocalStorage: () => {
        localStorage.setItem('games', JSON.stringify(storage.games))
        localStorage.setItem('members', JSON.stringify(storage.members))
        localStorage.setItem('sessions', JSON.stringify(storage.sessions))
    },
    loadFromLocalStorage: () => {
        try {
            storage.games = JSON.parse(localStorage.getItem('games')) ?? games
            storage.members = JSON.parse(localStorage.getItem('members')) ?? members
            storage.sessions = JSON.parse(localStorage.getItem('sessions')) ?? sessions
        } catch (e) {
            console.error('Error loading from local storage')
        }

    }
}

storage.loadFromLocalStorage()
