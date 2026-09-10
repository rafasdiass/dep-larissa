/**
 * Manifest de Assets Oficiais do Website Larissa DeLucca (15888 MDB)
 * Mapeia as fotos, vídeos e documentos oficiais com caminhos públicos e metadados.
 */
export const assetManifest = {
  images: {
    hero: {
      fileName: 'hero-larissa-delucca.jpg',
      src: '/assets/images/hero-larissa-delucca.jpg',
      alt: 'Larissa DeLucca, candidata a Deputada Estadual 15888 pelo MDB Ceará',
      role: 'Foto principal da Hero Section',
      width: 1024,
      height: 1536,
    },
    bio: {
      fileName: 'bio-larissa-delucca.jpg',
      src: '/assets/images/bio-larissa-delucca.jpg',
      alt: 'Larissa DeLucca em diálogo com mulheres e mães cearenses',
      role: 'Foto de apresentação e perfil',
      width: 1024,
      height: 1536,
    },
    trajectory: {
      fileName: 'trajetoria-larissa-delucca.jpg',
      src: '/assets/images/trajetoria-larissa-delucca.jpg',
      alt: 'Larissa DeLucca liderando encontro da Fundação Mulheres Aceleradas',
      role: 'Trajetória profissional e social',
      width: 1089,
      height: 1445,
    },
    palette: {
      fileName: 'cores-larissa-delucca.jpg',
      src: '/assets/images/cores-larissa-delucca.jpg',
      alt: 'Paleta oficial de cores da campanha: Rosa, Laranja e Amarelo',
      role: 'Referência visual oficial',
      width: 1144,
      height: 1600,
    },
    gradient: {
      fileName: 'degrade-larissa-delucca.jpg',
      src: '/assets/images/degrade-larissa-delucca.jpg',
      alt: 'Degradê oficial vibrante da campanha 15888',
      role: 'Textura e identidade de fundo',
      width: 1120,
      height: 1600,
    },
    socialLanguage: {
      fileName: 'redes-larissa-delucca.jpg',
      src: '/assets/images/redes-larissa-delucca.jpg',
      alt: 'Linguagem digital de acolhimento e escuta ativa',
      role: 'Cards de redes sociais',
      width: 1142,
      height: 1600,
    },
  },
  videos: [
    {
      id: 'video-apresentacao',
      title: 'Por que sou candidata a Deputada Estadual',
      description: 'Larissa DeLucca compartilha sua trajetória como advogada, mãe atípica e sua motivação para disputar a Assembleia Legislativa do Ceará.',
      src: '/assets/videos/apresentacao-larissa-delucca.mp4',
      fileName: 'apresentacao-larissa-delucca.mp4',
      duration: '1:12',
      thumbnailText: 'Apresentação Oficial',
    },
    {
      id: 'video-maes-atipicas',
      title: 'A Luta das Mães Atípicas no Ceará',
      description: 'O diagnóstico da carência de terapias multidisciplinares (T.O., fonoaudiologia, psicologia) e a proposta de uma Rede Estadual de Apoio Integral.',
      src: '/assets/videos/maes-atipicas-larissa-delucca.mp4',
      fileName: 'maes-atipicas-larissa-delucca.mp4',
      duration: '1:45',
      thumbnailText: 'Maternidade e Inclusão',
    },
    {
      id: 'video-mulheres-aceleradas',
      title: 'Mulheres Aceleradas: Autonomia e Renda',
      description: 'Como o microcrédito orientado e a capacitação feminina transformam famílias e geram independência real.',
      src: '/assets/videos/mulheres-aceleradas-larissa-delucca.mp4',
      fileName: 'mulheres-aceleradas-larissa-delucca.mp4',
      duration: '1:30',
      thumbnailText: 'Autonomia Econômica',
    },
  ],
  documents: {
    mandatePlan: {
      fileName: 'plano-de-mandato-larissa-delucca-15888.pdf',
      downloadUrl: '/assets/docs/plano-de-mandato-larissa-delucca-15888.pdf',
      title: 'Plano de Mandato — Larissa DeLucca Deputada Estadual 15888',
      version: '1.0 Oficial',
      pages: '28 páginas',
      size: '672 KB',
    },
  },
};
