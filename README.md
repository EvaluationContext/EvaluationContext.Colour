
# EvaluationContext.Colour

A comprehensive set of DAX User-Defined Functions (UDF) designed to enable easy manipulation of hex colours for Power BI.

## Summary

**Color Conversion:** Functions like `Int.ToHex`, `Hex.ToInt`, `RGB.ToHex`, and `HSL.ToHex` allow you to convert color values between different formats (integer, hexadecimal, RGB, HSL). This is useful for working with various colour sources

**Color Manipulation:** Functions like `Hex.AdjustHue`, `Hex.AdjustSaturation`, and `Hex.AdjustLuminance` enable you to modify existing colors. For example, you can create a lighter shade of a color by adjusting its luminance.

**Color Extraction:** Functions such as `Hex.Hue`, `Hex.Saturation`, `Hex.Luminance`, and `Hex.Alpha` can extract specific components of a hexadecimal color string

**Theming and Interpolation:** The `Hex.Theme` function provides access to pre-defined color palettes, while `Hex.LinearTheme` and `Hex.Interpolate` are used for creating gradients and smooth transitions between colors

**Text Readability:** The `Hex.TextColour` function is a great tool for automatically choosing a text color (black or white) that provides sufficient contrast against a given background color, improving readability

## How to Install

- Go to [DaxLib EvaluationContext.Colour](https://daxlib.org/package/EvaluationContext.Colour/) page
- Select `Add to Power BI`
- Click the `Copy` button
- Open Power BI Desktop
- Go to the TMDL View tab and paste the code (CTRL+V)
- Click `Apply`
- Done! You can now use the functions of this package in Power BI

## Power BI Project Example File

Download the Power BI Project (PBIP) file in this repo to see example usage of this library.

![UDF in Action](/assets/img/UDFInPowerBI.png)