const cp = require(`child_process`);

cp.execFileSync(`git`, [`clone`, `https://github.com/arcanis/create-react-app.git`, `repo`], {
  cwd: `${process.cwd()}`,
  stdio: `inherit`,
});

cp.execFileSync(`git`, [`checkout`, `resolve-module-name-module`], {
  cwd: `${process.cwd()}/repo`,
  stdio: `inherit`,
});

cp.execFileSync(`cp`, [`-rf`, `repo/packages/${process.argv[2]}`, `build`], {
  cwd: `${process.cwd()}`,
  stdio: `inherit`,
});
