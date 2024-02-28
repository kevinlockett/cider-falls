import { Aside } from "./Aside.js"
import { Destinations } from "./Destinations.js"

export const Article = () => {
    let articleHTML = `
        <article class="article">
            <div class="article__main">
                ${Destinations()}
            </div>
            <div class="article__aside">
                ${Aside()}
            </div>
        </article>`

    return articleHTML
}