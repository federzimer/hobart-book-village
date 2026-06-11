/* ============================================================
   shops.js  —  the single source of truth for every bookshop
   ------------------------------------------------------------
   Both the home-page grid and the individual shop pages
   (shop.html?id=...) are built from this list. To add, edit, or
   reorder a shop, change it HERE and both places update.

   Fields:
     id          short slug used in the URL (shop.html?id=adams)
     venue       OPTIONAL — name of a shared building/store this shop sits
                 inside (e.g. "The Shops Around the Corner"). Shops with the
                 same venue show a matching badge so they read as a group.
     name        display name
     tags        specialty line shown on the card pill
     type        short "kind of shop" chip on the card
     address     location chip on the card
     hoursShort  hours chip on the card
     image       photo URL (card + page hero)
     short       one-paragraph blurb for the home grid
     long        array of paragraphs for the shop page
     specialties array of subjects (shown as chips on the page)
     owners      proprietor names ("" if none listed)
     phone       "" if none listed
     website     external site ("" if none)
     hours       array of { season, text } rows for the page
   ============================================================ */

window.SHOPS = [
  {
    id: "adams",
    name: "Adams' Antiquarian Book Shop",
    tags: "Antiquarian &bull; Rare &bull; Fine Books",
    type: "Rare &amp; Antiquarian",
    address: "602 Main St",
    hoursShort: "Daily 11&ndash;5 (summer)",
    image: "images/adams.jpg",
    short: "The first bookshop in the Book Village. Fine books, art, and tea across three full floors of 17th&ndash;20th century texts. Diana &amp; Bill Adams, proprietors.",
    long: [
      "Adams' Antiquarian Book Shop was the very first bookshop in the Hobart Book Village. It offers fine books, art, and tea in a bright, cordial atmosphere that makes both the seasoned collector and the casual browser feel welcome.",
      "Three full floors hold 17th, 18th, 19th &amp; 20th century texts spanning fiction, biography, art, music, theatre, dance, etiquette, graphic arts, poetry, Greek and Latin texts, theology, science, natural history, and American, world, and local history. The lower level &mdash; with a deck overlooking the West Branch of the Delaware &mdash; is stocked with 20th-century fiction and non-fiction. Don't let the word \"Antiquarian\" stop you from exploring the whole shop."
    ],
    specialties: ["Fiction", "Biography", "Art &amp; Music", "Theatre &amp; Dance", "Poetry", "Greek &amp; Latin", "Theology", "Science", "Natural History", "Local History"],
    owners: "Diana &amp; Bill Adams",
    phone: "607-538-9080",
    website: "https://whabooks.com/",
    hours: [
      { season: "Memorial Day &ndash; Columbus Day", text: "Daily, 11 am &ndash; 5 pm" },
      { season: "Columbus Day &ndash; Memorial Day", text: "Weekends 11 am &ndash; 5 pm; Holiday Mondays 11 am &ndash; 3 pm" }
    ]
  },
  {
    id: "blenheim",
    name: "Blenheim Hill Books",
    tags: "Fiction &bull; Poetry &bull; Women's Studies",
    type: "New &amp; Used",
    address: "698 Main St",
    hoursShort: "Fri&ndash;Mon 11&ndash;5",
    image: "images/blenheim.jpg",
    short: "Thousands of new &amp; used titles, reasonably priced, in a warm shop run by retired professors Barbara Balliet &amp; Cheryl Clarke &mdash; co-founders of the Hobart Festival of Women Writers.",
    long: [
      "In the middle of the Book Village, Blenheim Hill Books presents thousands of new and used titles across many categories, all priced reasonably for the book lover. A warm atmosphere invites readers to chat about books as they browse.",
      "Strengths include fiction, poetry, children's books, women's studies, mysteries and suspense, cooking, gardening &amp; nature, biography, military history, LGBT, art, photography &amp; architecture, and history. Run by retired professors Barbara Balliet &amp; Cheryl Clarke, the shop also helped found the Hobart Festival of Women Writers. Good hunting!"
    ],
    specialties: ["Fiction", "Poetry", "Children's Books", "Women's Studies", "Mysteries", "Cooking", "Gardening &amp; Nature", "Biography", "Art &amp; Architecture", "History"],
    owners: "Barbara Balliet &amp; Cheryl Clarke",
    phone: "607-538-3046",
    website: "https://www.blenheimhillbooks.com/",
    hours: [
      { season: "Memorial Day &ndash; Columbus Day", text: "Daily, 11 am &ndash; 5 pm" },
      { season: "Columbus Day &ndash; Memorial Day", text: "Friday &ndash; Monday 11 am &ndash; 5 pm; Holiday Mondays 11 am &ndash; 3 pm" }
    ]
  },
  {
    id: "liberty-rock",
    name: "Liberty Rock Books",
    tags: "General &bull; 50,000+ Volumes",
    type: "Used &amp; Scarce",
    address: "Main St",
    hoursShort: "Weekends 10&ndash;5",
    image: "images/liberty-rock.jpg",
    short: "The village's largest store &mdash; a 5,000 sq ft building with a main retail space, an art gallery, and a consignment room, holding 50,000+ used and scarce books. Say hello to Libby, the resident cat.",
    long: [
      "Liberty Rock Books operates within a 5,000 sq ft building that also includes a consignment room and an art gallery for original works, workshops, and readings. With capacity for 50,000-plus books, the shop's owners continue as broad generalists with specialty collections assembled over 45-plus years.",
      "Highlights include a large selection of 19th- and 20th-century children's books (the \"Tinkertown KinderBooks\" section), extensive art books, science fiction, and religious books, plus a sizeable vintage jazz record collection and Carlton F. Bloodgood's 40,000 vintage postcards of New York State. Consignment partners and local sellers round out the shelves. Plan to stay a while &mdash; and meet Libby, the official feline greeter who likes to sleep by the front door."
    ],
    specialties: ["Children's Books", "Art Books", "Science Fiction", "Religion", "Vintage Jazz Records", "NY Postcards", "Consignment", "Local Authors"],
    owners: "John &amp; Jim Mahoney and Tom Liotta",
    phone: "607-538-1760",
    website: "",
    hours: [
      { season: "Memorial Day &ndash; Columbus Day", text: "Daily, 10 am &ndash; 5 pm (occasionally closed Tuesdays &mdash; call ahead)" },
      { season: "Columbus Day &ndash; Memorial Day", text: "Saturday &amp; Sunday 10 am &ndash; 5 pm; Holiday Mondays 10 am &ndash; 3 pm" }
    ]
  },
  {
    id: "quarry",
    venue: "The Shops Around the Corner",
    name: "Quarry Books",
    tags: "Mystery &bull; Sci-Fi",
    type: "Mystery &amp; Sci-Fi",
    address: "40 Cornell Ave",
    hoursShort: "Daily 11&ndash;5",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80",
    short: "Devoted to mysteries and science fiction &mdash; a trove for genre lovers, now part of The Shops Around the Corner, the multi-vendor space at 40 Cornell Avenue just off Main Street.",
    long: [
      "Quarry Books is devoted to mysteries and science fiction &mdash; a trove for genre lovers in the heart of the village.",
      "Since January 2026 it has been part of The Shops Around the Corner, a multi-vendor establishment at 40 Cornell Avenue. Formerly on Main Street, the shops are now an easy walk just off Main &mdash; directly across from the Book Village Inn &mdash; and open daily. Look for the \"Open\" flags and use either of the two entrance doors."
    ],
    specialties: ["Mysteries", "Science Fiction"],
    owners: "",
    phone: "845-282-6397",
    website: "",
    hours: [
      { season: "Year-round", text: "Daily, 11 am &ndash; 5 pm" }
    ]
  },
  {
    id: "more-good-books",
    venue: "The Shops Around the Corner",
    name: "More Good Books",
    tags: "Trains &bull; Ships &bull; Autos &bull; Hobbies",
    type: "Specialty",
    address: "40 Cornell Ave",
    hoursShort: "Daily 11&ndash;5",
    image: "images/more-good-books.jpg",
    short: "A niche shop for railroads, ships &amp; boats, automobiles, games, sports, hobbies, and pets &mdash; great prices, now part of The Shops Around the Corner at 40 Cornell Avenue.",
    long: [
      "More Good Books offers a focused selection at great prices on railroads, ships and boats, automobiles, games and sports, hobbies, and pets.",
      "Its stock is a combined collection drawn from Adams' and Blenheim Hill Books, which frees up shelf space in each of those shops. Since January 2026 you'll find it within The Shops Around the Corner, a multi-vendor establishment at 40 Cornell Avenue &mdash; an easy walk just off Main Street, directly across from the Book Village Inn, with plenty of parking and open daily."
    ],
    specialties: ["Railroads", "Ships &amp; Boats", "Automobiles", "Games &amp; Sports", "Hobbies", "Pets"],
    owners: "Adams' &amp; Blenheim Hill Books",
    phone: "607-538-9080",
    website: "",
    hours: [
      { season: "Year-round", text: "Daily, 11 am &ndash; 5 pm" }
    ]
  },
  {
    id: "hidden-bookshop",
    name: "The Hidden Bookshop at the Inn",
    tags: "Books &bull; At the Inn",
    type: "Books",
    address: "Book Village Inn, 760 Main St",
    hoursShort: "See the Inn",
    image: "images/hidden-bookshop.jpg",
    short: "The village's newest chapter &mdash; a hidden bookshop tucked inside the Book Village Inn, waiting to be discovered while you stay, sip, or browse.",
    long: [
      "Tucked inside the Book Village Inn at 760 Main Street, The Hidden Bookshop is the Book Village's newest addition &mdash; a bookshop to stumble upon while you're staying at the Inn or stopping by the bar.",
      "More details about its collection and hours are on the way."
    ],
    specialties: ["Books", "Hidden Finds"],
    owners: "Book Village Inn",
    phone: "",
    website: "https://www.bookvillageinn.com/",
    hours: [
      { season: "Hours", text: "Open with the Book Village Inn &mdash; details coming soon" }
    ]
  }
];
