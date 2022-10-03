import {ImageStyle} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type DeliveryName = 'FEDex' | 'USPSCOM' | 'DHL';
export type ShippingStatus = 'Cancel' | 'Received' | 'Shipping' | 'Delivered';
export interface Product {
  // id: number;
  // user: User[];
  // title: string;
  // description: string;
  // originalPrice: number;
  // quantity: number;
  // image: Array<ImageStyle>;
  // discountPercent: number;
  // star: number;
  // comment: number;
  // brand: string;
  // isFavorited: boolean;
  // timeCreated: Date;
  // isAvailable: boolean;
  id: number;
  title: string;
  metaTitle: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  content: string;
  brand: string;
  image: ProductImage[];
  review: Review[];
}

export interface ProductImage {
  id: number;
  imageURL: string;
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
  deliveryTime: string;
}

export interface PaymentMethod {
  cardHolder: string;
  cardNumber: string;
  expireDate: Date;
  cvv: number;
  defaultPayment: boolean;
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
  // quantity: number;
  // totalAmount: number;
  status: ShippingStatus;
  listItem: Product[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  deliveryMethod: Delivery;
  discount: PromoCode;
  // total: number;
}

export interface Review {
  // rating: number;
  // publishedAt: Date;
  // content: string;
  // isHelpful: boolean;
  // photos: ImageStyle[];
  // reviewer: User;
  // title: string;
  title: string;
  rating: number;
  content: string;
  user: User;
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
export enum Role {
  user = 'user',
  admin = 'admin',
}
export interface User {
  id: number;
  name: string;
  phone: number;
  email: string;
  hashedPassword: string;
  role: Role;
  registeredAt: Date;
  lastLogin: Date;
  order: Order[];
  shippingAddr: ShippingAddress[];
  paymentMethod: PaymentMethod[];
  promoCode: PromoCode[];
  review: Review[];
  setting: Setting[];
}

export interface DeliverStatus {
  status: ShippingStatus;
}
