<div align="center">
  <img alt="Packagist Logo" src="docs/packagist.svg" width="100" align="center">
  <h1>Packagist Api Client</h1>

[![Badge](https://img.shields.io/npm/dt/%40agonyz%2Fpackagist-api-client?style=for-the-badge)](https://www.npmjs.com/package/@agonyz/packagist-api-client)
[![Badge](https://img.shields.io/github/issues/agonyz/packagist-api-client?style=for-the-badge)](https://github.com/agonyz/packagist-api-client/issues)
[![Badge](https://img.shields.io/github/stars/agonyz/packagist-api-client?style=for-the-badge)](https://github.com/agonyz/packagist-api-client/stargazers)

</div>

<p align="center">
  Api client for the <a href="https://packagist.org/apidoc">Packagist Api</a>
</p>

## Install
```
npm i @agonyz/packagist-api-client
```

## Best practices
See [Packagist API best practices](https://packagist.org/apidoc#best-practices)

```ts
// set an userAgent with some sort of contact information
const packagistApi: PackagistApi = new PackagistApi('my-example-implementation - contact: email@example.com');
```

## Usage

### Import
```ts
import PackagistApi from "@agonyz/packagist-api-client";
import {Package} from "@agonyz/packagist-api-client/lib/interfaces";

const packagistApi: PackagistApi = new PackagistApi();
packagistApi.getPackageInfo('agonyz/contao-countdown-bundle')
    .then((packageInformation: Package) => console.log(packageInformation));
```

### Require
```ts
var packagistApiClient = require("@agonyz/packagist-api-client").default

const packagistApi = new packagistApiClient();
packagistApi.getPackageInfo('agonyz/contao-countdown-bundle')
    .then(packageInformation => console.log(packageInformation));
```