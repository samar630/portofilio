import react from 'react';
import './experience.css';
const Experience = () =>{
    return (
      <div className='Experience'>
        <h1>Experience</h1>
        <div className='card__experience'>
            <h2>Frontend Web Developer</h2>
            <h3>Ramaaz company</h3>
            <ul>
                <li>Convert designs into responsive reusable components and pages.</li>
                <li>Using NextJs ,ReactJs and making asynchronous API calls in order to maintain consistency across client, server, 
                    and native environments maintainable and testable code in addition to fixing bugs and adding new features to existing applications.
             </li>
            </ul>
        </div>
        <div className='card__experience'>
            <h2>MERN stack developer</h2>
            <h3>freelancer</h3>
            <ul>
                <li>Convert designs into responsive reusable components and pages.</li>
                <li>Making use of React.js for Frontend, Node.js as a server-side framework, and MongoDB as the document database.</li>
            </ul>
        </div>
      </div>
    )
}

export default Experience