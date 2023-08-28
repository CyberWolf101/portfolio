import { Call } from '@mui/icons-material';
import React, { useContext } from 'react';
import { useState } from 'react';
import Message from '../svgs/message';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { HashLink } from 'react-router-hash-link';
import { LoadingButton } from "@mui/lab"


function Contact() {
    const [number] = useState("+234 814 8749 736 ")
    const [gmail] = useState("tobiolaleye39@gmail.com")
    const [isSending, setIsSending] = useState(false)
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !subject || !message) {
            return swal("", "fill empty fields", "error")
        } else if (name.length < 2) {
            return swal("", "name must contain atleast 2 chars", "info")
        } else if (subject.length < 7) {
            return swal("", "Invalid email", "info")
        } else if (message.length < 5) {
            return swal("", "message must contain atleast 5 chars", "info")
        }

        setIsSending(true)
        emailjs.sendForm('service_lthem66', 'template_fphn7gx', form.current, 'lFGf95fny-YwcQrxr')
            .then((result) => {
                console.log(result.text);
                swal("", "Message sent", "success")
                setMessage("")
                setName("")
                setSubject("")
                setIsSending(false)
            }, (error) => {
                console.log(error.text);
                setIsSending(false)
                swal("", "An error occured, check your connection...", "info")
            });
    };



    return (
        <div className='contact' id="contact" >
            <br />
            <center>
                <h5 > GET IN TOUCH!</h5>
                <div className={'line mb-1'}></div>
                <br />
                <p>You're just a phone call or text away..</p>
                <div className={'border p-2 text-primary'} style={{ width: '300px' }}>
                    <span> {number}</span>&nbsp;<a href="tel:+234 814 8749 736"><button className='btn btn-outline-primary call'><div><Call /></div></button></a>
                </div>
                <br />
                <div className={'border p-2 text-primary'} style={{ width: '300px' }}>
                   <span>{gmail}</span> <a href="mailto:tobiolaleye39@gmail.com?cc=lordtimothy055@gmail.com&subject=Service Request mail" ><button className='btn btn-outline-primary '><Message /></button></a> 
                </div>
                <br />
                <br />
                <h6>Hit me up for any bussiness proposal!</h6>
                <div className={"line2 mb-4 "}></div>
                <div className='send_message mx-5'>
                    <form ref={form}>
                        <input type="text" className='form-control' name="user_name" placeholder='Name' value={name} onChange={((e) => setName(e.target.value))} />
                        <input type="email" className='form-control my-3' name="user_subject" required placeholder='email' value={subject} onChange={((e) => setSubject(e.target.value))} />
                        <textarea cols="30" rows="6" placeholder='Message' name="message" className='form-control' value={message} onChange={((e) => setMessage(e.target.value))} ></textarea>
                        <br />

                        <LoadingButton
                            variant='contained'
                            loading={isSending}
                            loadingIndicator="sending.."
                            onClick={sendEmail}
                            color='primary'
                        >
                            SEND MESSAGE
                        </LoadingButton>
                    </form>
                </div>
            </center>
            <br />
            <br />
          <center>
          <div className='lineCurve'></div>
          </center>

            <br />
        </div>
    );
}

export default Contact;