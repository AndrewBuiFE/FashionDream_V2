import {AppColors} from '../shared/constants/AppColors';
import {AppImages} from '../shared/constants/AppImages';

/**
 * @description Age => Categories => SubCategories => Types in subcategories
 */
export const CATEGORY = [
  {
    category: 'Women',
  },
  {
    category: 'Men',
  },
];

export const TYPE = [
  {
    id: 1,
    type: 'T-shirts',
  },
  {
    id: 2,
    type: 'Crop-tops',
  },
  {
    id: 3,
    type: 'Sleeveless',
  },
  {
    id: 4,
    type: 'Crop-tops',
  },
  {
    id: 5,
    type: 'Sleeveless',
  },
];
export const SORT_TITLE = [
  {
    title: 'Popular',
  },
  {
    title: 'Newest',
  },
  {
    title: 'Customer review',
  },
  {
    title: 'Price: lowest to high',
  },
  {
    title: 'Price: highest to low',
  },
];
export const TABVIEWLIST = [
  {
    id: 1,
    title: ['New', 'Clothes', 'Shoes', 'Accesories'],
    image: [AppImages.man_1, AppImages.man_2, AppImages.man_3, AppImages.man_4],
  },
  {
    id: 2,
    title: ['1', '2', '3', '4'],
    image: [AppImages.man_1, AppImages.man_2, AppImages.man_3, AppImages.man_4],
    sale: {
      title: 'SUMMER SALES',
      content: 'Up to 50% off',
      backgroundColor: AppColors.hotRed,
    },
  },
  {
    id: 3,
    title: ['1', '2', '3', '4', '5', '6'],
    image: [
      AppImages.man_1,
      AppImages.man_2,
      AppImages.man_3,
      AppImages.man_4,
      AppImages.big_banner,
      AppImages.small_banner,
    ],
    sale: {
      title: 'SUMMER SALES',
      content: 'Up to 50% off',
      backgroundColor: AppColors.hotRed,
    },
  },
];
export const FILTER_COLOR = [
  '#020202',
  '#F6F6F6',
  '#F48117',
  '#BEA9A9',
  '#91BA4F',
  '#2CB1B1',
];
export const FILTER_SIZE = ['XS', 'S', 'M', 'L', 'XL'];
export const FILTER_CATEGORY = ['All', 'Women', 'Men', 'Boys', 'Girls'];
export const BRANDS = [
  'adidas',
  'adidas Originals',
  'Blend',
  'Boutique',
  'Champion',
  'Diesel',
  'Naf naf',
  'Valentino',
  'Dolce & Gabbana',
  'adidas',
  'adidas Originals',
  'Blend',
  'Boutique',
  'Champion',
  'Diesel',
  'Naf naf',
  'Valentino',
  'Dolce & Gabbana',
];
/**
 * @type {import('../models/types/index.d').Product}
 */
