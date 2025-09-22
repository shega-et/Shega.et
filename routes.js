// --- 1. From Merkato (መርካቶ) ---
const ROUTES = [
{
    id: 1,
    name: { en: "Merkato - Piassa", am: "መርካቶ - ፒያዛ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "10 min",
    fare: "5 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.035, 38.75]
    ]
},
{
    id: 2,
    name: { en: "Merkato - Megenagna (via Piassa)", am: "መርካቶ - መገናኛ (በፒያዛ)" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.035, 38.75], [9.040, 38.788]
    ]
},
{
    id: 3,
    name: { en: "Merkato - Kality", am: "መርካቶ - ቃሊቲ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [8.917, 38.769]
    ]
},
{
    id: 4,
    name: { en: "Merkato - Gotera", am: "መርካቶ - ጎጠራ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "22 min",
    fare: "8 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.008, 38.763]
    ]
},
{
    id: 5,
    name: { en: "Merkato - Saris", am: "መርካቶ - ሳሪስ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Saris", am: "ሳሪስ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 }
    ],
    time: "26 min",
    fare: "9 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [8.995, 38.770]
    ]
},
{
    id: 6,
    name: { en: "Merkato - Akaki", am: "መርካቶ - አቃቂ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Akaki", am: "አቃቂ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
    ],
    time: "55 min",
    fare: "17 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [8.882, 38.788]
    ]
},
{
    id: 7,
    name: { en: "Merkato - Bambis - Kolfe", am: "መርካቶ - ባምቢስ - ኮልፌ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Kolfe", am: "ኮልፌ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
        { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
    ],
    time: "35 min",
    fare: "11 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.016, 38.749], [9.064, 38.672]
    ]
},
{
    id: 307,
    name: { en: "Merkato - Jemo", am: "መርካቶ - ጄሞ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Jemo", am: "ጄሞ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [8.963, 38.701]
    ]
},
{
    id: 308,
    name: { en: "Merkato - Ayat (via Megenagna)", am: "መርካቶ - አያት (በመገናኛ)" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Ayat", am: "አያት" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
    ],
    time: "45 min",
    fare: "15 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.040, 38.788], [9.045, 38.835]
    ]
},
{
    id: 309,
    name: { en: "Merkato - Lebu", am: "መርካቶ - ለቡ" },
    departure: { en: "Merkato", am: "መርካቶ" },
    destination: { en: "Lebu", am: "ለቡ" },
    stops: [
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 }
    ],
    time: "50 min",
    fare: "15 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.737], [9.004, 38.647]
    ]
},
// --- 2. From Piassa (ፒያዛ) - The City Center Hub ---
{
    id: 310,
    name: { en: "Piassa - Merkato", am: "ፒያዛ - መርካቶ" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "10 min",
    fare: "5 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.043, 38.737]
    ]
},
{
    id: 311,
    name: { en: "Piassa - Megenagna (via Mexico)", am: "ፒያዛ - መገናኛ (በሜክሲኮ)" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.008, 38.755], [9.040, 38.788]
    ]
},
{
    id: 312,
    name: { en: "Piassa - Bole (via Stadium)", am: "ፒያዛ - ቦሌ (በስታዲየም)" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Stadium", am: "ስታዲየም" }, lat: 9.027, lng: 38.751 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "23 min",
    fare: "8 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.027, 38.751], [9.017, 38.770]
    ]
},
{
    id: 313,
    name: { en: "Piassa - Saris", am: "ፒያዛ - ሳሪስ" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Saris", am: "ሳሪስ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 }
    ],
    time: "28 min",
    fare: "9 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [8.995, 38.770]
    ]
},
{
    id: 314,
    name: { en: "Piassa - Kality (via Merkato)", am: "ፒያዛ - ቃሊቲ (በመርካቶ)" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "50 min",
    fare: "14 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.043, 38.737], [8.917, 38.769]
    ]
},
{
    id: 315,
    name: { en: "Piassa - Kality (via Gotera)", am: "ፒያዛ - ቃሊቲ (በጎጠራ)" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "48 min",
    fare: "14 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.008, 38.763], [8.917, 38.769]
    ]
},
{
    id: 316,
    name: { en: "Piassa - Arat Kilo", am: "ፒያዛ - አራት ኪሎ" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.753 }
    ],
    time: "8 min",
    fare: "5 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.039, 38.753]
    ]
},
{
    id: 317,
    name: { en: "Piassa - Siddist Kilo", am: "ፒያዛ - ስድስት ኪሎ" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.757 }
    ],
    time: "10 min",
    fare: "5 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.045, 38.757]
    ]
},
{
    id: 318,
    name: { en: "Piassa - Shiro Meda", am: "ፒያዛ - ሺሮ መዳ" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.075, lng: 38.756 }
    ],
    time: "19 min",
    fare: "9 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.075, 38.756]
    ]
},
{
    id: 319,
    name: { en: "Piassa - Ayat (via Megenagna)", am: "ፒያዛ - አያት (በመገናኛ)" },
    departure: { en: "Piassa", am: "ፒያዛ" },
    destination: { en: "Ayat", am: "አያት" },
    stops: [
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#0984e3",
    vehicleType: "minibus",
    polyline: [
        [9.035, 38.75], [9.040, 38.788], [9.045, 38.835]
    ]
},
// --- 3. From Megenagna (መገናኛ) - The Eastern Hub ---
{
    id: 320,
    name: { en: "Megenagna - Piassa (via Mexico)", am: "መገናኛ - ፒያዛ (በሜክሲኮ)" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.008, 38.755], [9.035, 38.75]
    ]
},
{
    id: 321,
    name: { en: "Megenagna - Merkato", am: "መገናኛ - መርካቶ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "36 min",
    fare: "12 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.043, 38.737]
    ]
},
{
    id: 322,
    name: { en: "Megenagna - Bole", am: "መገናኛ - ቦሌ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "15 min",
    fare: "7 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.017, 38.770]
    ]
},
{
    id: 323,
    name: { en: "Megenagna - Saris", am: "መገናኛ - ሳሪስ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Saris", am: "ሳሪስ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 }
    ],
    time: "24 min",
    fare: "9 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [8.995, 38.770]
    ]
},
{
    id: 324,
    name: { en: "Megenagna - CMC", am: "መገናኛ - ሲ.ኤም.ሲ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
    ],
    time: "8 min",
    fare: "5 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.043, 38.814]
    ]
},
{
    id: 325,
    name: { en: "Megenagna - Ayat", am: "መገናኛ - አያት" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Ayat", am: "አያት" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
    ],
    time: "14 min",
    fare: "7 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.045, 38.835]
    ]
},
{
    id: 326,
    name: { en: "Megenagna - Summit", am: "መገናኛ - ሳሚት" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Summit", am: "ሳሚት" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Summit", am: "ሳሚት" }, lat: 9.065, lng: 38.814 }
    ],
    time: "16 min",
    fare: "8 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.065, 38.814]
    ]
},
{
    id: 327,
    name: { en: "Megenagna - Gurd Shola", am: "መገናኛ - ጉርድ ሾላ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.058, lng: 38.802 }
    ],
    time: "17 min",
    fare: "8 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.058, 38.802]
    ]
},
{
    id: 328,
    name: { en: "Megenagna - Urael", am: "መገናኛ - ኡራኤል" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Urael", am: "ኡራኤል" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Urael", am: "ኡራኤል" }, lat: 9.022, lng: 38.776 }
    ],
    time: "13 min",
    fare: "7 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [9.022, 38.776]
    ]
},
{
    id: 329,
    name: { en: "Megenagna - Bole Bulbula", am: "መገናኛ - ቦሌ ቡልቡላ" },
    departure: { en: "Megenagna", am: "መገናኛ" },
    destination: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" },
    stops: [
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" }, lat: 8.990, lng: 38.865 }
    ],
    time: "28 min",
    fare: "10 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.040, 38.788], [8.990, 38.865]
    ]
},
// --- 4. From Gotera (ጎጠራ) - The Southern Gateway Hub ---
{
    id: 330,
    name: { en: "Gotera - Merkato", am: "ጎጠራ - መርካቶ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "22 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.043, 38.737]
    ]
},
{
    id: 331,
    name: { en: "Gotera - Piassa", am: "ጎጠራ - ፒያዛ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "28 min",
    fare: "9 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.035, 38.75]
    ]
},
{
    id: 332,
    name: { en: "Gotera - Kality", am: "ጎጠራ - ቃሊቲ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "27 min",
    fare: "9 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [8.917, 38.769]
    ]
},
{
    id: 333,
    name: { en: "Gotera - Akaki", am: "ጎጠራ - አቃቂ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Akaki", am: "አቃቂ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
    ],
    time: "50 min",
    fare: "14 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [8.882, 38.788]
    ]
},
{
    id: 334,
    name: { en: "Gotera - Jemo", am: "ጎጠራ - ጄሞ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Jemo", am: "ጄሞ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
    ],
    time: "27 min",
    fare: "9 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [8.963, 38.701]
    ]
},
{
    id: 335,
    name: { en: "Gotera - Bole", am: "ጎጠራ - ቦሌ" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "12 min",
    fare: "6 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.017, 38.770]
    ]
},
{
    id: 336,
    name: { en: "Gotera - Megenagna (via Bole)", am: "ጎጠራ - መገናኛ (በቦሌ)" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.017, 38.770], [9.040, 38.788]
    ]
},
{
    id: 337,
    name: { en: "Gotera - Megenagna (direct)", am: "ጎጠራ - መገናኛ (ቀጥታ)" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "22 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.040, 38.788]
    ]
},
{
    id: 338,
    name: { en: "Gotera - Tor Hailoch", am: "ጎጠራ - ቶር ሃይሎች" },
    departure: { en: "Gotera", am: "ጎጠራ" },
    destination: { en: "Tor Hailoch", am: "ቶር ሃይሎች" },
    stops: [
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.763], [9.026, 38.697]
    ]
},
// --- 5. From Kality (ቃሊቲ) - The Southern Terminal Hub ---
{
    id: 340,
    name: { en: "Kality - Merkato", am: "ቃሊቲ - መርካቶ" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "45 min",
    fare: "14 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769], [9.043, 38.737]
    ]
},
{
    id: 341,
    name: { en: "Kality - Gotera", am: "ቃሊቲ - ጎጠራ" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "23 min",
    fare: "8 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769], [9.008, 38.763]
    ]
},
{
    id: 342,
    name: { en: "Kality - Akaki", am: "ቃሊቲ - አቃቂ" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Akaki", am: "አቃቂ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
    ],
    time: "20 min",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769], [8.882, 38.788]
    ]
},
{
    id: 343,
    name: { en: "Kality - Lebu", am: "ቃሊቲ - ለቡ" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Lebu", am: "ለቡ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769], [9.004, 38.647]
    ]
},
{
    id: 344,
    name: { en: "Kality - Kilinto", am: "ቃሊቲ - ክሊንቶ" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Kilinto", am: "ክሊንቶ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Kilinto", am: "ክሊንቶ" }, lat: 8.850, lng: 38.770 }
    ],
    time: "25 min",
    fare: "9 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769], [8.850, 38.770]
    ]
},
{
    id: 345,
    name: { en: "Kality - Kaliti (loop)", am: "ቃሊቲ - ቃሊቲ (ዞር መንገድ)" },
    departure: { en: "Kality", am: "ቃሊቲ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "Loop",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [8.917, 38.769]
    ]
},

