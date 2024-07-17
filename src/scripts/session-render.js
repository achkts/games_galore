const renderSessionDetails = (sessions) => {
    return sessions.map(s => {
        return `
        <div title="">${s.name}</div>
        <div class="mobileHidden">${s.sessionDate}</div>
        <div>${window.storage.getGameNameById(s.gameId)}</div>
        <div>${s.memberIds.map(mId => " " + window.storage.getMemberNameById(mId))}</div>
        <div>
            <button onclick="this.parentNode.querySelector('dialog').showModal()">Delete</button>    
            <dialog>
                <div>Are you sure you want to delete ${s.name}?</div>
                <button onclick="this.dispatchEvent(gg.event('deleteSession', {id: ${s.id}}))">Yes, Delete</button>
                <button onclick="event.target.closest('dialog').close()">No, Cancel</button>
            </dialog>
        </div>
        `
    }).join("")
}

function renderSessions() {
    renderHelper.forEachSibling(event.target, (sib) => window.renderHelper.removeClass(sib,'active'))
    renderHelper.addClass(event.target, 'active')

    const sessions = storage.sessions

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Play Sessions'

    const content = document.getElementById('content')
    content.innerHTML = `
        <div id="pageHeader">
            <div>Sessions (${sessions.length} Total)</div>
            <div id="addButton">
                <button onclick="this.parentNode.querySelector('dialog').showModal()">Add Session</button>
                <dialog>${renderAddSession()}</dialog>
            </div>
        </div>
        <div id="sessionsListing">
        <div class="tableHeader">Session Name</div>
        <div class="tableHeader mobileHidden">Date</div>
        <div class="tableHeader">Game Title</div>
        <div class="tableHeader">Players</div>
        ${renderSessionDetails(sessions)}</div>
        `
}

function renderAddSession() {
    return `
    <div>
        <form class="addForm">
            <label>Session Description
                <input name="description">
            </label>
            <label>Date
                <input type="date" name="date">
            </label>
            <label>Game Title
                <select name="gameId">
                <option value=""></option>
                ${window.storage.games.map(game => "<option value='"+game.id+"'>"+ game.name +"</option>").join()}
                </select>
            </label>
            <div class="multiselect">
                <div>Players</div>
                <div class="checkbox">             
                    ${window.storage.members.map(member => "<label><input type='checkbox' name='memberIds' value='"+member.id+"'>"+ member.name +" </label>").join("")}
                </div>
            </div>
            <div class="modalButtons">
                <button onclick="this.dispatchEvent(gg.event('addSession', {form: new FormData(this.closest('form'))}))"> Add Session</button>
                <button onclick="event.target.closest('dialog').close()">Cancel</button>
            </div>
        </form>
    </div>
    `
}

window.sessions = {
    render: renderSessions
}