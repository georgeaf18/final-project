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
      // male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
      // female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
    },
  
    'very_hot:formal': {
      male: 'very-hot-formal-male',
      female: 'very-hot-formal-female'

      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.dressBottom, footwear.heels]
    },
    'very_hot:business_casual': {
      male: 'mannequin/very-hot-businessCasual-male',
      female: 'mannequin/very-hot-businessCasual-female'
      // male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, {}, lowerbody.dressBottom, footwear.heels]
    },
  
  
    //******************************** hot */
  
    'hot:casual': {
      male: 'mannequin/hot-casual-male',
      female: 'mannequin/hot-casual-female'
      // male: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops],
      // female: [headwear.baseballCap, facewear.sunglasses, upperbody.tshirt, {}, lowerbody.shorts, footwear.flipFlops]
    },
    'hot:formal': {
      male: 'mannequin/hot-formal-male',
      female: 'mannequin/hot-formal-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.dressBottom, footwear.heels]
    },
    'hot:business_casual': {
      male: 'mannequin/hot-businessCasual-male',
      female: 'mannequin/hot-businessCasual-female'
      // male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, {}, lowerbody.dressBottom, footwear.heels]
    },
  
  
    //******************************** warm */
  
  
    'warm:casual': {
      male: 'mannequin/warm-casual-male',
      female: 'mannequin/warm-casual-female'
      // male: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes],
      // female: [{}, {}, upperbody.tshirt, {}, lowerbody.pants, footwear.tennisShoes]
    },
    'warm:formal': {
      male: 'mannequin/warm-formal-male',
      female: 'mannequin/warm-formal-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
    },
    'warm:business_casual': {
      male: 'mannequin/warm-businessCasual-male',
      female: 'mannequin/warm-businessCasual-female'
      // male: [{}, {}, upperbody.formalShirtTie, {}, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, {}, lowerbody.formalPants, footwear.heels]
    },
  
  
    //******************************** chilly */
  
  
    'chilly:casual': {
      male: 'mannequin/chilly-casual-male',
      female: 'mannequin/chilly-casual-female'
      // male: [{}, {}, upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, lowerbody.pants, footwear.tennisShoes],
      // female: [{}, facewear.scarf,  upperbody.tshirt, upperbodyOuterwear.lightJacketHoodie, lowerbody.pants, footwear.tennisShoes]
    },
  
    'chilly:formal': {
      male: 'mannequin/chilly-formal-male',
      female: 'mannequin/chilly-formal-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.suitCoat, lowerbody.formalPants, footwear.heels]
    },
  
    'chilly:business_casual': {
      male: 'mannequin/chilly-businessCasual-male',
      female: 'mannequin/chilly-businessCasual-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.lightJacketHoodie, lowerbody.formalPants, footwear.heels]
    },
    //******************************** cold */
  
  
    'cold:casual': {
      male: 'mannequin/cold-casual-male',
      female: 'mannequin/cold-casual-female'
      // male: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots],
      // female: [headwear.winterHat, facewear.scarf, upperbody.tshirt, upperbodyOuterwear.winterCoat, lowerbody.pants, footwear.winterBoots]
    },
    'cold:formal': {
      male: 'mannequin/cold-formal-male',
      female: 'mannequin/cold-formal-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.dressShoes]
    },
    'cold:business_casual': {
      male: 'mannequin/cold-businessCasual-male',
      female: 'mannequin/cold-businessCasual-female'
      // male: [{}, {}, upperbody.formalShirtTie, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots],
      // female: [{}, {}, upperbody.dressTop, upperbodyOuterwear.winterCoat, lowerbody.formalPants, footwear.winterBoots]
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
  