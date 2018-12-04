import { ShippingInfo } from "./shippingInfo";
import { BillingInfo } from "./billingInfo";
import { CartProduct } from "./cartProduct";

export class OrderDetails{
    email : string
    shipping_info : ShippingInfo
    billing_info : BillingInfo
    isShippingAddressSameWithBillingAddress : boolean
    cartProducts : CartProduct[]
}