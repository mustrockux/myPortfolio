import ddxImage from 'figma:asset/59a3acf14a3ec77089ad2f0e718ebacc04bfe3f7.png'
import pimcoImage from 'figma:asset/39dee249425481024c7c65d018b4c9c60f1ab7e3.png'
import onboardingImage from 'figma:asset/d10532e2ac62cc0c3ec9f6599a0ed8f441f4b480.png'
import traceControlImage from 'figma:asset/5d9c8fef4356aa5715e4c3f61ba6f6300045ab81.png'
import { FEATURED_CASE_STUDY_IDS, workSlugForId } from '../seo/config'

export interface Project {
  id: number
  slug: string
  title: string
  client: string
  year: string
  description: string
  tags: string[]
  coverImage: string
  images: string[]
}

const projectRecords = [
  {
    id: 1,
    title: 'Developer Onboarding',
    client: 'Chronosphere',
    year: '2025',
    description:
      'Designed a comprehensive onboarding experience that guides new developers through the Chronosphere platform. Created interactive tutorials, contextual help, and progressive disclosure patterns that reduce time-to-value and increase product adoption across engineering teams.',
    tags: [
      'Design Leadership',
      'Practice Growth',
      'Product Strategy',
      'Service Design',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage: onboardingImage,
    images: [onboardingImage],
  },
  {
    id: 2,
    title: 'Alert Deciphering',
    client: 'Chronosphere',
    year: '2025',
    description:
      'Designed an intelligent alert management system that helps teams quickly understand and respond to critical system issues. The interface prioritizes clarity and actionability in high-pressure situations.',
    tags: [
      'AI-Workflow',
      'Data Visualization',
      'Design Leadership',
      'Mentorship',
      'Product Strategy',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwbWFwJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBhbGVydHN8ZW58MXx8fHwxNzY1MjQ2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwbWFwJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBhbGVydHN8ZW58MXx8fHwxNzY1MjQ2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 4,
    title: 'Trace Control Plane',
    client: 'Chronosphere',
    year: '2024',
    description:
      'Led the design of a sophisticated control plane for managing distributed tracing at scale. Created intuitive controls for sampling strategies, data retention policies, and trace routing that empower platform teams to optimize observability costs while maintaining critical visibility.',
    tags: [
      'Data Visualization',
      'Design Leadership',
      'Product Strategy',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage: traceControlImage,
    images: [traceControlImage],
  },
  {
    id: 5,
    title: 'Differential Diagnosis (DDx)',
    client: 'Chronosphere',
    year: '2024',
    description:
      'Led the design of an advanced differential diagnosis tool that empowers SREs to compare system states and pinpoint root causes. Established a cohesive design system for data-dense interfaces while maintaining clarity and usability.',
    tags: [
      'Data Visualization',
      'Design Leadership',
      'Product Strategy',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage: ddxImage,
    images: [ddxImage],
  },
  {
    id: 6,
    title: 'Distributed Tracing',
    client: 'Chronosphere',
    year: '2023',
    description:
      'Designed an intuitive distributed tracing interface that helps engineers quickly identify performance bottlenecks across microservices. Created a visual language that transforms complex trace data into actionable insights, reducing mean time to resolution by 60%.',
    tags: [
      'Design Leadership',
      'Mentorship',
      'Practice Growth',
      'Product Strategy',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMHRyYWNpbmclMjBtaWNyb3NlcnZpY2VzfGVufDF8fHx8MTc2NTk4NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMHRyYWNpbmclMjBtaWNyb3NlcnZpY2VzfGVufDF8fHx8MTc2NTk4NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 3,
    title: 'Comments & Collaboration',
    client: 'Chronosphere',
    year: '2025',
    description:
      'Created an intuitive commenting and collaboration interface that enables teams to discuss metrics, traces, and alerts in context. Designed threaded conversations and @mentions to facilitate asynchronous team communication and decision-making around observability data.',
    tags: [
      'Design Leadership',
      'Mentorship',
      'Product Strategy',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200',
    images: [
      'https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200',
    ],
  },
  {
    id: 7,
    title: 'Data & Insights',
    client: 'Spotify',
    year: '2022',
    description:
      "As a Design Lead, I helped lead the creation of a comprehensive data visualization and analytics platform that empowers experimentation engineers, data scientists and machine learning engineers to understand their audience. I also managed product designers to work with cross-functional teams that deliver internal tools that drive strategic insights for Spotify's Engineering Community that serves millions of creators and listeners worldwide.",
    tags: [
      'Data Visualization',
      'Design Leadership',
      'Mentorship',
      'Practice Growth',
      'Product Strategy',
      'Service Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsZSUyMHNjcmVlbnMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjU4MzE4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsZSUyMHNjcmVlbnMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjU4MzE4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 8,
    title: 'Tanzu App Transformer',
    client: 'VMware',
    year: '2021',
    description:
      'As Product Design Lead, designed an innovative platform that helps enterprises modernize legacy applications for cloud-native environments. Translated complex technical workflows into intuitive experiences that accelerate digital transformation initiatives.',
    tags: [
      'Data Visualization',
      'Design Leadership',
      'Product Strategy',
      'Service Design',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMG1vZGVybnxlbnwxfHx8fDE3NjU4MzQzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMG1vZGVybnxlbnwxfHx8fDE3NjU4MzQzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 9,
    title: 'Tracker Redesign',
    client: 'Pivotal',
    year: '2019',
    description:
      'Served as Product Design Lead and Manager for a complete platform redesign. Modernized the agile project management experience while maintaining the speed and efficiency that teams depend on. Led design strategy, user research, and execution across web and mobile.',
    tags: [
      'Data Visualization',
      'Design Leadership',
      'Mentorship',
      'Practice Growth',
      'Product Strategy',
      'Service Design',
      'X-Function Collaboration',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200',
    images: [
      'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200',
    ],
  },
  {
    id: 10,
    title: 'Project Rioja',
    client: 'PIMCO',
    year: '2018',
    description:
      'Led product design for a sophisticated investment management platform serving institutional clients. Created elegant interfaces for complex financial instruments while ensuring regulatory compliance and building trust through thoughtful design decisions.',
    tags: [
      'Design Leadership',
      'Practice Growth',
      'Product Strategy',
      'Service Design',
      'Visual Design',
      'X-Function Collaboration',
    ],
    coverImage: pimcoImage,
    images: [pimcoImage],
  },
]

export const projects: Project[] = projectRecords.map((project) => ({
  ...project,
  slug: workSlugForId(project.id),
}))

export const featuredCaseStudies = FEATURED_CASE_STUDY_IDS.map((id) => {
  const project = projects.find((item) => item.id === id)
  if (!project) {
    throw new Error(`Featured case study ${id} is missing from projects`)
  }
  return project
})
