import {src, dest} from "gulp"

import * as dartSass from "sass" // importo todo el paquete de sass
import gulpSass from "gulp-sass" // extraigo la dependencia a gulpsass

// export function hola(done) { // EL EXPORT ME PERMITE EJECUTAR LA FUNCNION DESDE EL PACKAGE.JSON para poder ejecutarla desde ahi 
//     console.log("hola pa")
//     done() // !!!! OBLIGATORIO PARA INDICARLE A GULP QUE LA TAREA TERMINÓ 
// }

const sass = gulpSass(dartSass)

export function css(done) {

    src("src/scss/app.scss")
        .pipe(sass().on("error", sass.logError)) // para que lo ejecute cuando lo encuentre, uso pipe(), aplico la funcion sass
        .pipe(dest("build/css")) // es lo mismo que lo que hago en el package.json, eligo el origen y destino en dnde se ejecuta la tarea
    
    done() 
}

export function dev() {
    watch("src/scss/**/*.scss", css)
}



