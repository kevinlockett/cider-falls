import { Article } from "./Article.js"
import { Footer } from "./Footer.js"
import { Header } from "./Header.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <div class="wrapper">
        <section>${Header()}</section>
        <section>${Services()}</section>
        <section>${Article()}</section>
        <section>${Footer()}</section>
    </div>
`

mainContainer.innerHTML = applicationHTML

