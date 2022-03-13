# rainbow

## npmjs.org官方库上传步骤

1. [npm官网](https://www.npmjs.com/) 注册自己的账户,或者从bash里注册
```bash
npm adduser
Username: your name
Password: your password
Email: yourmail
```
可以通过以下命令查看npm当前使用的用户
```bash
npm whoami
```

2.登录
```bash
npm login
Username: your name
Password: your password
```
3. 发布到npm
```bash
npm publish
```
4. 更新到npm,每次更新需要更改版本号
```bash
packname: ^1.1.10
```
5. 卸载一个模块
```bash
npm uninstall
```
6. 撤销一个发布(慎重！)
```bash
npm unpublish packname@version

npm unpublish packname@version
```
版本撤销之后只是不会显示了，但是还是能下载到
