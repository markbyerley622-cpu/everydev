import { useState, useEffect } from 'react'

function Navbar({ onConnectWallet }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#what-is', label: 'About' },
    { href: '#tiers', label: 'Access Tiers' },
    { href: '#tools', label: 'Tools' },
    { href: '#roadmap', label: 'Roadmap' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo - Responsive sizing */}
          <a href="#" className="flex items-center gap-2 md:gap-3 lg:gap-4 group">
            <img
              src="/logo.png"
              alt="every.dev"
              className="h-8 md:h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-lg md:text-2xl lg:text-3xl font-bold text-soft-white">
              every<span className="text-accent-pink">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-light hover:text-soft-white transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Connect Wallet Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onConnectWallet}
              className="flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-accent-pink to-accent-violet
                         text-white text-sm lg:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-pink/30
                         transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7H18V6C18 4.34 16.66 3 15 3H5C3.34 3 2 4.34 2 6V18C2 19.66 3.34 21 5 21H19C20.66 21 22 19.66 22 18V10C22 8.34 20.66 7 19 7ZM5 5H15C15.55 5 16 5.45 16 6V7H5C4.45 7 4 6.55 4 6C4 5.45 4.45 5 5 5ZM20 18C20 18.55 19.55 19 19 19H5C4.45 19 4 18.55 4 18V8.83C4.32 8.94 4.66 9 5 9H19C19.55 9 20 9.45 20 10V18ZM16 14C16 14.83 16.67 15.5 17.5 15.5C18.33 15.5 19 14.83 19 14C19 13.17 18.33 12.5 17.5 12.5C16.67 12.5 16 13.17 16 14Z" fill="currentColor"/>
              </svg>
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-soft-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-dark/95 backdrop-blur-md border-t border-slate-medium">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate-light hover:text-soft-white transition-colors py-2 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
