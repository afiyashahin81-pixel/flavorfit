// ========== RECIPE DATA ==========
const recipes = [
    {
        id: 1,
        name: "Masala Dosa",
        cuisine: "south-indian",
        diet: "veg",
        time: "breakfast",
        spice: "medium",
        mood: "happy",
        cookTime: "30 mins",
        calories: 350,
        healthScore: 75,
        ingredients: ["rice", "potato", "onion", "curry leaves"],
        image: "masaladosa.jpeg",
        allergies: [],
        tags: ["South Indian", "Breakfast", "Vegetarian"]
            },
    {
        id: 2,
        name: "Chicken Biryani",
        cuisine: "north-indian",
        diet: "non-veg",
        time: "lunch",
        spice: "hot",
        mood: "hungry",
        cookTime: "60 mins",
        calories: 550,
        healthScore: 65,
        ingredients: ["chicken", "rice", "onion", "tomato"],
        image: "chickenbiriyani.jpeg",
        allergies: ["dairy"],
        tags: ["North Indian", "Lunch", "Non-Veg"]
            },
    {
        id: 3,
        name: "Pasta Carbonara",
        cuisine: "italian",
        diet: "non-veg",
        time: "dinner",
        spice: "mild",
        mood: "romantic",
        cookTime: "25 mins",
        calories: 480,
        healthScore: 60,
        ingredients: ["pasta", "egg", "cheese", "bacon"],
        image: "pastacarbonara.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Italian", "Dinner", "Pasta"]
    },
    {
        id: 4,
        name: "Vegetable Tacos",
        cuisine: "mexican",
        diet: "veg",
        time: "quick",
        spice: "medium",
        mood: "energetic",
        cookTime: "15 mins",
        calories: 320,
        healthScore: 80,
        ingredients: ["tomato", "onion", "beans", "lettuce"],
        image: "vegtacos.jpeg",
        allergies: ["gluten"],
        tags: ["Mexican", "Quick", "Vegetarian"]
    },
    {
        id: 5,
        name: "Khichdi",
        cuisine: "north-indian",
        diet: "veg",
        time: "dinner",
        spice: "mild",
        mood: "not-well",
        cookTime: "20 mins",
        calories: 280,
        healthScore: 85,
        ingredients: ["rice", "lentils", "turmeric"],
        image: "kitchdi.jpeg",
        allergies: [],
        tags: ["Comfort Food", "Healthy", "Easy"]
    },
    {
        id: 6,
        name: "Fried Rice",
        cuisine: "chinese",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "lazy",
        cookTime: "20 mins",
        calories: 380,
        healthScore: 70,
        ingredients: ["rice", "egg", "vegetables", "soy sauce"],
        image: "friedrice.jpeg",
        allergies: ["soy"],
        tags: ["Chinese", "Quick", "Easy"]
    },
    {
        id: 7,
        name: "Paneer Tikka",
        cuisine: "north-indian",
        diet: "veg",
        time: "weekend",
        spice: "hot",
        mood: "happy",
        cookTime: "35 mins",
        calories: 420,
        healthScore: 72,
        ingredients: ["paneer", "yogurt", "bell pepper", "onion"],
        image: "paneer.jpeg",
        allergies: ["dairy"],
        tags: ["North Indian", "Weekend", "Vegetarian"]
    },
    {
        id: 8,
        name: "Egg Curry",
        cuisine: "south-indian",
        diet: "non-veg",
        time: "lunch",
        spice: "medium",
        mood: "hungry",
        cookTime: "30 mins",
        calories: 380,
        healthScore: 68,
        ingredients: ["egg", "tomato", "onion", "coconut"],
        image: "eggcurry.jpeg",
        allergies: ["nuts"],
        tags: ["South Indian", "Lunch", "Non-Veg"]
    },
    {
        id: 9,
        name: "Margherita Pizza",
        cuisine: "italian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "25 mins",
        calories: 450,
        healthScore: 65,
        ingredients: ["cheese", "tomato", "basil"],
        image: "pizza.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Italian", "Weekend", "Pizza"]
    },
    {
        id: 10,
        name: "Idli Sambar",
        cuisine: "south-indian",
        diet: "veg",
        time: "breakfast",
        spice: "mild",
        mood: "not-well",
        cookTime: "40 mins",
        calories: 220,
        healthScore: 88,
        ingredients: ["rice", "lentils", "vegetables"],
        image: "idli.jpeg",
        allergies: [],
        tags: ["South Indian", "Breakfast", "Healthy"]
        },  // ← Make sure previous recipe ends with comma
    {
        id: 11,
        name: "Butter Chicken",
        cuisine: "north-indian",
        diet: "non-veg",
        time: "dinner",
        spice: "medium",
        mood: "hungry",
        cookTime: "45 mins",
        calories: 520,
        healthScore: 62,
        ingredients: ["chicken", "butter", "tomato", "cream", "onion"],
        image: "butterchicken.jpeg",
        allergies: ["dairy"],
        tags: ["North Indian", "Dinner", "Non-Veg"]
    },
    {
        id: 12,
        name: "Palak Paneer",
        cuisine: "north-indian",
        diet: "veg",
        time: "lunch",
        spice: "mild",
        mood: "not-well",
        cookTime: "30 mins",
        calories: 280,
        healthScore: 82,
        ingredients: ["paneer", "spinach", "onion", "tomato", "cream"],
        image: "palakpaneer.jpeg",
        allergies: ["dairy"],
        tags: ["North Indian", "Healthy", "Vegetarian"]
    },
    {
        id: 13,
        name: "Chole Bhature",
        cuisine: "north-indian",
        diet: "veg",
        time: "weekend",
        spice: "medium",
        mood: "happy",
        cookTime: "50 mins",
        calories: 580,
        healthScore: 58,
        ingredients: ["chickpeas", "flour", "onion", "tomato", "yogurt"],
        image: "poori.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["North Indian", "Weekend", "Street Food"]
    },
    {
        id: 14,
        name: "Sambar Rice",
        cuisine: "south-indian",
        diet: "veg",
        time: "lunch",
        spice: "medium",
        mood: "not-well",
        cookTime: "35 mins",
        calories: 320,
        healthScore: 78,
        ingredients: ["rice", "lentils", "vegetables", "tamarind", "curry leaves"],
        image: "sambarrice.jpeg",
        allergies: [],
        tags: ["South Indian", "Comfort Food", "Healthy"]
    },
    {
        id: 15,
        name: "Vada Pav",
        cuisine: "north-indian",
        diet: "veg",
        time: "quick",
        spice: "hot",
        mood: "hungry",
        cookTime: "20 mins",
        calories: 380,
        healthScore: 55,
        ingredients: ["potato", "bread", "flour", "chili", "garlic"],
        image: "pav.jpeg",
        allergies: ["gluten"],
        tags: ["Street Food", "Quick", "Mumbai Special"]
    },
    {
        id: 16,
        name: "Margherita Pizza",
        cuisine: "italian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "25 mins",
        calories: 450,
        healthScore: 60,
        ingredients: ["cheese", "tomato", "basil", "flour", "olive oil"],
        image: "pizza.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Italian", "Weekend", "Pizza"]
    },
    {
        id: 17,
        name: "Spaghetti Bolognese",
        cuisine: "italian",
        diet: "non-veg",
        time: "dinner",
        spice: "mild",
        mood: "romantic",
        cookTime: "40 mins",
        calories: 520,
        healthScore: 63,
        ingredients: ["pasta", "meat", "tomato", "onion", "garlic"],
        image: "spagati.jpeg",
        allergies: ["gluten"],
        tags: ["Italian", "Dinner", "Pasta"]
    },
    {
        id: 18,
        name: "Lasagna",
        cuisine: "italian",
        diet: "non-veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "60 mins",
        calories: 650,
        healthScore: 55,
        ingredients: ["pasta", "cheese", "meat", "tomato", "cream"],
        image: "lasagna.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Italian", "Weekend", "Baked"]
    },
    {
        id: 19,
        name: "Chicken Tacos",
        cuisine: "mexican",
        diet: "non-veg",
        time: "quick",
        spice: "hot",
        mood: "energetic",
        cookTime: "20 mins",
        calories: 420,
        healthScore: 68,
        ingredients: ["chicken", "tortilla", "lettuce", "tomato", "cheese"],
        image: "chickentacos.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Mexican", "Quick", "Non-Veg"]
    },
    {
        id: 20,
        name: "Quesadilla",
        cuisine: "mexican",
        diet: "veg",
        time: "quick",
        spice: "medium",
        mood: "lazy",
        cookTime: "15 mins",
        calories: 380,
        healthScore: 62,
        ingredients: ["cheese", "tortilla", "bell pepper", "onion", "beans"],
        image: "dilla.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Mexican", "Quick", "Easy"]
    },
    {
        id: 21,
        name: "Burrito Bowl",
        cuisine: "mexican",
        diet: "veg",
        time: "lunch",
        spice: "medium",
        mood: "energetic",
        cookTime: "25 mins",
        calories: 480,
        healthScore: 75,
        ingredients: ["rice", "beans", "lettuce", "tomato", "cheese"],
        image: "burito.jpeg",
        allergies: ["dairy"],
        tags: ["Mexican", "Healthy", "Bowl"]
    },
    {
        id: 22,
        name: "Fried Rice",
        cuisine: "chinese",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "lazy",
        cookTime: "18 mins",
        calories: 380,
        healthScore: 65,
        ingredients: ["rice", "egg", "vegetables", "soy sauce", "garlic"],
        image: "friedrice.jpeg",
        allergies: ["soy"],
        tags: ["Chinese", "Quick", "Easy"]
    },
    {
        id: 23,
        name: "Hakka Noodles",
        cuisine: "chinese",
        diet: "veg",
        time: "quick",
        spice: "medium",
        mood: "hungry",
        cookTime: "20 mins",
        calories: 420,
        healthScore: 60,
        ingredients: ["noodles", "vegetables", "soy sauce", "garlic", "chili"],
        image: "hakka.jpeg",
        allergies: ["gluten", "soy"],
        tags: ["Chinese", "Quick", "Noodles"]
    },
    {
        id: 24,
        name: "Manchurian",
        cuisine: "chinese",
        diet: "veg",
        time: "dinner",
        spice: "hot",
        mood: "hungry",
        cookTime: "30 mins",
        calories: 450,
        healthScore: 58,
        ingredients: ["vegetables", "flour", "soy sauce", "garlic", "chili"],
        image: "manchurian.jpeg",
        allergies: ["gluten", "soy"],
        tags: ["Chinese", "Spicy", "Fried"]
    },
    {
        id: 25,
        name: "Spring Rolls",
        cuisine: "chinese",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "energetic",
        cookTime: "25 mins",
        calories: 320,
        healthScore: 70,
        ingredients: ["vegetables", "wrapper", "soy sauce", "garlic"],
        image: "springroll.jpeg",
        allergies: ["gluten", "soy"],
        tags: ["Chinese", "Quick", "Appetizer"]
    },
    {
        id: 26,
        name: "Greek Salad",
        cuisine: "continental",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "energetic",
        cookTime: "10 mins",
        calories: 220,
        healthScore: 92,
        ingredients: ["lettuce", "tomato", "cucumber", "cheese", "olive oil"],
        image: "greeksalad.jpeg",
        allergies: ["dairy"],
        tags: ["Continental", "Healthy", "Salad"]
    },
    {
        id: 27,
        name: "French Toast",
        cuisine: "continental",
        diet: "veg",
        time: "breakfast",
        spice: "mild",
        mood: "happy",
        cookTime: "15 mins",
        calories: 350,
        healthScore: 58,
        ingredients: ["bread", "egg", "milk", "sugar", "butter"],
        image: "frenchtoast.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Continental", "Breakfast", "Quick"]
    },
    {
        id: 28,
        name: "Caesar Salad",
        cuisine: "continental",
        diet: "non-veg",
        time: "lunch",
        spice: "mild",
        mood: "energetic",
        cookTime: "15 mins",
        calories: 280,
        healthScore: 78,
        ingredients: ["lettuce", "chicken", "cheese", "croutons", "dressing"],
        image: "salad.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Continental", "Healthy", "Salad"]
    },
    {
        id: 29,
        name: "Grilled Sandwich",
        cuisine: "continental",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "lazy",
        cookTime: "12 mins",
        calories: 340,
        healthScore: 65,
        ingredients: ["bread", "cheese", "tomato", "butter", "vegetables"],
        image: "sandwitch.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Continental", "Quick", "Sandwich"]
    },
    {
        id: 30,
        name: "Pav Bhaji",
        cuisine: "north-indian",
        diet: "veg",
        time: "dinner",
        spice: "medium",
        mood: "hungry",
        cookTime: "35 mins",
        calories: 480,
        healthScore: 60,
        ingredients: ["vegetables", "butter", "bread", "tomato", "onion"],
        image: "pav.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Street Food", "Mumbai Special", "Vegetarian"]
        },  // ← Make sure recipe ID 30 ends with comma
    {
        id: 31,
        name: "Gulab Jamun",
        cuisine: "north-indian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "45 mins",
        calories: 180,
        healthScore: 35,
        ingredients: ["milk powder", "flour", "sugar", "cardamom", "ghee"],
        image: "gulab.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Indian Sweet", "Festival"]
    },
    {
        id: 32,
        name: "Rasgulla",
        cuisine: "north-indian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "50 mins",
        calories: 150,
        healthScore: 40,
        ingredients: ["paneer", "sugar", "milk", "cardamom"],
        image: "rasagullah.jpeg",
        allergies: ["dairy"],
        tags: ["Dessert", "Bengali Sweet", "Spongy"]
    },
    {
        id: 33,
        name: "Kheer (Rice Pudding)",
        cuisine: "north-indian",
        diet: "veg",
        time: "dinner",
        spice: "mild",
        mood: "not-well",
        cookTime: "40 mins",
        calories: 220,
        healthScore: 50,
        ingredients: ["rice", "milk", "sugar", "cardamom", "nuts"],
        image: "kheer.jpeg",
        allergies: ["dairy", "nuts"],
        tags: ["Dessert", "Comfort Food", "Traditional"]
    },
    {
        id: 34,
        name: "Jalebi",
        cuisine: "north-indian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "35 mins",
        calories: 200,
        healthScore: 30,
        ingredients: ["flour", "sugar", "yogurt", "saffron", "ghee"],
        image: "jalebi.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Street Food", "Crispy"]
    },
    {
        id: 35,
        name: "Mysore Pak",
        cuisine: "south-indian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "30 mins",
        calories: 250,
        healthScore: 32,
        ingredients: ["chickpea flour", "ghee", "sugar", "cardamom"],
        image: "mysore.jpeg",
        allergies: ["dairy"],
        tags: ["Dessert", "South Indian", "Festival"]
    },
    {
        id: 36,
        name: "Payasam",
        cuisine: "south-indian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "45 mins",
        calories: 240,
        healthScore: 48,
        ingredients: ["vermicelli", "milk", "sugar", "nuts", "cardamom"],
        image: "payasam.jpeg",
        allergies: ["gluten", "dairy", "nuts"],
        tags: ["Dessert", "South Indian", "Traditional"]
    },
    {
        id: 37,
        name: "Tiramisu",
        cuisine: "italian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "romantic",
        cookTime: "30 mins",
        calories: 320,
        healthScore: 42,
        ingredients: ["cheese", "coffee", "egg", "sugar", "biscuits"],
        image: "tiramisu.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Italian", "Coffee"]
    },
    {
        id: 38,
        name: "Panna Cotta",
        cuisine: "italian",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "romantic",
        cookTime: "25 mins",
        calories: 280,
        healthScore: 45,
        ingredients: ["cream", "milk", "sugar", "vanilla", "gelatin"],
        image: "pannacota.jpeg",
        allergies: ["dairy"],
        tags: ["Dessert", "Italian", "Creamy"]
    },
    {
        id: 39,
        name: "Chocolate Lava Cake",
        cuisine: "continental",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "25 mins",
        calories: 380,
        healthScore: 35,
        ingredients: ["chocolate", "butter", "egg", "flour", "sugar"],
        image: "lava.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Chocolate", "Gooey"]
    },
    {
        id: 40,
        name: "Cheesecake",
        cuisine: "continental",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "60 mins",
        calories: 420,
        healthScore: 38,
        ingredients: ["cheese", "cream", "biscuits", "sugar", "butter"],
        image: "cheese.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Baked", "Creamy"]
    },
    {
        id: 41,
        name: "Brownies",
        cuisine: "continental",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "35 mins",
        calories: 350,
        healthScore: 40,
        ingredients: ["chocolate", "butter", "egg", "flour", "sugar"],
        image: "brown.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Chocolate", "Baked"]
    },
    {
        id: 42,
        name: "Apple Pie",
        cuisine: "continental",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "55 mins",
        calories: 320,
        healthScore: 52,
        ingredients: ["apple", "flour", "butter", "sugar", "cinnamon"],
        image: "apple.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Pie", "Fruity"]
    },
    {
        id: 43,
        name: "Ice Cream Sundae",
        cuisine: "continental",
        diet: "veg",
        time: "quick",
        spice: "mild",
        mood: "happy",
        cookTime: "5 mins",
        calories: 280,
        healthScore: 42,
        ingredients: ["ice cream", "chocolate", "nuts", "cherry", "cream"],
        image: "sundae.jpeg",
        allergies: ["dairy", "nuts"],
        tags: ["Dessert", "Cold", "Quick"]
    },
    {
        id: 44,
        name: "Churros",
        cuisine: "mexican",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "30 mins",
        calories: 310,
        healthScore: 38,
        ingredients: ["flour", "sugar", "butter", "cinnamon", "chocolate"],
        image: "churros.jpeg",
        allergies: ["gluten", "dairy"],
        tags: ["Dessert", "Mexican", "Fried"]
    },
    {
        id: 45,
        name: "Mango Sticky Rice",
        cuisine: "chinese",
        diet: "veg",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "40 mins",
        calories: 290,
        healthScore: 55,
        ingredients: ["rice", "mango", "coconut milk", "sugar"],
        image: "mango.jpeg",
        allergies: [],
        tags: ["Dessert", "Thai", "Tropical"]
        },  // ← Make sure recipe ID 45 ends with comma
    {
        id: 46,
        name: "Vegan Buddha Bowl",
        cuisine: "continental",
        diet: "vegan",
        time: "lunch",
        spice: "mild",
        mood: "energetic",
        cookTime: "25 mins",
        calories: 320,
        healthScore: 95,
        ingredients: ["quinoa", "chickpeas", "avocado", "spinach", "tomato"],
        allergies: ["gluten"],
        image: "buddha.jpeg",
        tags: ["Vegan", "Healthy", "Bowl"]
    },
    {
        id: 47,
        name: "Vegan Stir Fry",
        cuisine: "chinese",
        diet: "vegan",
        time: "quick",
        spice: "medium",
        mood: "lazy",
        cookTime: "18 mins",
        calories: 280,
        healthScore: 88,
        ingredients: ["tofu", "vegetables", "soy sauce", "garlic", "ginger"],
        allergies: ["soy"],
        image: "stir.jpeg",
        tags: ["Vegan", "Quick", "Asian"]
    },
    {
        id: 48,
        name: "Vegan Curry",
        cuisine: "south-indian",
        diet: "vegan",
        time: "dinner",
        spice: "hot",
        mood: "hungry",
        cookTime: "35 mins",
        calories: 340,
        healthScore: 82,
        ingredients: ["coconut milk", "vegetables", "curry leaves", "turmeric", "chili"],
        allergies: ["nuts"],
        image: "vegcurry.jpeg",
        tags: ["Vegan", "Curry", "Coconut"]
    },
    {
        id: 49,
        name: "Vegan Pasta Primavera",
        cuisine: "italian",
        diet: "vegan",
        time: "dinner",
        spice: "mild",
        mood: "romantic",
        cookTime: "30 mins",
        calories: 380,
        healthScore: 75,
        ingredients: ["pasta", "vegetables", "olive oil", "garlic", "basil"],
        allergies: ["gluten"],
        image: "vegan.jpeg",
        tags: ["Vegan", "Italian", "Pasta"]
    },
    {
        id: 50,
        name: "Vegan Tacos",
        cuisine: "mexican",
        diet: "vegan",
        time: "quick",
        spice: "medium",
        mood: "energetic",
        cookTime: "20 mins",
        calories: 300,
        healthScore: 80,
        ingredients: ["beans", "lettuce", "tomato", "avocado", "tortilla"],
        allergies: ["gluten"],
        image: "veganta.jpeg",
        tags: ["Vegan", "Mexican", "Quick"]
    },
    {
        id: 51,
        name: "Vegan Smoothie Bowl",
        cuisine: "continental",
        diet: "vegan",
        time: "breakfast",
        spice: "mild",
        mood: "energetic",
        cookTime: "10 mins",
        calories: 250,
        healthScore: 92,
        ingredients: ["banana", "berries", "almond milk", "oats", "nuts"],
        allergies: ["nuts"],
        image: "./images1/bowl.jpeg",
        tags: ["Vegan", "Breakfast", "Healthy"]
    },
    {
        id: 52,
        name: "Vegan Burger",
        cuisine: "continental",
        diet: "vegan",
        time: "quick",
        spice: "mild",
        mood: "hungry",
        cookTime: "25 mins",
        calories: 380,
        healthScore: 70,
        ingredients: ["beans", "lettuce", "tomato", "bun", "avocado"],
        allergies: ["gluten", "soy"],
        image: "./images1/burger.jpeg",
        tags: ["Vegan", "Burger", "Plant-Based"]
    },
    {
        id: 53,
        name: "Vegan Pancakes",
        cuisine: "continental",
        diet: "vegan",
        time: "breakfast",
        spice: "mild",
        mood: "happy",
        cookTime: "20 mins",
        calories: 280,
        healthScore: 68,
        ingredients: ["flour", "almond milk", "banana", "maple syrup"],
        allergies: ["gluten", "nuts"],
        image: "./images1/pancakes.jpeg",
        tags: ["Vegan", "Breakfast", "Fluffy"]
    },
    {
        id: 54,
        name: "Jain Pav Bhaji",
        cuisine: "north-indian",
        diet: "jain",
        time: "dinner",
        spice: "medium",
        mood: "hungry",
        cookTime: "40 mins",
        calories: 420,
        healthScore: 62,
        ingredients: ["vegetables", "butter", "bread", "tomato"],
        allergies: ["dairy"],
        image: "./images1/jain.jpeg",
        tags: ["Jain", "Street Food", "No Onion-Garlic"]
    },
    {
        id: 55,
        name: "Jain Pizza",
        cuisine: "italian",
        diet: "jain",
        time: "weekend",
        spice: "mild",
        mood: "happy",
        cookTime: "30 mins",
        calories: 480,
        healthScore: 58,
        ingredients: ["cheese", "tomato", "bell pepper", "basil", "flour"],
        allergies: ["dairy", "gluten"],
        image: "./images1/jainp.jpeg",
        tags: ["Jain", "Pizza", "No Onion-Garlic"]
    },
    {
        id: 56,
        name: "Jain Pulao",
        cuisine: "north-indian",
        diet: "jain",
        time: "lunch",
        spice: "mild",
        mood: "not-well",
        cookTime: "30 mins",
        calories: 320,
        healthScore: 75,
        ingredients: ["rice", "vegetables", "ghee", "cumin"],
        allergies: ["dairy"],
        image: "./images1/jainpu.jpeg",
        tags: ["Jain", "Rice", "Comfort Food"]
    },
    {
        id: 57,
        name: "Jain Sandwich",
        cuisine: "continental",
        diet: "jain",
        time: "quick",
        spice: "mild",
        mood: "lazy",
        cookTime: "12 mins",
        calories: 280,
        healthScore: 65,
        ingredients: ["bread", "cheese", "tomato", "cucumber", "butter"],
        allergies: ["dairy", "gluten"],
        image: "./images1/jains.jpeg",
        tags: ["Jain", "Quick", "No Onion-Garlic"]
    },
    {
        id: 58,
        name: "Jain Pasta",
        cuisine: "italian",
        diet: "jain",
        time: "dinner",
        spice: "mild",
        mood: "romantic",
        cookTime: "25 mins",
        calories: 420,
        healthScore: 60,
        ingredients: ["pasta", "tomato", "cheese", "basil", "olive oil"],
        allergies: ["dairy", "gluten"],
        image: "./images1/jainpasta.jpeg",
        tags: ["Jain", "Italian", "Pasta"]
    },
    {
        id: 59,
        name: "Jain Thali",
        cuisine: "north-indian",
        diet: "jain",
        time: "lunch",
        spice: "medium",
        mood: "hungry",
        cookTime: "45 mins",
        calories: 520,
        healthScore: 72,
        ingredients: ["rice", "dal", "vegetables", "roti", "ghee"],
        allergies: ["dairy"],
        image: "./images1/thali.jpeg",
        tags: ["Jain", "Traditional", "Complete Meal"]
    },
    {
        id: 60,
        name: "Jain Dhokla",
        cuisine: "north-indian",
        diet: "jain",
        time: "breakfast",
        spice: "mild",
        mood: "happy",
        cookTime: "30 mins",
        calories: 180,
        healthScore: 85,
        ingredients: ["chickpea flour", "yogurt", "lemon", "mustard seeds"],
        allergies: ["dairy"],
        image: "./images1/dhokla.jpeg",
        tags: ["Jain", "Gujarati", "Steamed"]
    }
 ];

