import { Maintainer } from './Maintainer';
import { Downloads } from './Downloads';
import { Version } from './Version';

export interface Package {
  package: {
    name: string;
    description: string;
    time: Date;
    maintainers: Maintainer[];
    versions: {
      [version: string]: Version;
    };
    type: string;
    repository: string;
    github_stars: number;
    github_watchers: number;
    github_forks: number;
    github_open_issues: number;
    language: string;
    dependents: number;
    suggesters: number;
    downloads: Downloads;
    favers: number;
  };
}
