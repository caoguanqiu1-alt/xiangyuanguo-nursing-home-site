# 香橼果养老院筹建宣传站 v0.1

面向河南省南阳市“香橼果养老院”的筹建期单页宣传网站。项目使用 Vite、React、TypeScript 和原生 CSS 构建，第一版采用单页锚点导航，不使用后端数据库。

## 本地运行

```bash
npm install
npm run dev
```

默认开发服务器会由 Vite 输出本地地址。局域网访问已通过 `--host 0.0.0.0` 开启。

## 构建与检查

```bash
npm run lint
npm run build
```

构建产物输出到 `dist/`。

## 修改站点配置

可替换信息集中在 `src/config/site.ts`：

- 品牌名称、副标题、首页文案、导航、SEO 文案。
- 服务体系、六大优势、智慧养老、食养活动等展示内容。
- 区位与联系信息字段：`addressIsFinal`、`fullAddress`、`latitude`、`longitude`、`mapEmbedUrl`、`navigationUrl`、`phone`、`wechat`、`email`、`consultationHours`。

当前 `addressIsFinal` 默认为 `false`，页面不会显示虚构地图坐标。正式地址确认后，补齐经纬度、地图嵌入地址和导航链接，再改为 `true`。

## 咨询表单

表单使用 Netlify Forms 兼容写法，表单名为 `consultation`。部署到 Netlify 后，可在 Netlify 后台配置表单通知邮箱、垃圾过滤和导出方式。

## Netlify 预览部署

先构建：

```bash
npm run build
```

确认 `dist/` 已生成后，使用项目本地 Netlify CLI 预览部署：

```bash
npx netlify deploy --dir=dist
```

本项目已将 `netlify-cli` 作为开发依赖安装，不需要全局安装。不要直接执行生产部署。正式发布命令需在预览确认后再运行：

```bash
npx netlify deploy --prod --dir=dist
```
