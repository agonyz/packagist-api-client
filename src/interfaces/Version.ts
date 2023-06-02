import { PackageSource } from './PackageSource';

export interface Version {
  name: string;
  description: string;
  time: Date;
  keywords: [string];
  homepage: string;
  version: string;
  license: [string];
  authors: [
    {
      name: string;
      email: string;
      homepage?: string;
      role?: string;
    },
  ];
  source: PackageSource;
  dist: PackageSource;
  type: string;
  uid: number;
  autoload?: {
    [key: string]: { [key: string]: string };
  };
  require?: {
    [key: string]: string;
  };
  'require-dev'?: {
    [key: string]: string;
  };
  suggest?: {
    [key: string]: string;
  };
  extra?: {
    [key: string]: string;
  };
  provide?: {
    [key: string]: string;
  };
  [key: string]: any;
}
