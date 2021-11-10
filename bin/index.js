#!/usr/bin/env node

const program=require("commander"),
    chalk=require("chalk")

/**
 * 版本信息
 */
program
    .version(`@qx/wfs ${require('../package').version}`,"-v,--version", '输出工作流CLI版本')
    .name("wfs2")
    .usage('<command> [options]')



/**
 * 添加帮助信息
 */
program.addHelpText('after', `\r\n${('有问题请联系李佳新')}`);

/**
 * 添加构建命令
 */
program.command("create <app-name>")
    .description("添加项目")
    .option("--merge","如果存在项目目录，直接覆盖合并")
    .action((name,options,cmd)=>{
        require("../lib/create")(name,options,cmd);
    })

if(process.argv.slice(2).length){
    program
        .arguments('<command>')
        .action((cmd)=>{
            program.outputHelp()

            console.log(chalk.red(`\r\n错误：命令${chalk.yellow(cmd)}不合法 请检查\r\n`))
        })
}

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp()
}



