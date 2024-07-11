const games = [
    {name: 'Settlers of Catan', id: 1, genre: 'Board Game', type: 'Multiplayer', numPlayers: '2-8', storageLocation: 'Toy Room'},
    {name: 'Monopoly', id: 2, genre: 'Board Game', type: 'Multiplayer', numPlayers: '2-8', storageLocation: 'Storage Room'},
    {name: 'Candy land', id: 3, genre: 'Board Game', type: 'Multiplayer', numPlayers: '2-8', storageLocation: 'Toy Room'},
    {name: 'Tennis', id: 4, genre: 'Outdoor Game', type: 'Multiplayer', numPlayers: '2', storageLocation: 'Garage'},
    {name: 'Exploding Kittens', id: 5, genre: 'Card Game', type: 'Multiplayer', numPlayers: '2-6', storageLocation: 'Toy Room'},
    {name: 'Cave Man Poetry', id: 6, genre: 'Card Game', type: 'Multiplayer', numPlayers: '2-8', storageLocation: 'Office'},
    {name: 'Forbidden Desert', id: 7, genre: 'Board Game', type: 'Multiplayer', numPlayers: '2-8', storageLocation: 'Kitchen Shelves'}
]
const members = [
    {name: 'Adam', id: 1, age: 34},
    {name: 'Benjamin', id: 2, age: 32},
    {name: 'Caleb', id: 3, age: 30},
    {name: 'Dan', id: 4, age: 28},
    {name: 'Ethan', id: 5, age: 15},
    {name: 'Frank', id: 6, age: 55},
    {name: 'Gideon', id: 7, age: 8},
    {name: 'Millie', id: 8, age: 4},
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
