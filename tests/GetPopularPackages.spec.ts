import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { PopularPackage } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return popular packages', async (): Promise<void> => {
  const perPage: number = 5;
  const mockedResponse: PopularPackage = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/GetPopularPackages.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/explore/popular.json?per_page=${perPage}`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: PopularPackage = await packagistApi.getPopularPackages(
    perPage,
  );

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
