---
title: Hex.ToInt
parent: Functions
nav_order: 4
---

# EvaluationContext.Colour.Hex.ToInt

Converts a hexadecimal string to its integer value

```dax
EvaluationContext.Colour.Hex.ToInt(hex)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hex | STRING | Yes | The hex value to convert (e.g., "1A") |

**Returns:** (*INT64*) Integer value of the hex string

**Example:**

```dax
EvaluationContext.Colour.Hex.ToInt("FF") // Returns 255
```