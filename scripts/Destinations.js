import { getAreaServices, getDestinations, getGuests, getServices } from "./database.js"

const areaServices = getAreaServices()
const destinations = getDestinations()
const guests = getGuests()
const services = getServices()

const servicesList = (destination) => {
    let servicesListHtml = `
        <ul class="services-list">`
    
    for (const areaService of areaServices)
        if (areaService.destinationId === destination.id) {
            for (const service of services) {
                if (areaService.serviceId === service.id)
                {
                    servicesListHtml += `
                        <li class="services-item" >
                            <a href="#" class="services-link" aria-label="${destination.destination}"><i class="${service.icon}"></i></a>
                        </li>`
                }
            }
        }
        servicesListHtml += `</ul >`
    
        return servicesListHtml
}

const countGuests = (destination) => {
    let guestCount = 0
    for (const guest of guests) {
        if (destination.id === guest.destinationId) {
            guestCount ++
        }
    }

    return guestCount
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "destination") {

        for (const destination of destinations) {
            let areaPopulation = 0
            if (destination.id === parseInt(itemClicked.dataset.id)) {
                let guestCount = countGuests(destination)
                areaPopulation += guestCount

                window.alert(`There are ${areaPopulation} guests in the ${destination.section} Section`)
            }
        }
    }
})

export const Destinations = () => {
    let destinationsHTML = `
        <div class="cards">`
    
    for (const destination of destinations) {
        destinationsHTML += `
            <div class="card" >
                <div class="card__image">
                    <img data-id="${destination.id}" data-type="destination" src="../img/${destination.image}" alt="${destination.alt}" class="image">`    
                    
        destinationsHTML += servicesList(destination)
    
        destinationsHTML += `
            </div>
            <div class="card__information" >
                <div class="card__title" >
                    <h2 data-id="${destination.id}" data-type="destination">${destination.destination}</h2>
                </div>
                <div class="card__location">
                    <h3 data-id="${destination.id}" data-type="destination">${destination.section} Section</h3>
                </div>
                <div class="card__services">
                    <p data-id="${destination.id}" data-type="destination">${destination.description}</p>
                </div>
            </div>
        </div>`
    
    }
    
    destinationsHTML += `</div>`
    
    return destinationsHTML
}