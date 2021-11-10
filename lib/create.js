const fs = require('fs-extra'),
  chalk = require('chalk'),
  git = require('simple-git'),
  inquirer = require('inquirer'),
  path = require('path');
module.exports = async function (name, options) {
  let isExit = await fs.pathExists(path.resolve(process.cwd(), name));
  if (isExit && !options.merge) {
    console.log(
      chalk.red(`当前路径下已有目录${name}，如果可以直接合并请配置参数--merge`)
    );
    return;
  }

  const { tpl } = await inquirer.prompt([
    {
      name: 'tpl',
      type: 'confirm',
      message: `请选择模板?`,
    },
  ]);
  git.clone('http://data-gitlab.37ops.com/dwt/template_pro/cfh_h5.git').then();
};
