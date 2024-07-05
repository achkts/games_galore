window.renderHelper = {
    forEachSibling: (el, block) => {
        [...el.parentNode.children].forEach(child => {
            block(child)
        })
    },
    removeClass: (el, className) => {
        el.classList.remove(className)
    },
    addClass: (el, className) => {
        el.classList.add(className)
    },
    event: (name, detail) => new CustomEvent(name, {
        bubbles: true,
        detail: detail
    })
}
window.gg = window.renderHelper