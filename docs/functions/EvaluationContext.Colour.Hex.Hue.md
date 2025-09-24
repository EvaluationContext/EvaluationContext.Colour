---
title: Hex.Hue
parent: Functions
nav_order: 7
---

# EvaluationContext.Colour.Hex.Hue

Extracts the hue component from a HEX color

```dax
EvaluationContext.Colour.Hex.Hue(hexColor)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to evaluate (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |

**Returns:** (*INT64*) Hue value (0-360)

**Example:**

```dax
EvaluationContext.Colour.Hex.Hue("#FF0000") // Returns 0
```