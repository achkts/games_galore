async function fetchAPI(file) {
    
    const response = await fetch("/api/"+file+".json")
    const games = await response.json()
    return games;

}

window.storage = {
    games: [],
    members: [],
    sessions: [],
    

    saveToLocalStorage: () => {
        localStorage.setItem('games', JSON.stringify(storage.games))
        localStorage.setItem('members', JSON.stringify(storage.members))
        localStorage.setItem('sessions', JSON.stringify(storage.sessions))
    },
    loadFromLocalStorage: () => {
        try {
            storage.games = JSON.parse(localStorage.getItem('games')) ?? [] 
            if (storage.games.length == 0){
                fetchAPI("games").then(games => storage.games = games)
            }
            storage.members = JSON.parse(localStorage.getItem('members')) ?? fetchAPI("members").then(members => storage.members = members)
            storage.sessions = JSON.parse(localStorage.getItem('sessions')) ?? fetchAPI("sessions").then(sessions => storage.sessions = sessions)
        } catch (e) {
            console.error('Error loading from local storage', e)
        }

    },
    getGameNameById: (gameId) => {
        const gameMatches = storage.games.filter(game => game.id == gameId)
        console.log("gammey", gameId, games);
        return gameMatches.length > 0 ? gameMatches[0].name : "Unknown Game Id: " + gameId;
    },
    getMemberNameById: (memberId) => {
        const memberMatches = storage.members.filter(member => member.id == memberId)
        console.log("memberzz", memberId, members);
        return memberMatches.length > 0 ? memberMatches[0].name : "Unknown Member Id: " + memberId;
    }



}

storage.loadFromLocalStorage()