// ========== AVAILABLE INGREDIENTS ==========
const availableIngredients = [
    { name: "Tomato", icon: "🍅" },
    { name: "Potato", icon: "🥔" },
    { name: "Onion", icon: "🧅" },
    { name: "Egg", icon: "🥚" },
    { name: "Chicken", icon: "🍗" },
    { name: "Rice", icon: "🍚" },
    { name: "Cheese", icon: "🧀" },
    { name: "Pasta", icon: "🍝" },
    { name: "Paneer", icon: "🧈" },
    { name: "Beans", icon: "🫘" },
    { name: "Lettuce", icon: "🥬" },
    { name: "Bell Pepper", icon: "🫑" }
];

/// ========== AUTOCOMPLETE SUGGESTIONS ==========
const suggestions = [
    "Masala Dosa", "Chicken Biryani", "Pasta", "Pizza", "Tacos",
    "Tomato", "Onion", "Chicken", "Rice", "Pasta", "Cheese", "Egg",
    "Quick breakfast recipes", "Healthy lunch ideas", "Easy dinner recipes",
    "Potato", "Paneer", "Beans"
];

// ========== GLOBAL VARIABLES ==========
let selectedIngredients = [];
let selectedIngredientsForModal = [];
let shoppingList = [];           // ⭐ ADD
let favorites = [];              // ⭐ ADD
let weeklyMealPlan = [];         // ⭐ ADD
let userDietProfile = {};        // ⭐ ADD

