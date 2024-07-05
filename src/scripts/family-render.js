const renderFamilyDetails = (family) => {
    return "Hi"
}

const renderFamily = (event) => {
    renderHelper.forEachSibling(event.target, (sib) => window.renderHelper.removeClass(sib,'active'))
    renderHelper.addClass(event.target, 'active')

    const family = storage.family

    const pageName = document.getElementById('pageName')
    pageName.textContent = 'Family members'

    const familyDetails = renderFamilyDetails(family)

    const content = document.getElementById('content')
    content.innerHTML = `
    <div>
        Hello family members!
    </div>${familyDetails}
    `
}


window.family = {
    render: renderFamily
}