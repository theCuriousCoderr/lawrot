import React from "react";

function AboutMe({view}) {
  return (
    <div id="aboutMe" className="section bg-yellow-40 line-clamp-[1 space-y-5">
      <p className={`font-medium font-inter  ${view === 'aboutMe' ? 'sticky bg-slate-900 py-5 text-pink-500 xl:text-white -top-10 xl:relative': 'relative text-white' } `}>ABOUT</p>
      <p className="text-slate-500">
        With <span className="text-slate-300">2 years</span> of hands-on
        experience and technical expertise in crafting robust and user-eccentric
        web applications. My journey in web development began with a fervent
        curiousity with how the web and internet works, which led me into the
        rabbit hole of front-end and back-end technologies.
      </p>
      <p className="text-slate-500">
        On the front-end, I excel in crafting intuitive and responsive user
        interfaces using HTML5, CSS3 and JavaScript, coupled with modern
        libraries and frameworks such as React.js, Next.js and Angular. I have a
        keen eye for design and usability, ensuring that the end products not
        only meets functional requirements but also delights users with its
        aesthetic appeal and seamless interaction.
      </p>
      <p className="text-slate-500">
        Completing my front-end skills, I possess a strong foundation in
        back-end development, specializing in server-side programming with
        languages like Node.js and Python. Leveraging frameworks like Express.js
        and Flask, I have built scalable and efficient APIs, integrated with
        databases such as MongoDB and SQLite3 to manage data effectively.
        Additionally, i prioritize security practices, implementing measures
        such as encryption, authentication and authorization to safeguard
        sensitive data and mitigate risks.
      </p>
      <p className="text-slate-500">
        My proficiency extends beyond traditional web development paradigms, as
        i am conversant with version control system using Git/Github, deploying
        and maintaining applications, files on cloud platforms like Vercel,
        Render, Netlify, Cloudinary
      </p>
      <p className="text-slate-500">
        What sets me apart is my commitment to continuous learning and
        adaptations to emerging technologies and industry best practices. I
        thrive in dynaamic environments where collaboartion and innovation drive
        success, leveraging agile methodologies to deliver high-quality
        solutions that exceeds client expectations
      </p>
    </div>
  );
}

export default AboutMe;
