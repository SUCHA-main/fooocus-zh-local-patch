# 基于本仓库重建 Fooocus 中文本地环境

本文档说明：如果原来的 `D:\AIpainting` 整套运行目录已经删除，将来如何基于本仓库重新搭建一套可用的 Fooocus 中文本地环境。

## 结论

本仓库可以恢复中文补丁和启动脚本，不能单独恢复完整运行环境。

可以恢复：

- 中文语言补丁：`language/zh_cn_patch.json`
- 中文 preset：`presets/*_cn.json`
- 前端中文 UI 补丁：`javascript/zz_zh_cn_ui_patch.js`
- 补丁启动器：`launch_zh_cn_ui_patch.py`
- Windows 启动脚本：`start-gpu-zh-cn*.bat`
- 自定义图标和本地说明文件

不能恢复：

- Fooocus 官方完整源码或官方 Windows 整合包
- Python 运行时、虚拟环境、依赖包
- 模型文件，例如 checkpoints、LoRA、ControlNet、VAE、upscaler
- 已生成图片和 `outputs/`
- 旧机器上的 `config.txt` 本机路径配置
- 缓存、日志、临时文件

## 重建前要求

### 1. 操作系统

建议使用 Windows 10 或 Windows 11。本文档按 Windows 路径和 `.bat` 启动脚本编写。

### 2. 硬件

建议准备：

- NVIDIA GPU，至少 4GB VRAM；更大的 SDXL 模型和更高分辨率会需要更多 VRAM。
- 至少 8GB 系统内存；实际使用建议 16GB 或以上。
- 足够磁盘空间。Fooocus 本体、Python 环境和基础模型通常会占用数十 GB，额外模型会继续增加空间占用。
- 保持 Windows 虚拟内存开启。显存或内存紧张时，关闭虚拟内存容易导致启动或生成失败。

CPU-only 理论上可以运行，但速度很慢，不建议作为日常使用方案。

### 3. 网络

首次安装和首次启动通常需要联网下载：

- Fooocus 官方包或源码
- Python 依赖
- PyTorch / torchvision
- SDXL 基础模型和 Fooocus 需要的辅助模型

如果网络环境无法访问 GitHub、Hugging Face 或 PyTorch 下载源，需要提前准备镜像源或手动下载模型。

### 4. 外部来源

只从 Fooocus 官方 GitHub 获取本体：

- 官方仓库：https://github.com/lllyasviel/Fooocus
- 官方 Releases：https://github.com/lllyasviel/Fooocus/releases

不要依赖第三方仿冒网站。安装步骤、依赖版本和下载包名称以后可能会变，以 Fooocus 官方仓库当前说明为准。

## 推荐重建方式：官方 Windows 包 + 本仓库补丁

这是最接近原 `D:\AIpainting` 使用方式的路线。

### 1. 下载并解压 Fooocus

1. 打开 Fooocus 官方 Releases。
2. 下载官方 Windows 包。
3. 解压到你想放置的位置，例如：

```text
D:\AIpainting\fooocus
```

也可以使用其他路径，例如：

```text
D:\AI\fooocus
E:\Apps\Fooocus
```

路径可以不同，本仓库的启动脚本不会写死作者本机路径。

### 2. 先确认官方 Fooocus 可以运行

在应用补丁前，先运行 Fooocus 官方启动脚本，例如官方包里的 `run.bat`、`start-gpu.bat` 或官方文档当前推荐的脚本。

确认至少做到：

- Python 环境能正常启动。
- 依赖安装没有报错。
- Fooocus Web UI 能打开。
- 首次模型下载能完成，或你已经手动放好了模型。

如果官方 Fooocus 本身不能启动，先解决官方环境问题，再应用本仓库补丁。

### 3. 克隆或下载本补丁仓库

用 Git：

```bat
git clone https://github.com/SUCHA-main/fooocus-zh-local-patch.git
```

或者从 GitHub 页面下载 ZIP 并解压。

### 4. 复制补丁文件到 Fooocus 根目录

把本仓库里的文件复制到 Fooocus 根目录，保持目录结构不变。

需要复制的内容：

