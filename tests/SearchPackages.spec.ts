import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { PackageSearchResult } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return packages that match the search parameters', async (): Promise<void> => {
  const query: string = 'agonyz';
  const type: string = 'contao-bundle';
  const perPage: number = 5;
  const mockedResponse: PackageSearchResult = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/SearchPackages.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/search.json?q=${query}&type=${type}&per_page=${perPage}`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: PackageSearchResult = await packagistApi.searchPackages(
    query,
    undefined,
    type,
    perPage,
  );

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
