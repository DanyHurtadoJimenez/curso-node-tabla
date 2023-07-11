const fs = require('fs');

// const crearArchivoTabla = (base = 5) =>{ //ejemplo promesa 1

//     return new Promise((resolve,reject)=>{  
//         console.log('=================')
//         console.log(`  Tabla del ${base}`)
//         console.log('=================')

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `  ${base} X ${i} = ${base*i}\n`;
//         }

//         fs.writeFileSync(`tabla-${base}.txt`,salida);
//         console.log(salida);
//         resolve(` tabla-${base}.txt`);
//     })
// }

const crearArchivoTabla = async(base = 5,l,h) =>{ //ejemplo promesa 2 solamente agregar un async y ponerlo entre try catch para poder manejar errores

    try {
        let salida = '';
    
        for (let i = 1; i <= h; i++) {
            salida += `  ${base} X ${i} = ${base*i}\n`;
        }
        
        if(l===true){
            console.log('=================')
            console.log(`  Tabla del ${base} hasta el ${h}`)
            console.log('=================')
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return ` tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = { //asi se exportan archivos en node como objeto
    crearArchivoTabla
}