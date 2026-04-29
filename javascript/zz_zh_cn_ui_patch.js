(function () {
    const TEXT_MAP = new Map(Object.entries({
        "Generate": "\u751f\u6210",
        "Settings": "\u8bbe\u7f6e",
        "Styles": "\u98ce\u683c",
        "Models": "\u6a21\u578b",
        "Advanced": "\u9ad8\u7ea7",
        "Preset": "\u9884\u8bbe",
        "Performance": "\u6027\u80fd\u6a21\u5f0f",
        "Quality": "\u8d28\u91cf",
        "Speed": "\u901f\u5ea6",
        "Extreme Speed": "\u6781\u901f",
        "Lightning": "\u95ea\u7535",
        "Hyper-SD": "\u8d85\u5feb SD",
        "Disabled": "\u7981\u7528",
        "Vary (Subtle)": "\u8f7b\u5fae\u53d8\u4f53",
        "Vary (Strong)": "\u5f3a\u53d8\u4f53",
        "Upscale (1.5x)": "\u653e\u5927 1.5 \u500d",
        "Upscale (2x)": "\u653e\u5927 2 \u500d",
        "Upscale (Fast 2x)": "\u5feb\u901f\u653e\u5927 2 \u500d",
        "Before First Enhancement": "\u9996\u6b21\u589e\u5f3a\u524d",
        "After Last Enhancement": "\u6700\u540e\u589e\u5f3a\u540e",
        "Order of Processing": "\u5904\u7406\u987a\u5e8f",
        "Use before to enhance small details and after to enhance large areas.": "\u5148\u589e\u5f3a\u5c0f\u7ec6\u8282\uff0c\u540e\u589e\u5f3a\u5927\u533a\u57df\u3002",
        "Guidance Scale": "\u63d0\u793a\u8bcd\u5f15\u5bfc\u5f3a\u5ea6",
        "Higher value means style is cleaner, vivider, and more artistic.": "\u6570\u503c\u8d8a\u9ad8\uff0c\u98ce\u683c\u8d8a\u6e05\u6670\u3001\u9c9c\u660e\u3001\u827a\u672f\u5316\u3002",
        "Image Sharpness": "\u56fe\u50cf\u9510\u5ea6",
        "Higher value means image and texture are sharper.": "\u6570\u503c\u8d8a\u9ad8\uff0c\u56fe\u50cf\u548c\u7eb9\u7406\u8d8a\u9510\u5229\u3002",
        "Aspect Ratios": "\u56fe\u7247\u6bd4\u4f8b",
        "Image Number": "\u51fa\u56fe\u6570\u91cf",
        "Output Format": "\u8f93\u51fa\u683c\u5f0f",
        "Negative Prompt": "\u53cd\u5411\u63d0\u793a\u8bcd",
        "Input Image": "\u8f93\u5165\u56fe\u7247",
        "Upscale or Variation": "\u653e\u5927 / \u53d8\u4f53",
        "Upscale or Variation:": "\u653e\u5927 / \u53d8\u4f53\uff1a",
        "Image Prompt": "\u56fe\u50cf\u53c2\u8003",
        "Inpaint or Outpaint": "\u5c40\u90e8\u91cd\u7ed8 / \u6269\u56fe",
        "Describe": "\u53cd\u63a8\u63d0\u793a\u8bcd",
        "Enhance": "\u589e\u5f3a",
        "Metadata": "\u5143\u6570\u636e",
        "Base Model (SDXL only)": "\u57fa\u7840\u6a21\u578b\uff08\u4ec5 SDXL\uff09",
        "Refiner (SDXL or SD 1.5)": "\u7cbe\u4fee\u6a21\u578b\uff08SDXL \u6216 SD 1.5\uff09",
        "Weight": "\u6743\u91cd",
        "Stop At": "\u7ed3\u675f\u6b65\u6570",
        "Refresh All Files": "\u5237\u65b0\u6240\u6709\u6587\u4ef6",
        "\ud83d\udd04 Refresh All Files": "\ud83d\udd04 \u5237\u65b0\u6240\u6709\u6587\u4ef6",
        "Type prompt here or paste parameters.": "\u8f93\u5165\u6b63\u5411\u63d0\u793a\u8bcd\uff0c\u6216\u7c98\u8d34\u53c2\u6570\u3002",
        "Type prompt here.": "\u8f93\u5165\u63d0\u793a\u8bcd\u3002",
        "Describing what you do not want to see.": "\u8f93\u5165\u4e0d\u60f3\u51fa\u73b0\u7684\u5185\u5bb9\u3002",
        "\ud83d\udcda History Log": "\ud83d\udcda \u5386\u53f2\u8bb0\u5f55",
        "History Log": "\u5386\u53f2\u8bb0\u5f55",
        "Random": "\u968f\u673a\u79cd\u5b50",
        "Developer Debug Mode": "\u5f00\u53d1\u8005\u8c03\u8bd5\u6a21\u5f0f",
        "Documentation": "\u6587\u6863",
        "\ud83d\udcd4 Documentation": "\ud83d\udcd4 \u6587\u6863",
        "portrait_cn": "\u5199\u771f\u4eba\u50cf",
        "clean_photo_cn": "\u6e05\u900f\u5199\u771f",
        "art_photo_cn": "\u827a\u672f\u5199\u771f",
        "arcane_cn": "Arcane\u98ce\u683c",
        "initial": "\u521d\u59cb",
        "default": "\u9ed8\u8ba4",
        "realistic": "\u5199\u5b9e",
        "anime": "\u52a8\u6f2b",
        "sai": "SAI\u827a\u672f",
        "pony_v6": "Pony v6"
    }));

    const PREFIX_MAP = new Map(Object.entries({
        "Aspect Ratios ": "\u56fe\u7247\u6bd4\u4f8b "
    }));

    const STYLE_KEEP = new Set([
        "Fooocus V2",
        "Fooocus Photograph",
        "Fooocus Cinematic",
        "Fooocus Enhance",
        "Fooocus Sharp",
        "SAI Digital Art",
        "SAI Photographic",
        "SAI Cinematic",
        "SAI Texture"
    ]);

    const STYLE_NOTE_ID = "zz-zh-cn-style-note";
    let scheduled = false;

    function getRoot() {
        const app = document.getElementsByTagName("gradio-app");
        const elem = app.length === 0 ? document : app[0];
        return elem.shadowRoot ? elem.shadowRoot : elem;
    }

    function normalizeText(text) {
        return (text || "").replace(/\s+/g, " ").trim();
    }

    function translateExact(text) {
        const normalized = normalizeText(text);
        if (!normalized) {
            return null;
        }
        if (TEXT_MAP.has(normalized)) {
            return TEXT_MAP.get(normalized);
        }
        for (const [prefix, translatedPrefix] of PREFIX_MAP.entries()) {
            if (normalized.startsWith(prefix)) {
                return translatedPrefix + normalized.slice(prefix.length);
            }
        }
        return null;
    }

    function isTranslatableTextNode(node) {
        if (!node || !node.parentElement) {
            return false;
        }
        const parentTag = node.parentElement.nodeName;
        if (parentTag === "SCRIPT" || parentTag === "STYLE" || parentTag === "TEXTAREA") {
            return false;
        }
        const normalized = normalizeText(node.textContent);
        return normalized.length > 0;
    }

    function patchTextNode(node) {
        if (!isTranslatableTextNode(node)) {
            return;
        }
        const original = normalizeText(node.textContent);
        const translated = translateExact(original);
        if (!translated || translated === original) {
            return;
        }
        node.textContent = translated;
        if (node.parentElement && !node.parentElement.getAttribute("data-original-text")) {
            node.parentElement.setAttribute("data-original-text", original);
        }
    }

    function patchElementAttributes(root) {
        const elements = root.querySelectorAll("[placeholder], [title], input[value], button, textarea");
        elements.forEach((el) => {
            if (typeof el.placeholder === "string") {
                const translated = translateExact(el.placeholder);
                if (translated) {
                    el.placeholder = translated;
                }
            }
            if (typeof el.title === "string") {
                const translated = translateExact(el.title);
                if (translated) {
                    el.title = translated;
                }
            }
            if (el.tagName === "INPUT") {
                const type = (el.getAttribute("type") || "").toLowerCase();
                if (type === "button" || type === "submit") {
                    const translated = translateExact(el.value);
                    if (translated) {
                        el.value = translated;
                    }
                }
            }
        });
    }

    function patchTextTree(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let current = walker.nextNode();
        while (current) {
            nodes.push(current);
            current = walker.nextNode();
        }
        nodes.forEach(patchTextNode);
    }

    function getStyleName(label) {
        const span = label.querySelector("span");
        if (!span) {
            return normalizeText(label.textContent);
        }
        return normalizeText(span.getAttribute("data-original-text") || span.textContent || label.textContent);
    }

    function findStyleSearchInput(root, styleContainer) {
        const tab = styleContainer.closest(".tabitem") || styleContainer.parentElement;
        if (!tab) {
            return null;
        }
        return tab.querySelector('input[type="text"], textarea');
    }

    function ensureStyleNote(styleContainer, showNote) {
        const host = styleContainer.parentElement;
        if (!host) {
            return;
        }

        let note = host.querySelector("#" + STYLE_NOTE_ID);
        if (!note) {
            note = document.createElement("div");
            note.id = STYLE_NOTE_ID;
            note.textContent = "\u5df2\u7b80\u5316\uff1a\u4ec5\u663e\u793a\u5e38\u7528\u98ce\u683c\u3002\u5220\u9664 javascript/zz_zh_cn_ui_patch.js \u53ef\u6062\u590d\u5b8c\u6574\u5217\u8868\u3002\u641c\u7d22\u6846\u8f93\u5165\u5185\u5bb9\u65f6\u4f1a\u663e\u793a\u5168\u90e8\u7ed3\u679c\u3002";
            note.style.fontSize = "12px";
            note.style.lineHeight = "1.5";
            note.style.margin = "0 0 8px 0";
            note.style.padding = "8px 10px";
            note.style.border = "1px solid rgba(120, 120, 120, 0.25)";
            note.style.borderRadius = "8px";
            note.style.background = "rgba(120, 120, 120, 0.08)";
            note.style.color = "inherit";
            host.insertBefore(note, styleContainer);
        }
        note.style.display = showNote ? "" : "none";
    }

    function simplifyStyles(root) {
        const styleContainer = root.querySelector(".style_selections");
        if (!styleContainer) {
            return false;
        }

        const labels = styleContainer.querySelectorAll("label");
        if (!labels.length) {
            return false;
        }

        const searchInput = findStyleSearchInput(root, styleContainer);
        const searchActive = !!(searchInput && searchInput.value && searchInput.value.trim().length > 0);
        ensureStyleNote(styleContainer, !searchActive);

        labels.forEach((label) => {
            const styleName = getStyleName(label);
            const checked = !!label.querySelector('input[type="checkbox"]:checked');
            const shouldShow = searchActive || checked || STYLE_KEEP.has(styleName);
            label.style.display = shouldShow ? "" : "none";
            label.dataset.zzZhCnUiPatchHidden = shouldShow ? "0" : "1";
        });
        return true;
    }

    function applyAll() {
        scheduled = false;
        const root = getRoot();
        if (!root) {
            return;
        }
        patchElementAttributes(root);
        patchTextTree(root);
        simplifyStyles(root);
    }

    function scheduleApply() {
        if (scheduled) {
            return;
        }
        scheduled = true;
        window.requestAnimationFrame(applyAll);
    }

    function installObserver() {
        const root = getRoot();
        if (!root) {
            window.setTimeout(installObserver, 300);
            return;
        }

        scheduleApply();

        const observer = new MutationObserver(() => {
            scheduleApply();
        });
        observer.observe(root, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true
        });

        root.addEventListener("input", scheduleApply, true);
        root.addEventListener("change", scheduleApply, true);
        root.addEventListener("click", scheduleApply, true);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", installObserver);
    } else {
        installObserver();
    }
})();
