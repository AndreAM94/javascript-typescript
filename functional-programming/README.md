# Functional Programming

## Contenuto

Concetti/snippets relativi al paradigma di programmazione funzionale

## Startup

Installare la cli con il comando **npm i -g gulp-cli**, riavviare il terminale

* Aprire il terminale terminale
* cd nel progetto con gulpfile.js
* gulp --run=**nomeprogetto**

### Infos

<details>
    <summary>Currying</summary>
        <p>
            Decomporre una funzione di arietà [1] <i>n</i> in un sequenza di <i>n</i> funzioni
        </p>
        <p>
            Data una funzione invocabile nel seguente modo: <strong>f(a, b, c)</strong>. Tramite questa tecnica è possibile trasformarla in una serie di funzioni invocabili nella forma <strong>f(a)(b)(c)</strong>
        </p>
        <p>Permette di eseguire applicazioni parziali di funzioni molto facilmente</p>
        <p>
            Trova applicazione anche in altri linguaggi di programmazione, non è limitata al solo Javascript
        </p>
        <p>
        <p><strong><a href="https://lodash.com/docs/4.17.15#curry">Lodash</a></strong> ne possiede un'implementazione</p>
        <hr>
        <p>[1] Numero di argomenti in input alla funzione</p>
</details>

<details>
    <summary>Pure/impure functions</summary>
        <p>
            Una funzione si dice <strong>pura</strong> quando:
            <ul>
                <li>Dato lo stesso input, produce sempre lo stesso output. Ovvero ha un output predicibile</li>
                <li>La sua invocazione non produce effetti secondari</li>
            </ul>
        </p>
        <p>
            In maniera complementare una funzione si dice <strong>impura</strong> quando:
            <ul>
                <li>Dato lo stesso input, può produrre output differenti. Ovvera ha un output che può essere definito non deterministico</li>
                <li>La sua invocazione produce effetti secondari, come la modifica dello stato di oggetti che si trovano al di fuori del suo scope</li>
            </ul>
        </p>
        <p>
            Le funzioni pure sono il fondamento del paradigma di programmazione funzionale.
        </p>
        <p>
            Le funzioni pure sono per definizione, più usabili (perchè agnostiche rispetto al contesto), più testabili e facilmente rifattorizzabili
        </p>
        <p>
</details>

<details>
    <summary>High order functions</summary>
        <p>
            Una funzione <strong>di ordine superiore</strong> è una funzione che prendi in input o restiuisce in output una funzione
        </p>
        <p>
            La funzione passata in input è chiamata anche <strong>callback</strong>
        </p>
        <p>
            Esempi di funzioni di ordine superiore built-in (ovvero messe a disposizione direttamente dallla specifica javascript, senza ulteriori dipendenze) sono le funzioni legate agli array come: map, filter, reduce, sort, foreach...
        </p>
        <p>
            Permettono di scrivere codice più elegante e di spezzettarne meglio la logica, prestandosi bene alla <strong>composition</strong>
        </p>
        <p>
</details>

<details>
    <summary>Immutability</summary>
        <p>
            Un valore è immutabile se una volta creato non può essere modificato 
        </p>
        <p>
            I valori primitivi come anche le stringhe sono tutti esempi di valori immutabili, questo non vale per gli oggetti
        </p>
        <p>La parola chiave const applicata ad un oggetto non indica che esso sia immutabile, semplicemente che l'identificativo (nome della variabile) non può essere riassegnato
        <p>
            Il metodo Object.freeze permette di rendere immutabile un oggetto, ma solo in maniera superficiale
        </p>
        <p>
            Il concetto di structural sharing utilizzato nel contesto dell'immutabilità permette di ottenere miglioramenti nelle performance; <a href="https://immutable-js.github.io/immutable-js/">Immutable.js</a> è una libreria creata specificatamente per questo scopo
        </p>
</details>