// --- 6. From Bole (ቦሌ) - The Eastern Business Hub ---
{
    id: 350,
    name: { en: "Bole - Piassa (via Stadium)", am: "ቦሌ - ፒያዛ (በስታዲየም)" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Stadium", am: "ስታዲየም" }, lat: 9.027, lng: 38.751 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "23 min",
    fare: "8 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.027, 38.751], [9.035, 38.75]
    ]
},
{
    id: 351,
    name: { en: "Bole - Megenagna", am: "ቦሌ - መገናኛ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "15 min",
    fare: "7 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.040, 38.788]
    ]
},
{
    id: 352,
    name: { en: "Bole - Saris", am: "ቦሌ - ሳሪስ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Saris", am: "ሳሪስ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 }
    ],
    time: "19 min",
    fare: "8 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [8.995, 38.770]
    ]
},
{
    id: 353,
    name: { en: "Bole - Gotera", am: "ቦሌ - ጎጠራ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "10 min",
    fare: "6 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.008, 38.763]
    ]
},
{
    id: 354,
    name: { en: "Bole - Airport", am: "ቦሌ - አየር ማረፊያ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Airport", am: "አየር ማረፊያ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 9.036, lng: 38.763 }
    ],
    time: "9 min",
    fare: "5 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.036, 38.763]
    ]
},
{
    id: 355,
    name: { en: "Bole - Old Airport - Mekanisa", am: "ቦሌ - የድሮ አውሮፕላን ማረፊያ - መካኒሳ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Mekanisa", am: "መካኒሳ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 9.015, lng: 38.740 },
        { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.981, lng: 38.736 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.015, 38.740], [8.981, 38.736]
    ]
},
{
    id: 356,
    name: { en: "Bole - Gerji - Atlas", am: "ቦሌ - ገርጂ - አትላስ" },
    departure: { en: "Bole", am: "ቦሌ" },
    destination: { en: "Atlas", am: "አትላስ" },
    stops: [
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
        { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 }
    ],
    time: "20 min",
    fare: "8 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.017, 38.770], [9.037, 38.801], [9.024, 38.783]
    ]
},
// --- 7. From Saris (ሳሪስ) ---
{
    id: 360,
    name: { en: "Saris - Piassa", am: "ሳሪስ - ፒያዛ" },
    departure: { en: "Saris", am: "ሳሪስ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "28 min",
    fare: "9 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.995, 38.770], [9.035, 38.75]
    ]
},
{
    id: 361,
    name: { en: "Saris - Megenagna", am: "ሳሪስ - መገናኛ" },
    departure: { en: "Saris", am: "ሳሪስ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "24 min",
    fare: "9 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.995, 38.770], [9.040, 38.788]
    ]
},
{
    id: 362,
    name: { en: "Saris - Bole", am: "ሳሪስ - ቦሌ" },
    departure: { en: "Saris", am: "ሳሪስ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "19 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.995, 38.770], [9.017, 38.770]
    ]
},
{
    id: 363,
    name: { en: "Saris - CMC", am: "ሳሪስ - ሲ.ኤም.ሲ" },
    departure: { en: "Saris", am: "ሳሪስ" },
    destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
    stops: [
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 },
        { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
    ],
    time: "28 min",
    fare: "10 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.995, 38.770], [9.043, 38.814]
    ]
},
{
    id: 364,
    name: { en: "Saris - Summit", am: "ሳሪስ - ሳሚት" },
    departure: { en: "Saris", am: "ሳሪስ" },
    destination: { en: "Summit", am: "ሳሚት" },
    stops: [
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 },
        { name: { en: "Summit", am: "ሳሚት" }, lat: 9.065, lng: 38.814 }
    ],
    time: "35 min",
    fare: "12 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.995, 38.770], [9.065, 38.814]
    ]
},

