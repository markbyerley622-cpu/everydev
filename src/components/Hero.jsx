function Hero({ onConnectWallet }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal via-slate-dark/50 to-deep-charcoal" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-violet/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Banner image */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src="/banner.png"
                alt="every.dev banner"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-soft-white">every</span>
              <span className="text-accent-pink">.dev</span>
              <span className="block text-soft-white mt-2">Launch Real Projects</span>
              <span className="block gradient-text">On-Chain</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-light max-w-xl mx-auto lg:mx-0">
              One token. Access to liquidity, tools, and the people that matter.
              Hold <span className="text-accent-pink font-semibold">every.dev</span> to unlock
              tiered access to everything you need for a successful launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#tiers" className="btn-primary text-center">
                View Access Tiers
              </a>
              <a href="#what-is" className="btn-secondary text-center">
                Why every.dev
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-medium/50 mt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-soft-white">4</div>
                <div className="text-sm text-slate-light">Access Tiers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent-pink">Unlimited</div>
                <div className="text-sm text-slate-light">Potential</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-soft-white">24/7</div>
                <div className="text-sm text-slate-light">Access</div>
              </div>
            </div>
          </div>

          {/* Right content - Character */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Glow effect behind character */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/20 to-accent-violet/20 rounded-full blur-3xl scale-110" />

              <img
                src="/character.png"
                alt="every.dev mascot"
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain
                           drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
