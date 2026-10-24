/**
 * Repro: Vercel clones only this repo, so file:../tenify-design-system/...
 * must not be required for @tenify/tokens to resolve.
 */
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)));
const require = createRequire(join(root, "package.json"));

function resolveCss(specifier) {
  try {
    return require.resolve(specifier);
  } catch (err) {
    return { error: err.message };
  }
}

const tokensPkg = resolveCss("@tenify/tokens/tokens.css");
const siblingOutsideRepo = join(root, "../tenify-design-system/packages/tokens");
const vendoredInRepo = join(root, "packages/tokens");

const resolvedPath = typeof tokensPkg === "string" ? tokensPkg : null;
const resolvesInsideRepo =
  resolvedPath != null &&
  resolvedPath.startsWith(root) &&
  !resolvedPath.includes(`${root}/../`);

console.log(
  JSON.stringify(
    {
      resolves: resolvedPath != null,
      resolvedPath,
      resolvesInsideRepo,
      siblingOutsideRepoExists: existsSync(siblingOutsideRepo),
      vendoredInRepoExists: existsSync(vendoredInRepo),
      error: tokensPkg?.error ?? null,
    },
    null,
    2
  )
);

if (!resolvesInsideRepo) {
  console.error(
    "FAIL: @tenify/tokens must resolve to a path inside this repo (Vercel has no sibling design-system)."
  );
  process.exit(1);
}

console.log("PASS: @tenify/tokens resolves inside the repo.");
