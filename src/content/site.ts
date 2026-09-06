export const site = {
  name: "Fleet Associates Africa",
  legalName: "Fleet Associates Africa Ltd",
  url: "https://faaafrica.com",
  founded: 2015,
  email: "info@faaafrica.com",
  phones: [
    { label: "+254 728 764 014", href: "tel:+254728764014" },
    { label: "0714 606 541", href: "tel:+254714606541" },
  ],
  address: "New Hurlingum Estate, Off Kangundo Road, Florida Court, Nairobi",
  streetAddress: "Florida Court, New Hurlingum Estate, Off Kangundo Road",
  locality: "Nairobi",
  country: "KE",
  postalCode: "00521",
  poBox: "P.O. Box 772–00521 Embakasi, Nairobi, Kenya",
  region: "East, Central, and Southern Africa",
  logo: "/images/Company%20Logo.png",
  defaultImage: "/images/hero-feature.jpg",
  defaultImageWidth: 1371,
  defaultImageHeight: 768,
  locale: "en_KE",
  themeColor: "#122033",
  defaultDescription:
    "Fleet and industrial solutions for organisations across East, Central, and Southern Africa.",
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const primaryNav: NavItem[] = [
  { href: "/work", label: "Work" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/fleet-solutions", label: "Fleet solutions" },
      { href: "/industrial-solutions", label: "Industrial solutions" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const footerSolutions = [
  { href: "/fleet-solutions", label: "Smart fleet management" },
  { href: "/industrial-solutions", label: "Engineering & industrial support" },
  { href: "/services", label: "Project delivery" },
  { href: "/services#training", label: "Training & capacity building" },
];

export const partners = [
  { src: "/images/tradeMark.png", alt: "TradeMark East Africa" },
  { src: "/images/transport.png", alt: "Kenya Transporters Association" },
  { src: "/images/telematics.png", alt: "Telematics Africa" },
  { src: "/images/cargill.png", alt: "Cargill" },
  { src: "/images/bahari.png", alt: "Bahari Forwarders" },
  { src: "/images/greatLakes.png", alt: "Great Lakes Freight" },
  { src: "/images/oshwal.png", alt: "Oshwal Academy" },
  { src: "/images/olpejeta.png", alt: "Ol Pejeta Conservancy" },
  { src: "/images/hapa.png", alt: "Hapa Hydraulics" },
  { src: "/images/dodwell.png", alt: "Dodwell" },
];

export const metrics = [
  { value: "100+", label: "Years of combined team experience" },
  { value: "100+", label: "Projects delivered across the region" },
  { value: "1,000+", label: "Technicians and drivers trained" },
];

export const values = [
  {
    title: "Integrity",
    body: "Honesty, transparency, and accountability in every engagement.",
  },
  {
    title: "Innovation",
    body: "Technology and practical method, used to raise efficiency and cut waste.",
  },
  {
    title: "Collaboration",
    body: "Shared value with clients, communities, and operating partners.",
  },
  {
    title: "Excellence",
    body: "Reliable, professional delivery that holds up under operational pressure.",
  },
  {
    title: "Sustainability",
    body: "Green practice that conserves resources and protects the environment.",
  },
  {
    title: "Capacity",
    body: "People first: training, knowledge transfer, and skill that stays on site.",
  },
];

export const leadership = [
  {
    name: "Joseph Otieno Odie",
    role: "Chief Operating Officer & Lead Consultant, Smart Fleet Solutions",
    image: "/images/team/Joseph.png",
    summary:
      "Fleet management and automotive engineering professional with more than 25 years leading large-scale transport operations across East and Southern Africa.",
    detail:
      "Recognised for cost optimisation, uptime, and compliance with international safety and environmental standards. Implements GPS, telematics, TMS, and FMS systems, and has established workshops and technician programmes in high-risk operating environments including the DRC and South Sudan.",
    linkedin: "https://www.linkedin.com/in/joseph-odie-6750a5110/",
  },
  {
    name: "Apollo Ogal Wangah",
    role: "Project Manager & Lead Consultant, Industrial Management",
    image: "/images/team/Apollo.jpg",
    summary:
      "Mechanical engineer with more than 25 years in industrial engineering, plant maintenance, and technical sales across tea, tobacco, and manufacturing.",
    detail:
      "Expertise in preventive and condition-based maintenance, energy efficiency, project design, and staff capacity building. Known for cost savings, plant performance, and ISO and SHE standards.",
  },
];

export const specialists = [
  {
    name: "Ogola Nixon",
    profession: "Mechanical Engineer",
    focus: "Utilities, plant maintenance, energy conservation",
    experience: "25+ years in industrial engineering",
    phone: "0721 840 954",
  },
  {
    name: "Peter Okoth Aache",
    profession: "ICT & Fleet Systems Expert",
    focus: "GPS, telematics, fuel log, IT systems",
    experience: "20+ years in ICT and fleet systems",
  },
  {
    name: "Ronald Ngala Ambusso",
    profession: "Workshop & Fleet Operations Manager",
    focus: "Workshop management, maintenance planning, cost control, staff training",
    experience: "20+ years in workshop operations",
    phone: "0721 395 460",
  },
  {
    name: "James Cyprian Ngeso Onyango",
    profession: "Civil & Water Engineer",
    focus: "WASH projects, borehole drilling, construction supervision",
    experience: "25+ years in civil and water engineering",
  },
  {
    name: "George Mayabi",
    profession: "Fleet & Workshop Professional",
    focus: "Technical repairs, spare parts, safety compliance",
    experience: "20+ years in fleet and workshop management",
    phone: "0722 361 062",
  },
  {
    name: "Otieno Gombe Cleophas",
    profession: "HSEQ Professional",
    focus: "ISO IMS, audits, fleet and industrial safety",
    experience: "10+ years in HSEQ compliance",
    phone: "0727 105 709",
  },
  {
    name: "Protus C. Otieno",
    profession: "Mechatronic Engineer",
    focus: "Solar PV, e-mobility, automation, CAD, R&D",
    experience: "5+ years in renewable energy and e-mobility",
    phone: "0716 818 589",
  },
  {
    name: "Derick Antoney",
    profession: "Business Data Analyst",
    focus: "Fleet dashboards, cost-benefit analysis, maintenance workflow",
    experience: "5+ years in data analytics and fleet systems",
    phone: "0758 931 761",
    linkedin: "https://www.linkedin.com/in/derrick-omondi-9342ba159",
  },
];

export const projects = [
  {
    title: "Fleet system modernisation",
    body: "Upgrading legacy fleet systems with tracking, utilisation, and operational control that operators will actually use.",
    image: "/images/fleet.jpg",
  },
  {
    title: "Workshop rehabilitation",
    body: "Redesigning maintenance workshops for workflow, safety, and turnaround, not just new equipment.",
    image: "/images/factory.png",
  },
  {
    title: "CMMS implementation",
    body: "Computerised maintenance management that shortens downtime and makes asset history visible.",
    image: "/images/logitech.png",
  },
  {
    title: "Transport safety programmes",
    body: "Driver behaviour, compliance, and risk reduction across regional transport operations.",
    image: "/images/training.png",
  },
  {
    title: "Electric mobility training",
    body: "Preparing teams to operate and maintain EVs and the infrastructure around them.",
    image: "/images/fleet.png",
  },
];

export const engagementModels = [
  {
    title: "Subscription",
    body: "Monthly or annual frameworks for ongoing fleet monitoring and equipment servicing.",
    points: ["Fixed service contracts", "Pay-as-you-go options", "Digital payment integration"],
  },
  {
    title: "Strategic alliances",
    body: "Non-equity partnerships with OEMs, suppliers, and technology firms on regional work.",
    points: ["Public-private programmes", "Joint venture operations", "OEM assembly centres"],
  },
  {
    title: "Performance & sharing",
    body: "Income and SLA models tied to utilisation, workshop output, or project milestones.",
    points: ["Performance SLAs", "Vendor-managed services", "Milestone billing"],
  },
];

export const partnershipTypes = [
  {
    title: "Joint ventures",
    body: "Partner with local or international companies to run fleet or industrial operations.",
    example: "OEM partnerships for fleet maintenance centres or equipment assembly.",
  },
  {
    title: "Public-private partnerships",
    body: "Work with government on transport, infrastructure, industrial efficiency, and skills programmes.",
    example: "EV technician academies, road safety initiatives, fuel monitoring projects.",
  },
  {
    title: "Franchise and dealership",
    body: "Operate as a licensed dealer of global brands in fleet, logistics, or industrial equipment.",
    example: "Tyre and parts distribution, workshop chains, battery swapping stations.",
  },
  {
    title: "Consortia",
    body: "Pool capability with multiple firms to bid for large fleet or industrial programmes.",
    example: "Transport operators and equipment suppliers bidding for regional logistics contracts.",
  },
  {
    title: "Vendor-managed services",
    body: "Partners manage spare parts, fuel, or equipment inventory on client sites.",
    example: "Tyre and parts suppliers operating inside client workshops.",
  },
  {
    title: "Technology and data",
    body: "Co-develop platforms for tracking, predictive maintenance, and industrial monitoring.",
    example: "Alliances with telematics, tyre, and industrial automation companies.",
  },
];
