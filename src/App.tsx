import { useState, useEffect, useRef, useCallback } from 'react';
import { detectLanguage, translations, type Lang } from './i18n';

// ─── Data ────────────────────────────────────────────────────────────
const videos = [
  { id: 'OcBM6O__mj0', title: 'Avatar Changer', descKey: 'avatarDesc' as const },
  { id: 'HNldXm4eRdA', title: 'Physics Slide', descKey: 'physicsDesc' as const },
  { id: 'gFNwxx_Rvxo', title: 'Movement System', descKey: 'movementDesc' as const },
  { id: 'N8wPDDrN3bU', title: 'Car Dealership', descKey: 'carDealerDesc' as const },
];

const games = [
  { img: 'https://tr.rbxcdn.com/180DAY-8322bb63c1d110005383957610374193/768/432/Image/Png/noFilter', title: 'Innocent 🕯️ [HORROR]', descKey: 'innocentDesc' as const, tags: ['Horror'], best: false, url: 'https://www.roblox.com/games/116402140872647' },
  { img: 'https://tr.rbxcdn.com/180DAY-74f2f9e5db37dbdf372641b943dee82f/768/432/Image/Webp/noFilter', title: 'RUSSIA: THE WILD 90s RP', descKey: 'russia90sDesc' as const, tags: ['Roleplay'], best: false, url: 'https://www.roblox.com/games/111479551721846' },
  { img: 'https://tr.rbxcdn.com/180DAY-b7b73b58f1ee30cb058d2de220297e6b/768/432/Image/Webp/noFilter', title: 'School 102 RP [Beta]', descKey: 'school102Desc' as const, tags: ['Roleplay'], best: true, url: 'https://www.roblox.com/games/73413968610508' },
  { img: 'https://tr.rbxcdn.com/180DAY-1f51541ab6b599965d392f630caf23b9/768/432/Image/Webp/noFilter', title: 'Russia Car Driving: Volgograd', descKey: 'volgogradDesc' as const, tags: ['Roleplay'], best: false, url: 'https://www.roblox.com/games/14765772149' },
  { img: 'https://tr.rbxcdn.com/180DAY-ff51e6e47c80e4ed63e190283ae9f990/768/432/Image/Webp/noFilter', title: 'Elite Role-Playing Game', descKey: 'eliteRPDesc' as const, tags: ['Roleplay'], best: true, url: 'https://www.roblox.com/games/139459072362596' },
  { img: 'https://tr.rbxcdn.com/180DAY-b50dc87e124df4ac8ca70ad5fd11cd96/768/432/Image/Webp/noFilter', title: 'Line to Enter 67', descKey: 'line67Desc' as const, tags: ['Simulator'], best: false, url: 'https://www.roblox.com/games/120805135975842' },
  { img: 'https://tr.rbxcdn.com/180DAY-6196b537e773dc3226e39b9df34b8a25/768/432/Image/Webp/noFilter', title: 'Hype Heist', descKey: 'hypeHeistDesc' as const, tags: ['Simulator'], best: false, url: 'https://www.roblox.com/games/118098395632409' },
  { img: 'https://tr.rbxcdn.com/180DAY-68bc3df009011f9ff85b4080bbcc6205/768/432/Image/Webp/noFilter', title: 'Escape Tsunami For Celebs!', descKey: 'tsunamiDesc' as const, tags: ['Simulator'], best: true, url: 'https://www.roblox.com/games/104040262451134' },
  { img: 'https://tr.rbxcdn.com/180DAY-219c34e88065559df5a2a8bc462583e7/768/432/Image/Webp/noFilter', title: 'Steal Lucky Block From Brainrots', descKey: 'luckyBrainrotDesc' as const, tags: ['Simulator'], best: true, url: 'https://www.roblox.com/games/100727356607350' },
  { img: 'https://tr.rbxcdn.com/180DAY-93d18cfc68a973963decd5b3416c02dc/768/432/Image/Webp/noFilter', title: 'Break a Lucky Block for Cars!', descKey: 'luckyCarsDesc' as const, tags: ['Simulator'], best: true, url: 'https://www.roblox.com/games/94172167755120' },
  { img: 'https://tr.rbxcdn.com/180DAY-500a7c97f4a5c2d7c7b59ecb2c0dabbd/768/432/Image/Webp/noFilter', title: 'My Fishing Soccer Players', descKey: 'fishingSoccerDesc' as const, tags: ['Simulator'], best: true, url: 'https://www.roblox.com/games/127188114308677' },
  { img: 'https://tr.rbxcdn.com/180DAY-8985f786acc77af90543b3eb67b9c1e2/768/432/Image/Webp/noFilter', title: 'Super Teamwork', descKey: 'superTeamworkDesc' as const, tags: ['Obby'], best: false, url: 'https://www.roblox.com/games/15897181617' },
  { img: 'https://tr.rbxcdn.com/180DAY-cc41fe010df669792fac2f5548929291/768/432/Image/Webp/noFilter', title: 'Repair a Boat', descKey: 'repairBoatDesc' as const, tags: ['Tycoon'], best: false, url: 'https://www.roblox.com/games/89644913551316' },
];

