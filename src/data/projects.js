export const projects = [
  {
    id: '01',
    title: 'SecureLaunch',
    subtitle: 'SECURITY SERVICES WEBSITE',
    description: 'A security-focused website with service pages and a contact form integrated with a REST API.',
    category: 'FULL STACK',
    image: '/project-covers/securelaunch.svg',
    tags: ['React.js', 'Vite', 'React Router', 'REST APIs'],
    links: [
      { label: 'LIVE SITE', href: 'https://securelaunch.in/' },
      { label: 'SOURCE CODE', href: 'https://github.com/rajesh-kumar-wq/SecureLaunch-frontend' },
    ],
  },
  {
    id: '02',
    title: 'Nova Book',
    subtitle: 'ROLE-BASED BUSINESS DASHBOARD',
    description: 'A dashboard application for Admin, Manager, Employee, and Client roles, covering customers, projects, employees, tasks, payments, expenses, and reports.',
    category: 'FULL STACK',
    image: '/project-covers/nova-book.svg',
    tags: ['React.js', 'Django REST Framework', 'JWT Authentication'],
    links: [],
  },
  {
    id: '03',
    title: 'Hotel Karna',
    subtitle: 'RESTAURANT WEBSITE',
    description: 'A restaurant website presenting vegetarian and non-vegetarian food offerings.',
    category: 'FRONTEND',
    image: '/project-covers/hotel-karna.svg',
    tags: ['React.js', 'Vite', 'CSS'],
    links: [
      { label: 'LIVE SITE', href: 'https://rajesh-kumar-wq.github.io/Hotel-Karna/' },
      { label: 'SOURCE CODE', href: 'https://github.com/rajesh-kumar-wq/Hotel-Karna' },
    ],
  },
  {
    id: '04',
    title: 'FandomFits',
    subtitle: 'FASHION E-COMMERCE PLATFORM',
    description: 'A fashion e-commerce project for product browsing, authentication, cart and wishlist management, and checkout. The existing project brief also lists Admin, Vendor, and User roles with vendor product management.',
    category: 'FULL STACK',
    image: '/project-covers/fandomfits.svg',
    tags: ['React.js', 'Django', 'Python', 'SQLite3', 'REST API'],
    links: [],
  },
];

export const filterCategories = ['ALL', 'FULL STACK', 'FRONTEND'];
