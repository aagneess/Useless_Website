const villagers = [
    {name:"Barold",
    comment:"Sure, I'd be happy too...",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/9/9d/Barold_NH.png/revision/latest/scale-to-width-down/522?cb=20200802141140"},

    {name:"Biskit",
    comment:"Oh, okay...",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/7/78/Biskit_NH.png/revision/latest?cb=20200817184441"},

    {name:"Boomer",
    comment:"Oh... too bad!",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/7/7d/Boomer_NH.png/revision/latest/scale-to-width-down/690?cb=20200802163112"},
    
    {name:"Cashmere",
    comment:"Ain't that just the way?",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/e/eb/Cashmere_NH.png/revision/latest/scale-to-width-down/700?cb=20200802165627"},
    
    {name:"Chief",
    comment:"That's cool, I guess...",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/1/13/Chief_NH.png/revision/latest/scale-to-width-down/500?cb=20200817213202"},

    {name:"Eugene",
    comment:"Well... it's something",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/a/ab/Eugene_NH.png/revision/latest/scale-to-width-down/700?cb=20200802155621"},

    {name:"Erik",
    comment:"Ain't that neat, huh?",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/8/88/Erik_NH.png/revision/latest/scale-to-width-down/640?cb=20200719101905"},

    {name:"Grizzly",
    comment:"I thought it was obvious",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/4/4b/Grizzly_NH.png/revision/latest/scale-to-width-down/559?cb=20200719102709"},

    {name:"Maple",
    comment:"Well that's nice, isn't it?",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/a/a2/Maple_NH.png/revision/latest/scale-to-width-down/573?cb=20200720220654"},

    {name:"Merry",
    comment:"",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/4/4f/Merry_NH.png/revision/latest/scale-to-width-down/476?cb=20200630151034"},

    {name:"Rodney",
    comment:"Yikes!",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/3/35/Rodney_NH.png/revision/latest/scale-to-width-down/624?cb=20200802151639"},

    {name:"Skye",
    comment:"Could have been worse... I guess",
    image_url:"https://static.wikia.nocookie.net/animalcrossing/images/d/d1/Skye_NH.png/revision/latest/scale-to-width-down/496?cb=20200224182217"}
]

villagers.forEach((villager) => {
    const pics = `
    <section>
    <div class="container">
      <h2>${villager.name}</h2>
      <h2>${villager.comment}</h2>
      <img src="${villager.image_url}" alt="villager" />
    </div>
    </section>
  `;
  document.body.innerHTML += pics;
});