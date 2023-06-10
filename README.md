# packagist-api-client
Api-client for the [Packagist Api](https://packagist.org/apidoc)

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

## Contribute
This is my first npm package and it is hard to find good examples/tutorials on how to build npm packages the best way.   
If you want to contribute or give me some advice please feel free to do so :)