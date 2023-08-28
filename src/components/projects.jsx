import React from 'react';
import { Flip } from 'react-reveal';
import { ProjectsData } from '../data';
import img1 from '../assets/intro.jpg'
import vid from '../assets/app.MOV'
import { ArrowCircleDown } from '@mui/icons-material';
// import Contact from './Contact';
import { Fade } from 'react-reveal';

function Projects(props) {
    return (
        <div className='projects-page mt-5' id='projects'>
            <br />
            <h6 className='ms-3 fw-bold'>MY PROJECTS</h6>
            <p style={{ fontSize: '14px', marginTop: '5px', marginLeft: '12px' }}>
                The following are growing projects by yours truly...
            </p>
            <div className='mt-4 projects'>
                {ProjectsData.map((project, index) => (
                    <section className='project-con shadow-lg rounded' key={index}>
                        <center className='gray'>
                            <div className=" fw-bold project-name ">{project.name}</div>
                            <small>{project.description} <div><a href={project.url} target='_blank' className='btn'>view now</a></div></small>
                            <Fade bottom duration={1000}>
                                <div className='mt-2 '>
                                    <img src={project.image} alt="..." className='img-fluid rounded px-1  project-img' />
                                </div>
                            </Fade>
                        </center>
                        <br />
                        <br />
                    </section>
                ))}
            </div>
            <center className='gray py-4'>
                <div className="appPreview">
                    <span >
                        MOBILE APP PREVIEW
                    </span>
                </div>
                <div>
                    <div className='mt-4' id='app'>
                        <video width='270'
                            controls
                            loop
                            webkitallowfullscreen
                            allowfullscreen
                            poster={img1}
                        >
                            <source src={vid} />
                        </video>
                    </div>
                </div>
            </center>

        </div>
    );
}

export default Projects;