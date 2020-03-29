// Modulo di node per lavorare con file/directory
const path = require('path');

module.exports = {

    // Entry point di webpack
    entry: './index.js',

    // Specifichiamo dove mettere e come chiamare il file che raccoglie tutti i files js.
    // In questo caso si chiamera' bundle.js nel folder dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // La modalita' di default è production, questo ottimizza ulteriormente l'output
    // Usiamo invece development
    // Notare la differenza del file bundle.js nei due casi
    mode: 'development'
    //mode: 'production'
};