function WhyHold() {
  const reasons = [
    {
      title: 'Launch Faster',
      description: 'Skip the learning curve. Access proven frameworks and tools that accelerate your path to market.',
      icon: '01'
    },
    {
      title: 'Launch with Backing',
      description: 'Go to market with real support behind you. Liquidity, promotion, and coordination from day one.',
      icon: '02'
    },
    {
      title: 'Avoid Amateur Mistakes',
      description: 'Learn from those who\'ve done it. Access playbooks that help you avoid common pitfalls.',
      icon: '03'
    },
    {
      title: 'Access Real Liquidity',
      description: 'Connect with liquidity providers and market makers who understand what you\'re building.',
      icon: '04'
    },
    {
      title: 'Build Credibility Instantly',
      description: 'Being part of the every.dev ecosystem signals seriousness to partners and investors.',
      icon: '05'
    },
    {
      title: 'Join the Inner Circle',
      description: 'Network with other serious builders. Opportunities come from connections.',
      icon: '06'
    },
  ]

  return (
    <section className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
            The Value Proposition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white">
            Why Hold <span className="gradient-text">every.dev</span>?
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            This isn't speculation. It's access. Here's what holding unlocks for serious builders.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-dark/50 to-slate-dark/30
                         border border-slate-medium/30 hover:border-accent-pink/50
                         transition-all duration-500 group"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl
                              bg-gradient-to-br from-accent-pink to-accent-violet
                              flex items-center justify-center text-white font-bold text-lg
                              group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-soft-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-light leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-pink to-accent-violet
                              group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#tiers"
            className="inline-flex items-center gap-3 btn-primary"
          >
            Check Your Tier
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyHold
