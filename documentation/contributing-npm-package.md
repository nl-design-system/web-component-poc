<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

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

## Always install exact versions of dependencies

When installing a depenency you will immediately check if it works as intended, then you commit the changes to the dependencies to share your successful result with "future you" or team members. Dependencies that publish updates that don't strictly follow [semantic versioning](https://semver.org) (and most packages experience difficulty with strict adherance) will sometimes make it difficult to later install the same version you have been working with. While it is easy enough to revert back to the original versions defined in `package-lock.json`, it is much more difficult (if not downright impossible) if your project starts relying on features introduced in more recent versions that are automatically provided by using `npm install` to install the latest possible version that matches the `~x.y.z` or `^x.y.z` version range.

Achieve "reproducible builds" using fixed versions in your `package.json`. This can be achieved by installing packages using `npm --save-exact`, but consistently including this argument is easy to forget. Configure this behavior as default by including the following setting in the `.npmrc` file for your repository:

```text
# Do not use a version range prefix, to depend on exact version
save-exact=true
save-prefix=

```

## Update your `package.json` dependencies using `npm` only

To add dependencies to your project, use `npm --save` or `npm --save-dev` in the terminal instead of editing the file using your code editor. Doing so will avoid achieve a couple of things:

- alphabetical order is maintained perfectly, and you avoid later commits that "fix" your manual change
- it will respect the `save-prefix` settings from your projects `.npmrc` file
- it will automatically update the `package-lock.json` file, without updating any other dependencies in the process
- indentation remains standardized: no risk for accidentaly using Tabs or 4 spaces instead of 2 spaces, which another later commit would then need to fix

## Don't use code formatting tools for `package.json`

Using tools to format code in `package.json`, affecting the maximum line length and using anything else than the 2 space default indentation, will reduce the ability of automated tools to create clean commits. When tools like Dependabot are not able to create clean commits (and affect only the lines of code relevant to the change), they will increase the amount of time you need to spend on resolving merge conflicts. There are so many things you can better spend your time on!

Configure tools like Prettier to avoid interfering with the formatting of dependency files:

`.prettierignore`:

```text
# Ignore generated files
package.json      # Node.js ecosystem
package-lock.json # Node.js ecosystem
yarn.lock         # Node.js ecosystem
composer.json     # PHP ecosystem
```

## Keep your dependencies up to date with automated pull requests

Tools like [Dependabot](https://dependabot.com) and [Snyk](http://snyk.io) can help you to stay up to date with the latest versions of dependencies, by automatically opening a pull request with a patch to update to the latest version.

A significant advantage is that every PR will immediately show the effect on your automated tests, and indicate which updates may be safe to install, and which would cause your project to break and require additional work to migrate your code and work with the new version.

Relying on these automated PRs can help find a balance between having exact and vetted dependencies, while at the same time staying up to date without too much hassle.

Staying up to date with recent version of packages, and investing time into migrating to new major releases of popular packages, will help you

## Scope your npm package names with your registered organization

...
