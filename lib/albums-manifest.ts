// TechZone Albums Media Manifest
export interface MediaItem {
    type: 'image' | 'video';
    path: string;
    alt: string;
    category: 'classroom' | 'events' | 'promotional' | 'training';
}

export const albumsMedia: MediaItem[] = [
    // Classroom and Training Photos
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-8t1opwv7fh.jpeg',
        alt: 'TechZone Academy classroom training session',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-43sr86flq9.jpeg',
        alt: 'Students learning at TechZone Academy',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-7euq8jssar.jpeg',
        alt: 'TechZone Academy training facility',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-20esucahkm (1).jpeg',
        alt: 'TechZone Academy learning environment',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-23epw6ccxl.jpeg',
        alt: 'TechZone Academy students',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-89vofjf7li.jpeg',
        alt: 'TechZone Academy training session',
        category: 'training'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-9sf1p3nntd.jpeg',
        alt: 'TechZone Academy workshop',
        category: 'training'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-a006ojc7ni.jpeg',
        alt: 'TechZone Academy learning space',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-deb7suuhr0.jpeg',
        alt: 'TechZone Academy training center',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-hsghtfpl4l.jpeg',
        alt: 'TechZone Academy facility',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-ist07r7jie.jpeg',
        alt: 'TechZone Academy students in class',
        category: 'classroom'
    },
    {
        type: 'image',
        path: '/albums/techzone-academy-for-training-and-research-lakdi-ka-pool-khairatabad-hyderabad-computer-software-training-institutes-jp0000a384.jpeg',
        alt: 'TechZone Academy training environment',
        category: 'training'
    },
    {
        type: 'image',
        path: '/albums/-6qpb6alte0.jpeg',
        alt: 'TechZone Academy event',
        category: 'events'
    },
    {
        type: 'image',
        path: '/albums/-lt1y3sqxy0.jpeg',
        alt: 'TechZone Academy workshop',
        category: 'events'
    },
    {
        type: 'image',
        path: '/albums/-v6i27m78b2.jpeg',
        alt: 'TechZone Academy training',
        category: 'training'
    },
    {
        type: 'image',
        path: '/albums/🌟 Now Open in Tolichowki! 🌟Visit our new TechZone Academy branch for cutting-edge training and.jpg',
        alt: 'TechZone Academy Tolichowki branch opening',
        category: 'events'
    },

    // Promotional Videos
    {
        type: 'video',
        path: '/albums/TechZone Academy For Training and Research Top In-demand Courses - Data Science with Gen AIData .mp4',
        alt: 'TechZone Academy courses overview',
        category: 'promotional'
    },

    {
        type: 'video',
        path: '/albums/Want to dominate the tech field 🚀 Learn Data Analytics with Gen AI and boost your productivity .mp4',
        alt: 'Data Analytics with Gen AI course',
        category: 'promotional'
    },
    {
        type: 'video',
        path: '/albums/Want to stand out in the world of data analytics 🚀 Join Techzone Academy and learn hands-on ski.mp4',
        alt: 'Data Analytics hands-on training',
        category: 'promotional'
    },
    {
        type: 'video',
        path: '/albums/🚀 TechZone Academy is now in Tolichowki! 🌟Ready to launch your career in AI, Data Science, or .mp4',
        alt: 'TechZone Academy Tolichowki branch announcement',
        category: 'promotional'
    },

    // Training and Educational Videos

    {
        type: 'video',
        path: '/albums/Ever wondered about the difference between a Data Analyst and a Data Scientist At Techzone Acade.mp4',
        alt: 'Data Analyst vs Data Scientist explained',
        category: 'training'
    },

    {
        type: 'video',
        path: '/albums/📊 pandas, NumPy, Seaborn – the holy trinity of Data Analysis in Python!Tag a future data analys.mp4',
        alt: 'Python data analysis libraries tutorial',
        category: 'training'
    },


    // Events and Webinars

    {
        type: 'video',
        path: '/albums/Join us for a Free AI Webinar by Syed Shabaz Sir and the TechZone Academy Team!🗓️ Date- Saturda.mp4',
        alt: 'Free AI Webinar announcement',
        category: 'events'
    },
    {
        type: 'video',
        path: '/albums/📢 Join us for a Free AI Webinar by Syed Shabaz Sir and the TechZone Academy Team! 🧠✨ 🗓️ Date-.mp4',
        alt: 'AI Webinar by TechZone Academy',
        category: 'events'
    },
    {
        type: 'video',
        path: '/albums/Kickstart your AI journey! 🚀  with TechZone! Starting this Monday, 26-02-24, Dive into-- 🤖 Dat.mp4',
        alt: 'AI journey kickstart program',
        category: 'events'
    },
    {
        type: 'video',
        path: '/albums/As OpenAI forms an AI Safety Committee, Techzone Academy is proud to be at the forefront of teac.mp4',
        alt: 'AI Safety and TechZone Academy',
        category: 'events'
    },

    // Additional Videos
    {
        type: 'video',
        path: '/albums/WORK FOR @techzonehimayatnagar @techzone_academyBY @indomitable.media.mp4',
        alt: 'TechZone Academy promotional video',
        category: 'promotional'
    },
    {
        type: 'video',
        path: '/albums/get.mp4',
        alt: 'TechZone Academy content',
        category: 'promotional'
    },
    {
        type: 'video',
        path: '/albums/got.mp4',
        alt: 'TechZone Academy content',
        category: 'promotional'
    },
    {
        type: 'video',
        path: '/albums/AQMtGHtwVZYAGsZDCz-CwOU8utXC0nmJh_e0frGUYHZG0WrluaMLqyC2Y4SiY2WvIkTfgseVWKviSpPRkcwWCAIQfICImgeuULU-bLU.mp4',
        alt: 'TechZone Academy training session',
        category: 'training'
    },
    {
        type: 'video',
        path: '/albums/AQPYeZD2rhzI7ubIAyBXuacLc3X56fbBPqxo_hUOMmzIEaGwFqhlB_9qUs56LIoicYRuhJg8HF5r-D3snDtjVyWB7Gd9jXMu.mp4',
        alt: 'TechZone Academy educational content',
        category: 'training'
    },
];

// Get all media for cursor trail (images and videos)
export const getTrailImages = (): string[] => {
    return albumsMedia.map(item => item.path);
};

// Get all media items
export const getAllMedia = (): MediaItem[] => {
    return albumsMedia;
};

// Get media by category
export const getMediaByCategory = (category: MediaItem['category']): MediaItem[] => {
    return albumsMedia.filter(item => item.category === category);
};
