import compostablePullToyPreview from './assets/compostable-pull-toy-preview.png'
import crisiscartUi from './assets/crisiscart-ui.png'
import goldrushPreview from './assets/goldrush-preview.png'
import studysnapPreview from './assets/studysnap-preview.png'

/** Set to true to restore logos and screenshots on project cards. */
export const SHOW_PROJECT_PREVIEWS = true

export const projects = [
  {
    title: 'Compostable Pull-Toy',
    bullets: [
      'For Engineering Foundations 1020 at UVA, my team and I designed and built a modular pull toy with no plastic in any part of the fabrication, following the full engineering design process from concept through prototype',
      'Every piece was woodworked and assembled from scratch into four linked segments, each with a unique type of dynamic motion',
    ],
    previewImage: compostablePullToyPreview,
    previewAlt: 'Compostable Pull-Toy research poster and wooden prototype',
    previewBackground: '#ffffff',
    tags: ['Woodworking', 'Engineering Design', 'EF 1020'],
  },
  {
    title: 'Hoya Hacks 2026',
    projectUrl: 'https://devpost.com/software/crisiscart',
    githubUrl: 'https://github.com/SeungwooDY/CrisisKit',
    bullets: [
      'CrisisCart delivers personalized supply guidance for short-term crises, helping people prepare with the right essentials before they need them',
      'The app uses the type and duration of a weather event, combined with individual factors like age and body metrics, to generate a tailored list of essential supplies',
    ],
    previewImage: crisiscartUi,
    previewAlt: 'CrisisCart app — weather dashboard and action buttons',
    previewBackground: '#ffffff',
    tags: ['React', 'Node.js', 'Git/GitHub'],
  },
  {
    title: 'Hoo Hacks 2026',
    projectUrl: 'https://devpost.com/software/reelmoments',
    githubUrl: 'https://github.com/l3mxny/Gold-Rush',
    bullets: [
      'GoldRush lets users set budgets, track spending across different categories, and see clear breakdowns of where their money is going each month',
      'Users can add friends, join a shared leaderboard, and compare spending habits in real time',
    ],
    brandPreview: {
      name: 'GoldRush',
      logo: goldrushPreview,
      background: '#f8f9fa',
      textColor: '#222021',
      textOverImage: true,
    },
    tags: ['React', 'Node.js', 'Git/GitHub'],
  },
  {
    title: 'StudySnap',
    projectUrl: 'https://github.com/aditib08/StudySnap',
    githubUrl: 'https://github.com/aditib08/StudySnap',
    bullets: [
      'StudySnap is a social study app where students post photos from their sessions, add friends, and follow a shared feed to see how their peers are staying on track',
      'Built with a React frontend and Node.js backend, deployed on Vercel so classmates can check in and post updates from anywhere',
    ],
    previewImage: studysnapPreview,
    previewAlt: 'StudySnap feed — share study updates and photos with friends',
    previewBackground: '#101418',
    previewPadding: '18px',
    tags: ['React', 'Node.js', 'Vercel'],
  },
]
