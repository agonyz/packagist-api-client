import { Downloads } from './Downloads';

export interface PackageDownloadStats {
  downloads: Downloads;
  versions: string[];
  average: string;
  date: Date;
}
