/*
Objektált orientált programozás -> Class

Arra jó egy class, hogy egyféle feladatkört tud ellátni, de a paraméterezésnek megfelelően
másképpen müködnek a különböző metódusok 

!!!!!!
Class-eknél nincsenek kulcsok meg értékek, hanem ott mezőkről és metódusokról beszélünk 

Az objektum-orientált programozás a valós élet objektumait másolja 
A valós élet objektumai rendelkeznek 
    tulajdonságokkal -> mezők
    viselkedési/müködési formákkal -> metódusok

A tulajdonságokat hívjuk az objektum orientált programozásban mezőknek 
A viselkedési/müködési formák pedig a metódusok 

A tulajdonságok azok lehetnek, tételezzük fel, hogy van egy kutyánk 
és a kutyának van egy 
    - fajtája 
    - magassága 
    - súlya stb...
ezek a tulajdonságok 

a viselkedési formák meg, hogy
    - eszik 
    - iszik 


Létrehozunk egy olyan class-t, hogy Animal (megnézzük, hogy az állatoknak milyen tulajdonságai lehetnek -> species, subspecies stb.)

class Animal {
    species;
    subspecies;
    color;
    weight;
    legNumbers;
    wingNumbers;
}

létrehozunk egy példányt ebből az Animal-ből 
-> 
const dog = new Animal();
dog.species = "kutya";
dog.subspecies = "szamojéd";
dog.color = "fehér";
dog.weight = 20;
dog.legNUmbers = 4;
dog.wingNumbers = 0;

Létrehoztunk az Animal egy olyan példányt, ami dog, de pl. létrehozhatunk egy macskát is 

const cat = new Animal();
cat.species = "macska";
cat.subspecies = "házi";
cat.color = "fekete-fehér foltos";
cat.weight = "5";
cat.legNumbers = "4";
cat.wingNumbers = "0";

Létrehoztunk az osztályból (absztrakció) két példányt, amik specifikus tulajdsonságokkal rendelkeznek  

Miért jó ez nekünk 
-> 
Eddig naggyából csak arra jó, hogy adatokat tároljunk benne, eddig csak egy összetett adatszerkezetként használtuk!!!

de abban az esetben, ha metódusokat is rendelünk ehhez az Animal osztályhoz -> eat()

class Animal {
    species;
    subspecies;
    color;
    weight;
    legNumbers;
    wingNumbers;

    eat(food) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${food} eszik.`)
    }
}

Ez miért jó nekünk
-> 
Mert itt van az eat nevű metódus, ami kiírja, hogy mit eszik az adott állat !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és ha a dog-ból meghiívjuk az eat-et 

const dog = new Animal();
dog.species = "kutya";
dog.subspecies = "szamojéd";
dog.color = "fehér";
dog.weight = 20;
dog.legNUmbers = 4;
dog.wingNumbers = 0;
dog.eat("kutyaeledelt"); 
->
azt fogjuk visszakapni a konzol.on -> A(z) kutya fajú és szamojéd alfajú állat kutyaeledelt eszik.

de, hogyha a cat-ből hívjuk meg az eat-et!!!!
cat.eat("whiskas-t");
-> 
A(z) macska fajú és házi alfajú állat whiskas-t eszik.

csinálunk még egy drink metódust is az Animal class-nak 
->
class Animal {
    species;
    subspecies;
    color;
    weight;
    legNumbers;
    wingNumbers;

    eat(food) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${food} eszik.`)
    }

    drink(drink) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${drink} iszik.`)
    }
}

És akkor ugynaugy, mint az eat-nél meghívjuk valamelyik példányból és megadjuk, hogy mit iszik 
->
dog.drink("vizet"); -> A(z) kutya fajú és szamojéd alfajú állat vizet iszik.
vagy 
cat.drink("vizet"); -> A(z) macska fajú és házi alfajú állat vizet iszik.

Erre jók a metódusok és itt is, mint az objektumokban a this. kulcsszóval tudjuk elérni a többi mezőt és metódust!!!!!
mert a this az mindig maga az osztály illetve az a példány amiből meghívtuk 
******************************************************************************************************************************
Mit lehet itt még csinálni 
-> 
Csinálhatunk egy constructor-t

A constructor egy speciális metódus, ami minden példányosítás alkalmával lefut 
Pélányosítás, mikor létrehozunk egy new Animal()-t 
constructor -> 
    - nincs visszatérési értéke 
    - fogadhat paramétereket 

Ha fogadhat paramétereket, akkor a constructor-on keresztül fel tudjuk tölteni a mezőket és be tudunk állítani különböző kezdeti folyamatokat
megadjuk constructor paramétereinek a mezőket 

    constructor(species, subspecies, color, weight, legNumbers, wingNumbers) {
        this.species = species;
        this.subspecies = subspecies;
        this.color = color;
        this.weight = weight;
        this.legNumbers = legNumbers;
        this.wingNumbers = wingNumbers;
    }

Melyik a paraméter és melyik a mező 
-> 
mező az a this-es pl. this.color

class Animal {
    species;
    subspecies;
    color;
    weight;
    legNumbers;
    wingNumbers;

    constructor(species, subspecies, color, weight, legNumbers, wingNumbers) {
        this.species = species;
        this.subspecies = subspecies;
        this.color = color;
        this.weight = weight;
        this.legNumbers = legNumbers;
        this.wingNumbers = wingNumbers;
    }

    eat(food) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${food} eszik.`)
    }

    drink(drink) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${drink} iszik.`)
    }
}

Az a lényeg, hogy itt ezekre már nem lesz szükségünk, mert a constructor-on keresztül át tudjuk adni ezeket a tulajdonságokat 
-> 
(amikor még nem volt constructor)!!!!!!!!!!!!!!!!!!!!!
const dog = new Animal();
dog.species = "kutya";
dog.subspecies = "szamojéd";
dog.color = "fehér";
dog.weight = 20;
dog.legNUmbers = 4;
dog.wingNumbers = 0;
dog.eat("kutyaeledelt"); 

(amiután már csináltunk constructor-t) fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dog = new Animal("kutya", "szamojéd", "fehér", 20, 4, 0);

és a cat-nél pedig ugyanigy ->
const cat = new Animal("macska", "házi", "fekete-fehér foltos", 5, 4, 0);

Így teljesen ugyanazt kapjuk vissza, csak nem írunk ilyen sok sort, nem állítottuk be a változóknak(mezőknek) külön az értékét

construcor-ben megadhatunk több és kevesebb paramétert, mint amennyi mezőnk van 
Mert ha van bármilyen osztályunk és abból létrehozunk bármilyen példányt és a konstruktorban felsoroljuk a különböző mezőket,
mint külső paramétereket, hogy megadjuk a mezőknek az értéket és van két metódus ami megmondja, hogy hogyan induljon el szóval 
ennek bármennyi paramétert adhatunk 

constructor(species, subspecies, color, weight, legNumbers, wingNumbers)
ez nem azért van így nekünk, mert pont ilyen sorrendben kell felsorolnunk a paramétereket, meg a neve is lehetne a, b, c, d 
tökmindegy, hogy mi a neve meg hogy milyen sorrendben van, tökmindegy, hogy hány darab -> az a lényeg, hogy észszerűen használjuk 
!!!!!!!!!!!!!!!!!!!!!!!
*************************************************************************************************************
Öröklödés 

class Dog extends Animal {

}

extends!!!!!
Azt tudjuk elérni ezzel, hogy örökli a mezőket és a metódusokat valamilyen class-tól, ami itt jelen esetben a Dog class 
örökli majd az Animal-től 

Az öröklödés által a leszármazott osztály örökli a szűlőosztály mezőit és metódusait 

És ha létrehozunk egy dog2-t 
const dog2 = new Dog("kutya", "labrador", "barna", 25, 4, 0);
->
ez örökölte a constructor-unkat is ez a Dog, tehát nyilván ki kell töltenünk a constructor-t, mert olyat kapuk vissza, hogy 
undefined 
->
dog2.eat("macskaeledelt") -> A(z) kutya fajú és labrador alfajú állat macskaeledelt eszik. 

De a kutya osztály esetében van-e bármi értelme annak, hogy beállítjuk a kutyánál, hogy ez egy kutya 
Tehát van-e értelme annak, hogy a constructor-ön keresztül átadjuk azt az értéket, hogy kutya, amikor 
maga az osztály az, hogy Dog 
!!!!!!
Itt felül tudjuk definiálni a constructor-unkat és készíthetünk egy olyan constructor-t, ami majdnem ugyanazokat a paramétereket 
fogadja, mint a felmenő (Animal), annyi különbdéggel, hogy eggyet nem, azt hogy species, a fajt 
és meg is tudjuk hívni a super() segítségével az ősosztálynak a constructor-át!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
az ősosztály constructor-a az pontosan ugyangy fog müködni, mint ahogyan akkor amikor az ősosztály készítünk egy példányt 
tehát itt nekünk a super()-ben meg kell adnunk a megfelelő paramétereket 
Amiből az egyiket beleégetjük, mert az nyilvánvaló, hogy egy kutya!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
super("kutya", subspecies, color, weight, legNumbers, wingNumbers);
És akkor nekünk itt van ez a super és beállítja az ősosztálynál azokat a mezőket, amiket megörökölt a Dog 
és ez azért jó, mert eggyel kevesebb paramétert kell megadnunk!!!

class Dog extends Animal {
    constructor(subspecies, color, weight, legNumbers, wingNumbers) -> felülírtuk a constructor (Animal), itt már nincsen species
    super("kutya", subspecies, color, weight, legNumbers, wingNumbers);
}

const dog2 = new Dog("labrador", "brown", 25, 4, 0);

És teljesen ugyanugy fod müködni, csak itt már nem kell példányosításnál beírni, hogy kutya, mert azt a super-vel megadtuk 
az ősosztány construcotorának, hogy az legyen mindig (mert a Dog-nál már nem kell beállítanunk, hogy kutya)
Ezt a dolgot hívjuk úgy, hogy 
-> 
konstruktor felüldefiniálás 
De viszont van egy olyan szabály a JavaScriptben, hogyha öröklünk és felüldefiniáljuk az ősosztály konstriuktorát  
akkor muszáj meghívni a super()-t!!!!!!
Vagy különben kapunk egy hibaüznetet, hogy must call super constructor in derived class before accessing...
*********************************************************************************************************************************
Felül tudunk definiálni metódusokat is 

class Dog extends Animal {
    constructor(subspecies, color, weight, legNumbers, wingNumbers) -> felülírtuk a constructor (Animal), itt már nincsen species
    super("kutya", subspecies, color, weight, legNumbers, wingNumbers);

    drink(drink) {
        console.log(`A(z) ${this.subspecies} alfajú kutya ${drink iszik.}`)
    }
}

Itt a drink-ben az a különbség, hogy már rögtön az alfajt említjük, tehát nem állat, hanem kutya 
ugyanezt meg lehet csinálni az eat-vel is 

class Dog extends Animal {
    constructor(subspecies, color, weight, legNumbers, wingNumbers) -> felülírtuk a constructor (Animal), itt már nincsen species
    super("kutya", subspecies, color, weight, legNumbers, wingNumbers);

    drink(drink) {
        console.log(`A(z) ${this.subspecies} alfajú kutya ${drink} iszik.`)
    }

    eat(food) {
        console.log(`A(z) ${this.subspecies} alfajú kutya ${food} eszik.}`)
    }
}

dog2.eat("macskaeledelt");
*********************************************************************************************************************************************
Ezek a class-ek JavaScriptben olyanok, mintha használtuk volna a constructor pattern 

function Cat(subspecies, color, weight, legNumbers, wingNumbers) {
    this.subspecies = subspecies;
    this.color = color;
    this.weight = weight;
    this.legNumbers = legNumbers;
    this.wingNumbers = wingNumbers;

    this.eat = function(food) { 
        console.log(`A(z) ${this.subspecies} alfajú kutya ${food} eszik.}`)
    }
}

Különbség class és function között, hogy itt kell hívatkozni a this-re, ha csinálunk benne egy metódust!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class-nl viszont nem kell 

Tehát itt ez egy function és a this, az magát a function-t jelöli és létre lehet hozni a function-nek a JavaScript-ben 
különböző mezőket tulajdonképpen és ez alapján müködik a class
->
le lesz fordítva a class egy ilyen constructor pattern-é, ez azért constructor pattern, mert 
ezt nevezzük construcor-nak -> (subspecies, color, weight, legNumbers, wingNumbers)

Azt tudjuk csinálni
-> 
const cat2 = new Cat("Maine Coon", "szürke", 5, 4, 0);



*/