export interface Package {
  _id?: string;
  name: string;
  description: string;
  code: string;
  categories: string[];
  establishment_id: string;
  start_date: Date;
  end_date: Date;
  price: number;
  discount: number;
  premium: boolean;
  reviews: Array<{
    scoreOutOfTen: number;
    description?: string;
  }>;
}
