import { LensBlur, StackedBarChart, Storage } from '@mui/icons-material';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Fade } from 'react-reveal';
import { SkillsData } from '../data';
import cpp from '../assets/cpp.png'
import py from '../assets/py.png'

function skills(props) {
    return (
        <div className='skills mt-3' id="skills"> 
            <div className='skills-div mt-5' >
                <center>
                    <br />
                    <h5 className='fw-bold'> MY SKILLS</h5>
                    <small className='' > MY SPECIALTIES MAINLY GRAVITATES AROUND A PARTICULAR PROGRAMING LANGUAGE (AND MY FIRST LOVE) JAVASCRIPT.</small>
                    <div className='mt-4 skill-names'>
                        {
                            SkillsData.map((skill) => (
                                <Fade key={skill.name} duration={3500}>
                                    <div className='skill-display'>
                                        <span>{skill.name}</span>
                                        <span className='mx-1'><img src={skill.image} alt="..." /></span>
                                    </div>
                                </Fade>
                            ))
                        }
                        <div className='skill-display fadetxt'>
                            <span>Python</span>
                            <span className='mx-1'><img src={py} alt="..." /></span>
                        </div>
                        <div className='skill-display fadetxt'>
                            <span>Cpp</span>
                            <span className='mx-1'><img src={cpp} alt="..." /></span>
                        </div>

                    </div>

                </center>

                <br />
                <br />
            </div>
        </div>
    );
}

export default skills;