const skills = [
  { icon: '💻', name: 'Luau', level: 100 },
  { icon: '🧱', name: 'Roblox Studio', level: 95 },
  { icon: '⚙️', name: 'Game Systems', level: 80 },
  { icon: '🧲', name: 'Physics', level: 85 },
  { icon: '🎨', name: 'UI/UX Design', level: 65 },
  { icon: '🚀', name: 'Optimization', level: 100 },
  { icon: '🗄️', name: 'DataStores', level: 100 },
  { icon: '🔗', name: 'Networking', level: 95 },
  { icon: '🧩', name: 'Knit Framework', level: 100 },
  { icon: '🏗️', name: 'OOP / Typification', level: 100 },
];

const marqueeItems = ['Luau Scripting', 'Game Systems', 'Physics', 'UI/UX Design', 'Optimization', 'Architecture', 'Data Systems', 'Multiplayer'];

// ─── Loading Screen Component ────────────────────────────────────────
function LoadingScreen({ progress, isExiting }: { progress: number; isExiting: boolean }) {
  return (
    <div className={`loading-screen ${isExiting ? 'exit' : ''}`}>
      {/* Background effects */}
      <div className="loading-bg-gradient" />
      <div className="loading-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="loading-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Logo */}
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-logo-accent">d1</span>fay
        </div>
        
        {/* Subtitle */}
        <div className="loading-subtitle">Roblox Developer</div>
        
        {/* Progress bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loading-progress-text">{Math.round(progress)}%</div>
        </div>
        
        {/* Loading status */}
        <div className="loading-status">
          {progress < 30 && 'Initializing...'}
          {progress >= 30 && progress < 60 && 'Loading assets...'}
          {progress >= 60 && progress < 90 && 'Preparing experience...'}
          {progress >= 90 && 'Almost ready...'}
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="loading-corner loading-corner-tl" />
      <div className="loading-corner loading-corner-tr" />
      <div className="loading-corner loading-corner-bl" />
      <div className="loading-corner loading-corner-br" />
    </div>
  );
}

// ─── Scroll Indicator Styles ────────────────────────────────────────
const scrollIndicatorStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: 'clamp(20px, 5vh, 40px)',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'clamp(8px, 1.5vw, 12px)',
  animation: 'bounce 2s infinite',
  zIndex: 10,
};

const mouseStyles: React.CSSProperties = {
  width: 'clamp(20px, 3vw, 26px)',
  height: 'clamp(32px, 5vw, 42px)',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '20px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '8px',
  boxSizing: 'border-box',
};

const mouseWheelStyles: React.CSSProperties = {
  width: 'clamp(3px, 0.5vw, 4px)',
  height: 'clamp(6px, 1vw, 8px)',
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '4px',
  animation: 'scroll 2s infinite',
};

const scrollTextStyles: React.CSSProperties = {
  fontSize: 'clamp(10px, 1.5vw, 12px)',
  color: 'rgba(255, 255, 255, 0.5)',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 500,
  whiteSpace: 'nowrap',
};

