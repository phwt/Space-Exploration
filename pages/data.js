data = [
    {
        name: "ดวงอาทิตย์",
        type: "ดาวฤกษ์",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 0,
        au: 0,
        moons: 0,
        img: "/Space-Exploration/pages/img/0-sun.svg",
        size: 100,
        link: 0,
        glow: true,
        no_orbit: true,
        custom:[
            {
                title: "ระยะเวลาโคจรรอบทางช้างเผือก",
                value: "230",
                unit: "ล้านปี (โลก)"
            },{
                title: "ระยะห่างจากจุดศูนย์กลางทางช้างเผือก",
                value: "27,200",
                unit: "ปีแสง"
            },{
                title: "จำนวนดาวเคราะห์บริวาร",
                value: "8",
                unit: "ดวง"
            }
        ]
    },
    {
        name: "ดาวพุธ",
        type: "ดาวเคราะห์หิน (Terrestrial Planet)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 87,
        au: 0.4,
        moons: 0,
        img: "/Space-Exploration/pages/img/1-mercury.svg",
        size: 10,
        link: 1
    },
    {
        name: "ดาวศุกร์",
        type: "ดาวเคราะห์หิน (Terrestrial Planet)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 224,
        au: 0.7,
        moons: 0,
        img: "/Space-Exploration/pages/img/2-venus.svg",
        size: 17,
        link: 2
    },
    {
        name: "โลก",
        type: "ดาวเคราะห์หิน (Terrestrial Planet)",
        details: "ดาวเคราะห์ลำดับที่สามจากดวงอาทิตย์ และเป็นวัตถุทางดาราศาสตร์เพียงหนึ่งเดียวที่ทราบว่ามีสิ่งมีชีวิต ร้อยละ 71 ของพื้นผิวโลกปกคลุมด้วยน้ำซึ่งส่วนใหญ่เป็นมหาสมุทร อีกร้อยละ 29 ที่เหลือเป็นแผ่นดิน",
        orbital_period: 365,
        au: 1,
        moons: 1,
        img: "/Space-Exploration/pages/img/3-earth.svg",
        size: 20,
        link: 3,
        poi: [
            {
                id: 0,
                x: 48,
                y: 59,
                title: "สถานีอวกาศนานาชาติ",
                title_en: "International Space Station",
                desc: "สถานีอวกาศนานาชาติสถานีอวกาศนานาชาติสถานีอวกาศนานาชาติ",
                image: "../img/planet/iss.jpg",
            },{
                id: 1,
                x: 56,
                y: 39,
                title: "ยาน Soyuz",
                title_en: "Soyuz",
                desc: "Soyuz ไม่ใช่ Progress",
                image: "../img/planet/iss2.jpg",
            },{
                id: 2,
                x: 45,
                y: 34,
                title: "กล้องโทรทรรศน์ฮับเบิล",
                title_en: "HST",
                desc: "กล้องกล้อง",
                image: "../img/planet/hst.jpg",
            }
        ]
    }, {
        name: "ดาวอังคาร",
        type: "ดาวเคราะห์หิน (Terrestrial Planet)",
        details: "ดาวเคราะห์ลำดับที่สี่จากดวงอาทิตย์ เป็นดาวเคราะห์เล็กที่สุดอันดับที่สองในระบบสุริยะรองจากดาวพุธ เป็นดาวเคราะห์หินที่มีบรรยากาศเบาบาง มีลักษณะพื้นผิวคล้ายคลึงกับทั้งหลุมอุกกาบาตบนดวงจันทร์ และภูเขาไฟ ทะเลทราย ตลอดจนน้ำแข็งขั้วดาวที่ปรากฏบนโลก",
        orbital_period: 686,
        au: 1.5,
        moons: 2,
        img: "/Space-Exploration/pages/img/4-mars.svg",
        size: 13,
        link: 4
    },
    {
        name: "แถบดาวเคราะห์น้อย",
        type: "แถบดาวเคราะห์น้อย",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 0,
        au: 2.7,
        moons: 0,
        img: "/Space-Exploration/pages/https://via.placeholder.com/350x350?text=Asteroid Belt",
        size: 20,
        link: 5,
        no_orbit: true,
        custom:[
            {
                title: "มวลทั้งหมด",
                value: "4%",
                unit: "ของดวงจันทร์"
            },{
                title: "ระยะห่างจากดวงอาทิตย์",
                value: "2.2-3.2",
                unit: "AU"
            },{
                title: "จำนวนดาวเคราะห์แคระ",
                value: "1",
                unit: "ดวง"
            }
        ]
    },
    {
        name: "ดาวพฤหัสบดี",
        type: "ดาวแก๊สยักษ์ (Gas Giant)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 4332,
        au: 5.2,
        moons: 79,
        img: "/Space-Exploration/pages/img/5-jupiter.svg",
        size: 30,
        link: 6
    },
    {
        name: "ดาวเสาร์",
        type: "ดาวแก๊สยักษ์ (Gas Giant)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 10759,
        au: 9.5,
        moons: 82,
        img: "/Space-Exploration/pages/img/6-saturn.svg",
        size: 40,
        link: 7
    },
    {
        name: "ดาวยูเรนัส",
        type: "ดาวแก๊สยักษ์ (Gas Giant)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 30688,
        au: 19.2,
        moons: 27,
        img: "/Space-Exploration/pages/img/7-uranus.svg",
        size: 26,
        link: 8
    },
    {
        name: "ดาวเนปจูน",
        type: "ดาวแก๊สยักษ์ (Gas Giant)",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam et nisl congue ultricies et et sapien. Proin blandit imperdiet purus vel aliquam.",
        orbital_period: 60182,
        au: 30.1,
        moons: 14,
        img: "/Space-Exploration/pages/img/8-neptune.svg",
        size: 22,
        link: 9
    }
]