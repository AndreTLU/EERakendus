###EERakendus

Frontend - ReactJS, axios, AntDesign
Backend - JavaEE GlassFish 5
------------------------------------

Esilehel saab otsida kasutajaid. Valikule vajutades minnakse valitud kasutaja lehele ja saab andmeid muuta.
Esilehelt saab minna ka formile kust saab lisada uusi kasutajaid.

Kasutajaid hoitakse massiivis serveri poolel. Autocomplete ja formi valideerimine on tehtud kasutades Ant Design'i.

-----------------------------

Frontendi Developer Serveri käivitamiseks:

1. 'npm install' frontend kaustas
2. 'npm run dev' käivitab Webpack Developer Serveri


Backendi projekti käivitamine:

1. GlassFish 5 serveir hankimine: http://download.oracle.com/glassfish/5.0/release/glassfish-5.0.zip
2. Olenevalt IDEst tuleb lisada GlassFish server serverite hulka.
Eclipse: 
Window -> Show view -> Servers
All Servers aknas New -> Server -> Add
(https://i.imgur.com/7vkGySP.png)