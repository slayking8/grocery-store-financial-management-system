# Expanded testing assortment

This separate prototype contains **147 products**. The assortment below contributes 128 products; 19 other sample products remain. All 147 have unique complete keypad codes. The expanded families use emojis, including their pre-existing samples. Names, combinations, prices and stock are fictional testing data, not verified manufacturer availability.

| Family | Brands / choices | Variants per brand | Packages | Count |
| --- | --- | --- | --- | --- |
| Sumo (`D1`) | Ceres (`A1`), Compal (`A2`), Santal (`A3`) | Manga (`A1`), Laranja (`A2`), Maçã (`A3`), Ananás (`A4`) | `:1` 200 ml; `:2` 330 ml; `:3` 1 litro; `:4` 2 litros | 48 |
| Refresco (`A4`) | Coca-Cola (`A1`), Fanta (`A2`), Sprite (`A3`) | Coca-Cola: Original (`A1`), Sem açúcar (`A2`). Fanta: Laranja (`A1`), Uva (`A2`), Ananás (`A3`). Sprite: Lima-limão (`A1`), Sem açúcar (`A2`) | `:1` 330 ml; `:2` 500 ml; `:3` 1 litro; `:4` 2 litros | 28 |
| Arroz (`A1`) | Royal Aroma (`A1`), Rani (`A2`), Ashoka (`A3`), Namaste (`A4`), Arima (`B1`), Corrente (`B2`) | Rani → Super Basmati (`A1`); Ashoka → Basmati Integral (`A1`); Namaste → Extra Longo (`A1`); Arima → Tailândia (`A1`) / Índia (`A2`). Royal Aroma and Corrente use shorter paths | `:1` 1 kg for Royal Aroma/Rani/Ashoka, 5 kg for others; `:2` 10 kg; `:3` 25 kg; `:4` 50 kg | 28 |
| Óleo (`A2`) | Dona (`A1`), San Drop (`A2`), Fula (`A3`) | Vegetal (`A1`), Girassol (`A2`) | `:1` 500 ml; `:2` 1 litro; `:3` 2 litros; `:4` 5 litros | 24 |

## Codes to try

- `D1A1A1:4` → Sumo Ceres Manga, 2 litros.
- `D1A2A3:1` → Sumo Compal Maçã, 200 ml.
- `D1A3A4:3` → Sumo Santal Ananás, 1 litro.
- `A4A2A2:2` → Refresco Fanta Uva, 500 ml.
- `A4A1A2:4` → Refresco Coca-Cola Sem açúcar, 2 litros.
- `A1A1:2` → Arroz Royal Aroma, 10 kg.
- `A1B1A2:4` → Arroz Arima Índia, 50 kg.
- `A2A1A2:4` → Óleo Dona Girassol, 5 litros.

Package-first entry also works: `:4D1A1A1` selects the same product as `D1A1A1:4`. Quantities for the sale are entered afterwards.

The seed generator runs before groups, category tiles and stock history are initialized, so these products work in ordinary browsing, text search, inventory and invoice selection as well as the keypad. Configuring paths remains session-only. Reload restores this sample assortment.

Validation: Chromium exercised all 147 full codes and checked that each resolves its exact product; four cross-family selections entered the same invoice; package-first search and ordinary name search worked; target families rendered emojis; a 320px screenshot was inspected; no browser errors were reported.