// --- 8. From Ayat (አያት) / CMC (ሲ.ኤም.ሲ) / Summit (ሳሚት) ---
{
    id: 370,
    name: { en: "Ayat - Megenagna", am: "አያት - መገናኛ" },
    departure: { en: "Ayat", am: "አያት" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "14 min",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.045, 38.835], [9.040, 38.788]
    ]
},
{
    id: 371,
    name: { en: "CMC - Ayat", am: "ሲ.ኤም.ሲ - አያት" },
    departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
    destination: { en: "Ayat", am: "አያት" },
    stops: [
        { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
    ],
    time: "7 min",
    fare: "5 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.043, 38.814], [9.045, 38.835]
    ]
},
{
    id: 372,
    name: { en: "Ayat - Saris (via Megenagna)", am: "አያት - ሳሪስ (በመገናኛ)" },
    departure: { en: "Ayat", am: "አያት" },
    destination: { en: "Saris", am: "ሳሪስ" },
    stops: [
        { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 },
        { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.995, lng: 38.770 }
    ],
    time: "38 min",
    fare: "12 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.045, 38.835], [9.040, 38.788], [8.995, 38.770]
    ]
},

// --- 9. From Gulele (ጉለሌ) / Shiro Meda (ሺሮ መዳ) ---
{
    id: 380,
    name: { en: "Gulele - Piassa", am: "ጉለሌ - ፒያዛ" },
    departure: { en: "Gulele", am: "ጉለሌ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "19 min",
    fare: "9 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.068, 38.74], [9.035, 38.75]
    ]
},
{
    id: 381,
    name: { en: "Gulele - Merkato", am: "ጉለሌ - መርካቶ" },
    departure: { en: "Gulele", am: "ጉለሌ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "25 min",
    fare: "10 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.068, 38.74], [9.043, 38.737]
    ]
},
{
    id: 382,
    name: { en: "Gulele - Arat Kilo", am: "ጉለሌ - አራት ኪሎ" },
    departure: { en: "Gulele", am: "ጉለሌ" },
    destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
    stops: [
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
        { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.753 }
    ],
    time: "12 min",
    fare: "6 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.068, 38.74], [9.039, 38.753]
    ]
},
{
    id: 383,
    name: { en: "Gulele - Koye Feche", am: "ጉለሌ - ኮዬ ፍጬ" },
    departure: { en: "Gulele", am: "ጉለሌ" },
    destination: { en: "Koye Feche", am: "ኮዬ ፍጬ" },
    stops: [
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
        { name: { en: "Koye Feche", am: "ኮዬ ፍጬ" }, lat: 9.122, lng: 38.776 }
    ],
    time: "35 min",
    fare: "14 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.068, 38.74], [9.122, 38.776]
    ]
},
{
    id: 384,
    name: { en: "Gulele - Lemi Kura", am: "ጉለሌ - ለሚ ኩራ" },
    departure: { en: "Gulele", am: "ጉለሌ" },
    destination: { en: "Lemi Kura", am: "ለሚ ኩራ" },
    stops: [
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
        { name: { en: "Lemi Kura", am: "ለሚ ኩራ" }, lat: 9.157, lng: 38.804 }
    ],
    time: "40 min",
    fare: "15 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.068, 38.74], [9.157, 38.804]
    ]
},
{
    id: 385,
    name: { en: "Shiro Meda - Piassa", am: "ሺሮ መዳ - ፒያዛ" },
    departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.075, lng: 38.756 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "16 min",
    fare: "9 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.075, 38.756], [9.035, 38.75]
    ]
},
{
    id: 386,
    name: { en: "Shiro Meda - Merkato", am: "ሺሮ መዳ - መርካቶ" },
    departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.075, lng: 38.756 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "25 min",
    fare: "11 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.075, 38.756], [9.043, 38.737]
    ]
},
// --- 10. From Lebu (ለቡ) - The Western Ring Road Hub ---
{
    id: 390,
    name: { en: "Lebu - Merkato", am: "ለቡ - መርካቶ" },
    departure: { en: "Lebu", am: "ለቡ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.004, 38.647], [9.043, 38.737]
    ]
},
{
    id: 391,
    name: { en: "Lebu - Kality", am: "ለቡ - ቃሊቲ" },
    departure: { en: "Lebu", am: "ለቡ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "38 min",
    fare: "12 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.004, 38.647], [8.917, 38.769]
    ]
},
{
    id: 392,
    name: { en: "Lebu - Kolfe", am: "ለቡ - ኮልፌ" },
    departure: { en: "Lebu", am: "ለቡ" },
    destination: { en: "Kolfe", am: "ኮልፌ" },
    stops: [
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 },
        { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.004, 38.647], [9.064, 38.672]
    ]
},
{
    id: 393,
    name: { en: "Lebu - Gelan", am: "ለቡ - ገላን" },
    departure: { en: "Lebu", am: "ለቡ" },
    destination: { en: "Gelan", am: "ገላን" },
    stops: [
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 },
        { name: { en: "Gelan", am: "ገላን" }, lat: 8.860, lng: 38.731 }
    ],
    time: "35 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.004, 38.647], [8.860, 38.731]
    ]
},
{
    id: 394,
    name: { en: "Lebu - Burayu", am: "ለቡ - ቡራዩ" },
    departure: { en: "Lebu", am: "ለቡ" },
    destination: { en: "Burayu", am: "ቡራዩ" },
    stops: [
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 },
        { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.111, lng: 38.613 }
    ],
    time: "38 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.004, 38.647], [9.111, 38.613]
    ]
},

