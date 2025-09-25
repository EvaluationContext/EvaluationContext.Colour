---
title: Hex.AdjustColour
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.09
---

# EvaluationContext.Colour.Hex.AdjustColour

Adjusts multiple components of a hex color simultaneously

## Syntax

```dax
EvaluationContext.Colour.Hex.AdjustColour(hexColor, hueChange, saturationChange, luminanceChange, alphaChange)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hexColor | STRING | Yes | The hex color to adjust (e.g., "<span style="color: #01B8AA">■</span> #01B8AA") |
| hueChange | INT64 | Yes | The hue adjustment in degrees (-360 to 360) |
| saturationChange | DOUBLE | Yes | The saturation adjustment (-1 to 1) |
| luminanceChange | DOUBLE | Yes | The luminance adjustment (-1 to 1) |
| alphaChange | DOUBLE | Yes | The alpha adjustment (-1 to 1) |

## Returns

(*STRING*) Modified hex color

## Definition

```dax
EvaluationContext.Colour.Hex.AdjustColour =
    (
        hexColor: STRING,
        hueChange: INT64,
        saturationChange: DOUBLE,
        luminanceChange: DOUBLE,
        alphaChange: DOUBLE
    ) =>
    
        VAR Step1 = IF( HueChange = 0, hexColor, EvaluationContext.Colour.Hex.AdjustHue( hexColor, hueChange ) )
        VAR Step2 = IF( saturationChange = 0, Step1, EvaluationContext.Colour.Hex.AdjustSaturation( Step1, saturationChange ) )
        VAR Step3 = IF( luminanceChange = 0, Step2, EvaluationContext.Colour.Hex.AdjustLuminance( Step2, luminanceChange ) )
        VAR Step4 = IF( alphaChange = 0, Step3, EvaluationContext.Colour.Hex.AdjustAlpha( Step3, alphaChange ) )
    
        RETURN Step4
```