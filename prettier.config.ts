/**
 * 配置项文档：https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
 // 避免箭头函数参数周围的括号 (x) => x
 arrowParens: "avoid",
 // 根据需要添加引号，例如 { "key": value } 或 { key: value }
 quoteProps: "as-needed",
 // 大括号是否与同一行的代码在一起
 bracketSameLine: false,
 // 是否在大括号内添加空格
 bracketSpacing: true,
 // 自动格式化嵌入语言（如HTML、CSS等）
 embeddedLanguageFormatting: "auto",
 // 启用Prettier格式化
 enable: true,
 // 行尾使用 LF（换行符）
 endOfLine: "lf",
 // HTML中的空格敏感度遵循CSS规则
 htmlWhitespaceSensitivity: "css",
 // 不插入格式化标记
 insertPragma: false,
 // JSX中的属性是否使用单引号
 jsxSingleQuote: false,
 // 每行代码的最大宽度
 printWidth: 120,
 // 保留原始文本的换行方式
 proseWrap: "preserve",
 // 不需要Prettier配置文件
 requireConfig: false,
 // 不需要格式化标记
 requirePragma: false,
 // 不解析全局模块
 resolveGlobalModules: false,
 // 是否在语句末尾添加分号
 semi: true,
 // 是否每个属性独占一行
 singleAttributePerLine: false,
 // 是否使用单引号
 singleQuote: false,
 // Tab的宽度为2个空格
 tabWidth: 2,
 // 不使用EditorConfig配置
 useEditorConfig: false,
 // 不使用Tab缩进
 useTabs: false,
 // Vue文件中的脚本和样式是否缩进
 vueIndentScriptAndStyle: false,
 // 尾随逗号的样式，例如 [1, 2, 3,]
 trailingComma: "es5",
 // 不处理node_modules文件夹中的文件
 withNodeModules: false
}
