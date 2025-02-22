import tortaImg from './assets/hero-torta.jpeg'
import tacosImg from './assets/tacosimg.jpeg'
import burroImg from './assets/burroimg.jpeg'
import quesadillaImg from './assets/quesadillaimg.jpg'
import { DateTime } from 'luxon';


export const CATEGORIES = [
    "Tacos",
    "Burritos",
    "Tortas",
    "Quesadillas",
    "Drinks"
]

export const MENU_SECTIONS = [
    {img: "https://firebasestorage.googleapis.com/v0/b/lalocura-3291c.firebasestorage.app/o/hero-torta.jpeg?alt=media&token=9c77fae3-9bb4-49fe-886e-ecc8e395303c", label: "Tortas", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Cabbage", "Avacado", "Chipotle Aoli Sauce"]},
    {img: "https://firebasestorage.googleapis.com/v0/b/lalocura-3291c.firebasestorage.app/o/burroimg.jpeg?alt=media&token=97688208-94fd-4d8b-b8db-41060e341155", label: "Burritos", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Rice", "Black beans", "Monterey Jack Cheese"]},
    {img: "https://firebasestorage.googleapis.com/v0/b/lalocura-3291c.firebasestorage.app/o/tacosimg.jpeg?alt=media&token=167211d6-ab03-41b7-b6a8-9324441739a4", label: "Tacos", description: "Topped with chicken, beef, al pastor or shrimp", price: 2.99, defaultToppings: ["Cilantro", "Onion"]},
    {img: "https://firebasestorage.googleapis.com/v0/b/lalocura-3291c.firebasestorage.app/o/quesadillaimg.jpg?alt=media&token=d6719691-8549-498c-a084-c04d585e9f0e", label: "Quesadillas", description: "Topped with chicken, beef, al pastor or shrimp", price: 9.99, defaultToppings: ["Monterey Jack Cheese"]},
    {img: "", label: "Drinks", description: "Choose from a variety of ice-cold beverages"}
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
    createOrder: "https://us-central1-lalocura-3291c.cloudfunctions.net/create_order",
    getOrders: "https://us-central1-lalocura-3291c.cloudfunctions.net/get_orders"

}

export const timestampToArizonaTime = (timestamp) => {
    const arizonaTime = DateTime.fromMillis(timestamp, { zone: 'utc' })
        .setZone('America/Phoenix');

    return arizonaTime.toFormat('hh:mm a');
};