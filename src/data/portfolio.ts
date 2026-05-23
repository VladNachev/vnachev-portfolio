export const profile = {
  name: 'Vladimir Nachev',
  role: 'Senior QA Engineer | Test Automation | Manual Testing | UI & API Testing',
  intro:
    'Senior QA Engineer with 7+ years of experience in manual and automated testing across healthcare, banking, insurance, and cloud domains. Strong background in UI/API automation, backend validation, CI/CD pipelines, and Java/Groovy-based frameworks. Experienced in test planning, test estimation, test strategy, test case design, defect management, and Agile/Scrum methodologies, with focus on delivering scalable automation solutions and high-quality software products.',
  email: 'nachev.vlad@gmail.com',
  links: {
    github: 'https://github.com/VladNachev',
    linkedin: 'https://www.linkedin.com/in/vladimir-nachev/',
    blog: 'https://vladxtron.wordpress.com/',
    cv: 'https://e.pcloud.link/publink/show?code=XZ3umrZXJdCdgbeCUX7cdllsVSpz8p6G8gy',
  },
};

export const aboutHighlights = [
  'Automation-focused QA engineer with practical experience building and maintaining UI and API test coverage.',
  'Comfortable validating backend behavior through APIs, databases, logs, and integration workflows.',
  'Strong manual and exploratory testing background with attention to risk, edge cases, and product usability.',
  'Experienced in Agile/Scrum teams, test planning, test case design, bug tracking, CI/CD pipelines, and release quality.',
  'Quality mindset shaped by product context, maintainable test suites, clear communication, and reliable feedback loops.',
];

