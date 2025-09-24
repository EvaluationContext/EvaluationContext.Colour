---
title: Hex.TextColour
parent: Functions
nav_order: 19
---

# EvaluationContext.Colour.Hex.TextColour

Determines appropriate text color (black/white) for contrast against background

```dax
EvaluationContext.Colour.Hex.TextColour(backgroundHex)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| backgroundHex | STRING | Yes | The background hex color to evaluate (e.g., <span style="color: #FFFFFF">■</span> #01B8AA") |

**Returns:** (*STRING*) "<span style="color: #000000">■</span> #000000" for dark text or "<span style="color: #FFFFFF">■</span> #FFFFFF" for light text