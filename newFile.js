//Exemplo de escrita de arquivos utilizando nodejs com o módulo fs(file system)

const fs = require('fs');

const main = async () => {
    await fs.writeFileSync("exemplo.txt","Javascript é uma delicia.")
}

main();