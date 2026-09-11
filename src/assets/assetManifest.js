/**
 * Manifest de Assets Oficiais do Website Larissa DeLucca (15888 MDB)
 * Mapeia as fotos, vídeos e documentos oficiais com caminhos públicos e metadados.
 */
export const assetManifest = {
  images: {
    hero: {
      fileName: 'larissa-retrato-principal.jpg',
      src: '/assets/images/larissa-retrato-principal.jpg',
      alt: 'Larissa DeLucca, candidata a Deputada Estadual 15888 pelo MDB Ceará',
      role: 'Retrato principal', width: 1120, height: 1600,
    },
    bio: {
      fileName: 'larissa-retrato-perfil.jpg',
      src: '/assets/images/larissa-retrato-perfil.jpg',
      alt: 'Retrato de perfil de Larissa DeLucca',
      role: 'Retrato da biografia', width: 1144, height: 1600,
    },
    trajectory: {
      fileName: 'larissa-retrato-frontal.jpg',
      src: '/assets/images/larissa-retrato-frontal.jpg',
      alt: 'Retrato de Larissa DeLucca',
      role: 'Retrato complementar', width: 1142, height: 1600,
    },
    // Design references are not photographs and must not appear as landing-page imagery.
    palette: {
      src: '/assets/images/hero-larissa-delucca.jpg',
      alt: 'Manual de cores da campanha', role: 'Referência de design',
      width: 1024, height: 1536,
    },
    gradient: {
      src: '/assets/images/bio-larissa-delucca.jpg',
      alt: 'Degradê rosa, laranja e amarelo', role: 'Referência de design',
      width: 1024, height: 1536,
    },
    socialLanguage: {
      src: '/assets/images/trajetoria-larissa-delucca.jpg',
      alt: 'Arte de campanha de Larissa DeLucca', role: 'Material de campanha',
      width: 1089, height: 1445,
    },
  },
  videos: [
    {
      id: 'video-apresentacao',
      title: 'Por que sou candidata a Deputada Estadual',
      description: 'Larissa DeLucca compartilha sua trajetória como advogada, mãe atípica e sua motivação para disputar a Assembleia Legislativa do Ceará.',
      src: '/assets/videos/apresentacao-larissa-delucca.mp4',
      poster: '/assets/images/video-posters/apresentacao.jpg',
      fileName: 'apresentacao-larissa-delucca.mp4',
      duration: '1:03',
      thumbnailText: 'Apresentação Oficial',
    },
    {
      id: 'video-maes-atipicas',
      title: 'A Luta das Mães Atípicas no Ceará',
      description: 'O diagnóstico da carência de terapias multidisciplinares (T.O., fonoaudiologia, psicologia) e a proposta de uma Rede Estadual de Apoio Integral.',
      src: '/assets/videos/maes-atipicas-larissa-delucca.mp4',
      poster: '/assets/images/video-posters/maes-atipicas.jpg',
      fileName: 'maes-atipicas-larissa-delucca.mp4',
      duration: '0:24',
      thumbnailText: 'Maternidade e Inclusão',
    },
    {
      id: 'video-mulheres-aceleradas',
      title: 'Mulheres Aceleradas: Autonomia e Renda',
      description: 'Como o microcrédito orientado e a capacitação feminina transformam famílias e geram independência real.',
      src: '/assets/videos/mulheres-aceleradas-larissa-delucca.mp4',
      poster: '/assets/images/video-posters/mulheres-aceleradas.jpg',
      fileName: 'mulheres-aceleradas-larissa-delucca.mp4',
      duration: '0:55',
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
