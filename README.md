# packagist-api-client
Api-client for the [Packagist Api](https://packagist.org/apidoc)

## Install
```
npm i @agonyz/packagist-api-client
```

## Usage
```ts
import PackagistApi from "@agonyz/packagist-api-client";
import {Package} from "@agonyz/packagist-api-client/lib/interfaces";

const packagistApi: PackagistApi = new PackagistApi();
packagistApi.getPackageInfo('agonyz/contao-countdown-bundle')
    .then((packageInformation: Package) => console.log(packageInformation));
```

## Contribute
This is my first npm package and it is hard to find good examples/tutorials on how to build npm packages the best way.   
If you want to contribute or give me some advice please feel free to do so :)