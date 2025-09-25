---
title: Hex.ToInt
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.02
---

# EvaluationContext.Colour.Hex.ToInt

Converts a hexadecimal string to its integer value

## Syntax

```dax
EvaluationContext.Colour.Hex.ToInt(hex)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| hex | STRING | Yes | The hex value to convert (e.g., "1A") |

## Returns

(*INT64*) Integer value of the hex string

## Example

```dax
EvaluationContext.Colour.Hex.ToInt("FF") // Returns 255
```

## Definition

```dax
EvaluationContext.Colour.Hex.ToInt =
    (
        hex: STRING
    ) =>
    
        VAR CleanHex = IF( LEFT( hex, 1 ) = "#", MID( hex, 2, LEN( hex ) - 1), hex )
        VAR Result =
            SUMX(
                GENERATESERIES( 1, LEN( CleanHex ) ),
                VAR Pos = [Value]
                VAR c = MID( CleanHex, Pos, 1 )
                VAR DigitValue = SWITCH( UPPER( c ), "A", 10, "B", 11, "C", 12, "D", 13, "E", 14, "F", 15, VALUE( c ) )
                RETURN
                    DigitValue * POWER( 16, LEN( hex ) - Pos )
            )
    
        RETURN Result
```