// --- 11. From Jemo (ጄሞ) ---
{
    id: 400,
    name: { en: "Jemo - Gotera", am: "ጄሞ - ጎጠራ" },
    departure: { en: "Jemo", am: "ጄሞ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "28 min",
    fare: "10 ETB",
    color: "#7ed6df",
    vehicleType: "minibus",
    polyline: [
        [8.963, 38.701], [9.008, 38.763]
    ]
},
{
    id: 401,
    name: { en: "Jemo - Merkato", am: "ጄሞ - መርካቶ" },
    departure: { en: "Jemo", am: "ጄሞ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "42 min",
    fare: "13 ETB",
    color: "#7ed6df",
    vehicleType: "minibus",
    polyline: [
        [8.963, 38.701], [9.043, 38.737]
    ]
},
{
    id: 402,
    name: { en: "Jemo - Mexico - Piassa", am: "ጄሞ - ሜክሲኮ - ፒያዛ" },
    departure: { en: "Jemo", am: "ጄሞ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "48 min",
    fare: "14 ETB",
    color: "#7ed6df",
    vehicleType: "minibus",
    polyline: [
        [8.963, 38.701], [9.008, 38.755], [9.035, 38.75]
    ]
},

// --- 12. From Goro (ጎሮ) ---
{
    id: 410,
    name: { en: "Goro - Megenagna", am: "ጎሮ - መገናኛ" },
    departure: { en: "Goro", am: "ጎሮ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Goro", am: "ጎሮ" }, lat: 8.953, lng: 38.868 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "29 min",
    fare: "11 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.953, 38.868], [9.040, 38.788]
    ]
},
{
    id: 411,
    name: { en: "Goro - TorHailoch - Gotera", am: "ጎሮ - ቶር ሃይሎች - ጎጠራ" },
    departure: { en: "Goro", am: "ጎሮ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Goro", am: "ጎሮ" }, lat: 8.953, lng: 38.868 },
        { name: { en: "TorHailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "38 min",
    fare: "13 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.953, 38.868], [9.026, 38.697], [9.008, 38.763]
    ]
},
// --- 13. From Akaki (አቃቂ) - The Industrial Zone Hub ---
{
    id: 420,
    name: { en: "Akaki - Kality", am: "አቃቂ - ቃሊቲ" },
    departure: { en: "Akaki", am: "አቃቂ" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "20 min",
    fare: "7 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [8.882, 38.788], [8.917, 38.769]
    ]
},
{
    id: 421,
    name: { en: "Akaki - Gotera (via Kality)", am: "አቃቂ - ጎጠራ (በቃሊቲ)" },
    departure: { en: "Akaki", am: "አቃቂ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "42 min",
    fare: "13 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [8.882, 38.788], [8.917, 38.769], [9.008, 38.763]
    ]
},
{
    id: 422,
    name: { en: "Akaki - Merkato (via Gotera)", am: "አቃቂ - መርካቶ (በጎጠራ)" },
    departure: { en: "Akaki", am: "አቃቂ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "55 min",
    fare: "17 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [8.882, 38.788], [9.008, 38.763], [9.043, 38.737]
    ]
},
{
    id: 423,
    name: { en: "Akaki - Kaliti", am: "አቃቂ - ቃሊቲ" },
    departure: { en: "Akaki", am: "አቃቂ" },
    destination: { en: "Kaliti", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
        { name: { en: "Kaliti", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "20 min",
    fare: "7 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [8.882, 38.788], [8.917, 38.769]
    ]
},

// --- 14. From Nifas Silk (ንፋስ ስልክ) / Lafto (ላፍቶ) ---
{
    id: 430,
    name: { en: "Nifas Silk - Gotera", am: "ንፋስ ስልክ - ጎጠራ" },
    departure: { en: "Nifas Silk", am: "ንፋስ ስልክ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Nifas Silk", am: "ንፋስ ስልክ" }, lat: 8.980, lng: 38.772 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "17 min",
    fare: "6 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.980, 38.772], [9.008, 38.763]
    ]
},
{
    id: 431,
    name: { en: "Nifas Silk - Merkato (via Gotera)", am: "ንፋስ ስልክ - መርካቶ (በጎጠራ)" },
    departure: { en: "Nifas Silk", am: "ንፋስ ስልክ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Nifas Silk", am: "ንፋስ ስልክ" }, lat: 8.980, lng: 38.772 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "30 min",
    fare: "10 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.980, 38.772], [9.008, 38.763], [9.043, 38.737]
    ]
},
{
    id: 432,
    name: { en: "Nifas Silk - Bole", am: "ንፋስ ስልክ - ቦሌ" },
    departure: { en: "Nifas Silk", am: "ንፋስ ስልክ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Nifas Silk", am: "ንፋስ ስልክ" }, lat: 8.980, lng: 38.772 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "18 min",
    fare: "9 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.980, 38.772], [9.017, 38.770]
    ]
},
{
    id: 433,
    name: { en: "Nifas Silk - Mekanisa", am: "ንፋስ ስልክ - መካኒሳ" },
    departure: { en: "Nifas Silk", am: "ንፋስ ስልክ" },
    destination: { en: "Mekanisa", am: "መካኒሳ" },
    stops: [
        { name: { en: "Nifas Silk", am: "ንፋስ ስልክ" }, lat: 8.980, lng: 38.772 },
        { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.981, lng: 38.736 }
    ],
    time: "15 min",
    fare: "7 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [8.980, 38.772], [8.981, 38.736]
    ]
},

