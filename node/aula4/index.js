const fs = require('fs').promises
const path = require('path')


fs.readdir('./') //dessa forma ele le todas as pastas no mesmo nivel da pasta atual
    .then(files => console.log(files))
    .catch(e => console.log(e))

fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))

async function lerDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stat = await fs.stat(fileFullPath)
        
        //para iginorar as pastas com nome .git
        if(/\.git/g.test(fileFullPath)) continue
        //para iginorar as pastas com nome node_module
        if(/node_modules/g.test(fileFullPath)) continue

        if(stat.isDirectory()){
            lerDir(fileFullPath)
            continue
        }
        //busca somente arquivos .css ignorando se for diferente
        // if(!/\.css$/g.test(fileFullPath)) continue

        //busca somente arquivos .css e html ignorando se for diferente
        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue

        console.log(fileFullPath)
    }
}

lerDir('/home/julia/VsProjects/JS-e-TypeScript')
