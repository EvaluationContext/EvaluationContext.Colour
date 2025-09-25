---
title: Hex.AdjustHue
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.05
---

# EvaluationContext.Colour.Hex.AdjustHue

Adjusts the hue of a hex color

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustHue(hexColor, hueChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| hueChange | DOUBLE | Yes | The hue adjustment in degrees (-360 to 360) |

## Returns

(*STRING*) Modified hex color

## Definition

```dax
EvaluationContext.Colour.Hex.AdjustHue =
    (
        hexColor: STRING,
        hueChange: DOUBLE
    ) =>
    
        VAR H = EvaluationContext.Colour.Hex.Hue( hexColor )
        VAR S = EvaluationContext.Colour.Hex.Saturation( hexColor )
        VAR L = EvaluationContext.Colour.Hex.Luminance( hexColor )
        VAR A = EvaluationContext.Colour.Hex.Alpha( hexColor )
    
        VAR NewH = MOD( H + hueChange + 360, 360 )  // Wrap around 0-360
    
        RETURN
            EvaluationContext.Colour.HSL.ToHex( NewH, S, L, A )
```