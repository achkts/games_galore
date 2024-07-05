function renderSessions() {
    renderHelper.forEachSibling(event.target, (sib) => window.renderHelper.removeClass(sib,'active'))
    renderHelper.addClass(event.target, 'active')

    const sessions = storage.sessions

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Play Sessions'

    const content = document.getElementById('content')
    content.innerHTML = `<div>Hello sessions!</div>`
}

window.sessions = {
    render: renderSessions
}