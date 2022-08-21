import {ImageStyle} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type DeliveryName = 'FEDex' | 'USPSCOM' | 'DHL';
export type ShippingStatus = 'Cancel' | 'Received' | 'Shipping' | 'Delivered';
export interface Product {
  image: ImageStyle;
  discountPercent: number;
  star: number;
  comment: number;
  brand: string;
  title: string;
  originalPrice: number;
  isFavorited: boolean;
  timeCreated: Date;
  isAvailable: boolean;
}

export interface PromoCode {
  percent: number;
  promoName: string;
  promoCode: string;
  dayRemaining: number;
  promoImage: ImageStyle;
}

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  isUsed: boolean;
  country: string;
}

export interface Delivery {
  name: DeliveryName;
  price: number;
  image: ImageStyle;
}

export interface PaymentMethod {
  cardName: string;
  cardNumber: string;
  expireDate: Date;
  cvv: number;
  isDefault: boolean;
}

export interface Cart {
  promoCodes: Array<PromoCode>;
  listItem: Product[];
}

export interface CheckOut {
  shippingAddr: ShippingAddress[];
  paymentMethod: PaymentMethod[];
  deliveryMethod: Delivery[];
}

export interface Order {
  number: string;
  date: Date;
  trackingNumber: string;
  quantity: number;
  totalAmount: number;
  status: ShippingStatus;
  listItem: Product[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  deliveryMethod: Delivery;
  discount: PromoCode;
  total: number;
}

export interface Review {
  star: number;
  dayReview: Date;
  content: string;
  isHelpful: boolean;
  photos: ImageStyle[];
  reviewer: User;
}

export interface Notification {
  sales: boolean;
  newArrivals: boolean;
  deliveryChange: boolean;
}
export interface Setting {
  name: string;
  dateOfBirth: Date;
  password: string;
  notification: Notification;
}

export interface User {
  order: Order[];
  shippingAddr: ShippingAddress[];
  paymentMethod: PaymentMethod[];
  promoCode: PromoCode[];
  review: Review[];
  setting: Setting[];
}
