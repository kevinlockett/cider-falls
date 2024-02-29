export const Footer = () => {
    let footerHTML = `
        <footer class="footer">
            <div class="footer__social-links">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
            </div>
            <div class="footer__details" >
                <ul class="footer__details-list">
                    <li class="footer__details-item">
                        <span class="footer__details-icon">
                            <i class="fa-duotone fa-circle-phone" class="footer__details-icon"> </i>
                        </span>
                        (815) 397-6789
                    </li>
                    <li class="footer__details-item">
                        <span class="footer__details-icon">
                            |
                        </span>
                    </li>
                    <li class="footer__details-item">
                        <span class="footer__details-icon">
                            <i class="fa-duotone fa-circle-envelope" class="footer__details-icon"> </i>
                        </span>
                        funtimes@ciderfalls.com
                    </li>
                    <li class="footer__details-item">
                    <span class="footer__details-icon">
                    |
                </span>
                    </li>
                    <li class="footer__details-item">
                        <span class="footer__details-icon">
                            <i class="fa-duotone fa-location-dot"> </i>
                        </span>
                        1220 route 1, Cedar Falls, CO 84149
                    </li>
                </ul>
            </div>
        </footer>`

    return footerHTML
}