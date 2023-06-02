import PackagistApi from '../src/api/PackagistApi';
import { expect, test } from '@jest/globals';
import { PackagesByOrganization } from '../src/interfaces';
import * as fs from 'fs';
const path = require('path');
const nock = require('nock');

test('should return packages by organization', async (): Promise<void> => {
  const vendor: string = 'agonyz';
  const mockedResponse: PackagesByOrganization = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, './mocks/GetPackagesByOrganization.json'),
      'utf-8',
    ),
  );

  nock('https://packagist.org')
    .get(`/packages/list.json?vendor=${vendor}`)
    .reply(200, mockedResponse);

  const packagistApi: PackagistApi = new PackagistApi();
  const response: PackagesByOrganization =
    await packagistApi.getPackagesByOrganization(vendor);

  expect(Object.keys(mockedResponse)).toEqual(Object.keys(response));
}, 30000);
