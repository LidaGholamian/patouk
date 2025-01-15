export interface CategoryItem {
  id: string;
  name: string;
  items: string[]; 
}

export type Category = {
    id: string; 
    name: string; 
    subcategories: CategoryItem[]; 
  }