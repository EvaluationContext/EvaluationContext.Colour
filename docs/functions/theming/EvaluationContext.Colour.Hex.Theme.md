---
title: Hex.Theme
parent: Colour Theming
grand_parent: Functions
nav_order: 3.01
---

# EvaluationContext.Colour.Hex.Theme

Selects a theme color with variant wrapping

## Syntax

```dax
EvaluationContext.Colour.Hex.Theme(themeName, variant)
```

## Parameters

| Parameter | Type | Required | Description |
|:---:|:---:|:---:|:---:|
| themeName | STRING | Yes | The theme name (e.g., "Office", "Power BI") |
| variant | INT64 | Yes | The variant index (1-N, wraps around if exceeds available variants) |

## Returns

(*STRING*) Theme colour in hex format

---

## Themes

**Power BI**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #118DFF">■</span> #118DFF |
| 2 | <span style="color: #12239E">■</span> #12239E |
| 3 | <span style="color: #E66C37">■</span> #E66C37 |
| 4 | <span style="color: #6B007B">■</span> #6B007B |
| 5 | <span style="color: #E044A7">■</span> #E044A7 |
| ... | ... |
| 41 | <span style="color: #0B511F">■</span> #0B511F |

**Modern Corporate**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #2E3440">■</span> #2E3440 |
| 2 | <span style="color: #3B4252">■</span> #3B4252 |
| 3 | <span style="color: #434C5E">■</span> #434C5E |
| 4 | <span style="color: #4C566A">■</span> #4C566A |
| 5 | <span style="color: #5E81AC">■</span> #5E81AC |
| 6 | <span style="color: #81A1C1">■</span> #81A1C1 |

**Ocean Breeze**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #0077BE">■</span> #0077BE |
| 2 | <span style="color: #00A8CC">■</span> #00A8CC |
| 3 | <span style="color: #40E0D0">■</span> #40E0D0 |
| 4 | <span style="color: #87CEEB">■</span> #87CEEB |
| 5 | <span style="color: #B0E0E6">■</span> #B0E0E6 |
| 6 | <span style="color: #E0F6FF">■</span> #E0F6FF |

**Sunset Vibes**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #FF6B35">■</span> #FF6B35 |
| 2 | <span style="color: #F7931E">■</span> #F7931E |
| 3 | <span style="color: #FFD23F">■</span> #FFD23F |
| 4 | <span style="color: #EE4B2B">■</span> #EE4B2B |
| 5 | <span style="color: #C04000">■</span> #C04000 |
| 6 | <span style="color: #FFCBA4">■</span> #FFCBA4 |

**Forest Green**

| Variant | Color |
|:---:|:---:|
| 1 | <span style="color: #355E3B">■</span> #355E3B |
| 2 | <span style="color: #228B22">■</span> #228B22 |
| 3 | <span style="color: #32CD32">■</span> #32CD32 |
| 4 | <span style="color: #90EE90">■</span> #90EE90 |
| 5 | <span style="color: #98FB98">■</span> #98FB98 |
| 6 | <span style="color: #F0FFF0">■</span> #F0FFF0 |

**Purple Rain**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #301934">■</span> #301934 |
| 2 | <span style="color: #663399">■</span> #663399 |
| 3 | <span style="color: #9966CC">■</span> #9966CC |
| 4 | <span style="color: #BA55D3">■</span> #BA55D3 |
| 5 | <span style="color: #DDA0DD">■</span> #DDA0DD |
| 6 | <span style="color: #E6E6FA">■</span> #E6E6FA |

**Monochrome**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #1C1C1C">■</span> #1C1C1C |
| 2 | <span style="color: #333333">■</span> #333333 |
| 3 | <span style="color: #666666">■</span> #666666 |
| 4 | <span style="color: #999999">■</span> #999999 |
| 5 | <span style="color: #CCCCCC">■</span> #CCCCCC |
| 6 | <span style="color: #F5F5F5">■</span> #F5F5F5 |

**Vibrant Tech**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #FF0080">■</span> #FF0080 | 
| 2 | <span style="color: #00FFFF">■</span> #00FFFF | 
| 3 | <span style="color: #FFFF00">■</span> #FFFF00 | 
| 4 | <span style="color: #FF8000">■</span> #FF8000 | 
| 5 | <span style="color: #8000FF">■</span> #8000FF | 
| 6 | <span style="color: #00FF80">■</span> #00FF80 | 

**Earth Tones**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #8B4513">■</span> #8B4513 |
| 2 | <span style="color: #A0522D">■</span> #A0522D |
| 3 | <span style="color: #CD853F">■</span> #CD853F |
| 4 | <span style="color: #DEB887">■</span> #DEB887 |
| 5 | <span style="color: #F4A460">■</span> #F4A460 |
| 6 | <span style="color: #FFF8DC">■</span> #FFF8DC |

**Pastel Dreams**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #FFB3BA">■</span> #FFB3BA |
| 2 | <span style="color: #FFDFBA">■</span> #FFDFBA |
| 3 | <span style="color: #FFFFBA">■</span> #FFFFBA |
| 4 | <span style="color: #BAFFC9">■</span> #BAFFC9 |
| 5 | <span style="color: #BAE1FF">■</span> #BAE1FF |

**Midnight Blue**

| Variant | Colour |
|:---:|:---:|
| 1 | <span style="color: #191970">■</span> #191970 |
| 2 | <span style="color: #000080">■</span> #000080 |
| 3 | <span style="color: #0000CD">■</span> #0000CD |
| 4 | <span style="color: #4169E1">■</span> #4169E1 |
| 5 | <span style="color: #6495ED">■</span> #6495ED |
| 6 | <span style="color: #B0C4DE">■</span> #B0C4DE |