import mongoose from "mongoose";

// Creación tabla
const AulaSchema = mongoose.Schema({
    // Columnas
    tema: {
        type: String
    },
    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profesor'
    },
    materia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    },
    fecha: {
        type: Date
    },
    hora: {
        type: String
    }

}, {
    timestamps: true
})

const Aula = mongoose.model('Aula', AulaSchema); // Primer argumento, nombre que se asigna a la collection de la base de datos

export default Aula;