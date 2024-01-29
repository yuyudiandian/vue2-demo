# vue2-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## 比较mac与windows机器构建速度差异
1. 分支main下使用的是vue-cli-service进行打包，分支vite使用的是vite进行打包，请选择合适的分支进行测试。
1. 到/src/util文件目录下执行generateVueFile.js脚本，执行前请先修改fileCount参数，fileCount控制脚本在/src/views/pages目录下自动生成vue文件的数量，每个文件都是一个页面。
```javascript
// 修改生成的文件数量和文件名（比如设置fileCount=1000）
const fileCount = 10;
const fileNamePrefix = "A";
```
3. 终端执行yarn serve启动项目。
```
yarn serve
```
4. 终端执行yarn build构建项目生产文件。
```
yarn build
```