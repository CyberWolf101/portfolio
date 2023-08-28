import { ArrowRightAlt } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

function Comming(props) {
    return (
        <div className='comming'>
            <Fade right duration={3000}>
                <h3>
                    COMMING SOON!
                </h3>
            </Fade>
            <br />
            <Fade left duration={3000}>
                <Link to='/'>
                    <small style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        back home <ArrowRightAlt />
                    </small>
                </Link>
            </Fade>
        </div>
    );
}

export default Comming;