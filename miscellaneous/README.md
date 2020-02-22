# Miscellaneous

## Contenuto

Concetti/snippets generici

## Startup

### Soluzione 1

* Aprire il terminale
* cd nel progetto di interesse
* node index.js

### Soluzione 2

* Aprire il terminale
* cd in ./miscellaneous
* Lanciare start.bat **nomeprogetto**

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