// Portfolio data for Next.js
export interface PortfolioItem {
  id: number;
  type: string;
  image: string;
  imageLight?: string;
  imageDark?: string;
  tag: string[];
  delayAnimation: string;
  modalDetails: {
    project: string;
    client: string;
    language: string;
    preview: string;
    link: string;
  }[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    type: "REACT USER API",
    image: "/images/portfolio/react.jpg",
    tag: ["react"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        language: "React Js, Laravel,HTML,CSS ",
        preview: "www.react.rksumon.com",
        link: "https://react.rksumon.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Ecommerce Site",
    image: "/images/portfolio/project-2.jpg",
    tag: ["laravel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Ecommerce Site",
        client: "felixtech",
        language: "Laravel, Ajax, HTML, CSS",
        preview: "www.shop.deshidoctor.com.bd",
        link: "https://shop.deshidoctor.com.bd/",
      },
    ],
  },
  {
    id: 3,
    type: "Management System",
    image: "/images/portfolio/project-3.jpg",
    tag: ["vue"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Meal Management System",
        client: "hostel",
        language: " HTML, CSS, Javascript",
        preview: "www.rksumon.com",
        link: "https://www.rksumon.com",
      },
    ],
  },
  {
    id: 4,
    type: "Inventory System",
    image: "/images/portfolio/project-4.jpg",
    tag: ["laravel", "vue"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Shop Inventory Management System",
        client: "Personal",
        language: " Vue js, Laravel, PHP",
        preview: "www.shop.rksumon.com",
        link: "https://www.shop.rksumon.com/",
      },
    ],
  },
  {
    id: 5,
    type: "Website",
    image: "/images/portfolio/project-5.jpg",
    tag: ["laravel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "TouchIT",
        client: "Emon",
        language: "PHP, Laravel, HTML, Jquery",
        preview: "www.rksumon.com",
        link: "https://rksumon.com",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: "/images/portfolio/project-2.jpg",
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.rksumon.com",
        link: "https://www.rksumon.com",
      },
    ],
  },
  {
    id: 100,
    type: "BestTutor.xyz",
    image: "/images/portfolio/besttutor_light.webp", // always fallback to light image
    imageLight: "/images/portfolio/besttutor_light.webp",
    imageDark: "/images/portfolio/besttutor_dark.webp",
    tag: ["nextjs", "nodejs", "mongodb", "webrtc"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Online Tutoring Marketplace",
        client: "BestTutor",
        language: "Next.js, Node.js, MongoDB, WebRTC",
        preview: "besttutor.xyz",
        link: "https://besttutor.xyz",
      },
    ],
  },
  {
    id: 101,
    type: "BDDTI.com",
    image: "/images/portfolio/bddti_light.webp", // always fallback to light image
    imageLight: "/images/portfolio/bddti_light.webp",
    imageDark: "/images/portfolio/bddti_dark.webp",
    tag: ["nextjs", "react", "tailwind"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Driving Training Institute Website",
        client: "BDDTI",
        language: "Next.js, React, Tailwind CSS",
        preview: "bddti.com",
        link: "https://bddti.com",
      },
    ],
  },
  {
    id: 102,
    type: "BDDTI Admin Panel",
    image: "/images/portfolio/bddti_light.webp", // always fallback to light image
    imageLight: "/images/portfolio/bddti_light.webp",
    imageDark: "/images/portfolio/bddti_dark.webp",
    tag: ["nextjs", "react", "restapi"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Admin Dashboard for BDDTI",
        client: "BDDTI",
        language: "Next.js, React, RESTful APIs",
        preview: "admin.bddti.com",
        link: "https://admin.bddti.com",
      },
    ],
  },
];