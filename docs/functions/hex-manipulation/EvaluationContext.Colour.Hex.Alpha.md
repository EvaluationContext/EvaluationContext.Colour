---
title: Hex.Alpha
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.04
---

# EvaluationContext.Colour.Hex.Alpha

Extracts the alpha component from a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.Alpha(hexColor)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to evaluate (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |

## Returns

(*DOUBLE*) Alpha value (0-1)

## Example

```dax
EvaluationContext.Colour.Hex.Alpha("#5E81AC") // Returns 0.6
```

## Definition

```dax
EvaluationContext.Colour.Hex.Alpha =
    (
        hexColor: STRING
    ) =>
    
        VAR CleanHex = IF( LEFT( hexColor, 1) = "#", MID( hexColor, 2, 8), MID( hexColor, 1, 8 ) )
        VAR AlphaHex = IF( LEN( CleanHex ) = 8, MID( CleanHex, 7, 2 ), "FF" )
        VAR Alpha = EvaluationContext.Colour.Hex.ToInt( AlphaHex )
        VAR result = ROUND( Alpha / 255, 4 )
    
        RETURN result
```