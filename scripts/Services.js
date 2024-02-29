import { getAreaServices, getDestinations, getServices } from "./database.js"

const areaServices = getAreaServices()
const destinations = getDestinations()
const services = getServices()

const findDestinations = (service) => {
    let destinationList = []
    
    for (const areaService of areaServices)
        if (areaService.serviceId === service.id) {

            for (const destination of destinations) {

                if (areaService.destinationId === destination.id) {
                    destinationList.push(destination.destination)
                }
            }
        }
    return destinationList
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "services") {
        for (const service of services) {
            if (service.id === parseInt(itemClicked.dataset.id)) {
                let serviceList = findDestinations(service)
                let destinationString = serviceList.join(" and ")
                
                window.alert(`${service.service} is available at ${destinationString}`)
            }
        }
    }
})

export const Services = () => {
    let servicesHTML = `
        <section class="banner">
            <div class="banner__title">
                <h2>Services</h2>
            </div>
            <div>
                <ul class="banner__services-list" >`

    for (const service of services) {
        servicesHTML += `
            <li class="banner__services-item" data-name="${service.service}" data-id="${service.id}" data-type="services" >
                <i class="${service.icon}"></i>
                ${service.service}
            </li>`
    }
    
    servicesHTML += `
                </ul>
            </div>
        </section>`

    return servicesHTML
}