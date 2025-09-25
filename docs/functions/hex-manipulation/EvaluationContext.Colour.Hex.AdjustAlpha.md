---
title: Hex.AdjustAlpha
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.08
---

# EvaluationContext.Colour.Hex.AdjustAlpha

Adjusts the alpha component of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustAlpha(hexColor, alphaChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| alphaChange | DOUBLE | Yes | The alpha adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color

## Definition

```dax
EvaluationContext.Colour.Hex.AdjustAlpha =
    (
        hexColor: STRING,
        alphaChange: DOUBLE
    ) =>
    
        VAR CleanHex = IF( LEFT( hexColor, 1) = "#", MID( hexColor, 2, 6), MID( hexColor, 1, 6 ) )
        VAR A = EvaluationContext.Colour.Hex.Alpha( hexColor )
    
        VAR NewA = EvaluationContext.Colour.Int.ToHex( MIN( MAX( A + alphaChange, 0 ), 1 ) * 255, 2 )
    
        VAR result = "#" & CleanHex & NewA
    
        RETURN result
```