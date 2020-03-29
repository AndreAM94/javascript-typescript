# Webpack-setup

## Contenuto

Esempi di configurazione di webpack, tool principalmente usato per il bundling di files.

## Startup

Nella maggior parte dei casi per utilizzare questi progetti sarà necessario lanciare il comando **npm run build** e controllare l'output nel folder **./dist**.

## Infos

<details>
    <summary>Cos'è webpack</summary>
        <p>
            Webpack si occupa di creare un "bundle" dei moduli javascript. Semplificando crea un unico file .js a partire da molteplici altri files. E' possibile tramite i loaders fornire ulteriori funzionalità come il bundling dei files scss e simili o la possibilità di utilizzare un transpiler. Tramite plugin è possibile aggiungere ulteriori funzionalità ai loaders.
        </p>
</details>

<details>
    <summary>Setup minimo</summary>
        <p>
            Il setup di webpack è eseguito tramite il file **webpack.config.js** che minimo richiede come dipendenze webpack e webpack-cli (la cli è lo strumento che permette di eseguire i comandi di webpack tramite la command line).
        </p>
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
