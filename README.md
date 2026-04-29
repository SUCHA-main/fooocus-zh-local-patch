# Fooocus 中文本地 UI 补丁

[English README](README_EN.md)

这是一个非官方 Fooocus 中文本地 UI 补丁说明仓库，用于整理本地中文优化文件，方便复制到已有 Fooocus 安装中使用。

## 快速说明

- 本项目是非官方 Fooocus 中文本地 UI 补丁，不是 Fooocus 官方项目。
- 本仓库不包含模型文件、checkpoints、LoRA、ControlNet 等大文件。
- 本仓库不包含生成图片、输出目录、缓存、日志或虚拟环境。
- 使用前需要先安装 Fooocus，并确认官方启动方式可以正常运行。
- 安装方法：将本仓库文件复制到 Fooocus 根目录，并保持目录结构不变。
- 启动方法：在 Fooocus 根目录运行 `start-gpu-zh-cn-local.bat` 或 `start-gpu-zh-cn-fixed.bat`。
- 回滚方法：只删除本仓库列出的补丁文件，然后改回 Fooocus 官方启动脚本。
- 许可说明：本补丁以 GPL-3.0 发布，详见 `LICENSE`。

## 功能

- 中文 preset：人像、干净照片、艺术照片、Arcane 风格。
- 中文语言补丁：`language/zh_cn_patch.json`。
- 前端 UI 中文补丁：`javascript/zz_zh_cn_ui_patch.js`。
- 可配置的 Windows 启动脚本，不写死作者本机路径。
- 自定义图标：`assets/icons/fooocus_custom.ico`。

## 安装

1. 先安装 Fooocus，并确认官方启动方式可以正常运行。
2. 下载或克隆本补丁仓库。
3. 将本仓库内的文件复制到 Fooocus 根目录，保持目录结构不变。
4. 在 Fooocus 根目录运行 `start-gpu-zh-cn-local.bat` 或 `start-gpu-zh-cn-fixed.bat`。

## 启动脚本配置

默认情况下，`.bat` 会把脚本所在目录作为 Fooocus 根目录，并优先使用 `venv\Scripts\python.exe`。如果需要自定义，可在运行前设置环境变量：

```bat
set "FOOOCUS_DIR=D:\path\to\Fooocus"
set "PYTHON_EXE=D:\path\to\python.exe"
set "FOOOCUS_URL=http://127.0.0.1:7865"
start-gpu-zh-cn-local.bat
```

`FOOOCUS_URL` 只影响 `start-gpu-zh-cn-local.bat` 的自动打开浏览器逻辑。

## 回滚方法

删除复制到 Fooocus 根目录中的本补丁文件，然后改回 Fooocus 官方启动脚本即可。建议只删除本仓库列出的文件，不要删除 Fooocus 官方文件、模型目录或输出目录。

## 包含文件

```text
presets/portrait_cn.json
presets/clean_photo_cn.json
presets/art_photo_cn.json
presets/arcane_cn.json
language/zh_cn_patch.json
javascript/zz_zh_cn_ui_patch.js
launch_zh_cn_ui_patch.py
start-gpu-zh-cn-local.bat
start-gpu-zh-cn-fixed.bat
LOCAL_CUSTOM_README_CN.txt
assets/icons/fooocus_custom.ico
```

## 不包含内容

本仓库不会包含以下内容：

- `models/`
- `outputs/`
- `venv/` 或 `.venv/`
- checkpoints、loras、controlnet 模型文件
- 缓存、日志、临时文件
- 生成图片

## 免责声明

本项目不是 Fooocus 官方项目，也不由 Fooocus 官方维护。Fooocus 的版权和商标归其原项目及贡献者所有。

## 许可证

本补丁以 GPL-3.0 发布。详见 `LICENSE`。
