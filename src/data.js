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
    {img: tortaImg, label: "Tortas", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Cabbage", "Avacado", "Chipotle Aoli Sauce"]},
    {img: burroImg, label: "Burritos", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Rice", "Black beans", "Monterey Jack Cheese"]},
    {img: tacosImg, label: "Tacos", description: "Topped with chicken, beef, al pastor or shrimp", price: 2.99, defaultToppings: ["Cilantro", "Onion"]},
    {img: quesadillaImg, label: "Quesadillas", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Monterey Jack Cheese"]},
    {img: tortaImg, label: "Drinks", description: "Choose from a variety of ice-cold beverages"}
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
    "Avacado",
    "Onion",
    "Cilantro",
    "Cabbage",
    "Lettuce",
    "Chipotle Aoli Sauce",
    "Guacamole Sauce"
]


export const DRINK_LIST = {
    "Coke": 2.99,
    "Mandarin Soda": 1.99,
    "Fanta": 2.99
}

export const ORDER_INIT = {
    subTotal: 0,
    tax: 0,
    orderItems: [],
    drinks: []
}

export const urls = {
    createPaymentIntent: "https://us-central1-lalocura-3291c.cloudfunctions.net/create_pi",
    createOrder: "https://us-central1-lalocura-3291c.cloudfunctions.net/create_order"
}

export const timestampToTime = (timestamp) => {
    const date = new Date(timestamp)

    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padEnd(2, "0") 
    const ampm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12

    return `${hours}:${minutes} ${ampm}`
}