import { BillingInfo } from "./billingInfo";
import { ShippingInfo } from "./shippingInfo";
import { User } from "./user";

export class Order{
    id : number
    user : User
    status : string
    email : string
    order_date : any
    payment_date : any  
    shipping_date : any
    shippingInfo : ShippingInfo
    billingInfo :  BillingInfo
}