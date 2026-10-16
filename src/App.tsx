/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CooperationSection } from './components/CooperationSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TeamsSection } from './components/TeamsSection';
import { CoachesSection } from './components/CoachesSection';
import { ClubLifeSection } from './components/ClubLifeSection';
import { SponsorshipSection } from './components/SponsorshipSection';
import { FAQSection } from './components/FAQSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { TeamGroup } from './config/clubData';

export default function App() {
  const [selectedTeamForInquiry, setSelectedTeamForInquiry] = useState<TeamGroup | null>(null);

  const handleSelectTeam = (team: TeamGroup) => {
    setSelectedTeamForInquiry(team);
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSelectedTeam = () => {
    setSelectedTeamForInquiry(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-[#E6E8EB] flex flex-col selection:bg-[#FF5A1F] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1">
        {/* Секция 1: Главный экран */}
        <HeroSection />

        {/* Секция 2: Сотрудничество с футбольными клубами и академиями */}
        <CooperationSection />

        {/* Секция 3: Философия и подход */}
        <PhilosophySection />

        {/* Секция 4: Команды клуба */}
        <TeamsSection onSelectTeamForInquiry={handleSelectTeam} />

        {/* Секция 5: Тренерский состав */}
        <CoachesSection />

        {/* Секция 6: Жизнь клуба (фотоблок) */}
        <ClubLifeSection />

        {/* Секция 7: Партнёрство и спонсорство */}
        <SponsorshipSection />

        {/* Секция 8: Часто задаваемые вопросы (FAQ) */}
        <FAQSection />

        {/* Секция 9: Контакты клуба */}
        <ContactsSection
          selectedTeam={selectedTeamForInquiry}
          onClearSelectedTeam={handleClearSelectedTeam}
        />
      </main>

      {/* Секция 8: Футер */}
      <Footer />
    </div>
  );
}
