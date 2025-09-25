---
title: Functions
nav_order: 2
has_children: true
---

# Functions

The EvaluationContext.Colour library provides a comprehensive set of functions for working with colors in Power BI. These functions are organized into three main categories:

---

## Hex Colour Manipulation

Core functions for working with hex colours directly. These functions allow you to:

- Adjust color properties (hue, saturation, luminance, alpha)
- Extract color components
- Optimize text contrast

Key functions:
- `Hex.AdjustHue`, `Hex.AdjustSaturation`, `Hex.AdjustLuminance`
- `Hex.Hue`, `Hex.Saturation`, `Hex.Luminance`, `Hex.Alpha`
- `Hex.TextColour` for contrast-based text color selection

[View Hex Manipulation Functions →]({{ site.baseurl }}/docs/functions/hex-manipulation/){: .btn .btn-outline }

---

## Colour Theming

Functions for creating and managing consistent color themes in your reports:

- Generate color palettes
- Create smooth color transitions
- Build linear color themes

Key functions:
- `Hex.Theme` for predefined color palettes
- `Hex.LinearTheme` for generating color scales
- `Hex.Interpolate` for smooth transitions between colors

[View Theming Functions →]({{ site.baseurl }}/docs/functions/theming/){: .btn .btn-outline }

---

## Colour Conversion

Functions for converting between different color formats:

- Convert between hex and integer formats
- Transform RGB values to hex
- Convert HSL colors to hex

Key functions:
- `Int.ToHex` and `Hex.ToInt`
- `RGB.ToHex` for RGB color conversion
- `HSL.ToHex` for HSL color conversion

[View Conversion Functions →]({{ site.baseurl }}/docs/functions/conversion/){: .btn .btn-outline }