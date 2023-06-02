import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { PackageDownloadStats } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return download stats for package', async (): Promise<void> => {
  const packageName: string = 'agonyz/contao-page-speed-insights-bundle';
  const mockedResponse: PackageDownloadStats = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/GetPackageDownloadStats.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/packages/${packageName}/stats.json`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: PackageDownloadStats =
    await packagistApi.getPackageDownloadStats(packageName);

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
