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
          I am adept at optimizing website performance, implementing best practices for SEO, and ensuring cross-browser compatibility. Additionally, I focus on intuitive UI/UX design, making sure that users can navigate the site effortlessly. With a keen eye for detail and a passion for innovative solutions, I am committed to delivering high-quality web projects that meet and exceed client expectations. I enjoy turning complex requirements into simple, elegant solutions and always stay updated with the latest trends to ensure my projects are top-notch.
          </p>
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