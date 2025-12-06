import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  canonical,
  type = "website",
  image = "/mec-logo.png",
  noindex = false
}: SEOProps) => {
  const siteTitle = "Momentum Edge Consulting";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const baseUrl = "https://momentumedgeconsulting.com";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
