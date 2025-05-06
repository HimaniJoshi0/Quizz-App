import { NavSection, Navtypes } from "./types";

export const Navdata: Navtypes[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
]

export const navItems: NavSection[] = [
    {
        title: "Company",
        links: [
            { title: "About Us", to: "/about" },
            { title: "Contact", to: "/contact" }
        ]
    },
    {
        title: "Services",
        links: [
            { title: "Web Development", to: "/services/web-development" },
            { title: "Digital Marketing", to: "/services/digital-marketing" },
            { title: "UI/UX Design", to: "/services/ui-ux-design" }
        ]
    },
    {
        title: "Courses",
        links: [
            { title: "Web Development Bootcamp", to: "/courses/web-development-bootcamp" },
            { title: "Digital Marketing Mastery", to: "/courses/digital-marketing-mastery" },
            { title: "UI/UX Fundamentals", to: "/courses/ui-ux-fundamentals" }
        ]
    }
];