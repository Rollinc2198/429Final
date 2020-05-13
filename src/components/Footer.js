import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
        </section>
        <section>
            <h2>Contact Me</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>10 Clarkson Ave &bull; Potsdam, NY 13699 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(603) 568-7852</dd>
                <dt>Email</dt>
                <dd><a href="#">rollinc@clarkson.edu</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/Rollinc2198" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Carter Rollins 2020. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
