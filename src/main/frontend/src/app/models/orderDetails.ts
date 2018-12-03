import { ShippingInfo } from "./shippingInfo";
import { BillingInfo } from "./billingInfo";
import { CartProduct } from "./cartProduct";

export class OrderDetails{
    email : string
    shippingInfo : ShippingInfo
    billingInfo : BillingInfo
    isShippingAddressSameWithBillingAddress : boolean
    cartProducts : CartProduct[]
}