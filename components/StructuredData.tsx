import Script from "next/script";
// this for seo do not touh this!!

export default function StructuredData() {
  return (
    <Script
      id="structured-data-logo"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jasa Pembuatan Website",
          serviceType: "Web Development",
          provider: {
            "@type": "Organization",
            name: "SEMAR Web Agensi",
            url: "https://semar-id.vercel.app",
          },
          areaServed: [
            "Tenggarong Seberang",
            "Samarinda",
            "Balikpapan",
            "Kutai Kartanegara",
          ],
        }),
      }}
    />
  );
}
