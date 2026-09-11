import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { seoConfig } from '../../config/seo.config';

export function SEO({
  title,
  description,
  canonical,
  image = '/assets/images/hero-larissa-delucca.jpg',
  schema,
}) {
  const { pathname } = useLocation();

  const finalTitle = title ? `${title} | Larissa DeLucca 15888` : seoConfig.defaultTitle;
  const finalDesc = description || seoConfig.defaultDescription;
  const finalCanonical = canonical || `${siteConfig.urls.domain}${pathname}`;
  const finalImage = image.startsWith('http') ? image : `${siteConfig.urls.domain}${image}`;

  useEffect(() => {
    // Atualiza title
    document.title = finalTitle;

    // Atualiza meta tags comuns
    const updateMeta = (name, content, attr = 'name') => {
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', finalDesc);
    updateMeta('og:title', finalTitle, 'property');
    updateMeta('og:description', finalDesc, 'property');
    updateMeta('og:url', finalCanonical, 'property');
    updateMeta('og:image', finalImage, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDesc);
    updateMeta('twitter:image', finalImage);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', finalCanonical);

    // Schema.org JSON-LD
    const baseSchema = schema || {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.candidate.name,
      jobTitle: siteConfig.candidate.office,
      worksFor: {
        '@type': 'Organization',
        name: 'Assembleia Legislativa do Estado do Ceará (ALCE)',
      },
      memberOf: {
        '@type': 'PoliticalParty',
        name: siteConfig.candidate.party,
      },
      url: siteConfig.urls.domain,
      image: finalImage,
      sameAs: [siteConfig.urls.instagram],
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(baseSchema);
  }, [finalTitle, finalDesc, finalCanonical, finalImage, schema]);

  return null;
}
