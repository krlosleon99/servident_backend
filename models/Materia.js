import mongoose from "mongoose";

// Creación tabla
const materiaSchema = mongoose.Schema({
    // Columnas
    nombre: {
        type: String,
        trim: true
    }

})

const Materia = mongoose.model('Materia', materiaSchema); // Primer argumento, nombre que se asigna a la collection de la base de datos

export default Materia;