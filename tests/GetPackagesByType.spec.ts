import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { PackagesByType } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return packages by type', async (): Promise<void> => {
  const type: string = 'contao-bundle';
  const mockedResponse: PackagesByType = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/GetPackagesByType.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/packages/list.json?type=${type}`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: PackagesByType = await packagistApi.getPackagesByType(type);

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