// ========== FILTER STATE ==========
const filters = {
    time: ['all'],
    mood: [],
    cuisine: [],
    diet: [],
    spice: [],
    allergy: []
};

// ========== DOM ELEMENTS ==========
const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
const quickAddBtn = document.getElementById('quickAddBtn');
const quickAddModal = document.getElementById('quickAddModal');
const closeModal = document.getElementById('closeModal');
const addIngredientsBtn = document.getElementById('addIngredientsBtn');
const ingredientChips = document.getElementById('ingredientChips');
const recipeGrid = document.getElementById('recipeGrid');
const noRecipes = document.getElementById('noRecipes');
const voiceBtn = document.getElementById('voiceBtn');

// ========== INITIALIZE INGREDIENT GRID ==========
function initIngredientGrid() {
    const grid = document.getElementById('ingredientGrid');
    grid.innerHTML = availableIngredients.map(ing => `
        <div class="ingredient-option" data-ingredient="${ing.name.toLowerCase()}">
            <i>${ing.icon}</i>
            <span>${ing.name}</span>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.ingredient-option').forEach(option => {
        option.addEventListener('click', function() {
            const ingredient = this.dataset.ingredient;
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedIngredientsForModal = selectedIngredientsForModal.filter(i => i !== ingredient);
            } else {
                this.classList.add('selected');
                selectedIngredientsForModal.push(ingredient);
            }
        });
    });
}

// ========== QUICK ADD MODAL ==========
quickAddBtn.addEventListener('click', () => {
    quickAddModal.style.display = 'flex';
    initIngredientGrid();
});

closeModal.addEventListener('click', () => {
    quickAddModal.style.display = 'none';
    selectedIngredientsForModal = [];
});

// Close modal when clicking outside
quickAddModal.addEventListener('click', (e) => {
    if (e.target === quickAddModal) {
        quickAddModal.style.display = 'none';
        selectedIngredientsForModal = [];
    }
});

addIngredientsBtn.addEventListener('click', () => {
    selectedIngredients = [...new Set([...selectedIngredients, ...selectedIngredientsForModal])];
    updateIngredientChips();
    quickAddModal.style.display = 'none';
    selectedIngredientsForModal = [];
    filterRecipes();
});

// ========== UPDATE INGREDIENT CHIPS ==========
function updateIngredientChips() {
    ingredientChips.innerHTML = selectedIngredients.map(ing => `
        <div class="ingredient-chip">
            <span>${ing.charAt(0).toUpperCase() + ing.slice(1)}</span>
            <button class="remove-chip" onclick="removeIngredient('${ing}')">×</button>
        </div>
    `).join('');
}

function removeIngredient(ingredient) {
    selectedIngredients = selectedIngredients.filter(i => i !== ingredient);
    updateIngredientChips();
    filterRecipes();
}

// ========== SEARCH FUNCTIONALITY ==========
searchInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    if (value.length > 0) {
        const filtered = suggestions.filter(s => s.toLowerCase().includes(value));
        if (filtered.length > 0) {
            suggestionsDiv.innerHTML = filtered.map(s => 
                `<div class="suggestion-item" onclick="selectSuggestion('${s}')">
                    <i class="fas fa-search"></i>
                    <span>${s}</span>
                </div>`
            ).join('');
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    } else {
        suggestionsDiv.style.display = 'none';
    }
});

// Handle Enter key to add ingredient as chip
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const value = this.value.trim().toLowerCase();
        
        if (value) {
            // Add to selected ingredients if not already added
            if (!selectedIngredients.includes(value)) {
                selectedIngredients.push(value);
                updateIngredientChips();
                filterRecipes();
            }
            
            // Clear search input and hide suggestions
            this.value = '';
            suggestionsDiv.style.display = 'none';
        }
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
        suggestionsDiv.style.display = 'none';
    }
});

function selectSuggestion(text) {
    const ingredient = text.toLowerCase();
    
    // List of common ingredients - if suggestion matches, add as chip
    const commonIngredients = ['tomato', 'potato', 'onion', 'chicken', 'rice', 'pasta', 'cheese', 'egg', 'beans', 'lettuce', 'bell pepper', 'paneer', 'lentils'];
    
    if (commonIngredients.some(ing => ingredient.includes(ing))) {
        // It's an ingredient - add as chip
        if (!selectedIngredients.includes(ingredient)) {
            selectedIngredients.push(ingredient);
            updateIngredientChips();
            filterRecipes();
        }
        searchInput.value = '';
    } else {
        // It's a recipe name or general search
        searchInput.value = text;
        filterRecipes();
    }
    
    suggestionsDiv.style.display = 'none';
}

// ========== VOICE SEARCH ==========
voiceBtn.addEventListener('click', function() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        
        recognition.onstart = function() {
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            voiceBtn.style.animation = 'pulse 1s infinite';
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            filterRecipes();
        };
        
        recognition.onend = function() {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.style.animation = '';
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.style.animation = '';
        };
        
        recognition.start();
    } else {
        alert('Voice search is not supported in your browser. Please use Chrome, Edge, or Safari.');
    }
});

// ========== FILTER FUNCTIONALITY ==========
document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function() {
        const filterType = this.dataset.filter;
        const value = this.dataset.value;
        const checkbox = this.querySelector('input[type="checkbox"]');
        
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            checkbox.checked = false;
            const index = filters[filterType].indexOf(value);
            if (index > -1) filters[filterType].splice(index, 1);
        } else {
            this.classList.add('selected');
            checkbox.checked = true;
            
            // If selecting any time filter other than 'all', remove 'all'
            if (filterType === 'time' && value !== 'all') {
                const allOption = document.querySelector('.filter-option[data-value="all"]');
                if (allOption && allOption.classList.contains('selected')) {
                    allOption.classList.remove('selected');
                    allOption.querySelector('input').checked = false;
                    filters[filterType] = filters[filterType].filter(v => v !== 'all');
                }
            }
            
            // If selecting 'all', remove other time filters
            if (filterType === 'time' && value === 'all') {
                document.querySelectorAll('.filter-option[data-filter="time"]:not([data-value="all"])').forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('input').checked = false;
                });
                filters[filterType] = ['all'];
            } else {
                filters[filterType].push(value);
            }
        }
        
        filterRecipes();
    });
});

// ========== DISPLAY RECIPES ==========
function displayRecipes(recipesToShow) {
    if (recipesToShow.length === 0) {
        recipeGrid.style.display = 'none';
        noRecipes.style.display = 'block';
        return;
    }
    
    recipeGrid.style.display = 'grid';
    noRecipes.style.display = 'none';
    recipeGrid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-badge">${recipe.diet === 'veg' ? '🌱 VEG' : '🍗 NON-VEG'}</div>
                <div class="favorite-icon" onclick="toggleFavorite(${recipe.id}, this)">
    <i class="far fa-heart"></i>
</div>

            </div>
            <div class="recipe-info">
                <div class="recipe-title">${recipe.name}</div>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${recipe.cookTime}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-fire"></i>
                        <span>${recipe.calories} cal</span>
                    </div>
                </div>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="health-score">
                    <div class="health-label">
                        <span>Health Score</span>
                        <span><strong>${recipe.healthScore}%</strong></span>
                    </div>
                    <div class="health-bar">
                        <div class="health-fill" style="width: ${recipe.healthScore}%"></div>
                    </div>
                </div>
                <button class="view-recipe-btn" onclick="viewRecipe(${recipe.id})">
                    <i class="fas fa-eye"></i> View Recipe
                </button>
            </div>
        </div>
    `).join('');
    setTimeout(() => updateAllFavoriteIcons(), 100);
}
function shareRecipe(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  const text =
    `🍽️ ${recipe.name}\n` +
    `⏱️ ${recipe.cookTime} | 🔥 ${recipe.calories} cal\n` +
    `🧾 Ingredients: ${recipe.ingredients.join(", ")}`;

  // If your page has a real URL use that. If not, share only text.
  const url = window.location.href;

  // 1) Best: Native share (mobile + some desktop browsers)
  if (navigator.share) {
    navigator.share({
      title: recipe.name,
      text,
      url
    }).catch(() => {});
    return;
  }

  // 2) Fallback: copy to clipboard
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text + "\n" + url)
      .then(() => alert("✅ Recipe copied! Paste it anywhere to share."))
      .catch(() => alert("❌ Could not copy. Your browser blocked it."));
    return;
  }

  // 3) Last fallback: prompt
  prompt("Copy & share this:", text + "\n" + url);
}


