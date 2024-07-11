const renderGameDetails = (games) => {
    return games.map(g => {
        return `
            
            <div title="${g.name} (${g.id})">${g.name}</div>
            <div>${g.genre}</div>
            <div>${g.type}</div>
            <div>${g.numPlayers}</div>
            <div>${g.storageLocation}</div>
            <div>
                <button onclick="this.parentNode.querySelector('dialog').showModal()">Delete</button>
                <dialog>
                    <div>Are you sure you want to delete ${g.name}?</div>
                    <button onclick="this.dispatchEvent(gg.event('deleteGame', {id: ${g.id}}))">Yes, Delete</button>
                    <button onclick="event.target.closest('dialog').close()">No, Cancel</button>
                </dialog>
            </div>
        `
    }).join("")
}

function renderGames(event) {
    if(event) {
        renderHelper.forEachSibling(event.target, (sib) => window.renderHelper.removeClass(sib,'active'))
        renderHelper.addClass(event.target, 'active')
    }

    const games = storage.games

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Games'

    const content = document.getElementById('content')
    content.innerHTML = `
            <div id="pageHeader">
                <div>Games (${games.length} Total)</div>
                <div>
                    <button onclick="this.parentNode.querySelector('dialog').showModal()">Add Game</button>
                    <dialog>${renderAddGame()}</dialog>
                </div>
                
            </div>
            <div id="gamesListing">
                <div>Title</div>
                <div>Genre</div>
                <div>Type</div>
                <div># of Players</div>
                <div>Storage Location</div>
            
            ${renderGameDetails(games)}</div>`
}

function renderAddGame() {
    return `
    <div>
        <form>
            <label>Name
                <input name="name">
            </label>
    
            <button onclick="this.dispatchEvent(gg.event('addGame', {form: new FormData(this.closest('form'))}))">Add Game</button>
            <button onclick="event.target.closest('dialog').close()">Cancel</button>
        </form>
    </div>
    `
}


window.games = {
    render: renderGames
}