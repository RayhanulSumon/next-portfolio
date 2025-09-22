// Portfolio data for Next.js
export interface PortfolioItem {
  id: number;
  type: string;
  image: string;
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
];