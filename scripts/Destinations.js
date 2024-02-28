import { getAreaServices, getDestinations, getServices } from "./database.js"

const areaServices = getAreaServices()
const destinations = getDestinations()
const services = getServices()

const destinationList = (serviceObj) => {
    let destinationArr = []
    for (const areaService of areaServices)
        if (areaService.serviceId === serviceObj.id) {
            for (const destination of destinations) {
                if (areaService.destinationId === destination.id) {
                    destinationArr.push(destination.destination)
                }
            }
        }
    return destinationArr
}

const servicesList = (destination) => {
    let servicesListHtml = `
        <ul class="services-list">`
    
    for (const areaService of areaServices)
        if (areaService.destinationId === destination.id) {
            for (const service of services) {
                if (areaService.serviceId === service.id)
                {
                    servicesListHtml += `
                        <li id=service--${service.id}>
                            <a href="#" class="services-link" aria-label="${destination.destination}"><i class="${service.icon}"></i></a>
                        </li>`
                }
            }
        }
        servicesListHtml += `</ul >`
    
        return servicesListHtml
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    
    if (itemClicked.dataset.type === "services") {
        const [, serviceId] = itemClicked.id.split("--")

        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                let clickedService = serviceDestinations(service)
                let destinationList = clickedService.join(" and ")
                window.alert(`${service.service} is available at ${destinationList}`)
            }
        }
    }
})

export const Destinations = () => {
    let destinationsHTML = `
        <div class="cards">`
    
    for (const destination of destinations) {
        destinationsHTML += `
            <div class="card">
                <div class="card__image">
                    <img src="../img/${destination.image}" alt="${destination.alt}" class="image">`    
                    
        destinationsHTML += servicesList(destination)
    
        destinationsHTML += `
            </div>
            <div class="card__information">
                <div class="card__title">
                    <h2>${destination.destination}</h2>
                </div>
                <div class="card__location">
                    <h3>${destination.section} Section</h3>
                </div>
                <div class="card__services">
                    <p>${destination.description}</p>
                </div>
            </div>
        </div>`
    
    }
    
    destinationsHTML += `</div>`
    
    return destinationsHTML
}