export interface ApiResponse {
  message: string;
  code: number;
  status: 'error' | 'success';
  data: any;
}

