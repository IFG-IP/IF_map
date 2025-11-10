from pathlib import Path
path = Path('script.js')
text = path.read_text(encoding='utf-8')
old = "    // 店舗名入力\n    elements.storeName.addEventListener('input', debounce(updateSuggestions, 300));\n    \n    // 店舗名フォーカス時\n    elements.storeName.addEventListener('focus', () => {\n        if (selectedPlace) {\n            // 再入力の場合は選択をクリア\n            selectedPlace = null;\n            elements.storeName.placeholder = '店舗名を入力（例: スターバックス）';\n        }\n    });\n\n"
new = "    // 店舗名入力\n    const debouncedUpdateSuggestions = debounce(updateSuggestions, 300);\n    elements.storeName.addEventListener('input', event => {\n        const currentValue = event.target.value.trim();\n\n        if (selectedPlace && selectedPlace.name !== currentValue) {\n            selectedPlace = null;\n            elements.storeName.placeholder = '店舗名を入力（例: スターバックス）';\n        }\n\n        debouncedUpdateSuggestions();\n    });\n\n"
if old not in text:
    raise SystemExit('target block not found')
text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')