// ========== FILTER RECIPES ==========
function filterRecipes() {
    let filtered = [...recipes];
    
    // Filter by ingredients
    if (selectedIngredients.length > 0) {
        filtered = filtered.filter(recipe => 
            selectedIngredients.some(ing => 
                recipe.ingredients.includes(ing)
            )
        );
    }
    // Apply other filters
for (const [filterType, values] of Object.entries(filters)) {
    if (values.length > 0 && !values.includes('all')) {
        // Special handling for allergies - EXCLUDE recipes with selected allergens
        if (filterType === 'allergy') {
            filtered = filtered.filter(recipe => {
                // Check if recipe has ANY of the selected allergens
                // If it does, exclude it (return false)
                return !recipe.allergies || !values.some(allergen => recipe.allergies.includes(allergen));
            });
        } else {
            // Normal filtering for other types
            filtered = filtered.filter(recipe => values.includes(recipe[filterType]));
        }
    }
}

    
    // Apply search
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    }
    
    displayRecipes(filtered);
}

// ========== VIEW RECIPE MODAL ==========
function viewRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('recipeModalBody');
    
    // Get health score color
    const healthColor = recipe.healthScore >= 70 ? '#10ac84' : 
                       recipe.healthScore >= 40 ? '#ffc107' : '#ff6b6b';
    
    // Check which ingredients user has
    const hasIngredients = recipe.ingredients.filter(ing => 
        selectedIngredients.includes(ing)
    );
    const needsIngredients = recipe.ingredients.filter(ing => 
        !selectedIngredients.includes(ing)
    );
    
    // Generate detailed recipe steps (you can customize these per recipe)
    const cookingSteps = [
        "Heat oil in a pan over medium flame and let it warm up for 30 seconds",
        "Add chopped onions and sauté until they turn golden brown (approximately 3-4 minutes)",
        "Add tomatoes, turmeric, chili powder, and salt. Cook until tomatoes become soft",
        "Add the main ingredients and mix well. Cover and cook for 8-10 minutes",
        "Garnish with fresh coriander leaves and serve hot with rice or roti"
    ];
    
    // Generate nutrition data
    const nutrition = {
        calories: recipe.calories,
        protein: Math.round(recipe.calories * 0.15 / 4) + 'g',
        carbs: Math.round(recipe.calories * 0.50 / 4) + 'g',
        fat: Math.round(recipe.calories * 0.35 / 9) + 'g',
        fiber: '3-5g'
    };
    
    modalBody.innerHTML = `
        <!-- Header with Image -->
        <div class="recipe-modal-header">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-hero-image">
            <div class="recipe-header-overlay">
                <h1 class="recipe-modal-title">${recipe.name}</h1>
                <div class="recipe-badges">
                    <span class="recipe-badge-modal">${recipe.cuisine.toUpperCase().replace('-', ' ')}</span>
                    <span class="recipe-badge-modal">${recipe.diet === 'veg' ? '🌱 VEGETARIAN' : '🍗 NON-VEG'}</span>
                    <span class="recipe-badge-modal">⭐ 4.5/5</span>
                </div>
            </div>
        </div>
        
        <!-- Quick Info Bar -->
        <div class="recipe-quick-info">
            <div class="info-item">
                <i class="fas fa-clock"></i>
                <span class="info-label">Total Time</span>
                <span class="info-value">${recipe.cookTime}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-fire"></i>
                <span class="info-label">Calories</span>
                <span class="info-value">${recipe.calories} cal</span>
            </div>
            <div class="info-item">
                <i class="fas fa-utensils"></i>
                <span class="info-label">Servings</span>
                <span class="info-value">2-3 people</span>
            </div>
            <div class="info-item">
                <i class="fas fa-chart-line"></i>
                <span class="info-label">Difficulty</span>
                <span class="info-value">Easy</span>
            </div>
            <div class="info-item modal-health-score">
                <span class="info-label">Health Score</span>
                <div class="circular-progress">
                    <canvas id="modalHealthCanvas" width="80" height="80"></canvas>
                    <span class="progress-text">${recipe.healthScore}%</span>
                </div>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="recipe-content">
            <!-- Ingredients Section -->
            <h2 class="section-title">
                <i class="fas fa-list-ul"></i>
                Ingredients (${recipe.ingredients.length} items)
            </h2>
            
            ${hasIngredients.length > 0 ? `
                <p style="color: #28a745; font-weight: 600; margin-bottom: 15px;">
                    ✅ You have ${hasIngredients.length} ingredient${hasIngredients.length > 1 ? 's' : ''}!
                </p>
            ` : ''}
            
            ${needsIngredients.length > 0 ? `
                <p style="color: #ffc107; font-weight: 600; margin-bottom: 15px;">
                    ⚠️ You need ${needsIngredients.length} more item${needsIngredients.length > 1 ? 's' : ''}
                </p>
            ` : ''}
            
            <div class="ingredients-list">
                ${recipe.ingredients.map(ing => {
                    const hasIt = selectedIngredients.includes(ing);
                    return `
                        <div class="ingredient-item ${hasIt ? 'has-ingredient' : 'needs-ingredient'}">
                            <input type="checkbox" class="ingredient-checkbox" ${hasIt ? 'checked' : ''}>
                            <span class="ingredient-name">${ing.charAt(0).toUpperCase() + ing.slice(1)}</span>
                            <span class="ingredient-quantity">200g</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <!-- Cooking Steps -->
            <h2 class="section-title">
                <i class="fas fa-fire"></i>
                How to Cook - Step by Step
            </h2>
            <div class="cooking-steps">
                ${cookingSteps.map((step, index) => `
                    <div class="step-item">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <p class="step-text">${step}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Nutrition Info -->
            <h2 class="section-title">
                <i class="fas fa-heart-pulse"></i>
                Nutrition Information
            </h2>
            <div class="nutrition-grid">
                <div class="nutrition-item">
                    <div class="nutrition-icon">🔥</div>
                    <div class="nutrition-label">Calories</div>
                    <div class="nutrition-value">${nutrition.calories}</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-icon">💪</div>
                    <div class="nutrition-label">Protein</div>
                    <div class="nutrition-value">${nutrition.protein}</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-icon">🍞</div>
                    <div class="nutrition-label">Carbs</div>
                    <div class="nutrition-value">${nutrition.carbs}</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-icon">🥑</div>
                    <div class="nutrition-label">Fat</div>
                    <div class="nutrition-value">${nutrition.fat}</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-icon">🌾</div>
                    <div class="nutrition-label">Fiber</div>
                    <div class="nutrition-value">${nutrition.fiber}</div>
                </div>
            </div>
            
            <!-- Tips & Variations -->
            <h2 class="section-title">
                <i class="fas fa-lightbulb"></i>
                Tips & Variations
            </h2>
            <div class="tips-list">
                <div class="tip-item">
                    <div class="tip-icon">💡</div>
                    <div class="tip-text">You can replace ${recipe.ingredients[0]} with alternative ingredients for different flavors</div>
                </div>
                <div class="tip-item">
                    <div class="tip-icon">💡</div>
                    <div class="tip-text">Add extra cheese or spices according to your taste preference</div>
                </div>
                <div class="tip-item">
                    <div class="tip-icon">💡</div>
                    <div class="tip-text">Store leftovers in an airtight container in the refrigerator for up to 2 days</div>
                </div>
            </div>
            
            <!-- Cooking Mistake Helper -->
            <h2 class="section-title">
                <i class="fas fa-exclamation-circle"></i>
                Quick Fix Guide
            </h2>
            <div class="mistake-helper">
                <div class="mistake-btn" onclick="alert('Fix: Add a boiled potato or squeeze some lemon juice to balance the saltiness!')">
                    <div class="mistake-title">🧂 Too Salty?</div>
                    <div class="mistake-fix">Click for solution</div>
                </div>
                <div class="mistake-btn" onclick="alert('Fix: Add yogurt, coconut milk, or sugar to reduce spiciness!')">
                    <div class="mistake-title">🌶️ Too Spicy?</div>
                    <div class="mistake-fix">Click for solution</div>
                </div>
                <div class="mistake-btn" onclick="alert('Fix: Lower the flame immediately and add a little water. Stir gently!')">
                    <div class="mistake-title">🔥 Burning?</div>
                    <div class="mistake-fix">Click for solution</div>
                </div>
                <div class="mistake-btn" onclick="alert('Fix: Simmer uncovered on low heat to thicken, or add cornstarch slurry!')">
                    <div class="mistake-title">💧 Too Watery?</div>
                    <div class="mistake-fix">Click for solution</div>
                </div>
            </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="recipe-actions">
            <button class="action-btn-primary" onclick="startCookingMode(${recipe.id})">
                <i class="fas fa-fire"></i>
                Start Cooking Mode
            </button>
            <button class="action-btn-outline" onclick="addToFavorites(${recipe.id})">
                <i class="fas fa-heart"></i>
                Add to Favorites
            </button>
            <button class="action-btn-outline" onclick="addToShoppingList(${recipe.id})">
                <i class="fas fa-shopping-cart"></i>
                Shopping List
            </button>
            <button class="action-btn-outline" onclick="shareRecipe(${recipe.id})">
                <i class="fas fa-share"></i>
                Share
            </button>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Draw health score circle
    setTimeout(() => {
        drawHealthCircle('modalHealthCanvas', recipe.healthScore, healthColor);
    }, 100);
}

// Draw circular health score
function drawHealthCircle(canvasId, score, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = 40;
    const centerY = 40;
    const radius = 35;
    const startAngle = 0;
    const endAngle = (score / 100) * 2 * Math.PI;
    
    // Clear canvas
    ctx.clearRect(0, 0, 80, 80);
    
    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Progress circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// Close recipe modal
document.getElementById('closeRecipeModal').addEventListener('click', () => {
    document.getElementById('recipeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
document.getElementById('recipeModal').addEventListener('click', (e) => {
    if (e.target.id === 'recipeModal') {
        document.getElementById('recipeModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Placeholder functions for action buttons
function startCookingMode(id) {
    alert('🍳 Starting Cooking Mode! Voice assistant will guide you step-by-step.\n\n(Feature coming in next section!)');
}

function addToFavorites(id) {
    alert('❤️ Recipe added to favorites!');
}

function addToShoppingList(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    
    // Get ingredients that user doesn't have
    const needsIngredients = recipe.ingredients.filter(ing => 
        !selectedIngredients.includes(ing)
    );
    
    // Add each ingredient to shopping list if not already there
    needsIngredients.forEach(ingredient => {
        const existing = shoppingList.find(item => 
            item.name.toLowerCase() === ingredient.toLowerCase()
        );
        
        if (!existing) {
            shoppingList.push({
                id: Date.now() + Math.random(),
                name: ingredient,
                category: categorizeIngredient(ingredient),
                checked: false,
                quantity: '1',
                addedFrom: recipe.name
            });
        }
    });
    
    // Save to localStorage
    localStorage.setItem('flavorfit_shopping', JSON.stringify(shoppingList));
    
    // Show success message
    alert(`🛒 Added ${needsIngredients.length} items to shopping list!\n\n${needsIngredients.join(', ')}`);
    
    // Update display if on shopping page
    displayShoppingList();
}

// Helper function to categorize ingredients
function categorizeIngredient(ingredient) {
    const ing = ingredient.toLowerCase();
    
    if (['tomato', 'potato', 'onion', 'carrot', 'lettuce', 'spinach', 'bell pepper'].some(v => ing.includes(v))) {
        return '🥬 Vegetables';
    } else if (['chicken', 'meat', 'fish', 'egg', 'bacon'].some(v => ing.includes(v))) {
        return '🍖 Protein';
    } else if (['milk', 'cheese', 'butter', 'cream', 'yogurt', 'paneer'].some(v => ing.includes(v))) {
        return '🥛 Dairy';
    } else if (['rice', 'pasta', 'bread', 'flour', 'noodles'].some(v => ing.includes(v))) {
        return '🌾 Grains';
    } else if (['oil', 'salt', 'pepper', 'turmeric', 'chili', 'garlic', 'ginger', 'cumin'].some(v => ing.includes(v))) {
        return '🧂 Spices & Condiments';
    } else {
        return '🛒 Other';
    }
}


// ========== CHATBOT ==========
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

// ========== CHATBOT RESPONSES ==========
const chatbotResponses = {
    "good recipe for": "Based on your preference, I recommend trying {cuisine} cuisine! Some popular dishes include Masala Dosa, Chicken Biryani, or Pasta Carbonara. Would you like to see the recipes?",
    "replace": "You can replace {ingredient} with several alternatives depending on your recipe. For example: use Greek yogurt instead of sour cream, honey instead of sugar, or tofu instead of paneer. What specific ingredient are you looking to replace?",
    "alternative to": "Great question! Here are some alternatives for {ingredient}: You can use applesauce instead of oil in baking, coconut milk instead of dairy milk, or chickpea flour instead of wheat flour. Need more specific suggestions?",
    "store": "To store {ingredient} properly: Keep vegetables in the crisper drawer, store spices in airtight containers away from light, and refrigerate dairy products at 4°C or below. Most fresh herbs last 1-2 weeks when stored properly.",
    "use instead": "Yes! You can definitely use {ingredient} instead of {other}. Just keep in mind the flavor and texture might vary slightly. For example, you can use buttermilk instead of yogurt, or olive oil instead of butter in most recipes.",
    "substitute for": "Here are some good substitutes for {ingredient} in {dish}: almond milk for dairy milk, quinoa for rice, or zucchini noodles for pasta. The key is matching the texture and moisture content!",
    "last in": "{ingredient} typically lasts: Leafy greens 3-5 days, eggs 3-5 weeks, milk 5-7 days, cooked rice 4-6 days. Always check for signs of spoilage like odd smell or discoloration before using!",
    "freeze": "Yes, you can freeze {ingredient}! Most vegetables, meats, and cooked dishes freeze well for 3-6 months. Pro tip: Freeze in portion sizes and label with dates. Avoid freezing lettuce, cucumbers, or cream-based sauces.",
    "good brand": "For {ingredient}, popular brands include: Amul for dairy, Everest for spices, Tata for pulses, and local organic options. Quality matters more than brand - look for fresh, well-packaged products with good reviews!",
    "same as": "{ingredient} and {other} are similar but not exactly the same. They may have different flavors, textures, or uses. For example, baking soda and baking powder both leaven dough, but work differently. Need clarification on specific ingredients?",
    "don't have": "No worries! If you don't have {ingredient}, you can: (1) Use a substitute, (2) Omit it if not essential, or (3) Check if you can buy it nearby. What ingredient are you missing? I can suggest alternatives!",
    "shortcut for": "Here's a quick shortcut for {technique}: Use a pressure cooker for faster cooking, pre-chop vegetables in batches, or use store-bought bases when in a hurry. Shortcuts can save 30-50% cooking time!",
    "skip": "You can skip {ingredient} if it's not a key component. Check if it's for flavor (can skip) or structure (important). For example, you can skip garnishes but not eggs in a cake. What ingredient are you considering skipping?",
    "recipe": "That sounds delicious! I can help you find the recipe for {dish}. It typically includes ingredients like rice, vegetables, spices, and takes about 30-45 minutes to prepare. Would you like the detailed step-by-step recipe?",
    "hello": "Hello! 👋 How can I help you today? Ask me about recipes, ingredients, cooking tips, or alternatives!",
    "hi": "Hi there! 😊 I'm here to help with all your cooking questions. What would you like to know?",
    "hey": "Hey! 👋 Ready to cook something amazing? Ask me anything about recipes or ingredients!",
    "help": "I can help you with:\n🔹 Recipe recommendations\n🔹 Ingredient substitutions\n🔹 Storage tips\n🔹 Cooking shortcuts\n🔹 Dietary alternatives\n\nJust ask me anything!",
    "thank": "You're welcome! 😊 Happy cooking! Let me know if you need anything else.",
    "thanks": "You're welcome! 🍳 Feel free to ask more questions anytime!",
    "bye": "Goodbye! 👋 Come back anytime you need cooking help. Happy cooking!",
    "what can you do": "I can help you with recipe suggestions, ingredient substitutions, storage tips, cooking techniques, and answer questions about dietary alternatives. Try asking me something like 'What's a good substitute for eggs?' or 'How do I store tomatoes?'",
    "how are you": "I'm doing great! 😊 Ready to help you create delicious meals. What are you cooking today?"
};

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(chatbotResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return "I'm not sure about that, but I'm learning! Try asking about:\n• Recipe recommendations\n• Ingredient substitutions\n• Storage tips\n• Cooking shortcuts\n• Dietary alternatives\n\nI'm here to help! 😊";
}

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
        </div>
        <div class="message-content">${content}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 600);
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// ========== INITIAL LOAD ==========
displayRecipes(recipes);

// ========== ADD SOME COOL EFFECTS ==========
// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation to recipe cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe recipe cards when they appear
setTimeout(() => {
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}, 100);
// ========== COOKING MODE - VOICE ASSISTED ==========

let currentRecipe = null;
let currentStepIndex = 0;
let cookingSteps = [];
let isPaused = false;
let timerInterval = null;
let timerSeconds = 0;
let speechSynthesis = window.speechSynthesis;
let recognition = null;

// Initialize Speech Recognition
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
}

// Start Cooking Mode
function startCookingMode(recipeId) {
    currentRecipe = recipes.find(r => r.id === recipeId);
    if (!currentRecipe) return;
    
    // Close recipe modal
    document.getElementById('recipeModal').style.display = 'none';
    
    // Define cooking steps (you can customize per recipe)
    cookingSteps = [
        { text: "Heat oil in a pan over medium flame and let it warm up for 30 seconds", time: 30 },
        { text: "Add chopped onions and sauté until they turn golden brown. This takes approximately 3 to 4 minutes", time: 240 },
        { text: "Add tomatoes, turmeric powder, chili powder, and salt. Cook until tomatoes become soft", time: 180 },
        { text: "Add the main ingredients and mix well. Cover and cook for 8 to 10 minutes", time: 600 },
        { text: "Garnish with fresh coriander leaves and serve hot with rice or roti", time: 0 }
    ];
    
    currentStepIndex = 0;
    isPaused = false;
    
    // Show cooking mode modal
    const modal = document.getElementById('cookingModeModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Load recipe data
    document.getElementById('cookingRecipeTitle').textContent = currentRecipe.name;
    loadIngredients();
    loadAllSteps();
    showCurrentStep();
    
    // Speak welcome message
    speak(`Let's cook ${currentRecipe.name}. I'll guide you through each step. Say next when you're ready to continue.`);
}

// Load Ingredients Checklist
function loadIngredients() {
    const list = document.getElementById('cookingIngredientsList');
    list.innerHTML = currentRecipe.ingredients.map((ing, index) => `
        <div class="cooking-ingredient-item" id="ingredient-${index}">
            <input type="checkbox" onchange="toggleIngredient(${index})">
            <span>${ing.charAt(0).toUpperCase() + ing.slice(1)}</span>
        </div>
    `).join('');
}

function toggleIngredient(index) {
    document.getElementById(`ingredient-${index}`).classList.toggle('checked');
}

// Load All Steps
function loadAllSteps() {
    const list = document.getElementById('allStepsList');
    list.innerHTML = cookingSteps.map((step, index) => `
        <div class="step-mini-card ${index === 0 ? 'active' : ''}" id="mini-step-${index}" onclick="jumpToStep(${index})">
            <div class="step-mini-number">Step ${index + 1}</div>
            <div class="step-mini-text">${step.text}</div>
        </div>
    `).join('');
}

// Toggle All Steps Visibility
document.getElementById('toggleStepsBtn').addEventListener('click', function() {
    const stepsList = document.getElementById('allStepsList');
    const isVisible = stepsList.style.display !== 'none';
    stepsList.style.display = isVisible ? 'none' : 'grid';
    this.innerHTML = isVisible ? 
        '<i class="fas fa-list"></i> Show All Steps' : 
        '<i class="fas fa-list"></i> Hide All Steps';
});

// Show Current Step
function showCurrentStep() {
    const step = cookingSteps[currentStepIndex];
    
    // Update step display
    document.getElementById('currentStepNumber').textContent = `Step ${currentStepIndex + 1}`;
    document.getElementById('currentStepText').textContent = step.text;
    
    // Update progress
    const progress = ((currentStepIndex + 1) / cookingSteps.length) * 100;
    document.getElementById('cookingProgressFill').style.width = progress + '%';
    document.getElementById('cookingProgressText').textContent = 
        `Step ${currentStepIndex + 1} of ${cookingSteps.length}`;
    
    // Update navigation buttons
    document.getElementById('prevStepBtn').disabled = currentStepIndex === 0;
    document.getElementById('nextStepBtn').textContent = 
        currentStepIndex === cookingSteps.length - 1 ? 'Finish' : 'Next';
    
    // Update mini cards
    document.querySelectorAll('.step-mini-card').forEach((card, index) => {
        card.classList.remove('active', 'completed');
        if (index === currentStepIndex) {
            card.classList.add('active');
        } else if (index < currentStepIndex) {
            card.classList.add('completed');
        }
    });
    
    // Start timer if step has time
    if (step.time > 0) {
        startTimer(step.time);
    } else {
        document.getElementById('cookingTimer').style.display = 'none';
    }
    
    // Speak the step
    if (!isPaused) {
        speak(step.text);
    }
}

// Timer Functions
function startTimer(seconds) {
    timerSeconds = seconds;
    document.getElementById('cookingTimer').style.display = 'flex';
    updateTimerDisplay();
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            speak("Time is up! You can move to the next step.");
            playBeep();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function playBeep() {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

document.getElementById('timerSkipBtn').addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('cookingTimer').style.display = 'none';
    speak("Timer skipped. Ready for next step?");
});

// Navigation
document.getElementById('nextStepBtn').addEventListener('click', () => {
    if (currentStepIndex < cookingSteps.length - 1) {
        currentStepIndex++;
        showCurrentStep();
    } else {
        finishCooking();
    }
});

document.getElementById('prevStepBtn').addEventListener('click', () => {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        showCurrentStep();
    }
});