// --- 15. From Mekanisa (መካኒሳ) / Old Airport (የድሮ አውሮፕላን ማረፊያ) ---
{
    id: 440,
    name: { en: "Mekanisa - Bole", am: "መካኒሳ - ቦሌ" },
    departure: { en: "Mekanisa", am: "መካኒሳ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.981, lng: 38.736 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "34 min",
    fare: "12 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.981, 38.736], [9.017, 38.770]
    ]
},
{
    id: 441,
    name: { en: "Mekanisa - Merkato", am: "መካኒሳ - መርካቶ" },
    departure: { en: "Mekanisa", am: "መካኒሳ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.981, lng: 38.736 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "38 min",
    fare: "13 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.981, 38.736], [9.043, 38.737]
    ]
},
{
    id: 442,
    name: { en: "Mekanisa - Nifas Silk", am: "መካኒሳ - ንፋስ ስልክ" },
    departure: { en: "Mekanisa", am: "መካኒሳ" },
    destination: { en: "Nifas Silk", am: "ንፋስ ስልክ" },
    stops: [
        { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.981, lng: 38.736 },
        { name: { en: "Nifas Silk", am: "ንፋስ ስልክ" }, lat: 8.980, lng: 38.772 }
    ],
    time: "15 min",
    fare: "7 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.981, 38.736], [8.980, 38.772]
    ]
},

