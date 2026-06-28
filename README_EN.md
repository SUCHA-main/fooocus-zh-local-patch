# Fooocus Chinese Local UI Patch

[中文说明](README.md)

This is an unofficial local Chinese UI patch for Fooocus. It packages local UI translation tweaks and Chinese presets so they can be copied into an existing Fooocus installation.

This repository does not include model files, generated images, virtual environments, outputs, caches, or logs.

## Features

- Chinese presets for portrait, clean photo, art photo, and Arcane-style workflows.
- Chinese language patch: `language/zh_cn_patch.json`.
- Frontend UI patch: `javascript/zz_zh_cn_ui_patch.js`.
- Configurable Windows launch scripts without author-specific local paths.
- `launch_zh_cn_ui_patch.py` keeps GPU startup available while injecting the frontend patch.
- Custom icon: `assets/icons/fooocus_custom.ico`.

## Installation

1. Install Fooocus first and make sure the official launcher works.
2. Download or clone this patch repository.
3. Copy the files from this repository into the Fooocus root directory, preserving the folder structure.
4. Run `start-gpu-zh-cn-local.bat`, `start-gpu-zh-cn-fixed.bat`, or `start-gpu-zh-cn.bat` from the Fooocus root directory.

## Launcher Configuration

By default, the `.bat` files treat their own directory as the Fooocus root and try to use `venv\Scripts\python.exe`. You can override this before launching:

```bat
set "FOOOCUS_DIR=D:\path\to\Fooocus"
set "PYTHON_EXE=D:\path\to\python.exe"
set "FOOOCUS_URL=http://127.0.0.1:7865"
start-gpu-zh-cn-local.bat
```

`FOOOCUS_URL` only affects the browser auto-open logic in `start-gpu-zh-cn-local.bat`.

## Launcher Differences

- `start-gpu-zh-cn-local.bat`: for local use; it waits until the service is reachable, then opens the browser. It passes `--disable-in-browser` to avoid duplicate browser windows.
- `start-gpu-zh-cn-fixed.bat`: uses `launch_zh_cn_ui_patch.py` to inject the frontend Chinese UI patch and enables `--share`.
- `start-gpu-zh-cn.bat`: uses the official `launch.py` with the `zh_cn_patch` language file and does not inject the extra frontend JS.

## Rollback

Delete the patch files that were copied into the Fooocus root directory, then use the official Fooocus launcher again. Only delete files listed in this repository; do not delete official Fooocus files, model directories, or output directories.

## Included Files

```text
presets/portrait_cn.json
presets/clean_photo_cn.json
presets/art_photo_cn.json
presets/arcane_cn.json
language/zh_cn_patch.json
javascript/zz_zh_cn_ui_patch.js
launch_zh_cn_ui_patch.py
start-gpu-zh-cn.bat
start-gpu-zh-cn-local.bat
start-gpu-zh-cn-fixed.bat
LOCAL_CUSTOM_README_CN.txt
assets/icons/fooocus_custom.ico
```

## Excluded Content

This repository intentionally excludes:

- `models/`
- `outputs/`
- `venv/` and `.venv/`
- checkpoints, LoRAs, ControlNet models
- caches, logs, temporary files
- generated images

## Disclaimer

This project is not an official Fooocus project and is not maintained by the Fooocus maintainers. Fooocus belongs to its original project and contributors.

## License

This patch is released under GPL-3.0. See `LICENSE`.
