import { dean, onlineexam, scms, faceemotion } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    python,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    php,
    figma,
    java,
    c,
    pricewise,
    react,
    sql,
    tensorflow,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    django,
    project,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "UI",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C Programming",
        type: "Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
    },
    {
        imageUrl: tensorflow,
        name: "tensorflow",
        type: "Machine Learning",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "django",
        type: "Backend",
    },
    {
        imageUrl: project,
        name: "project",
        type: "project",
    }
];

export const experiences = [
    {
        title: "Dean Dashboard",
        company_name: "CUTMAP 72HR BOOTCAMP",
        icon: dean,
        iconBg: "#a2d2ff",
        date: "May 2024",
        points: [
            "Dean Dashboard: Centralized academic management.",
            "Track student performance, attendance, and progress.",
            "Real-time analytics for data-driven decisions.",
            "Streamline faculty management, course scheduling, and resource allocation.",
        ],
    },
    {
        title: "Facial Emotion Recognition System",
        company_name: "CUTMAP 72HR BOOTCAMP",
        icon: faceemotion,
        iconBg: "#fbc3bc",
        date: "May 2024",
        points: [
            "Facial Emotion Recognition System: AI-driven sentiment analysis.",
            "Accurately detects emotions: happiness, sadness, anger, surprise, fear.",
            "Enhances human-computer interaction, sentiment analysis, and market research.",
            "Real-time emotional intelligence for improved decision-making.",
        ],
    },
    {
        title: "Online Examination System",
        company_name: "LearnFlu ",
        icon: onlineexam,
        iconBg: "#b7e4c7",
        date: "June 2024 - July 2024",
        points: [
            "Online Examination System: Convenient, secure, and efficient.",
            "Automated grading and real-time monitoring for fairness.",
            "Accessible from anywhere, reducing logistical costs.",
            "Enhancing education through data-driven insights and analytics.",
        ],
    },
    {
        title: "SMART CLASSROOM MANAGEMENT SYSTEM",
        company_name: "CUTMAP BOOTCAMP",
        icon: scms,
        iconBg: "#accbe1",
        date: "Aug 2024 - Present",
        points: [
            "Automated Attendance: SCMS features facial recognition technology for accurate attendance tracking, reducing manual errors and saving time.",
            "Centralized Dashboard: Teachers and administrators access a unified platform to manage student data, assignments, grades, and classroom materials.",
            "Real-time Collaboration: SCMS enables seamless communication between students, teachers, and parents through messaging, notifications, and virtual classrooms.",
            "Data Analytics: The system provides insights on student performance, engagement, and learning patterns, helping educators optimize teaching methods and improve student outcomes.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: project,
        theme: 'btn-back-red',
        name: 'Dean Dashboard',
        description: 'Dean Dashboard: Centralized platform for academic management.Tracks student performance, attendance, and faculty activities.Enhances decision-making with real-time analytics and insights.',
        link: 'https://github.com/TEJESH2004/sep-proj',
    },
    {
        iconUrl: project,
        theme: 'btn-back-green',
        name: 'Facial Emotion Recognition System',
        description: 'Facial Emotion Recognition System: AI-powered sentiment analysis.Detects emotions - happiness, sadness, anger, surprise, fear - with accuracyEnhances human-computer interaction, market research, and security.',
        link: 'https://github.com/sriram806/Facial-Emotion-Recognition-System',
    },
    {
        iconUrl: project,
        theme: 'btn-back-blue',
        name: 'Youtube Ad Revenue Predection',
        description: 'YouTube Ad Revenue Predictor: AI-driven forecasting tool.Analyzes video metrics, audience engagement, and market trends.Accurately predicts ad revenue, helping creators optimize content.',
        link: 'https://github.com/sriram806/MACHINE-LEARNING/tree/main/Youtube%20Adreview%20Predection',
    },
    {
        iconUrl: project,
        theme: 'btn-back-pink',
        name: 'DeepFake Detection',
        description: 'Deepfake detection involves identifying manipulated media, where AI-generated techniques alter faces or voices to create realistic fake content. Detection methods typically use deep learning models like convolutional neural networks (CNNs) or recurrent neural networks (RNNs) to analyze subtle visual and audio artifacts. ',
        link: 'https://github.com/Dineshk31/deepfake-detection/tree/main',
    },
    {
        iconUrl: project,
        theme: 'btn-back-black',
        name: 'Automatic Attendence',
        description: 'Automatic attendance systems use technologies like facial recognition, RFID, or biometric scanning to record attendance without manual input. These systems streamline attendance tracking, reduce human error, and provide real-time reports, enhancing efficiency in educational institutions and workplaces. They often integrate with databases for record-keeping and analysis.',
        link: 'https://github.com/murali3633/Automatic-Attendance',
    },
    {
        iconUrl: project,
        theme: 'btn-back-yellow',
        name: 'Customer Churn Prediction',
        description: 'This customer churn prediction model uses a Random Forest classifier to identify potential churners based on customer data. The process involves data preprocessing, including handling missing values and encoding categorical variables, followed by training the model on a training set.',
        link: 'https://github.com/murali3633/cutomer-churn-prediction/tree/main',
    }
];