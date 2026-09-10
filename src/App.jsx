import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { BioPage } from './pages/BioPage';
import { ProposalsPage } from './pages/ProposalsPage';
import { ProposalDetailPage } from './pages/ProposalDetailPage';
import { MandatePlanPage } from './pages/MandatePlanPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { PressPage } from './pages/PressPage';
import { ContactPage } from './pages/ContactPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quem-e-larissa" element={<BioPage />} />
          <Route path="/propostas" element={<ProposalsPage />} />
          <Route path="/propostas/:slug" element={<ProposalDetailPage />} />
          <Route path="/plano-de-mandato" element={<MandatePlanPage />} />
          <Route path="/transparencia" element={<TransparencyPage />} />
          <Route path="/materiais" element={<MaterialsPage />} />
          <Route path="/imprensa" element={<PressPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/acessibilidade" element={<AccessibilityPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
