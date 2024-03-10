const npmInstallPackage = `
npm notice created a lockfile as package-lock.json. You should commit this file.
added 56 packages from 38 contributors and audited 107 packages in 10.349s

5 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities
`;

const npmUpdatePackages = `
+ package-name@1.2.3
updated 1 package and audited 100 packages in 2.345s

1 package is looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities
`;

export { npmInstallPackage, npmUpdatePackages };
