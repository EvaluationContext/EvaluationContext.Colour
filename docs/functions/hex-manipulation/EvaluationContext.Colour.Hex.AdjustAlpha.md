---
title: Hex.AdjustAlpha
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.08
---

# EvaluationContext.Colour.Hex.AdjustAlpha

Adjusts the alpha component of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustAlpha(hexColor, alphaChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| alphaChange | DOUBLE | Yes | The alpha adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color