---
title: Hex.AdjustLuminance
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.07
---

# EvaluationContext.Colour.Hex.AdjustLuminance

Adjusts the luminance of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustLuminance(hexColor, luminanceChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| luminanceChange | DOUBLE | Yes | The luminance adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color