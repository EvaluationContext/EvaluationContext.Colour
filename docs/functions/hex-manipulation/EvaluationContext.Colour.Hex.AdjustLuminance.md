---
title: Hex.AdjustLuminance
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.07
---

# EvaluationContext.Colour.Hex.AdjustLuminance

Adjusts the luminance of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustLuminance(hexColor, luminanceChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| luminanceChange | DOUBLE | Yes | The luminance adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color

## Example

```dax
EvaluationContext.Colour.Hex.AdjustLuminance("#5E81AC", 0.4) // Returns "#E5EAF199"
```

## Definition

```dax
EvaluationContext.Colour.Hex.AdjustLuminance =
    (
        hexColor: STRING,
        luminanceChange: DOUBLE
    ) =>
    
        VAR H = EvaluationContext.Colour.Hex.Hue( hexColor )
        VAR S = EvaluationContext.Colour.Hex.Saturation( hexColor )
        VAR L = EvaluationContext.Colour.Hex.Luminance( hexColor )
        VAR A = EvaluationContext.Colour.Hex.Alpha( hexColor )
    
        VAR NewL = MIN( MAX( L + luminanceChange, 0 ), 1 )
    
        RETURN
            EvaluationContext.Colour.HSL.ToHex( H, S, NewL, A )
```