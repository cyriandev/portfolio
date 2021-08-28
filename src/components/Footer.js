import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{ background: '#242526' }}>
            <Container>
                <div className="d-flex align-items-center justify-content-between mt-3 py-3">
                    <span style={{ marginRight: 10 }} className="text-description">
                        &copy; cyriandev, {new Date().getFullYear()}
                    </span>
                    <div className="links d-flex align-items-center">
                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </span>

                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-react"></ion-icon>
                        </span>

                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </span>
                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-github"></ion-icon>
                        </span>
                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-html5"></ion-icon>
                        </span>
                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-css3"></ion-icon>
                        </span>
                        <span className="d-flex align-items-center" style={{ marginRight: 15 }}>
                            <ion-icon name="logo-laravel"></ion-icon>
                        </span>


                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
