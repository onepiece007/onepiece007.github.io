// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    //jquery全局引入
    jquery: true
  },

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //https://blog.csdn.net/qq_34645412/article/details/78974413
    //eslint 默认规则：
    /*代码末尾不能加分号 ;
    代码中不能存在多行空行
    tab键不能使用，必须换成两个空格
    代码中不能存在声明了但未使用的变量*/
    //下面是新规则配置 
    "no-unused-vars": [2, {   
      // 允许声明未使用变量  
      "vars": "local",  
      // 参数不检查  
      "args": "none"   
    }],  
    // 关闭语句强制分号结尾  
    "semi": [0],  
    //空行最多不能超过100行  
    "no-multiple-empty-lines": [0, {"max": 100}],  
    //关闭禁止混用tab和空格  
    "no-mixed-spaces-and-tabs": [0], 
    //end
  }
}
