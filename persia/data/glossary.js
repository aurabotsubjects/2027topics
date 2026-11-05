/* ==========================================================
   GLOSSARY — extra word meanings for hover pop-ups on slides.
   Every lesson's own vocab list is used first (highlighted as a
   lesson word); these extra entries cover other uncommon words
   that appear on the slides. Add more with { w:"word", def:"meaning" }.
   Optional: say:"pronunciation", alt:["other spellings / plurals"].
   (Blueprint §5.4: peoples, places, sources, geography, science,
   technology and art words for the whole term.)
   ========================================================== */
(function(BM){
  "use strict";
  BM.GLOSS_EXTRA = [
    /* ---- peoples, places and titles ---- */
    { w:"Achaemenid", say:"a-KEE-men-id", def:"the family of kings who ruled the first Persian Empire, from Cyrus the Great (559 BC) to Darius III (330 BC)", alt:["Achaemenids"] },
    { w:"Elamite", say:"EE-luh-mite", def:"a person from Elam, the ancient land around Susa in what is now south-western Iran", alt:["Elamites","Elam"] },
    { w:"Mede", def:"a person from Media, the ancient land in what is now north-western Iran", alt:["Medes","Media","Median"] },
    { w:"Pars", def:"the homeland of the Persians in south-western Iran (also called Persis); the name ‘Persia’ comes from it", alt:["Persis"] },
    { w:"satrap", say:"SAT-rap", def:"a governor of one province of the Persian Empire", alt:["satraps"] },
    { w:"satrapy", def:"a province of the Persian Empire, ruled by a satrap", alt:["satrapies"] },
    { w:"Immortals", def:"the Persian king's elite guard of soldiers" },
    { w:"Magi", say:"MAY-jye", def:"wise men or priests from the east; the Bible says Magi came to worship Jesus (Matthew 2)" },
    { w:"Parthian", def:"a person from Parthia; the Parthians ruled Persia after the Greeks (about 247 BC–AD 224)", alt:["Parthians"] },
    { w:"Sasanian", def:"the last Persian empire before Islam (AD 224–651)", alt:["Sasanians"] },
    { w:"Susa", say:"SOO-sah", def:"an ancient city in south-western Iran: the capital of Elam, later a Persian royal city" },
    { w:"Persepolis", say:"per-SEP-oh-lis", def:"the great palace city begun by Darius I about 518 BC, the ceremonial capital of Persia" },
    { w:"Pasargadae", say:"pa-SAR-ga-dee", def:"Cyrus the Great's garden capital in Pars" },
    { w:"Ecbatana", say:"ek-BAT-a-na", def:"the capital of the Medes (modern Hamadan in Iran)" },
    { w:"Babylon", def:"a great ancient city on the Euphrates River (in modern Iraq), taken by Cyrus in 539 BC" },
    { w:"Hellespont", def:"the narrow strait between Europe and Asia (the Dardanelles in Turkey today)" },
    { w:"Iran", def:"the country today where ancient Persia was centred" },
    { w:"Zagros", say:"ZAG-ross", def:"the long mountain range on the western edge of the Iranian plateau" },
    { w:"Alborz", say:"al-BORZ", def:"the mountain range in northern Iran, between the plateau and the Caspian Sea (also spelt Elburz)", alt:["Elburz"] },
    { w:"Lut", say:"loot", def:"the Dasht-e Lut, a desert in south-east Iran and one of the hottest places on Earth" },
    { w:"Kavir", say:"ka-VEER", def:"the Dasht-e Kavir, a great salt desert in north-central Iran" },
    { w:"Caspian Sea", def:"the world's largest lake, on Iran's northern border" },
    { w:"Persian Gulf", def:"the sea on Iran's southern coast" },
    { w:"Royal Road", def:"the road of the Persian kings from Sardis to Susa, with stations where messengers changed horses" },
    { w:"Yazd", say:"yazd", def:"a desert city in central Iran, famous for its windcatchers and qanats" },
    { w:"Aotearoa", def:"the Māori name for New Zealand", say:"ah-oh-teh-ah-roh-ah" },
    /* ---- sources and writing ---- */
    { w:"cuneiform", say:"KYOO-nee-form", def:"wedge-shaped writing pressed into clay or carved in stone" },
    { w:"inscription", def:"words carved or written on stone, clay or metal", alt:["inscriptions"] },
    { w:"cylinder seal", def:"a small carved stone cylinder rolled across clay to leave a picture: an ancient signature", alt:["cylinder seals"] },
    { w:"tablet", def:"a flat piece of clay used for writing", alt:["tablets"] },
    { w:"Behistun", say:"bay-his-TOON", def:"a cliff in western Iran carved for Darius I with a picture and writing in three languages (also Bisitun)", alt:["Bisitun"] },
    { w:"Herodotus", say:"heh-ROD-oh-tus", def:"a Greek writer of the 400s BC who wrote a history of the Persian wars" },
    { w:"Cyrus Cylinder", def:"a clay cylinder written for Cyrus the Great after he took Babylon in 539 BC (British Museum)" },
    /* ---- geography ---- */
    { w:"plateau", say:"PLAT-oh", def:"a large area of high, fairly flat land", alt:["plateaus"] },
    { w:"oasis", say:"oh-AY-sis", def:"a green place in a desert where there is water", alt:["oases"] },
    { w:"tell", def:"a hill made of the layers of an old city, built one on top of another" },
    { w:"bazaar", def:"a market with many stalls or shops" },
    { w:"caravanserai", def:"an inn on a trade road where caravans stopped for the night" },
    { w:"caravan", def:"a group of people travelling together with animals and goods", alt:["caravans"] },
    { w:"urbanisation", def:"more and more people coming to live in towns and cities" },
    { w:"fertile", def:"good for growing crops" },
    /* ---- science ---- */
    { w:"ecosystem", def:"all the living things in a place together with the non-living things (water, rock, soil, sunlight)", alt:["ecosystems"] },
    { w:"producer", def:"a living thing that makes its own food from sunlight, like a plant", alt:["producers"] },
    { w:"consumer", def:"a living thing that eats other living things", alt:["consumers"] },
    { w:"decomposer", def:"a living thing that breaks down dead material, like fungi and bacteria", alt:["decomposers"] },
    { w:"adaptation", def:"a feature that helps a living thing survive where it lives", alt:["adaptations"] },
    { w:"endangered", def:"at risk of dying out completely" },
    { w:"bezoar ibex", def:"the wild goat of Iran's mountains, a sure-footed climber" },
    { w:"hyrax", def:"a small furry mammal that lives among rocks (Psalm 104:18)" },
    /* ---- technology ---- */
    { w:"qanat", say:"ka-NAHT", def:"an underground tunnel with a gentle slope that carries water by gravity from near the mountains to a town", alt:["qanats"] },
    { w:"mother well", def:"the first, deepest well of a qanat, dug down to the groundwater" },
    { w:"gradient", def:"how steep a slope is" },
    { w:"badgir", say:"baad-GEER", def:"a windcatcher: a tower on a house that catches breezes and lets hot air out", alt:["windcatcher","windcatchers","badgirs"] },
    { w:"yakhchāl", say:"YAKH-chaal", def:"an ancient Persian ice house: ice made in winter was stored in a deep domed pit into summer", alt:["yakhchal","yakhchāls","yakhchals"] },
    { w:"insulation", def:"material that slows heat moving in or out" },
    { w:"algorithm", def:"a set of steps to solve a problem or do a task", alt:["algorithms"] },
    /* ---- art ---- */
    { w:"rosette", def:"a flower-like design with petals around a centre", alt:["rosettes"] },
    { w:"radial symmetry", def:"a pattern that repeats evenly around a centre point" },
    { w:"relief", def:"a carving where the picture stands out from a flat background" },
    { w:"glazed brick", def:"brick with a shiny, coloured glass-like coating", alt:["glazed bricks"] },
    { w:"motif", def:"a shape or picture that repeats in a design", alt:["motifs"] },
    { w:"daric", say:"DAR-ik", def:"the gold coin of the Persian Empire, introduced under Darius; our team points", alt:["darics"] },
    /* ---- faith ---- */
    { w:"Pentecost", def:"the day the Holy Spirit came on Jesus' followers in Jerusalem (Acts 2)" },
    { w:"Zoroastrianism", def:"the old faith of many Persians, still followed by small communities today" }
  ];
})(window.BM);
