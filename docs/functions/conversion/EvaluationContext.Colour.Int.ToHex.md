---
title: Int.ToHex
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.01
---

# EvaluationContext.Colour.Int.ToHex

Int to Hex conversion

## Syntax

```dax
EvaluationContext.Colour.Int.ToHex(number, padTo)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| number | INT64 | Yes | The integer to convert |
| padTo | INT64 | No | Minimum number of characters in result |

## Returns

(*STRING*) Hex string of the integer value

## Example

```dax
EvaluationContext.Colour.Int.ToHex(220, 2) // Returns DC
```