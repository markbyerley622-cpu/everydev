function WhatIs() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Utility Access Token',
      description: 'Not a meme coin. A key that unlocks real infrastructure for serious on-chain launches.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Access Scales with Holdings',
      description: 'The more you hold, the deeper your access. From basic tools to direct team partnerships.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Built for Serious Launches',
      description: 'Connect with liquidity partners, KOLs, market makers, and distribution networks.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'No Holding, No Access',
      description: 'Simple rule. Want the infrastructure? Hold the token. That\'s the gate.'
    }
  ]

  return (
    <section id="what-is" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
                The Concept
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white leading-tight">
              What is <span className="gradient-text">every.dev</span>?
            </h2>

            <p className="text-lg text-slate-light leading-relaxed">
              every.dev isn't a meme — it's the gate to launching properly. This is a utility access
              token designed for developers who want to launch real projects on-chain.
            </p>

            <div className="p-6 glass-card">
              <blockquote className="text-xl md:text-2xl font-bold text-soft-white">
                "Everything <span className="text-soft-white">every</span><span className="text-accent-pink">.dev</span> needs."
              </blockquote>
            </div>

            <p className="text-slate-light">
              Token holders unlock tiered access to infrastructure, people, liquidity, and distribution
              based on how many tokens they hold. The more you commit, the deeper your access.
            </p>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-accent-pink/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20
                                flex items-center justify-center text-accent-pink mb-4
                                group-hover:from-accent-pink/30 group-hover:to-accent-violet/30 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-soft-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIs
