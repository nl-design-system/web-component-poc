# Contribution Guidelines for npm packages

## Store proprietary assets in separate (private) packages

You must avoid publishing copyrighted and licensed materials as part of a packages that indicate they are actually open source.

To this end, you can maintain a separate workspace directory (in addition to the usual `packages/` directory) called `proprietary/`.

- do not include `"license": "EUPL-1.2"` in `package.json` files inside this directory. Instead it is proprietary, using the `"license": "SEE LICENSE IN proprietary.txt"` alternative format.
- include `"private": true` as well if you don't intend to (re)distribute assets in this directory, such as licensed font files.

To ensure you don't forget any of the above steps, it can be helpful to include a `proprietary/.npmpackagejsonlintrc.json` file with specific rules that would trigger a warning when running [`npm-package-json-lint`](https://www.npmjs.com/package/npm-package-json-lint) in your test automation scripts:

```json
{
  "rules": {
    "valid-values-license": ["error", ["SEE LICENSE IN proprietary.txt"]],
    "valid-values-private": ["error", [true]]
  }
}
```

To make your audience aware not all contents of your Git repository are open source, it will help to include a warning in your `README.md` file, so people visiting your GitHub page can easily find out about it.

## Install your project using `npm ci` instead of `npm install`

New dependencies and new versions must be tested for compatibility and vetted for security issues, before you and your team start using them. If you haven't already perfectly configured your dependencies to never use version ranges (`~1.0.0` or `^1.0.0`), it will help to use `npm ci` instead of `npm install`.

The `npm ci` command will install the original version that was used when the code was initially developed, and not automatically update to newer versions that might or might not be compatible. This also means you don't automatically benefit from security patches, therefore make sure to combine this method with tools like Dependabot to stay up to date.

Using `npm ci` in your team can also help prevent situations where a certain commit works for one person on their machine, but not for another.

If you are using Yarn instead of npm, the equivalent is `yarn --frozen-lockfile`.

## Update your `package.json` dependencies using `npm` only

To add dependencies to your project, use `npm --save` or `npm --save-dev` in the terminal instead of editing the file using your code editor. Doing so will avoid achieve a couple of things:

- alphabetical order is maintained perfectly, and you avoid later commits that "fix" your manual change
- it will respect the `save-prefix` settings from your projects `.npmrc` file
- it will automatically update the `package-lock.json` file, without updating any other dependencies in the process
- indentation remains standardized: no risk for accidentaly using Tabs or 4 spaces instead of 2 spaces, which another later commit would then need to fix
