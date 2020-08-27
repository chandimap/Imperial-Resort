import ps from "./images/presidential_suite.jpg";
import ps1 from "./images/presidential_suite1.jpg";
import ps2 from "./images/presidential_suite2.jpg";
import ps3 from "./images/presidential_suite3.jpg";
import fd from "./images/family_deluxe.jpg";
import fd1 from "./images/family_deluxe1.jpg";
import fd2 from "./images/family_deluxe2.jpg";
import fd3 from "./images/family_deluxe3.jpg";
import fs from "./images/family_standard.jpg";
import fs1 from "./images/family_standard1.jpg";
import fs2 from "./images/family_standard2.jpg";
import fs3 from "./images/family_standard3.jpg";
import fb from "./images/family_basic.jpg";
import fb1 from "./images/family_basic1.jpg";
import fb2 from "./images/family_basic2.jpg";
import fb3 from "./images/family_basic3.jpg";
import fe from "./images/family_economy.jpg";
import fe1 from "./images/family_economy1.jpg";
import fe2 from "./images/family_economy2.jpg";
import fe3 from "./images/family_economy3.jpg";
import dd from "./images/double_deluxe.jpg";
import dd1 from "./images/double_deluxe1.jpg";
import dd2 from "./images/double_deluxe2.jpg";
import dd3 from "./images/double_deluxe3.jpg";
import ds from "./images/double_standard.jpg";
import ds1 from "./images/double_standard1.jpg";
import ds2 from "./images/double_standard2.jpg";
import ds3 from "./images/double_standard3.jpg";
import db from "./images/double_basic.jpg";
import db1 from "./images/double_basic1.jpg";
import db2 from "./images/double_basic2.jpg";
import db3 from "./images/double_basic3.jpg";
import de from "./images/double_economy.jpg";
import de1 from "./images/double_economy1.jpg";
import de2 from "./images/double_economy2.jpg";
import de3 from "./images/double_economy3.jpg";
import sd from "./images/single_deluxe.jpg";
import sd1 from "./images/single_deluxe1.jpg";
import sd2 from "./images/single_deluxe2.jpg";
import sd3 from "./images/single_deluxe3.jpg";
import ss from "./images/single_standard.jpg";
import ss1 from "./images/single_standard1.jpg";
import ss2 from "./images/single_standard2.jpg";
import ss3 from "./images/single_standard3.jpg";
import sb from "./images/single_basic.jpg";
import sb1 from "./images/single_basic1.jpg";
import sb2 from "./images/single_basic2.jpg";
import sb3 from "./images/single_basic3.jpg";
import se from "./images/single_economy.jpg";
import se1 from "./images/single_economy1.jpg";
import se2 from "./images/single_economy2.jpg";
import se3 from "./images/single_economy3.jpg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "Presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: ps
            }
          }
        },
        {
          fields: {
            file: {
              url: ps1
            }
          }
        },
        {
          fields: {
            file: {
              url: ps2
            }
          }
        },
        {
          fields: {
            file: {
              url: ps3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "Family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: fd
            }
          }
        },
        {
          fields: {
            file: {
              url: fd1
            }
          }
        },
        {
          fields: {
            file: {
              url: fd2
            }
          }
        },
        {
          fields: {
            file: {
              url: fd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "Family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: fs
            }
          }
        },
        {
          fields: {
            file: {
              url: fs1
            }
          }
        },
        {
          fields: {
            file: {
              url: fs2
            }
          }
        },
        {
          fields: {
            file: {
              url: fs3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "Family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: fb
            }
          }
        },
        {
          fields: {
            file: {
              url: fb1
            }
          }
        },
        {
          fields: {
            file: {
              url: fb2
            }
          }
        },
        {
          fields: {
            file: {
              url: fb3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "Family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: fe
            }
          }
        },
        {
          fields: {
            file: {
              url: fe1
            }
          }
        },
        {
          fields: {
            file: {
              url: fe2
            }
          }
        },
        {
          fields: {
            file: {
              url: fe3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "Double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: dd
            }
          }
        },
        {
          fields: {
            file: {
              url: dd1
            }
          }
        },
        {
          fields: {
            file: {
              url: dd2
            }
          }
        },
        {
          fields: {
            file: {
              url: dd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "Double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: ds
            }
          }
        },
        {
          fields: {
            file: {
              url: ds1
            }
          }
        },
        {
          fields: {
            file: {
              url: ds2
            }
          }
        },
        {
          fields: {
            file: {
              url: ds3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "Double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: db
            }
          }
        },
        {
          fields: {
            file: {
              url: db1
            }
          }
        },
        {
          fields: {
            file: {
              url: db2
            }
          }
        },
        {
          fields: {
            file: {
              url: db3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "Double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: de
            }
          }
        },
        {
          fields: {
            file: {
              url: de1
            }
          }
        },
        {
          fields: {
            file: {
              url: de2
            }
          }
        },
        {
          fields: {
            file: {
              url: de3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "Single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: sd
            }
          }
        },
        {
          fields: {
            file: {
              url: sd1
            }
          }
        },
        {
          fields: {
            file: {
              url: sd2
            }
          }
        },
        {
          fields: {
            file: {
              url: sd3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "Single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: ss
            }
          }
        },
        {
          fields: {
            file: {
              url: ss1
            }
          }
        },
        {
          fields: {
            file: {
              url: ss2
            }
          }
        },
        {
          fields: {
            file: {
              url: ss3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "single basic",
      slug: "single-basic",
      type: "Single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: sb
            }
          }
        },
        {
          fields: {
            file: {
              url: sb1
            }
          }
        },
        {
          fields: {
            file: {
              url: sb2
            }
          }
        },
        {
          fields: {
            file: {
              url: sb3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "Single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: se
            }
          }
        },
        {
          fields: {
            file: {
              url: se1
            }
          }
        },
        {
          fields: {
            file: {
              url: se2
            }
          }
        },
        {
          fields: {
            file: {
              url: se3
            }
          }
        }
      ]
    }
  }
];