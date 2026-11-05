/* =========================================================
   IMAGES STILL TO MAKE — shown in Settings → "Images still to make".
   Each entry is a picture the slides can show but doesn't have yet.
   The Settings page checks assets/img/<file> and hides any that now
   exist, so uploading a file is all it takes to tick it off.
   ========================================================= */
(function(BM){
  "use strict";
  BM.IMAGE_STYLE_LOCK = "Cinematic, richly painted concept art in the style of a high-quality animated historical adventure film: warm golden-hour light, soft volumetric haze, weathered ancient stone and richly textured detail. A muted earthy palette of sand, ash and charcoal with deep lapis blue, turquoise, deep crimson and burnished antique-gold accents. Warm, expressive, dignified, never a cartoon caricature, suitable for ages 9–11: intense is fine, but never frightening, gory or violent. Absolutely no text, letters, numbers, signatures or watermarks anywhere in the image.";

  const ANIMAL = "Realistic animal anatomy, a living wildlife portrait with soft depth of field. Portrait 2:3 (1024 × 1536), subject centred with room around it because the picture is cropped wide on the slide.";

  BM.IMAGES_TODO = [
    { file:"animal-19", title:"Wild boar & wild sheep", where:"Week 3 · Wednesday (Science) · animal card: prey of the leopard",
      prompt:"A wild boar standing in the foreground on a rocky, oak-dotted mountain slope in Iran's Zagros foothills, snuffling at the ground for acorns, with a small group of wild sheep (mouflon-type, curved horns) grazing a little higher up behind it. Golden-hour light. " + ANIMAL },
    { file:"animal-20", title:"Indian crested porcupine", where:"Week 3 · Wednesday (Science) · animal card: prey with quills",
      prompt:"An Indian crested porcupine at dusk on a dry rocky hillside, its long black-and-white banded quills raised and fanned out, a pale crest of bristles along its head, small dark eyes looking calmly toward us. Warm last light, dry grass and stones. " + ANIMAL },
    { file:"animal-21", title:"Algae in the salt lake", where:"Week 5 · Wednesday (Science) · food-chain card: producers",
      prompt:"A close, glowing view of the shallow water of a salt lake in Iran's dry plateau: ribbons and clouds of green and blue-green algae drifting just under the surface in bright sunlight, white salt crust on the shoreline, a few pink-tinged salty ripples. Beautiful and slightly magical, like looking into a tiny world. No animals needed. Portrait 2:3 (1024 × 1536), subject centred with room around it because the picture is cropped wide on the slide." },
    { file:"animal-22", title:"Brine shrimp (Artemia)", where:"Week 5 · Wednesday (Science) · food-chain card: consumers",
      prompt:"A magnified, lovingly painted view of several tiny brine shrimp (Artemia) swimming in clear salty water, feathery leg-like paddles glowing, translucent pinkish-orange bodies, with drifting green algae around them and sparkling light from above. Peaceful and a little magical, like a tiny underwater world. " + ANIMAL },
    { file:"animal-23", title:"Dromedary camel (one hump)", where:"Week 7 · Wednesday (Science) · animal card: two kinds of camel",
      prompt:"A one-humped dromedary camel standing tall in a hot, pale sand desert, long legs, a single large hump, a calm, dignified face with long eyelashes, heat shimmer on the horizon and pale bleached sky, no saddle or rider. Warm golden light. " + ANIMAL },
    { file:"animal-24", title:"What's in the hump? (fat)", where:"Week 7 · Wednesday (Science) · animal card: the hump is fat, not water",
      prompt:"A simple, friendly, clearly readable cut-away painting of a dromedary camel's hump showing it is filled with soft, pale cream-yellow fat (not water): the hump sliced open to show smooth yellow-white fat inside, a small glowing golden spark or soft light to suggest stored energy, desert sand behind. Educational but beautiful, painted style (not a diagram), absolutely no labels or arrows. " + ANIMAL },
    { file:"animal-25", title:"Takahē (Aotearoa)", where:"Week 10 · Wednesday (Science) · recovery card: rediscovered in 1948",
      prompt:"A takahē, the rare flightless bird of New Zealand: a plump bird with deep blue-green feathers, a green-olive back, a thick strong red-orange beak and a red frontal shield, strong red legs, standing in golden tussock grass in the Fiordland mountains with soft mist behind it. Calm and curious, a hopeful, gentle mood. " + ANIMAL }
  ];
})(window.BM = window.BM || {});
