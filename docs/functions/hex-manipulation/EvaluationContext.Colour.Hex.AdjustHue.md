---
title: Hex.AdjustHue
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.05
---

# EvaluationContext.Colour.Hex.AdjustHue

Adjusts the hue of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustHue(hexColor, hueChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| hueChange | DOUBLE | Yes | The hue adjustment in degrees (-360 to 360) |

## Returns

(*STRING*) Modified hex color