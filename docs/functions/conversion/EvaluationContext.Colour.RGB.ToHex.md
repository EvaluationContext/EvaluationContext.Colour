---
title: RGB.ToHex
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.04
---

# EvaluationContext.Colour.RGB.ToHex

Converts RGB color values to hexadecimal format

## Syntax

```dax
EvaluationContext.Colour.RGB.ToHex(red, green, blue, alpha)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| red | INT64 | Yes | The red value (0-255) |
| green | INT64 | Yes | The green value (0-255) |
| blue | INT64 | Yes | The blue value (0-255) |
| alpha | DOUBLE | No | The alpha value (0-1) |

## Returns

(*STRING*) Hex color string with optional alpha

## Example

```dax
EvaluationContext.Colour.RGB.ToHex(255, 0, 0) // Returns "#FF0000"
EvaluationContext.Colour.RGB.ToHex(255, 0, 0, 0.5) // Returns "#FF000080"
```

## Definition

```dax
EvaluationContext.Colour.RGB.ToHex =
    (
        red: INT64,
        green: INT64,
        blue: INT64,
        alpha: DOUBLE
    ) =>

        "#" &
        EvaluationContext.Colour.Int.ToHex( red, 2 ) &
        EvaluationContext.Colour.Int.ToHex( green, 2 ) &
        EvaluationContext.Colour.Int.ToHex( blue, 2 ) &
        IF( NOT ISBLANK( alpha ), EvaluationContext.Colour.Int.ToHex( alpha * 255, 2 ) )
```