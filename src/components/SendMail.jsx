import React, { useState } from "react";
import {Resend } from 'resend'

function SendMail() {
  const [mailInfo, setMailInfo] = useState({
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    setMailInfo({ ...mailInfo, [e.target.name]: e.target.value });
  }

  async function handleMailFormSubmit(e) {
   
    e.preventDefault()
    alert(JSON.stringify(mailInfo))


    // let transporter = new nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: "elijahdimeji549@gmail.com",
    //         pass: "bkcd hmcn giph zkxk"
    //     }
    // });

    // let mailOptions = {
    //     from:  "elijahdimeji549@gmail.com",
    //     to: "segunsunday619@gmail.com",
        
    //     subject: "Testing",
    //     html: `<h1>NodeMailer is Working.</h1>`
    // }

    // transporter.sendMail(mailOptions, (error, info)=> {
    //     if (error) {
    //         alert("ERROR")
    //     } else {
    //         alert("SUCCESS")
    //     }
    // })



   
  }

  return (
    <div className="p-3 bg-gray-600 bg-opacity-5 rounded-lg transition-all">
      <form onSubmit={handleMailFormSubmit} className="mt-5">
        <div>
          <label htmlFor="email" className="text-slate-200">
            Your Email
          </label>
          <div>
            <input
              id="email"
              name="email"
              onChange={handleInputChange}
              value={mailInfo.email}
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="bg-gray-800 text-slate-300 p-1 text-sm rounded-sm w-60 outline-none border border-transparent focus-within:border-slate-300 placeholder:text-slate-600"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="message" className="text-slate-200">
            Your Message
          </label>
          <div>
            <textarea
              id="message"
              name="message"
              onChange={handleInputChange}
              value={mailInfo.message}
              placeholder="Your Message"
              className="bg-gray-800 text-slate-300 p-1 text-sm rounded-sm w-60 outline-none border border-transparent focus-within:border-slate-300 h-40 resize-none placeholder:text-slate-600"
            />
          </div>
        </div>
        <div className="mt-1">
          <button disabled={mailInfo.email === "" || mailInfo.message === ""} className="bg-pink-600 disabled:bg-slate-800 disabled:text-slate-500 text-white py-2 px-3 text-sm rounded-md">
            Send Mail
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
