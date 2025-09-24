---
title: Hex.Interpolate
parent: Functions
nav_order: 16
---

# EvaluationContext.Colour.Hex.Interpolate

Interpolate between two Hex colors by a given percentage

```dax
EvaluationContext.Colour.Hex.Interpolate(startHexColour, endHexColour, percentage)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| startHexColour | STRING | Yes | The starting hex color (e.g., "<span style="color: #FF0000">■</span> #FF0000") |
| endHexColour | STRING | Yes | The ending hex color (e.g., "<span style="color: #0000FF">■</span> #0000FF") |
| percentage | DOUBLE | Yes | The interpolation percentage (0.0 = startColor, 1.0 = endColor) |

**Returns:** (*STRING*) Interpolated hex color

**Example:**

```dax
EvaluationContext.Colour.Hex.Interpolate("#FF0000", "#0000FF", 0.5) // Returns "#800080"
```