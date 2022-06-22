// 入口
// 导出继承自Yeoman Generator 的类型
// 调用父类提供方法实现一些功能
const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Yr proj name',
                default: this.appname
            }
        ])
        .then(asw => {
            this.answers= asw
        })
    }
    writing() {
        //     this.fs.write(
        //         this.destinationPath('temp.txt'),
        //         Math.random().toString()
        //     )
        // }
        const tmpl = this.templatePath('bar.html');
        const out = this.destinationPath('bar.html')
        const context = this.answers
        this.fs.copyTpl(tmpl, out, context)
    }
}
