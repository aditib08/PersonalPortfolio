import crisiscartLogo from './assets/crisiscart-logo.png'
import goldrushLogo from './assets/goldrush-logo.png'

export const projects = [
  {
    title: 'Hoya Hacks 2026',
    projectUrl: 'https://devpost.com/software/crisiscart',
    githubUrl: 'https://github.com/SeungwooDY/CrisisKit',
    bullets: [
      'CrisisCart delivers personalized supply guidance for short-term crises, helping people prepare with the right essentials before they need them',
      'The app uses the type and duration of a weather event, combined with individual factors like age and body metrics, to generate a tailored list of essential supplies',
    ],
    brandPreview: {
      name: 'CrisisCart',
      tagline: 'Think ahead. / Stock right.',
      logo: crisiscartLogo,
      background: '#f8f9fb',
      textColor: '#222021',
    },
    tags: ['React', 'Node.js', 'Git/GitHub'],
  },
  {
    title: 'Hoo Hacks 2026',
    projectUrl: 'https://devpost.com/software/reelmoments',
    githubUrl: 'https://github.com/l3mxny/Gold-Rush',
    bullets: [
      'GoldRush lets users set budgets, track spending across different categories, and see clear breakdowns of where their money is going each month.',
      'Users can add friends, join a shared leaderboard, and compare spending habits in real time.',
    ],
    brandPreview: {
      name: 'GoldRush',
      tagline: 'Pan for Gold, not Debt.',
      logo: goldrushLogo,
      background: '#f8f9fa',
      textColor: '#222021',
      textOverImage: true,
    },
    tags: ['React', 'Node.js', 'Git/GitHub'],
  },
]
