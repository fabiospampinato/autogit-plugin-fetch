
/* IMPORT */

import chalk from 'chalk';
import * as simpleGit from 'simple-git/promise';

/* FETCH */

const defaultOptions = {
  remote: 'origin',
  branch: ''
};

function factory ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return async function fetch ( config, repoPath, ctx, task ) {

    const git = simpleGit ( repoPath ),
          branch = options.branch || ( await git.branchLocal () ).current;

    task.title = `fetch ${chalk.gray ( `${options.remote}/${branch}` )}`;

    const remotes = await git.getRemotes ( true ),
          remote = remotes.find ( remote => remote.name === options.remote );

    if ( !remote ) return task.skip ( `Remote "${options.remote}" not found` );

    task.output = `Fetching from "${options.remote}/${branch}"...`;

    if ( config.dry ) return task.skip ();

    await git.fetch ( options.remote, branch );

    task.output = `Fetched from "${options.remote}/${branch}"`;

  };

}

/* EXPORT */

export default factory;
