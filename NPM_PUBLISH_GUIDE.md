# NPM 发布指南

## 方案一：发布到 Scoped Package（推荐）

如果你想自己先测试，可以发布到一个带作用域的包名（比如 `@你的用户名/avataaars`）。

### 步骤：

1. **修改 package.json 中的包名**：
```json
{
  "name": "@你的npm用户名/avataaars",
  "version": "2.0.1",
  ...
}
```

2. **登录 npm**（如果还没登录）：
```bash
npm login
```

3. **发布包**：
```bash
npm publish --access public
```

注意：scoped package 默认是私有的，需要加 `--access public` 才能公开。

4. **在你的项目中使用**：
```bash
npm install @你的npm用户名/avataaars
```

---

## 方案二：使用不同的包名

如果你想保持原包名但避免冲突，可以使用一个不同的名字：

1. **修改 package.json**：
```json
{
  "name": "avataaars-react19",
  "version": "2.0.1",
  ...
}
```

2. **发布**：
```bash
npm publish
```

---

## 方案三：发布到原包名（需要权限）

如果你有原包的发布权限，可以直接发布：

1. **更新版本号**：
```json
{
  "name": "avataaars",
  "version": "2.1.0",  // 或者 2.0.1
  ...
}
```

2. **发布**：
```bash
npm publish
```

---

## 发布前检查清单

- [ ] 确保 `npm run build` 成功
- [ ] 检查 `dist/` 目录中有编译后的文件
- [ ] 更新版本号（遵循语义化版本）
- [ ] 确保 `.npmignore` 配置正确（已存在）
- [ ] 测试安装和使用

## 版本号说明

- `2.0.1` - 补丁版本（bug 修复）
- `2.1.0` - 次要版本（新功能，向后兼容）
- `3.0.0` - 主要版本（破坏性更改）

## 发布后测试

发布后，创建一个测试项目：

```bash
mkdir test-avataaars
cd test-avataaars
npm init -y
npm install react react-dom @你的npm用户名/avataaars
```

然后测试组件是否正常工作。

