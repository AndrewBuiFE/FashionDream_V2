/**
 * Save state for FashionDream
 */
export interface FashionDreamState {
  system: SystemState;
  product: ProductState;
}
export interface SystemState {
  appState: boolean;
}
export interface ProductState {
  quantity: number;
  name: string;
}
