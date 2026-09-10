import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { BioPage } from './pages/BioPage';
import { ProposalsPage } from './pages/ProposalsPage';
import { AutonomiaTrabalhoPage } from './pages/proposals/AutonomiaTrabalhoPage';
import { MaternidadeCuidadoPage } from './pages/proposals/MaternidadeCuidadoPage';
import { ProtecaoMulheresPage } from './pages/proposals/ProtecaoMulheresPage';
import { EstadoEntregaPage } from './pages/proposals/EstadoEntregaPage';
import { IndividualProposalPage } from './pages/proposals/IndividualProposalPage';
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

          {/* Rotas Canônicas dos 4 Eixos */}
          <Route path="/propostas/autonomia-e-trabalho" element={<AutonomiaTrabalhoPage />} />
          <Route path="/propostas/maternidade-infancia-rede-cuidado" element={<MaternidadeCuidadoPage />} />
          <Route path="/propostas/protecao-as-mulheres" element={<ProtecaoMulheresPage />} />
          <Route path="/propostas/estado-que-enxerga-integra-entrega" element={<EstadoEntregaPage />} />

          {/* Rota Individual de Proposta */}
          <Route path="/proposta/:slug" element={<IndividualProposalPage />} />

          {/* Demais Páginas Oficiais */}
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
