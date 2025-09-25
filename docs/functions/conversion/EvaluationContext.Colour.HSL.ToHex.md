---
title: HSL.ToHex
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.04
---

# EvaluationContext.Colour.HSL.ToHex

Converts HSL color values to hexadecimal format

## Syntax

```dax
EvaluationContext.Colour.HSL.ToHex(h, s, l, alpha)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| h | INT64 | Yes | Hue (0-360) |
| s | DOUBLE | Yes | Saturation (0-1) |
| l | DOUBLE | Yes | Lightness (0-1) |
| alpha | DOUBLE | No | The alpha value (0-1) |

## Returns

(*STRING*) Hex color string with optional alpha

## Example

```dax
EvaluationContext.Colour.HSL.ToHex(0, 1, 0.5) // Returns "#FF0000"
```