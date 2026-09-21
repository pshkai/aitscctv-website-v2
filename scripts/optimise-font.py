"""Rebuild the served Thai font from the retained OFL source (fonttools + brotli)."""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset
root=Path(__file__).resolve().parents[1]
font=TTFont(root/'public/NotoSansThai.ttf')
instantiateVariableFont(font, {'wdth':100,'wght':(400,700)}, inplace=True)
options=subset.Options()
subsetter=subset.Subsetter(options=options)
subsetter.populate(unicodes=range(0x0e00,0x0e80))
subsetter.subset(font)
font.flavor='woff2'
font.save(root/'public/NotoSansThai.woff2')
print((root/'public/NotoSansThai.woff2').stat().st_size)
