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
    heroSubtitle: 'Roblox-разработчик с 4+ годами опыта. Создаю',
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

    // Game descriptions — простые и понятные
    innocentDesc: 'Хоррор-игра где нужно выживать в тёмных локациях, решая загадки и убегая от опасностей.',
    russia90sDesc: 'Ролеплей в атмосфере России 90-х: бизнес, машины, общение и полная свобода действий.',
    school102Desc: 'Школьный ролеплей с уроками, переменами и множеством активностей для учеников.',
    volgogradDesc: 'Катайся по улицам Волгограда на разных машинах, тюнингуй и участвуй в гонках.',
    eliteRPDesc: 'Продвинутый ролеплей с работами, экономикой, домами и глубокой системой взаимодействия.',
    line67Desc: 'Симулятор очереди — стой в очереди, прокачивайся и открывай новые возможности.',
    hypeHeistDesc: 'Грабь, зарабатывай и трать деньги в динамичном симуляторе ограблений.',
    tsunamiDesc: 'Убегай от гигантской волны вместе со знаменитостями и спасай свою жизнь.',
    luckyBrainrotDesc: 'Кради лаки блоки у забавных бреинротов и открывай редкие призы.',
    luckyCarsDesc: 'Разбивай лаки блоки и собирай коллекцию крутых машин.',
    fishingSoccerDesc: 'Лови рыбу и собирай коллекцию футболистов в этом необычном симуляторе.',
    flyToBrainrotDesc: 'Летай на ракете и лови бреинротов, собирая очки и открывая новых персонажей.',
    jumpForCelebsDesc: 'Прыгай как можно выше и хватай появляющихся знаменитостей.',
    superTeamworkDesc: 'Проходи обби вместе с друзьями — здесь нужна настоящая командная работа.',
    repairBoatDesc: 'Чини и улучшай свою лодку, добавляя новые детали и открывая острова.',
    youVsPeterUltimateDesc: 'Играй за Питера и лови Брайанов, или прячься за Брайана и выживай.',

    // Testimonials
    testimonial1: '"Отличный разработчик! Сделал всё быстро и качественно. Рекомендую всем кто ищет надёжного скриптера."',
    testimonial2: '"Работаем уже пол года. Очень профессиональный подход к работе. Всегда на связи и готов помочь."',
    testimonial3: '"Лучший скриптер с которым я работал. Код чистый и оптимизированный. 10 из 10!"',

    typingTexts: ['сложные системы', 'игровую физику', 'UI/UX интерфейсы', 'оптимизированный код'],
  },
  en: {
    availableBadge: 'Available for hire',
    heroGreeting: "Hey, I'm",
    heroSubtitle: 'Roblox developer with 4+ years of experience. Building',
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

    // Video descriptions
    avatarDesc: 'Full character customization system with data saving.',
    physicsDesc: 'Advanced sliding physics and inertia mechanics.',
    movementDesc: 'Movement system: running, crouching and stamina.',
    carDealerDesc: 'Vehicle shop UI and spawning system.',

    // Game descriptions — simple and clear
    innocentDesc: 'Horror game where you survive in dark locations, solving puzzles and escaping dangers.',
    russia90sDesc: 'Roleplay set in 1990s Russia: business, cars, socializing and total freedom.',
    school102Desc: 'School roleplay with classes, breaks and lots of activities for students.',
    volgogradDesc: 'Drive through the streets of Volgograd in various cars, tune them up and race.',
    eliteRPDesc: 'Advanced roleplay with jobs, economy, housing and deep interaction systems.',
    line67Desc: 'Queue simulator — stand in line, level up and unlock new opportunities.',
    hypeHeistDesc: 'Rob, earn and spend money in this fast-paced heist simulator.',
    tsunamiDesc: 'Run from a giant wave alongside celebrities and save your life.',
    luckyBrainrotDesc: 'Steal lucky blocks from funny brainrots and unlock rare prizes.',
    luckyCarsDesc: 'Smash lucky blocks and collect an awesome car collection.',
    fishingSoccerDesc: 'Catch fish and collect soccer players in this unique simulator.',
    flyToBrainrotDesc: 'Fly on a rocket and catch brainrots, earning points and unlocking new characters.',
    jumpForCelebsDesc: 'Jump as high as you can and grab celebrities that appear.',
    superTeamworkDesc: 'Complete obby stages with friends — real teamwork is required here.',
    repairBoatDesc: 'Fix and upgrade your boat, adding new parts and discovering islands.',
    youVsPeterUltimateDesc: 'Play as Peter and hunt Brians, or hide as Brian and survive.',

    // Testimonials
    testimonial1: '"Great developer! Did everything quickly and with quality. Recommend to anyone looking for a reliable scripter."',
    testimonial2: '"We have been working together for half a year. Very professional approach to work. Always available and ready to help."',
    testimonial3: '"Best scripter I\'ve worked with. Code is clean and optimized. 10 out of 10!"',

    typingTexts: ['complex systems', 'game physics', 'UI/UX interfaces', 'optimized code'],
  },
} as const;

export type Translations = typeof translations.ru;
