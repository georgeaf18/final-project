//****************************************** clothing items */
    const headwear = {

    baseballCap: 'clothes/head/baseballCap.png',
    winterHat: 'clothes/head/winterHat.png',
  
  }
  
  const facewear = {
  
    sunglasses: 'clothes/face/sunglasses.png',
    scarf: 'clothes/face/scarf.png'
  
  
  }
  
  const upperbody = {
  
    tshirt: 'clothes/upper-body/tshirt.png',
    longsleeve: 'clothes/upper-body/longsleeve.png',
    formalShirtTie: 'clothes/upper-body/formalShirtTie.png',
    dressTop: 'clothes/upper-body/dressTop.png'
  
  }
  const upperbodyOuterwear = {
  
    lightJacketHoodie: 'clothes/upper-body-outer-layer/lightJacketHoodie.png',
    raincoat: 'clothes/upper-body-outer-layer/raincoat.png',
  
    shawl: 'clothes/upper-body-outer-layer/shawl.png',
    suitCoat: 'clothes/upper-body-outer-layer/suitCoat.png',
  
    winterCoat: 'clothes/upper-body-outer-layer/winterCoat.png'
  }
  const lowerbody = {
    pants: 'clothes/lower-body/pants.png',
    formalPants: 'clothes/lower-body/formalPants.png',
    shorts: 'clothes/lower-body/shorts.png',
    dressBottom: 'clothes/lower-body/dressBottoms.png'
  }
  const footwear = {
  
  
    tennisShoes: 'clothes/feet/tennisShoes.png',
    dressShoes: 'clothes/feet/dressShoes.png',
    rainBoots: 'clothes/feet/rainBoots.png',
    heels: 'clothes/feet/heels.png',
    winterBoots: 'clothes/feet/snowBoots.png',
    flipFlops: 'clothes/feet/flipFlops.png'
  
  
  
  }
  
  
  export const outfitMap = {
  
    //******************************** very hot */
  
    'very_hot:casual': {
      male: 'mannequin/very-hot-casual-male',
      female: 'mannequin/very-hot-casual-female'
    },
  
    'very_hot:formal': {
      male: 'very-hot-formal-male',
      female: 'very-hot-formal-female'

    },
    'very_hot:business_casual': {
      male: 'mannequin/very-hot-businessCasual-male',
      female: 'mannequin/very-hot-businessCasual-female'
    },
  
  
    //******************************** hot */
  
    'hot:casual': {
      male: 'mannequin/hot-casual-male',
      female: 'mannequin/hot-casual-female'
    },
    'hot:formal': {
      male: 'mannequin/hot-formal-male',
      female: 'mannequin/hot-formal-female'
    },
    'hot:business_casual': {
      male: 'mannequin/hot-businessCasual-male',
      female: 'mannequin/hot-businessCasual-female'
    },
  
  
    //******************************** warm */
  
  
    'warm:casual': {
      male: 'mannequin/warm-casual-male',
      female: 'mannequin/warm-casual-female'
    },
    'warm:formal': {
      male: 'mannequin/warm-formal-male',
      female: 'mannequin/warm-formal-female'
    },
    'warm:business_casual': {
      male: 'mannequin/warm-businessCasual-male',
      female: 'mannequin/warm-businessCasual-female'
    },
  
  
    //******************************** chilly */
  
  
    'chilly:casual': {
      male: 'mannequin/chilly-casual-male',
      female: 'mannequin/chilly-casual-female'
    },
  
    'chilly:formal': {
      male: 'mannequin/chilly-formal-male',
      female: 'mannequin/chilly-formal-female'
    },
  
    'chilly:business_casual': {
      male: 'mannequin/chilly-businessCasual-male',
      female: 'mannequin/chilly-businessCasual-female'
    },
    //******************************** cold */
  
  
    'cold:casual': {
      male: 'mannequin/cold-casual-male',
      female: 'mannequin/cold-casual-female'
    },
    'cold:formal': {
      male: 'mannequin/cold-formal-male',
      female: 'mannequin/cold-formal-female'
    },
    'cold:business_casual': {
      male: 'mannequin/cold-businessCasual-male',
      female: 'mannequin/cold-businessCasual-female'
    },
  
  
    //******************************** very cold*/
  
  
    'very_cold:casual': {
      male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
      female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
    },
    'very_cold:formal': {
  
      male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
      female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
    },
    'very_cold:business_casual': {
      male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
      female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
    },
  
    //******************************** extremely cold */
  
  
  
    'extremely_cold:casual': {
      male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
      female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, , lowerbody.pants, footwear.winterBoots]
    },
    'extremely_cold:formal': {
  
      male: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
      female: [headwear.winterHat, facewear.scarf, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
    },
    'extremely_cold:business_casual': {
      male: [headwear.winterHat, facewear.scarf, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
      female: [headwear.winterHat, facewear.scarf, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
    }
  
  
  }
  