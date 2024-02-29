import { Guests } from "./Guests.js"

export const Aside = () => {
    let asideHTML = `
        <div class="aside">
            <div class="aside__title">
                <h2>Park Guests</h2>
            </div>
            <div class="aside__guests">
                ${Guests()}
            </div>
        </div>`
    
    return asideHTML
}