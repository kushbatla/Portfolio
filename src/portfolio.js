/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Kush",
  logo_name: "Kush.Batla()",
  nickname: "kush / batla",
  full_name: "Kush Batla",
  subTitle:
    "Full Stack Developer,Android Developer, Tech Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1KXVY1FIpfgDdMN23SvROX5PEH38WASfI/view?usp=drive_link",
  mail: "mailto:batlakush23@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/kushbatla",
  linkedin: "https://www.linkedin.com/in/kushbatla/",
  gmail: "batlakush23@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "https://www.instagram.com/batla.kush?igsh=MTNvenAyZmowMHhyZQ==",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS ",
        "⚡ Developing mobile applications using Kotlin & Java",
        "⚡ Backend development using NodeJS, ExpressJS ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#5c79df",
          },
        },
      
      
      
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
       
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
       

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    
    {
      title: "Other interests",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Playing chess , ok you can have the white pieces ",
        "⚡ Tennis :You surely wanna face me? ",
        "⚡ Movies : Always ready to watch one ",
      ],
      softwareSkills: [
       
        
        {
          skillName: "Chess",
          fontAwesomeClassname: "fa-solid:chess",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tennis",
          fontAwesomeClassname: "noto:tennis",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Movies",
          fontAwesomeClassname: "fluent:movies-and-tv-24-regular",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        
      ],
    },
  ],
};

const degrees = {
  degrees: [
 
    {
      title: "IIIT Jabalpur",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "pdpm.jpg",
      alt_name: "iiit",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.iiitdmj.ac.in/",
    },
    {
      title: "Maria Assumpta Sr. Sec. School Kashipur Uttarakhand",
      subtitle: "Class 10 & 12",
      logo_path: "maria.jpg",
      alt_name: "maria",
      duration: "2021",
      descriptions: [
        "⚡ Passed my 12th class (CBSE)with 95.2% in 2021",
        "⚡ Passed my 10th class (CBSE)with 95.2% in 2019",
        "⚡ Yes I know its surprising ",
      ],
      website_link: "https://mariaschoolkashipur.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed an Android internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer Intern",
          company: "Stackfusion Pvt Ltd ( Parkzap ) ",
          company_url: "https://parkzap.com/en/",
          logo_path: "sf.jpg",
          duration: "May 2023 - July 2023",
          location: "Gurugram, India",
          description:
            " Smart Parking App-The primary use of the app is to provide paperless ticketing using Fastag at parking lots to cut down paper usage to 0% , incase Fastag is not available, a manual ticket is generated using POS (Point of Sale) devices.",
          color: "#f10000",
        },
       
      ],
    },
    
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Co Coordinator Lawn Tennis Club",
          company: "IIITDM Jabalpur ",
          company_url: "",
          logo_path: "pdpm.jpg",
          duration: "July 2022 - June 2023",
          location: "Jabalpur, India",
          description:
            " Conducted multiple tournaments, guided students and contributed in growth of the club",
          color: "#f10000",
        },
       
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Android Apps and web apps. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kush.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "See Yaa",
      url: "https://github.com/kushbatla/See-Yaa",
      description: "An social media application.",
      languages: [
        {
          name: "Kotlin.js",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "FireBase",
          iconifyClass: "devicon-firebase",
        },
       
      ],
    },
    {
      name: "StepTrackerWithMapTrajectory",
      url: "https://github.com/kushbatla/StepTrackerWithMapTrajectory",
      description:
        "Android app with Step counter , distance travelled and path on google maps"

        ,
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "Google Maps",
          iconifyClass: "logos-google-maps",
        },
      ],
    },
    {
      name: "Chess App",
      url: "https://kushbatla.github.io/Chess/chess.html",
      description: "Chess game using html,css,javascript",
      languages: [
        {
          name: "Html",
          iconifyClass: "logos:html-5",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "css",
          iconifyClass: "logos:css-3",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://github.com/kushbatla/Portfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Shopping App",
      url: "https://cautious-vest-boa.cyclic.app/",
      description:
        "Fullstack MERN Ecommerce Application.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Mongo DB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express Js",
          iconifyClass: "skill-icons:expressjs-light",
        },
      ],
    },
 
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
