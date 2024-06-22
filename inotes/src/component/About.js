import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Our Notes App</h1>
      <p>Welcome to our Notes App, where simplicity meets functionality in managing your notes effortlessly. Our app is built using the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust and responsive user experience. Whether you're jotting down ideas, keeping track of tasks, or organizing your thoughts, our app provides the tools you need with the security you can trust.</p>
      
      <h3>Features:</h3>
      <p><strong>Secure Authentication:</strong> Safeguard your notes with user authentication to ensure your information remains private and accessible only to you.</p>
      <p><strong>Effortless CRUD Operations:</strong> Create, read, update, and delete notes seamlessly with intuitive controls designed for ease of use.</p>
      <p><strong>Responsive Design:</strong> Access your notes from any device, thanks to our responsive design that adapts to desktops, tablets, and mobile phones.</p>
      <p><strong>Simple and Intuitive Interface:</strong> Focus on what matters most — your notes. Our clean interface allows you to manage your information without distractions.</p>
      
      <h3>Why Choose Our Notes App?</h3>
      <p>Our team is dedicated to crafting a reliable and user-friendly tool for note management. Whether you're a student, professional, or anyone in between, our Notes App is designed to enhance your productivity and organization without compromising on security.</p>
      
      <h3>Get Started Today</h3>
      <p>Join thousands of users who have already simplified their note-taking experience with our app. Sign up now and start organizing your thoughts in a smarter way.</p>
      
      <Link to='/signup' className="signup-link">Sign up now</Link>
    </div>
  );
}

export default About;
