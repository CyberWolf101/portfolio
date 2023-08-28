import React from 'react';
import { Android, Call, HomeMini, House, Person, WhatsApp } from "@mui/icons-material";
import { Fade } from 'react-reveal';
import { HashLink } from 'react-router-hash-link';

function BottomBar(props) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className="bottomBar">
                    <Fade bottom duration={3000}>
                        <div>
                            <HashLink smooth to="#home">
                                <section><House /> Home</section>
                            </HashLink>
                            <HashLink smooth to="#skills">
                                <section><Person /> Skills</section>
                            </HashLink>
                            <HashLink smooth to="#contact">
                                <section><Call />Contact</section>
                            </HashLink>
                            <a href="https://wa.me/+2349056812839">
                                <section><WhatsApp />DM</section>
                            </a>
                            <HashLink smooth to="#projects">
                                <section><Android />Apps</section>
                            </HashLink>





                        </div>
                    </Fade>

                </div>

            </div>
        </div>
    );
}

export default BottomBar;