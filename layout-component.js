import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if the link is active
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="border-b border-cyber-blue/20 py-4 backdrop-blur-sm bg-cyber-black/80 sticky top-0 z-50">
      <div className="cyber-container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-sm bg-cyber-blue/20 flex items-center justify-center border border-cyber-blue/30 shadow-neon-blue">
            <span className="text-cyber-blue font-bold">&gt;_</span>
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">DEV<span className="text-white/80">MATRIX</span></span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden cyber-button px-2 py-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={`cyber-header-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/projects" className={`cyber-header-link ${isActive('/projects') ? 'active' : ''}`}>
            Projects
          </Link>
          <Link href="/notes" className={`cyber-header-link ${isActive('/notes') ? 'active' : ''}`}>
            TIL/TIF
          </Link>
          <Link href="/about" className={`cyber-header-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cyber-button text-sm"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </span>
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 border-t border-cyber-blue/10 mt-4 cyber-container">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className={`cyber-header-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`cyber-header-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/notes" 
              className={`cyber-header-link ${isActive('/notes') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              TIL/TIF
            </Link>
            <Link 
              href="/about" 
              className={`cyber-header-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button text-sm w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-cyber-blue/20 py-8">
      <div className="cyber-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-sm bg-cyber-blue/20 flex items-center justify-center border border-cyber-blue/30">
                <span className="text-cyber-blue font-bold text-xs">&gt;_</span>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">DEV<span className="text-white/80">MATRIX</span></span>
            </div>
            <p className="text-cyber-gray text-sm">
              A personal portfolio and knowledge repository with a futuristic Tron/Blade Runner-inspired aesthetic.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90">Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="text-cyber-gray hover:text-cyber-blue transition-colors">Home</Link>
              <Link href="/projects" className="text-cyber-gray hover:text-cyber-blue transition-colors">Projects</Link>
              <Link href="/notes" className="text-cyber-gray hover:text-cyber-blue transition-colors">TIL/TIF</Link>
              <Link href="/about" className="text-cyber-gray hover:text-cyber-blue transition-colors">About</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-cyber-gray">© {new Date().getFullYear()} Your Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children, title = 'DevMatrix - Future Tech Portfolio' }) {
  // Add some subtle scan line effect
  const [scanLineOpacity, setScanLineOpacity] = useState(0.03);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLineOpacity(prev => (Math.random() * 0.03) + 0.02);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A futuristic personal website with Tron/Blade Runner aesthetics" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        {/* Scan line effect */}
        <div 
          className="fixed inset-0 pointer-events-none z-50" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(0,238,255,${scanLineOpacity}) 0px, transparent 1px, transparent 2px)`,
            backgroundSize: '100% 3px',
          }}
        />
        
        {/* Subtle grid background */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,238,255,0.08) 0%, transparent 80%)`,
          }}
        />
        
        <main className="flex-grow pt-6 pb-16">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}
