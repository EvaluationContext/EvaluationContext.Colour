---
title: Hex.AdjustAlpha
parent: Functions
nav_order: 14
head: |
  {% include custom_highlightjs.html %}
---

# EvaluationContext.Colour.Hex.AdjustAlpha

Adjusts the alpha component of a hex color

```dax
EvaluationContext.Colour.Hex.AdjustAlpha(hexColor, alphaChange)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| alphaChange | DOUBLE | Yes | The alpha adjustment (-1 to 1) |

**Returns:** (*STRING*) Modified hex color