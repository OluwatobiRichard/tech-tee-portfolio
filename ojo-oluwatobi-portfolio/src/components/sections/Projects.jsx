import React from 'react'

export const Projects = () => {
  return (
    <section 
    id='projects' 
    className='min-h-screen flex items-center justify-center py-20'
    style={{ 
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
            <div className='p-5 rounded-xl border-white/10 hover:-translate-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,138,246,0.2)] transition'>
               <h3>Cloud Platform</h3>
               <p>
                    Scalable cloud infrastructure management with real-time monitoring and automated scaling.
               </p>
               <div>
                    {['React.js', 'Figma', 'Tailwindcss'].map((tech, key) => (
                         <span
                            key={key}
                            className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,138,246,0.1)] transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
  )
};
