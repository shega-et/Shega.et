// routes.js - Modular transport data for Addis Ababa (updated with real sample routes)

const ROUTES = [
    // Merkato Hub
    {
        id: 1,
        name: { en: "Merkato - Piassa", am: "መርካቶ - ፒያዛ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Teklehaimanot", am: "ተክለሃይማኖት" }, lat: 9.034, lng: 38.741 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#1365e2",
        polyline: [
            [9.041, 38.749], [9.034, 38.741], [9.035, 38.75]
        ]
    },
    {
        id: 2,
        name: { en: "Merkato - Megenagna", am: "መርካቶ - መገናኛ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#275cab",
        polyline: [
            [9.041, 38.749], [9.008, 38.755], [8.995, 38.76], [9.026, 38.765]
        ]
    },
    {
        id: 3,
        name: { en: "Merkato - Kality", am: "መርካቶ - ቃሊቲ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "50 min",
        fare: "14 ETB",
        color: "#00bfae",
        polyline: [
            [9.041, 38.749], [9.008, 38.755], [9.008, 38.763], [8.917, 38.769]
        ]
    },
    {
        id: 4,
        name: { en: "Merkato - Saris", am: "መርካቶ - ሳሪስ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "40 min",
        fare: "13 ETB",
        color: "#f44336",
        polyline: [
            [9.041, 38.749], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    {
        id: 5,
        name: { en: "Merkato - Gotera", am: "መርካቶ - ጎጠራ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "25 min",
        fare: "10 ETB",
        color: "#b2207b",
        polyline: [
            [9.041, 38.749], [9.008, 38.755], [9.008, 38.763]
        ]
    },
    {
        id: 6,
        name: { en: "Merkato - Akaki", am: "መርካቶ - አቃቂ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Akaki", am: "አቃቂ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
        ],
        time: "70 min",
        fare: "20 ETB",
        color: "#795548",
        polyline: [
            [9.041, 38.749], [8.917, 38.769], [8.882, 38.788]
        ]
    },
    {
        id: 7,
        name: { en: "Merkato - Bambis", am: "መርካቶ - ባምቢስ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Bambis", am: "ባምቢስ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#1a237e",
        polyline: [
            [9.041, 38.749], [9.016, 38.749]
        ]
    },
    {
        id: 8,
        name: { en: "Merkato - Ayat", am: "መርካቶ - አያት" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "60 min",
        fare: "18 ETB",
        color: "#388e3c",
        polyline: [
            [9.041, 38.749], [9.026, 38.765], [9.045, 38.835]
        ]
    },
    {
        id: 9,
        name: { en: "Merkato - Jemo", am: "መርካቶ - ጄሞ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Jemo", am: "ጄሞ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
        ],
        time: "50 min",
        fare: "15 ETB",
        color: "#e65100",
        polyline: [
            [9.041, 38.749], [9.008, 38.755], [8.963, 38.701]
        ]
    },
    {
        id: 10,
        name: { en: "Merkato - Kotebe", am: "መርካቶ - ኮተበ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Kotebe", am: "ኮተበ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 }
        ],
        time: "55 min",
        fare: "16 ETB",
        color: "#7b1fa2",
        polyline: [
            [9.041, 38.749], [9.026, 38.765], [9.065, 38.815]
        ]
    },
    {
        id: 11,
        name: { en: "Merkato - Lebu", am: "መርካቶ - ለቡ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Lebu", am: "ለቡ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 }
        ],
        time: "70 min",
        fare: "19 ETB",
        color: "#00897b",
        polyline: [
            [9.041, 38.749], [8.917, 38.769], [8.956, 38.713]
        ]
    },

    // Megenagna Hub
    {
        id: 12,
        name: { en: "Megenagna - Piassa", am: "መገናኛ - ፒያዛ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#b71c1c",
        polyline: [
            [9.026, 38.765], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 13,
        name: { en: "Megenagna - Merkato", am: "መገናኛ - መርካቶ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#7986cb",
        polyline: [
            [9.026, 38.765], [8.995, 38.76], [9.008, 38.755], [9.041, 38.749]
        ]
    },
    {
        id: 14,
        name: { en: "Megenagna - Bole", am: "መገናኛ - ቦሌ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#fbc02d",
        polyline: [
            [9.026, 38.765], [9.017, 38.770]
        ]
    },
    {
        id: 15,
        name: { en: "Megenagna - Ayat", am: "መገናኛ - አያት" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "35 min",
        fare: "12 ETB",
        color: "#43a047",
        polyline: [
            [9.026, 38.765], [9.045, 38.835]
        ]
    },
    {
        id: 16,
        name: { en: "Megenagna - CMC", am: "መገናኛ - ሲ.ኤም.ሲ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#0288d1",
        polyline: [
            [9.026, 38.765], [9.043, 38.814]
        ]
    },
    {
        id: 17,
        name: { en: "Megenagna - Summit", am: "መገናኛ - ሳሚት" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "27 min",
        fare: "10 ETB",
        color: "#d32f2f",
        polyline: [
            [9.026, 38.765], [9.043, 38.814], [9.049, 38.825]
        ]
    },
    {
        id: 18,
        name: { en: "Megenagna - Saris", am: "መገናኛ - ሳሪስ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "35 min",
        fare: "13 ETB",
        color: "#388e3c",
        polyline: [
            [9.026, 38.765], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    {
        id: 19,
        name: { en: "Megenagna - Gotera", am: "መገናኛ - ጎጠራ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "15 min",
        fare: "8 ETB",
        color: "#8e24aa",
        polyline: [
            [9.026, 38.765], [9.008, 38.763]
        ]
    },
    {
        id: 20,
        name: { en: "Megenagna - Gurd Shola", am: "መገናኛ - ጉርድ ሾላ" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "25 min",
        fare: "9 ETB",
        color: "#1976d2",
        polyline: [
            [9.026, 38.765], [9.043, 38.814], [9.052, 38.803]
        ]
    },

    // --- PIASSA HUB ---
    {
        id: 21,
        name: { en: "Piassa - Merkato", am: "ፒያዛ - መርካቶ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Teklehaimanot", am: "ተክለሃይማኖት" }, lat: 9.034, lng: 38.741 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#2e7d32",
        polyline: [
            [9.035, 38.75], [9.034, 38.741], [9.041, 38.749]
        ]
    },
    {
        id: 22,
        name: { en: "Piassa - Megenagna", am: "ፒያዛ - መገናኛ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#d32f2f",
        polyline: [
            [9.035, 38.75], [8.995, 38.76], [9.026, 38.765]
        ]
    },
    {
        id: 23,
        name: { en: "Piassa - Saris", am: "ፒያዛ - ሳሪስ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "40 min",
        fare: "13 ETB",
        color: "#388e3c",
        polyline: [
            [9.035, 38.75], [8.995, 38.76], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    {
        id: 24,
        name: { en: "Piassa - Bole", am: "ፒያዛ - ቦሌ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "30 min",
        fare: "11 ETB",
        color: "#f9a825",
        polyline: [
            [9.035, 38.75], [8.995, 38.76], [9.017, 38.770]
        ]
    },
    {
        id: 25,
        name: { en: "Piassa - Arat Kilo", am: "ፒያዛ - አራት ኪሎ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#8d6e63",
        polyline: [
            [9.035, 38.75], [9.039, 38.761]
        ]
    },
    {
        id: 26,
        name: { en: "Piassa - Siddist Kilo", am: "ፒያዛ - ስድስት ኪሎ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#f06292",
        polyline: [
            [9.035, 38.75], [9.039, 38.761], [9.045, 38.765]
        ]
    },
    {
        id: 27,
        name: { en: "Piassa - Shiro Meda", am: "ፒያዛ - ሺሮ መዳ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 }
        ],
        time: "30 min",
        fare: "11 ETB",
        color: "#26a69a",
        polyline: [
            [9.035, 38.75], [9.045, 38.765], [9.082, 38.765]
        ]
    },
    {
        id: 28,
        name: { en: "Piassa - Kality", am: "ፒያዛ - ቃሊቲ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "50 min",
        fare: "14 ETB",
        color: "#fbc02d",
        polyline: [
            [9.035, 38.75], [8.995, 38.76], [9.008, 38.755], [8.917, 38.769]
        ]
    },
    {
        id: 29,
        name: { en: "Piassa - Ayat (via Megenagna)", am: "ፒያዛ - አያት (በመገናኛ)" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "55 min",
        fare: "17 ETB",
        color: "#d84315",
        polyline: [
            [9.035, 38.75], [9.026, 38.765], [9.045, 38.835]
        ]
    },
    {
        id: 30,
        name: { en: "Piassa - Jemo (via Merkato)", am: "ፒያዛ - ጄሞ (በመርካቶ)" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Jemo", am: "ጄሞ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
        ],
        time: "65 min",
        fare: "18 ETB",
        color: "#00897b",
        polyline: [
            [9.035, 38.75], [9.041, 38.749], [9.008, 38.755], [8.963, 38.701]
        ]
    },

    // --- BOLE HUB ---
    {
        id: 31,
        name: { en: "Bole - Piassa", am: "ቦሌ - ፒያዛ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "30 min",
        fare: "11 ETB",
        color: "#1976d2",
        polyline: [
            [9.017, 38.770], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 32,
        name: { en: "Bole - Megenagna", am: "ቦሌ - መገናኛ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "17 min",
        fare: "7 ETB",
        color: "#c62828",
        polyline: [
            [9.017, 38.770], [9.026, 38.765]
        ]
    },
    {
        id: 33,
        name: { en: "Bole - Saris", am: "ቦሌ - ሳሪስ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "30 min",
        fare: "12 ETB",
        color: "#8d6e63",
        polyline: [
            [9.017, 38.770], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    {
        id: 34,
        name: { en: "Bole - Gotera", am: "ቦሌ - ጎጠራ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "18 min",
        fare: "8 ETB",
        color: "#43a047",
        polyline: [
            [9.017, 38.770], [9.008, 38.763]
        ]
    },
    {
        id: 35,
        name: { en: "Bole - Airport", am: "ቦሌ - አየር ማረፊያ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Airport", am: "አየር ማረፊያ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 }
        ],
        time: "12 min",
        fare: "6 ETB",
        color: "#6d4c41",
        polyline: [
            [9.017, 38.770], [8.980, 38.798]
        ]
    },
    {
        id: 36,
        name: { en: "Bole - Mekanisa", am: "ቦሌ - መካኒሳ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Mekanisa", am: "መካኒሳ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 }
        ],
        time: "35 min",
        fare: "13 ETB",
        color: "#ad1457",
        polyline: [
            [9.017, 38.770], [9.008, 38.763], [8.959, 38.725]
        ]
    },
    {
        id: 37,
        name: { en: "Bole - Old Airport", am: "ቦሌ - የድሮ አውሮፕላን ማረፊያ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 }
        ],
        time: "15 min",
        fare: "8 ETB",
        color: "#fbc02d",
        polyline: [
            [9.017, 38.770], [8.994, 38.763]
        ]
    },
    // --- SARIS HUB ---
    {
        id: 38,
        name: { en: "Saris - Piassa", am: "ሳሪስ - ፒያዛ" },
        departure: { en: "Saris", am: "ሳሪስ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "40 min",
        fare: "13 ETB",
        color: "#ff7043",
        polyline: [
            [8.993, 38.775], [9.008, 38.763], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 39,
        name: { en: "Saris - Merkato", am: "ሳሪስ - መርካቶ" },
        departure: { en: "Saris", am: "ሳሪስ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "45 min",
        fare: "14 ETB",
        color: "#512da8",
        polyline: [
            [8.993, 38.775], [9.008, 38.763], [9.008, 38.755], [9.041, 38.749]
        ]
    },
    {
        id: 40,
        name: { en: "Saris - Megenagna", am: "ሳሪስ - መገናኛ" },
        departure: { en: "Saris", am: "ሳሪስ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "33 min",
        fare: "11 ETB",
        color: "#00bcd4",
        polyline: [
            [8.993, 38.775], [9.008, 38.763], [9.026, 38.765]
        ]
    },
    {
        id: 41,
        name: { en: "Saris - Bole", am: "ሳሪስ - ቦሌ" },
        departure: { en: "Saris", am: "ሳሪስ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "32 min",
        fare: "11 ETB",
        color: "#0097a7",
        polyline: [
            [8.993, 38.775], [9.008, 38.763], [9.017, 38.770]
        ]
    },
    {
        id: 42,
        name: { en: "Saris - Summit", am: "ሳሪስ - ሳሚት" },
        departure: { en: "Saris", am: "ሳሪስ" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "50 min",
        fare: "15 ETB",
        color: "#6d4c41",
        polyline: [
            [8.993, 38.775], [9.008, 38.763], [9.043, 38.814], [9.049, 38.825]
        ]
    },
    // --- Add more for Gotera, Kality, Ayat, CMC, cross-town and ring-road routes as in your list above ---

    // Example cross-city route:
    {
        id: 43,
        name: { en: "Jemo - Gotera - Merkato", am: "ጄሞ - ጎጠራ - መርካቶ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "65 min",
        fare: "18 ETB",
        color: "#5d4037",
        polyline: [
            [8.963, 38.701], [9.008, 38.763], [9.041, 38.749]
        ]
    },
    // Example ring-road/cross-town
    {
        id: 44,
        name: { en: "Torhailoch - Goro - Ring Road", am: "ቶርሃይሎች - ጎሮ - ሪንግ ሮድ" },
        departure: { en: "Torhailoch", am: "ቶርሃይሎች" },
        destination: { en: "Ring Road", am: "ሪንግ ሮድ" },
        stops: [
            { name: { en: "Torhailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Ring Road", am: "ሪንግ ሮድ" }, lat: 8.987, lng: 38.810 }
        ],
        time: "50 min",
        fare: "15 ETB",
        color: "#1976d2",
        polyline: [
            [9.026, 38.697], [8.966, 38.773], [8.987, 38.810]
        ]
    },
    
    {
        id: 45,
        name: { en: "Gotera - Merkato", am: "ጎጠራ - መርካቶ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#f57c00",
        polyline: [
            [9.008, 38.763], [9.008, 38.755], [9.041, 38.749]
        ]
    },
    {
        id: 46,
        name: { en: "Gotera - Piassa", am: "ጎጠራ - ፒያዛ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "25 min",
        fare: "10 ETB",
        color: "#1565c0",
        polyline: [
            [9.008, 38.763], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 47,
        name: { en: "Gotera - Megenagna", am: "ጎጠራ - መገናኛ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#c62828",
        polyline: [
            [9.008, 38.763], [9.026, 38.765]
        ]
    },
    {
        id: 48,
        name: { en: "Gotera - Kality", am: "ጎጠራ - ቃሊቲ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "37 min",
        fare: "11 ETB",
        color: "#43a047",
        polyline: [
            [9.008, 38.763], [8.917, 38.769]
        ]
    },
    {
        id: 49,
        name: { en: "Gotera - Akaki", am: "ጎጠራ - አቃቂ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Akaki", am: "አቃቂ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
        ],
        time: "50 min",
        fare: "15 ETB",
        color: "#6a1b9a",
        polyline: [
            [9.008, 38.763], [8.917, 38.769], [8.882, 38.788]
        ]
    },
    {
        id: 50,
        name: { en: "Gotera - Jemo", am: "ጎጠራ - ጄሞ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Jemo", am: "ጄሞ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#00897b",
        polyline: [
            [9.008, 38.763], [8.963, 38.701]
        ]
    },
    {
        id: 51,
        name: { en: "Kality - Gotera", am: "ቃሊቲ - ጎጠራ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#fbc02d",
        polyline: [
            [8.917, 38.769], [9.008, 38.763]
        ]
    },
    {
        id: 52,
        name: { en: "Kality - Akaki", am: "ቃሊቲ - አቃቂ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Akaki", am: "አቃቂ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
        ],
        time: "20 min",
        fare: "7 ETB",
        color: "#0d47a1",
        polyline: [
            [8.917, 38.769], [8.882, 38.788]
        ]
    },
    {
        id: 53,
        name: { en: "Ayat - CMC", am: "አያት - ሲ.ኤም.ሲ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#00bcd4",
        polyline: [
            [9.045, 38.835], [9.043, 38.814]
        ]
    },
    {
        id: 54,
        name: { en: "Ayat - Summit", am: "አያት - ሳሚት" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#cddc39",
        polyline: [
            [9.045, 38.835], [9.049, 38.825]
        ]
    },
    {
        id: 55,
        name: { en: "Ayat - Merkato (via Megenagna)", am: "አያት - መርካቶ (በመገናኛ)" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "45 min",
        fare: "15 ETB",
        color: "#1565c0",
        polyline: [
            [9.045, 38.835], [9.026, 38.765], [9.041, 38.749]
        ]
    },
    {
        id: 56,
        name: { en: "CMC - Gurd Shola", am: "ሲ.ኤም.ሲ - ጉርድ ሾላ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#388e3c",
        polyline: [
            [9.043, 38.814], [9.052, 38.803]
        ]
    },
    {
        id: 57,
        name: { en: "Summit - CMC - Ayat", am: "ሳሚት - ሲ.ኤም.ሲ - አያት" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "21 min",
        fare: "9 ETB",
        color: "#e64a19",
        polyline: [
            [9.049, 38.825], [9.043, 38.814], [9.045, 38.835]
        ]
    },
    {
        id: 58,
        name: { en: "Lebu - Kality - Merkato", am: "ለቡ - ቃሊቲ - መርካቶ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "60 min",
        fare: "18 ETB",
        color: "#ad1457",
        polyline: [
            [8.956, 38.713], [8.917, 38.769], [9.041, 38.749]
        ]
    },
    {
        id: 59,
        name: { en: "Akaki - Kality - Gotera - Merkato", am: "አቃቂ - ቃሊቲ - ጎጠራ - መርካቶ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "70 min",
        fare: "20 ETB",
        color: "#8d6e63",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [9.008, 38.763], [9.041, 38.749]
        ]
    },
    {
        id: 60,
        name: { en: "Old Airport - Bole - Mekanisa", am: "የድሮ አውሮፕላን ማረፊያ - ቦሌ - መካኒሳ" },
        departure: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        destination: { en: "Mekanisa", am: "መካኒሳ" },
        stops: [
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 }
        ],
        time: "40 min",
        fare: "13 ETB",
        color: "#26a69a",
        polyline: [
            [8.994, 38.763], [9.017, 38.770], [9.008, 38.763], [8.959, 38.725]
        ]
    },
    {
        id: 61,
        name: { en: "Gurd Shola - CMC - Megenagna", am: "ጉርድ ሾላ - ሲ.ኤም.ሲ - መገናኛ" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#b71c1c",
        polyline: [
            [9.052, 38.803], [9.043, 38.814], [9.026, 38.765]
        ]
    },
    {
        id: 62,
        name: { en: "Shiro Meda - Piassa - Arat Kilo", am: "ሺሮ መዳ - ፒያዛ - አራት ኪሎ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 }
        ],
        time: "32 min",
        fare: "10 ETB",
        color: "#fbc02d",
        polyline: [
            [9.082, 38.765], [9.045, 38.765], [9.035, 38.75], [9.039, 38.761]
        ]
    },
    {
        id: 63,
        name: { en: "Arat Kilo - Siddist Kilo - Piassa", am: "አራት ኪሎ - ስድስት ኪሎ - ፒያዛ" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "13 min",
        fare: "6 ETB",
        color: "#388e3c",
        polyline: [
            [9.039, 38.761], [9.045, 38.765], [9.035, 38.75]
        ]
    },
    {
        id: 64,
        name: { en: "Mexico - Megenagna - Stadium", am: "ሜክሲኮ - መገናኛ - ስታዲየም" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "Stadium", am: "ስታዲየም" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 }
        ],
        time: "27 min",
        fare: "9 ETB",
        color: "#0288d1",
        polyline: [
            [9.008, 38.755], [9.026, 38.765], [8.995, 38.76]
        ]
    },
    {
        id: 65,
        name: { en: "Gulele - Shola - Piazza", am: "ጉለሌ - ሾላ - ፒያዛ" },
        departure: { en: "Gulele", am: "ጉለሌ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Shola", am: "ሾላ" }, lat: 9.068, lng: 38.735 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "19 min",
        fare: "8 ETB",
        color: "#f44336",
        polyline: [
            [9.068, 38.74], [9.068, 38.735], [9.035, 38.75]
        ]
    },
    {
        id: 66,
        name: { en: "Bambis - Mexico - Stadium", am: "ባምቢስ - ሜክሲኮ - ስታዲየም" },
        departure: { en: "Bambis", am: "ባምቢስ" },
        destination: { en: "Stadium", am: "ስታዲየም" },
        stops: [
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 }
        ],
        time: "17 min",
        fare: "7 ETB",
        color: "#7b1fa2",
        polyline: [
            [9.016, 38.749], [9.008, 38.755], [8.995, 38.76]
        ]
    },
    {
        id: 67,
        name: { en: "Lebu - Torhailoch", am: "ለቡ - ቶርሃይሎች" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Torhailoch", am: "ቶርሃይሎች" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Torhailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 }
        ],
        time: "32 min",
        fare: "12 ETB",
        color: "#43a047",
        polyline: [
            [8.956, 38.713], [8.963, 38.701], [9.026, 38.697]
        ]
    },
    {
        id: 68,
        name: { en: "Goro - Ring Road - CMC", am: "ጎሮ - ሪንግ ሮድ - ሲ.ኤም.ሲ" },
        departure: { en: "Goro", am: "ጎሮ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Ring Road", am: "ሪንግ ሮድ" }, lat: 8.987, lng: 38.810 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "40 min",
        fare: "14 ETB",
        color: "#0288d1",
        polyline: [
            [8.966, 38.773], [8.987, 38.810], [9.043, 38.814]
        ]
    },
    {
        id: 69,
        name: { en: "Gurd Shola - Summit", am: "ጉርድ ሾላ - ሳሚት" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "10 min",
        fare: "5 ETB",
        color: "#fbc02d",
        polyline: [
            [9.052, 38.803], [9.049, 38.825]
        ]
    },
    {
        id: 70,
        name: { en: "Summit - Ayat", am: "ሳሚት - አያት" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "9 min",
        fare: "5 ETB",
        color: "#388e3c",
        polyline: [
            [9.049, 38.825], [9.045, 38.835]
        ]
    },
    


    {
        id: 71,
        name: { en: "Kera - Gotera - Saris", am: "ከራ - ጎጠራ - ሳሪስ" },
        departure: { en: "Kera", am: "ከራ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Kera", am: "ከራ" }, lat: 9.013, lng: 38.744 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "18 min",
        fare: "8 ETB",
        color: "#00796b",
        polyline: [
            [9.013, 38.744], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    {
        id: 72,
        name: { en: "CMC - Summit - Ayat", am: "ሲ.ኤም.ሲ - ሳሚት - አያት" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "14 min",
        fare: "7 ETB",
        color: "#01579b",
        polyline: [
            [9.043, 38.814], [9.049, 38.825], [9.045, 38.835]
        ]
    },
    {
        id: 73,
        name: { en: "CMC - Megenagna - Mexico", am: "ሲ.ኤም.ሲ - መገናኛ - ሜክሲኮ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "22 min",
        fare: "9 ETB",
        color: "#c62828",
        polyline: [
            [9.043, 38.814], [9.026, 38.765], [9.008, 38.755]
        ]
    },
    {
        id: 74,
        name: { en: "Summit - Gurd Shola - CMC", am: "ሳሚት - ጉርድ ሾላ - ሲ.ኤም.ሲ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "12 min",
        fare: "6 ETB",
        color: "#6d4c41",
        polyline: [
            [9.049, 38.825], [9.052, 38.803], [9.043, 38.814]
        ]
    },
    {
        id: 75,
        name: { en: "Ayat - Summit - Megenagna", am: "አያት - ሳሚት - መገናኛ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#ff9800",
        polyline: [
            [9.045, 38.835], [9.049, 38.825], [9.026, 38.765]
        ]
    },
    {
        id: 76,
        name: { en: "Mexico - Stadium - Piassa", am: "ሜክሲኮ - ስታዲየም - ፒያዛ" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "11 min",
        fare: "6 ETB",
        color: "#0277bd",
        polyline: [
            [9.008, 38.755], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 77,
        name: { en: "Megenagna - CMC - Summit", am: "መገናኛ - ሲ.ኤም.ሲ - ሳሚት" },
        departure: { en: "Megenagna", am: "መገናኛ" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "17 min",
        fare: "7 ETB",
        color: "#607d8b",
        polyline: [
            [9.026, 38.765], [9.043, 38.814], [9.049, 38.825]
        ]
    },
    {
        id: 78,
        name: { en: "Ayat - Megenagna - Piassa", am: "አያት - መገናኛ - ፒያዛ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "32 min",
        fare: "10 ETB",
        color: "#cddc39",
        polyline: [
            [9.045, 38.835], [9.026, 38.765], [9.035, 38.75]
        ]
    },
    {
        id: 79,
        name: { en: "CMC - Bole - Airport", am: "ሲ.ኤም.ሲ - ቦሌ - አየር ማረፊያ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Airport", am: "አየር ማረፊያ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#039be5",
        polyline: [
            [9.043, 38.814], [9.017, 38.770], [8.980, 38.798]
        ]
    },
    {
        id: 80,
        name: { en: "Mekanisa - Gotera - Piassa", am: "መካኒሳ - ጎጠራ - ፒያዛ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "34 min",
        fare: "11 ETB",
        color: "#7b1fa2",
        polyline: [
            [8.959, 38.725], [9.008, 38.763], [9.035, 38.75]
        ]
    },
    {
        id: 81,
        name: { en: "Kotebe - Megenagna - Saris", am: "ኮተበ - መገናኛ - ሳሪስ" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "29 min",
        fare: "10 ETB",
        color: "#43a047",
        polyline: [
            [9.065, 38.815], [9.026, 38.765], [8.993, 38.775]
        ]
    },
    {
        id: 82,
        name: { en: "Torhailoch - Mexico - Stadium", am: "ቶርሃይሎች - ሜክሲኮ - ስታዲየም" },
        departure: { en: "Torhailoch", am: "ቶርሃይሎች" },
        destination: { en: "Stadium", am: "ስታዲየም" },
        stops: [
            { name: { en: "Torhailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 }
        ],
        time: "21 min",
        fare: "8 ETB",
        color: "#00897b",
        polyline: [
            [9.026, 38.697], [9.008, 38.755], [8.995, 38.76]
        ]
    },
    {
        id: 83,
        name: { en: "Summit - CMC - Bole", am: "ሳሚት - ሲ.ኤም.ሲ - ቦሌ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "21 min",
        fare: "9 ETB",
        color: "#1976d2",
        polyline: [
            [9.049, 38.825], [9.043, 38.814], [9.017, 38.770]
        ]
    },
    {
        id: 84,
        name: { en: "Bole - CMC - Ayat", am: "ቦሌ - ሲ.ኤም.ሲ - አያት" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "26 min",
        fare: "10 ETB",
        color: "#d32f2f",
        polyline: [
            [9.017, 38.770], [9.043, 38.814], [9.045, 38.835]
        ]
    },
    {
        id: 85,
        name: { en: "Piassa - Bambis - Mexico", am: "ፒያዛ - ባምቢስ - ሜክሲኮ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "14 min",
        fare: "7 ETB",
        color: "#6d4c41",
        polyline: [
            [9.035, 38.75], [9.016, 38.749], [9.008, 38.755]
        ]
    },
    {
        id: 86,
        name: { en: "Bole - Airport - Old Airport", am: "ቦሌ - አየር ማረፊያ - የድሮ አውሮፕላን ማረፊያ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 }
        ],
        time: "18 min",
        fare: "8 ETB",
        color: "#009688",
        polyline: [
            [9.017, 38.770], [8.980, 38.798], [8.994, 38.763]
        ]
    },
    {
        id: 87,
        name: { en: "Piassa - Teklehaimanot - Merkato", am: "ፒያዛ - ተክለሃይማኖት - መርካቶ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Teklehaimanot", am: "ተክለሃይማኖት" }, lat: 9.034, lng: 38.741 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "9 min",
        fare: "5 ETB",
        color: "#cddc39",
        polyline: [
            [9.035, 38.75], [9.034, 38.741], [9.041, 38.749]
        ]
    },
    {
        id: 88,
        name: { en: "Merkato - Stadium - Megenagna", am: "መርካቶ - ስታዲየም - መገናኛ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "19 min",
        fare: "8 ETB",
        color: "#f44336",
        polyline: [
            [9.041, 38.749], [8.995, 38.76], [9.026, 38.765]
        ]
    },
    {
        id: 89,
        name: { en: "Merkato - Bambis - Mexico", am: "መርካቶ - ባምቢስ - ሜክሲኮ" },
        departure: { en: "Merkato", am: "መርካቶ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "13 min",
        fare: "7 ETB",
        color: "#1976d2",
        polyline: [
            [9.041, 38.749], [9.016, 38.749], [9.008, 38.755]
        ]
    },
    {
        id: 90,
        name: { en: "Bole - Stadium - Piassa", am: "ቦሌ - ስታዲየም - ፒያዛ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "17 min",
        fare: "8 ETB",
        color: "#8d6e63",
        polyline: [
            [9.017, 38.770], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    {
        id: 91,
        name: { en: "Piassa - Bole - Airport", am: "ፒያዛ - ቦሌ - አየር ማረፊያ" },
        departure: { en: "Piassa", am: "ፒያዛ" },
        destination: { en: "Airport", am: "አየር ማረፊያ" },
        stops: [
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 }
        ],
        time: "21 min",
        fare: "9 ETB",
        color: "#388e3c",
        polyline: [
            [9.035, 38.75], [9.017, 38.770], [8.980, 38.798]
        ]
    },
    {
        id: 92,
        name: { en: "Arat Kilo - Piassa - Bambis", am: "አራት ኪሎ - ፒያዛ - ባምቢስ" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Bambis", am: "ባምቢስ" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 }
        ],
        time: "13 min",
        fare: "6 ETB",
        color: "#01579b",
        polyline: [
            [9.039, 38.761], [9.035, 38.75], [9.016, 38.749]
        ]
    },
    {
        id: 93,
        name: { en: "Siddist Kilo - Arat Kilo - Piassa", am: "ስድስት ኪሎ - አራት ኪሎ - ፒያዛ" },
        departure: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "11 min",
        fare: "5 ETB",
        color: "#d32f2f",
        polyline: [
            [9.045, 38.765], [9.039, 38.761], [9.035, 38.75]
        ]
    },
    {
        id: 94,
        name: { en: "Mexico - Stadium - Bole", am: "ሜክሲኮ - ስታዲየም - ቦሌ" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "14 min",
        fare: "7 ETB",
        color: "#43a047",
        polyline: [
            [9.008, 38.755], [8.995, 38.76], [9.017, 38.770]
        ]
    },
    {
        id: 95,
        name: { en: "Lebu - Jemo - Gotera", am: "ለቡ - ጄሞ - ጎጠራ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "34 min",
        fare: "12 ETB",
        color: "#00897b",
        polyline: [
            [8.956, 38.713], [8.963, 38.701], [9.008, 38.763]
        ]
    },
    {
        id: 96,
        name: { en: "Jemo - Mexico - Piassa", am: "ጄሞ - ሜክሲኮ - ፒያዛ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "38 min",
        fare: "11 ETB",
        color: "#fbc02d",
        polyline: [
            [8.963, 38.701], [9.008, 38.755], [9.035, 38.75]
        ]
    },
    {
        id: 97,
        name: { en: "Shola - Gulele - Piazza", am: "ሾላ - ጉለሌ - ፒያዛ" },
        departure: { en: "Shola", am: "ሾላ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Shola", am: "ሾላ" }, lat: 9.068, lng: 38.735 },
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "17 min",
        fare: "8 ETB",
        color: "#7b1fa2",
        polyline: [
            [9.068, 38.735], [9.068, 38.74], [9.035, 38.75]
        ]
    },
    {
        id: 98,
        name: { en: "Jemo - Torhailoch - Piassa", am: "ጄሞ - ቶርሃይሎች - ፒያዛ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Torhailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "30 min",
        fare: "10 ETB",
        color: "#388e3c",
        polyline: [
            [8.963, 38.701], [9.026, 38.697], [9.035, 38.75]
        ]
    },
    {
        id: 99,
        name: { en: "Shiro Meda - Siddist Kilo - Piassa", am: "ሺሮ መዳ - ስድስት ኪሎ - ፒያዛ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "18 min",
        fare: "8 ETB",
        color: "#cddc39",
        polyline: [
            [9.082, 38.765], [9.045, 38.765], [9.035, 38.75]
        ]
    },
    {
        id: 100,
        name: { en: "Gotera - Saris - Kality", am: "ጎጠራ - ሳሪስ - ቃሊቲ" },
        departure: { en: "Gotera", am: "ጎጠራ" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "26 min",
        fare: "9 ETB",
        color: "#1976d2",
        polyline: [
            [9.008, 38.763], [8.993, 38.775], [8.917, 38.769]
        ]
    },
    {
        id: 101,
        name: { en: "Kality - Merkato", am: "ቃሊቲ - መርካቶ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "50 min",
        fare: "14 ETB",
        color: "#1abc9c",
        polyline: [
            [8.917, 38.769], [9.008, 38.763], [9.008, 38.755], [9.041, 38.749]
        ]
    },
    {
        id: 102,
        name: { en: "Kality - Gotera", am: "ቃሊቲ - ጎጠራ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#f39c12",
        polyline: [
            [8.917, 38.769], [9.008, 38.763]
        ]
    },
    {
        id: 103,
        name: { en: "Kality - Akaki", am: "ቃሊቲ - አቃቂ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Akaki", am: "አቃቂ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 }
        ],
        time: "20 min",
        fare: "7 ETB",
        color: "#2980b9",
        polyline: [
            [8.917, 38.769], [8.882, 38.788]
        ]
    },
    {
        id: 104,
        name: { en: "Kality - Lebu", am: "ቃሊቲ - ለቡ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Lebu", am: "ለቡ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 }
        ],
        time: "25 min",
        fare: "9 ETB",
        color: "#8e44ad",
        polyline: [
            [8.917, 38.769], [8.956, 38.713]
        ]
    },
    {
        id: 105,
        name: { en: "Kality - Burayu (via Gelan)", am: "ቃሊቲ - ቡራዩ (በገላን)" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gelan", am: "ገላን" }, lat: 8.898, lng: 38.749 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "60 min",
        fare: "19 ETB",
        color: "#e67e22",
        polyline: [
            [8.917, 38.769], [8.898, 38.749], [9.104, 38.617]
        ]
    },
    {
        id: 106,
        name: { en: "Kaliti - Kality - Merkato", am: "ቃሊቲ - ቃሊቲ - መርካቶ" },
        departure: { en: "Kaliti", am: "ቃሊቲ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Kaliti", am: "ቃሊቲ" }, lat: 8.915, lng: 38.770 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "52 min",
        fare: "15 ETB",
        color: "#34495e",
        polyline: [
            [8.915, 38.770], [8.917, 38.769], [9.041, 38.749]
        ]
    },

    // --- Bole / Airport ---
    {
        id: 107,
        name: { en: "Bole - Atlas", am: "ቦሌ - አትላስ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Atlas", am: "አትላስ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 }
        ],
        time: "8 min",
        fare: "5 ETB",
        color: "#e84393",
        polyline: [
            [9.017, 38.770], [9.024, 38.783]
        ]
    },
    {
        id: 108,
        name: { en: "Bole - Gerji", am: "ቦሌ - ገርጂ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Gerji", am: "ገርጂ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 }
        ],
        time: "10 min",
        fare: "5 ETB",
        color: "#00b894",
        polyline: [
            [9.017, 38.770], [9.037, 38.801]
        ]
    },
    {
        id: 109,
        name: { en: "Airport - Bole - City Center", am: "አየር ማረፊያ - ቦሌ - ከተማ ማዕከል" },
        departure: { en: "Airport", am: "አየር ማረፊያ" },
        destination: { en: "City Center", am: "ከተማ ማዕከል" },
        stops: [
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "25 min",
        fare: "9 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.980, 38.798], [9.017, 38.770], [9.035, 38.75]
        ]
    },

    // --- Ayat & Summit ---
    {
        id: 110,
        name: { en: "Ayat - Gurd Shola", am: "አያት - ጉርድ ሾላ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "9 min",
        fare: "5 ETB",
        color: "#00bcd4",
        polyline: [
            [9.045, 38.835], [9.052, 38.803]
        ]
    },
    {
        id: 111,
        name: { en: "Summit - Ayat - CMC", am: "ሳሚት - አያት - ሲ.ኤም.ሲ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#636e72",
        polyline: [
            [9.049, 38.825], [9.045, 38.835], [9.043, 38.814]
        ]
    },

    // --- CMC & Gurd Shola ---
    {
        id: 112,
        name: { en: "CMC - Gurd Shola - Megenagna", am: "ሲ.ኤም.ሲ - ጉርድ ሾላ - መገናኛ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "19 min",
        fare: "8 ETB",
        color: "#fd79a8",
        polyline: [
            [9.043, 38.814], [9.052, 38.803], [9.026, 38.765]
        ]
    },
    {
        id: 113,
        name: { en: "Gurd Shola - Bole (via CMC)", am: "ጉርድ ሾላ - ቦሌ (በሲ.ኤም.ሲ)" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "22 min",
        fare: "9 ETB",
        color: "#8e44ad",
        polyline: [
            [9.052, 38.803], [9.043, 38.814], [9.017, 38.770]
        ]
    },

    // --- Jemo & Kotebe ---
    {
        id: 114,
        name: { en: "Jemo - Gotera", am: "ጄሞ - ጎጠራ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.963, 38.701], [9.008, 38.763]
        ]
    },
    {
        id: 115,
        name: { en: "Jemo - Mexico", am: "ጄሞ - ሜክሲኮ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "33 min",
        fare: "11 ETB",
        color: "#00b894",
        polyline: [
            [8.963, 38.701], [9.008, 38.755]
        ]
    },
    {
        id: 116,
        name: { en: "Kotebe - Jemo - Gotera", am: "ኮተበ - ጄሞ - ጎጠራ" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "35 min",
        fare: "12 ETB",
        color: "#00bcd4",
        polyline: [
            [9.065, 38.815], [8.963, 38.701], [9.008, 38.763]
        ]
    },
    {
        id: 117,
        name: { en: "Kotebe - Megenagna (via Jemo)", am: "ኮተበ - መገናኛ (በጄሞ)" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Megenagna", am: "መገናኛ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Megenagna", am: "መገናኛ" }, lat: 9.026, lng: 38.765 }
        ],
        time: "40 min",
        fare: "13 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.065, 38.815], [8.963, 38.701], [9.026, 38.765]
        ]
    },

    // --- Akaki ---
    {
        id: 118,
        name: { en: "Akaki - Gotera", am: "አቃቂ - ጎጠራ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "38 min",
        fare: "13 ETB",
        color: "#e17055",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [9.008, 38.763]
        ]
    },
    {
        id: 119,
        name: { en: "Akaki - Merkato", am: "አቃቂ - መርካቶ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "55 min",
        fare: "17 ETB",
        color: "#d35400",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [9.041, 38.749]
        ]
    },
    {
        id: 120,
        name: { en: "Akaki - Kaliti", am: "አቃቂ - ቃሊቲ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Kaliti", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kaliti", am: "ቃሊቲ" }, lat: 8.915, lng: 38.770 }
        ],
        time: "19 min",
        fare: "7 ETB",
        color: "#00b894",
        polyline: [
            [8.882, 38.788], [8.915, 38.770]
        ]
    },

    // --- Shiro Meda & Gulele ---
    {
        id: 121,
        name: { en: "Shiro Meda - Arat Kilo", am: "ሺሮ መዳ - አራት ኪሎ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 }
        ],
        time: "14 min",
        fare: "7 ETB",
        color: "#e17055",
        polyline: [
            [9.082, 38.765], [9.039, 38.761]
        ]
    },
    {
        id: 122,
        name: { en: "Shiro Meda - Gulele", am: "ሺሮ መዳ - ጉለሌ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Gulele", am: "ጉለሌ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 }
        ],
        time: "9 min",
        fare: "5 ETB",
        color: "#2d3436",
        polyline: [
            [9.082, 38.765], [9.068, 38.74]
        ]
    },
    {
        id: 123,
        name: { en: "Gulele - Kolfe", am: "ጉለሌ - ኮልፌ" },
        departure: { en: "Gulele", am: "ጉለሌ" },
        destination: { en: "Kolfe", am: "ኮልፌ" },
        stops: [
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.068, 38.74], [9.064, 38.672]
        ]
    },

    // --- Arat Kilo & Siddist Kilo ---
    {
        id: 124,
        name: { en: "Siddist Kilo - Entoto", am: "ስድስት ኪሎ - እንጦጦ" },
        departure: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
        destination: { en: "Entoto", am: "እንጦጦ" },
        stops: [
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Entoto", am: "እንጦጦ" }, lat: 9.102, lng: 38.767 }
        ],
        time: "22 min",
        fare: "9 ETB",
        color: "#00b894",
        polyline: [
            [9.045, 38.765], [9.102, 38.767]
        ]
    },

    // --- Mexico & Stadium ---
    {
        id: 125,
        name: { en: "Mexico - Piassa", am: "ሜክሲኮ - ፒያዛ" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "14 min",
        fare: "6 ETB",
        color: "#6c5ce7",
        polyline: [
            [9.008, 38.755], [9.035, 38.75]
        ]
    },

    // --- Tor Hailoch & Goro ---
    {
        id: 126,
        name: { en: "TorHailoch - Gotera", am: "ቶርሃይሎች - ጎጠራ" },
        departure: { en: "TorHailoch", am: "ቶርሃይሎች" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "TorHailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.026, 38.697], [9.008, 38.763]
        ]
    },
    {
        id: 127,
        name: { en: "TorHailoch - Kality", am: "ቶርሃይሎች - ቃሊቲ" },
        departure: { en: "TorHailoch", am: "ቶርሃይሎች" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "TorHailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "27 min",
        fare: "10 ETB",
        color: "#e17055",
        polyline: [
            [9.026, 38.697], [8.917, 38.769]
        ]
    },
    {
        id: 128,
        name: { en: "TorHailoch - Goro", am: "ቶርሃይሎች - ጎሮ" },
        departure: { en: "TorHailoch", am: "ቶር ሃይሎች" },
        destination: { en: "Goro", am: "ጎሮ" },
        stops: [
            { name: { en: "TorHailoch", am: "ቶርሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 }
        ],
        time: "24 min",
        fare: "9 ETB",
        color: "#00b894",
        polyline: [
            [9.026, 38.697], [8.966, 38.773]
        ]
    },
    {
        id: 129,
        name: { en: "Goro - Ring Road - Bole", am: "ጎሮ - ሪንግ ሮድ - ቦሌ" },
        departure: { en: "Goro", am: "ጎሮ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Ring Road", am: "ሪንግ ሮድ" }, lat: 8.987, lng: 38.810 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "34 min",
        fare: "12 ETB",
        color: "#6c5ce7",
        polyline: [
            [8.966, 38.773], [8.987, 38.810], [9.017, 38.770]
        ]
    },

    // --- Lebu ---
    {
        id: 130,
        name: { en: "Lebu - Gelan", am: "ለቡ - ገላን" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Gelan", am: "ገላን" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Gelan", am: "ገላን" }, lat: 8.898, lng: 38.749 }
        ],
        time: "24 min",
        fare: "10 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.956, 38.713], [8.898, 38.749]
        ]
    },
    {
        id: 131,
        name: { en: "Lebu - Alem Bank", am: "ለቡ - አለም ባንክ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Alem Bank", am: "አለም ባንክ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Alem Bank", am: "አለም ባንክ" }, lat: 9.008, lng: 38.667 }
        ],
        time: "20 min",
        fare: "9 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.956, 38.713], [9.008, 38.667]
        ]
    },

    // --- Old Airport & Mekanisa ---
    {
        id: 132,
        name: { en: "Old Airport - Bole", am: "የድሮ አውሮፕላን ማረፊያ - ቦሌ" },
        departure: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "12 min",
        fare: "6 ETB",
        color: "#636e72",
        polyline: [
            [8.994, 38.763], [9.017, 38.770]
        ]
    },
    {
        id: 133,
        name: { en: "Old Airport - Mekanisa", am: "የድሮ አውሮፕላን ማረፊያ - መካኒሳ" },
        departure: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        destination: { en: "Mekanisa", am: "መካኒሳ" },
        stops: [
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#d35400",
        polyline: [
            [8.994, 38.763], [8.959, 38.725]
        ]
    },
    {
        id: 134,
        name: { en: "Mekanisa - Old Airport - Bole", am: "መካኒሳ - የድሮ አውሮፕላን ማረፊያ - ቦሌ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "23 min",
        fare: "10 ETB",
        color: "#0984e3",
        polyline: [
            [8.959, 38.725], [8.994, 38.763], [9.017, 38.770]
        ]
    },
    {
        id: 135,
        name: { en: "Mekanisa - Merkato", am: "መካኒሳ - መርካቶ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "31 min",
        fare: "11 ETB",
        color: "#00b894",
        polyline: [
            [8.959, 38.725], [9.008, 38.755], [9.041, 38.749]
        ]
    },
    
     {
        id: 136,
        name: { en: "Kality - Lebu - Burayu", am: "ቃሊቲ - ለቡ - ቡራዩ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "50 min",
        fare: "16 ETB",
        color: "#2ecc71",
        polyline: [
            [8.917, 38.769], [8.956, 38.713], [9.104, 38.617]
        ]
    },
    {
        id: 137,
        name: { en: "Kality - City Center", am: "ቃሊቲ - ከተማ ማዕከል" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "City Center", am: "ከተማ ማዕከል" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "45 min",
        fare: "15 ETB",
        color: "#8e44ad",
        polyline: [
            [8.917, 38.769], [9.008, 38.755], [9.035, 38.75]
        ]
    },

    // --- More from Bole / Airport ---
    {
        id: 138,
        name: { en: "Airport - Bole - Atlas", am: "አየር ማረፊያ - ቦሌ - አትላስ" },
        departure: { en: "Airport", am: "አየር ማረፊያ" },
        destination: { en: "Atlas", am: "አትላስ" },
        stops: [
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#e17055",
        polyline: [
            [8.980, 38.798], [9.017, 38.770], [9.024, 38.783]
        ]
    },
    {
        id: 139,
        name: { en: "Bole - Gerji - CMC", am: "ቦሌ - ገርጂ - ሲ.ኤም.ሲ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#fdc93b",
        polyline: [
            [9.017, 38.770], [9.037, 38.801], [9.043, 38.814]
        ]
    },

    // --- More from Ayat & Summit ---
    {
        id: 140,
        name: { en: "Ayat - Summit - Gurd Shola", am: "አያት - ሳሚት - ጉርድ ሾላ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "14 min",
        fare: "6 ETB",
        color: "#00b894",
        polyline: [
            [9.045, 38.835], [9.049, 38.825], [9.052, 38.803]
        ]
    },
    {
        id: 141,
        name: { en: "Summit - Ayat - CMC", am: "ሳሚት - አያት - ሲ.ኤም.ሲ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "17 min",
        fare: "7 ETB",
        color: "#fd79a8",
        polyline: [
            [9.049, 38.825], [9.045, 38.835], [9.043, 38.814]
        ]
    },

    // --- More from CMC & Gurd Shola ---
    {
        id: 142,
        name: { en: "CMC - Saris - Gotera", am: "ሲ.ኤም.ሲ - ሳሪስ - ጎጠራ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "30 min",
        fare: "10 ETB",
        color: "#fab1a0",
        polyline: [
            [9.043, 38.814], [8.993, 38.775], [9.008, 38.763]
        ]
    },

    // --- More from Jemo & Kotebe ---
    {
        id: 143,
        name: { en: "Jemo - Gotera - Merkato", am: "ጄሞ - ጎጠራ - መርካቶ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "45 min",
        fare: "12 ETB",
        color: "#6c5ce7",
        polyline: [
            [8.963, 38.701], [9.008, 38.763], [9.041, 38.749]
        ]
    },
    {
        id: 144,
        name: { en: "Kotebe - Gotera", am: "ኮተበ - ጎጠራ" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "40 min",
        fare: "11 ETB",
        color: "#00b894",
        polyline: [
            [9.065, 38.815], [9.008, 38.763]
        ]
    },

    // --- More from Akaki ---
    {
        id: 145,
        name: { en: "Akaki - Kality - Lebu", am: "አቃቂ - ቃሊቲ - ለቡ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Lebu", am: "ለቡ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 }
        ],
        time: "38 min",
        fare: "11 ETB",
        color: "#00bcd4",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [8.956, 38.713]
        ]
    },

    // --- More from Shiro Meda & Gulele ---
    {
        id: 146,
        name: { en: "Shiro Meda - Gulele - Kolfe", am: "ሺሮ መዳ - ጉለሌ - ኮልፌ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Kolfe", am: "ኮልፌ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
        ],
        time: "25 min",
        fare: "9 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.082, 38.765], [9.068, 38.74], [9.064, 38.672]
        ]
    },

    // --- More from Arat Kilo & Siddist Kilo ---
    {
        id: 147,
        name: { en: "Arat Kilo - Shiro Meda", am: "አራት ኪሎ - ሺሮ መዳ" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#636e72",
        polyline: [
            [9.039, 38.761], [9.082, 38.765]
        ]
    },

    // --- More from Mexico & Stadium ---
    {
        id: 148,
        name: { en: "Stadium - Mexico - Piassa", am: "ስታዲየም - ሜክሲኮ - ፒያዛ" },
        departure: { en: "Stadium", am: "ስታዲየም" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "14 min",
        fare: "6 ETB",
        color: "#00b894",
        polyline: [
            [8.995, 38.76], [9.008, 38.755], [9.035, 38.75]
        ]
    },

    // --- More from Tor Hailoch & Goro ---
    {
        id: 149,
        name: { en: "Goro - Ring Road - Piassa", am: "ጎሮ - ሪንግ ሮድ - ፒያዛ" },
        departure: { en: "Goro", am: "ጎሮ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Ring Road", am: "ሪንግ ሮድ" }, lat: 8.987, lng: 38.810 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "34 min",
        fare: "12 ETB",
        color: "#6c5ce7",
        polyline: [
            [8.966, 38.773], [8.987, 38.810], [9.035, 38.75]
        ]
    },

    // --- More from Lebu ---
    {
        id: 150,
        name: { en: "Lebu - Burayu", am: "ለቡ - ቡራዩ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#e17055",
        polyline: [
            [8.956, 38.713], [9.104, 38.617]
        ]
    },
     {
        id: 151,
        name: { en: "Kality - Burayu", am: "ቃሊቲ - ቡራዩ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "45 min",
        fare: "15 ETB",
        color: "#00b894",
        polyline: [
            [8.917, 38.769], [9.104, 38.617]
        ]
    },
    // --- More from Bole / Airport ---
    {
        id: 152,
        name: { en: "Airport - Bole - Gerji", am: "አየር ማረፊያ - ቦሌ - ገርጂ" },
        departure: { en: "Airport", am: "አየር ማረፊያ" },
        destination: { en: "Gerji", am: "ገርጂ" },
        stops: [
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#00cec9",
        polyline: [
            [8.980, 38.798], [9.017, 38.770], [9.037, 38.801]
        ]
    },
    {
        id: 153,
        name: { en: "Airport - Gerji - CMC", am: "አየር ማረፊያ - ገርጂ - ሲ.ኤም.ሲ" },
        departure: { en: "Airport", am: "አየር ማረፊያ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "22 min",
        fare: "9 ETB",
        color: "#0984e3",
        polyline: [
            [8.980, 38.798], [9.037, 38.801], [9.043, 38.814]
        ]
    },
    // --- More from Ayat & Summit ---
    {
        id: 154,
        name: { en: "Ayat - Summit", am: "አያት - ሳሚት" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Summit", am: "ሳሚት" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 }
        ],
        time: "8 min",
        fare: "5 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.045, 38.835], [9.049, 38.825]
        ]
    },
    {
        id: 155,
        name: { en: "Summit - CMC", am: "ሳሚት - ሲ.ኤም.ሲ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "7 min",
        fare: "4 ETB",
        color: "#636e72",
        polyline: [
            [9.049, 38.825], [9.043, 38.814]
        ]
    },
    // --- More from CMC & Gurd Shola ---
    {
        id: 156,
        name: { en: "CMC - Saris", am: "ሲ.ኤም.ሲ - ሳሪስ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#b2bec3",
        polyline: [
            [9.043, 38.814], [8.993, 38.775]
        ]
    },
    {
        id: 157,
        name: { en: "Gurd Shola - CMC", am: "ጉርድ ሾላ - ሲ.ኤም.ሲ" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "7 min",
        fare: "4 ETB",
        color: "#fab1a0",
        polyline: [
            [9.052, 38.803], [9.043, 38.814]
        ]
    },
    // --- More from Jemo & Kotebe ---
    {
        id: 158,
        name: { en: "Jemo - Merkato", am: "ጄሞ - መርካቶ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Merkato", am: "መርካቶ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Merkato", am: "መርካቶ" }, lat: 9.041, lng: 38.749 }
        ],
        time: "34 min",
        fare: "11 ETB",
        color: "#f44336",
        polyline: [
            [8.963, 38.701], [9.041, 38.749]
        ]
    },
    {
        id: 159,
        name: { en: "Kotebe - Gotera - Saris", am: "ኮተበ - ጎጠራ - ሳሪስ" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "36 min",
        fare: "12 ETB",
        color: "#e67e22",
        polyline: [
            [9.065, 38.815], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    // --- More from Akaki ---
    {
        id: 160,
        name: { en: "Akaki - Lebu - City Center", am: "አቃቂ - ለቡ - ከተማ ማዕከል" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "City Center", am: "ከተማ ማዕከል" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "55 min",
        fare: "16 ETB",
        color: "#00b894",
        polyline: [
            [8.882, 38.788], [8.956, 38.713], [9.035, 38.75]
        ]
    },
    // --- More from Shiro Meda & Gulele ---
    {
        id: 161,
        name: { en: "Gulele - Shiro Meda - Entoto", am: "ጉለሌ - ሺሮ መዳ - እንጦጦ" },
        departure: { en: "Gulele", am: "ጉለሌ" },
        destination: { en: "Entoto", am: "እንጦጦ" },
        stops: [
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Entoto", am: "እንጦጦ" }, lat: 9.102, lng: 38.767 }
        ],
        time: "20 min",
        fare: "9 ETB",
        color: "#6c5ce7",
        polyline: [
            [9.068, 38.74], [9.082, 38.765], [9.102, 38.767]
        ]
    },
    // --- More from Arat Kilo & Siddist Kilo ---
    {
        id: 162,
        name: { en: "Siddist Kilo - Arat Kilo", am: "ስድስት ኪሎ - አራት ኪሎ" },
        departure: { en: "Siddist Kilo", am: "ስድስት ኪሎ" },
        destination: { en: "Arat Kilo", am: "አራት ኪሎ" },
        stops: [
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 }
        ],
        time: "7 min",
        fare: "4 ETB",
        color: "#a29bfe",
        polyline: [
            [9.045, 38.765], [9.039, 38.761]
        ]
    },
    // --- More from Mexico & Stadium ---
    {
        id: 163,
        name: { en: "Stadium - Mexico", am: "ስታዲየም - ሜክሲኮ" },
        departure: { en: "Stadium", am: "ስታዲየም" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "8 min",
        fare: "4 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.995, 38.76], [9.008, 38.755]
        ]
    },
    // --- More from Tor Hailoch & Goro ---
    {
        id: 164,
        name: { en: "Goro - Gotera", am: "ጎሮ - ጎጠራ" },
        departure: { en: "Goro", am: "ጎሮ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "17 min",
        fare: "7 ETB",
        color: "#fd79a8",
        polyline: [
            [8.966, 38.773], [9.008, 38.763]
        ]
    },
    {
        id: 165,
        name: { en: "Goro - Tor Hailoch - Kality", am: "ጎሮ - ቶር ሃይሎች - ቃሊቲ" },
        departure: { en: "Goro", am: "ጎሮ" },
        destination: { en: "Kality", am: "ቃሊቲ" },
        stops: [
            { name: { en: "Goro", am: "ጎሮ" }, lat: 8.966, lng: 38.773 },
            { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#00b894",
        polyline: [
            [8.966, 38.773], [9.026, 38.697], [8.917, 38.769]
        ]
    },

    // --- More from Lebu ---
    {
        id: 166,
        name: { en: "Lebu - Burayu - Kolfe", am: "ለቡ - ቡራዩ - ኮልፌ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Kolfe", am: "ኮልፌ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 },
            { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
        ],
        time: "38 min",
        fare: "13 ETB",
        color: "#00bcd4",
        polyline: [
            [8.956, 38.713], [9.104, 38.617], [9.064, 38.672]
        ]
    },
    // --- More from Old Airport & Mekanisa ---
    {
        id: 167,
        name: { en: "Mekanisa - Old Airport", am: "መካኒሳ - የድሮ አውሮፕላን ማረፊያ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 }
        ],
        time: "14 min",
        fare: "6 ETB",
        color: "#636e72",
        polyline: [
            [8.959, 38.725], [8.994, 38.763]
        ]
    },
    {
        id: 168,
        name: { en: "Mekanisa - Piassa", am: "መካኒሳ - ፒያዛ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "25 min",
        fare: "10 ETB",
        color: "#00b894",
        polyline: [
            [8.959, 38.725], [9.008, 38.763], [9.035, 38.75]
        ]
    },
    {
        id: 169,
        name: { en: "Mekanisa - Mexico", am: "መካኒሳ - ሜክሲኮ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.959, 38.725], [9.008, 38.755]
        ]
    },
    {
        id: 170,
        name: { en: "Mekanisa - Gotera", am: "መካኒሳ - ጎጠራ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "15 min",
        fare: "7 ETB",
        color: "#00b894",
        polyline: [
            [8.959, 38.725], [9.008, 38.763]
        ]
    },
    {
        id: 171,
        name: { en: "Kality - Gelan Condominiums - Burayu", am: "ቃሊቲ - ገላን ኮንዶሚኒየም - ቡራዩ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gelan Condominiums", am: "ገላን ኮንዶሚኒየም" }, lat: 8.900, lng: 38.735 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "55 min",
        fare: "17 ETB",
        color: "#ffbe76",
        polyline: [
            [8.917, 38.769], [8.900, 38.735], [9.104, 38.617]
        ]
    },
    // --- More from Bole / Airport ---
    {
        id: 172,
        name: { en: "Bole - Atlas - Gerji", am: "ቦሌ - አትላስ - ገርጂ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Gerji", am: "ገርጂ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 }
        ],
        time: "13 min",
        fare: "6 ETB",
        color: "#7ed6df",
        polyline: [
            [9.017, 38.770], [9.024, 38.783], [9.037, 38.801]
        ]
    },
    // --- More from Summit & Ayat ---
    {
        id: 173,
        name: { en: "Summit - Ayat - Gurd Shola", am: "ሳሚት - አያት - ጉርድ ሾላ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#f6e58d",
        polyline: [
            [9.049, 38.825], [9.045, 38.835], [9.052, 38.803]
        ]
    },
    // --- More from CMC & Gurd Shola ---
    {
        id: 174,
        name: { en: "CMC - Gurd Shola - Saris", am: "ሲ.ኤም.ሲ - ጉርድ ሾላ - ሳሪስ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "28 min",
        fare: "11 ETB",
        color: "#badc58",
        polyline: [
            [9.043, 38.814], [9.052, 38.803], [8.993, 38.775]
        ]
    },
    // --- More from Jemo & Kotebe ---
    {
        id: 175,
        name: { en: "Kotebe - Jemo - Mexico", am: "ኮተበ - ጄሞ - ሜክሲኮ" },
        departure: { en: "Kotebe", am: "ኮተበ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Kotebe", am: "ኮተበ" }, lat: 9.065, lng: 38.815 },
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "41 min",
        fare: "13 ETB",
        color: "#30336b",
        polyline: [
            [9.065, 38.815], [8.963, 38.701], [9.008, 38.755]
        ]
    },
    // --- More from Akaki ---
    {
        id: 176,
        name: { en: "Akaki - Kality - City Center", am: "አቃቂ - ቃሊቲ - ከተማ ማዕከል" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "City Center", am: "ከተማ ማዕከል" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "57 min",
        fare: "17 ETB",
        color: "#6ab04c",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [9.035, 38.75]
        ]
    },
    // --- More from Shiro Meda & Gulele ---
    {
        id: 177,
        name: { en: "Gulele - Shiro Meda", am: "ጉለሌ - ሺሮ መዳ" },
        departure: { en: "Gulele", am: "ጉለሌ" },
        destination: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        stops: [
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 }
        ],
        time: "8 min",
        fare: "5 ETB",
        color: "#be2edd",
        polyline: [
            [9.068, 38.74], [9.082, 38.765]
        ]
    },
    // --- More from Arat Kilo & Siddist Kilo ---
    {
        id: 178,
        name: { en: "Arat Kilo - Siddist Kilo - Entoto", am: "አራት ኪሎ - ስድስት ኪሎ - እንጦጦ" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Entoto", am: "እንጦጦ" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Siddist Kilo", am: "ስድስት ኪሎ" }, lat: 9.045, lng: 38.765 },
            { name: { en: "Entoto", am: "እንጦጦ" }, lat: 9.102, lng: 38.767 }
        ],
        time: "24 min",
        fare: "9 ETB",
        color: "#f9ca24",
        polyline: [
            [9.039, 38.761], [9.045, 38.765], [9.102, 38.767]
        ]
    },
    // --- More from Mexico & Stadium ---
    {
        id: 179,
        name: { en: "Mexico - Stadium - City Center", am: "ሜክሲኮ - ስታዲየም - ከተማ ማዕከል" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "City Center", am: "ከተማ ማዕከል" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#4834d4",
        polyline: [
            [9.008, 38.755], [8.995, 38.76], [9.035, 38.75]
        ]
    },
    // --- More from Tor Hailoch & Goro ---
    {
        id: 180,
        name: { en: "Tor Hailoch - Gotera - Saris", am: "ቶር ሃይሎች - ጎጠራ - ሳሪስ" },
        departure: { en: "Tor Hailoch", am: "ቶር ሃይሎች" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#22a6b3",
        polyline: [
            [9.026, 38.697], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    // --- More from Lebu ---
    {
        id: 181,
        name: { en: "Lebu - Alem Bank - Burayu", am: "ለቡ - አለም ባንክ - ቡራዩ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Alem Bank", am: "አለም ባንክ" }, lat: 9.008, lng: 38.667 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "34 min",
        fare: "12 ETB",
        color: "#c7ecee",
        polyline: [
            [8.956, 38.713], [9.008, 38.667], [9.104, 38.617]
        ]
    },
    // --- More from Old Airport & Mekanisa ---
    {
        id: 182,
        name: { en: "Mekanisa - Bole", am: "መካኒሳ - ቦሌ" },
        departure: { en: "Mekanisa", am: "መካኒሳ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "25 min",
        fare: "8 ETB",
        color: "#686de0",
        polyline: [
            [8.959, 38.725], [9.017, 38.770]
        ]
    },
    {
        id: 183,
        name: { en: "Old Airport - Piassa", am: "የድሮ አውሮፕላን ማረፊያ - ፒያዛ" },
        departure: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" },
        destination: { en: "Piassa", am: "ፒያዛ" },
        stops: [
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 }
        ],
        time: "15 min",
        fare: "6 ETB",
        color: "#f0932b",
        polyline: [
            [8.994, 38.763], [9.035, 38.75]
        ]
    },
    {
        id: 184,
        name: { en: "Kality - Lebu - Alem Bank", am: "ቃሊቲ - ለቡ - አለም ባንክ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Alem Bank", am: "አለም ባንክ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Alem Bank", am: "አለም ባንክ" }, lat: 9.008, lng: 38.667 }
        ],
        time: "35 min",
        fare: "11 ETB",
        color: "#e17055",
        polyline: [
            [8.917, 38.769], [8.956, 38.713], [9.008, 38.667]
        ]
    },
    // --- More from Bole / Airport ---
    {
        id: 185,
        name: { en: "Bole - Atlas - CMC", am: "ቦሌ - አትላስ - ሲ.ኤም.ሲ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "19 min",
        fare: "8 ETB",
        color: "#00b894",
        polyline: [
            [9.017, 38.770], [9.024, 38.783], [9.043, 38.814]
        ]
    },
    {
        id: 186,
        name: { en: "Bole - Old Airport - Mekanisa", am: "ቦሌ - የድሮ አውሮፕላን ማረፊያ - መካኒሳ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "Mekanisa", am: "መካኒሳ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Old Airport", am: "የድሮ አውሮፕላን ማረፊያ" }, lat: 8.994, lng: 38.763 },
            { name: { en: "Mekanisa", am: "መካኒሳ" }, lat: 8.959, lng: 38.725 }
        ],
        time: "26 min",
        fare: "9 ETB",
        color: "#d35400",
        polyline: [
            [9.017, 38.770], [8.994, 38.763], [8.959, 38.725]
        ]
    },
    // --- More from Summit & Ayat ---
    {
        id: 187,
        name: { en: "Ayat - CMC - Gurd Shola", am: "አያት - ሲ.ኤም.ሲ - ጉርድ ሾላ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 }
        ],
        time: "16 min",
        fare: "7 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.045, 38.835], [9.043, 38.814], [9.052, 38.803]
        ]
    },
    // --- More from CMC & Gurd Shola ---
    {
        id: 188,
        name: { en: "CMC - Gurd Shola - Bole", am: "ሲ.ኤም.ሲ - ጉርድ ሾላ - ቦሌ" },
        departure: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        destination: { en: "Bole", am: "ቦሌ" },
        stops: [
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 }
        ],
        time: "19 min",
        fare: "8 ETB",
        color: "#00cec9",
        polyline: [
            [9.043, 38.814], [9.052, 38.803], [9.017, 38.770]
        ]
    },
    // --- More from Jemo & Kotebe ---
    {
        id: 189,
        name: { en: "Jemo - Gotera - Saris", am: "ጄሞ - ጎጠራ - ሳሪስ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "27 min",
        fare: "10 ETB",
        color: "#6ab04c",
        polyline: [
            [8.963, 38.701], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    // --- More from Akaki ---
    {
        id: 190,
        name: { en: "Akaki - Lebu - Burayu", am: "አቃቂ - ለቡ - ቡራዩ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "60 min",
        fare: "17 ETB",
        color: "#4834d4",
        polyline: [
            [8.882, 38.788], [8.956, 38.713], [9.104, 38.617]
        ]
    },
    {
        id: 191,
        name: { en: "Kality - Gelan - Lebu", am: "ቃሊቲ - ገላን - ለቡ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Lebu", am: "ለቡ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gelan", am: "ገላን" }, lat: 8.898, lng: 38.749 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 }
        ],
        time: "29 min",
        fare: "10 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.917, 38.769], [8.898, 38.749], [8.956, 38.713]
        ]
    },
    // --- More from Bole / Airport ---
    {
        id: 192,
        name: { en: "Bole - Atlas - Gerji - CMC", am: "ቦሌ - አትላስ - ገርጂ - ሲ.ኤም.ሲ" },
        departure: { en: "Bole", am: "ቦሌ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "Atlas", am: "አትላስ" }, lat: 9.024, lng: 38.783 },
            { name: { en: "Gerji", am: "ገርጂ" }, lat: 9.037, lng: 38.801 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "25 min",
        fare: "9 ETB",
        color: "#00b894",
        polyline: [
            [9.017, 38.770], [9.024, 38.783], [9.037, 38.801], [9.043, 38.814]
        ]
    },
    // --- More from Summit & Ayat ---
    {
        id: 193,
        name: { en: "Summit - Gurd Shola - Saris", am: "ሳሚት - ጉርድ ሾላ - ሳሪስ" },
        departure: { en: "Summit", am: "ሳሚት" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "28 min",
        fare: "10 ETB",
        color: "#fab1a0",
        polyline: [
            [9.049, 38.825], [9.052, 38.803], [8.993, 38.775]
        ]
    },
    // --- More from CMC & Gurd Shola ---
    {
        id: 194,
        name: { en: "Gurd Shola - CMC - Ayat", am: "ጉርድ ሾላ - ሲ.ኤም.ሲ - አያት" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "Ayat", am: "አያት" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 }
        ],
        time: "13 min",
        fare: "6 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.052, 38.803], [9.043, 38.814], [9.045, 38.835]
        ]
    },
    // --- More from Jemo & Kotebe ---
    {
        id: 195,
        name: { en: "Jemo - Mexico - Stadium", am: "ጄሞ - ሜክሲኮ - ስታዲየም" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Stadium", am: "ስታዲየም" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 }
        ],
        time: "22 min",
        fare: "8 ETB",
        color: "#7ed6df",
        polyline: [
            [8.963, 38.701], [9.008, 38.755], [8.995, 38.76]
        ]
    },
    // --- More from Akaki ---
    {
        id: 196,
        name: { en: "Akaki - Kality - Gotera", am: "አቃቂ - ቃሊቲ - ጎጠራ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "33 min",
        fare: "11 ETB",
        color: "#4834d4",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [9.008, 38.763]
        ]
    },
    // --- More from Shiro Meda & Gulele ---
    {
        id: 197,
        name: { en: "Shiro Meda - Gulele - Alem Bank", am: "ሺሮ መዳ - ጉለሌ - አለም ባንክ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Alem Bank", am: "አለም ባንክ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Alem Bank", am: "አለም ባንክ" }, lat: 9.008, lng: 38.667 }
        ],
        time: "27 min",
        fare: "10 ETB",
        color: "#f7b731",
        polyline: [
            [9.082, 38.765], [9.068, 38.74], [9.008, 38.667]
        ]
    },
    // --- More from Arat Kilo & Siddist Kilo ---
    {
        id: 198,
        name: { en: "Arat Kilo - Piassa - Bambis - Mexico", am: "አራት ኪሎ - ፒያዛ - ባምቢስ - ሜክሲኮ" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Mexico", am: "ሜክሲኮ" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Piassa", am: "ፒያዛ" }, lat: 9.035, lng: 38.75 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 }
        ],
        time: "20 min",
        fare: "8 ETB",
        color: "#00b894",
        polyline: [
            [9.039, 38.761], [9.035, 38.75], [9.016, 38.749], [9.008, 38.755]
        ]
    },
    // --- More from Mexico & Stadium ---
    {
        id: 199,
        name: { en: "Mexico - Stadium - Gotera", am: "ሜክሲኮ - ስታዲየም - ጎጠራ" },
        departure: { en: "Mexico", am: "ሜክሲኮ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "10 min",
        fare: "6 ETB",
        color: "#e056fd",
        polyline: [
            [9.008, 38.755], [8.995, 38.76], [9.008, 38.763]
        ]
    },
    // --- More from Lebu ---
    {
        id: 200,
        name: { en: "Lebu - Gelan - Burayu", am: "ለቡ - ገላን - ቡራዩ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Gelan", am: "ገላን" }, lat: 8.898, lng: 38.749 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "35 min",
        fare: "12 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.956, 38.713], [8.898, 38.749], [9.104, 38.617]
        ]
    },
    {
        id: 201,
        name: { en: "Kality - Burayu - Kolfe", am: "ቃሊቲ - ቡራዩ - ኮልፌ" },
        departure: { en: "Kality", am: "ቃሊቲ" },
        destination: { en: "Kolfe", am: "ኮልፌ" },
        stops: [
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 },
            { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
        ],
        time: "48 min",
        fare: "13 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.917, 38.769], [9.104, 38.617], [9.064, 38.672]
        ]
    },
    // --- More from Bole / Airport ---
    {
        id: 202,
        name: { en: "Airport - Bole - CMC", am: "አየር ማረፊያ - ቦሌ - ሲ.ኤም.ሲ" },
        departure: { en: "Airport", am: "አየር ማረፊያ" },
        destination: { en: "CMC", am: "ሲ.ኤም.ሲ" },
        stops: [
            { name: { en: "Airport", am: "አየር ማረፊያ" }, lat: 8.980, lng: 38.798 },
            { name: { en: "Bole", am: "ቦሌ" }, lat: 9.017, lng: 38.770 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 }
        ],
        time: "21 min",
        fare: "8 ETB",
        color: "#00b894",
        polyline: [
            [8.980, 38.798], [9.017, 38.770], [9.043, 38.814]
        ]
    },
    // --- More from Summit & Ayat ---
    {
        id: 203,
        name: { en: "Ayat - Summit - Saris", am: "አያት - ሳሚት - ሳሪስ" },
        departure: { en: "Ayat", am: "አያት" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Ayat", am: "አያት" }, lat: 9.045, lng: 38.835 },
            { name: { en: "Summit", am: "ሳሚት" }, lat: 9.049, lng: 38.825 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "27 min",
        fare: "10 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.045, 38.835], [9.049, 38.825], [8.993, 38.775]
        ]
    },
    // --- More from CMC & Gurd Shola ---
    {
        id: 204,
        name: { en: "Gurd Shola - CMC - Saris", am: "ጉርድ ሾላ - ሲ.ኤም.ሲ - ሳሪስ" },
        departure: { en: "Gurd Shola", am: "ጉርድ ሾላ" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Gurd Shola", am: "ጉርድ ሾላ" }, lat: 9.052, lng: 38.803 },
            { name: { en: "CMC", am: "ሲ.ኤም.ሲ" }, lat: 9.043, lng: 38.814 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "24 min",
        fare: "9 ETB",
        color: "#fab1a0",
        polyline: [
            [9.052, 38.803], [9.043, 38.814], [8.993, 38.775]
        ]
    },
    // --- More from Jemo & Kotebe ---
    {
        id: 205,
        name: { en: "Jemo - Tor Hailoch - Gotera", am: "ጄሞ - ቶር ሃይሎች - ጎጠራ" },
        departure: { en: "Jemo", am: "ጄሞ" },
        destination: { en: "Gotera", am: "ጎጠራ" },
        stops: [
            { name: { en: "Jemo", am: "ጄሞ" }, lat: 8.963, lng: 38.701 },
            { name: { en: "Tor Hailoch", am: "ቶር ሃይሎች" }, lat: 9.026, lng: 38.697 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 }
        ],
        time: "31 min",
        fare: "10 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.963, 38.701], [9.026, 38.697], [9.008, 38.763]
        ]
    },
    // --- More from Akaki ---
    {
        id: 206,
        name: { en: "Akaki - Kality - Lebu - Kolfe", am: "አቃቂ - ቃሊቲ - ለቡ - ኮልፌ" },
        departure: { en: "Akaki", am: "አቃቂ" },
        destination: { en: "Kolfe", am: "ኮልፌ" },
        stops: [
            { name: { en: "Akaki", am: "አቃቂ" }, lat: 8.882, lng: 38.788 },
            { name: { en: "Kality", am: "ቃሊቲ" }, lat: 8.917, lng: 38.769 },
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Kolfe", am: "ኮልፌ" }, lat: 9.064, lng: 38.672 }
        ],
        time: "65 min",
        fare: "17 ETB",
        color: "#00b894",
        polyline: [
            [8.882, 38.788], [8.917, 38.769], [8.956, 38.713], [9.064, 38.672]
        ]
    },
    // --- More from Shiro Meda & Gulele ---
    {
        id: 207,
        name: { en: "Shiro Meda - Gulele - Burayu", am: "ሺሮ መዳ - ጉለሌ - ቡራዩ" },
        departure: { en: "Shiro Meda", am: "ሺሮ መዳ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Shiro Meda", am: "ሺሮ መዳ" }, lat: 9.082, lng: 38.765 },
            { name: { en: "Gulele", am: "ጉለሌ" }, lat: 9.068, lng: 38.74 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "36 min",
        fare: "12 ETB",
        color: "#fdcb6e",
        polyline: [
            [9.082, 38.765], [9.068, 38.74], [9.104, 38.617]
        ]
    },
    // --- More from Arat Kilo & Siddist Kilo ---
    {
        id: 208,
        name: { en: "Arat Kilo - Bambis - Mexico - Stadium", am: "አራት ኪሎ - ባምቢስ - ሜክሲኮ - ስታዲየም" },
        departure: { en: "Arat Kilo", am: "አራት ኪሎ" },
        destination: { en: "Stadium", am: "ስታዲየም" },
        stops: [
            { name: { en: "Arat Kilo", am: "አራት ኪሎ" }, lat: 9.039, lng: 38.761 },
            { name: { en: "Bambis", am: "ባምቢስ" }, lat: 9.016, lng: 38.749 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#fab1a0",
        polyline: [
            [9.039, 38.761], [9.016, 38.749], [9.008, 38.755], [8.995, 38.76]
        ]
    },
    // --- More from Mexico & Stadium ---
    {
        id: 209,
        name: { en: "Stadium - Mexico - Gotera - Saris", am: "ስታዲየም - ሜክሲኮ - ጎጠራ - ሳሪስ" },
        departure: { en: "Stadium", am: "ስታዲየም" },
        destination: { en: "Saris", am: "ሳሪስ" },
        stops: [
            { name: { en: "Stadium", am: "ስታዲየም" }, lat: 8.995, lng: 38.76 },
            { name: { en: "Mexico", am: "ሜክሲኮ" }, lat: 9.008, lng: 38.755 },
            { name: { en: "Gotera", am: "ጎጠራ" }, lat: 9.008, lng: 38.763 },
            { name: { en: "Saris", am: "ሳሪስ" }, lat: 8.993, lng: 38.775 }
        ],
        time: "18 min",
        fare: "7 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.995, 38.76], [9.008, 38.755], [9.008, 38.763], [8.993, 38.775]
        ]
    },
    // --- More from Lebu ---
    {
        id: 210,
        name: { en: "Lebu - Alem Bank - Gelan - Burayu", am: "ለቡ - አለም ባንክ - ገላን - ቡራዩ" },
        departure: { en: "Lebu", am: "ለቡ" },
        destination: { en: "Burayu", am: "ቡራዩ" },
        stops: [
            { name: { en: "Lebu", am: "ለቡ" }, lat: 8.956, lng: 38.713 },
            { name: { en: "Alem Bank", am: "አለም ባንክ" }, lat: 9.008, lng: 38.667 },
            { name: { en: "Gelan", am: "ገላን" }, lat: 8.898, lng: 38.749 },
            { name: { en: "Burayu", am: "ቡራዩ" }, lat: 9.104, lng: 38.617 }
        ],
        time: "35 min",
        fare: "13 ETB",
        color: "#fdcb6e",
        polyline: [
            [8.956, 38.713], [9.008, 38.667], [8.898, 38.749], [9.104, 38.617]
        ]
    }
];
   



