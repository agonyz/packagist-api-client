export interface PackageSearchResult {
  results: Array<{
    name: string;
    description: string;
    url: string;
    downloads: number;
    favers: number;
  }>;
  total: number;
  next: string;
}
