---
title: Hex.LinearTheme
parent: Colour Theming
grand_parent: Functions
nav_order: 3.02
---

# EvaluationContext.Colour.Hex.LinearTheme

Creates a linear gradient variant of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.LinearTheme(hexColor, variant, steps, linearRange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The base hex color (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| variant | INT64 | Yes | The variant index (1-N, wraps around if exceeds steps) |
| steps | INT64 | Yes | The number of steps in the gradient (minimum = 2) |
| linearRange | DOUBLE | Yes | The range of luminance adjustment |

## Returns

(*STRING*) Gradient variant color in hex format

## Example

```dax
EvaluationContext.Colour.Hex.LinearTheme("#118DFF", 2, 7, 0.5) // Returns "#0061BBFF"
```

## Definition

```dax
EvaluationContext.Colour.Hex.LinearTheme =
    (
        hexColor: STRING,
        variant: INT64,
        steps: INT64,
        linearRange: DOUBLE
    ) =>
    
        VAR StepSize = linearRange / ( steps - 1 )
        VAR AdjustedVariant = MOD( variant - 1, steps ) + 1
        VAR Hex =
            EvaluationContext.Colour.Hex.AdjustLuminance(
                hexColor,
                ( (AdjustedVariant - 1) * StepSize ) - ( linearRange / 2 )
            )
    
        RETURN Hex
```