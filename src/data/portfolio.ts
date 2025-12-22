export const PORTFOLIO_DATA = {
    personal: {
        name: "Kisura W.S.P",
        title: "Web Developer / Game Designer / Software Engineer",
        bio: "I am a passionate and adaptable Interactive Media student with strong programming skills. I excel in dynamic environments, solve problems efficiently, and pay close attention to detail. My creativity enhances my work quality. As a quick learner, I eagerly embrace new challenges and technologies.",
        location: "Sri Lanka Institute of Information Technology",
        email: "kisura2003@gmail.com",
        socials: {
            github: "https://github.com/KisuraWSP",
            linkedin: "https://www.linkedin.com/in/kisurawsp/",
            twitter: "https://x.com/redstonemc2003"
        }
    },
    skills: [
        { name: "Rust", level: 85, category: "Systems" },
        { name: "Java", level: 90, category: "Backend" },
        { name: "C++", level: 80, category: "Systems" },
        { name: "C#", level: 75, category: "Game Dev" },
        { name: "Python", level: 85, category: "Data/Scripting" },
        { name: "Go", level: 70, category: "Backend" },
        { name: "Kotlin", level: 65, category: "Mobile" },
        { name: "TypeScript", level: 90, category: "Web" },
        { name: "React", level: 90, category: "Frontend" },
        { name: "Next.js", level: 80, category: "Frontend" },
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "MySQL", level: 80, category: "Database" },
        { name: "MongoDB", level: 75, category: "Database" },
        { name: "Git", level: 95, category: "DevOps" },
        { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    ],
    experience: [
        {
            role: "Game Development Intern",
            company: "ZinCaT Technology",
            type: "Internship",
            dates: "Jul 2025 – Present",
            duration: "6 mos",
            location: "Physical",
            summary: [
                "Building 2D games using the construct3 game engine",
            ],
            skills: ["2D Game Development", "2D Software", "Collaboration"]
        },
        {
            role: "Software Engineer Intern",
            company: "Antler IT Solutions",
            type: "Internship",
            dates: "Oct 2024 – Jun 2025",
            duration: "8 mos",
            location: "Hybrid",
            summary: [
                "Made custom modules and features for Odoo ERP systems using Python and XML.",
                "Created/modified business logic, reports, and user interfaces for specific system requirements.",
                "Built web pages using Odoo Website Builder and delivered user-friendly solutions.",
                "Gained hands-on knowledge of real-world business processes and how ERP systems support them."
            ],
            skills: ["Odoo", "Python", "XML", "ERP", "Web Development"]
        }
    ],
    projects: [
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Developer portfolio website.",
            tech: ["Vite", "TypeScript", "Bootstrap", "Framer Motion", "React"],
            link: "https://github.com/KisuraWSP/KisuraWSP.github.io",
            status: "Latest",
        },
        {
            id: "webserve",
            title: "Web Serve",
            description: "CLI to host HTML via localhost.",
            tech: ["Rust"],
            link: "https://github.com/KisuraWSP/webServe",
            status: "Completed",
        },
        {
            id: "book-list",
            title: "Book List",
            description: "Todo-like app for books.",
            tech: ["Go", "HTMX", "Bootstrap"],
            link: "https://github.com/devgithub-sl/book-list",
            status: "Completed",
        },
        {
            id: "blog-crud",
            title: "BLOG CRUD",
            description: "Basic CRUD app.",
            tech: ["MERN", "Vite", "TS", "MUI"],
            link: "https://github.com/devgithub-sl/blog",
            status: "Completed",
        },
        {
            id: "courseweb",
            title: "CourseWeb Student",
            description: "Mobile prototype for Moodle.",
            tech: ["Kotlin"],
            link: "https://github.com/KisuraWSP/courseweb_student",
            status: "Completed",
        }
    ]
};
