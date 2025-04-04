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
      className='min-h-screen flex items-center justify-center py-20'
    >
      <div className='max-w-3xl px-4'>
        <h2 
          className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'
        >
          About Me
        </h2>

        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          <p className='text-gray-100 mb-6'>
            I love building user-friendly interfaces and responsive web solutions. I’ve worked with a bunch of tools, APIs, and libraries to bring ideas to life. With a knack for detail and a solid background in responsive design, I create seamless and engaging digital experiences. I enjoy turning complex requirements into simple, elegant solutions and always stay updated with the latest trends to ensure my projects are top-notch.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>Frontend Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {frontendSkills.map(skill => (
                <span key={skill} className='bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};