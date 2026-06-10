# Shop photos

Drop each shop's photo in this folder, named after the shop's `id` (from `shops.js`):

| File name              | Shop                              |
|------------------------|-----------------------------------|
| `adams.jpg`            | Adams' Antiquarian Book Shop      |
| `blenheim.jpg`         | Blenheim Hill Books               |
| `liberty-rock.jpg`     | Liberty Rock Books                |
| `quarry.jpg`           | Quarry Books                      |
| `more-good-books.jpg`  | More Good Books                   |
| `hidden-bookshop.jpg`  | The Hidden Bookshop at the Inn    |

**Format:** landscape JPG, roughly 3:2 (e.g. 1200 × 800 px), ideally under ~400 KB each.
The same photo is used on the home card and at the top of the shop's page.

After adding files here, point each shop's `image` field in `shops.js` to
`images/<file>.jpg` (e.g. `image: "images/adams.jpg"`).
