import {Portfolio} from './types/types'
import {v4} from 'uuid'

export const portfolioData: Portfolio = {
  domain: 'https://teaguestockwell.com',
  heroM3u8Src:
    'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/level-2-hls/master.m3u8',
  id: v4(),
  person: {
    id: v4(),
    firstName: 'Teague',
    lastName: 'Stockwell',
    email: 'tsAppDevelopment@gmail.com',
    linkedInSrc: 'https://www.linkedin.com/in/teague-stockwell',
    githubSrc: 'https://github.com/tsAppDevelopment',
    jobTitle: 'Software Engineer',
    location: 'Seattle, WA',
    shortAbout: `Hello, im Teague Stockwell. I have a passion for developing software that solves everyday problems.`,
  },
  icons: [],

  jobs: [
    {
      id: v4(),
      name: 'Lead Software Engineer',
      company: 'Rainier Spark Tron',
      dateRange: 'October 2020 - Present',
      description:
        'Mentor new developers to stand up software development team for JBLM',
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Joint Base Lewis McChord (JBLM), WA',
      imgSrc: '/rainier.png',
      bullets: [
        `Securely deployed Levels as Air force web app`,
        `Pioneered software dev capability for JBLM spark cell. 1 new developer onboarded`,
        `Lead software dev team by communication user needs to key stakeholder`,
      ],
    },
    {
      id: v4(),
      name: 'Software Engineer',
      company: 'Aloha Spark Tron',
      dateRange: 'October 2020 - Present',
      description: `Test, implement, and deliver accredited software to include pipeline management and stakeholder validation`,
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Remote',
      imgSrc: '/tron1.png',
      bullets: [
        `Implemented user stories while maintaining code standards with 2 CI pipelines with a total of 34 stages`,
        `Wrote unit, component, and or e2e tests for 2 services to hit target of 80% line coverage`,
        `Configured docker compose scripts with Nginx proxy to mock production jwt auth service`,
        `Created docker imgs for containerized builds using department of defense hardened imgs`,
        'Led cyber review and accreditation of hardened app for deployment to a secure cluster',
        `Air Mobility Command's nominee for 2021 Gen. Spencer's individual innovation award`,
      ],
    },
    {
      id: v4(),
      name: 'Aerospace Mechanic',
      company: 'United States Air Force',
      dateRange: 'October 2017 - December 2020',
      description:
        'Lead & perform repairs / inspections on 20 assigned C-17 aircraft valued at $3.2B',
      src: 'https://www.airforce.com/careers/detail/airlift-special-mission-aircraft-maintenance',
      location: 'Joint Base Lewis McChord, WA',
      imgSrc: '/af1.png',
      bullets: [
        'Plan / conduct task certification for personnel in upgrade status to meet technical advancement',
        'Discovered 2 worn brakes during post flight inspection and replaced them in < 3hrs for 10 patient medevac',
        'Issue, inspect, and control 48k tools valued at $18M to sustain maintenance ops',
      ],
    },
  ],

  titles: {
    about: 'About',
    tech: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  subTitles: {
    about: undefined,
    tech: 'Tools that I have worked with. See my projects for more info',
    projects: 'Web meets mobile. Full stack and microservice architecture.',
    experience: undefined,
    education: undefined,
    contact: ``,
  },

  skills: [
    'typescript',
    'javascript',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
  ],
  projects: [
    {
      id: v4(),
      name: 'Buildable 🚧 WIP 🚧 ',
      dateRange: 'Apr 2021 - Present',
      subHeading:
        'Created a social media platform for exploring and sharing buildable items utilizing React, S3, Postgres, Oauth 2.0, and a Next.js serverless API',
      bullets: [
        'Utilized Next.js to create a scalable collection of user content that is incrementally statically regenerated and served on edge',
        'Created post interaction with threaded comments, likes, saves, and rich text editing',
        'Implemented a serverless REST API that the manages the lifecycle of securely uploading images from the client using presigned urls',
      ],
      deploymentSrc: 'http://hello-next-auth.vercel.app/all-time',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/buildable-hls/master.m3u8',
      repos: [
        {
          name: 'mono repo',
          src: 'https://github.com/tsAppDevelopment/buildable',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'react',
        'nodedotjs',
        'amazonaws',
        'vercel',
        'typescript',
        'prisma',
        'github',
        'git',
        'css3',
        'html5',
      ],
    },
    {
      id: v4(),
      name: 'Levels',
      dateRange: 'March 2021 - Present',
      subHeading: `Developed a production full stack web app to manage aircraft cargo loading for the Air Force`,
      bullets: [
        'Leveraged CI/CD pipelines, TDD, hardened Docker imgs, and Agile to accredit and deploy a prod app in < 5 months to a secure network',
        'Utilized Node.js to create a REST API that manages cargo and loading configurations against multiple aircraft and user roles',
        'Created containerized React UI for real time aircraft data management, and cargo loading with offline persistence',
      ],
      deploymentSrc: 'https://levels.apps.dso.mil',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/level-2-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v3-react',
        },
        {
          name: 'Backend',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'express',
        'react',
        'nodedotjs',
        'amazonaws',
        'nginx',
        'typescript',
        'prisma',
        'jest',
        'cypress',
        'testinglibrary',
        'gitlab',
        'sonarqube',
        'git',
        'jira',
        'figma',
        'css3',
        'html5',
      ],
    },
    {
      id: v4(),
      name: 'Five Level',
      dateRange: 'Sep 2020 - Mar 2021',
      bullets: [
        'Established CI/CD pipeline for static code analysis, linting, testing, and containerized builds',
        'Wrote 160 Flutter component & unit tests for > 90% code coverage',
        'Developed custom admin dashboard to manage cargo data from a REST API in < 10 days',
        'Utilized Google Firestore (BaaS / document db) for offline data persistence on mobile',
      ],
      subHeading: `Developed a X-Platform native UI to manage aircraft cargo loading`,
      deploymentSrc: 'https://fivelevel.web.app',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/five-level-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v2-flutter',
        },
        {
          name: 'Backend Server',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'firebase',
        'flutter',
        'express',
        'nodedotjs',
        'nginx',
        'dart',
        'prisma',
        'git',
        'figma',
      ],
    },
    {
      id: v4(),
      name: '5 Level',
      dateRange: 'Sep 2020 - March 2020',
      subHeading: `Developed, and deployed A native android application with Java for aircraft weight and balance`,
      bullets: [],
      deploymentSrc:
        'https://play.google.com/store/apps/details?id=com.TsAppDevelopment.c17mac',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/5-level-2-hls/master.m3u8',
      repos: [
        {
          name: 'Android UI',
          src: 'https://github.com/tsAppDevelopment/levels-v1-android',
        },
      ],
      svgs: ['android', 'java', 'git', 'github'],
    },
    {
      id: v4(),
      name: 'Dog of the Day',
      dateRange: 'Mar 2021',
      subHeading: `A lighthearted React app to share your favorite animals during standup`,
      bullets: [
        'Consumed a restful api to browse, showcase, and persist animals in a React/Material-UI',
      ],
      deploymentSrc: 'https://dog-of-the-day-2692f.web.app/',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/dod-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/dog-of-the-day',
        },
      ],
      svgs: [
        'firebase',
        'react',
        'typescript',
        'html5',
        'css3',
        'git',
        'github',
      ],
    },
    {
      id: v4(),
      name: `Doctor's Patient Portal`,
      subHeading: `Developed a demo Flutter UI to consume real time checkups to a doctor's office`,
      dateRange: 'March 2021',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/lpg-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/doctors-patient-database',
        },
      ],
      svgs: ['flutter', 'firebase', 'git', 'github', 'dart'],
      bullets: [
        `Utilized Firebase auth to authenticate care providers who want to maintain patient data`,
        `Implemented real time searching of patients against NoSQL database (Firebase)`,
        'email:  guest@email.com, password: password',
      ],
      deploymentSrc: 'https://doctors-patient-database.web.app',
    },
  ],
  schools: [
    {
      id: v4(),
      name: 'Southwestern College',
      dateRange: 'May 2021',
      subHeading: `Bachelor of Science, Computer Programming`,
      imgSrc: '/bs1.png',
      href: 'https://www.sckans.edu/',
    },
    {
      id: v4(),
      name: 'Community College of the Air Force',
      dateRange: 'August 2019',
      subHeading: `Associate of Applied Science, Aviation Maintenance Technology`,
      imgSrc: '/as1.png',
      href: 'https://www.ccaf.af.mil/',
    },
  ],
}
