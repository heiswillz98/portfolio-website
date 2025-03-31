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
    "I am a self-motivated and enthusiastic Software Developer and DevOps Engineer dedicated to building, optimizing, and automating user-focused applications and infrastructure. With a clear understanding of modern technologies, I am passionate about performance metrics, scalability, and continuously improving past work. I am eager to contribute to team success in a dynamic and growing company through hard work, attention to detail, and excellent problem-solving skills.",
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
  instagram: "https://www.instagram.com",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: "https://twitter.com/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "DevOps Engineer & Software Engineer",
  data: [
    {
      title: "DevOps Engineer",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Automation & Infrastructure as Code (IaC): Skilled in automating deployments, managing cloud infrastructure, and writing IaC using Terraform, Ansible, and Kubernetes for scalable and efficient operations."
        ),
        emoji(
          "⚡ CI/CD & Monitoring: Experienced in designing robust CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD, ensuring seamless software delivery with real-time monitoring through Prometheus, Grafana, and ELK Stack."
        ),
        emoji(
          "⚡ Cloud & Security Expertise: Proficient in AWS, Azure implementing secure, high-availability architectures with strong knowledge of containerization (Docker, Kubernetes) and security best practices."
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
      title: "Software Engineer",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Full-Stack Development & Scalable Architecture: Proficient in building responsive web applications using React, Next.js, Node.js, and TypeScript, with a strong focus on scalable, maintainable, and high-performance architectures."
        ),
        emoji(
          "⚡ Efficient Code & Problem-Solving: Experienced in writing clean, efficient, and well-documented code, leveraging algorithms, data structures, and design patterns to optimize software performance and reliability."
        ),
        emoji(
          "⚡ DevOps & Cloud Integration: Skilled in CI/CD, Docker, Kubernetes, and cloud services like AWS and GCP, ensuring seamless deployment, monitoring, and automation of software development workflows."
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
    role: "DevOps & Full Stack Engineer",
    company: "City Hotel & Spaces",
    companyLogo: "/img/icons/common/city.png",
    date: "Jan 2023 - Present",
    // desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
    descBullets: [
      "Automated CI/CD pipelines using GitHub Actions & GitLab CI/CD,reducing deployment time by 60% and eliminating manual intervention.",
      "Implemented Infrastructure as Code using Terraform, reducing deployment errors by 30% and improving cloud resource provisioning consistency across environments.",
      "Led the migration of on-premise applications to AWS, ensuring minimal downtime and seamless integration with existing systems.",
      "Implemented container orchestration with Kubernetes, improving deployment efficiency by 40% and ensuring seamless scaling and service discovery.",
      "Utilized Next Js, TypeScript, and Tailwind CSS to develop and maintain web applications.",
      "Monitored and optimized cloud infrastructure, reducing cloud costs by 25%",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Mettalloids Limited",
    companyLogo: "/img/icons/common/metalloid.jpeg",
    date: "Aug 2021 - June 2023",
    // desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    descBullets: [
      "Designed and implemented a GitLab CI/CD pipeline for a Java Spring Boot app, reducing manual deployment time by 80% with Gradle, AWS S3, and Elastic Beanstalk.",
      "Automated infrastructure provisioning using Terraform and Ansible, cutting deployment errors by 90% ",
      "Containerized and deployed microservices with Docker and Kubernetes, improving scalability and ensuring seamless orchestration.",
      "Implemented secure traffic routing with Traefik, enabling reverse proxy, automatic SSL/TLS, and HTTPS enforcement.",
      "Integrated automated testing and monitoring using JUnit, PMD, Postman Newman, Prometheus, and Grafana, reducing deployment failures by 60% and system downtime by 25%.",
      "Achieved single-command deployment (terraform apply -auto-approve), streamlining infrastructure setup, monitoring with Spring Boot Actuator, and automated rollback strategies.",
    ],
  },
  {
    role: "FullStack Engineer",
    company: "SmartChain Limited ",
    companyLogo: "/img/icons/common/smartchain.jpeg",
    date: "Oct 2023 - Jan 2025",
    descBullets: [
      "Developed and maintained web applications using React, TypeScript, Node.js, and Tailwind CSS, ensuring optimal performance and scalability.",
      "Assisted in building and optimizing the admin dashboard load time by 15% through performance optimization.",
      "Implemented Azure DevOps CI/CD pipelines, reducing deployment time by 40% and automating build, test, and deployment processes to enhance workflow efficiency.",
      "Facilitated seamless integration between front-end interfaces and server-side applications and databases, collaborating closely with the backend development team to deliver cohesive and efficient web solutions.",
      "Contributed to improving the website's performance and user experience through code optimization and best practices.",
    ],
    // desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "DevOps Engineer (Intern)",
    company: "Terragon Group",
    companyLogo: "/img/icons/common/terragon.jpeg",
    date: "Jan 2021 - April 2021",
    descBullets: [
      "Collaborated with a team of software engineers to identify and resolve challenges that hindered the building and deployment of new features, streamlining development processes through extensive research and implementation of best practices.",
      "Designed, containerized, and deployed microservices to Kubernetes clusters for improved scalability and reliability.",
      "With this role, I explored, test, share ideas, plus deep knowledge software development and delivery tools like; Versioning control system management tool (Git/GitHub), Cloud platform (Azure), and Containerisation (Docker)",
      "Gained hands-on experience in software development and delivery tools, including Git/GitHub for version control, Azure for cloud platform management, and Docker for containerization.",
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
    name: "Microservices Containerization & Automated Deployment",
    desc: "This project containerizes a microservices-based TODO application using Docker and Docker Compose. It deploys Vue.js, Go, Node.js, Java, and Python services with Redis, configures a Traefik reverse proxy, enables HTTPS, and automates deployment for seamless scalability and security.",
    github: "https://github.com/heiswillz98/ServiceGrid",
    image: "/img/icons/common/micro-service.png",
  },
  {
    name: "Automated AWS Deployment with Terraform & Ansible",
    desc: "This DevOps project automates infrastructure provisioning and deployment using Terraform and Ansible on AWS. It sets up EC2 instances, configures security, installs dependencies, deploys a Dockerized application, and enables SSL/TLS with Traefik—all executed via a single terraform apply command.",
    github: "https://github.com/heiswillz98/terra-config",
    image: "/img/icons/common/terra-config.png",
    // link: "https://github.com/heiswillz98/terra-config",
  },

  {
    name: "CI/CD Pipeline for Java Microservice Deployment",
    desc: "This project automates the CI/CD pipeline for a Java-based microservice using GitLab CI/CD. It includes build, testing (unit, smoke, and API), deployment to AWS Elastic Beanstalk, and post-deployment verification, ensuring a seamless, reliable, and scalable release process.",
    gitlab: "https://gitlab.com/heiswillz-projects/cars-api",
    image: "/img/icons/common/gitlabci-cd.png",
  },
  // {
  //   name: "City Spaces",
  //   desc: "Cityspaces is a platform for hosting apartments, offering a seamless experience for property owners and renters. It features easy listing management, secure transactions, and a user-friendly interface, ensuring a smooth rental process for all users.",
  //   image: "/img/icons/common/cityHotel.jpg",
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
  url: "https://williamsadebola.vercel.app/",
  keywords: ["Willz", "Adebola Williams", "Portfolio", "Willz Portfolio ", "Adebola Williams Portfolio"],
};
