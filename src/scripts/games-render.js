const renderGameDetails = (games) => {
    return games.map(g => {
        return `
            
            <div title="${g.name} (${g.id})">${g.name}</div>
            <div>${g.genre}</div>
            <div class="mobileHidden">${g.type}</div>
            <div class="mobileHidden">${g.numPlayers}</div>
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

    console.log('where are you games?', storage);
    const games = storage.games

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Games'

    const content = document.getElementById('content')
    
    content.innerHTML = `
            <div id="pageHeader">
                <div>Games (${games.length} Total)</div>
                <div id="addButton">
                    <button onclick="this.parentNode.querySelector('dialog').showModal()">Add Game</button>
                    <dialog>${renderAddGame()}</dialog>
                </div>
                
            </div>
            <div id="gamesListing">
                <div class="tableHeader">Title</div>
                <div class="tableHeader">Genre</div>
                <div class="tableHeader mobileHidden">Type</div>
                <div class="tableHeader mobileHidden"># of Players</div>
                <div class="tableHeader" >Storage Location</div>
            
            ${renderGameDetails(games)}</div>`
}

function renderAddGame() {
    return `
    <div>
        <form class="addForm">
            <label>Name
                <input name="name">
            </label>
            <label>Genre
                <select name="genre">
                <option value=""></option>
                <option value="Board Game">Board Game</option>
                <option value="Card Game">Card Game</option>
                <option value="Dice Game">Dice Game</option>
                <option value="Outdoor Game">Outdoor Game</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Video Game">Video Game</option>
                </select>
            </label>
            <label>Type
                <select name="type">
                <option value=""></option>
                <option value="Single-Player">Single-Player</option>
                <option value="Cooperative">Cooperative</option>
                <option value="Competitive">Competitive</option>
                </select>
            </label>
            <label># of Players
                <select name="numPlayers">
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>  
                <option value="2-4">2-4</option>
                <option value="2-5">2-5</option>  
                <option value="2-6">2-6</option>  
                <option value="2-8">2-8</option>
                <option value="3-8">3-8</option>    
                </select>
            </label>
            <label>Storage Location
                <select name="storageLocation">
                <option value=""></option>
                <option value="Computer">Computer</option>
                <option value="Downstairs Shelves">Downstairs Shelves</option>
                <option value="Garage">Garage</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Steam Deck">Steam Deck</option>
                <option value="Storage Room">Storage Room</option>
                <option value="Upstairs Shelves">Upstairs Shelves</option>
                </select>
            </label>
            <div class="modalButtons">
                <button onclick="this.dispatchEvent(gg.event('addGame', {form: new FormData(this.closest('form'))}))">Add Game</button>
                <button onclick="event.target.closest('dialog').close()">Cancel</button>
            </div>               
        </form>
    </div>
    `
}


window.games = {
    render: renderGames
}