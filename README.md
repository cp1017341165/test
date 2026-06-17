# 💍 陈培 & 温家媚 · 婚礼邀请函

一个精美的婚礼邀请函网页，纯前端实现，可直接部署到 GitHub Pages 或 Cloudflare Pages。

## ✨ 功能特点

- 🎨 浪漫粉金配色设计
- 📱 完全响应式，适配手机和电脑
- 🎵 背景音乐播放控制
- 📸 照片轮播展示
- 🎬 视频播放区
- ⏰ 实时倒计时
- 🌸 花瓣飘落特效
- 🎭 滚动动画效果

## 🚀 快速开始

### 本地预览

1. 直接用浏览器打开 `index.html` 文件
2. 点击"开启邀请函"按钮查看效果

### 替换资源

#### 替换照片
在 `index.html` 文件中找到照片区域，将 `src` 属性替换为你的照片链接：

```html
<img src="你的照片链接" alt="婚纱照1">
```

#### 替换音乐
将你的音乐文件命名为 `music.mp3` 放在项目根目录，或修改代码中的音乐链接：

```html
<audio id="bgMusic" loop>
    <source src="你的音乐文件路径" type="audio/mpeg">
</audio>
```

#### 替换视频
在视频区域替换视频链接或嵌入视频播放器。

## 📦 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub，创建新仓库（如 `wedding-invitation`）
2. 选择 Public（公开）

### 步骤 2：推送代码

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "初始化婚礼邀请函"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/wedding-invitation.git

# 推送到 main 分支
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库 → Settings → Pages
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main`，文件夹选择 `/ (root)`
4. 点击 Save

### 步骤 4：访问你的邀请函

等待几分钟后，访问：
```
https://你的用户名.github.io/wedding-invitation
```

## ☁️ 部署到 Cloudflare Pages

### 步骤 1：登录 Cloudflare

访问 [dash.cloudflare.com](https://dash.cloudflare.com) 登录账号

### 步骤 2：创建项目

1. 左侧菜单选择 Pages
2. 点击 Create a project
3. 选择 Connect to Git
4. 连接你的 GitHub 账号
5. 选择婚礼邀请函仓库

### 步骤 3：配置构建设置

- **Project name**: wedding-invitation（或你喜欢的名字）
- **Production branch**: main
- **Framework preset**: None
- **Build command**: （留空）
- **Build output directory**: `/` 或 `.`

### 步骤 4：部署

点击 Save and Deploy，等待部署完成。

### 步骤 5：访问你的邀请函

部署完成后，访问：
```
https://wedding-invitation.pages.dev
```

## 🎨 自定义修改

### 修改颜色

在 CSS 的 `:root` 部分修改颜色变量：

```css
:root {
    --primary-pink: #FFB6C1;  /* 主粉色 */
    --deep-pink: #FF69B4;     /* 深粉色 */
    --gold: #D4AF37;          /* 金色 */
    --dark-red: #8B0000;      /* 深红色 */
}
```

### 修改倒计时

在 JavaScript 中修改婚礼日期：

```javascript
const weddingDate = new Date('2026-08-23T11:30:00');
```

### 添加地图

可以嵌入高德地图或百度地图 iframe：

```html
<div class="map-container">
    <iframe src="地图嵌入链接" ...></iframe>
</div>
```

## 📝 注意事项

1. **浏览器自动播放限制**：现代浏览器需要用户交互后才能播放音乐，所以设计了"开启邀请函"按钮
2. **图片加载**：使用了 Unsplash 占位图片，请替换为实际照片
3. **移动端优化**：已适配各种屏幕尺寸
4. **分享方式**：
   - 直接分享链接
   - 生成链接的二维码
   - 或直接发送 HTML 文件

## 🔧 高级功能（可选）

### 添加地图

```html
<!-- 高德地图示例 -->
<div class="map-container">
    <iframe 
        src="https://uri.amap.com/marker?position=105.69,30.57&name=赤诚酒店"
        width="100%" 
        height="400" 
        style="border:none;">
    </iframe>
</div>
```

### 添加在线表单

可以嵌入腾讯问卷或金数据表单，收集宾客的出席确认。

## 📄 许可证

MIT License

## 💕 祝福

祝陈培和温家媚新婚快乐，百年好合！🎉
