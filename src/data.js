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
    {img: tortaImg, label: "Tortas", description: "Topped with chicken, beef or al pastor"},
    {img: burroImg, label: "Burritos", description: "Topped with chicken, beef or al pastor"},
    {img: tacosImg, label: "Tacos", description: "Topped with chicken, beef or al pastor"},
    {img: quesadillaImg, label: "Quesadillas", description: "Topped with chicken, beef or al pastor"},
    // {img: tortaImg, label: "Drinks", description: "Topped with chicken, beef or al pastor"}
]


export const CURR_LOCATION = {
    coordinates: {
        lat: 33.4450601,
        lng: -111.9480227,
    },
    label: "Grass Clippings Rolling Hills Golf Course",
    address: "1415 N Mill Ave, Tempe, AZ 85288"
}