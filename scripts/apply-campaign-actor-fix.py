from __future__ import annotations

import base64
import lzma
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[1]
encoded = "".join(
    (root / path).read_text(encoding="utf-8").strip()
    for path in (
        "scripts/campaign-actor-fix.part-00",
        "scripts/campaign-actor-fix.part-01",
    )
)
patch_data = lzma.decompress(base64.b64decode(encoded))
subprocess.run(
    ["patch", "-p1"],
    cwd=root,
    input=patch_data,
    check=True,
)