// --- 16. From Mexico (ሜክሲኮ) ---
{
    id: 450,
    name: { en: "Mexico - Piassa", am: "ሜክሲኮ - ፒያዛ" },
    departure: { en: "Mexico", am: "ሜክሲኮ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "13 min",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.755], [9.035, 38.75]
    ]
},
{
    id: 451,
    name: { en: "Mexico - Megenagna", am: "ሜክሲኮ - መገናኛ" },
    departure: { en: "Mexico", am: "ሜክሲኮ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.755], [9.040, 38.788]
    ]
},
{
    id: 452,
    name: { en: "Mexico - Jemo", am: "ሜክሲኮ - ጄሞ" },
    departure: { en: "Mexico", am: "ሜክሲኮ" },
    destination: { en: "Jemo", am: "ጄሞ" },
    stops: [
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
    ],
    time: "32 min",
    fare: "11 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.755], [8.963, 38.701]
    ]
},
{
    id: 453,
    name: { en: "Mexico - Stadium - Bole", am: "ሜክሲኮ - ስታዲየም - ቦሌ" },
    departure: { en: "Mexico", am: "ሜክሲኮ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
        { name: { en: "Stadium", am: "ስታዲየም" }, lat: 9.027, lng: 38.751 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "20 min",
    fare: "8 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.008, 38.755], [9.027, 38.751], [9.017, 38.770]
    ]
},

// --- 17. From Arat Kilo (አራት ኪሎ) ---
{
    id: 460,
    name: { en: "Arat Kilo - Piassa", am: "አራት ኪሎ - ፒያዛ" },
    departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.753 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "5 min",
    fare: "4 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.039, 38.753], [9.035, 38.75]
    ]
},
{
    id: 461,
    name: { en: "Arat Kilo - Siddist Kilo", am: "አራት ኪሎ - ስድስት ኪሎ" },
    departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
    destination: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
    stops: [
        { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.753 },
        { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.757 }
    ],
    time: "6 min",
    fare: "4 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.039, 38.753], [9.045, 38.757]
    ]
},
{
    id: 462,
    name: { en: "Arat Kilo - Shiro Meda", am: "አራት ኪሎ - ሺሮ መዳ" },
    departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
    destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
    stops: [
        { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.753 },
        { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.075, lng: 38.756 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.039, 38.753], [9.075, 38.756]
    ]
},

// --- 18. From Kolfe (ኮልፌ) ---
{
    id: 470,
    name: { en: "Kolfe - Merkato (via Bambis)", am: "ኮልፌ - መርካቶ (በባምቢስ)" },
    departure: { en: "Kolfe", am: "ኮልፌ" },
    destination: { en: "Merkato", am: "መርካቶ" },
    stops: [
        { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 },
        { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
        { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.043, lng: 38.737 }
    ],
    time: "35 min",
    fare: "11 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.064, 38.672], [9.016, 38.749], [9.043, 38.737]
    ]
},
{
    id: 471,
    name: { en: "Kolfe - Lebu", am: "ኮልፌ - ለቡ" },
    departure: { en: "Kolfe", am: "ኮልፌ" },
    destination: { en: "Lebu", am: "ለቡ" },
    stops: [
        { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 },
        { name: { en: "Lebu", am: "ለቡ" }, lat: 9.004, lng: 38.647 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.064, 38.672], [9.004, 38.647]
    ]
},
{
    id: 472,
    name: { en: "Kolfe - Gulele", am: "ኮልፌ - ጉለሌ" },
    departure: { en: "Kolfe", am: "ኮልፌ" },
    destination: { en: "Gulele", am: "ጉለሌ" },
    stops: [
        { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 },
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 }
    ],
    time: "21 min",
    fare: "9 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.064, 38.672], [9.068, 38.74]
    ]
},

// --- 19. From Tor Hailoch (ቶር ሃይሎች) ---
{
    id: 480,
    name: { en: "Tor Hailoch - Gotera", am: "ቶር ሃይሎች - ጎጠራ" },
    departure: { en: "Tor Hailoch", am: "ቶር ሃይሎች" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.026, 38.697], [9.008, 38.763]
    ]
},
{
    id: 481,
    name: { en: "Tor Hailoch - Goro", am: "ቶር ሃይሎች - ጎሮ" },
    departure: { en: "Tor Hailoch", am: "ቶር ሃይሎች" },
    destination: { en: "Goro", am: "ጎሮ" },
    stops: [
        { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
        { name: { en: "Goro", am: "ጎሮ" }, lat: 8.953, lng: 38.868 }
    ],
    time: "30 min",
    fare: "12 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.026, 38.697], [8.953, 38.868]
    ]
},
{
    id: 482,
    name: { en: "Tor Hailoch - Kality (via Gotera)", am: "ቶር ሃይሎች - ቃሊቲ (በጎጠራ)" },
    departure: { en: "Tor Hailoch", am: "ቶር ሃይሎች" },
    destination: { en: "Kality", am: "ቃሊቲ" },
    stops: [
        { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
        { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
    ],
    time: "31 min",
    fare: "11 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.026, 38.697], [9.008, 38.763], [8.917, 38.769]
    ]
},

// --- 20. From Bole Bulbula (ቦሌ ቡልቡላ) ---
{
    id: 490,
    name: { en: "Bole Bulbula - Megenagna", am: "ቦሌ ቡልቡላ - መገናኛ" },
    departure: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" }, lat: 8.990, lng: 38.865 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "28 min",
    fare: "10 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.990, 38.865], [9.040, 38.788]
    ]
},
{
    id: 491,
    name: { en: "Bole Bulbula - Goro (via Ring Road)", am: "ቦሌ ቡልቡላ - ጎሮ (በRing Road)" },
    departure: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" },
    destination: { en: "Goro", am: "ጎሮ" },
    stops: [
        { name: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" }, lat: 8.990, lng: 38.865 },
        { name: { en: "Goro", am: "ጎሮ" }, lat: 8.953, lng: 38.868 }
    ],
    time: "18 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.990, 38.865], [8.953, 38.868]
    ]
},

