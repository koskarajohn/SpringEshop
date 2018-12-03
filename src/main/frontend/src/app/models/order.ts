import { BillingInfo } from "./billingInfo";
import { ShippingInfo } from "./shippingInfo";
import { User } from "./user";

export class Order{
    id : number
    user : User
    status : string
    email : string
    order_date : Date
    payment_date : Date  
    shipping_date : Date
    shippingInfo : ShippingInfo
    billingInfo :  BillingInfo
}