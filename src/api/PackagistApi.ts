import AbstractPackagistApi from './AbstractPackagistApi';
import {
  Package,
  PackagesByType,
  PopularPackage,
  PackagesByOrganization,
  PackageDownloadStats,
  PackageSearchResult,
} from '../interfaces';

class PackagistApi extends AbstractPackagistApi {
  constructor(userAgent?: string) {
    super(userAgent);
  }

  protected async processResponse<T>(response: Response): Promise<T> {
    return (await response.json()) as T;
  }

  /**
   * Reference: https://packagist.org/apidoc#get-package-data
   * @param packageName
   */
  async getPackageInfo(packageName: string): Promise<Package> {
    const endpoint: string = `packages/${packageName}.json`;
    return this.get(endpoint);
  }

  /**
   * Reference: https://packagist.org/apidoc#list-packages-by-type
   * @param type
   */
  async getPackagesByType(type: string): Promise<PackagesByType> {
    const endpoint: string = `packages/list.json?type=${type}`;
    return this.get(endpoint);
  }

  /**
   * Reference: https://packagist.org/apidoc#list-popular-packages
   * @param perPage
   */
  async getPopularPackages(perPage?: number): Promise<PopularPackage> {
    let endpoint: string = `explore/popular.json`;
    if (perPage) {
      endpoint = `explore/popular.json?per_page=${perPage}`;
    }

    return this.get(endpoint);
  }

  /**
   * Reference: https://packagist.org/apidoc#list-packages-by-organization
   * @param vendor
   */
  async getPackagesByOrganization(
    vendor: string,
  ): Promise<PackagesByOrganization> {
    const endpoint: string = `packages/list.json?vendor=${vendor}`;
    return this.get(endpoint);
  }

  /**
   * Reference: https://packagist.org/apidoc#get-package-stats
   * @param packageName
   */
  async getPackageDownloadStats(
    packageName: string,
  ): Promise<PackageDownloadStats> {
    const endpoint: string = `packages/${packageName}/stats.json`;
    return this.get(endpoint);
  }

  /**
   * Reference: https://packagist.org/apidoc#search-packages
   * @param query
   * @param tag
   * @param type
   * @param perPage
   */
  async searchPackages(
    query?: string,
    tag?: string,
    type?: string,
    perPage?: number,
  ): Promise<PackageSearchResult> {
    let endpoint: string = `search.json?`;
    if (query) {
      endpoint = endpoint + `q=${query}`;
    }
    if (tag) {
      endpoint = endpoint + `&tags=${tag}`;
    }
    if (type) {
      endpoint = endpoint + `&type=${type}`;
    }
    if (perPage) {
      endpoint = endpoint + `&per_page=${perPage}`;
    }

    return this.get(endpoint);
  }
}

export default PackagistApi;
