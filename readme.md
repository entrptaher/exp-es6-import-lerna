This shows you don't need to add a rollup/parcel/webpack config on every package inside a monorepo. It will resolve them with some configuration on the main package.

## Starting instructions

First install lerna and yarn, then bootstrap and symlink the packages,

```sh
lerna bootstrap
```

Now let's look into individual packages.

### without-rollup

is a es6 package which uses `export default` syntax. This is not supported normally, but let's see.

> **You don't need to run this directly.**

### with-parcel

has a short `build:watch` command, which executes parcel. Usually it's for the browser.

Run like below from the root folder,

```
lerna run build:watch --stream
```

### with-rollup

has a rollup.config.js file, it uses `run`, `commonjs` and `node-resolve` plugin for rollup. The `run` is just to run it on the console.

```
lerna run build:watch --stream
```

**Note: this will also run the parcel from `with-parcel` since that has same start script/command. It won't run anything from the `without-rollup` folder because that folder does not have this command on package.json.**

### with-rollup-parcel

uses both above in two different commands.

```sh
# one terminal
lerna run build:watch:rollup --stream

# another
lerna run build:watch:parcel --stream
```

### with-webpack

is basically same as the rollup config, we provide it with required babel configuration etc and it will import as needed. For example's sake, I have put a dev server on webpack. It will create a dev index.html by itself.

```sh
lerna run build:watch:webpack --stream
```
