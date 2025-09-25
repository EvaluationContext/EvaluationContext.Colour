---
title: Hex.AdjustColour
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.09
---

# EvaluationContext.Colour.Hex.AdjustColour

Adjusts multiple components of a hex color simultaneously

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustColour(hexColor, hueChange, saturationChange, luminanceChange, alphaChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| hueChange | INT64 | Yes | The hue adjustment in degrees (-360 to 360) |
| saturationChange | DOUBLE | Yes | The saturation adjustment (-1 to 1) |
| luminanceChange | DOUBLE | Yes | The luminance adjustment (-1 to 1) |
| alphaChange | DOUBLE | Yes | The alpha adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color