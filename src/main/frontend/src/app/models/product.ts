import { Brand } from "./brand";
import { Category } from "./category";

export class Product{
    id : number
    name : string
    brand : Brand
    category : Category
    price : number
    description : string
    smallImageUrl : string
    largeImageUrl : string
}