// --- 21. From Gerji (ገርጂ) ---
{
    id: 500,
    name: { en: "Gerji - Bole", am: "ገርጂ - ቦሌ" },
    departure: { en: "Gerji", am: "ገርጂ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "10 min",
    fare: "6 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.037, 38.801], [9.017, 38.770]
    ]
},
{
    id: 501,
    name: { en: "Gerji - Megenagna", am: "ገርጂ - መገናኛ" },
    departure: { en: "Gerji", am: "ገርጂ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "8 min",
    fare: "5 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.037, 38.801], [9.040, 38.788]
    ]
},
{
    id: 502,
    name: { en: "Gerji - Atlas", am: "ገርጂ - አትላስ" },
    departure: { en: "Gerji", am: "ገርጂ" },
    destination: { en: "Atlas", am: "አትላስ" },
    stops: [
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
        { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 }
    ],
    time: "7 min",
    fare: "5 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.037, 38.801], [9.024, 38.783]
    ]
},
// --- 22. From Kazanchis (ካዛንቺስ) ---
{
    id: 510,
    name: { en: "Kazanchis - Piassa", am: "ካዛንቺስ - ፒያዛ" },
    departure: { en: "Kazanchis", am: "ካዛንቺስ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Kazanchis", am: "ካዛንቺስ" }, lat: 9.024, lng: 38.752 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "7 min",
    fare: "5 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.752], [9.035, 38.75]
    ]
},
{
    id: 511,
    name: { en: "Kazanchis - Bole", am: "ካዛንቺስ - ቦሌ" },
    departure: { en: "Kazanchis", am: "ካዛንቺስ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Kazanchis", am: "ካዛንቺስ" }, lat: 9.024, lng: 38.752 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "15 min",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.752], [9.017, 38.770]
    ]
},
{
    id: 512,
    name: { en: "Kazanchis - Megenagna (via Ethiopia Hotel)", am: "ካዛንቺስ - መገናኛ (በኢትዮጵያ ሆቴል)" },
    departure: { en: "Kazanchis", am: "ካዛንቺስ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Kazanchis", am: "ካዛንቺስ" }, lat: 9.024, lng: 38.752 },
        { name: { en: "Ethiopia Hotel", am: "ኢትዮጵያ ሆቴል" }, lat: 9.027, lng: 38.761 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "20 min",
    fare: "9 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.752], [9.027, 38.761], [9.040, 38.788]
    ]
},

