// Generated by CoffeeScript 1.9.0
(function() {
  var colors, fig, figcap, hexToRgb, i, k, l, rgbToHsl, sec1, sec2, v, x;

  colors = {
    "AbsoluteZero": "#0048ba",
    "AlienArmpit": "#84de02",
    "AlloyOrange": "#c46210",
    "Almond": "#efdecd",
    "Amethyst": "#64609A",
    "AntiqueBrass": "#cd9575",
    "Apricot": "#fdd9b5",
    "AquaPearl": "#5fbed7",
    "Aquamarine": "#78dbe2",
    "Asparagus": "#87a96b",
    "AtomicTangerine": "#ffa474",
    "AztecGold": "#c39953",
    "BabyPowder": "#fefefa",
    "Banana": "#ffd12a",
    "BananaMania": "#fae7b5",
    "BdazzledBlue": "#2e5894",
    "Beaver": "#9f8170",
    "BigDipORuby": "#9c2542",
    "BigFootFeet": "#e88e5a",
    "Bittersweet": "#fd7c6e",
    "BittersweetShimmer": "#bf4f51",
    "Black": "#000000",
    "BlackCoralPearl": "#54626f",
    "BlackShadows": "#bfafb2",
    "BlastOffBronze": "#a57164",
    "BlizzardBlue": "#ace5ee",
    "Blue": "#1f75fe",
    "BlueBell": "#a2a2d0",
    "BlueGray": "#6699cc",
    "BlueGreen": "#0d98ba",
    "BlueJeans": "#5dadec",
    "BlueViolet": "#7366bd",
    "Blueberry": "#4f86f7",
    "Blush": "#de5d83",
    "BoogerBuster": "#dde26a",
    "BrickRed": "#cb4154",
    "BrightYellow": "#ffaa1d",
    "Brown": "#b4674d",
    "BrownSugar": "#af6e4d",
    "BubbleGum": "#ffd3f8",
    "BurnishedBrown": "#a17a74",
    "BurntOrange": "#ff7f49",
    "BurntSienna": "#ea7e5d",
    "CadetBlue": "#b0b7c6",
    "Canary": "#ffff99",
    "CaribbeanGreen": "#1cd3a2",
    "CaribbeanGreenPearl": "#6ada8e",
    "CarnationPink": "#ffaacc",
    "CedarChest": "#c95a49",
    "Cerise": "#dd4492",
    "Cerulean": "#1dacd6",
    "CeruleanFrost": "#6d9bc3",
    "Cherry": "#da2647",
    "Chestnut": "#bc5d58",
    "Chocolate": "#bd8260",
    "CinnamonSatin": "#cd607e",
    "Citrine": "#933709",
    "Coconut": "#fefefe",
    "Copper": "#dd9475",
    "CopperPenny": "#ad6f69",
    "Cornflower": "#9aceeb",
    "CosmicCobalt": "#2e2d88",
    "CottonCandy": "#ffbcd9",
    "CulturedPearl": "#f5f5f5",
    "CyberGrape": "#58427c",
    "Daffodil": "#ffff31",
    "Dandelion": "#fddb6d",
    "DeepSpaceSparkle": "#4a646c",
    "Denim": "#2b6cc4",
    "DenimBlue": "#2243b6",
    "DesertSand": "#efcdb8",
    "DingyDungeon": "#c53151",
    "Dirt": "#9b7653",
    "EerieBlack": "#1b1b1b",
    "Eggplant": "#6e5160",
    "ElectricLime": "#ceff1d",
    "Emerald": "#14A989",
    "Eucalyptus": "#44d7a8",
    "Fern": "#71bc78",
    "FieryRose": "#ff5470",
    "ForestGreen": "#6dae81",
    "FreshAir": "#a6e7ff",
    "Frostbite": "#e936a7",
    "Fuchsia": "#c364c5",
    "FuzzyWuzzy": "#cc6666",
    "GargoyleGas": "#ffdf46",
    "GiantsClub": "#b05c52",
    "GlossyGrape": "#ab92b3",
    "Gold": "#e7c697",
    "GoldFusion": "#85754e",
    "Goldenrod": "#fcd975",
    "GraniteGray": "#676767",
    "GrannySmithApple": "#a8e4a0",
    "Grape": "#6f2da8",
    "Gray": "#95918c",
    "Green": "#1cac78",
    "GreenBlue": "#1164b4",
    "GreenLizard": "#a7f432",
    "GreenSheen": "#6eaea1",
    "GreenYellow": "#f0e891",
    "HeatWave": "#ff7a00",
    "HotMagenta": "#ff1dce",
    "IlluminatingEmerald": "#319177",
    "Inchworm": "#b2ec5d",
    "Indigo": "#5d76cb",
    "Jade": "#469A84",
    "Jasper": "#D05340",
    "JazzberryJam": "#ca3767",
    "JellyBean": "#da614e",
    "JungleGreen": "#3bb08f",
    "KeyLimePearl": "#e8f48c",
    "LapisLazuli": "#436CB9",
    "LaserLemon": "#fefe22",
    "Lavender": "#fcb4d5",
    "LeatherJacket": "#253529",
    "Lemon": "#ffff38",
    "LemonGlacier": "#fdff00",
    "LemonYellow": "#fff44f",
    "Licorice": "#1a1110",
    "Lilac": "#db91ef",
    "LilacLuster": "#ae98aa",
    "Lime": "#b2f302",
    "Lumber": "#ffe4cd",
    "MacaroniCheese": "#ffbd88",
    "Magenta": "#f664af",
    "MagicMint": "#aaf0d1",
    "MagicPotion": "#ff4466",
    "Mahogany": "#cd4a4c",
    "Maize": "#edd19c",
    "Malachite": "#469496",
    "Manatee": "#979aaa",
    "MandarinPearl": "#f37a48",
    "MangoTango": "#ff8243",
    "Maroon": "#c8385a",
    "Mauvelous": "#ef98aa",
    "Melon": "#fdbcb4",
    "MetallicSeaweed": "#0a7e8c",
    "MetallicSunburst": "#9c7c38",
    "MidnightBlue": "#1a4876",
    "MidnightPearl": "#702670",
    "MistyMoss": "#bbb477",
    "Moonstone": "#3AA8C1",
    "MountainMeadow": "#30ba8f",
    "Mulberry": "#c54b8c",
    "MummysTomb": "#828e84",
    "MysticMaroon": "#ad4379",
    "MysticPearl": "#d65282",
    "NavyBlue": "#1974d2",
    "NeonCarrot": "#ffa343",
    "NewCar": "#214fc6",
    "OceanBluePearl": "#4f42b5",
    "OceanGreenPearl": "#48bf91",
    "OgreOdor": "#fd5240",
    "OliveGreen": "#bab86c",
    "Onyx": "#353839",
    "Orange": "#ff7538",
    "OrangeRed": "#ff2b2b",
    "OrangeSoda": "#fa5b3d",
    "OrangeYellow": "#f8d568",
    "Orchid": "#e6a8d7",
    "OrchidPearl": "#7b4259",
    "OuterSpace": "#414a4c",
    "OutrageousOrange": "#ff6e4a",
    "PacificBlue": "#1ca9c9",
    "Peach": "#ffcfab",
    "PearlyPurple": "#b768a2",
    "Peridot": "#ABAD48",
    "Periwinkle": "#c5d0e6",
    "PewterBlue": "#8ba8b7",
    "PiggyPink": "#fddde6",
    "Pine": "#45a27d",
    "PineGreen": "#158078",
    "PinkFlamingo": "#fc74fd",
    "PinkPearl": "#B07080",
    "PinkSherbert": "#f78fa7",
    "PixiePowder": "#391285",
    "Plum": "#8e4585",
    "PlumpPurple": "#5946b2",
    "PolishedPine": "#5da493",
    "PrincessPerfume": "#ff85cf",
    "PurpleHeart": "#7442c8",
    "PurpleMountainsMajesty": "#9d81ba",
    "PurplePizzazz": "#fe4eda",
    "PurplePlum": "#9c51b6",
    "QuickSilver": "#a6a6a6",
    "RadicalRed": "#ff496c",
    "RawSienna": "#d68a59",
    "RawUmber": "#714b23",
    "RazzleDazzleRose": "#ff48d0",
    "Razzmatazz": "#e3256b",
    "RazzmicBerry": "#8d4e85",
    "Red": "#ee204d",
    "RedOrange": "#ff5349",
    "RedSalsa": "#fd3a4a",
    "RedViolet": "#c0448f",
    "RobinsEggBlue": "#1fcecb",
    "Rose": "#ff5050",
    "RoseDust": "#9e5e6f",
    "RosePearl": "#f03865",
    "RoseQuartz": "#BD559C",
    "RoyalPurple": "#7851a9",
    "Ruby": "#AA4069",
    "RustyRed": "#da2c43",
    "Salmon": "#ff9baa",
    "SalmonPearl": "#f1444a",
    "Sapphire": "#2D5DA1",
    "SasquatchSocks": "#ff4681",
    "Scarlet": "#fc2847",
    "ScreaminGreen": "#76ff7a",
    "SeaGreen": "#9fe2bf",
    "SeaSerpent": "#4bc7cf",
    "Sepia": "#a5694f",
    "Shadow": "#8a795d",
    "ShadowBlue": "#778ba5",
    "Shampoo": "#ffcff1",
    "Shamrock": "#45cea2",
    "SheenGreen": "#8fd400",
    "ShimmeringBlush": "#d98695",
    "ShinyShamrock": "#5fa778",
    "ShockingPink": "#fb7efd",
    "Silver": "#cdc5c2",
    "SizzlingRed": "#ff3855",
    "SizzlingSunrise": "#ffdb00",
    "SkyBlue": "#80daeb",
    "SlimyGreen": "#299617",
    "SmashedPumpkin": "#ff6d3a",
    "Smoke": "#738276",
    "SmokeyTopaz": "#832A0D",
    "Soap": "#cec8ef",
    "SonicSilver": "#757575",
    "SpringFrost": "#87ff2a",
    "SpringGreen": "#eceabe",
    "SteelBlue": "#0081ab",
    "SteelTeal": "#5f8a8b",
    "Strawberry": "#fc5a8d",
    "SugarPlum": "#914e75",
    "SunburntCyclops": "#ff404c",
    "Sunglow": "#ffcf48",
    "SunnyPearl": "#f2f27a",
    "SunsetOrange": "#fd5e53",
    "SunsetPearl": "#f1cc79",
    "SweetBrown": "#a83731",
    "Tan": "#faa76c",
    "TartOrange": "#fb4d46",
    "TealBlue": "#18a7b5",
    "Thistle": "#ebc7df",
    "TickleMePink": "#fc89ac",
    "TigersEye": "#B56917",
    "Timberwolf": "#dbd7d2",
    "TropicalRainForest": "#17806d",
    "Tulip": "#ff878d",
    "Tumbleweed": "#deaa88",
    "TurquoiseBlue": "#77dde7",
    "TurquoisePearl": "#3bbcd0",
    "TwilightLavender": "#8a496b",
    "UnmellowYellow": "#ffff66",
    "VioletBlue": "#324ab2",
    "VioletPurple": "#926eae",
    "VioletRed": "#f75394",
    "VividTangerine": "#ffa089",
    "VividViolet": "#8f509d",
    "White": "#ffffff",
    "WildBlueYonder": "#a2add0",
    "WildStrawberry": "#ff43a4",
    "WildWatermelon": "#fc6c85",
    "WinterSky": "#ff007c",
    "WinterWizard": "#a0e6ff",
    "WintergreenDream": "#56887d",
    "Wisteria": "#cda4de",
    "Yellow": "#fce883",
    "YellowGreen": "#c5e384",
    "YellowOrange": "#ffb653",
    "YellowSunshine": "#fff700"
  };

  hexToRgb = function(hex) {
    var result;
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    } else {
      return null;
    }
  };


  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h, s, and l in the set [0, 1].
  #
   * @param   Number  r       The red color value
   * @param   Number  g       The green color value
   * @param   Number  b       The blue color value
   * @return  Array           The HSL representation
   */

  rgbToHsl = function(r, g, b) {
    var d, h, l, max, min, s;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = void 0;
    s = void 0;
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h /= 6;
    }
    return [h, s, l];
  };

  sec1 = d3.select(".light div");

  sec2 = d3.select(".dark div");

  i = 0;

  for (k in colors) {
    v = colors[k];
    x = hexToRgb(v);
    l = rgbToHsl(x.r, x.g, x.b)[2];
    if (l <= 0.6) {
      i = i + 1;
      fig = sec1.append("figure").attr("class", "Grid-cell");
      fig.append("img").attr({
        "src": "pngsnaps/" + k + ".snap.svg.png"
      });
      figcap = fig.append("figcaption");
      figcap.append("p").text(k);
      figcap.append("p").text(v);
    } else {
      fig = sec2.append("figure").attr("class", "Grid-cell");
      fig.append("img").attr({
        "src": "pngsmallsnaps/" + k + ".snap.svg.png"
      });
      figcap = fig.append("figcaption");
      figcap.append("p").text(k);
      figcap.append("p").text(v);
    }
  }

  console.log(i);

}).call(this);
