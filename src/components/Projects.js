import React from 'react'

const Projects = () => {

    const projects = [
        { title: "Notifyza", description: "Web app built with React, and Laravel with Bootstrap for sending SMSs in bulk and to single contacts.", link: "https://notifyza.co.za" },
        { title: "Loadshedding App", description: "A mobile application for loadshedding information, includes national loadshedding status, schedules, tweets and watchlist. Built with react native and react context for state management.", link: "https://play.google.com/store/apps/details?id=com.cyriandev.loadshedding" },
        { title: "Quotes App", description: "Get random inspirational quotes, browse through over 2000 quotes by 900 authors. Data from the quotable api. Built with react native and react context for state management.", link: "https://play.google.com/store/apps/details?id=com.cyriandev.quotes" },
        { title: "Movies and Tv Web App", description: "Minimal, dark themed movies and tv site for finding your next movie to watch on Netflix. Build with react, redux for state management, Bootstrap and TMDB API.", link: "https://moviesntv.cyriandev.co.za" }
    ]

    return (
        <div className="d-flex align-items-center projects">
            <div>
                <h4 style={{ fontWeight: 800 }} className="mb-4">Projects &#128188;</h4>
                <div className="animate__animated animate__slideInRight">
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <h1 className="d-flex align-items-center project-name"> <span style={{ marginRight: 10 }}>{project.title}</span> <ion-icon name="link-outline"></ion-icon></h1>
                            </a>
                            <p className="text-description">{project.description}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Projects
