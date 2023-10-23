import mongoose from "mongoose";

const profesorSchema = mongoose.Schema({
    // Estructura del mod. veterinario
    nombre: {
        type: String,
        trim: true
    }
});

const Profesor = mongoose.model('Profesor', profesorSchema); // Primer argumento, nombre que se asigna a la collection de la base de datos

export default Profesor;