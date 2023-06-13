import fetch from 'isomorphic-unfetch';

abstract class AbstractPackagistApi {
  protected readonly apiUrl: string;
  private readonly userAgent: string;

  protected constructor(userAgent: string | undefined) {
    this.apiUrl = 'https://packagist.org/';
    this.userAgent =
      userAgent ?? 'agonyz/packagist-api-client - email: agonyz@outlook.de';
  }

  protected abstract processResponse<T>(response: Response): Promise<T>;

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const response: Response = await fetch(this.apiUrl + endpoint, {
        headers: {
          'User-Agent': this.userAgent,
        },
      });
      return this.processResponse<T>(response);
    } catch (error) {
      throw new Error(`Failed to make GET request: ${error}`);
    }
  }
}

export default AbstractPackagistApi;
