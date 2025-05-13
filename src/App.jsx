import { useEffect } from "react";
import Layout from "./app/Layout"
import Home from './pages/Home'
import { Helmet, HelmetProvider } from "react-helmet-async"

function App() {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-Z3DGNZ7QB0";
    script1.async = true;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-Z3DGNZ7QB0");

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
    };
  }, []);
  
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>Winnr – Fantasy Contests for Crypto Narratives</title>
        <meta
          name="description"
          content="Winnr is a fantasy-style contest platform where you compete on crypto narratives, memes, and tokens."
        />
        <meta
          name="keywords"
          content="crypto, fantasy contests, crypto narratives, crypto memes, crypto tokens, blockchain gaming"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winnr.fun/" />
        <meta
          property="og:title"
          content="Winnr – Fantasy Contests for Crypto Narratives"
        />
        <meta
          property="og:description"
          content="Winnr is a fantasy-style contest platform where you compete on crypto narratives, memes, and tokens."
        />
        <meta property="og:image" content="https://winnr.fun/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://winnr.fun/" />
        <meta property="twitter:site" content="@winnrdotfun" />
        <meta
          property="twitter:title"
          content="Winnr – Fantasy Contests for Crypto Narratives"
        />
        <meta
          property="twitter:description"
          content="Winnr is a fantasy-style contest platform where you compete on crypto narratives, memes, and tokens."
        />
        <meta
          property="twitter:image"
          content="https://winnr.fun/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://winnr.fun/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

    
  
    
     <Layout>
      <Home/>
     </Layout>
    </HelmetProvider>
  )
}

export default App
