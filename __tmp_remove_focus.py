import re
from pathlib import Path
path = Path('script.js')
text = path.read_text(encoding='utf-8')
text, count = re.subn(r"\n    // .*?focus.*?\n    elements.storeName.addEventListener\('focus',.*?\n    }\n    }\);\n", '\n', text, count=1, flags=re.DOTALL)
if count == 0:
    raise SystemExit('focus block not found')
path.write_text(text, encoding='utf-8')
