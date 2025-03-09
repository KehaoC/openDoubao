# OpenDoubao - 开源豆包

## 项目介绍

这是一个基于 Expo 和 React Native 开发的开源豆包应用，旨在提供一个轻量级、高性能的移动应用解决方案。本项目采用了最新的 Expo 技术栈，支持 iOS、Android 和 Web 多平台部署。

## 技术栈

- Expo (v52.0.37)
- React Native (v0.76.7)
- React Navigation
- TypeScript
- Expo Router (文件路由系统)
- 其他重要依赖：
  - expo-blur
  - expo-haptics
  - react-native-reanimated
  - react-native-gesture-handler
  - react-native-webview

## 主要功能

- 📱 多平台支持（iOS、Android、Web）
- 🎯 基于文件的路由系统
- 🎨 现代化 UI 设计
- 📦 内置标签页导航
- 🔄 手势支持
- 💫 流畅的动画效果

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npx expo start
```

启动后，你可以选择以下方式运行应用：

- 使用 [Expo Go](https://expo.dev/go) 应用扫描二维码
- 在 [iOS 模拟器](https://docs.expo.dev/workflow/ios-simulator/)上运行
- 在 [Android 模拟器](https://docs.expo.dev/workflow/android-studio-emulator/)上运行
- 在浏览器中运行 Web 版本

## 项目结构

```
├── app/                # 应用主目录
│   ├── (tabs)/        # 标签页路由
│   ├── _layout.tsx    # 根布局组件
│   └── +not-found.tsx # 404页面
├── assets/            # 静态资源
│   ├── fonts/        # 字体文件
│   └── images/       # 图片资源
├── components/       # 可复用组件
└── package.json      # 项目配置和依赖
```

## 开发指南

1. 所有页面组件都放在 `app` 目录下，遵循文件路由系统
2. 可复用的组件放在 `components` 目录下
3. 静态资源（图片、字体等）放在 `assets` 目录下
4. 使用 TypeScript 编写代码，确保类型安全

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系我们

如果你有任何问题或建议，欢迎提出 Issue 或在社区中讨论。

- GitHub Issues: [提交问题](https://github.com/yourusername/opendoubao/issues)
- 社区讨论: [加入讨论](https://github.com/yourusername/opendoubao/discussions)