function jumpToStep(index) {
    currentStepIndex = index;
    showCurrentStep();
}

function finishCooking() {
    if (timerInterval) clearInterval(timerInterval);
    speak(`Congratulations! You've successfully cooked ${currentRecipe.name}. Enjoy your meal!`);
    
    setTimeout(() => {
        document.getElementById('cookingModeModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Ask for rating
        const rating = confirm(`🎉 Great job! Would you like to rate this recipe?`);
        if (rating) {
            alert('⭐ Rating feature coming soon! Thanks for cooking with FlavorFit!');
        }
    }, 3000);
}

// Exit Cooking Mode
document.getElementById('exitCookingBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to exit cooking mode?')) {
        if (timerInterval) clearInterval(timerInterval);
        speechSynthesis.cancel();
        document.getElementById('cookingModeModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Text-to-Speech Function
function speak(text) {
    speechSynthesis.cancel(); // Cancel any ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Try to use a better voice if available
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
        voice.name.includes('Google') || voice.name.includes('Female')
    );
    if (preferredVoice) utterance.voice = preferredVoice;
    
    speechSynthesis.speak(utterance);
}

// Voice Recognition - Listen Button
document.getElementById('voiceListenBtn').addEventListener('click', () => {
    if (!recognition) {
        alert('Voice recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }
    
    const voiceStatus = document.getElementById('voiceStatus');
    voiceStatus.classList.add('listening');
    document.querySelector('.voice-text').textContent = 'Listening...';
    
    recognition.start();
});

// Voice Recognition Handlers
if (recognition) {
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Heard:', transcript);
        
        const voiceStatus = document.getElementById('voiceStatus');
        voiceStatus.classList.remove('listening');
        document.querySelector('.voice-text').textContent = `You said: "${transcript}"`;
        
        handleVoiceCommand(transcript);
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        const voiceStatus = document.getElementById('voiceStatus');
        voiceStatus.classList.remove('listening');
        document.querySelector('.voice-text').textContent = 'Say "Next" or click microphone to speak';
    };
    
    recognition.onend = () => {
        const voiceStatus = document.getElementById('voiceStatus');
        voiceStatus.classList.remove('listening');
    };
}

// ========== VOICE COMMAND HANDLER (15 Commands) ==========
function handleVoiceCommand(command) {
    // 1. NEXT / NEXT STEP
    if (command.includes('next') || command.includes('continue')) {
        speak('Moving to next step');
        setTimeout(() => {
            if (currentStepIndex < cookingSteps.length - 1) {
                currentStepIndex++;
                showCurrentStep();
            } else {
                speak('This is the last step. Say finish to complete.');
            }
        }, 1000);
    }
    
    // 2. PREVIOUS / GO BACK
    else if (command.includes('previous') || command.includes('back') || command.includes('last step')) {
        if (currentStepIndex > 0) {
            speak('Going back to previous step');
            setTimeout(() => {
                currentStepIndex--;
                showCurrentStep();
            }, 1000);
        } else {
            speak('This is the first step. Cannot go back.');
        }
    }
    
    // 3. REPEAT / SAY AGAIN
    else if (command.includes('repeat') || command.includes('again') || command.includes('what')) {
        speak('Let me repeat that');
        setTimeout(() => {
            speak(cookingSteps[currentStepIndex].text);
        }, 1000);
    }
    
    // 4. PAUSE
    else if (command.includes('pause') || command.includes('stop') || command.includes('wait')) {
        isPaused = true;
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        speechSynthesis.cancel();
        speak('Paused. Say resume when you are ready to continue.');
    }
    
    // 5. RESUME / CONTINUE
    else if (command.includes('resume') || command.includes('start again')) {
        isPaused = false;
        speak('Resuming cooking. Here is the current step.');
        setTimeout(() => showCurrentStep(), 1000);
    }
    
    // 6. HELP / I NEED HELP
    else if (command.includes('help') || command.includes('assist')) {
        speak('I can help you! You can say: next step, previous, repeat, pause, resume, what ingredients, which step, how much time left, start over, or describe your problem like too salty or its burning.');
    }
    
    // 7. IT'S BURNING / BURNING
    else if (command.includes('burn')) {
        handleEmergency('burning');
    }
    
    // 8. TOO SALTY
    else if (command.includes('salty') || command.includes('salt')) {
        handleEmergency('salty');
    }
    
    // 9. TOO SPICY
    else if (command.includes('spicy') || command.includes('hot')) {
        handleEmergency('spicy');
    }
    
    // 10. WHAT INGREDIENTS / SHOW INGREDIENTS
    else if (command.includes('ingredient')) {
        const ingredientList = currentRecipe.ingredients.join(', ');
        speak(`You need the following ingredients: ${ingredientList}`);
    }
    
    // 11. WHICH STEP / WHERE AM I
    else if (command.includes('which step') || command.includes('where am i') || command.includes('current step')) {
        speak(`You are on step ${currentStepIndex + 1} of ${cookingSteps.length}. ${cookingSteps[currentStepIndex].text}`);
    }
    
    // 12. HOW MUCH TIME / TIME LEFT
    else if (command.includes('time left') || command.includes('how long') || command.includes('how much time')) {
        if (timerSeconds > 0) {
            const minutes = Math.floor(timerSeconds / 60);
            const seconds = timerSeconds % 60;
            if (minutes > 0) {
                speak(`You have ${minutes} minute${minutes > 1 ? 's' : ''} and ${seconds} seconds remaining.`);
            } else {
                speak(`You have ${seconds} seconds remaining.`);
            }
        } else {
            speak('No timer is currently running.');
        }
    }
    
    // 13. HOW MANY STEPS / STEPS LEFT
    else if (command.includes('how many steps') || command.includes('steps left')) {
        const stepsLeft = cookingSteps.length - currentStepIndex - 1;
        if (stepsLeft > 0) {
            speak(`You have ${stepsLeft} step${stepsLeft > 1 ? 's' : ''} left after this one.`);
        } else {
            speak('This is the final step. You are almost done!');
        }
    }
    
    // 14. START OVER / RESTART
    else if (command.includes('start over') || command.includes('restart') || command.includes('beginning')) {
        if (confirm('Restart from step 1?')) {
            currentStepIndex = 0;
            speak('Restarting from the beginning.');
            setTimeout(() => showCurrentStep(), 1000);
        }
    }
    
    // 15. EXIT / STOP COOKING / FINISH
    else if (command.includes('exit') || command.includes('quit') || command.includes('finish')) {
        if (currentStepIndex === cookingSteps.length - 1) {
            finishCooking();
        } else {
            speak('Say next to continue, or say exit cooking to close.');
        }
    }
    
    // UNKNOWN COMMAND
    else {
        speak("I didn't understand that. You can say: next, previous, repeat, pause, help, what ingredients, which step, or describe your problem.");
    }
}

// ========== EMERGENCY HELP HANDLER ==========
function handleEmergency(type) {
    let solution = '';
    
    switch(type) {
        case 'burning':
            solution = 'Quick! Lower the flame immediately and add a little water. Stir gently to prevent sticking. Do not panic, everything will be okay.';
            break;
        case 'salty':
            solution = 'Add a boiled potato to absorb excess salt, or squeeze some lemon juice to balance the saltiness. You can also add a pinch of sugar.';
            break;
        case 'spicy':
            solution = 'Add yogurt, coconut milk, or a little sugar to reduce the spiciness. Dairy products work best to neutralize heat.';
            break;
        case 'watery':
            solution = 'Simmer uncovered on low heat to reduce liquid and thicken the gravy. You can also add cornstarch mixed with water.';
            break;
    }
    
    speak(solution);
    
    // Show visual alert
    alert(`🆘 Quick Fix:\n\n${solution}`);
}

console.log('🎙️ Voice-Assisted Cooking Mode loaded! Ready to cook!');


console.log('🎨 FlavorFit loaded successfully! Enjoy cooking! 🍳');


// ========== PAGE NAVIGATION ==========
function showPage(page) {
    console.log('📄 Showing page:', page);
    
    // Get all sections
    const mainContent = document.getElementById('mainContent');
    const favoritesSection = document.getElementById('favoritesSection');
    const shoppingSection = document.getElementById('shoppingSection');
    const dietSection = document.getElementById('dietSection');
    
    // Hide all sections
    if (mainContent) mainContent.style.display = 'none';
    if (favoritesSection) favoritesSection.style.display = 'none';
    if (shoppingSection) shoppingSection.style.display = 'none';
    if (dietSection) dietSection.style.display = 'none';
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected page
    if (page === 'home') {
        if (mainContent) {
            mainContent.style.display = 'block';
            filterRecipes(); // Refresh recipe display
        }
        document.querySelectorAll('.nav-item')[0]?.classList.add('active');
    } else if (page === 'favorites') {
        if (favoritesSection) {
            favoritesSection.style.display = 'block';
            displayFavorites(); // Refresh favorites
        }
        document.querySelectorAll('.nav-item')[3]?.classList.add('active');
    } else if (page === 'shopping') {
        document.getElementById('shoppingSection').style.display = 'block';
        document.querySelectorAll('.nav-item')[2].classList.add('active');
    } else if (page === 'diet') {
        document.getElementById('dietSection').style.display = 'block';
        document.querySelectorAll('.nav-item')[1].classList.add('active');
    }
}

// ========== FAVORITES SYSTEM (CORRECT & CLEAN) ==========
let favoriteRecipes = [];

// Favorites are now stored in memory only (no localStorage)
function loadFavoritesFromStorage() {
    // Do nothing - favorites stay in memory during session
    console.log('✅ Favorites in memory:', favoriteRecipes);
}

// Save favorites to memory only
function saveFavoritesToStorage() {
    // Do nothing - favorites already in memory
    console.log('💾 Favorites stored in memory:', favoriteRecipes);
}

/// Toggle favorite
function toggleFavorite(id, element) {
    const icon = element.querySelector('i');
    const index = favoriteRecipes.indexOf(id);

    if (index > -1) {
        favoriteRecipes.splice(index, 1);
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
    } else {
        favoriteRecipes.push(id);
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#ff6b9d';
    }

    saveFavoritesToStorage();
    
    // Update all favorite icons across the page
    updateAllFavoriteIcons();
    
    // If we're on favorites page, refresh it
    const favSection = document.getElementById('favoritesSection');
    if (favSection && favSection.style.display !== 'none') {
        displayFavorites();
    }
}

// Update all favorite icons on the page
function updateAllFavoriteIcons() {
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        const card = icon.closest('.recipe-card');
        if (card) {
            // Try to get recipe ID from the view button
            const viewBtn = card.querySelector('.view-recipe-btn');
            if (viewBtn) {
                const onclickAttr = viewBtn.getAttribute('onclick');
                const match = onclickAttr?.match(/viewRecipe\((\d+)\)/);
                if (match) {
                    const recipeId = parseInt(match[1]);
                    const heartIcon = icon.querySelector('i');
                    
                    if (favoriteRecipes.includes(recipeId)) {
                        heartIcon.classList.remove('far');
                        heartIcon.classList.add('fas');
                        heartIcon.style.color = '#ff6b9d';
                    } else {
                        heartIcon.classList.remove('fas');
                        heartIcon.classList.add('far');
                        heartIcon.style.color = '';
                    }
                }
            }
        }
    });
}
// Display favorites
function displayFavorites() {
     if (typeof recipes === 'undefined' || !Array.isArray(recipes)) {
        console.error('❌ recipes array not loaded yet');
        return;
    }
    const grid = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('favoritesEmpty');
    const countDisplay = document.getElementById('favoritesCount');
    
    const favRecipes = recipes.filter(r => favoriteRecipes.includes(r.id));
    
    countDisplay.textContent = `${favRecipes.length} recipe${favRecipes.length !== 1 ? 's' : ''}`;
    
    if (favRecipes.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        grid.innerHTML = favRecipes.map(recipe => `
            <div class="recipe-card">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="recipe-badge">${recipe.diet === 'veg' ? '🌱 VEG' : '🍗 NON-VEG'}</div>
                   <div class="favorite-icon" onclick="toggleFavorite(${recipe.id}, this)">
                        <i class="fas fa-heart" style="color: #ff6b9d;"></i>
                    </div>
                </div>
                <div class="recipe-info">
                    <div class="recipe-title">${recipe.name}</div>
                    <div class="recipe-meta">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${recipe.cookTime}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-fire"></i>
                            <span>${recipe.calories} cal</span>
                        </div>
                    </div>
                    <div class="recipe-tags">
                        ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="view-recipe-btn" onclick="viewRecipe(${recipe.id})">
                        <i class="fas fa-eye"></i> View Recipe
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Clear all favorites
function clearAllFavorites() {
    if (confirm('Remove all favorites?')) {
        favoriteRecipes = [];
        saveFavoritesToStorage();
        displayFavorites();
    }
}
function saveShoppingList() {
  localStorage.setItem('flavorfit_shopping', JSON.stringify(shoppingList));
}

//clearing shopping list
function clearShoppingList() {
  if (!confirm('Clear entire shopping list?')) return;

  // 1) clear in-memory array
  shoppingList = [];

  // 2) clear localStorage (this is the important part)
  localStorage.removeItem('flavorfit_shopping');

  // 3) refresh UI
  displayShoppingList();
}


// Load favorites on page load
loadFavoritesFromStorage();


// Category mapping
const ingredientCategories = {
    vegetables: ['potato', 'tomato', 'onion', 'lettuce', 'spinach', 'bell pepper', 'cucumber', 'carrot', 'beans', 'peas'],
    dairy: ['milk', 'cheese', 'paneer', 'butter', 'cream', 'yogurt', 'ghee'],
    grains: ['rice', 'flour', 'bread', 'pasta', 'noodles', 'oats'],
    protein: ['chicken', 'egg', 'tofu', 'lentils', 'chickpeas'],
    spices: ['turmeric', 'chili', 'cumin', 'curry leaves', 'cinnamon', 'cardamom', 'pepper'],
    others: []
};

// Shopping list stored in memory only (no localStorage)
function loadShoppingList() {
    const saved = localStorage.getItem('flavorfit_shopping');
    if (saved) {
        shoppingList = JSON.parse(saved);
        console.log('✅ Loaded shopping list:', shoppingList.length, 'items');
    }
    displayShoppingList();
}

// Add recipe ingredients to shopping list
function addToShoppingList(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    recipe.ingredients.forEach(ingredient => {
        const existing = shoppingList.find(item => item.name === ingredient);
        if (existing) {
            existing.quantity += 1;
        } else {
            shoppingList.push({
                name: ingredient,
                quantity: 1,
                checked: false,
                category: getCategoryForIngredient(ingredient)
            });
        }
    });
    
    saveShoppingList();
    alert(`Added ingredients from "${recipe.name}" to shopping list!`);
}

// Get category for ingredient
function getCategoryForIngredient(ingredient) {
    const lowerIngredient = ingredient.toLowerCase();
    for (const [category, items] of Object.entries(ingredientCategories)) {
        if (items.some(item => lowerIngredient.includes(item))) {
            return category;
        }
    }
    return 'others';
}

// Display shopping list
function displayShoppingList() {
    const container = document.getElementById('shoppingCategories');
    const emptyState = document.getElementById('shoppingEmpty');
    const totalItemsEl = document.getElementById('totalItems');
    const checkedItemsEl = document.getElementById('checkedItems');
    const pendingItemsEl = document.getElementById('pendingItems');
    
    if (!container) return;
    
    // Update stats
    const totalItems = shoppingList.length;
    const checkedItems = shoppingList.filter(item => item.checked).length;
    const pendingItems = totalItems - checkedItems;
    
    totalItemsEl.textContent = totalItems;
    checkedItemsEl.textContent = checkedItems;
    pendingItemsEl.textContent = pendingItems;
    
    if (shoppingList.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    container.style.display = 'grid';
    
    // Group by category
    const grouped = {
        vegetables: [],
        dairy: [],
        grains: [],
        protein: [],
        spices: [],
        others: []
    };
    
   shoppingList.forEach(item => {
  const rawCat = (item.category || '').toString().toLowerCase().trim();

  // supports both: "vegetables" AND "🥬 Vegetables"
  const cleanedCat =
    rawCat.includes('veg') ? 'vegetables' :
    rawCat.includes('dairy') ? 'dairy' :
    rawCat.includes('grain') ? 'grains' :
    rawCat.includes('protein') ? 'protein' :
    rawCat.includes('spice') ? 'spices' :
    rawCat;

  const cat = grouped[cleanedCat] ? cleanedCat : 'others';
  grouped[cat].push(item);
});

    
    // Create HTML
    const categoryIcons = {
        vegetables: '🥬',
        dairy: '🥛',
        grains: '🌾',
        protein: '🍖',
        spices: '🌶️',
        others: '🛒'
    };
    
    const categoryNames = {
        vegetables: 'Vegetables',
        dairy: 'Dairy & Milk Products',
        grains: 'Grains & Breads',
        protein: 'Protein',
        spices: 'Spices & Herbs',
        others: 'Others'
    };
    
    let html = '';
    Object.keys(grouped).forEach(category => {
        if (grouped[category].length > 0) {
            html += `
                <div class="category-section">
                    <div class="category-header">
                        <span class="category-icon">${categoryIcons[category]}</span>
                        <h3>${categoryNames[category]}</h3>
                        <span>(${grouped[category].length})</span>
                    </div>
                    <div class="category-items">
                        ${grouped[category].map((item, index) => `
                            <div class="shopping-item ${item.checked ? 'checked' : ''}" onclick="toggleShoppingItem('${item.name}')">
                                <div class="item-checkbox">
                                    ${item.checked ? '<i class="fas fa-check"></i>' : ''}
                                </div>
                                <div class="item-name">${item.name}</div>
                                <div class="item-quantity">x${item.quantity}</div>
                                <button class="remove-item-btn" onclick="event.stopPropagation(); removeShoppingItem('${item.name}')">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = html;
}

// Toggle shopping item checked state
function toggleShoppingItem(itemName) {
    const item = shoppingList.find(i => i.name === itemName);
    if (item) {
        item.checked = !item.checked;
        saveShoppingList();
        displayShoppingList();
    }
}

// Remove shopping item
function removeShoppingItem(itemName) {
    shoppingList = shoppingList.filter(item => item.name !== itemName);
    saveShoppingList();
    displayShoppingList();
}

// Clear all shopping list
function clearShoppingList() {
  if (!confirm('Clear entire shopping list?')) return;

  shoppingList = [];
  saveShoppingList();     // writes empty array to storage
  displayShoppingList();  // refresh UI
}


// Load shopping list on page load
loadShoppingList();

console.log('✅ Shopping list system ready!');

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 FlavorFit initializing...');
    
    // Load initial data
    loadFavoritesFromStorage();
    loadShoppingList();
    
    // Display home page recipes
    displayRecipes(recipes);
    
    // Update all favorite icons
    updateAllFavoriteIcons();
    
    // Set home as active page
    showPage('home');
    
    console.log('✅ FlavorFit loaded successfully! Enjoy cooking! 🍳');
});
// ========== NAVIGATION CLICK HANDLERS ==========
document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const pages = ['home', 'diet', 'shopping', 'favorites'];
        showPage(pages[index]);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    loadFavoritesFromStorage();
});
// Add manual item to shopping list
function addManualItem() {
    const input = document.getElementById('manualItemInput');
    const itemName = input.value.trim();
    
    if (!itemName) {
        alert('Please enter an item name!');
        return;
    }
    
    // Check if already exists
    const existing = shoppingList.find(item => 
        item.name.toLowerCase() === itemName.toLowerCase()
    );
    
    if (existing) {
        alert('This item is already in your shopping list!');
        return;
    }
    
    // Add to shopping list
    shoppingList.push({
        id: Date.now() + Math.random(),
        name: itemName,
        category: categorizeIngredient(itemName),
        checked: false,
        quantity: '1',
        addedFrom: 'Manual Entry'
    });
    
    // Save and refresh
    localStorage.setItem('flavorfit_shopping', JSON.stringify(shoppingList));
    displayShoppingList();
    
    // Clear input
    input.value = '';
    
    // Show success
    input.placeholder = '✓ Added! Add another...';
    setTimeout(() => {
        input.placeholder = 'Add item (e.g., Milk, Eggs, Bread...)';
    }, 2000);
}

// Allow Enter key to add item
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('manualItemInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addManualItem();
            }
        });
    }
});
// ========== DIET/MEAL PLAN FUNCTIONS ==========
// Quick goal setter from cards
function setQuickGoal(goal) {
    document.getElementById('userGoal').value = goal;
    
    // Scroll to form
    document.getElementById('userAge').focus();
    
    // Visual feedback
    const goalNames = {
        'loss': '🔥 Weight Loss',
        'maintain': '💪 Stay Healthy',
        'gain': '🏋️ Muscle Gain',
        'auto': '🎯 Auto Detect'
    };
    
    alert(`Goal set to: ${goalNames[goal]}\n\nNow fill in your details and click "Generate My Perfect Meal Plan"!`);
}

// Calculate BMI and calorie needs
function calculateDietProfile() {
    const age = parseInt(document.getElementById('userAge').value);
    const weight = parseInt(document.getElementById('userWeight').value);
    const height = parseInt(document.getElementById('userHeight').value);
    const activity = document.getElementById('activityLevel').value;
    const goal = document.getElementById('userGoal').value;
    const dietPref = document.getElementById('dietPref').value;
    
    if (!age || !weight || !height) {
        alert('⚠️ Please fill in Age, Weight, and Height!');
        return null;
    }
    
    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    // Determine BMI category
    let category = '';
    let suggestedGoal = goal;
    
    if (bmi < 18.5) {
        category = 'Underweight';
        if (goal === 'auto') suggestedGoal = 'gain';
    } else if (bmi < 25) {
        category = 'Normal';
        if (goal === 'auto') suggestedGoal = 'maintain';
    } else if (bmi < 30) {
        category = 'Overweight';
        if (goal === 'auto') suggestedGoal = 'loss';
    } else {
        category = 'Obese';
        if (goal === 'auto') suggestedGoal = 'loss';
    }
    
    // Calculate BMR (Mifflin-St Jeor Equation - simplified for both genders)
    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    
    // Activity multiplier
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725
    };
    
    let dailyCalories = bmr * activityMultipliers[activity];
    
    // Adjust for goal
    if (suggestedGoal === 'loss') {
        dailyCalories -= 500; // 500 calorie deficit
    } else if (suggestedGoal === 'gain') {
        dailyCalories += 500; // 500 calorie surplus
    }
    
    dailyCalories = Math.round(dailyCalories);
    
    // Display BMI result
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('calorieTarget').textContent = dailyCalories + ' kcal';
    
    const goalEmojis = {
        'loss': '🔥',
        'maintain': '💪',
        'gain': '🏋️'
    };
    
    const goalText = suggestedGoal === 'loss' ? 'Weight Loss' : 
                     suggestedGoal === 'gain' ? 'Muscle Gain' : 'Maintain Weight';
    
    document.getElementById('recommendedGoal').textContent = goalText + ' ' + goalEmojis[suggestedGoal];
    document.getElementById('bmiResult').style.display = 'block';
    
    return {
        bmi,
        category,
        goal: suggestedGoal,
        dailyCalories,
        dietPref
    };
}

// Generate weekly meal plan
function generateWeeklyPlan() {
    const profile = calculateDietProfile();
    if (!profile) return;
    
    userDietProfile = profile;
    weeklyMealPlan = [];
    
    // Filter recipes based on diet preference
    let availableRecipes = [...recipes];
    
    if (profile.dietPref !== 'any') {
        availableRecipes = recipes.filter(r => r.diet === profile.dietPref);
    }
    
    if (availableRecipes.length < 10) {
        alert('Not enough recipes for your diet preference. Showing all recipes.');
        availableRecipes = [...recipes];
    }
    
    // Calculate meal calorie distribution
    const breakfastCal = Math.round(profile.dailyCalories * 0.25); // 25% breakfast
    const lunchCal = Math.round(profile.dailyCalories * 0.40);     // 40% lunch
    const dinnerCal = Math.round(profile.dailyCalories * 0.35);    // 35% dinner
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    days.forEach(day => {
        // Select random recipes for each meal
        const breakfast = selectRecipeByCalories(availableRecipes, breakfastCal, 'breakfast');
        const lunch = selectRecipeByCalories(availableRecipes, lunchCal, 'lunch');
        const dinner = selectRecipeByCalories(availableRecipes, dinnerCal, 'dinner');
        
        weeklyMealPlan.push({
            day,
            breakfast,
            lunch,
            dinner,
            totalCalories: breakfast.calories + lunch.calories + dinner.calories
        });
    });
    
    displayWeeklyPlan();
}

// Select recipe by calorie range
function selectRecipeByCalories(recipeList, targetCalories, mealTime) {
    // Filter by meal time if possible
    let filtered = recipeList.filter(r => r.time === mealTime || r.time === 'quick');
    
    if (filtered.length === 0) filtered = recipeList;
    
    // Find closest calorie match
    let closest = filtered[Math.floor(Math.random() * filtered.length)]; // Random start
    let minDiff = Math.abs(closest.calories - targetCalories);
    
    filtered.forEach(recipe => {
        const diff = Math.abs(recipe.calories - targetCalories);
        if (diff < minDiff) {
            minDiff = diff;
            closest = recipe;
        }
    });
    
    return closest;
}

// Display weekly meal plan
function displayWeeklyPlan() {
    document.getElementById('dietEmptyState').style.display = 'none';
    document.getElementById('weeklyPlanContainer').style.display = 'block';
    
    const container = document.getElementById('weeklyPlanTable');
    
    const goalEmojis = {
        'loss': '🔥',
        'maintain': '💪',
        'gain': '🏋️'
    };
    
    const goalText = userDietProfile.goal === 'loss' ? 'Weight Loss' : 
                     userDietProfile.goal === 'gain' ? 'Muscle Gain' : 'Maintain Weight';
    
    document.getElementById('recommendedGoal').textContent = goalText + ' ' + goalEmojis[userDietProfile.goal];
    
    let html = '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">';
    
    weeklyMealPlan.forEach((dayPlan, index) => {
        const dayColors = ['#667eea', '#f093fb', '#10ac84', '#ffa502', '#ff6b6b', '#5f27cd', '#00d2d3'];
        const color = dayColors[index % dayColors.length];
        
        html += `
            <tr style="background: linear-gradient(135deg, ${color}15 0%, ${color}05 100%); border-radius: 15px;">
                <td style="padding: 20px; border-radius: 15px 0 0 15px; font-weight: 700; color: ${color}; font-size: 16px; width: 120px;">
                    ${dayPlan.day}
                </td>
                <td style="padding: 20px;">
                    <div style="cursor: pointer; transition: all 0.3s;" onclick="viewRecipe(${dayPlan.breakfast.id})" 
                         onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-weight: 600; color: #2d3436; margin-bottom: 5px;">🌅 ${dayPlan.breakfast.name}</div>
                        <div style="font-size: 13px; color: #999; display: flex; gap: 15px;">
                            <span>⏱️ ${dayPlan.breakfast.cookTime}</span>
                            <span>🔥 ${dayPlan.breakfast.calories} kcal</span>
                        </div>
                    </div>
                </td>
                <td style="padding: 20px;">
                    <div style="cursor: pointer; transition: all 0.3s;" onclick="viewRecipe(${dayPlan.lunch.id})"
                         onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-weight: 600; color: #2d3436; margin-bottom: 5px;">☀️ ${dayPlan.lunch.name}</div>
                        <div style="font-size: 13px; color: #999; display: flex; gap: 15px;">
                            <span>⏱️ ${dayPlan.lunch.cookTime}</span>
                            <span>🔥 ${dayPlan.lunch.calories} kcal</span>
                        </div>
                    </div>
                </td>
                <td style="padding: 20px;">
                    <div style="cursor: pointer; transition: all 0.3s;" onclick="viewRecipe(${dayPlan.dinner.id})"
                         onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-weight: 600; color: #2d3436; margin-bottom: 5px;">🌙 ${dayPlan.dinner.name}</div>
                        <div style="font-size: 13px; color: #999; display: flex; gap: 15px;">
                            <span>⏱️ ${dayPlan.dinner.cookTime}</span>
                            <span>🔥 ${dayPlan.dinner.calories} kcal</span>
                        </div>
                    </div>
                </td>
                <td style="padding: 20px; border-radius: 0 15px 15px 0; text-align: center;">
                    <div style="font-weight: 800; font-size: 20px; color: ${dayPlan.totalCalories > userDietProfile.dailyCalories ? '#ff6b6b' : '#10ac84'};">
                        ${dayPlan.totalCalories}
                    </div>
                    <div style="font-size: 11px; color: #999; margin-top: 3px;">kcal</div>
                </td>
            </tr>
        `;
    });
    
    html += '</table></div>';
    container.innerHTML = html;
    
    const dietPrefText = document.getElementById('dietPref').value === 'veg' ? 'Vegetarian 🌱' : 
                         document.getElementById('dietPref').value === 'non-veg' ? 'Non-Veg 🍗' : 
                         document.getElementById('dietPref').value === 'vegan' ? 'Vegan 🥬' : 'Mixed 🍽️';
    
    alert(`✅ 7-Day Meal Plan Generated!\n\n🎯 Target: ${userDietProfile.dailyCalories} kcal/day\n💪 Goal: ${goalText} ${goalEmojis[userDietProfile.goal]}\n🍽️ All recipes are ${dietPrefText}!`);
}

// Add all week's ingredients to shopping list
function addWeekToShopping() {
    if (weeklyMealPlan.length === 0) {
        alert('⚠️ Please generate a meal plan first!');
        return;
    }
    
    let addedCount = 0;
    
    weeklyMealPlan.forEach(dayPlan => {
        [dayPlan.breakfast, dayPlan.lunch, dayPlan.dinner].forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                const existing = shoppingList.find(item => 
                    item.name.toLowerCase() === ingredient.toLowerCase()
                );
                
                if (!existing) {
                    shoppingList.push({
                        id: Date.now() + Math.random(),
                        name: ingredient,
                        category: categorizeIngredient(ingredient),
                        checked: false,
                        quantity: '1',
                        addedFrom: 'Weekly Meal Plan'
                    });
                    addedCount++;
                }
            });
        });
    });
    
    localStorage.setItem('flavorfit_shopping', JSON.stringify(shoppingList));
    displayShoppingList();
    
    alert(`✅ Added ${addedCount} new ingredients to your shopping list!\n\nGo to Shopping page to view them!`);
}
// =// ========== NAV ICONS FUNCTIONALITY (FIXED) ==========

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all icon buttons
    const iconButtons = document.querySelectorAll('.nav-icons .icon-btn');
    
    console.log('Found icon buttons:', iconButtons.length); // Debug
    
    if (iconButtons.length === 0) {
        console.error('No icon buttons found! Check your HTML class names.');
        return;
    }
    
    // Dark Mode Toggle (1st button)
    const darkModeBtn = iconButtons[0];
    let isDarkMode = false;
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isDarkMode = !isDarkMode;
            
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                this.querySelector('i').classList.remove('fa-moon');
                this.querySelector('i').classList.add('fa-sun');
                alert('🌙 Dark Mode Enabled!');
            } else {
                document.body.classList.remove('dark-mode');
                this.querySelector('i').classList.remove('fa-sun');
                this.querySelector('i').classList.add('fa-moon');
                alert('☀️ Light Mode Enabled!');
            }
        });
        console.log('✓ Dark mode button connected');
    }
    
    // Language Toggle (2nd button)
    const globeBtn = iconButtons[1];
    let currentLanguage = 'English';
    
    if (globeBtn) {
        globeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const languages = ['English', 'हिंदी', 'தமிழ்', 'Español'];
            const currentIndex = languages.indexOf(currentLanguage);
            const nextIndex = (currentIndex + 1) % languages.length;
            currentLanguage = languages[nextIndex];
            
            alert(`🌐 Language: ${currentLanguage}\n\n(Full translation coming soon!)`);
        });
        console.log('✓ Globe button connected');
    }
    
   // Button 3: Notifications (Bell icon)
if (allButtons[2]) {
    const notifModal = document.getElementById('notifModal');
    const notifCloseBtn = document.getElementById('notifCloseBtn');
    const notifOkBtn = document.getElementById('notifOkBtn');
    const notifMarkReadBtn = document.getElementById('notifMarkReadBtn');
    const badge = document.querySelector('.notification-badge');

    // Open modal on bell click
    allButtons[2].addEventListener('click', function() {
        console.log('Notifications clicked!');
        if (notifModal) {
            notifModal.style.display = 'grid';  // matches .ff-modal layout
        }

        // optional: hide badge when opening
        if (badge) {
            badge.style.display = 'none';
        }
    });

    // Close modal helpers
    function closeNotifModal() {
        if (notifModal) {
            notifModal.style.display = 'none';
        }
    }

    if (notifCloseBtn) notifCloseBtn.addEventListener('click', closeNotifModal);
    if (notifOkBtn) notifOkBtn.addEventListener('click', closeNotifModal);

    // Example: mark read button
    if (notifMarkReadBtn) {
        notifMarkReadBtn.addEventListener('click', function() {
            // You can clear notifBody or mark items read here
            if (badge) badge.style.display = 'none';
            closeNotifModal();
        });
    }

    // Close when clicking outside the card
    if (notifModal) {
        notifModal.addEventListener('click', function(e) {
            if (e.target === notifModal) {
                closeNotifModal();
            }
        });
    }

    console.log('✓ Notification button + modal ready');
}


    
    // User Profile (4th button - might be .user-icon class)
    const userBtn = iconButtons[3] || document.querySelector('.user-icon');
    
    if (userBtn) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const menu = `
👤 User Profile Menu

What would you like to do?

1 - View Profile
2 - Settings  
3 - My Favorites
4 - Meal History
5 - Help & Support
6 - Logout

Type a number (1-6):
            `;
            
            const choice = prompt(menu);
            
            switch(choice) {
                case '1':
                    alert('👤 Your Profile:\n\nName: User\nEmail: user@flavorfit.com\nMember since: Jan 2026\nSaved Recipes: 15');
                    break;
                case '2':
                    alert('⚙️ Settings:\n\nNotifications: ON ✓\nDiet: Vegetarian\nLanguage: English\nTheme: Light');
                    break;
                case '3':
                    showPage('favorites');
                    break;
                case '4':
                    alert('📊 Recent Meals:\n\n• Masala Dosa (Jan 1)\n• Pasta (Dec 31)\n• Khichdi (Dec 30)');
                    break;
                case '5':
                    alert('📞 Help & Support:\n\nEmail: support@flavorfit.com\nPhone: 1800-FLAVOR\nChat: Available 24/7');
                    break;
                case '6':
                    if (confirm('Are you sure you want to logout?')) {
                        alert('👋 Logged out successfully!');
                    }
                    break;
                default:
                    if (choice) alert('❌ Invalid choice');
            }
        });
        console.log('✓ User profile button connected');
    }
    
    console.log('✅ All nav icons initialized successfully!');
});

// Add simple dark mode CSS
const darkModeStyles = `
<style>
body.dark-mode {
    filter: invert(1) hue-rotate(180deg);
}
body.dark-mode img,
body.dark-mode .recipe-image,
body.dark-mode .food-icon {
    filter: invert(1) hue-rotate(180deg);
}
</style>
`;

// Inject dark mode styles
document.head.insertAdjacentHTML('beforeend', darkModeStyles);
function addWeekToShopping() {
  if (!weeklyMealPlan || weeklyMealPlan.length === 0) {
    alert("⚠️ Please generate a meal plan first!");
    return;
  }

  let added = 0;

  weeklyMealPlan.forEach(dayPlan => {
    const meals = [dayPlan.breakfast, dayPlan.lunch, dayPlan.dinner];

    meals.forEach(recipe => {
      if (!recipe || !Array.isArray(recipe.ingredients)) return;

      recipe.ingredients.forEach(ingredient => {
        const name = String(ingredient || "").trim();
        if (!name) return;

        const existing = shoppingList.find(item =>
          String(item.name || "").toLowerCase() === name.toLowerCase()
        );

        if (existing) {
          const qty = parseInt(existing.quantity, 10);
          existing.quantity = String((isNaN(qty) ? 1 : qty) + 1);
          return;
        }

        // ✅ category must match your grouped keys
        const categoryKey =
          (typeof getCategoryForIngredient === "function"
            ? getCategoryForIngredient(name)
            : "others");

        shoppingList.push({
          id: Date.now() + Math.random(),
          name,
          category: categoryKey,   // <-- vegetables/dairy/grains/protein/spices/others
          checked: false,
          quantity: "1",
          addedFrom: "Weekly Meal Plan"
        });

        added++;
      });
    });
  });

  localStorage.setItem("flavorfit_shopping", JSON.stringify(shoppingList));
  displayShoppingList();

  if (typeof showPage === "function") showPage("shopping");

  alert(`✅ Added weekly ingredients to your shopping list!\nNew items: ${added}`);
}
