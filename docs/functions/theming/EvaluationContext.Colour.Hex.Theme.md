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

## Example

```dax
EvaluationContext.Colour.Hex.Theme("Power BI", 2) // Returns "#12239E"
```

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

---

## Definition

```dax
EvaluationContext.Colour.Hex.Theme =
    (
        themeName: STRING,
        variant: INT64
    ) =>
    
        VAR Themes =
            DATATABLE(
            "ThemeName", STRING,
            "Variant", INTEGER,
            "Colour", STRING,
            {
                // Power BI Default
                {"Power BI", 1, "#118DFF"},
                {"Power BI", 2, "#12239E"},
                {"Power BI", 3, "#E66C37"},
                {"Power BI", 4, "#6B007B"},
                {"Power BI", 5, "#E044A7"},
                {"Power BI", 6, "#744EC2"},
                {"Power BI", 7, "#D9B300"},
                {"Power BI", 8, "#D64550"},
                {"Power BI", 9, "#197278"},
                {"Power BI", 10, "#1AAB40"},
                {"Power BI", 11, "#15C6F4"},
                {"Power BI", 12, "#4092FF"},
                {"Power BI", 13, "#FFA058"},
                {"Power BI", 14, "#BE5DC9"},
                {"Power BI", 15, "#F472D0"},
                {"Power BI", 16, "#B5A1FF"},
                {"Power BI", 17, "#C4A200"},
                {"Power BI", 18, "#FF8080"},
                {"Power BI", 19, "#00DBBC"},
                {"Power BI", 20, "#5BD667"},
                {"Power BI", 21, "#0091D5"},
                {"Power BI", 22, "#4668C5"},
                {"Power BI", 23, "#FF6300"},
                {"Power BI", 24, "#99008A"},
                {"Power BI", 25, "#EC008C"},
                {"Power BI", 26, "#533285"},
                {"Power BI", 27, "#99700A"},
                {"Power BI", 28, "#FF4141"},
                {"Power BI", 29, "#1F9A85"},
                {"Power BI", 30, "#25891C"},
                {"Power BI", 31, "#0057A2"},
                {"Power BI", 32, "#002050"},
                {"Power BI", 33, "#C94F0F"},
                {"Power BI", 34, "#450F54"},
                {"Power BI", 35, "#B60064"},
                {"Power BI", 36, "#34124F"},
                {"Power BI", 37, "#6A5A29"},
                {"Power BI", 38, "#1AAB40"},
                {"Power BI", 39, "#BA141A"},
                {"Power BI", 40, "#0C3D37"},
                {"Power BI", 41, "#0B511F"},
    
                // Modern Corporate - Professional blues and grays
                {"Modern Corporate", 1, "#2E3440"},
                {"Modern Corporate", 2, "#3B4252"},
                {"Modern Corporate", 3, "#434C5E"},
                {"Modern Corporate", 4, "#4C566A"},
                {"Modern Corporate", 5, "#5E81AC"},
                {"Modern Corporate", 6, "#81A1C1"},
    
                // Ocean Breeze - Cool blues and teals
                {"Ocean Breeze", 1, "#0077BE"},
                {"Ocean Breeze", 2, "#00A8CC"},
                {"Ocean Breeze", 3, "#40E0D0"},
                {"Ocean Breeze", 4, "#87CEEB"},
                {"Ocean Breeze", 5, "#B0E0E6"},
                {"Ocean Breeze", 6, "#E0F6FF"},
    
                // Sunset Vibes - Warm oranges and reds
                {"Sunset Vibes", 1, "#FF6B35"},
                {"Sunset Vibes", 2, "#F7931E"},
                {"Sunset Vibes", 3, "#FFD23F"},
                {"Sunset Vibes", 4, "#EE4B2B"},
                {"Sunset Vibes", 5, "#C04000"},
                {"Sunset Vibes", 6, "#FFCBA4"},
    
                // Forest Green - Natural greens
                {"Forest Green", 1, "#355E3B"},
                {"Forest Green", 2, "#228B22"},
                {"Forest Green", 3, "#32CD32"},
                {"Forest Green", 4, "#90EE90"},
                {"Forest Green", 5, "#98FB98"},
                {"Forest Green", 6, "#F0FFF0"},
    
                // Purple Rain - Rich purples
                {"Purple Rain", 1, "#301934"},
                {"Purple Rain", 2, "#663399"},
                {"Purple Rain", 3, "#9966CC"},
                {"Purple Rain", 4, "#BA55D3"},
                {"Purple Rain", 5, "#DDA0DD"},
                {"Purple Rain", 6, "#E6E6FA"},
    
                // Monochrome - Sophisticated grays
                {"Monochrome", 1, "#1C1C1C"},
                {"Monochrome", 2, "#333333"},
                {"Monochrome", 3, "#666666"},
                {"Monochrome", 4, "#999999"},
                {"Monochrome", 5, "#CCCCCC"},
                {"Monochrome", 6, "#F5F5F5"},
    
                // Vibrant Tech - Bold and energetic
                {"Vibrant Tech", 1, "#FF0080"},
                {"Vibrant Tech", 2, "#00FFFF"},
                {"Vibrant Tech", 3, "#FFFF00"},
                {"Vibrant Tech", 4, "#FF8000"},
                {"Vibrant Tech", 5, "#8000FF"},
                {"Vibrant Tech", 6, "#00FF80"},
    
                // Earth Tones - Natural browns and beiges
                {"Earth Tones", 1, "#8B4513"},
                {"Earth Tones", 2, "#A0522D"},
                {"Earth Tones", 3, "#CD853F"},
                {"Earth Tones", 4, "#DEB887"},
                {"Earth Tones", 5, "#F4A460"},
                {"Earth Tones", 6, "#FFF8DC"},
    
                // Pastel Dreams - Soft and gentle
                {"Pastel Dreams", 1, "#FFB3BA"},
                {"Pastel Dreams", 2, "#FFDFBA"},
                {"Pastel Dreams", 3, "#FFFFBA"},
                {"Pastel Dreams", 4, "#BAFFC9"},
                {"Pastel Dreams", 5, "#BAE1FF"},
                // {"Pastel Dreams", 6, "#E1BAFF"},
    
                // Midnight Blue - Deep blues and navy
                {"Midnight Blue", 1, "#191970"},
                {"Midnight Blue", 2, "#000080"},
                {"Midnight Blue", 3, "#0000CD"},
                {"Midnight Blue", 4, "#4169E1"},
                {"Midnight Blue", 5, "#6495ED"},
                {"Midnight Blue", 6, "#B0C4DE"}
            }
        )
    
        VAR ThemeColors = FILTER(Themes, [ThemeName] = themeName)
        VAR MaxVariant = MAXX(ThemeColors, [Variant])
        VAR AdjustedVariant = IF(
            MaxVariant > 0,
            MOD( variant - 1, MaxVariant ) + 1,
            variant
        )
        VAR SelectedColor =
            MAXX(
                FILTER( ThemeColors, [Variant] = AdjustedVariant),
                [Colour]
            )
    
        RETURN SelectedColor
```