import React from 'react'

const Projects = () => {
    return (
        <div className="d-flex align-items-center projects">
            <div>
                <div className="project">
                    <a href="https://notifyza.co.za">
                        <h1 className="d-flex align-items-center"> <span style={{ marginRight: 10 }}>Notifyza</span> <ion-icon name="link-outline"></ion-icon></h1>
                    </a>
                    <p className="text-description">Web app built with React, and Laravel with Bootstrap for sending SMSs in bulk and to single
                        contacts.</p>
                </div>
                <div className="project">
                    <a href="https://play.google.com/store/apps/details?id=com.cyriandev.loadshedding">
                        <h1 className="d-flex align-items-center"><span style={{ marginRight: 10 }}>Loadshedding App</span> <ion-icon name="link-outline"></ion-icon></h1>
                    </a>
                    <p className="text-description">A mobile application for loadshedding information, includes national loadshedding status,
                        schedules, tweets and watchlist. Built with react native and react context for state management.</p>
                </div>
                <div className="project">
                    <a href="https://stokoza.co.za">
                        <h1 className="d-flex align-items-center"><span style={{ marginRight: 10 }}>Stokoza</span> <ion-icon name="link-outline"></ion-icon></h1>
                    </a>
                    <p className="text-description">An online store aiming to sell local brands and products, still being furbished and adding full
                        features for an ecommerce site.</p>
                </div>
                <div className="project">
                    <a href="https://moviesntv.cyriandev.co.za">
                        <h1 className="d-flex align-items-center"><span style={{ marginRight: 10 }}>Movies and Tv Web App</span> <ion-icon name="link-outline"></ion-icon></h1>
                    </a>
                    <p className="text-description">Minimal, dark themed movies and tv site for finding your next movie to watch on Netflix. Build
                        with react, redux for state management, Bootstrap and TMDB API.</p>
                </div>




            </div>
        </div>
    )
}

export default Projects
