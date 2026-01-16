function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Token Launch',
      status: 'current',
      items: [
        'Token deployment',
        'Initial liquidity',
        'Community launch',
        'Website & branding'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Tool Access',
      status: 'upcoming',
      items: [
        'Bundling tools release',
        'Launch frameworks',
        'Documentation',
        'Tier system activation'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Partner Launches',
      status: 'upcoming',
      items: [
        'First partner launches',
        'MM partnerships',
        'KOL network activation',
        'Cabal formation'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Ecosystem Expansion',
      status: 'upcoming',
      items: [
        'Multi-chain expansion',
        'Advanced tooling',
        'Institutional access',
        'Full ecosystem live'
      ]
    },
  ]

  return (
    <section id="roadmap" className="section-padding relative bg-gradient-to-b from-deep-charcoal via-slate-dark/30 to-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-pink text-sm font-semibold tracking-wider uppercase">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            A clear path forward. Each phase unlocks new capabilities for the ecosystem.
          </p>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-accent-pink via-accent-violet to-accent-pink opacity-30" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Dot */}
                <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex-shrink-0 flex items-center justify-center
                                ${phase.status === 'current'
                                  ? 'bg-accent-pink border-accent-pink/50 shadow-lg shadow-accent-pink/50'
                                  : 'bg-slate-dark border-slate-medium'}`}
                >
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>

                {/* Card */}
                <div className={`flex-1 glass-card p-6 rounded-2xl
                                ${phase.status === 'current'
                                  ? 'border-accent-pink/50 shadow-lg shadow-accent-pink/10'
                                  : 'border-slate-medium/30'}
                                hover:border-accent-pink/50 transition-all duration-300`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                                  ${phase.status === 'current'
                                    ? 'bg-gradient-to-r from-accent-pink to-accent-violet text-white'
                                    : 'bg-slate-dark border border-slate-medium text-slate-light'}`}
                  >
                    {phase.phase}
                  </div>

                  <h3 className="text-xl font-bold text-soft-white mb-4">
                    {phase.title}
                  </h3>

                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-light">
                        <svg className={`w-4 h-4 flex-shrink-0 ${phase.status === 'current' ? 'text-accent-pink' : 'text-slate-light/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {phase.status === 'current' && (
                    <div className="mt-4 pt-4 border-t border-slate-medium/30">
                      <span className="flex items-center gap-2 text-sm text-accent-pink font-medium">
                        <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-pink via-accent-violet to-accent-pink opacity-30 -translate-y-1/2" />

          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection line from dot to card */}
                <div className={`absolute left-1/2 w-0.5 bg-gradient-to-b from-accent-pink/50 to-transparent
                                ${index % 2 === 0 ? 'top-1/2 h-8' : 'bottom-1/2 h-8 rotate-180'}`}
                />

                {/* Dot - centered on timeline */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                                w-8 h-8 rounded-full border-4 flex items-center justify-center
                                ${phase.status === 'current'
                                  ? 'bg-accent-pink border-accent-pink/50 shadow-lg shadow-accent-pink/50'
                                  : 'bg-slate-dark border-slate-medium'}`}
                >
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>

                {/* Card - alternating top/bottom */}
                <div className={`${index % 2 === 0 ? 'pt-[calc(50%+2.5rem)]' : 'pb-[calc(50%+2.5rem)]'}`}>
                  <div className={`glass-card p-6 rounded-2xl
                                  ${phase.status === 'current'
                                    ? 'border-accent-pink/50 shadow-lg shadow-accent-pink/10'
                                    : 'border-slate-medium/30'}
                                  hover:border-accent-pink/50 transition-all duration-300`}
                  >
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                                    ${phase.status === 'current'
                                      ? 'bg-gradient-to-r from-accent-pink to-accent-violet text-white'
                                      : 'bg-slate-dark border border-slate-medium text-slate-light'}`}
                    >
                      {phase.phase}
                    </div>

                    <h3 className="text-xl font-bold text-soft-white mb-4">
                      {phase.title}
                    </h3>

                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-light">
                          <svg className={`w-4 h-4 flex-shrink-0 ${phase.status === 'current' ? 'text-accent-pink' : 'text-slate-light/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {phase.status === 'current' && (
                      <div className="mt-4 pt-4 border-t border-slate-medium/30">
                        <span className="flex items-center gap-2 text-sm text-accent-pink font-medium">
                          <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-light">
            Roadmap is indicative and subject to change based on ecosystem needs and opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
