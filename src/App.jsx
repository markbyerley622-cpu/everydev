import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import AccessTiers from './components/AccessTiers'
import Tools from './components/Tools'
import Distribution from './components/Distribution'
import WhyHold from './components/WhyHold'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import WalletModal from './components/WalletModal'

function App() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState(null)

  const openWalletModal = (tier = null) => {
    setSelectedTier(tier)
    setIsWalletModalOpen(true)
  }

  const closeWalletModal = () => {
    setIsWalletModalOpen(false)
    setSelectedTier(null)
  }

  return (
    <div className="min-h-screen bg-deep-charcoal">
      <Navbar onConnectWallet={() => openWalletModal()} />
      <main>
        <Hero onConnectWallet={() => openWalletModal()} />
        <WhatIs />
        <AccessTiers onSelectTier={openWalletModal} />
        <Tools />
        <Distribution />
        <WhyHold />
        <Roadmap />
      </main>
      <Footer />
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={closeWalletModal}
        selectedTier={selectedTier}
      />
    </div>
  )
}

export default App
