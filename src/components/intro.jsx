import { LensBlur, PanTool, Timelapse } from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
import me from '../assets/avatar.jpg';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div id='home'>
            <br />
            <center>
                <div className='intro'>

                    <div className='typeWrite reflect overlay mb'>
                        <div>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,

                                }}

                                onInit={(typewriter) => {

                                    typewriter
                                        .pauseFor(500)
                                        .typeString("Welcome to my site!")
                                        .pauseFor(2000)
                                        .deleteAll(1)
                                        .typeString("I design websites and mobile apps!")
                                        .pauseFor(500)
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                    <h5 className='name mt-3'> <LensBlur /> MY NAME IS TOBI OLALEYE <LensBlur /></h5>
                    <p style={{ fontSize: '15px' }}>
                        I'm a <span className='fw-bold'>full stack web/mobile app developer</span> capable of end-to-end dynamic application software development.                    </p>
                </div>

                <Fade duration={1000}>
                    <div className="my-container">
                        <div className="invisible-txt">
                            {/* <small style={{ fontSize: '14px', marginBottom: '7px' }}> I'm a programmer. I'd love to change the world one day, but sadly they won't give me the source code <b> :(</b></small> */}
                            <small style={{ fontSize: '14px', marginBottom: '7px' }}> Coding started as an outlet for me, but now it's simply a way of life <b> :)</b></small>
                            <div className='text-end fw-bold'>~CYBER WOLF</div>
                        </div>
                    </div>
                </Fade>
                {/* <div className='my-img-div'>
                    <img src={me} alt="" className='img-fluid rounded-pill'/>
                </div> */}

                <section className="intro-btn">
                    <Link to='/resume' className="">
                        <button className="btn resume">
                            Resume
                        </button>
                    </Link>
                    &nbsp; &nbsp;
                    <a href="https://wa.me/+2349056812839">
                        <button className="btn hire ">Hire me</button>
                    </a>
                </section>
            </center>



        </div>
    );
};

export default Intro;