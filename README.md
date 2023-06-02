# packagist-api-client
Api-client for the [Packagist Api](https://packagist.org/apidoc)

## Install
```
npm i @agonyz/packagist-api-client
```

## Usage
```ts
import PackagistApi from "@agonyz/packagist-api-client/lib/api/PackagistApi";
const packagistApi = new PackagistApi();

packagistApi.getPackageInfo('agonyz/contao-page-speed-insights-bundle')
    .then(packageInfo => console.log(packageInfo));
```

## Contribute
This is my first npm package and it is hard to find good examples/tutorials on how to build npm packages the best way.   
If you want to contribute or give me some advice please feel free to do so :)