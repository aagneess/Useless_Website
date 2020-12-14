 'use strict';

const snusSorter = [
    {name: "Lundgrens Fjällen",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/302224-g-2020-04-17-112625930/555/555/0/lundgrens-fjallen-vit-portion.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Erik"
    },

    {name: "Lyft",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/301307-g-2018-10-12-105148265/555/555/0/lyft-ice-cool-strong-mint-slim-all-white-portion.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Skye"
    },

    {name: "General XR",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/201279-g-2020-10-22-090511168/555/555/0/xr-general-strong-slim-white-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Maple"
    },

    {name: "Göteborgs Rapé XR",
    image_url:"https://media.snusbolaget.se/snusbolaget/images/201278-g-2020-10-22-090607285/555/555/0/xr-goteborgs-rape-slim-white-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Merry"
    },

    {name: "Lundgrens Skåne",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/302183-g-2020-01-17-140103285/555/555/0/lundgrens-skane-stark-vit-portion.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Cashmere"
    },
    
    {name: "Göteborgs Rapé",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/swm-874-2018-05-17-134527613/555/555/0/goteborgs-rape-white-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Chief"
    },
    
    {name: "Kapten",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/ag-10001107-2020-02-13-110309793/555/555/0/kapten-vit-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Rodney"
    },

    {name: "Lundgrens Norrland",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/301153-g-2019-08-01-114443200/555/555/0/lundgrens-norrland-vit-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Grizzly"
    },
        
    {name: "Nordic Spirit",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/302176-g-2019-11-12-100544457/555/555/0/nordic-spirit-spearmint-intense.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Barold"
    },
        
    {name: "Kaliber",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/swm-840-2018-09-21-131332686/555/555/0/kaliber-original-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Eugene"
    },

    {name: "Kronan",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/swm-894-2019-10-21-144814064/555/555/0/kronan-vit-portionssnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Biskit"
    },

    {name: "Ettans Lössnus",
    image_url: "https://media.snusbolaget.se/snusbolaget/images/swm-804-2017-04-11-091924944/555/555/0/ettan-lossnus.png",
    nook_url: "https://animalcrossing.fandom.com/wiki/Boomer"
    }
]

snusSorter.forEach((snus) => {
    const pics = `
    <section>     
    <div class="container">
      <h2>${snus.name}</h2>
      <button>

      <a href="${snus.nook_url}">
      <img src="${snus.image_url}" alt="snus"/>
      </a>
      
      </button>
    </div>
    </section>    
  `;
  document.body.innerHTML += pics;
});