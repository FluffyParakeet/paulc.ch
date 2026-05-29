import type React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { SplunkIcon } from "@/components/ui/svgs/splunk";
import {
  AwsIcon,
  CrowdStrikeIcon,
  DatadogIcon,
  GithubIcon,
  JiraIcon,
  NotionIcon,
  OpenCTIIcon,
  SentinelOneIcon,
  SlackIcon,
  TinesIcon,
  TryHackMeIcon,
} from "@/components/ui/svgs/brands";

export const DATA = {
  name: "Paul-Yliam CACHERA",
  initials: "PYC",
  url: "https://paulc.ch",
  location: "Lille, France",
  locationLink: "https://www.google.com/maps/place/lille",
  description:
    "Security Engineer with 5 years of experience across cyber operations, tool integration and security automation.",
  summary:
    "Security Engineer with **5 years of experience** across cyber operations, tool integration and security automation, with strong expertise in **SOAR platforms** and **multi-vendor ecosystems**.\n\nAt [Mindflow](https://mindflow.io/), I owned **3,000+ cybersecurity connectors** across **650+ vendors** and deployed **50+ security workflows** for enterprise clients. I work daily with Splunk, Datadog, CrowdStrike, SentinelOne, OpenCTI, Tines, and AWS — building integrations via REST, GraphQL, and OpenAPI.\n\nPreviously at **Fives ECL**, I developed full-stack features on industrial platforms. I hold a **Master in System-Network Architectures & IT Security** from EFFICOM Lille, with hands-on practice in ISO 27001, RGPD, and MITRE ATT&CK.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Splunk", icon: SplunkIcon },
    { name: "Datadog", icon: DatadogIcon },
    { name: "CrowdStrike", icon: CrowdStrikeIcon },
    { name: "SentinelOne", icon: SentinelOneIcon },
    { name: "OpenCTI", icon: OpenCTIIcon },
    { name: "Tines", icon: TinesIcon },
    { name: "AWS", icon: AwsIcon },
    { name: "GitHub", icon: GithubIcon },
    { name: "Jira", icon: JiraIcon },
    { name: "Slack", icon: SlackIcon },
    { name: "Notion", icon: NotionIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "paul.cch@proton.me",
    tel: "+33651054548",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paul-cachera",
        icon: Icons.linkedin,
        navbar: true,
      },
      TryHackMe: {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/Originxls",
        icon: TryHackMeIcon,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:paul.cch@proton.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mindflow",
      href: "https://mindflow.io/",
      badges: [],
      location: "Paris, France",
      title: "Cyber Lead Integrations Engineer",
      logoUrl: "/mindflow.svg",
      start: "Sept 2024",
      end: "Jun 2026",
      description:
        "Owned 3,000+ cybersecurity connectors across 650+ vendors, developed via REST API and advanced OpenAPI specifications while managing multi-project integrations for CAC40/Fortune 500 accounts.",
    },
    {
      company: "Mindflow",
      href: "https://mindflow.io/",
      badges: [],
      location: "Paris, France",
      title: "Cybersecurity Consultant",
      logoUrl: "/mindflow.svg",
      start: "Sept 2021",
      end: "Sept 2024",
      description:
        "Deployed 50+ security workflows and integrated cyber solutions via REST / GraphQL APIs, while providing technical client onboarding and SOAR training on the Mindflow platform.",
    },
    {
      company: "Fives ECL",
      href: "https://www.fivesgroup.com/fives-ecl",
      badges: [],
      location: "Lille, France",
      title: "Full Stack Developer",
      logoUrl: "/fives-ecl.svg",
      start: "Oct 2019",
      end: "Jun 2021",
      description:
        "Front-end development and responsive optimization of industrial platforms.",
    },
  ],
  education: [
    {
      school: "TryHackMe",
      href: "https://tryhackme.com/p/Originxls",
      degree: "Learning Path Cyber 101",
      logoUrl: "/tryhackme.svg",
      start: "May 2026",
      end: "Present",
    },
    {
      school: "EFFICOM Lille",
      href: "https://www.igensia.fr/ecoles/efficom-campus-lille",
      degree:
        "Master in System-Network Architectures & IT Security — network security, cloud architecture, ISO 27001, RGPD, incident management",
      logoUrl: "/efficom.svg",
      start: "Sept 2022",
      end: "Sept 2024",
    },
    {
      school: "EFFICOM Lille",
      href: "https://www.igensia.fr/ecoles/efficom-campus-lille",
      degree:
        "Bachelor's in IT Project Management — vulnerability analysis, firewall, VPN, IDS/IPS, data protection & compliance",
      logoUrl: "/efficom.svg",
      start: "Sept 2021",
      end: "Sept 2022",
    },
  ],
  recommendations: [
    {
      name: "Fabrice",
      title: "CTO",
      company: "Mindflow",
      avatar: "/fabrice.jpeg",
      body: "J'ai eu la chance de travailler avec Paul chez Mindflow, au sein de l'équipe Engineering, sous ma responsabilité en tant que CTO.\n\nJe le recommande avec beaucoup de conviction.\n\nPaul fait partie de ces profils qu'on aime avoir à ses côtés dans les moments exigeants : positif, constructif, fiable, avec une vraie capacité à avancer vite et bien.",
    },
    {
      name: "Gregory",
      title: "Head of Engineering",
      company: "Mindflow",
      avatar: "/gregory.jpeg",
      body: "J'ai eu la chance de travailler avec Paul Cachera dans le cadre de projets d'intégration complexes, et son impact a été immédiat et durable.\n\nPaul est un Integration Specialist hors pair, capable de livrer des intégrations de bout en bout avec une rigueur et une réactivité exceptionnelles. Ce qui m'a le plus impressionné ? Sa résilience. Paul a rejoint l'équipe en tant que junior, seul sur son périmètre, sans mentor dédié. Pourtant, il a pris en main son rôle avec une maturité rare.\n\nAu-delà de ses compétences techniques, ce qui le distingue, c'est son énergie positive : toujours de bonne humeur, toujours disponible pour aider, et doté d'une curiosité sans limites. Un vrai team player qui transforme les défis en opportunités.",
    },
  ],
  projects: [] as {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: { type: string; href: string; icon: React.ReactElement }[];
    image: string;
    video: string;
  }[],
} as const;
