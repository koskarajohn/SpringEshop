import { Brand } from "./brand";
import { Category } from "./category";

export class Product{
    id : number
    name : string
    brand : Brand
    category : Category
    price : number
    description : string
    is_new : boolean
    is_favorite : boolean
    smallImageUrl : string
    largeImageUrl : string
}