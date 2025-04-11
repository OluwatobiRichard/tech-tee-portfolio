import React from 'react';

export const About = () => {
  const frontendSkills = [
    'React.js',
    'TailwindCss',
    'Html',
    'Css',
    'JavaScript',
    'Figma',
    'APIs'
  ];

  return (
    <section 
      id='about' 
      className='min-h-screen flex items-center justify-center py-20 bg-[url("../src/assets/of.jpg")] bg-cover bg-center bg-black bg-opacity-50'
    >
      <div className='max-w-3xl px-4'>
        <h2 
          className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'
        >
          About Me
        </h2>

        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          <p className='text-gray-100 mb-6'>
          As a passionate front-end developer, I bring a unique blend of technical expertise, creativity, and user-focused design to every project. With my deep understanding of modern front-end technologies and framework, I have the ability to translate complex requirements into seamless, responsive, and visually appealing interfaces.
          </p>
          <h3 className='text-xl font-bold mb-4'>Key Reasons to Hire Me</h3>
          <ul className='list-disc lisk-inside text-gray-300 space-y-2'>
            <li>
                <strong>Technical Proficiency</strong>:
                I am skilled in HTML, CSS, JavaScript, and modern framework like React.js. My knowledge of tools like Git, Webpack, and other build systems ensures streamlined and efficient development.
            </li>
            <li>
                <strong>Design & UX Focus</strong>:
                Beyond coding, I have a strong eye for design and usability. I prioritize creating engaging and accessible user experiences that drive results and leave users satisfied.
            </li>
            <li>
                <strong>Problem-Solving Abilities</strong>:
                I excel at debugging, optimizing, and finding creative solutions to complex problems. My ability to adapt and learn new technologies quickly makes me an asset in dynamic environments.
            </li>
            <li>
                <strong>Collaboration & Communication</strong>:
                I thrive in team settings, collaborating closely with designers, back-end developers, and product managers to deliver cohesive solutions. My communication skills ensure alignment across stakeholders.
            </li>
            <li>
                <strong>Continuous Improvement</strong>:
                I am committed to staying updated with the latest trends and best practices in front-end development, ensuring that my work is future-proof and innovative.
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4 '>Frontend Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {frontendSkills.map((tech, key) => {
                return (
                  <span 
                    key={key}
                    className='bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8pxrgba(59,138,2246,0.2)] transition'
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className='grid grid-col-1 md:grid-cols-2 gap-6 mt-8'>
          <div className='p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all '>
              <h3 className='text-xl font-bold mb-4'>🎓 Education</h3>
              <ul className='list-disc lisk-inside text-gray-300 space-y-2'>
                <li>
                  <strong>B.S.C Agric & Envi Engineering</strong> - Obafemi Awolowo University 2016-2021
                </li>
                <li>
                  <strong>Software Engineering(Frontend)</strong> - African Leadership Experience(ALX) 2024-2025
                </li>
                <li>
                  <strong>Virtual Assistance</strong> - African Leadership Experience(ALX) 2024
                </li>
              </ul>
            
           </div>
           <div className='p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all '>
              <h3 className='text-xl font-bold mb-4'>💻 Work Experience</h3>
              <div className='space-y-4 text-gray300'>
                <div>
                  <h4 className='font-semibold'>Building Movie Data-Base App @FilmVerse (From 2024 December - 2025 January)</h4>
                  <p> I build and design FilmVerse with react.js for all things movies.It is Builted with movie enthusiasts in mind, The application provides a seamless experience for browsing, tracking, and discovering films from around the world.</p>
                </div>
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
};