export const skillGroups = [
  {
    title: 'Testing',
    skills: [
      'Manual Testing',
      'Automation Testing',
      'UI Testing',
      'API Testing',
      'E2E Testing',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'Exploratory Testing',
      'UAT',
    ],
  },
  {
    title: 'Languages and Core',
    skills: ['Java', 'Groovy', 'SQL', 'Python', 'TypeScript', 'HTML'],
  },
  {
    title: 'Automation & Frameworks',
    skills: ['Selenium', 'Playwright', 'Rest Assured', 'TestNG', 'JUnit', 'Spock', 'Geb', 'Robot Framework', 'Cucumber'],
  },
  {
    title: 'API & Tools',
    skills: ['Postman', 'SoapUI', 'Insomnia', 'Swagger/OpenAPI'],
  },
  {
    title: 'CI/CD and DevOps Tools',
    skills: ['Jenkins', 'GitHub Actions', 'Docker'],
  },
  {
    title: 'Build Tools',
    skills: ['Maven', 'Gradle'],
  },
  {
    title: 'Databases',
    skills: ['Oracle', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Cloud',
    skills: ['AWS'],
  },
  {
    title: 'Test Management',
    skills: ['Jira', 'Confluence', 'TestLink'],
  },
  {
    title: 'Version Control',
    skills: ['Git', 'GitHub'],
  },

    {
    title: 'AI Tools',
    skills: ['ChatGPT', 'GitHub Copilot', 'Codex', 'Claude', 'Gemini'],
  },
];

export const projects = [
  {
    title: 'online-bookstore-api-tests',
    category: 'API automation',
    focus: 'Bookstore API',
    description:
      'API automation framework for the public FakeRestAPI Bookstore API, covering Books and Authors resources with schema validation and reporting.',
    techStack: ['Java', 'Maven', 'TestNG', 'RestAssured', 'Allure', 'JSON Schema', 'GitHub Actions', 'Docker'],
    keyValue:
      'Demonstrates typed API clients, DTOs, TestNG data providers, JSON schema checks, Allure reporting, Docker execution, and CI publishing to GitHub Pages.',
    url: 'https://github.com/VladNachev/online-bookstore-api-tests',
  },
  {
    title: 'dummyJson-test-framework',
    category: 'Backend API framework',
    focus: 'DummyJSON API',
    description:
      'Backend API test automation framework targeting the public DummyJSON API across products, users, posts, recipes, comments, and authentication flows.',
    techStack: ['Java 21', 'Maven', 'TestNG', 'Rest Assured', 'Jackson', 'SLF4J', 'ExtentReports', 'GitHub Actions'],
    keyValue:
      'Highlights senior API automation practices including DTO-based validation, reusable API clients, centralized config, CI execution, and HTML reporting.',
    url: 'https://github.com/VladNachev/dummyJson-test-framework',
  },
  {
    title: 'basic_unit_and_integration_testing',
    category: 'Backend validation',
    focus: 'Spring Boot + SQLite',
    description:
      'Minimal Spring Boot school system with SQLite, built as a testbed for unit, API, database, and integration testing around student CRUD flows.',
    techStack: ['Java 21', 'Spring Boot', 'SQLite', 'Swagger/OpenAPI', 'TestNG', 'Rest Assured', 'Mockito'],
    keyValue:
      'Shows backend validation across layers: unit tests, API tests, DB-backed assertions, request/response fixtures, test data cleanup, and Surefire reporting.',
    url: 'https://github.com/VladNachev/basic_unit_and_integration_testing',
  },
  {
    title: 'ui_automation_exercise',
    category: 'UI automation',
    focus: 'Automation Exercise',
    description:
      'Java UI automation framework for Automation Exercise with Page Object Model, reusable flows, structured logging, and Allure reporting.',
    techStack: ['Java 21', 'Maven Wrapper', 'TestNG', 'Selenium WebDriver', 'Page Object Model', 'Allure'],
    keyValue:
      'Demonstrates scalable Selenium framework design following the Page Object Model, reusable business flows, driver management, reporting, and coverage tracking for official UI test cases.',
    url: 'https://github.com/VladNachev/ui_automation_exercise',
  },
  {
    title: 'playwright-testing-lab',
    category: 'E2E automation',
    focus: 'Playwright lab',
    description:
      'Playwright and TypeScript UI/E2E automation framework for Automation Exercise, covering the full official scenario set with modern test tooling.',
    techStack: ['TypeScript', 'Playwright', 'Node.js', 'ESLint', 'Faker', 'HTML/JSON/JUnit reports'],
    keyValue:
      'Highlights parallel-safe test design, typed data factories, workflow reuse, retry/stability handling, screenshots, videos, traces, and structured evidence.',
    url: 'https://github.com/VladNachev/playwright-testing-lab',
  },
  {
    title: 'mini-bdd-cucumber-project',
    category: 'BDD automation',
    focus: 'Sauce Demo',
    description:
      'Mini BDD automation framework for Sauce Demo using Cucumber JVM, Selenium WebDriver, JUnit 5 Platform Suite, and clean feature files.',
    techStack: ['Java 21', 'Maven', 'Selenium WebDriver', 'Cucumber JVM', 'JUnit 5', 'AssertJ'],
    keyValue:
      'Shows behavior-driven test design with thin step definitions, page objects, reusable components, hooks, config-driven browsers, and parallel-ready driver management.',
    url: 'https://github.com/VladNachev/mini-bdd-cucumber-project',
  },
];

export const experience = [
  {
    role: 'Senior QA Engineer',
    company: 'MentorMate',
    period: '2024.03-2026.04',
    logo: '/company-logos/mm.png',
    logoAlt: 'MentorMate logo',
    companyUrl: 'https://mentormate.com/',
    details: [
      'Worked on Surest, a U.S.-based health insurance platform focused on claims and eligibility workflows.',
      'Developed and maintained automated UI and API test coverage using Java and Groovy.',
      'Performed functional, regression, exploratory, and integration testing across distributed systems and microservices.',
      'Participated in CI/CD activities and supported automated test execution pipelines using Jenkins.',
      'Collaborated closely with developers, business analysts, and QA engineers in Agile/Scrum environments.',
      'Investigated, documented, tracked, and validated defects throughout the software development lifecycle.',
      'Contributed to the transition from legacy automation solutions to Playwright with TypeScript.',
      'Created and executed detailed test plans, test cases, and backend validation scenarios.',
    ],
  },
  {
    role: 'QA Engineer',
    company: 'Energize Global Services Bulgaria / Worldline SA',
    period: '2021.10-2024.03',
    logo: '/company-logos/egs.png',
    logoAlt: 'Energize Global Services logo',
    companyUrl: 'https://energizeglobal.com/',
    details: [
      'Worked on banking and financial solutions for Worldline SA and its German operations.',
      'Performed API, web service, backend, and integration testing for enterprise banking systems.',
      'Developed and maintained automated test suites using Robot Framework and Python.',
      'Executed exploratory, regression, functional, and UAT testing activities.',
      'Validated large-scale data migration initiatives and backend data consistency.',
      'Created and maintained detailed test cases, test scenarios, and defect reports.',
      'Tested bank card issuing workflows and customer notification systems.',
      'Worked closely with international stakeholders, developers, and QA teams to ensure software quality.',
    ],
  },
  {
    role: 'QA Specialist / Tech Support Team Lead',
    company: 'ClouDNS',
    period: '2018.03-2021.12',
    logo: '/company-logos/cloudns.png',
    logoAlt: 'ClouDNS logo',
    companyUrl: 'https://www.cloudns.net/',
    details: [
      'Performed QA and technical support activities for cloud hosting and infrastructure-related services.',
      'Tested platform features, system improvements, and customer-facing functionality.',
      'Investigated customer-reported issues and collaborated with technical teams on resolutions.',
      'Monitored system behavior, identified defects, and contributed to service quality improvements.',
      'Led and coordinated the technical support team while continuing QA-related responsibilities.',
      'Created internal documentation and user guidance materials.',
      'Awarded “ClouDNS Top Customer Support” for outstanding performance and customer satisfaction.',
    ],
  },
  {
    role: 'Network Engineer',
    company: 'Vereya Kabel, ISP',
    period: '2012.02-2018.03',
    logo: '/company-logos/vereya.png',
    logoAlt: 'Vereya Kabel logo',
    details: [
      'Designed and installed robust computer networks, ensuring optimal connectivity and cabling solutions.',
      'Conducted thorough inspections of LAN and Fiber infrastructures, including firewalls, routers, and switches.',
      'Performed troubleshooting to resolve system failures and identify network bottlenecks for long-term efficiency.',
    ],
  },
];

export const recommendations = [
  {
    quote:
      'Vladimir Nachev is a highly motivated person with a high bunch of skills to fulfil his tasks. He is an absolute win for the team, because his focus is problem solving with a very good mental skillset. We miss him much.',
    author: 'Birgit Hausdörfer',
    role: 'Senior Test Analyst at Worldline',
    relationship: 'Birgit worked with Vladimir on the same team',
    date: 'July 12, 2024',
    source: 'LinkedIn recommendation',
    sourceUrl: profile.links.linkedin,
    avatarUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQHh0lDUd_A5_g/profile-displayphoto-scale_100_100/B4DZ04UDHAKAAc-/0/1774766278422?e=1780531200&v=beta&t=cRsseN4gtmsSxPRsGefrjPIZsVizelloE_I2O9u6_-0',
    avatarInitials: 'BH',
  },
  {
    quote:
      "Vladimir was one of my students when I taught the 'Automation with Java an Webdriver' course at Skillo. During the course I observed his dedication and commitment to learn. He never missed a lecture or a homework and was one of the first people to submit their final projects even before the deadline. I can attest that he is a very fast learner, someone with attention to details and a very thorough and detailed approach to tasks. I believe with his strong quality assurance background, fast learning, programming skills and great attitude, he would be a great addition to any automation quality team out there!",
    author: 'Ludmila Yordanova',
    role: 'ISTQB Certified Tester, Automation QA | Technical and Soft Skills Trainer | ICF Certified Coach',
    relationship: "Ludmila was Vladimir's teacher",
    date: 'April 5, 2023',
    source: 'LinkedIn recommendation',
    sourceUrl: profile.links.linkedin,
    avatarUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQHGQuzd35vjeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704466966224?e=1780531200&v=beta&t=6S43GU5Be6GTynJdoEjqihnvVjAh_k8QpgNG-hjBaHw',
    avatarInitials: 'LY',
  },
];

export const interviews = [
  {
    title: 'Vladimir Nachev - our TOP Technical Support for 2020!',
    source: 'ClouDNS Blog',
    date: 'December 21, 2020',
    description:
      'A ClouDNS interview highlighting Vladimir as the company top technical support professional for 2020, with reflections on support work, problem solving, DNS troubleshooting, and customer care.',
    url: 'https://www.cloudns.net/blog/vladimir-nachev-our-top-technical-support-for-2020/',
    image: '/interviews/cloudns-vladimir-nachev.png',
    imageAlt: 'ClouDNS blog feature image for Vladimir Nachev interview',
  },
];

export const articles = [
  {
    title: 'Smarter UI Test Automation: Navigation Fallbacks and Locator Resilience',
    source: 'vladXtron',
    date: 'April 11, 2026',
    summary: 'Practical patterns for making UI automation more resilient when navigation, selectors, and real-world page behavior become unstable.',
    topic: 'UI Automation',
    url: 'https://vladxtron.wordpress.com/2026/04/11/smarter-ui-test-automation-navigation-fallbacks-and-locator-resilience/',
  },
  {
    title: 'Bug found in LinkedIn',
    source: 'vladXtron',
    date: 'March 29, 2026',
    summary: 'A real-world bug write-up focused on observation, reproduction, and how QA thinking turns product behavior into actionable evidence.',
    topic: 'Bug Analysis',
    url: 'https://vladxtron.wordpress.com/2026/03/29/bug-found-in-linkedin/',
  },
  {
    title: 'GROUP BY vs ORDER BY in SQL',
    source: 'vladXtron',
    date: 'March 2, 2026',
    summary: 'A clear SQL note explaining the difference between grouping data and sorting result sets, useful for backend and database validation.',
    topic: 'SQL',
    url: 'https://vladxtron.wordpress.com/2026/03/02/group-by-vs-order-by-in-sq/',
  },
];

export const education = [
  {
    school: 'Technical University Gabrovo',
    period: '2008 - 2013',
    focus: 'Bachelor’s degree',
    description:
      'Computer Systems and Technology',
    logo: '/education/technical-university-gabrovo-logo.png',
    logoAlt: 'Technical University Gabrovo logo',
    url: 'https://www.tugab.bg/en/',
  },
];

export const certifications = [
  {
    title: 'Quality Engineering Professional',
    issuer: 'MentorMate University',
    fileName: 'CertifiedQualityEngineeringProfessionalLevel.png',
    fileType: 'image',
  },
  {
    title: 'Backend Automation Testing',
    issuer: 'Skillo Academy',
    fileName: 'backendAutomationTesting.jpg',
    fileType: 'image',
  },
  {
    title: 'Automated Testing with Playwright and TypeScript',
    issuer: 'Pragmatic',
    fileName: 'AutomatedTestingWithPlayrightAndTypeScript.jpg',
    fileType: 'image',
  },
  {
    title: 'Java and WebDriver',
    issuer: 'Skillo Academy',
    fileName: 'java_webDriver.jpg',
    fileType: 'image',
  },
  {
    title: 'SQL Basic',
    issuer: 'HackerRank',
    fileName: 'sqlCert.png',
    fileType: 'image',
  },
  {
    title: 'Programming Basics with Python',
    issuer: 'HackerRank',
    fileName: 'PythonCert.png',
    fileType: 'image',
  },
  {
    title: 'Software Testing / QA',
    issuer: 'Soft Academy',
    fileName: 'qa.jpg',
    fileType: 'image',
  },
  {
    title: 'HTML',
    issuer: 'Sololearn',
    fileName: 'html_cert.jpg',
    fileType: 'image',
  },
  {
    title: 'cPanel Professional Certification',
    issuer: 'cPanel',
    fileName: 'cpanel-page-001.jpg',
    fileType: 'image',
  },
];
