Fooocus 非官方中文本地 UI 补丁说明

一、包含内容
- presets/portrait_cn.json
- presets/clean_photo_cn.json
- presets/art_photo_cn.json
- presets/arcane_cn.json
- language/zh_cn_patch.json
- javascript/zz_zh_cn_ui_patch.js
- launch_zh_cn_ui_patch.py
- start-gpu-zh-cn.bat
- start-gpu-zh-cn-local.bat
- start-gpu-zh-cn-fixed.bat
- assets/icons/fooocus_custom.ico

二、用途
- 增加中文 preset。
- 增加中文语言补丁。
- 注入前端中文 UI 补丁。
- 提供可配置的 Windows 启动脚本。
- 保持 GPU 可用，不强制切换到 CPU。

三、使用方法
1. 先安装并确认 Fooocus 本体可以正常启动。
2. 将本补丁仓库中的文件复制到 Fooocus 根目录，保持目录结构不变。
3. 运行 start-gpu-zh-cn-local.bat 或 start-gpu-zh-cn-fixed.bat。

四、启动脚本配置
默认情况下，启动脚本会把脚本所在目录作为 Fooocus 根目录，并优先使用 Fooocus 目录下的 venv\Scripts\python.exe。

如需自定义路径，可在运行前设置：
- FOOOCUS_DIR：Fooocus 根目录。
- PYTHON_EXE：Python 可执行文件路径。
- FOOOCUS_URL：浏览器自动打开的本地地址，仅 start-gpu-zh-cn-local.bat 使用。

五、回滚方法
删除本补丁复制进去的文件，然后改回官方启动脚本即可。
