import React from 'react';
import { Fade } from 'react-reveal';
import Typewriter from 'typewriter-effect';

function Loading(props) {
    const style = {
        page: {
            // position: "absolute",
            zIndex: 11,
            height: '100vh',
            width: '100%',
            display: '',
        },
        content: {
            display: 'flex',
            height: '90vh',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }
    }
    return (
        <div style={style.page} className='page'>
            <Fade>
                <div style={style.content} className=''>


                    <div class="button text-light ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CYBER~WOLF
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Loading;