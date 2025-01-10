import tortaImg from './assets/hero-torta.jpeg'
import tacosImg from './assets/tacosimg.jpeg'
import burroImg from './assets/burroimg.jpeg'
import quesadillaImg from './assets/quesadillaimg.jpg'

export const CATEGORIES = [
    "Tacos",
    "Burritos",
    "Tortas",
    "Quesadillas",
    "Drinks"
]

export const MENU_SECTIONS = [
    {img: tortaImg, label: "Tortas", description: "Topped with chicken, beef, al pastor or shrimp"},
    {img: burroImg, label: "Burritos", description: "Topped with chicken, beef, al pastor or shrimp"},
    {img: tacosImg, label: "Tacos", description: "Topped with chicken, beef, al pastor or shrimp"},
    {img: quesadillaImg, label: "Quesadillas", description: "Topped with chicken, beef, al pastor or shrimp"},
    // {img: tortaImg, label: "Drinks", description: "Topped with chicken, beef, al pastor or shrimp"}
]


export const CURR_LOCATION = {
    coordinates: {
        lat: 33.4450601,
        lng: -111.9480227,
    },
    label: "Grass Clippings Rolling Hills Golf Course",
    address: "1415 N Mill Ave, Tempe, AZ 85288"
}

export const MEAT_LIST = [
    "Chicken",
    "Carne Asada",
    "Al Pastor",
    "Shrimp",
    "No meat"
]

export const TOPPING_LIST = [
    "Monterey Jack Cheese",
    "Rice",
    "Black beans",
    "Onion",
    "Cilantro",
    "Chipotle Aoli Sauce",
    "Guacamole Sauce"
]

export const DRINK_LIST = [
    "Coke",
    "Mandarin Soda",
    "Fanta"
]