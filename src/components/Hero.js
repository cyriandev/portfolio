import React from 'react'

const Hero = () => {
    return (
        <div className="intro d-flex align-items-center">
            <div>
                <h1 style={{ fontWeight: '800', fontSize: '4.5rem' }}>Hello! &#128075;&#127997; <br /> i'm Sibusiso Ndlovu</h1>
                <p className="text-description">Web and App Developer</p>

                <div className="links d-flex">
                    <a href="mailto:cyriandev@gmail.com" style={{ marginRight: 15 }}>
                        <ion-icon name="mail-outline"></ion-icon>
                    </a>

                    <a href="https://github.com/cyriandev" style={{ marginRight: 15 }}>
                        <ion-icon name="logo-github"></ion-icon>
                    </a>

                    <a href="https://www.linkedin.com/in/cyriandev" style={{ marginRight: 15 }}>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>

                    <a href="https://www.facebook.com/cyriandev-101270428848469" style={{ marginRight: 15 }}>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://wa.me/+27765921951">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
