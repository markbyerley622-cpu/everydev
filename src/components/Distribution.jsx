function Distribution() {
  const advantages = [
    {
      title: 'Curated Cabals',
      description: 'Access private groups of builders, operators, and investors who coordinate on high-value opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'KOL Relationships',
      description: 'Connect with key opinion leaders who have proven track records in crypto. Real influence, real reach.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: 'Coordinated Distribution',
      description: 'Launch with synchronized promotion across multiple channels. Maximum impact, minimal waste.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    {
      title: 'Signal Amplification',
      description: 'Turn launches into movements. Leverage network effects and coordinated messaging for maximum visibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ]

  return (
    <section className="section-padding relative bg-gradient-to-b from-deep-charcoal via-slate-dark/30 to-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-accent-violet/10 rounded-3xl blur-2xl" />

              {/* Card image - spinning */}
              <div className="relative z-10 glass-card p-8 rounded-3xl">
                <div className="spin-card-container">
                  <img
                    src="/card.png"
                    alt="Distribution network"
                    className="w-full h-auto rounded-2xl spin-card"
                  />
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl">
                  <div className="text-sm text-slate-light">Network Reach</div>
                  <div className="text-xl font-bold gradient-text">Expanding</div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl">
                  <div className="text-sm text-slate-light">Active Cabals</div>
                  <div className="text-xl font-bold text-soft-white">Growing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
                Network Effects
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white leading-tight">
                Distribution & <span className="gradient-text">Cabals</span>
              </h2>
              <p className="text-lg text-slate-light">
                In crypto, distribution is everything. Access coordinated networks that
                can move markets and amplify your launch to the right audiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-dark/30 border border-slate-medium/30
                             hover:border-accent-pink/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20
                                  flex items-center justify-center text-accent-pink mb-4
                                  group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-slate-light">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 glass-card">
              <p className="text-soft-white/90 font-medium">
                "Distribution isn't luck. It's access. every.dev gives you both."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distribution
