---
title: Int.ToHex
parent: Functions
nav_order: 3
---

# EvaluationContext.Colour.Int.ToHex

Int to Hex conversion

```dax
EvaluationContext.Colour.Int.ToHex(number, padTo)
```

**Parameters:**

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| number | INT64 | Yes | The integer to convert |
| padTo | INT64 | No | Minimum number of characters in result |

**Returns:** (*STRING*) Hex string of the integer value

**Example:**

```dax
EvaluationContext.Colour.Int.ToHex(220, 2) // Returns DC
```