// --- 23. From Atlas (አትላስ) ---
{
    id: 520,
    name: { en: "Atlas - Bole", am: "አትላስ - ቦሌ" },
    departure: { en: "Atlas", am: "አትላስ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "8 min",
    fare: "5 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.783], [9.017, 38.770]
    ]
},
{
    id: 521,
    name: { en: "Atlas - Gerji", am: "አትላስ - ገርጂ" },
    departure: { en: "Atlas", am: "አትላስ" },
    destination: { en: "Gerji", am: "ገርጂ" },
    stops: [
        { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 }
    ],
    time: "11 min",
    fare: "6 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.783], [9.037, 38.801]
    ]
},
{
    id: 522,
    name: { en: "Atlas - Megenagna (via Gerji)", am: "አትላስ - መገናኛ (በገርጂ)" },
    departure: { en: "Atlas", am: "አትላስ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
        { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "19 min",
    fare: "8 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.024, 38.783], [9.037, 38.801], [9.040, 38.788]
    ]
},

// --- 24. From Senga Tera / African Union (AU) ---
{
    id: 530,
    name: { en: "Senga Tera/AU - Bole", am: "ሰንጋ ጠራ/ኤ.ዩ - ቦሌ" },
    departure: { en: "Senga Tera/AU", am: "ሰንጋ ጠራ/ኤ.ዩ" },
    destination: { en: "Bole", am: "ቦሌ" },
    stops: [
        { name: { en: "Senga Tera/AU", am: "ሰንጋ ጠራ/ኤ.ዩ" }, lat: 9.010, lng: 38.758 },
        { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
    ],
    time: "13 min",
    fare: "7 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.010, 38.758], [9.017, 38.770]
    ]
},
{
    id: 531,
    name: { en: "Senga Tera/AU - Kazanchis - Piassa", am: "ሰንጋ ጠራ/ኤ.ዩ - ካዛንቺስ - ፒያዛ" },
    departure: { en: "Senga Tera/AU", am: "ሰንጋ ጠራ/ኤ.ዩ" },
    destination: { en: "Piassa", am: "ፒያዛ" },
    stops: [
        { name: { en: "Senga Tera/AU", am: "ሰንጋ ጠራ/ኤ.ዩ" }, lat: 9.010, lng: 38.758 },
        { name: { en: "Kazanchis", am: "ካዛንቺስ" }, lat: 9.024, lng: 38.752 },
        { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
    ],
    time: "15 min",
    fare: "8 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [9.010, 38.758], [9.024, 38.752], [9.035, 38.75]
    ]
},

// --- 25. From Urael (ኡራኤል) ---
{
    id: 540,
    name: { en: "Urael - Megenagna", am: "ኡራኤል - መገናኛ" },
    departure: { en: "Urael", am: "ኡራኤል" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Urael", am: "ኡራኤል" }, lat: 9.022, lng: 38.776 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "13 min",
    fare: "7 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.022, 38.776], [9.040, 38.788]
    ]
},
{
    id: 541,
    name: { en: "Urael - CMC", am: "ኡራኤል - ሲ.ኤም.ሲ" },
    departure: { en: "Urael", am: "ኡራኤል" },
    destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
    stops: [
        { name: { en: "Urael", am: "ኡራኤል" }, lat: 9.022, lng: 38.776 },
        { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
    ],
    time: "15 min",
    fare: "8 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.022, 38.776], [9.043, 38.814]
    ]
},

// --- 26. From Gurd Shola (ጉርድ ሾላ) ---
{
    id: 550,
    name: { en: "Gurd Shola - CMC", am: "ጉርድ ሾላ - ሲ.ኤም.ሲ" },
    departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
    destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
    stops: [
        { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.058, lng: 38.802 },
        { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
    ],
    time: "8 min",
    fare: "5 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.058, 38.802], [9.043, 38.814]
    ]
},
{
    id: 551,
    name: { en: "Gurd Shola - Megenagna", am: "ጉርድ ሾላ - መገናኛ" },
    departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.058, lng: 38.802 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "10 min",
    fare: "6 ETB",
    color: "#636e72",
    vehicleType: "minibus",
    polyline: [
        [9.058, 38.802], [9.040, 38.788]
    ]
},

// --- 27. From Kotebe (ኮተበ) ---
{
    id: 560,
    name: { en: "Kotebe - Jemo", am: "ኮተበ - ጄሞ" },
    departure: { en: "Kotebe", am: "ኮተበ" },
    destination: { en: "Jemo", am: "ጄሞ" },
    stops: [
        { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.071, lng: 38.816 },
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
    ],
    time: "38 min",
    fare: "14 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.071, 38.816], [8.963, 38.701]
    ]
},
{
    id: 561,
    name: { en: "Kotebe - Gotera (via Jemo)", am: "ኮተበ - ጎጠራ (በጄሞ)" },
    departure: { en: "Kotebe", am: "ኮተበ" },
    destination: { en: "Gotera", am: "ጎጠራ" },
    stops: [
        { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.071, lng: 38.816 },
        { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
        { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
    ],
    time: "55 min",
    fare: "16 ETB",
    color: "#00b894",
    vehicleType: "minibus",
    polyline: [
        [9.071, 38.816], [8.963, 38.701], [9.008, 38.763]
    ]
},

// --- 28. From Bole Arabsa (ቦሌ አራብሳ) ---
{
    id: 570,
    name: { en: "Bole Arabsa - Bole Bulbula - Megenagna", am: "ቦሌ አራብሳ - ቦሌ ቡልቡላ - መገናኛ" },
    departure: { en: "Bole Arabsa", am: "ቦሌ አራብሳ" },
    destination: { en: "Megenagna", am: "መገናኛ" },
    stops: [
        { name: { en: "Bole Arabsa", am: "ቦሌ አራብሳ" }, lat: 8.963, lng: 38.878 },
        { name: { en: "Bole Bulbula", am: "ቦሌ ቡልቡላ" }, lat: 8.990, lng: 38.865 },
        { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.040, lng: 38.788 }
    ],
    time: "40 min",
    fare: "13 ETB",
    color: "#e17055",
    vehicleType: "minibus",
    polyline: [
        [8.963, 38.878], [8.990, 38.865], [9.040, 38.788]
    ]
},

// --- 29. From Lemi Kura (ለሚ ኩራ) ---
{
    id: 580,
    name: { en: "Lemi Kura - Gulele", am: "ለሚ ኩራ - ጉለሌ" },
    departure: { en: "Lemi Kura", am: "ለሚ ኩራ" },
    destination: { en: "Gulele", am: "ጉለሌ" },
    stops: [
        { name: { en: "Lemi Kura", am: "ለሚ ኩራ" }, lat: 9.157, lng: 38.804 },
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 }
    ],
    time: "40 min",
    fare: "15 ETB",
    color: "#7ed6df",
    vehicleType: "minibus",
    polyline: [
        [9.157, 38.804], [9.068, 38.74]
    ]
},
{
    id: 581,
    name: { en: "Lemi Kura - Shiro Meda", am: "ለሚ ኩራ - ሺሮ መዳ" },
    departure: { en: "Lemi Kura", am: "ለሚ ኩራ" },
    destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
    stops: [
        { name: { en: "Lemi Kura", am: "ለሚ ኩራ" }, lat: 9.157, lng: 38.804 },
        { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.075, lng: 38.756 }
    ],
    time: "45 min",
    fare: "16 ETB",
    color: "#7ed6df",
    vehicleType: "minibus",
    polyline: [
        [9.157, 38.804], [9.075, 38.756]
    ]
},

// --- 30. From Koye Feche (ኮዬ ፍጬ) ---
{
    id: 590,
    name: { en: "Koye Feche - Gulele", am: "ኮዬ ፍጬ - ጉለሌ" },
    departure: { en: "Koye Feche", am: "ኮዬ ፍጬ" },
    destination: { en: "Gulele", am: "ጉለሌ" },
    stops: [
        { name: { en: "Koye Feche", am: "ኮዬ ፍጬ" }, lat: 9.122, lng: 38.776 },
        { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 }
    ],
    time: "35 min",
    fare: "14 ETB",
    color: "#fdcb6e",
    vehicleType: "minibus",
    polyline: [
        [9.122, 38.776], [9.068, 38.74]
    ]
}

];