---
title: Hex.Saturation
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.02
---

# EvaluationContext.Colour.Hex.Saturation

Extracts the saturation component from a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.Saturation(hexColor)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to evaluate (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |

## Returns

(*DOUBLE*) Saturation value (0-1)

## Example

```dax
EvaluationContext.Colour.Hex.Saturation("#5E81AC") // Returns 0.32
```

## Definition

```dax
EvaluationContext.Colour.Hex.Saturation =
    (
        hexColor: STRING
    ) =>
    
        VAR CleanHex = IF( LEFT( hexColor , 1) = "#", MID( hexColor, 2, 6), MID( hexColor, 1, 6 ) )
        VAR R = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 1, 2 ) )
        VAR G = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 3, 2 ) )
        VAR B = EvaluationContext.Colour.Hex.ToInt( MID( CleanHex, 5, 2 ) )
    
        VAR Mx = MAX( MAX( R, G ), B)
        VAR Mn = MIN( MIN( R, G ), B)
        VAR Delta = Mx - Mn
    
        VAR L = ( Mx + Mn ) / 2
        VAR S =
            SWITCH(
                true,
                Delta = 0, 0,
                L <= 127.5, Delta / (Mx + Mn),
                L > 127.5, Delta / (510 - Mx - Mn)
            )
    
        RETURN S
```