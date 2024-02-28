import { getServices } from "./database.js"

const services = getServices()

export const Services = () => {
    let servicesHTML = `
        <section class="banner">
            <div class="banner__title">
                <h2>Services</h2>
            </div>
            <div>
                <ul>`

    for (const service of services) {
        servicesHTML += `
            <li data-name="${service.service}" data-type="services" >
                <a href="#" class="services-link" aria-label="${service.service}">
                    <i class="${service.icon}"></i>
                </a> 
                ${service.service}
            </li>`
    }
    
    servicesHTML += `
                </ul>
            </div>
        </section>`

    return servicesHTML
}