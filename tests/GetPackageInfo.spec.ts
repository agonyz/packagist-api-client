import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { Package } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return package information', async (): Promise<void> => {
  const packageName: string = 'agonyz/contao-page-speed-insights-bundle';
  const mockedResponse: Package = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/GetPackageInfo.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/packages/${packageName}.json`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: Package = await packagistApi.getPackageInfo(packageName);

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
