const chalk = require("chalk");
const msgPath = process.env.HUSKY_GIT_PARAMS;

const msg = require("fs")
  .readFileSync(msgPath, "utf-8")
  .trim();

const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build|merge): .{1,50}/;

if (!commitRE.test(msg) && !/^Merge branch/.test(msg)) {
  const errorMessage =
    `    ${chalk.bgRed.white("ERROR")}  ${chalk.red(`invalid commit message format.`)}\n\n` +
    `    ${chalk.green(`feat: dashboard模块完成`)}\n` +
    `    ${chalk.green(`docs: FeatureSelector组件文档补充`)}\n` +
    `    ${chalk.green(`fix: 7298,8021`)}\n`;
  console.log();
  console.error(errorMessage);
  process.exit(1);
}
