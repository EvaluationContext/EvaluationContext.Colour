---
title: Hex.ToInt
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.02
---

# EvaluationContext.Colour.Hex.ToInt

Converts a hexadecimal string to its integer value

## Syntax

```dax
EvaluationContext.Colour.Hex.ToInt(hex)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hex | STRING | Yes | The hex value to convert (e.g., "1A") |

## Returns

(*INT64*) Integer value of the hex string

## Example

```dax
EvaluationContext.Colour.Hex.ToInt("FF") // Returns 255
```