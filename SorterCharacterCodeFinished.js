﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
 
// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo Last Choice';
 
str_ImgPath = 'http://i.imgur.com/';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 10;
 
var bln_ResultStyle = 0;
 
var bln_ProgessBar = 1;
 
var int_Colspan = 3;

var fldDefaultText = "Click Here to Start!"

var ary_TitleData = [
"Anime Friends",
"Nexon Game Friends",
"Post-Anime Friends",
"Crossover/Collab Friends",
"Humans",
];
 
var ary_CharacterData = [
// **************************Begin Anime Friends**********************************
[1, "Aardwolf",		[1,1,0,0,0], "7KoXE3D.png"],
[1, "Suri Alpaca",		[1,1,0,0,0], "RBrUkam.png"],
[1, "Plains Zebra",		[1,1,0,0,0], "yIYfHmT.png"],
[1, "Eurasian Eagle-Owl",	[1,1,0,0,0], "SEKH1bt.png"],
[1, "Serval",                         	[1,1,0,0,0], "FL0Z7iU.png"],
[1, "Royal Penguin",             	[1,0,0,0,0], "gHsIiop.png"],
[1, "Red Panda",                 	[1,1,0,0,0], "f86zzBu.png"],
[1, "Giant Panda",                	[1,1,0,0,0], "bhRH5oE.png"],
[1, "Moose",                       	[1,1,0,0,0], "iJVpEhC.png"],
[1, "Gray Wolf",                  	[1,1,0,0,0], "l8k7Mj2.png"],
[1, "Sand Cat",                   	[1,1,0,0,0], "izTmKbr.png"],
[1, "Humboldt Penguin",      	[1,1,0,0,0], "xOY3OZJ.png"],
[1, "North American Beaver",	[1,1,0], "sS5j01h.png"],
[1, "Golden Snub-Nosed Monkey", [1,1,0,0,0], "z2GnapK.png"],
[1, "Capybara",                   	[1,1,0,0,0], "pFnvLIi.png"],
[1, "Hippopotamus",            	[1,1,0,0,0], "udtyDas.png"],
[1, "Jaguar",                        	[1,1,0,0,0], "f7gwQs8.png"],
[1, "Rock Hyrax",                	[1,0,0,0,0], "GjW1KlB.png"],
[1, "Southern Rockhopper Penguin",[1,1,0,0,0], "xh4yjPS.png"],
[1, "Silver Fox",                  	[1,1,0,0,0], "IJJcJnz.png"],
[1, "Leopard",                    	[1,1,0,0,0], "iqoUzzN.png"],
[1, "Tsuchinoko",                	[1,1,0,0,0], "40RoKtk.png"],
[1, "Black Jaguar",             	[1,1,0,0,0], "EK8v7a5.png"],
[1, "Bearded Seal",             	[1,1,0,0,0], "jUs3BTa.png"],
[1, "Black-Tailed Prairie Dog",	[1,1,0,0,0], "fGm2rvB.png"],
[1, "Okapi",                        	[1,1,0,0,0], "OV4ZJRl.png"],
[1, "Arabian Oryx",             	[1,1,0,0,0], "5qAaTZk.png"],
[1, "Jinmengyo",                  	[1,1,0,0,0], "ll1e7Ug.png"],
[1, "Ezo Red Fox",              	[1,1,0,0,0], "i8czOMV.png"],
[1, "Panther Chameleon",     	[1,1,0,0,0], "XYTQQ12.png"],
[1, "Reticulated Giraffe",       	[1,1,0,0,0], "mmdgAni.png"],
[1, "Campo Flicker",            	[1,1,0,0,0], "Fcskl6v.png"],
[1, "Gentoo Penguin",           	[1,1,0,0,0], "KbDWgEX.png"],
[1, "Fennec Fox",                	[1,1,0,0,0], "pF8VJAB.png"],
[1, "Maltese Tiger",               	[1,1,0,0,0], "sMhjgDk.png"],
[1, "Crested Ibis",                 	[1,1,0,0,0], "9K6AhV2.png"],
[1, "Northern White-Faced Owl",   [1,1,0,0,0], "zKC8YGb.png"],
[1, "Margay",                        	[1,1,0,0,0], "Mc33wHg.png"],
[1, "Thomson's Gazelle",        	[1,1,0,0,0], "zdvfTXY.png"],
[1, "Axolotl",                         	[1,1,0,0,0], "iq0zPl9.png"],
[1, "Golden Tiger",                 	[1,1,0,0,0], "HhrNSnP.png"],
[1, "Emperor Penguin",           	[1,1,0,0,0], "QuYaIaa.png"],
[1, "Tasmanian Devil",             	[1,1,0,0,0], "ODEBF16.png"],
[1, "Shoebill",                        	[1,1,0,0,0], "4fn5kuf.png"],
[1, "Cougar",                         	[1,1,0,0,0], "W150K5Z.png"],
[1, "Australian Devil",            	[1,0,0,0,0], "gIH78Ma.png"],
[1, "Frilled Lizard",                	[1,1,0,0,0], "097vMv3.png"],
[1, "Red Kangaroo",              	[1,1,0,0,0], "W2NSfHa.png"],
[1, "Bergman's Bear",            	[1,1,0,0,0], "bE03V36.png"],
[1, "Brown Bear",                 	[1,1,0,0,0], "Z277TQQ.png"],
[1, "Polar Bear",                   	[1,1,0,0,0], "DlJYLAb.png"],
[1, "Scarlet Ibis",                  	[1,1,0,0,0], "DNkLn63.png"],
[1, "Kodiak Bear",               	[1,1,0,0,0], "XhmuRHM.png"],
[1, "Crested Porcupine",      	[1,1,0,0,0], "5DISyk5.png"],
[1, "Aurochs",                      	[1,1,0,0,0], "Ap5WtVE.png"],
[1, "Atlantic Puffin",              	[1,1,0,0,0], "alD6jPG.png"],
[1, "Fossa",                        	[1,1,0,0,0], "xpuHoae.png"],
[1, "Southern Tamandua",   	[1,1,0,0,0], "UbnPA8R.png"],
[1, "Indian Peafowl",           	[1,1,0,0,0], "1CRR8wt.png"],
[1, "White Rhinoceros",       	[1,1,0,0,0], "267FQb3.png"],
[1, "Japanese Black Bear",  	[1,1,0,0,0], "Va8OJcW.png"],
[1, "Crunchyroll-Hime",       	[1,0,0,0,0], "t2D7ASl.png"],
[1, "Ocelot",                       	[1,1,0,0,0], "tYKHqod.png"],
[1, "King Cobra",               	[1,1,0,0,0], "rURpmU1.png"],
[1, "Sika Deer",                  	[1,1,0,0,0], "46hPJnR.png"],
[1, "Giant Armadillo",           	[1,1,0,0,0], "krS97L1.png"],
[1, "Ezo Brown Bear",          	[1,1,0,0,0], "SHIg5ki.png"],
[1, "Axis Deer",                     	[1,0,0,0,0], "eKLvGsL.png"],
[1, "Asian Small-Clawed Otter",	[1,1,0,0,0], "9Z1NwOk.png"],
[1, "Raccoon",                       	[1,1,0,0,0], "q6tq7oE.png"],
[1, "Indian Elephant",              	[1,1,0,0,0], "4GcZIbL.png"],
[1, "Malayan Tapir",               	[1,1,0,0,0], "uisjepi.png"],
[1, "African Wild Dog",          	[1,1,0,0,0], "6X9pt5Y.png"],
[1, "Black Leopard",              	[1,1,0,0,0], "JCyfNul.png"],
[1, "Lion",                             	[1,1,0,0,0], "LeUbdP6.png"],
// **************************Begin Nexon Friends*************************************************
[1, "Koala" , 		[0,1,0,0,0], "mQLwC7H.png"],
[1, "Tiger" , 		[0,1,0,0,0], "UfqarEY.png"],
[1, "Japanese River Otter" , 	[0,1,0,0,0], "rfHtJtI.png"],
[1, "Black Rhinoceros" , 	[0,1,0,0,0], "RWV8v3T.png"],
[1, "Cheetah" , 		[0,1,0,0,0], "TJpOLMp.png"],
[1, "Japanese Wolf" , 		[0,1,0,0,0], "jfsKwgK.png"],
[1, "Bald Eagle" , 		[0,1,0,0,0], "qivVrXh.png"],
[1, "Northern Goshawk" , 	[0,1,0,0,0], "haINc2Y.png"],
[1, "Caracal" , 		[0,1,0,0,0], "0zz1SyG.png"],
[1, "White Tiger" , 		[0,1,0,0,0], "x6mnEJa.png"],
[1, "African Bush Elephant" , 	[0,1,0,0,0], "48sWtJH.png"],
[1, "Reindeer" , 		[0,1,0,0,0], "LVnJ4uz.png"],
[1, "Raccoon Dog" , 		[0,1,0,0,0], "hjfnfCG.png"],
[1, "Barbary Lion" , 		[0,1,0,0,0], "ypZxBKY.png"],
[1, "Peach Panther" , 		[0,1,0,0,0], "fuAQYVl.png"],
[1, "King Cheetah" , 		[0,1,0,0,0], "ngQhGit.png"],
[1, "Maned Wolf" , 		[0,1,0,0,0], "YxdFBYc.png"],
[1, "White Peafowl" , 		[0,1,0,0,0], "ux9kJ0C.png"],
[1, "Wolly Mammoth" , 	[0,1,0,0,0], "xM2vkV2.png"],
[1, "Common Ostrich" , 	[0,1,0,0,0], "zf3moHD.png"],
[1, "Cerval" , 		[0,1,0,0,0], "jnYtvTG.png"],
[1, "Oinari-sama" , 		[0,1,0,0,0], "pAHaQmS.png"],
//*******************************************************************************************
[1, "Nine-Tailed Fox" , 		[0,1,0,0,0], "JLrx2oB.png"],
[1, "Huacaya Alpaca" , 		[0,1,0,0,0], "jCQxq2o.png"],
[1, "Dromedary" , 		[0,1,0,0,0], "N6hx2Tw.png"],
[1, "Wild Bactrian Camel" , 	[0,1,0,0,0], "x2mSQwa.png"],
[1, "Spot-Billed Duck" , 	[0,1,0,0,0], "AI4kUj5.png"],
[1, "Common Vampire Bat" , 	[0,1,0,0,0], "t4kjnS5.png"],
[1, "Passenger Pigeon" , 	[0,1,0,0,0], "zXX6wNu.png"],
[1, "California Sea Lion" , 	[0,1,0,0,0], "SOd5YVo.png"],
[1, "Walrus" , 		[0,1,0,0,0], "RqUNvca.png"],
[1, "American Bison" , 		[0,1,0,0,0], "XD41NJZ.png"],
[1, "Impala" , 		[0,1,0,0,0], "0yf2T31.png"],
[1, "Topi" , 			[0,1,0,0,0], "dIMRyRF.png"],
[1, "Brazilian Porcupine" , 	[0,1,0,0,0], "Rq82WrW.png"],
[1, "Kyūshū Flying Squirrel" , 	[0,1,0,0,0], "A2oNq5F.png"],
[1, "Chipmunk" , 		[0,1,0,0,0], "8VDpzQz.png"],
[1, "Snow Leopard" , 		[0,1,0,0,0], "stlb3xJ.png"],
[1, "Coyote" , 		[0,1,0,0,0], "3ktDy9i.png"],
[1, "Japanese Marten" , 	[0,1,0,0,0], "Hx8YeSg.png"],
[1, "Japanese Boar" , 		[0,1,0,0,0], "WDF9mL4.png"],
[1, "Masked Palm Civet" , 	[0,1,0,0,0], "Neug2rZ.png"],
[1, "Japanese Badger" , 	[0,1,0,0,0], "EE1PUvd.png"],
[1, "Egyptian Goose" , 		[0,1,0,0,0], "nlpSYRh.png"],
[1, "Emu" , 		                  [0,1,0,0,0], "LZC65CM.png"],
[1, "Sable Antelope" , 		[0,1,0,0,0], "uEbaeOY.png"],
[1, "Oriental Stork" , 		[0,1,0,0,0], "MMQMuQN.png"],
[1, "Black Swan" , 		[0,1,0,0,0], "oS6Z2BV.png"],
[1, "North Island Giant Moa" , 	[0,1,0,0,0], "aYCd3UG.png"],
[1, "Red-Crowned Crane" , 	[0,1,0,0,0], "CplNlQe.png"],
[1, "Red-Eared Slider" , 	[0,1,0,0,0], "e9jDw7A.png"],
[1, "African Rock Python" , 	[0,1,0,0,0], "7CQSvi1.png"],
[1, "Eurasian Otter" , 		[0,1,0,0,0], "SICr862.png"],
[1, "Southern Sea Otter" , 	[0,1,0,0,0], "wzG2AF0.png"],
[1, "Geoffroy's Cat" , 		[0,1,0,0,0], "dIRxiGW.png"],
[1, "Meerkat" , 		[0,1,0,0,0], "aw30xKu.png"],
[1, "Mountain Tapir" , 		[0,1,0,0,0], "EuERo6P.png"],
[1, "Aye-Aye" , 		[0,1,0,0,0], "6Ds8moI.png"],
[1, "Southern Cassowary" , 	[0,1,0,0,0], "9K9rY5x.png"],
[1, "Smilodon" , 		[0,1,0,0,0], "SDuw8vl.png"],
[1, "White Lion" , 		[0,1,0,0,0], "Mwz9cJr.png"],
[1, "Mountain Hare" , 		[0,1,0,0,0], "aK6jUeK.png"],
[1, "Arctic Fox" , 		[0,1,0,0,0], "gpIKBLV.png"],
[1, "Arctic Hare" , 		[0,1,0,0,0], "kQObxdb.png"],
[1, "Sun Bear" , 		[0,1,0,0,0], "EfYNUuO.png"],
[1, "Grizzly Bear" , 		[0,1,0,0,0], "O6UK7jh.png"],
[1, "King Vulture" , 		[0,1,0,0,0], "vXiC29f.png"],
//*******************************************************************************************
[1, "Greater Flamingo" , 	[0,1,0,0,0], "WWuE8Z9.png"],
[1, "White-Naped Crane" , 	[0,1,0,0,0], "ZOqOyfU.png"],
[1, "Pink-Backed Pelican" , 	[0,1,0,0,0], "u7pi4xw.png"],
[1, "Kyushu Owl" , 		[0,1,0,0,0], "WaWAVWH.png"],
[1, "Saltwater Crocodile" , 	[0,1,0,0,0], "BmtQnP3.png"],
[1, "Japanese Giant Salamander" , 	[0,1,0,0,0], "h1KMtTq.png"],
[1, "Steller Sea Lion" , 		[0,1,0,0,0], "HKduv7D.png"],
[1, "Alligator Snapping Turtle" , 	[0,1,0,0,0], "NS6cKyo.png"],
[1, "Jungle Cat" , 		[0,1,0,0,0], "2xlOKaM.png"],
[1, "Père David's Deer" , 	[0,1,0,0,0], "JtPGFFm.png"],
[1, "Roe Deer" , 		[0,1,0,0,0], "Sdg7MGd.png"],
[1, "Southern Pudú" , 		[0,1,0,0,0], "5icfVX2.png"],
[1, "Ryukyu Boar" , 		[0,1,0,0,0], "NwWvEUl.png"],
[1, "Rothschild's Giraffe" , 	[0,1,0,0,0], "MnEwAlA.png"],
[1, "Quagga" , 		[0,1,0,0,0], "uDbsSyO.png"],
[1, "Pademelon" , 		[0,1,0,0,0], "IVATQ2m.png"],
[1, "White-Eared Opossum" , 	[0,1,0,0,0], "ryAG1kc.png"],
[1, "Thylacine" , 		[0,1,0,0,0], "Emap1X8.png"],
[1, "Striped Skunk" , 		[0,1,0,0,0], "cATcDVG.png"],
[1, "Linnaeus's Two-Toed Sloth" , 	[0,1,0,0,0], "2vCOqya.png"],
[1, "Guanaco" , 		[0,1,0,0,0], "OFiazqU.png"],
[1, "European Hare" , 		[0,1,0,0,0], "3ClU5PP.png"],
[1, "Shisa Lefty" , 		[0,1,0,0,0], "q5y3aDl.png"],
[1, "Shisa Right" , 		[0,1,0,0,0], "ieKisUj.png"],
[1, "Okinawa Rail" , 		[0,1,0,0,0], "2gzUG2l.png"],
[1, "Habu" , 		[0,1,0,0,0], "EXEkQc5.png"],
[1, "Western Spotted Skunk" , 	[0,1,0,0,0], "LsmFm6g.png"],
[1, "Giant Pangolin" , 		[0,1,0,0,0], "bJBS7TM.png"],
[1, "Bobcat" , 		[0,1,0,0,0], "OnhgSj7.png"],
[1, "Eurasian Lynx" , 		[0,1,0,0,0], "CmuDWNa.png"],
[1, "Asian Golden Cat" , 	[0,1,0,0,0], "pqWaS1b.png"],
[1, "Iriomote Cat" , 		[0,1,0,0,0], "K5T7MOd.png"],
[1, "Holstein Friesian Cattle" , 	[0,1,0,0,0], "eKieXCr.png"],
[1, "Rock Dove" , 		[0,1,0,0,0], "k5s9VAF.png"],
[1, "Sheep" , 		[0,1,0,0,0], "K3gGAE1.png"],
[1, "Tundra Swan" , 		[0,1,0,0,0], "cmbKLgK.png"],
[1, "American Alligator" , 	[0,1,0,0,0], "BxssBWe.png"],
[1, "Galápagos Tortoise" , 	[0,1,0,0,0], "4FnbmiV.png"],
[1, "Greater Bilby" , 		[0,1,0,0,0], "34sJA02.png"],
[1, "Long-Tailed Chinchilla" , 	[0,1,0,0,0], "cM3xSJr.png"],
//*******************************************************************************************
[1, "Clouded Leopard" , 	[0,1,0,0,0], "svpcQ9l.png"],
[1, "Mule Deer" , 		[0,1,0,0,0], "VMbSuFD.png"],
[1, "Arctic Wolf" , 		[0,1,0,0,0], "cf0zLYA.png"],
[1, "Byakko" , 		[0,1,0,0,0], "bqEE0i4.png"],
[1, "Genbu" , 		[0,1,0,0,0], "K0umROh.png"],
[1, "Suzaku" , 		[0,1,0,0,0], "KAOmo8V.png"],
[1, "Seiryuu" , 		[0,1,0,0,0], "oXNK6Id.png"],
[1, "Eurasian Beaver" , 		[0,1,0,0,0], "d4FegRR.png"],
[1, "Coypu" , 		[0,1,0,0,0], "3FuvVpO.png"],
[1, "Northern Sea Otter" , 	[0,1,0,0,0], "stpOLXe.png"],
[1, "Platypus" , 		[0,1,0,0,0], "Rfd21s9.png"],
[1, "Yamata No Orochi" , 	[0,1,0,0,0], "sq4Z6fx.png"],
[1, "Donkey" , 		[0,1,0,0,0], "3eXebwj.png"],
[1, "Przewalski's Horse" , 	[0,1,0,0,0], "hPcdhz0.png"],
[1, "Domestic Cat" , 		[0,1,0,0,0], "NiQDg0L.png"],
[1, "Honey Badger" , 		[0,1,0,0,0], "r0mWBzJ.png"],
[1, "Greater Honeyguide" , 	[0,1,0,0,0], "ae01kNy.png"],
[1, "Rhim Gazelle" , 		[0,1,0,0,0], "azs663S.png"],
[1, "Peregrine Falcon" , 	[0,1,0,0,0], "vP36UYz.png"],
[1, "Arctic Tern" , 		[0,1,0,0,0], "qw3blyn.png"],
[1, "Black Mamba" , 		[0,1,0,0,0], "ciQsshW.png"],
[1, "Boomslang" , 		[0,1,0,0,0], "42D31Qf.png"],
[1, "Komodo Dragon" , 	[0,1,0,0,0], "icdPVRv.png"],
[1, "Dugong" , 		[0,1,0,0,0], "OmZp3at.png"],
[1, "Mountain Goat" , 		[0,1,0,0,0], "aaYxLsF.png"],
[1, "Siberian Tiger" , 		[0,1,0,0,0], "v3vJA9F.png"],
[1, "Yezo Sika Deer" , 		[0,1,0,0,0], "aANPK8m.png"],
[1, "Baikal Seal" , 		[0,1,0,0,0], "TMqUtYE.png"],
[1, "Ross's Gull" , 		[0,1,0,0,0], "tbNnrc8.png"],
[1, "Snow Sheep" , 		[0,1,0,0,0], "k9SfAIg.png"],
[1, "Rock Ptarmigan" , 		[0,1,0,0,0], "kicIt7l.png"],
[1, "Saiga Antelope" , 		[0,1,0,0,0], "V5j2Ofc.png"],
[1, "Forest Owlet" , 		[0,1,0,0,0], "l7Tb58X.png"],
[1, "Hipparion" , 		[0,1,0,0,0], "w5rDq1f.png"],
[1, "Spectacled Caiman" , 	[0,1,0,0,0], "YcuUm2L.png"],
[1, "Flat-Headed Cat" , 	[0,1,0,0,0], "6XAaqQ4.png"],
[1, "Marbled Cat" , 		[0,1,0,0,0], "raZYvHY.png"],
[1, "Jaguarundi" , 		[0,1,0,0,0], "kHdfdTZ.png"],
[1, "Pale Fox" , 		[0,1,0,0,0], "7IgrLpQ.png"],
[1, "Bat-Eared Fox" , 		[0,1,0,0,0], "iFEpwhe.png"],
[1, "Culpeo" , 		[0,1,0,0,0], "4eKyA94.png"],
[1, "Gray Fox" , 		[0,1,0,0,0], "xdI7fqd.png"],
[1, "Dingo" , 		[0,1,0,0,0], "7cKqOlF.png"],
[1, "Hilgendorf's Tube-Nosed Bat" , [0,1,0,0,0], "NtbPLA5.png"],
[1, "Brown Long-Eared Bat" , 	[0,1,0,0,0], "tDpu73I.png"],
[1, "Fraternal Myotis" , 		[0,1,0,0,0], "5M1whHl.png"],
[1, "Grévy's Zebra" , 		[0,1,0,0,0], "ibIWU2u.png"],
//*******************************************************************************************
[1, "Gaur" , 		[0,1,0,0,0], "SrAG3rD.png"],
[1, "Tibetan Antelope" , 	[0,1,0,0,0], "yFNXfkd.png"],
[1, "Takin" , 		[0,1,0,0,0], "iG3bMzV.png"],
[1, "Chukar Partridge" , 	[0,1,0,0,0], "s3mQ1Vr.png"],
[1, "Dodo" , 		[0,1,0,0,0], "cfR4ZDJ.png"],
[1, "Resplendent Quetzal" , 	[0,1,0,0,0], "SpZLYsW.png"],
[1, "Goldcrest" , 		[0,1,0,0,0], "VyRV1ws.png"],
[1, "Italian Wolf" , 		[0,1,0,0,0], "qh1E2Dv.png"],
[1, "Southern Brown Kiwi" , 	[0,1,0,0,0], "rWJP11P.png"],
[1, "Markhor" , 		[0,1,0,0,0], "VoIQCtY.png"],
[1, "Greater Bird-Of-Paradise" , 	[0,1,0,0,0], "7Bal2RN.png"],
[1, "Keroro" , 		[0,0,0,1,0], "mvzVXPn.png"],
[1, "Tamama" , 		[0,0,0,1,0], "uPzxVRk.png"],
[1, "Giroro" , 		[0,0,0,1,0], "mZ6C4SV.png"],
[1, "Kururu" , 		[0,0,0,1,0], "LSkUwCO.png"],
[1, "Dororo" , 		[0,0,0,1,0], "1nDfRrD.png"],
[1, "South China Tiger" , 	[0,1,0,0,0], "9pUvU7P.png"],
[1, "Medium Tree Finch" , 	[0,1,0,0,0], "JAD9oAr.png"],
[1, "Hyracotherium" , 		[0,1,0,0,0], "o3zFl0m.png"],
[1, "Blackbuck" , 		[0,1,0,0,0], "iohFUSj.png"],
[1, "Numbat" , 		[0,1,0,0,0], "WexXKTW.png"],
[1, "Common Wombat" , 	[0,1,0,0,0], "frO7AtC.png"],
[1, "Common Eland" , 		[0,1,0,0,0], "6tn0UYO.png"],
[1, "Common Cuckoo" , 	[0,1,0,0,0], "1VBjt0g.png"],
[1, "Schomburgk's Deer" , 	[0,1,0,0,0], "d1uQH4E.png"],
[1, "Costal Taipan" , 		[0,1,0,0,0], "dL9QEqP.png"],
[1, "Collared Peccary" , 	[0,1,0,0,0], "HNfqbpg.png"],
[1, "Muskox" , 		[0,1,0,0,0], "6KrsqjN.png"],
[1, "Jersey Cattle" , 		[0,1,0,0,0], "r5qtSMT.png"],
[1, "Guernsey Cattle" , 		[0,1,0,0,0], "FKmxkZx.png"],
[1, "Sulawesi Bear Cuscus" , 	[0,1,0,0,0], "xsFYUA0.png"],
[1, "Scaly-Tailed Possum" , 	[0,1,0,0,0], "ZMnCf2y.png"],
[1, "Common Brushtail Possum" , 	[0,1,0,0,0], "Kh7yVGH.png"],
[1, "Marvellous Spatuletail" , 	[0,1,0,0,0], "048LHU9.png"],
[1, "Japanese Cormorant" , 	[0,1,0,0,0], "5kgrXTx.png"],
[1, "Green Pheasant" , 		[0,1,0,0,0], "FTQJjND.png"],
[1, "Japanese Bush Warbler" , 	[0,1,0,0,0], "LmsyFWe.png"],
[1, "Baweng Satanic Leaf Gecko" , [0,1,0,0,0], "UgsjkSq.png"],
[1, "Superb Lyrebird" , 		[0,1,0,0,0], "6p4hllV.png"],
[1, "Honduran White Bat" , 	[0,1,0,0,0], "DrAQhx4.png"],
[1, "Pink Fairy Armadillo" , 	[0,1,0,0,0], "khCSjde.png"],
[1, "Harp Seal" , 		[0,1,0,0,0], "NJwGRMN.png"],
[1, "Hooded Seal" , 		[0,1,0,0,0], "RAIV5tu.png"],
[1, "Ringed Seal" , 		[0,1,0,0,0], "bCSeUWb.png"],
[1, "Tibetan Sand Fox" , 	[0,1,0,0,0], "MtK9rzc.png"],
[1, "Water Deer" , 		[0,1,0,0,0], "M8WdvrY.png"],
[1, "Tarpan" , 		[0,1,0,0,0], "Ag1M0r6.png"],
[1, "Buru Babirusa" , 		[0,1,0,0,0], "4NUER9v.png"],
[1, "Giant Forest Hog" , 	[0,1,0,0,0], "taC7zUo.png"],
[1, "Sumatran Rhinoceros" , 	[0,1,0,0,0], "kLMuIX5.png"],
//*******************************************************************************************
[1, "Acorn Woodpecker" , 	[0,1,0,0,0], "w6BINhf.png"],
[1, "South African Giraffe" , 	[0,1,0,0,0], "1NSpGUc.png"],
[1, "Barn Owl" , 		[0,1,0,0,0], "ikdC34h.png"],
[1, "Golden Jackal" , 		[0,1,0,0,0], "jalMxxE.png"],
[1, "Jungle Crow" , 		[0,1,0,0,0], "1FMgEK3.png"],
[1, "Yatagarasu" , 		[0,1,0,0,0], "LIRrY3V.png"],
[1, "Hokkaido Wolf" , 		[0,1,0,0,0], "afN8PUR.png"],
[1, "Mexican Wolf" , 		[0,1,0,0,0], "MX65a5A.png"],
[1, "Dhole" , 		[0,1,0,0,0], "46UuOjE.png"],
[1, "Alpine Ibex" , 		[0,1,0,0,0], "bu85XH2.png"],
[1, "Hippopotamus Gorgops" , 	[0,1,0,0,0], "M9R8hKQ.png"],
[1, "African Forest Elephant" , 	[0,1,0,0,0], "dbuUQ9I.png"],
[1, "Sivatherium" , 		[0,1,0,0,0], "4AOrbUJ.png"],
[1, "Transvaal Lion" , 		[0,1,0,0,0], "aJ3CsU0.png"],
[1, "Masai Lion" , 		[0,1,0,0,0], "XFIqtE7.png"],
[1, "Gharial" , 		[0,1,0,0,0], "E8fyKH7.png"],
[1, "Red-Footed Tortoise" , 	[0,1,0,0,0], "zBkbLhx.png"],
[1, "Indian Star Tortoise" , 	[0,1,0,0,0], "06dMEvS.png"],
[1, "Leopard Tortoise" , 	[0,1,0,0,0], "JkG7b87.png"],
[1, "European Ratsnake" , 	[0,1,0,0,0], "dqB2cRO.png"],
[1, "Emerald Tree Boa" , 	[0,1,0,0,0], "lcNELfa.png"],
[1, "Amazon Tree Boa" , 	[0,1,0,0,0], "kocv3Wd.png"],
[1, "Golden Eagle" , 		[0,1,0,0,0], "qhpJIvt.png"],
[1, "Guadalupe Caracara" , 	[0,1,0,0,0], "ODuuvBz.png"],
[1, "Martial Eagle" , 		[0,1,0,0,0], "aeNnZFs.png"],
[1, "Indian Rhinoceros" , 	[0,1,0,0,0], "XuPOZJ9.png"],
[1, "Black-Backed Jackal" , 	[0,1,0,0,0], "zYD3JQI.png"],
[1, "Stoat" , 		[0,1,0,0,0], "TJboK4r.png"],
[1, "Binturong" , 		[0,1,0,0,0], "KJXz8Q0.png"],
[1, "Inugami Gyoubu" , 		[0,1,0,0,0], "cRZGTLx.png"],
[1, "Danzaburou-Danuki" , 	[0,1,0,0,0], "mZRBy4u.png"],
[1, "Kamaitachi Ten" , 		[0,1,0,0,0], "mN4gOl5.png"],
[1, "Kamaitachi Setsu" , 	[0,1,0,0,0], "wN8MguE.png"],
[1, "Kamaitachi Chi" , 		[0,1,0,0,0], "nkHnxCm.png"],
[1, "Spectacled Bear" , 		[0,1,0,0,0], "bDicHYN.png"],
[1, "Spectacled Hare-Wallaby" , 	[0,1,0,0,0], "4HfIHm9.png"],
[1, "Spectacled Owl" , 		[0,1,0,0,0], "qUHxX2M.png"],
[1, "Vicuña" , 		[0,1,0,0,0], "qImqDli.png"],
[1, "Pronghorn" , 		[0,1,0,0,0], "6NRI6Az.png"],
[1, "Springbok" , 		[0,1,0,0,0], "mpKYt4L.png"],
[1, "Squirrel Glider" , 		[0,1,0,0,0], "geQqMvZ.png"],
[1, "Common Ringtail Possum" , 	[0,1,0,0,0], "FjMqp8r.png"],
[1, "Greater Glider" , 		[0,1,0,0,0], "j0cgwsa.png"],
[1, "Harpy Eagle" , 		[0,1,0,0,0], "ND6k3Xd.png"],
[1, "Greater Roadrunner" , 	[0,1,0,0,0], "6FTsOak.png"],
//*******************************************************************************************
[1, "Secretarybird" , 		[0,1,0,0,0], "8UZ8eWu.png"],
[1, "Striated Caracara" , 	[0,1,0,0,0], "0DtMG6h.png"],
[1, "Mediterranean Monk Seal" , 	[0,1,0,0,0], "uJYX1Am.png"],
[1, "Steller's Sea Cow" , 	[0,1,0,0,0], "NS3C52e.png"],
[1, "Tachikoma Type-A" , 	[0,0,0,1,0], "EEpAF5F.png"],
[1, "Tachikoma Type-B" , 	[0,0,0,1,0], "CpP9JE6.png"],
[1, "Tachikoma Type-C" , 	[0,0,0,1,0], "3VCoQWl.png"],
[1, "Uchikoma" , 		[0,0,0,1,0], "OZYptDJ.png"],
[1, "HAW-206" , 		[0,0,0,1,0], "ecpGwVs.png"],
[1, "Logikoma" , 		[0,0,0,1,0], "UFahhq8.png"],
[1, "Northern Fur Seal" , 	[0,1,0,0,0], "YPCiGJ2.png"],
[1, "Brown Greater Galago" , 	[0,1,0,0,0], "KJsGRaN.png"],
[1, "Ring-Tailed Lemur" , 	[0,1,0,0,0], "nppXmRY.png"],
[1, "Indri" , 		                  [0,1,0,0,0], "6nrPp5r.png"],
[1, "Venezuelan Red Howler" , 	[0,1,0,0,0], "AZxI2bO.png"],
[1, "Mandrill" , 		[0,1,0,0,0], "2r1XKgk.png"],
[1, "Common Chimpanzee" , 	[0,1,0,0,0], "2MhKluk.png"],
[1, "Western Gorilla" , 		[0,1,0,0,0], "Wriitdp.png"],
[1, "Bornean Orangutan" , 	[0,1,0,0,0], "WVBBJ7p.png"],
[1, "Golden Lion Tamarin" , 	[0,1,0,0,0], "4pyQVej.png"],
[1, "Japanese Squirrel" , 	[0,1,0,0,0], "TntqCjJ.png"],
[1, "Nilgai" , 		[0,1,0,0,0], "3ck00Fp.png"],
[1, "Banteng" , 		[0,1,0,0,0], "KqJbktZ.png"],
[1, "Northern Dwarf Siren" , 	[0,1,0,0,0], "1OR9fsn.png"],
[1, "Hellbender" , 		[0,1,0,0,0], "H0VRxsP.png"],
[1, "Sable" , 		[0,1,0,0,0], "8Be4Jke.png"],
[1, "Eastern Wolf" , 		[0,1,0,0,0], "TUm8kA7.png"],
[1, "Tundra Wolf" , 		[0,1,0,0,0], "XhNjR69.png"],
[1, "Indian Wolf" , 		[0,1,0,0,0], "9MixRCl.png"],
[1, "Mongolian Wolf" , 		[0,1,0,0,0], "GBsPtXc.png"],
[1, "Cape Lion" , 		[0,1,0,0,0], "BsAvrFe.png"],
[1, "Arizonian Jaguar" , 		[0,1,0,0,0], "RURfNTT.png"],
[1, "Red Junglefowl" , 		[0,1,0,0,0], "uNd86AV.png"],
[1, "Skyfish" , 		[0,1,0,0,0], "vdjimtR.png"],
[1, "Common Bottlenose Dolphin" , [0,1,0,0,0], "YHf7BeC.png"],
[1, "Short-Beaked Common Dolphin" , [0,1,0,0,0], "0NsDqgs.png"],
[1, "Chinese White Dolphin" , 	[0,1,0,0,0], "8vR3gcA.png"],
[1, "Narwhal" , 		[0,1,0,0,0], "kw85yFa.png"],
[1, "African Golden Wolf" , 	[0,1,0,0,0], "U6fqlU0.png"],
[1, "Greater Rhea" , 		[0,1,0,0,0], "O1b0kVX.png"],
[1, "Giant Anteater" , 		[0,1,0,0,0], "SkNyahI.png"],
[1, "Dire Wolf" , 		[0,1,0,0,0], "tpLIHfd.png"],
[1, "Gastornis" , 		[0,1,0,0,0], "kuCct5z.png"],
[1, "Silky Anteater" , 		[0,1,0,0,0], "TOPFJb3.png"],
[1, "Spotted Hyena" , 		[0,1,0,0,0], "vLqQGsJ.png"],
[1, "Blue Whale" , 		[0,1,0,0,0], "sTyUlzO.png"],
//*******************************Begin Post-Anime Friends****************************************
[1, "Adélie Penguin" , 		[0,0,1,0,0], "T24tTk5.png"],
[1, "Australian Brushturkey" , 	[0,0,1,0,0], "DbrpOGK.png"],
[1, "Baird's Tapir" , 		[0,0,1,0,0], "fMz9USa.png"],
[1, "Black Wildebeest" , 	[0,0,1,0,0], "Gj4IBWs.png"],
[1, "Black-and-White Ruffed Lemur" , [0,0,1,0,0], "7XpzYdE.png"],
[1, "Black-Headed Ibis" , 	[0,0,1,0,0], "CN034Ub.png"],
[1, "Blue Wildebeest" , 		[0,0,1,0,0], "8KtrsYA.png"],
[1, "Chapman's Zebra" , 	[0,0,1,0,0], "Jh7WUGk.png"],
[1, "Chestnut Horse" , 		[0,0,1,1,0], "a7zUChR.png"],
[1, "Chicken" , 		[0,0,1,0,0], "Tl65XME.png"],
[1, "Chinstrap Penguin" , 	[0,0,1,0,0], "yQcCyq2.png"],
[1, "Cinereous Vulture" , 	[0,0,1,0,0], "4nSp5GK.png"],
[1, "Commerson's Dolphin" , 	[0,0,1,0,0], "XQ0sXlQ.png"],
[1, "Common Degu" , 		[0,0,1,0,0], "T3aTO3Y.png"],
[1, "Daito Fruit Bat" , 		[0,0,1,0,0], "lBHrCOS.png"],
[1, "Domestic Dog" , 		[0,0,1,0,0], "DlJBi2W.png"],
[1, "European Cave Lion(Placeholder!)" , [0,0,1,0,0], "LjWRbU0.png"],
[1, "Great Auk" , 		[0,0,1,0,0], "BC9mW75.png"],
[1, "Great Crowned Crane" , 	[0,0,1,0,0], "fzjAZpJ.png"],
[1, "Island Fox" , 		[0,0,1,0,0], "TEEWD2e.png"],
[1, "King Penguin" , 		[0,0,1,0,0], "WoQ4DBQ.png"],
[1, "Kinshachi" , 		[0,0,1,0,0], "X6SHqZZ.png"],
[1, "Long-Tailed Tit" , 		[0,0,1,0,0], "t7pS0Hg.png"],
[1, "Macaw" , 		[0,0,1,0,0], "QpUNyZe.png"],
[1, "Masked Booby" , 		[0,0,1,0,0], "SLq7uy7.png"],
[1, "Merlion" , 		[0,0,1,0,0], "TBZyat5.png"],
[1, "Mouflon" , 		[0,0,1,0,0], "dFSiLNC.png"],
[1, "Mountain Zebra" , 		[0,0,1,0,0], "i0GgBTz.png"],
[1, "New Guinea Singing Dog" , 	[0,0,1,0,0], "UBxSrDe.png"],
[1, "New Zealand Giant Penguin" , 	[0,0,1,0,0], "3qMjHwb.png"],
[1, "Pallas's Cat" , 		[0,0,1,0,0], "D0h172J.png"],
[1, "Raijū" , 		[0,0,1,0,0], "JwtoOc6.png"],
[1, "Red Fox" , 		[0,0,1,0,0], "HvFQLdy.png"],
[1, "Ryukyu Inu" , 		[0,0,1,0,0], "N0dUEuX.png"],
[1, "Seal Brown Horse" , 	[0,0,1,1,0], "MCNxkKy.png"],
[1, "Siberian Husky" , 		[0,0,1,0,0], "bpvhQel.png"],
[1, "South American Tapir" , 	[0,0,1,0,0], "zyqNMS1.png"],
[1, "Sumatran Elephant" , 	[0,0,1,0,0], "a1GMWy0.png"],
[1, "Sumatran Tiger" , 		[0,0,1,0,0], "zeffpAw.png"],
[1, "Tufted Puffin" , 		[0,0,1,0,0], "mg6hNkY.png"],
[1, "White Horse" , 		[0,0,1,1,0], "I3aftWj.png"],
 [1, "Wolverine" , 		[0,0,1,0,0], "kbHTj3g.png"],
//*******************************Begin Cross-Over Friends****************************************
[1, "Shin Godzilla" , 		[0,0,0,1,0], "fFuE7ft.png"],
[1, "Hi-no-Tori" , 		[0,0,0,1,0], "vYQMD8D.png"],
[1, "Palcoarai-san2" , 		[0,0,0,1,0], "Q7z3SSb.png"],
[1, "Palcoarai-san" , 		[0,0,0,1,0], "Z5qNmmb.png"],
[1, "Rabbit Yukine" , 		[0,0,0,1,0], "nyLhTQx.png"],
[1, "Shiserval Lefty" , 		[0,0,0,1,0], "YlfuK5N.png"],
[1, "Shiserval Right" , 		[0,0,0,1,0], "dDdXc7e.png"],
[1, "Valcoara" , 		[0,0,0,1,0], "CeVrQ1J.png"],
[1, "White Serval" , 		[0,0,0,1,0], "cnj0CLE.png"],
[1, "Extra Serval" , 		[0,0,0,1,0], "4pFx9wv.png"],
//*******************************Begin Humans*************************************************
[1, "Mirai" , 		[0,0,0,0,1], "L7rQ3Xb.png"],
[1, "Nana" , 		[0,0,0,0,1], "IH77JeO.png"],
[1, "Kako" , 		[0,0,0,0,1], "NMCiUXS.png"],
[1, "Kaban" , 		[1,0,0,0,0], "aNSr0Kp.png"],
];
