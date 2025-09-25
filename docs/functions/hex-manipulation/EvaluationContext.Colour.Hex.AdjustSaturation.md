---
title: Hex.AdjustSaturation
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.06
---

# EvaluationContext.Colour.Hex.AdjustSaturation

Adjusts the saturation of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustSaturation(hexColor, saturationChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| saturationChange | DOUBLE | Yes | The saturation adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color