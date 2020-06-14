var animals = [
    "aardvark",
    "albatross",
    "alligator",
    "alpaca",
    "ant",
    "anteater",
    "antelope",
    "ape",
    "armadillo",
    "donkey",
    "baboon",
    "badger",
    "barracuda",
    "bat",
    "bear",
    "beaver",
    "bee",
    "bison",
    "boar",
    "buffalo",
    "butterfly",
    "camel",
    "capybara",
    "caribou",
    "cassowary",
    "cat",
    "caterpillar",
    "cattle",
    "chamois",
    "cheetah",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chough",
    "clam",
    "cobra",
    "cockroach",
    "cod",
    "cormorant",
    "coyote",
    "crab",
    "crane",
    "crocodile",
    "crow",
    "curlew",
    "deer",
    "dinosaur",
    "dog",
    "dogfish",
    "dolphin",
    "dotterel",
    "dove",
    "dragonfly",
    "duck",
    "dugong",
    "dunlin",
    "eagle",
    "echidna",
    "eel",
    "eland",
    "elephant",
    "elk",
    "emu",
    "falcon",
    "ferret",
    "finch",
    "fish",
    "flamingo",
    "fly",
    "fox",
    "frog",
    "gaur",
    "gazelle",
    "gerbil",
    "giraffe",
    "gnat",
    "gnu",
    "goat",
    "goldfinch",
    "goldfish",
    "goose",
    "gorilla",
    "goshawk",
    "grasshopper",
    "grouse",
    "guanaco",
    "gull",
    "hamster",
    "hare",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hornet",
    "horse",
    "human",
    "hummingbird",
    "hyena",
    "ibex",
    "ibis",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "kangaroo",
    "kingfisher",
    "koala",
    "kookabura",
    "kouprey",
    "kudu",
    "lapwing",
    "lark",
    "lemur",
    "leopard",
    "lion",
    "llama",
    "lobster",
    "locust",
    "loris",
    "louse",
    "lyrebird",
    "magpie",
    "mallard",
    "manatee",
    "mandrill",
    "mantis",
    "marten",
    "meerkat",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mosquito",
    "mouse",
    "mule",
    "narwhal",
    "newt",
    "nightingale",
    "octopus",
    "okapi",
    "opossum",
    "oryx",
    "ostrich",
    "otter",
    "owl",
    "oyster",
    "panther",
    "parrot",
    "partridge",
    "peafowl",
    "pelican",
    "penguin",
    "pheasant",
    "pig",
    "pigeon",
    "pony",
    "porcupine",
    "porpoise",
    "quail",
    "quelea",
    "quetzal",
    "rabbit",
    "raccoon",
    "rail",
    "ram",
    "rat",
    "raven",
    "red deer",
    "red panda",
    "reindeer",
    "rhinoceros",
    "rook",
    "salamander",
    "salmon",
    "sand dollar",
    "sandpiper",
    "sardine",
    "scorpion",
    "seahorse",
    "seal",
    "shark",
    "sheep",
    "shrew",
    "skunk",
    "snail",
    "snake",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starling",
    "stingray",
    "stinkbug",
    "stork",
    "swallow",
    "swan",
    "tapir",
    "tarsier",
    "termite",
    "tiger",
    "toad",
    "trout",
    "turkey",
    "turtle",
    "viper",
    "vulture",
    "wallaby",
    "walrus",
    "wasp",
    "weasel",
    "whale",
    "wildcat",
    "wolf",
    "wolverine",
    "wombat",
    "woodcock",
    "woodpecker",
    "worm",
    "wren",
    "yak",
    "zebra"
];
var fruits = ["apple","apricot","avocado","banana","boysenberry","blueberry","bing cherry","cherry","cantaloupe","crab apple","clementine","cucumber","plum","dinosaur eggs","date","dewberry","dragon fruit","elderberry","eggfruit","evergreen huckleberry","entawak","fig, farkleberry","finger lime","grapefruit","grape","gooseberry","guava","honeydew","hackberry","honeycrisp apple","indian prune","indonesian lime", "imbe","indian fig","jackfruit","java apple","jambolan","kiwi","kaffir lime","kumquat","lime","longan","lychee","loquat","mango","mandarin orange","mulberry","melon","nectarine","navel orange","nashi pear","olive","orange","ogeechee lime","oval kumquat","papaya","persimmon", "paw paw","prickly pear","peach","pomegranate","pineapple","quince","queen anne cherry","quararibea cordata","rambutan", "raspberry","rose hip","star fruit","strawberry","sugar baby watermelon","tomato","tangerine","tamarind","tart cherries","ugli fruit","uniq fruit","ugni","vanilla bean","velvet pink banana","voavanga","watermelon","wolfberry","white mulberry","xigua","ximenia caffra fruit","xango mangosteen","yellow passion fruit","yunnan hackberry","yangmei","zig zag vine fruit","zinfandel grapes","zucchini"];
var cities = ["afghanistan","albania", "algeria","andorra","angola","antigua","argentina","armenia","australia","austria","bahamas","barbados","belgium","brazil","cambodia","canada","china","dominican republic","dominica","denmark","ecuador","egypt","fiji","finland","france","germany","ghana","greece","guatemala","haiti","holy see","honduras","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan","kenya","kuwait","laos","lebanon","latvia","liberia","madagascar","malaysia","maldives","mexico","netherlands","north korea","norway","oman","pakistan","palau","panama","peru","qatar","romania","russia","saint lucia","samoa","saudi arabia","serbia","sweden","thailand","tanzania","ukraine","united states","united kingdom","venezuela","vietnam","yemen","zambia","zimbabwe"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var currentAlphabetLetter = "";

var successCounter = 0;

function myFunction() {
    document.getElementById("demo").style.color = "red";
}

// THIS IS THE RANDOM NUMBER GENERATOR
function randomNumberGenerator() {
    // Generates a random number between 1 and 10.
    var randomNumber = Math.floor(Math.random() * 3 + 1);

    // Generates a random number between 1 and 10.
    var randomNumberAlphabet = Math.floor(Math.random() * 25 + 0);

    // This will generate totalColumnsGame random numbers between the ranges below.
    document.getElementById("possibleText0").innerHTML = alphabet[randomNumberAlphabet];

    currentAlphabetLetter = alphabet[randomNumberAlphabet].charAt(0);

    // This will generate totalColumnsGame random numbers between the ranges below.
    document.getElementById("possibleText1").innerHTML = "Animals";

    // This will generate totalColumnsGame random numbers between the ranges below.
    document.getElementById("possibleText2").innerHTML = "Fruits";

    // This will generate totalColumnsGame random numbers between the ranges below.
    document.getElementById("possibleText3").innerHTML = "Countries";
}

// THIS IS THE TIMER.

var timeleft = 40;
var downloadTimer = setInterval(function(){

  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("demo1").innerHTML = "GAME OVER";
  } else {
    document.getElementById("demo1").innerHTML = timeleft + " seconds remaining";
    document.getElementById("successTrackerTextID").innerHTML = successCounter;
  }
  timeleft -= 1;
}, 1000);


// This is the compare script.
function add() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var aPrime = a.toLowerCase();
    var bPrime = b.toLowerCase();
    var za = animals.includes(a);
    var sum = a + b;
    var c = document.getElementById("c").value;
    var cPrime = c.toLowerCase();

    //0 if they match.
    // alert(animals.includes(a));

    if ((animals.includes(a)) && (aPrime.charAt(0) == currentAlphabetLetter)) {
 //     if((fruits.includes(b)) && (aPrime.charAt(0) == currentAlphabetLetter)) {
            if((cities.includes(c)) && (cPrime.charAt(0) == currentAlphabetLetter)) {
            }
            successCounter = successCounter + 1;
            timeleft = 40;
       // }
    } else {
        alert("YOU HAVE LOST! BEEP BAP BOOP");
        successCounter = 0;
    }
    randomNumberGenerator();
}
