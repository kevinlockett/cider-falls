import { getDestinations, getGuests } from "./database.js"

const destinations = getDestinations()
const guests = getGuests()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "guests") {

        for (const destination of destinations) {
            if (destination.id === parseInt(itemClicked.dataset.destinationforeignkey))

            window.alert(`${itemClicked.dataset.name} is at ${destination.destination}`)
        }
    }
})

export const Guests = () => {
    let guestsHTML = `<ul class="aside__guest-list">`

    for (const guest of guests) {
        guestsHTML += `
            <li class="aside__guest" data-name="${guest.firstName} ${guest.lastName}" data-id="${guest.id}" data-type="guests" data-destinationForeignKey="${guest.destinationId}">
                ${guest.firstName} ${guest.lastName}
            </li>`
    }
    
    guestsHTML += `</ul>`

    return guestsHTML
}