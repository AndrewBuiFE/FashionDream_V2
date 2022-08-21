import {AppImages} from '../shared/constants/AppImages';

/**
 * @type {import('../models/types/index.d').Product}
 */
export const PRODUCT = [
  {
    id: 1,
    image: AppImages.small_banner,
    discountPercent: 10,
    star: 4,
    comment: 6,
    brand: 'Dorothy',
    title: 'Evening',
    originalPrice: 15,
    isFavorited: false,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 2,
    image: AppImages.small_banner,
    discountPercent: 10,
    star: 4,
    comment: 6,
    brand: 'Dorothy peru',
    title: 'Dress',
    originalPrice: 15,
    isFavorited: false,
    timeCreated: '12/06/2022',
    isAvailable: true,
  },
  {
    id: 3,
    image: AppImages.small_banner,
    discountPercent: 10,
    star: 4,
    comment: 6,
    brand: 'Dorothy',
    title: 'Evening dress',
    originalPrice: 15,
    isFavorited: false,
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
