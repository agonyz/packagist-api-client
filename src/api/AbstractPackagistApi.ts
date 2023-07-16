import fetch from 'isomorphic-unfetch';

abstract class AbstractPackagistApi {
  protected readonly apiUrl: string;
  private readonly userAgent?: string;

  protected constructor(userAgent: string | undefined) {
    this.apiUrl = 'https://packagist.org/';
    this.userAgent = userAgent;
  }

  protected abstract processResponse<T>(response: Response): Promise<T>;

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const headers: { [key: string]: string } = {};
      if (this.userAgent) {
        headers['User-Agent'] = this.userAgent;
      }

      const response: Response = await fetch(this.apiUrl + endpoint, {
        headers,
      });
      return this.processResponse<T>(response);
    } catch (error) {
      throw new Error(`Failed to make GET request: ${error}`);
    }
  }
}

export default AbstractPackagistApi;