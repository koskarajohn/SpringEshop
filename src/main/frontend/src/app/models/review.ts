import { User } from "./user";
import { Product } from "./product";

export class Review{
    id : number
    product : Product
    user : User
    text : string
    rating : number
    date : any
}