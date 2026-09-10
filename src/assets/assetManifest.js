/**
 * Manifest de Assets Oficiais do Website Larissa DeLucca
 * Centraliza referências a fotos de campanha, vídeos e plano de mandato.
 */
export const assetManifest = {
  images: {
    hero: {
      fileName: 'cbe275b3-dfc4-53ea-8a55-8257f0d14f31.jpg',
      alt: 'Larissa DeLucca, candidata a Deputada Estadual 15888',
      role: 'Foto principal da Hero Section',
    },
    bio: {
      fileName: '3b89a2ae-2796-56c5-9ed9-09a2ebc6e823.jpg',
      alt: 'Larissa DeLucca em diálogo com lideranças comunitárias',
      role: 'Foto de apresentação e perfil',
    },
    trajectory: {
      fileName: 'e5d0ae6a-5513-59f8-b975-bcfb322f5fbe.jpg',
      alt: 'Larissa DeLucca em atuação na Fundação Mulheres Aceleradas',
      role: 'Trajetória profissional e social',
    },
    palette: {
      fileName: '4b3408dd-1c9c-573c-89a3-49920f6e4ecd.jpg',
      alt: 'Identidade visual e paleta de cores da campanha',
      role: 'Referência visual oficial',
    },
    gradient: {
      fileName: 'b384f390-1aee-578c-95bd-00b2657fc84c.jpg',
      alt: 'Degradê oficial Rosa, Laranja e Amarelo',
      role: 'Textura e identidade de fundo',
    },
    socialLanguage: {
      fileName: '89ae92b3-0fad-5201-a8d0-56f2594a51e0.jpg',
      alt: 'Linguagem digital de acolhimento e escuta ativa',
      role: 'Cards de redes sociais',
    },
  },
  videos: [
    {
      id: 'video-1',
      title: 'Por que sou candidata a Deputada Estadual',
      fileName: 'WhatsApp Video 2026-09-10 at 13.34.05(1).mp4',
      duration: '1:12',
      thumbnailText: 'Apresentação Oficial',
    },
    {
      id: 'video-2',
      title: 'A Luta das Mães Atípicas no Ceará',
      fileName: 'WhatsApp Video 2026-09-10 at 13.36.10(1).mp4',
      duration: '1:45',
      thumbnailText: 'Maternidade e Inclusão',
    },
    {
      id: 'video-3',
      title: 'Mulheres Aceleradas: Autonomia e Renda',
      fileName: 'WhatsApp Video 2026-09-10 at 13.39.09(1).mp4',
      duration: '1:30',
      thumbnailText: 'Autonomia Econômica',
    },
  ],
  documents: {
    mandatePlan: {
      fileName: 'Plano de mandato (1).pdf',
      title: 'Plano de Mandato — Larissa DeLucca Deputada Estadual 15888',
      version: '1.0 Oficial',
      pages: '28 páginas',
      size: '4.2 MB',
      downloadUrl: '/docs/plano-de-mandato-larissa-delucca-15888.pdf',
    },
  },
};
