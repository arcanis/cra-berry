const cp = require(`child_process`);

delete process.env.YARN_IGNORE_PATH;
delete process.env.NODE_OPTIONS;

cp.execFileSync(`git`, [`clone`, `https://github.com/arcanis/fork-ts-checker-webpack-plugin.git`, `build`], {
  cwd: `${process.cwd()}`,
  stdio: `inherit`,
});

cp.execFileSync(`git`, [`checkout`, `custom-resolvers`], {
  cwd: `${process.cwd()}/build`,
  stdio: `inherit`,
});

cp.execFileSync(`yarn`, [`set`, `version`, `nightly-v1`], {
  cwd: `${process.cwd()}/build`,
  stdio: `inherit`,
});

cp.execFileSync(`yarn`, [`install`], {
  cwd: `${process.cwd()}/build`,
  stdio: `inherit`,
});

cp.execFileSync(`yarn`, [`build`], {
  cwd: `${process.cwd()}/build`,
  stdio: `inherit`,
});

cp.execFileSync(`rm`, [`-r`, `node_modules`], {
  cwd: `${process.cwd()}/build`,
  stdio: `inherit`,
});
