import { ShippingInfo } from "./shippingInfo";
import { BillingInfo } from "./billingInfo";

export class OrderDetails{
    email : string;
    shippingInfo : ShippingInfo;
    billingInfo : BillingInfo;
    isShippingAddressSameWithBillingAddress : boolean;
}