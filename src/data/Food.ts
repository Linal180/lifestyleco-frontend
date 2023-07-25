// ALLOWED
import FreshVegetables from "../assets/images/vegetables.png";
import Oatmeals from "../assets/images/oatmeal.png";
import DairyProducts from "../assets/images/dairy.png";
import AntiOxidants from "../assets/images/anti-oxidants.png";
import Lemonade from "../assets/images/lemon.png";
import NutsAlmonds from "../assets/images/almonds.png";
import FreshFruits from "../assets/images/fruit.png";

// NOT-ALLOWED
import Alcohol from "../assets/images/alcohol.png";
import HighSugar from "../assets/images/sugar-food.png";
import FriedFood from "../assets/images/fried-food.png";
import ProcessedFood from "../assets/images/processed-food.png";
import HighFat from "../assets/images/high-fat.png";
import Broiler from "../assets/images/broiler-chicken.png";
import HighDairyProducts from "../assets/images/dairy-products.png";

export const FoodAllowedData = [
  {
    id: 1,
    name: " تازہ سبزیاں ",
    image: FreshVegetables,
  },
  {
    id: 2,
    name: " جو کا دلیہ ",
    image: Oatmeals,
  },
  {
    id: 3,
    name: " کم چکنائی والی دودھ کی مصنوعات ",
    image: DairyProducts,
  },
  {
    id: 4,
    name: " موانعِ تکسید ",
    image: AntiOxidants,
  },
  {
    id: 5,
    name: " لیموں پانی ",
    image: Lemonade,
  },
  {
    id: 6,
    name: " گری دار میوے، زیادہ تر بادام ",
    image: NutsAlmonds,
  },
  {
    id: 7,
    name: " تازہ پھل ",
    image: FreshFruits,
  },
]

export const FoodNotAllowedData = [
  {
    id: 1,
    name: " شراب ",
    image: Alcohol,
  },
  {
    id: 2,
    name: " زیادہ میٹھے والے کھانے ",
    image: HighSugar,
  },
  {
    id: 3,
    name: " تلی ہوئی اشیاء ",
    image: FriedFood,
  },
  {
    id: 4,
    name: " پروسیس شدہ کھانے ",
    image: ProcessedFood,
  },
  {
    id: 5,
    name: " زیادہ چکنائی ",
    image: HighFat,
  },
  {
    id: 6,
    name: " برائلر چکن ",
    image: Broiler,
  },
  {
    id: 7,
    name: " زیادہ چکنائی والا کھانا/ڈیری مصنوعات ",
    image: HighDairyProducts,
  },
]