---
title: Hex.LinearTheme
parent: Functions
nav_order: 18
---

# EvaluationContext.Colour.Hex.LinearTheme

Creates a linear gradient variant of a hex color

```dax
EvaluationContext.Colour.Hex.LinearTheme(hexColor, variant, steps, linearRange)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The base hex color (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| variant | INT64 | Yes | The variant index (1-N, wraps around if exceeds steps) |
| steps | INT64 | Yes | The number of steps in the gradient (minimum = 2) |
| linearRange | DOUBLE | Yes | The range of luminance adjustment |

**Returns:** (*STRING*) Gradient variant color in hex format