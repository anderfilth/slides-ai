import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Presentation, Download } from 'lucide-react';
import { slides } from './data/slides';
import { exportToPPTX } from './utils/exportPPTX';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Handle scaling to maintain 16:9 aspect ratio like a real presentation
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && deckRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        const deckWidth = 1280;
        const deckHeight = 720;
        
        // Calculate scale to fit within container with some padding
        const scaleX = (clientWidth * 0.95) / deckWidth;
        const scaleY = (clientHeight * 0.95) / deckHeight;
        
        setScale(Math.min(scaleX, scaleY));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFullscreen]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleExportPPTX = async () => {
    setIsExporting(true);
    try {
      await exportToPPTX(slides);
    } catch (error) {
      console.error("Failed to export PPTX:", error);
      alert("Erro ao exportar a apresentação.");
    } finally {
      setIsExporting(false);
    }
  };

  const slide = slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.layout) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mb-8 border border-emerald-500/30"
            >
              <Presentation className="w-12 h-12 text-emerald-400" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl text-gray-400 max-w-4xl"
              >
                {slide.subtitle}
              </motion.p>
            )}
          </div>
        );
      
      case 'split':
        return (
          <div className="flex h-full">
            <div className="w-1/2 pr-12 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-white mb-10 tracking-tight">{slide.title}</h2>
              {slide.content}
            </div>
            <div className="w-1/2 pl-4 flex items-center justify-center">
              {slide.image && (
                <div className="relative w-full aspect-square flex items-center justify-center p-12 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent mix-blend-overlay z-10" />
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-contain z-20 drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-5xl font-bold text-white mb-12 tracking-tight">{slide.title}</h2>
            <div className="flex-1">
              {slide.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Presentation className="w-5 h-5 text-black" />
          </div>
          <span className="font-medium text-gray-200">Apresentação: Code Agents de IA</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleExportPPTX}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/20 rounded-md transition-colors disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isExporting ? 'Gerando...' : 'Baixar PPTX (Google Slides)'}
          </button>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            Imprimir / PDF
          </button>
          <button 
            onClick={toggleFullscreen}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            title="Tela Cheia"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Presentation Area */}
      <main 
        ref={containerRef} 
        className={`flex-1 flex items-center justify-center relative ${isFullscreen ? 'bg-black' : 'bg-[#0a0a0a]'}`}
      >
        {/* The Deck Container (Fixed 16:9 aspect ratio, scaled to fit) */}
        <div 
          ref={deckRef}
          className="bg-[#111111] border border-gray-800 shadow-2xl overflow-hidden relative"
          style={{
            width: '1280px',
            height: '720px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            borderRadius: isFullscreen ? '0' : '24px',
          }}
        >
          {/* Background subtle grid/glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 p-16 z-10"
            >
              {renderSlideContent()}
            </motion.div>
          </AnimatePresence>

          {/* Slide Number */}
          <div className="absolute bottom-8 right-8 text-gray-500 font-mono text-lg z-20">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Navigation Controls (Overlay) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-gray-900/80 backdrop-blur-md border border-gray-700 p-2 rounded-full z-50">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500"
              initial={false}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  );
}
