export interface PopularPackage {
  packages: Array<{
    name: string;
    description: string;
    url: string;
    downloads: number;
    favers: number;
  }>;
  total: number;
  next: string;
}
