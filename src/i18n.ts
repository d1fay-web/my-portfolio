export type Lang = 'ru' | 'en';

export function detectLanguage(): Lang {
  const saved = localStorage.getItem('lang') as Lang | null;
  if (saved === 'ru' || saved === 'en') return saved;
  
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  const lang = browserLang.toLowerCase();
  
  if (lang.startsWith('ru') || lang.startsWith('uk') || lang.startsWith('be') || lang.startsWith('kk')) {
    return 'ru';
  }
  
  return 'en';
}

export const translations = {
  ru: {
    availableBadge: 'Открыт для предложений',
    heroGreeting: 'Привет, я',
    heroSubtitle: 'Roblox-разработчик с 3+ годами опыта. Создаю',
    viewWorks: '🎬 Смотреть работы',
    contactMe: '💬 Связаться',
    scrollDown: 'Скролль вниз',
    
    totalVisits: 'Визитов',
    projects: 'Проектов',
    yearsExp: 'Лет опыта',
    clients: 'Клиентов',
    
    mySkills: 'Мои навыки',
    techTools: 'Технологии и инструменты',
    skillsDesc: 'Вот чем я владею и что использую в своих проектах',
    
    portfolio: 'Портфолио',
    bestWorks: 'Мои лучшие работы',
    showcase: '🎬 Демо',
    games: '🎮 Проекты',
    
    testimonials: 'Отзывы',
    whatClientsSay: 'Что говорят клиенты',
    
    letsWork: 'Давайте работать вместе!',
    gotProject: 'Есть проект? Напишите мне и обсудим детали',
    
    navWorks: 'Работы',
    navSkills: 'Навыки',
    navContact: 'Контакты',
    
    play: 'Играть',
    
    // Video descriptions
    avatarDesc: 'Система полной кастомизации персонажа с сохранением данных.',
    physicsDesc: 'Продвинутая физика скольжения и механика инерции.',
    movementDesc: 'Система передвижения: бег, приседание и стамина.',
    carDealerDesc: 'Интерфейс автосалона и спавн транспорта.',
    
    // Game descriptions
    innocentDesc: 'Атмосферный хоррор с уникальной механикой выживания и пугающими событиями.',
    russia90sDesc: 'Погрузитесь в атмосферу лихих 90-х годов в России с полной ролевой системой.',
    school102Desc: 'Школьный ролеплей с детализированной картой и множеством интерактивных систем.',
    volgogradDesc: 'Реалистичный симулятор вождения по улицам Волгограда с тюнингом машин.',
    eliteRPDesc: 'Премиальный ролеплей с продвинутыми системами экономики и взаимодействия.',
    line67Desc: 'Cимулятор с интересной концепцией и аддиктивным геймплеем.',
    hypeHeistDesc: 'Симулятор ограблений с динамичным геймплеем и крутыми наградами.',
    tsunamiDesc: 'Убегай от цунами вместе с известными персонажами в этом захватывающем симуляторе.',
    luckyBrainrotDesc: 'Укради лаки блоки у бреинротов и открывай невероятные призы.',
    luckyCarsDesc: 'Разбивай лаки блоки и получай крутые машины в этом увлекательном симуляторе.',
    fishingSoccerDesc: 'Уникальный симулятор рыбалки с коллекционированием футболистов.',
    superTeamworkDesc: 'Кооперативный обби где нужно работать в команде для прохождения уровней.',
    repairBoatDesc: 'Тайкун где ты чинишь и улучшаешь свою лодку, открывая новые возможности.',
    
    // Testimonials
    testimonial1: '"Отличный разработчик! Сделал всё быстро и качественно. Рекомендую всем кто ищет надёжного скриптера."',
    testimonial2: '"Работаем уже пол года. Очень профессиональный подход к работе. Всегда на связи и готов помочь."',
    testimonial3: '"Лучший скриптер с которым я работал. Код чистый и оптимизированный. 10 из 10!"',
    
    typingTexts: ['сложные системы', 'игровую физику', 'UI/UX интерфейсы', 'оптимизированный код'],
  },
  en: {
    availableBadge: 'Available for hire',
    heroGreeting: "Hey, I'm",
    heroSubtitle: 'Roblox developer with 3+ years of experience. Building',
    viewWorks: '🎬 View Works',
    contactMe: '💬 Contact Me',
    scrollDown: 'Scroll down',
    
    totalVisits: 'Total Visits',
    projects: 'Projects',
    yearsExp: 'Years Exp',
    clients: 'Clients',
    
    mySkills: 'My Skills',
    techTools: 'Technologies & Tools',
    skillsDesc: "Here's what I master and use in my projects",
    
    portfolio: 'Portfolio',
    bestWorks: 'My Best Works',
    showcase: '🎬 Showcase',
    games: '🎮 Games',
    
    testimonials: 'Testimonials',
    whatClientsSay: 'What Clients Say',
    
    letsWork: "Let's Work Together!",
    gotProject: "Got a project? Message me and let's discuss",
    
    navWorks: 'Works',
    navSkills: 'Skills',
    navContact: 'Contact',
    
    play: 'Play',
    
    avatarDesc: 'Full character customization system with data saving.',
    physicsDesc: 'Advanced sliding physics and inertia mechanics.',
    movementDesc: 'Movement system: running, crouching and stamina.',
    carDealerDesc: 'Vehicle shop UI and spawning system.',
    
    innocentDesc: 'Atmospheric horror with unique survival mechanics and scary events.',
    russia90sDesc: 'Immerse yourself in the atmosphere of the wild 90s in Russia with a complete roleplay system.',
    school102Desc: 'School roleplay with detailed map and many interactive systems.',
    volgogradDesc: 'Realistic driving simulator through the streets of Volgograd with car tuning.',
    eliteRPDesc: 'Premium roleplay with advanced economy and interaction systems.',
    line67Desc: 'Simulator with interesting concept and addictive gameplay.',
    hypeHeistDesc: 'Heist simulator with dynamic gameplay and cool rewards.',
    tsunamiDesc: 'Escape from tsunami with famous characters in this exciting simulator.',
    luckyBrainrotDesc: 'Steal lucky blocks from brainrots and open incredible prizes.',
    luckyCarsDesc: 'Break lucky blocks and get cool cars in this exciting simulator.',
    fishingSoccerDesc: 'Unique fishing simulator with soccer player collecting.',
    superTeamworkDesc: 'Cooperative obby where you need to work as a team to complete levels.',
    repairBoatDesc: 'Tycoon where you repair and upgrade your boat, unlocking new features.',
    
    testimonial1: '"Great developer! Did everything quickly and with quality. Recommend to anyone looking for a reliable scripter."',
    testimonial2: '"We have been working together for half a year. Very professional approach to work. Always available and ready to help."',
    testimonial3: '"Best scripter I\'ve worked with. Code is clean and optimized. 10 out of 10!"',
    
    typingTexts: ['complex systems', 'game physics', 'UI/UX interfaces', 'optimized code'],
  },
} as const;

export type Translations = typeof translations.ru;
