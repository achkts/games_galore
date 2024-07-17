const renderSessionDetails = (sessions) => {
    return sessions.map(s => {
        return `
        <div>${s.name}</div>
        <div>${s.sessionDate}</div>
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
            <div>Hello and Welcome to the Sessions Page!</div>
            <div>Sessions (${sessions.length} Total)</div>
            <div>
                <button onclick="this.parentNode.querySelector('dialog').showModal()">Add Session</button>
                <dialog>${renderAddSession()}</dialog>
            </div>
        </div>
        <div>Session Name</div>
        <div>Date</div>
        <div>Game Title</div>
        <div>Players</div>
        <div id="membersListing">${renderSessionDetails(sessions)}</div>
        `
}

function renderAddSession() {
    return `
    <div>
        <form>
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
            <label>Players
                <select name="memberIds" multiple>
                ${window.storage.members.map(member => "<option value='"+member.id+"'>"+ member.name +"</option>").join()}
                </select> 
            </label>

            <button onclick="this.dispatchEvent(gg.event('addSession', {form: new FormData(this.closest('form'))}))"> Add Session</button>
            <button onclick="event.target.closest('dialog').close()">Cancel</button>
        </form>
    </div>
    `
}

window.sessions = {
    render: renderSessions
}