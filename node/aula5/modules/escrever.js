const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'}) //esse w reescreve o arquivo. se for pra apensar usa a
}