```text
assets/icons/fooocus_custom.ico
javascript/zz_zh_cn_ui_patch.js
language/zh_cn_patch.json
presets/arcane_cn.json
presets/art_photo_cn.json
presets/clean_photo_cn.json
presets/portrait_cn.json
launch_zh_cn_ui_patch.py
start-gpu-zh-cn.bat
start-gpu-zh-cn-local.bat
start-gpu-zh-cn-fixed.bat
LOCAL_CUSTOM_README_CN.txt
```

复制后，Fooocus 根目录中应该能直接看到：

```text
launch.py
webui.py
launch_zh_cn_ui_patch.py
start-gpu-zh-cn-local.bat
language\zh_cn_patch.json
javascript\zz_zh_cn_ui_patch.js
presets\portrait_cn.json
```

### 5. 选择启动脚本

推荐日常本地使用：

```bat
start-gpu-zh-cn-local.bat
```

它会：

- 使用 `launch_zh_cn_ui_patch.py`
- 加载 `zh_cn_patch` 语言文件
- 注入 `javascript/zz_zh_cn_ui_patch.js`
- 禁止 Fooocus 自己重复打开浏览器
- 等本地服务可访问后自动打开浏览器

需要公网分享链接时：

```bat
start-gpu-zh-cn-fixed.bat
```

它会加上 `--share`。

只想使用官方 `launch.py` 和语言补丁，不注入额外前端 JS 时：

```bat
start-gpu-zh-cn.bat
```

## 自定义路径

如果启动脚本不在 Fooocus 根目录，或你想指定 Python，可以在运行前设置环境变量：

```bat
set "FOOOCUS_DIR=D:\AIpainting\fooocus"
set "PYTHON_EXE=D:\AIpainting\fooocus_venv\Scripts\python.exe"
set "FOOOCUS_URL=http://127.0.0.1:7865"
start-gpu-zh-cn-local.bat
```

说明：

- `FOOOCUS_DIR`：Fooocus 根目录。
- `PYTHON_EXE`：Fooocus 使用的 Python 可执行文件。
- `FOOOCUS_URL`：本地浏览器自动打开地址，仅影响 `start-gpu-zh-cn-local.bat`。

## 模型恢复要求

本仓库不保存任何模型。重建后需要重新下载或手动放置模型。

常见位置：

```text
models/checkpoints
models/loras
models/controlnet
models/vae
models/upscale_models
models/inpaint
models/prompt_expansion
```

如果你以前删除了 `D:\AIpainting`，这些模型也会一起丢失，除非你另外备份过。

## 配置恢复要求

本仓库不保存旧的 `config.txt`，因为它通常包含强绑定本机的路径。

重建后可以：

1. 先让 Fooocus 自动生成默认 `config.txt`。
2. 再按新机器路径修改模型目录、输出目录和默认模型。
3. 确保 JSON 格式正确，路径里的反斜杠要写成 `\\`。

不要直接使用旧机器上的硬编码路径，除非新机器路径完全一致。

## 验证清单

重建完成后检查：

- `start-gpu-zh-cn-local.bat` 能启动。
- 浏览器能打开 Fooocus 页面。
- 页面语言补丁生效。
- preset 列表能看到中文 preset。
- 前端中文 UI 补丁生效。
- GPU 正常参与推理，没有被强制切到 CPU。
- 生成图片能保存到预期输出目录。

## 常见问题

### 启动时找不到 Python

确认 Fooocus 官方环境是否已经安装完成。必要时设置：

```bat
set "PYTHON_EXE=D:\path\to\python.exe"
```

### 启动时找不到 `launch_zh_cn_ui_patch.py`

说明补丁文件没有复制到 Fooocus 根目录，或 `FOOOCUS_DIR` 指错了。

### 页面打开但中文 UI 不完整

确认这些文件存在：

```text
language/zh_cn_patch.json
javascript/zz_zh_cn_ui_patch.js
```

并优先使用：

```bat
start-gpu-zh-cn-local.bat
```

### 模型重新下载很慢

本仓库不能解决模型下载问题。可以使用官方支持的下载方式、镜像源，或手动把模型放入对应 `models/` 子目录。

## 是否可以删除旧 `D:\AIpainting`

如果你不需要旧模型、旧输出图片、旧配置和旧运行环境，那么可以删除。

删除后，将来可以按本文档重建 Fooocus 和中文补丁，但需要重新安装官方 Fooocus、重新下载模型，并重新配置本机路径。
