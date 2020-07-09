### 引入文档

- andorid引入dsbridge

参考文档： https://github.com/wendux/DSBridge-Android/blob/master/readme-chs.md

- ios引入dsbridge

参考文档：https://github.com/wendux/DSBridge-IOS/blob/master/readme-chs.md


定义方法：

前端引入dsbridge,`var dsBridge=require("dsbridge")`

dsBridge.call('addBookShelfNative', {
  bookId: '',
  source: '',
  action: ''
}, function(isSuccess){})





