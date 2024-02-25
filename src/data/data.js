import chhola from '../Assets/chhola.jpg'
import dosa from '../Assets/dosa.jpg'
import fullmeal from "../Assets/fullmeal.jpeg"
import idli from "../Assets/idli.jpg"
import masaladosa from "../Assets/masala.jpg"
import panner from "../Assets/paneer.jpg"
import mushroom from "../Assets/mushroomRice.jpg"
import PannerR from "../Assets/PaneerRice.jpeg"

export const MenuList=[
    {
        name:'Dosa',
        description:'Serves 1 | Classic Dosa with karam chutney, filled with potato-onion masala, and perfectly tawa-roasted. Served with authentic peanut chutney and sambar.',
        image:dosa,
        price:50,
    },
    {
        name:'Idli',
        description:'Serves 1 | Authentic Andhra-style Idlis made with homemade idli rava and carefully selected ingredients, served with peanut chutney and sambar.',
        image:idli,
        price:50,
    },
    {
        name:'Masala dosa',
        description:'Serves 1 | Classic Masala Dosa with karam chutney, filled with potato-onion masala, and perfectly tawa-roasted. Served with authentic peanut chutney and sambar.',
        image:masaladosa,
        price:70,
    },
    {
        name:'Chole Bhature',
        description:'The classic North Indian style chickpea gravy cooked with fresh onion, tomato and spices served with 2 soft bhature. Served with pickle and onion along the side. Start your day with it, sneak a bit during lunch or enjoy it late at night.',
        image:chhola,
        price:60,
    },
    {
        name:'Paneer Butter Masala ',
        description:'Paneer Butter Masala [A rich and creamy dish made with paneer cooked in a buttery and aromatic curry sauce]',
        image:panner,
        price:150,
    },
    {
        name:'meal',
        description:'| Serve 1 | Medium spicy | 1 Veg curry + 1 lentil (chola or rajma or brown chana) dal + 2 phulka + rice + buttermilk and sweet. Salad, pickle and spoon sent on request only. Customization of components may not be possible as the cooking happens in bulk.',
        image:fullmeal,
        price:250,
    },
    {
        name:'mushroom rice',
        description:'The mushrooms are coated in our andra spice mix that we make fresh every day.',
        image:mushroom,
        price:170,
    },
    {
        name:'panner_rice',
        description:'Fresh pieces of paneer are marinated in a specially prepared spice blend for maximum flavor. it serves two and is slightly spicy.',
        image:PannerR,
        price:170,
    },
]