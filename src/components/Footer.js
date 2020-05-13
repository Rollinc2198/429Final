import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact Me</h2>
            <p>Have a question about anything you saw here? Have an amazing job offer for me that I can't refuse? Feel free to contact me at any of these locations!</p>
        </section>
        <section>
            <h2>Information</h2>
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
        <p className="copyright">&copy; Carter Rollins 2020</p>
    </footer>
)

export default Footer
