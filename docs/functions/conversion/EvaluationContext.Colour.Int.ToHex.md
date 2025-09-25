---
title: Int.ToHex
parent: Colour Conversion
grand_parent: Functions
nav_order: 1.01
---

# EvaluationContext.Colour.Int.ToHex

Int to Hex conversion

## Syntax

```dax
EvaluationContext.Colour.Int.ToHex(number, padTo)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| number | INT64 | Yes | The integer to convert |
| padTo | INT64 | No | Minimum number of characters in result |

## Returns

(*STRING*) Hex string of the integer value

## Example

```dax
EvaluationContext.Colour.Int.ToHex(220, 2) // Returns DC
```

## Definition

```dax
EvaluationContext.Colour.Int.ToHex =
    (
        number: INT64,
        padTo: INT64
    ) =>

        VAR MinPadding = IF( number = 0, 1, CEILING( LOG( number + 1, 16 ), 1 ) )
        VAR ActualPadding = MAX( MinPadding, IF( ISBLANK( padTo ), MinPadding, padTo ) )
        VAR BitTable = GENERATESERIES( 1, ActualPadding )
        VAR Hex =
            CONCATENATEX(
                BitTable,
                VAR c = MOD( TRUNC( number / POWER( 16, [Value] - 1 ) ), 16 )
                RETURN
                    SWITCH( c, 10, "A", 11, "B", 12, "C", 13, "D", 14, "E", 15, "F", c ),
                "",
                [Value],
                DESC
            )

        RETURN Hex
```