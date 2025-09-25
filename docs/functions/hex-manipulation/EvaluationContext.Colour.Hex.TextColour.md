---
title: Hex.TextColour
parent: Hex Colour Manipulation
grand_parent: Functions
nav_order: 2.10
---

# EvaluationContext.Colour.Hex.TextColour

Determines appropriate text color (black/white) for contrast against background

## Syntax

```dax
EvaluationContext.Colour.Hex.TextColour(backgroundHex)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| backgroundHex | STRING | Yes | The background hex color to evaluate (e.g., <span style="color: #FFFFFF">■</span> #01B8AA") |

## Returns

(*STRING*) <span style="color: #000000">■</span> #000000 for dark text or <span style="color: #FFFFFF">■</span> #FFFFFF for light text

## Definition

```dax
EvaluationContext.Colour.Hex.TextColour =
    (
        backgroundHex: STRING
    ) =>
    
        VAR L = EvaluationContext.Colour.Hex.Luminance( backgroundHex )
        VAR result = IF( L > 0.5, "#000000", "#FFFFFF")  // dark text for light backgrounds, light text for dark backgrounds
    
        RETURN result
```