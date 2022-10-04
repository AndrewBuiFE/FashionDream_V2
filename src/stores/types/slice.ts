import {PaymentMethod, Product} from '../../models/types/index.d';

/**
 * Save state for FashionDream
 */
export interface FashionDreamState {
  system: SystemState;
  product: ProductState;
  checkout: CheckoutState;
}
export interface SystemState {
  appState: string;
  appFirstRun: boolean;
  language: string;
  loadingLanguage: boolean;
  accessToken: string;
  refreshToken: string;
}
export interface ProductState {
  product: Product[];
  pagination: {
    hasMore: boolean;
    total: number;
    filter: {
      title: string;
      description: string;
      priceFrom: number;
      priceTo: number;
      discount: number;
      quantityFrom: number;
      quantityTo: number;
      content: string;
      createdAtFrom: string;
      createdAtTo: string;
    };
    page: number;
    limit: number;
  };
  loadingState: boolean;
  loadMoreState: boolean;
  forceReload: boolean;
}
export interface CheckoutState {
  paymentCards: PaymentMethod[];
  shippingAddress: [];
  deliveryMethod: {};
  pagination: {
    hasMore: boolean;
    total: number;
    filter: {
      title: string;
      description: string;
      priceFrom: number;
      priceTo: number;
      discount: number;
      quantityFrom: number;
      quantityTo: number;
      content: string;
      createdAtFrom: string;
      createdAtTo: string;
    };
    page: number;
    limit: number;
  };
  loadingState: boolean;
  loadMoreState: boolean;
  forceReload: boolean;
}
