---
title: Hex.Luminance
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.03
---

# EvaluationContext.Colour.Hex.Luminance

Extracts the luminance component from a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.Luminance(hexColor)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to evaluate (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |

## Returns

(*DOUBLE*) Luminance value (0-1)

## Definition

```dax
EvaluationContext.Colour.Hex.Luminance =
    (
        hexColor: STRING
    ) =>
    
        VAR CleanHex = IF( LEFT( hexColor, 1) = "#", MID( hexColor, 2, 6), MID( hexColor, 1, 6 ) )
        VAR R = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 1, 2 ) )
        VAR G = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 3, 2 ) )
        VAR B = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 5, 2 ) )
    
        VAR Mx = MAX( MAX( R, G ), B)
        VAR Mn = MIN( MIN( R, G ), B)
        VAR Delta = Mx - Mn
    
        VAR L = ( Mx + Mn ) / 2
        VAR result = ROUND( L, 4 ) / 255
    
        RETURN result
```