import React from 'react';

export const Projects = () => {
  return (
    <section 
      id='projects' 
      className='min-h-screen flex items-center justify-center py-20 bg-cover bg-center bg-projects-bg' // Custom class applied
      style={{ 
        // Inline style for dynamic background image (can be overridden)
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../src/assets/pro.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-5xl mx-auto px-4'>
        <h2 
          className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'
        >
          Featured Projects
        </h2>
        <div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6 '
        >
          <div className='p-5 rounded-xl border-white/10 hover:-translate-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition'>
            <h3 className='text-xl font-bold mb-2'>Movie Database</h3>
            <p className='text-gray-400 mb-4'>
              I built it with movie enthusiasts in mind, this application provides a seamless experience for browsing, tracking, and discovering films from around the world.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React.js', 'Figma', 'Tailwindcss'].map((tech, key) => (
                <span
                  key={key}
                  className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a 
                href="https://thefilmverse-omega.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer" 
                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
              >
                View Project ➡️
              </a>  
            </div>
          </div>
          <div className='p-5 rounded-xl border-white/10 hover:-translate-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition'>
            <h3 className='text-xl font-bold mb-2'>Movie Database</h3>
            <p className='text-gray-400 mb-4'>
              I built it with movie enthusiasts in mind, this application provides a seamless experience for browsing, tracking, and discovering films from around the world.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React.js', 'Figma', 'Tailwindcss'].map((tech, key) => (
                <span
                  key={key}
                  className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a 
                href="https://thefilmverse-omega.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
              >
                View Project ➡️
              </a>  
            </div>
          </div>
          <div className='p-5 rounded-xl border-white/10 hover:-translate-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition'>
            <h3 className='text-xl font-bold mb-2'>Movie Database</h3>
            <p className='text-gray-400 mb-4'>
              I built it with movie enthusiasts in mind, this application provides a seamless experience for browsing, tracking, and discovering films from around the world.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React.js', 'Figma', 'Tailwindcss'].map((tech, key) => (
                <span
                  key={key}
                  className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a 
                href="https://thefilmverse-omega.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
              >
                View Project ➡️
              </a>  
            </div>
          </div>
          <div className='p-5 rounded-xl border-white/10 hover:-translate-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition'>
            <h3 className='text-xl font-bold mb-2'>Movie Database</h3>
            <p className='text-gray-400 mb-4'>
              I built it with movie enthusiasts in mind, this application provides a seamless experience for browsing, tracking, and discovering films from around the world.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {['React.js', 'Figma', 'Tailwindcss'].map((tech, key) => (
                <span
                  key={key}
                  className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a 
                href="https://thefilmverse-omega.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
              >
                View Project ➡️
              </a>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};