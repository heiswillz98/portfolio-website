import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Adebola Williams",
  title: "Hi, I'm Williams",
  description:
    "Creative DevOps maestro with a solid software engineering core who turns chaos into code and infrastructure into art with over 4 years of hands-on experience building user-focused applications, automating cloud infrastructure, optimizing deployment pipelines, and keeping applications running like clockwork. Known for bridging development and operations with ease, I bring a sharp eye for code quality, a passion for performance, and a talent for building systems that scale effortlessly. Proven track record of reducing deployment times, boosting reliability, and empowering agile teams to ship with confidence.",
  resumeLink: "/resume",
};

export const openSource = {
  githubUserName: "heiswillz98",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:williamsadebolah@gmail.com",
  linkedin: "https://www.linkedin.com/in/williams-adebola-114251239",
  github: "https://github.com/heiswillz98",
  // instagram: "https://www.instagram.com",
  medium: "https://medium.com/@williamsadebolah",
  // twitter: "https://twitter.com/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "DevOps Engineer & Software Engineer",
  data: [
    {
      title: "DevOps Arsenal",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Automation & IaC Magic: I turn manual setups into seamless automation using Terraform, Ansible, and Kubernetes — building cloud infrastructure that scales, heals, and just works."
        ),
        emoji(
          "⚡ CI/CD Flow Mastery: From Jenkins to GitHub Actions and GitLab CI/CD, I craft pipelines that ship code reliably. Add real-time monitoring with Prometheus, Grafana, and the ELK stack — and you're looking at visibility from code to production."
        ),
        emoji(
          "⚡ Cloud-First, Security-Smart: I architect secure, high-availability environments in AWS and Azure. Containerization? Docker + Kubernetes are my daily tools for getting things running fast and safe."
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Terraform",
          iconifyTag: "logos:terraform-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
        {
          skillName: "GitLab",
          iconifyTag: "logos:gitlab",
        },
        {
          skillName: "Jenkins",
          iconifyTag: "logos:jenkins",
        },
        {
          skillName: "Prometheus",
          iconifyTag: "logos:prometheus",
        },
        {
          skillName: "Grafana",
          iconifyTag: "logos:grafana",
        },
        {
          skillName: "Ansible",
          iconifyTag: "logos:ansible",
        },
        {
          skillName: "Linux",
          iconifyTag: "logos:linux-tux",
        },
        {
          skillName: "NGINX",
          iconifyTag: "logos:nginx",
        },
        {
          skillName: "Traefik",
          iconifyTag: "simple-icons:traefikproxy",
        },
        {
          skillName: "Apache",
          iconifyTag: "logos:apache",
        },
        {
          skillName: "Bash",
          iconifyTag: "logos:bash-icon",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },

        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
    {
      title: "Code Craft",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡  Full-Stack Builds That Scale: I design and build dynamic apps using React, Next.js, Node.js, and TypeScript — with performance and scalability baked in from the start."
        ),
        emoji(
          "⚡ Code That Clicks: I write clean, efficient code backed by smart problem-solving — data structures, algorithms, and patterns that keep things fast and reliable."
        ),
        emoji(
          "⚡ DevOps x Cloud Synergy: Whether it’s CI/CD flows, container orchestration, or cloud deployments in AWS and GCP — I integrate and automate the full stack for smooth delivery and quick recovery."
        ),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Node js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "Express js",
          iconifyTag: "logos:express",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "DevOps Engineer",
    company: "City Spaces & Bookings",
    companyLogo: "/img/icons/common/city.png",
    date: "Jan 2023 - Present",
    // desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
    descBullets: [
      "Built sleek, no-fuss CI/CD pipelines with GitHub Actions and Bash — slashed manual deployment work by 60%",
      "Wrote infrastructure as code in Terraform and Ansible to make cloud provisioning smooth, consistent, and 30% more error-resistant.",
      "Spearheaded system monitoring with Prometheus and Grafana — caught issues faster, used resources smarter.",
      "Containerized apps with Docker and Kubernetes, boosting deployment speed and reliability, enabling faster feature releases",
      "Utilized Next Js, TypeScript, and Tailwind CSS to develop and maintain web applications.",
      "Set up AWS Budgets & alerts, slashing unexpected costs by 25%.",
    ],
  },
  {
    role: "FullStack Engineer",
    company: "SmartChain Limited ",
    companyLogo: "/img/icons/common/smartchain.jpeg",
    date: "Oct 2023 - Jan 2025",
    descBullets: [
      "Developed a React and Node.js dashboard, reducing admin task times with real-time metrics",
      "Implemented Azure DevOps CI/CD pipelines, cutting deployment time by 40%.",
      "Built scalable React and TypeScript web apps, boosting user engagement.",
      "Collaborated on a zero-downtime Azure migration, earning a team excellence award.",
      "Contributed to improving the website's performance and user experience through code optimization and best practices.",
    ],
    // desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "DevOps Engineer",
    company: "Mettalloids Limited",
    companyLogo: "/img/icons/common/metalloid.jpeg",
    date: "Aug 2021 - June 2023",
    // desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    descBullets: [
      "Built a GitLab CI/CD pipeline for a Java Spring Boot app with Gradle, AWS S3, and Elastic Beanstalk, cutting manual deployment time by 80%.",
      "Automated infrastructure with CloudFormation, cutting provisioning errors by 90% and keeping chaos at bay.",
      "Containerized and deployed microservices with Docker and Kubernetes, improving scalability and ensuring seamless orchestration.",
      "Implemented secure traffic routing with Traefik, enabling reverse proxy, automatic SSL/TLS, and HTTPS enforcement.",
      "Teamed up for a zero-downtime migration to EKS using ECR, CodePipeline, and CodeCommit, pulling off a seamless switch with flair.",
      "Configured various performance metrics using AWS Cloud watch & Cloud Trail for monitoring and metrics tracking",
    ],
  },

  {
    role: "DevOps Engineer (Intern)",
    company: "Terragon Group",
    companyLogo: "/img/icons/common/terragon.jpeg",
    date: "Jan 2021 - April 2021",
    descBullets: [
      "Collaborated with DevOps and engineering teams to troubleshoot deployment issues, speeding up deployment cycles and reducing errors.",
      "Assisted in maintaining Jenkins pipelines by troubleshooting failed builds and tweaking stages for smoother automation.",
      "Sat in on team standups and sprint planning sessions, getting a real feel for DevOps in action.",
      "Documented internal DevOps processes, making it easier for new team members to onboard.",
    ],

    // desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Multi-Cloud AI Infrastructure",
    desc: "Designed and implemented a scalable AI-powered microservices architecture using AWS, Google Cloud, and Azure. Leveraged Terraform for infrastructure as code, Amazon EKS for container orchestration, and Lambda for event-driven processing. Integrated BigQuery for real-time analytics and Azure AI Language for sentiment analysis. Ensured seamless CI/CD with GitHub Actions, AWS CodePipeline, and Amazon ECR.",
    github: "https://github.com/heiswillz98/multi-cloud-ai",
    image: "/img/icons/common/multicloud.png",
    // link: "https://github.com/heiswillz98/terra-config",
  },
  {
    name: "Serverless To-Do App with AWS (Chatbot Coming Soon)",
    desc: "A fully serverless to-do list app built with React and TypeScript, leveraging AWS services like Lambda, API Gateway, DynamoDB, and Amplify. Designed from the ground up with a DevOps-first mindset. I'm currently working on integrating an AI-powered chatbot using Amazon Bedrock to take things even further — stay tuned! For a full step-by-step guide, click the Medium link and dive in.",
    image: "/img/icons/common/serverless.png",
    medium: "https://medium.com/@williamsadebolah/9cf9901a221d",
  },
  {
    name: "Reconxi",
    desc: " ReconXi simplifies financial reconciliation for accountants, auditors, financial analysts, small businesses, and schools. Whether you’re managing transactions, handling business accounts, or reconciling school fees and payroll, experience a faster, more accurate way to reconcile your finances.",
    image: "/img/icons/common/reconxi.png",
    link: "https://reconxi.com",
  },
  {
    name: "City Spaces and Bookings",
    desc: "Cityspaces is a platform for hosting apartments, offering a seamless experience for property owners and renters. It features easy listing management, secure transactions, and a user-friendly interface, ensuring a smooth rental process for all users.",
    image: "/img/icons/common/cityHotel.jpg",
    link: "https://cityspacesandbookings.com/",
  },
  {
    name: "Microservices Containerization & Automated Deployment",
    desc: "This project containerizes a microservices-based TODO application using Docker and Docker Compose. It deploys Vue.js, Go, Node.js, Java, and Python services with Redis, configures a Traefik reverse proxy, enables HTTPS, and automates deployment for seamless scalability and security.",
    github: "https://github.com/heiswillz98/ServiceGrid",
    image: "/img/icons/common/micro-service.png",
  },
  {
    name: "Biterush",
    desc: "Biterush is a food delivery platform tailored for university students. It provides affordable meal options and fast delivery, with a user-friendly interface that helps students easily manage their hunger amidst their busy academic lives.",
    image: "/img/icons/common/biterush.jpg",
    link: "https://biterush.vercel.app",
  },

  {
    name: "Automated AWS Deployment with Terraform & Ansible",
    desc: "This DevOps project automates infrastructure provisioning and deployment using Terraform and Ansible on AWS. It sets up EC2 instances, configures security, installs dependencies, deploys a Dockerized application, and enables SSL/TLS with Traefik—all executed via a single terraform apply command.",
    github: "https://github.com/heiswillz98/terra-config",
    image: "/img/icons/common/terra-config.png",
    // link: "https://github.com/heiswillz98/terra-config",
  },

  // {
  //   name: "CI/CD Pipeline for Java Microservice Deployment",
  //   desc: "This project automates the CI/CD pipeline for a Java-based microservice using GitLab CI/CD. It includes build, testing (unit, smoke, and API), deployment to AWS Elastic Beanstalk, and post-deployment verification, ensuring a seamless, reliable, and scalable release process.",
  //   gitlab: "https://gitlab.com/heiswillz-projects/cars-api",
  //   image: "/img/icons/common/gitlabci-cd.png",
  // },

  // {
  //   name: "Hooligan Culture",
  //   desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
  //   link: "https://hooliganculture.com/",
  // },
];

export const otherProjects: ProjectType[] = [
  {
    name: "City Spaces",
    desc: "Cityspaces is a platform for hosting apartments, offering a seamless experience for property owners and renters. It features easy listing management, secure transactions, and a user-friendly interface, ensuring a smooth rental process for all users.",
    image: "/img/icons/common/cityHotel.jpg",
    link: "https://cityspacesandbookings.com/",
  },
  {
    name: "City Spaces",
    desc: "Cityspaces is a platform for hosting apartments, offering a seamless experience for property owners and renters. It features easy listing management, secure transactions, and a user-friendly interface, ensuring a smooth rental process for all users.",
    image: "/img/icons/common/cityHotel.jpg",
    link: "https://cityspacesandbookings.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

export const seoData: SEODataType = {
  title: "Adebola Williams",
  description: greetings.description,
  author: "Adebola Williams",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://williamsadebolah.vercel.app/",
  keywords: ["Willz", "Adebola Williams", "Portfolio", "Willz Portfolio ", "Adebola Williams Portfolio"],
};
