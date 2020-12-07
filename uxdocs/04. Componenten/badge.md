# Design system pages

*Status: **In ontwikkeling***

# Introductie

Een badge trekt de aandacht en wijst een gebruiker op wijzigingen, systeem staten of nieuwe inhoud. Tevens kan het als (categorie) label dienen. De informatie in een badge is kort en duidelijk scanbaar.

Een badge kan op zichzelf staan maar tevens contextueel toegevoegd worden aan een ander element.

### Soorten en varianten

### Counter badge

Een counter badge geeft een getal weer. Optioneel kunnen getallen voorzien worden van een minus of plus teken.

Een lang getal kan ingekort worden en voorzien van een plus teken achter het laatste cijfer, bv. 999+. Zorg er voor dat de daadwerkelijke informatie beschikbaar is voor alle gebruikers, dus ook voor gebruikers van screenreaders.

### Dot indicator

Een dot indicator is een badge zonder tekstuele inhoud. De context voor een dot indicator wordt bepaald door het parent element waar deze bij behoort.

### Tekst badge

Een tekst badge kan gebruikt worden om een categorie of status aan te geven.

### Status light

Een status light geeft een status weer. Deze badge dient voorzien te zijn van een duidelijk tekstlabel dat de status beschrijft.

### Alternatieven en gerelateerde componenten

# Anatomie

- Container met padding
- Standaard rechter en ondermarge
- Tekst (behalve voor Dot badge)
- Tekst label (status light)
- Optioneel icoon

### Design tokens

- badge-corner-radius // Border radius
- badge-padding-inline // Left and right padding
- badge-padding-block // Top and bottom padding
- badge-background-color // Background color
- badge-foreground-color // Badge text foreground color
- badge-font-family // Badge text font-family
- badge-font-size // Badge text font size
- badge-font-weight // Badge text font weight

### Counter badge

### Dot indicator

### Tekst badge

- badge-text-transform // Sentence case or uppercase

### Status light success

- feedback-fill-safe-background-color // Success notification background color
- feedback-fill-safe-color // Success notification foreground (icon) color

### Status light warning

- feedback-fill-warning-background-color // Warning notification background color
- feedback-fill-warning-color // Warning notification foreground (icon) color

### Status light error

- feedback-fill-danger-background-color // Error notification background color
- feedback-fill-danger-color // Error notification foreground (icon) color

# Interactieve staten

Wanneer een badge interactief is–de badge wordt bijvoorbeeld gebruikt voor categorie navigatie–dan dienen alle interactieve staten ontworpen te zijn.

### Focus

### Hover

### Active

[Zie Ontwerp patronen → Interactieve staten](https://zeroheight.com/52045b9ea/p/207839-interactieve-staten)

# Ontwerp-eigenschappen

### Positionering

Wanneer meerdere badges naast of boven elkaar geplaatst worden, zorg dan voor voldoende tussenruimte (marge).

### Typografie

Als een badge een status weergeeft dan kan de gehele tekst in kapitalen gezet worden (all-caps).

### Overerving van tekstgrootte

Een badge kan de tekstgrootte van zijn parent element overnemen, denk hierbij bijvoorbeeld aan het toevoegen van een tekst badge aan een koptekst.

# Voorbeelden

# Toegankelijkheid

Zorg voor voldoende contrast tussen de voor- en achtergrond.

Maak niet alleen gebruik van kleur om een status weer te geven, zorg dat mensen met een kleurenblindheid het verschil kunnen zien door tevens gebruik te maken van textuur. Gebruik bijvoorbeeld een gevulde badge en een badge met omlijning om verschillen aan te tonen.

In het geval dat een badge een update weergeeft, zorg dan dat een screen-reader gebruiker ook over deze informatie beschikt.

# Content richtlijnen

Probeer tekst in een badge tot een enkel woord te beperken. In uiterste gevallen kunnen maximaal drie woorden gebruikt worden.

# Best practices

### Dos

Beperkt het aantal badges dat tegelijkertijd getoont worden om mentale overbelasting voor een gebruiker te voorkomen .

Plaats meerdere badges die een relatie hebben in een <ul> element.

### Don'ts

Om verwarring met knoppen te vermijden is het raadzaam om kleuren te vermijden die ook voor knoppen gebruikt worden.

Vermijd het gebruik van een badge in lopende tekst.

# Referenties

# Richtlijnen checklist

### Layout

Het component schaalt mee in een responsive layout.

### Interactieve staten

Wanneer het een interactief component betreft dienen alle relevante interactieve staten aanwezig te zijn (focus, hover, active, disabled).

### Feedback staten

Wanneer het component dient om feedback te tonen dienen alle relevante feedback staten aanwezig te zijn (informatie, succes, waarschuwing, foutmelding).

### Content

Tekst dient voor alle gebruikers begrijpelijk en makkelijk leesbaar te zijn. Inhoud dient toegankelijk en begrijpelijk te zijn voor screen-readers.

### Varianten

Als het component meerdere varianten heeft (variaties in bijvoorbeeld grootte, visuele stijl) dienen deze aanwezig te zijn. Wanneer meerdere kleurenthema’s zoals een dark mode aangeboden worden dient dit component daarin te voorzien.

### Gebruiksrichtlijnen

De documentatie voor het component is duidelijk genoeg om ermee te kunnen ontwerpen en het te implementeren. Voorzie waar mogelijk het component van ‘dos and don'ts’.

### Toegankelijkheid

Het component dient toegankelijk te zijn voor alle gebruikers, het contrast niveau dient waar nodig te voldoen aan WCAG2.1 [succescriteria 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) en [1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast).

Relevante inhoud dient door screen-readers geïnterpreteerd te kunnen worden.

Alle interactie dient [mogelijk te zijn middels een toetsenbord](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible).

### Implementatie

Het component dient voorzien te zijn van de juiste semantische markup.

# Geschiedenis

### 0.2 (30-11-2020)

- Toevoeging van design tokens

### 0.1 (12-11-2020)

- Eerste versie van documentatie