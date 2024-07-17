const renderMemberDetails = (members) => {
    return members.map(m => {
        return `
            <div title="${m.name} (${m.id})">${m.name}</div>
            <div>${m.age}</div>
            <div>
                <button onclick="this.parentNode.querySelector('dialog').showModal()">Delete</button>
                <dialog>
                    <div>Are you sure you want to delete ${m.name}?</div>
                    <button onclick="this.dispatchEvent(gg.event('deleteMember', {id: ${m.id}}))">Yes, Delete</button>
                    <button onclick="event.target.closest('dialog').close()">No, Cancel</button>
                </dialog>
            </div>
        `
    }).join("")
}

function renderMembers(event) {
    if(event) {
        renderHelper.forEachSibling(event.target, (sib) => window.renderHelper.removeClass(sib,'active'))
        renderHelper.addClass(event.target, 'active')
    }

    const members = storage.members

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Members'

    const content = document.getElementById('content')
    content.innerHTML = `
            <div id="pageHeader">
                <div>Members (${members.length} Total)</div>
                <div id="addButton">
                    <button onclick="this.parentNode.querySelector('dialog').showModal()">Add Member</button>
                    <dialog>${renderAddMember()}</dialog>
                </div>
                
            </div>
            <div id="membersListing">
            <div class="tableHeader">Name</div>
            <div class="tableHeader">Age</div>
            ${renderMemberDetails(members)}</div>
            `
}

function renderAddMember() {
    return `
    <div>
        <form class="addForm">
            <label>Name
                <input name="name">
            </label>
            <label>Age
                <input name="age">
            </label>
            <div class="modalButtons">
                <button onclick="this.dispatchEvent(gg.event('addMember', {form: new FormData(this.closest('form'))}))">Add Member</button>
                <button onclick="event.target.closest('dialog').close()">Cancel</button>
            </div>
        </form>
    </div>
    `
}


window.members = {
    render: renderMembers
}