import { StackedBarChart, Storage } from "@mui/icons-material";

export const SkillsData = [
    { name: "HTML", icon: <i className="fab fa-html5"></i>, image:require('./assets/html.png') },
    { name: "CSS", icon: <i className="fab fa-css3"></i> ,image:require('./assets/css.png')  },
    { name: "BOOTSTRAP", icon: <i class="fab fa-bootstrap"></i>, image:require('./assets/bs.png') },
    { name: "REACT JS ", icon:<i class="fab fa-react"></i> , image:require('./assets/rct.png')},
    { name: "JAVA SCRIPT", icon: <i class="fab fa-js"></i>, image:require('./assets/js.png') },
    { name: "MATERIAL UI ", icon: <i class="fab fa-guilded"></i>,image:require('./assets/mui.png') },
    { name: " NODE JS", icon: <i class="fab fa-node-js"></i> , image:require('./assets/nd.png')},
    { name: "PHP", icon:<i class="fab fa-php"></i>, image:require('./assets/php.png')  },
    { name: "REACT NATIVE", icon: <i class="fab fa-react"></i>, image:require('./assets/rct.png') },
    { name: "MONGO DB", icon: <i class="fa fa-database"></i>, image:require('./assets/mongo.png') },
    { name: "MYSQL", icon: <Storage /> , image:require('./assets/sql.png')  },
    { name: "FIREBASE", icon: <StackedBarChart />, image:require('./assets/fb.png') },

]

// <a href="filename" download>click to download</a>

export const ProjectsData = [
    {name:"01. LAUNDARY HUB", image:require('./assets/a51_edited.jpg'), description:'Basic site for the purpose of laundry related services.', url:'https://laundary-stug.netlify.app' },
    {name:"02. TASTE BUDS", image:require('./assets/taste_buds_crop.jpg'), description:' A responsive online platform for that depicts the overview of a resturant.', url:'https://taste12.netlify.app' },
    {name:"03. MEDIA SPHERE", image:require('./assets/media_sphere.jpg'), description:'A fullstack social media application with all the fundamental functionalities of a social media site.', url:'https://cyber-wolf-media-sphere.netlify.app' },
    {name:"04. CLOTHING STORE", image:require('./assets/swt_edited.jpg'), description:'A fully responsive e-commerce site for outfit purchase and routine trasactions. ', url:'https://swt-site.netlify.app' },

    {name:"05. FOOD RESTURANT", image:require('./assets/yami2_edited.jpg'), description:'A fully responsive e-commerce site for routine food purchase and trasactions. ', url:'https://fooods-cw.netlify.app' },
    // {name:"4. SPA~DAY", image:require('./assets/Spa-center_edited.jpg'), description:' A responsive online platform for that depicts the overview of a spa corpration.', url:'https://spaday.netlify.app' },
    {name:"06. DANCING PHOTOS", image:require("./assets/rot_edited.jpg"), description:'A design that displays a group of photos rotating from a 3d perpective.',  url:'https://rot3d.netlify.app' },
    // {name:"4. IN PROGESS", image:require('./assets/long5.png'), description:' A music inclined site for the purpose of music production and beat making', url:'glamour-store.netlify.app' },
    // {name:"8. AIRLINE SITE", image: require("./assets/airlineSite.jpg"), description:'A site for routine airline transactions with all fundamental fuctionalities.', url:'https://metro-airline.netlify.app' },
]

