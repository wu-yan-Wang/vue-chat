module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  //规则解释查阅 https://cloud.tencent.com/developer/chapter/12618
  //eslint 规则等级
  //"off" 或者 0：关闭规则。
  //"warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
  //"error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    //在单个line元素的内容之前和之后需要换行
    "vue/singleline-html-element-content-newline": "off",
    //在多行元素的内容之前和之后需要换行
    "vue/multiline-html-element-content-newline": "off",
    //在Vue组件中为name属性强制使用特定大小写
    "vue/name-property-casing": ["error", "PascalCase"],
    //禁止使用v-html防止XSS攻击
    "vue/no-v-html": "off",
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    //箭头间距
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    //快间距
    'block-spacing': [2, 'always'],
    //大括号样式
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    //双峰驼命名格式
    'camelcase': [0, {
      'properties': 'always'
    }],
    //尾随逗号
    'comma-dangle': [2, 'never'],
    //逗号周围的间距
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    //逗号样式
    'comma-style': [2, 'last'],
    //是否存在有效的super()调用。
    'constructor-super': 2,
    //通过确保将块语句包装在花括号中来防止错误并提高代码清晰度。当它遇到忽略大括号的块时它会发出警告。
    'curly': [2, 'multi-line'],
    //强制执行成员表达式中的换行符一致性。此规则防止在成员表达式中围绕点使用混合换行符。
    'dot-location': [2, 'property'],
    //在非空文件的末尾至少执行一个换行符（或不存在）
    'eol-last': 2,
    //消除类型不安全的等式操作符。
    'eqeqeq': ["error", "always", { "null": "ignore" }],
    //强化*发生器功能的间距。
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    //当你在 Node.js 中使用回调模式时，你会处理这个错误
    'handle-callback-err': [2, '^(err|error)$'],
    //强制执行一致的缩进样式。默认样式是4 spaces。
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    //强制在 JSX 属性中一致使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
    //在对象字面量属性中的键和值之间保持一致的间距
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    //执行围绕关键字和关键字标记的一致空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    //要求构造函数名以大写字母开头
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    //使用new关键字调用不带参数的构造函数时需要括号，以便提高代码清晰度
    'new-parens': 2,
    //不允许使用Array构造函数。
    'no-array-constructor': 2,
    //阻止使用已弃用和次优代码，但不允许使用arguments.caller和arguments.callee。因此，它会发出警告时arguments.caller和arguments.callee被使用
    'no-caller': 2,
    //禁止调用console对象的方法
    'no-console': 'off',
    //修改类声明的变量
    'no-class-assign': 2,
    //不允许在试验条件不明确赋值运算符if，for，while，和do...while语句
    'no-cond-assign': 2,
    //标记修改使用const关键字声明的变量。
    'no-const-assign': 2,
    //不允许正则表达式中的控制字符
    'no-control-regex': 0,
    //不允许在变量上使用delete操作符
    'no-delete-var': 2,
    //不允许在函数声明或表达式中使用重复的参数名称。它不适用于箭头函数或类方法，因为解析器报告错误
    'no-dupe-args': 2,
    //标记在级别成员中使用重复名称
    'no-dupe-class-members': 2,
    //不允许在对象文字中使用重复键
    'no-dupe-keys': 2,
    //不允许在switch语句的case子句中使用重复的测试表达式。
    'no-duplicate-case': 2,
    //不允许在正则表达式中使用空字符类。
    'no-empty-character-class': 2,
    //标记解构结构对象和数组中的任何空模式，因此，只要遇到问题就会报告问题
    'no-empty-pattern': 2,
    //通过禁止使用eval()函数来防止潜在的危险，不必要的和慢速的代码
    'no-eval': 2,
    //此规则不允许在catch子句中重新分配例外。
    'no-ex-assign': 2,
    //不允许直接修改内建对象的原型。
    'no-extend-native': 2,
    //此规则旨在避免不必要的使用，bind()因此只要立即调用的函数表达式（ IIFE ）正在使用bind()并且没有适当的this值，就会发出警告。此规则不会标记bind()包含函数参数绑定的用法。
    'no-extra-bind': 2,
    //禁止不必要的布尔转换。
    'no-extra-boolean-cast': 2,
    //仅在必要时限制使用括号
    'no-extra-parens': [2, 'functions'],
    //消除一个案件无意中掉到另一个案件。因此，它会标记没有标注评论的任何延期情况。
    'no-fallthrough': 2,
    //消除浮点小数点，并在数值有小数点但在其之前或之后缺少数字时发出警告。
    'no-floating-decimal': 2,
    //不允许重新分配function声明。
    'no-func-assign': 2,
    //消除隐含eval()通过使用setTimeout()，setInterval()或execScript()。
    'no-implied-eval': 2,
    //要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
    'no-inner-declarations': [2, 'functions'],
    //不允许RegExp构造函数中的无效正则表达式字符串。
    'no-invalid-regexp': 2,
    //捕获无效的空格，该空格不是正常的制表符和空格
    'no-irregular-whitespace': 2,
    //防止使用该__iterator__属性时可能出现的错误，该错误在多个浏览器中未实现。
    'no-iterator': 2,
    //通过禁止创建与范围内的变量共享名称的标签的不良做法来创建更清晰的代码
    'no-label-var': 2,
    //消除 JavaScript 中使用带标签的语句
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    //消除脚本顶层或其他块中不必要的和可能混淆的块
    'no-lone-blocks': 2,
    //不允许使用混合空格和制表符进行缩进。
    'no-mixed-spaces-and-tabs': 2,
    //禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格。
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']
  }
}