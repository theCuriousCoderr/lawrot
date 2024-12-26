import bravex from '../images/bravex.png'
import geegpay from '../images/geegpay.png'
import talentsync from '../images/talentsync.png'
import toggle from '../images/toggle.png'
import trail from '../images/trail.png'
import airbnb from '../images/airbnb.png'
import gleja from '../images/gleja.png'
import digistream from '../images/digistream.jpg' 
import keycount from '../images/keycount.jpg'

const projectsData = [
    {
      period: { start: "SEPT 2022", end: "APR 2023" },
      role: "Online Course Enrolment",
      company: "CS50x: Learning",
      desc: "Embarked on an enriching educational journey by engaging with course materials and solving challenging problems that equipped me with the fundamental and foundational knowledge and skills in Computer Science and programming.",
      tools: ["HTML", "CSS", "JavaScript", 'C', 'Python', 'SQL', 'Flask', 'Data Structures & Algorithm'],
      link: 'https://github.com/code50/109081098'
    },
    {
      period: { start: "MAR 2023", end: "MAR 2023" },
      role: "CS50x Final Project",
      company: "CS50x Final Project",
      desc: "Designed, Developed and built my CS50x Final project, which was a simple demo implementation of a College's departmental website that exists as a means to relay information to the students of the department and visitors. ",
      tools: ["HTML", "CSS", "JavaScript", "Flask", "Github"],
      link: 'https://lambdola.github.io/aeefinalproject.github.io'
    },
    {
      period: { start: "MAY 2023", end: "MAY 2023" },
      role: "Front End Developer",
      company: "UI Design",
      desc: "Built an NFT card component by following a Figma file design to pixel perfect details",
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Github"],
      link: 'https://lambdola.github.io'
    },
    {
      period: { start: "JUL 2023", end: "PRESENT" },
      role: "Full Stack Developer",
      company: "Trizent Autos",
      desc: "Designed, developed and built a demo car website providing services to buy, rent and repair cars.",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js" , "Git/Github"],
      link: 'https://trizent-autos-fe.vercel.app'
    },
   
    {
      period: { start: "SEPT 2023", end: "SEPT 2023" },
      role: "Front End Developer",
      company: "CGPA Calculator",
      desc: "Built a university standard CGPA calculator designed after the CGPA grading system of the University of Ibadan.",
      tools: ["React", "TailwindCSS", "Github"],
      link: 'https://ui-cgpa-calc.onrender.com'
    },
    {
      period: { start: "MAY 2023", end: "MAY 2023" },
      role: "Front End Developer",
      company: "Getlinked.Ai",
      desc: "Developed a landing page after a Figma design as an entry project for an hackathon",
      tools: ["React", "Tailwond CSS", "Figma", "Github", "Vercel"],
      link: 'https://getlinkedai-prehackathon-flax.vercel.app'
    },
    {
      period: { start: "NOV 2023", end: "NOV 2023" },
      role: "Full Stack Developer",
      company: "Stutern",
      desc: "Built a full stack application that enables small businesses to efficiently manage and track payments and invoices.",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js", "Git/Github", "Flutterwave", "Node Mailer"],
      link: 'https://itrack-2.vercel.app'
    },
    {
      period: { start: "DEC 2023", end: "DEC 2023" },
      role: "Front End Developer",
      company: "Design Illustration",
      desc: "Developed an amimation based mobile bottom nav bar design illustration.",
      tools: ["React", "Figma", "Animation"],
      link: 'https://twitter.com/elijahdimeji549/status/1748013457276915999?s=19'
    },
    {
      period: { start: "DEC 2023", end: "PRESENT" },
      role: "Full Stack Developer",
      company: "Intertwined",
      desc: "Designed, developed and deployed a full stack web app that acts as a plaform for people in need of manual services and requests to find and connect with service renderers..",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js" , "Git/Github"],
      link: 'https://intertwined-fe.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: trail,
      company: "Light Trail",
      desc: "An animation based design illustration. ",
      tools: ["React", "JSX", "CSS Animation"],
      link: 'https://light-trail.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: toggle,
      company: "Theme Switch",
      desc: "An animation based theme toggling switch ",
      tools: ["HTML", "CSS", "JavaScript", "Animation"],
      link: 'https://two-face.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: talentsync,
      company: "Talent Sync",
      desc: "A responsive landing page.",
      tools: ["React", "Figma", "Vercel"],
      link: 'https://talentsync-assessment-ebon.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: geegpay,
      company: "Geegpay",
      desc: "A responsive Sales Analytics dashboard design.",
      tools: ["React", "React Charts", "Moment.js", "Figma", "CSS Animation", "Responsiveness"],
      link: 'https://geegpay-fe-dashboard-challenge.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: bravex,
      company: "Bravex",
      desc: "An animation based project that has a self-propelling meteor-trail type animation.",
      tools: ["React", "CSS Animation", "Github"],
      link: 'https://bravex-demo.vercel.app'
    },
    {
      period: { start: "APR 2024", end: "APR 2024" },
      photo: gleja,
      role: "Front End Developer",
      company: "G-Leja",
      desc: "Developed a Full Section Landing page, with sign up and log in pages added to it by taking design inspirations from the online designs",
      tools: ["React", "Tailwind CSS", "Animation", "Vercel"],
      link: 'https://g-leja.vercel.app/'
    },
    {
      period: { start: "MAR 2024", end: "APR 2024" },
      photo: airbnb,
      role: "Front End Developer",
      company: "AirBNB Clone",
      desc: "A replication of the intuitive and user-friendly interface of the popular vacation rental platform, Airbnb. ",
      tools: ["Angular", "Tailwind CSS", "Swiper.js", "Google Icons", "Vercel"],
      link: 'https://airbnb-clone-lemon-three.vercel.app/home'
    },
    {
      period: { start: "OCT 2024", end: "OCT 2024" },
      photo: digistream,
      role: "Full-Stack Web Developer",
      company: "DigiStream",
      desc: "A digital solution to solving administrative tasks amongst students of the University of Ibadan, such as course registration",
      tools: ["NextJS", "Tailwind CSS", "Pdf-lib", "Zustand", "Vercel"],
      link: 'https://digistream-theta.vercel.app/'
    },
    {
      period: { start: "OCT 2024", end: "OCT 2024" },
      photo: keycount,
      role: "A Curious Developer",
      company: "KeyCount",
      desc: "This is a simple dashboard for a lightweight VS Code extension that keeps track and count of the number of times a keyboard button was pressed while you work.",
      tools: ["VS Code API", "MongoDB", "NextJS", "Tailwind CSS", "NodeJS"],
      link: 'https://marketplace.visualstudio.com/items?itemName=OlalekanOladimeji.KeyCount'
    }
  ];

  export default projectsData.reverse();