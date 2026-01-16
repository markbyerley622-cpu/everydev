function Tools() {
  const tools = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Token Bundling Tools',
      description: 'Advanced tools for bundling and deploying tokens with optimized parameters. Configure tokenomics, manage distribution, and execute launches efficiently.',
      features: ['Multi-chain support', 'Gas optimization', 'Custom parameters']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Liquidity Coordination',
      description: 'Coordinate liquidity provisioning across DEXs and AMMs. Access strategies for optimal liquidity deployment and management.',
      features: ['LP strategies', 'Multi-DEX support', 'Yield optimization']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Market Maker Access',
      description: 'Connect with vetted market makers who understand the crypto landscape. Get professional MM support for sustainable trading.',
      features: ['Vetted MMs', 'Volume support', 'Price stability']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Launch Frameworks',
      description: 'Battle-tested frameworks for successful token launches. From pre-launch to post-launch, follow proven strategies.',
      features: ['Playbooks', 'Checklists', 'Best practices']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: 'Distribution Tools',
      description: 'Reach the right audiences with coordinated distribution. Access channels, networks, and amplification strategies.',
      features: ['Channel access', 'Amplification', 'Targeting']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Analytics Dashboard',
      description: 'Monitor your launch metrics in real-time. Track performance, engagement, and key metrics across all channels.',
      features: ['Real-time data', 'Custom metrics', 'Export tools']
    },
  ]

  return (
    <section id="tools" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white">
            Tools & <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            Real infrastructure for real launches. Access professional-grade tools
            that serious projects use to succeed on-chain.
          </p>
        </div>

        {/* Character accent */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/20 to-accent-violet/20 rounded-full blur-2xl" />
            <img
              src="/section cooking.png"
              alt="Building tools"
              className="relative z-10 h-48 w-auto object-contain"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-accent-pink/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20
                              flex items-center justify-center text-accent-pink mb-6
                              group-hover:from-accent-pink/30 group-hover:to-accent-violet/30 transition-all
                              group-hover:scale-110 duration-300">
                {tool.icon}
              </div>

              <h3 className="text-xl font-bold text-soft-white mb-3">
                {tool.title}
              </h3>

              <p className="text-slate-light mb-6 leading-relaxed">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full
                               bg-slate-dark border border-slate-medium text-slate-light"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