export const PRODUCT = [
  {
    id: 1,
    image: [AppImages.man_1, AppImages.man_2, AppImages.man_3, AppImages.man_4],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand:
      'Dorothy sdfas fdjk ajsdjf asfjd jf adjf kajfd jsakj jskdjf ksja jskfdj jdsjf ',
    title:
      'Evening adkfj jfk jdjfsk ajd asdkjf ksfj ksjdf skdf jaksdfj js jaksj',
    originalPrice: 15,
    isFavorited: false,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 2,
    image: [AppImages.man_2],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand: 'Dorothy peru',
    title: 'Dress',
    originalPrice: 15,
    isFavorited: false,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 3,
    image: [AppImages.man_3],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand: 'Dorothy',
    title: 'Evening dress',
    originalPrice: 15,
    isFavorited: false,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 4,
    image: [AppImages.man_4],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand: 'Dorothy',
    title: 'Evening dress',
    originalPrice: 15,
    isFavorited: true,
    timeCreated: '12/06/2022',
    isAvailable: false,
  },
  {
    id: 5,
    image: [AppImages.man_3],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand: 'Dorothy',
    title: 'Evening dress',
    originalPrice: 15,
    isFavorited: true,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 6,
    image: [AppImages.man_3],
    discountPercent: 10,
    star: 4,
    comment: 6,
    description:
      'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    brand: 'Dorothy',
    title: 'Evening dress',
    originalPrice: 15,
    isFavorited: true,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
];

export const SECTION = [
  {
    id: 1,
    title: 'Sale',
    horizontal: true,
    description: 'Super summer sale',
  },
  {
    id: 1,
    title: 'New',
    horizontal: true,
    description: 'You’ve never seen it before!',
  },
];

/**
 * @type {Array<import('../models/types/index.d').PromoCode>}
 */
export const PROMO_CODE = [
  {
    dayRemaining: 6,
    percent: 10,
    promoCode: 'mypromocode2020',
    promoImage: AppImages.man_1,
    promoName: 'Personal offer',
  },
  {
    dayRemaining: 23,
    percent: 15,
    promoCode: 'summer2020',
    promoImage: AppImages.man_2,
    promoName: 'Summer sale',
  },
  {
    dayRemaining: 6,
    percent: 22,
    promoCode: 'mypromocode2020',
    promoImage: AppImages.man_3,
    promoName: 'Personal offer',
  },
];

/**
 * @type {Array<import('../models/types/index.d').Delivery>}
 */
export const DELIVERY_METHOD = [
  {
    image: AppImages.fedex,
    name: 'FedEx',
    price: 15,
    deliveryTime: '2-3 days',
  },
  {
    image: AppImages.usps,
    name: 'FedEx',
    price: 15,
    deliveryTime: '2-3 days',
  },
  {
    image: AppImages.dhl,
    name: 'FedEx',
    price: 15,
    deliveryTime: '2-3 days',
  },
];

/**
 * @type {Array<import('../models/types/index.d').PaymentMethod>}
 */
export const PAYMENT_CARD = [
  {
    cardName: 'Bui Viet Hoang',
    cardNumber: '1238382983283',
    cvv: 1232,
    expireDate: '12/06/2022',
    isDefault: false,
  },
  {
    cardName: 'Bui Viet Hoang',
    cardNumber: '1238382983283',
    cvv: 1232,
    expireDate: '12/06/2022',
    isDefault: false,
  },
  {
    cardName: 'Bui Viet Hoang',
    cardNumber: '1238382983283',
    cvv: 1232,
    expireDate: '12/06/2022',
    isDefault: false,
  },
];

/**
 * @type {import('../models/types/index.d').ShippingAddress[]}
 */
export const SHIPPING_ADDRESS = [
  {
    address: '50 Phan Dinh Giot',
    city: 'Ha Noi',
    country: 'Viet Nam',
    fullName: 'Bui Viet Hoang',
    state: 'Thanh Xuan',
    zipCode: 129389,
  },
  {
    address: '50 Phan Dinh Giot',
    city: 'Ha Noi',
    country: 'Viet Nam',
    fullName: 'Bui Viet Hoang',
    state: 'Thanh Xuan',
    zipCode: 129389,
  },
  {
    address: '50 Phan Dinh Giot',
    city: 'Ha Noi',
    country: 'Viet Nam',
    fullName: 'Bui Viet Hoang',
    state: 'Thanh Xuan',
    zipCode: 129389,
  },
  {
    address: '50 Phan Dinh Giot',
    city: 'Ha Noi',
    country: 'Viet Nam',
    fullName: 'Bui Viet Hoang',
    state: 'Thanh Xuan',
    zipCode: 129389,
  },
  {
    address: '50 Phan Dinh Giot',
    city: 'Ha Noi',
    country: 'Viet Nam',
    fullName: 'Bui Viet Hoang',
    state: 'Thanh Xuan',
    zipCode: 129389,
  },
];

/**
 * @type {import('../models/types/index.d').DeliverStatus[]}
 */
export const DELIVER_STATUS = [
  {
    status: 'Delivered',
  },
  {
    status: 'Processing',
  },
  {
    status: 'Cancelled',
  },
];

/**
 * @type {import('../models/types/index.d').Order[]}
 */
export const ORDER = [
  {
    date: '05-12-2019',
    number: '1234567',
    trackingNumber: 'IW3475453455',
    deliveryMethod: 'FedEx, 3 days, 15$',
    discount: '10%, Personal promo code',
    paymentMethod: '**** **** **** 3947',
    shippingAddress: '3 Newbridge Court ,Chino Hills, CA 91709, United States',
    status: 'Delivered',
    listItem: [
      {
        id: 1,
        image: [
          AppImages.man_1,
          AppImages.man_2,
          AppImages.man_3,
          AppImages.man_4,
        ],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand:
          'Dorothy sdfas fdjk ajsdjf asfjd jf adjf kajfd jsakj jskdjf ksja jskfdj jdsjf ',
        title:
          'Evening adkfj jfk jdjfsk ajd asdkjf ksfj ksjdf skdf jaksdfj js jaksj',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
      {
        id: 2,
        image: [AppImages.man_2],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand: 'Dorothy peru',
        title: 'Dress',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
    ],
  },
  {
    date: '05-12-2019',
    number: '1947034',
    trackingNumber: 'IW3475453455',
    deliveryMethod: 'FedEx, 3 days, 15$',
    discount: '10%, Personal promo code',
    paymentMethod: '**** **** **** 3947',
    shippingAddress: '3 Newbridge Court ,Chino Hills, CA 91709, United States',
    status: 'Delivered',
    listItem: [
      {
        id: 1,
        image: [
          AppImages.man_1,
          AppImages.man_2,
          AppImages.man_3,
          AppImages.man_4,
        ],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand:
          'Dorothy sdfas fdjk ajsdjf asfjd jf adjf kajfd jsakj jskdjf ksja jskfdj jdsjf ',
        title:
          'Evening adkfj jfk jdjfsk ajd asdkjf ksfj ksjdf skdf jaksdfj js jaksj',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
      {
        id: 2,
        image: [AppImages.man_2],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand: 'Dorothy peru',
        title: 'Dress',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
    ],
  },
  {
    date: '05-12-2019',
    number: '38489374',
    trackingNumber: 'IW3475453455',
    deliveryMethod: 'FedEx, 3 days, 15$',
    discount: '10%, Personal promo code',
    paymentMethod: '**** **** **** 3947',
    shippingAddress: '3 Newbridge Court ,Chino Hills, CA 91709, United States',
    status: 'Delivered',
    listItem: [
      {
        id: 1,
        image: [
          AppImages.man_1,
          AppImages.man_2,
          AppImages.man_3,
          AppImages.man_4,
        ],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand:
          'Dorothy sdfas fdjk ajsdjf asfjd jf adjf kajfd jsakj jskdjf ksja jskfdj jdsjf ',
        title:
          'Evening adkfj jfk jdjfsk ajd asdkjf ksfj ksjdf skdf jaksdfj js jaksj',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
      {
        id: 2,
        image: [AppImages.man_2],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand: 'Dorothy peru',
        title: 'Dress',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
    ],
  },
  {
    date: '05-12-2019',
    number: '1947034',
    trackingNumber: 'IW3475453455',
    deliveryMethod: 'FedEx, 3 days, 15$',
    discount: '10%, Personal promo code',
    paymentMethod: '**** **** **** 3947',
    shippingAddress: '3 Newbridge Court ,Chino Hills, CA 91709, United States',
    status: 'Delivered',
    listItem: [
      {
        id: 1,
        image: [
          AppImages.man_1,
          AppImages.man_2,
          AppImages.man_3,
          AppImages.man_4,
        ],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand:
          'Dorothy sdfas fdjk ajsdjf asfjd jf adjf kajfd jsakj jskdjf ksja jskfdj jdsjf ',
        title:
          'Evening adkfj jfk jdjfsk ajd asdkjf ksfj ksjdf skdf jaksdfj js jaksj',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
      {
        id: 2,
        image: [AppImages.man_2],
        discountPercent: 10,
        star: 4,
        comment: 6,
        description:
          'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        brand: 'Dorothy peru',
        title: 'Dress',
        originalPrice: 15,
        isFavorited: false,
        timeCreated: '12/06/2022',
        isAvailable: true,
      },
    ],
  },
];