// ─── App ────────────────────────────────────────────────────────────
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const [lang, setLang] = useState<Lang>(detectLanguage);
  const [activeTab, setActiveTab] = useState<'showcase' | 'games'>('showcase');
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('works');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const t = translations[lang];

  // Loading screen effect
  useEffect(() => {
    const duration = 2500; // Total loading time in ms
    const interval = 30; // Update interval
    const steps = duration / interval;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      // Easing function for more natural progress
      const progress = Math.min(100, (currentStep / steps) * 100 * (1 + Math.random() * 0.1));
      setLoadingProgress(progress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setLoadingProgress(100);
        
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
          // Remove loading screen after exit animation
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 300);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const changeLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  }, []);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll progress + header scroll state + active section + scroll indicator visibility
  useEffect(() => {
    if (isLoading) return;
    
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${Math.min(scrolled, 1)})`;
      }
      setScrolled(window.scrollY > 50);
      
      // Hide scroll indicator after scrolling past hero
      setShowScrollIndicator(window.scrollY < 100);

      // Skip scroll-based active nav detection while programmatic scroll is in progress
      if (isScrollingRef.current) return;

      // Active nav
      const sections = ['contact', 'skills', 'works'];
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveNav(id);
          found = true;
          break;
        }
      }
      if (!found) {
        setActiveNav('works');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLoading]);

  // Custom cursor
  useEffect(() => {
    if (isMobile || isLoading) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.left = e.clientX + 'px';
        spotlightRef.current.style.top = e.clientY + 'px';
      }
    };

    let animId: number;
    const animate = () => {
      const cur = cursorPosRef.current;
      cur.x += (mouseRef.current.x - cur.x) * 0.12;
      cur.y += (mouseRef.current.y - cur.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = cur.x + 'px';
        cursorRef.current.style.top = cur.y + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animId = requestAnimationFrame(animate);

    // Hover effects
    const addHover = () => cursorRef.current?.classList.add('hover');
    const removeHover = () => cursorRef.current?.classList.remove('hover');
    const addClick = () => cursorRef.current?.classList.add('clicking');
    const removeClick = () => cursorRef.current?.classList.remove('clicking');

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .thumb, .game-card, .btn-play, .skill-card, .stat-card, .testimonial-card').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial bind
    document.querySelectorAll('a, button, .thumb, .game-card, .btn-play, .skill-card, .stat-card, .testimonial-card').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    document.addEventListener('mousedown', addClick);
    document.addEventListener('mouseup', removeClick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', addClick);
      document.removeEventListener('mouseup', removeClick);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [isMobile, isLoading]);

  // Particles
  useEffect(() => {
    if (isLoading) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const maxP = window.innerWidth < 800 ? 50 : 100;
    const particles = Array.from({ length: maxP }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId: number;
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach(p => {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(frame);
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animId = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [isLoading]);

  // Typing effect
  useEffect(() => {
    if (isLoading) return;
    
    const texts = t.typingTexts;
    let textIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIdx];
      if (deleting) {
        charIdx--;
        setTypingText(current.substring(0, charIdx));
      } else {
        charIdx++;
        setTypingText(current.substring(0, charIdx));
      }

      let delay = deleting ? 50 : 100;
      if (!deleting && charIdx === current.length) {
        delay = 2000;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        textIdx = (textIdx + 1) % texts.length;
        delay = 500;
      }
      timeout = setTimeout(tick, delay);
    };
    
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [lang, t.typingTexts, isLoading]);

  // Reveal on scroll
  useEffect(() => {
    if (isLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab, isLoading]);

  // Counter animation
  useEffect(() => {
    if (isLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.count || '0');
            let current = 0;
            const increment = target / 50;
            const stepTime = 2000 / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              if (target >= 1000000) el.textContent = (current / 1000000).toFixed(1) + 'M+';
              else if (target >= 1000) el.textContent = Math.floor(current / 1000) + 'K+';
              else el.textContent = Math.floor(current) + '+';
            }, stepTime);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.stat-value[data-count]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading]);

  // Inject keyframes for scroll indicator animations
  useEffect(() => {
    const styleId = 'scroll-indicator-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => window.location.reload(), 300);
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    
    // Lock scroll-based detection immediately
    isScrollingRef.current = true;
    setActiveNav(id);
    
    // Clear any previous unlock timer
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    
    // Scroll to the target element
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    // Unlock scroll-based detection after scroll animation completes
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const handleScrollIndicatorClick = () => {
    handleNavClick('works');
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} isExiting={isExiting} />;
  }

  return (
    <>
      {/* Scroll Progress */}
      <div ref={scrollProgressRef} className="scroll-progress" />

      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <div ref={cursorRef} className="cursor" />
          <div ref={cursorDotRef} className="cursor-dot" />
          <div ref={spotlightRef} className="spotlight" />
        </>
      )}

      {/* Background */}
      <div className="bg-gradient" />
      <div className="aurora" />
      <div className="noise" />
      <div className="grid-lines" />
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
      </div>
      <canvas ref={canvasRef} id="particles-canvas" />

      {/* Main content with entrance animation */}
      <div className="main-content-enter">
        {/* Header */}
        <header className={scrolled ? 'scrolled' : ''}>
          <div className="logo" onClick={handleLogoClick} role="button" tabIndex={0}>
            <span className="logo-accent">d1</span>fay
          </div>

          <nav className="nav-links">
            <a href="#works" className={`nav-link ${activeNav === 'works' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('works'); }}>
              {t.navWorks}
            </a>
            <a href="#skills" className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>
              {t.navSkills}
            </a>
            <a href="#contact" className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              {t.navContact}
            </a>
          </nav>

          <div className="nav-right">
            <div className="lang-switch">
              <button className={`btn-lang ${lang === 'ru' ? 'active' : ''}`} onClick={() => changeLang('ru')}>RU</button>
              <button className={`btn-lang ${lang === 'en' ? 'active' : ''}`} onClick={() => changeLang('en')}>EN</button>
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#works" className={`nav-link ${activeNav === 'works' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('works'); }}>
            {t.navWorks}
          </a>
          <a href="#skills" className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>
            {t.navSkills}
          </a>
          <a href="#contact" className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
            {t.navContact}
          </a>
        </div>

        {/* Hero */}
        <div className="container">
          <section className="hero" style={{ position: 'relative' }}>
            <div className="hero-badge">
              <span>✨</span>
              <span>{t.availableBadge}</span>
            </div>

            <h1 className="hero-title">
              <span className="line"><span>{t.heroGreeting}</span></span>
              <span className="line">
                <span className="glitch gradient-text" data-text="d1fay">d1fay</span>
              </span>
            </h1>

            <p className="hero-subtitle">
              {t.heroSubtitle}{' '}
              <span className="typing-text">{typingText}</span>
            </p>

            <div className="hero-cta">
              <a href="#works" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('works'); }}>
                <span>{t.viewWorks}</span>
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                <span>{t.contactMe}</span>
              </a>
            </div>

            {/* Optimized Scroll Indicator */}
            <div 
              style={{
                ...scrollIndicatorStyles,
                opacity: showScrollIndicator ? 1 : 0,
                visibility: showScrollIndicator ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={handleScrollIndicatorClick}
              role="button"
              tabIndex={0}
              aria-label={t.scrollDown}
              onKeyDown={(e) => e.key === 'Enter' && handleScrollIndicatorClick()}
            >
              <div style={mouseStyles}>
                <div style={mouseWheelStyles} />
              </div>
              <span style={scrollTextStyles}>{t.scrollDown}</span>
            </div>
          </section>
        </div>

        {/* Marquee */}
        <div className="marquee-section">
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="marquee-item">
                <span>◆</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          {/* Stats */}
          <section style={{ padding: '100px 0' }}>
            <div className="stats">
              {[
                { icon: '🎮', count: 15000000, label: t.totalVisits },
                { icon: '🚀', count: 10, label: t.projects },
                { icon: '⭐', count: 4, label: t.yearsExp },
                { icon: '🤝', count: 25, label: t.clients },
              ].map((stat, i) => (
                <div key={i} className="stat-card reveal">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value" data-count={stat.count}>0</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="reveal" id="skills" style={{ padding: '80px 0' }}>
            <div className="section-header">
              <div className="section-label">
                <span>🛠️</span>
                <span>{t.mySkills}</span>
              </div>
              <h2 className="section-title">{t.techTools}</h2>
              <p className="section-desc">{t.skillsDesc}</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Works */}
          <section id="works" style={{ padding: '80px 0' }}>
            <div className="section-header">
              <div className="section-label">
                <span>💼</span>
                <span>{t.portfolio}</span>
              </div>
              <h2 className="section-title">{t.bestWorks}</h2>
            </div>

            <div className="tabs-container">
              <nav className="tabs">
                <button className={`tab-btn ${activeTab === 'showcase' ? 'active' : ''}`} onClick={() => setActiveTab('showcase')}>
                  {t.showcase}
                </button>
                <button className={`tab-btn ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>
                  {t.games}
                </button>
              </nav>
            </div>

            {/* Showcase */}
            {activeTab === 'showcase' && (
              <div className="grid-videos" style={{ animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                {videos.map((v) => (
                  <div key={v.id} className="video-item reveal">
                    {playingVideos.has(v.id) ? (
                      <div className="yt-iframe-container">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="thumb" onClick={() => handleVideoPlay(v.id)}>
                        <img src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} />
                        <div className="play-icon">
                          <div className="play-btn-circle">▶</div>
                        </div>
                      </div>
                    )}
                    <div className="v-info">
                      <h3>{v.title}</h3>
                      <p>{t[v.descKey]}</p>
                      <a href={`https://youtu.be/${v.id}`} target="_blank" rel="noopener noreferrer" className="btn-link">Watch →</a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Games */}
            {activeTab === 'games' && (
              <div className="grid-games" style={{ animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                {games.map((game, i) => (
                  <div key={i} className="game-card reveal">
                    <div className="game-thumb">
                      <img src={game.img} alt={game.title} />
                      <div className="game-thumb-overlay" />
                      <div className="game-thumb-badge">
                        {game.best && <span className="g-tag proud">🔥 Best</span>}
                        {game.tags.map((tag, j) => (
                          <span key={j} className="g-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="game-info">
                      <h3>{game.title}</h3>
                      <p>{t[game.descKey]}</p>
                      <div className="game-footer">
                        <div className="tags-wrapper" />
                        <a href={game.url} target="_blank" rel="noopener noreferrer" className="btn-play">
                          🎮 {t.play}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Testimonials */}
          <section className="reveal" style={{ padding: '100px 0' }}>
            <div className="section-header">
              <div className="section-label">
                <span>💬</span>
                <span>{t.testimonials}</span>
              </div>
              <h2 className="section-title">{t.whatClientsSay}</h2>
            </div>
            <div className="testimonials-grid">
              {[
                { avatar: 'R', name: 'Roma', role: 'Game Owner', textKey: 'testimonial1' as const },
                { avatar: 'I', name: 'Ivan', role: 'Studio Lead', textKey: 'testimonial2' as const },
                { avatar: 'D', name: 'Daniel', role: 'Developer', textKey: 'testimonial3' as const },
              ].map((review, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{review.avatar}</div>
                    <div className="testimonial-info">
                      <h4>{review.name}</h4>
                      <span>{review.role}</span>
                    </div>
                  </div>
                  <p className="testimonial-text">{t[review.textKey]}</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, j) => <span key={j}>⭐</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="reveal" id="contact" style={{ padding: '100px 0' }}>
            <div className="contact-card">
              <h2 className="contact-title">{t.letsWork}</h2>
              <p className="contact-desc">{t.gotProject}</p>
              <div className="contact-links">
                <a href="https://www.roblox.com/users/2701912913/profile" target="_blank" rel="noopener noreferrer" className="contact-btn">
                  <img src="https://i.postimg.cc/7PCNxHj9/Roblox-player-icon-black-svg.png" alt="Roblox" />
                  Roblox
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer>
            <div className="footer-content">
              <div className="footer-logo">
                <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>d1</span>fay
              </div>
              <div className="footer-links">
                <a href="#works" onClick={(e) => { e.preventDefault(); handleNavClick('works'); }}>{t.navWorks}</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>{t.navSkills}</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>{t.navContact}</a>
              </div>
              <p className="footer-copy">&copy; 2022 — 2026 d1fay. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
