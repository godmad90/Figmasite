import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContentSection } from './components/ContentSection';
import { SEO, SEOHelmetProvider, StructuredData } from './components/SEO';

export default function App() {
  return (
    <SEOHelmetProvider>
      <SEO />
      <StructuredData />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ContentSection />
        </main>
        <footer className="bg-slate-900 text-slate-400 py-6">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© 2026 AU Casino Guide. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </SEOHelmetProvider>
  );
}