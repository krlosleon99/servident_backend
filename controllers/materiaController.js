import Materia from "../models/Materia.js";

const agregarMateria = async (req, res) => {
    
    // Crear nueva instancia de Materia
    const materia = new Materia(req.body);

    console.log(req.body)
    // Almacenar la nueva materia en la base de datos con try catch
    try {
        const materiaGuardado = await materia.save(materia);
        res.json(materiaGuardado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerMaterias = async (req, res) => {
    const materias = await Materia.find();
	
	res.json(materias);
};

const obtenerMateria = async (req,res) => {
    const { id } = req.params;

    const materia = await Materia.findById(id);

    if(!materia) {
        return res.status(400).json({msg: "No existe materia"});
    }

    console.log(materia);
}

const actualizarMateria = async (req,res) => {
    const { id } = req.params;

    const materia = await Materia.findById(id);

    if(!materia) {
        return res.status(400).json({msg: "No existe materia"});
    }

    materia.nombre = req.body.nombre || materia.nombre;

    try {
        const materiaActualizada = await materia.save();
        res.json(materiaActualizada);
    } catch (error) {
        console.log(error);
    }
}

const eliminarMateria = async (req,res) => {
    const { id } = req.params;

    const materia = await Materia.findById(id);

    if(!materia) {
        return res.status(400).json({msg: "No existe materia"});
    }

    try {
        await materia.deleteOne();
        res.json({msg: "Materia eliminada"});

    } catch (error) {
        console.log(error);
    }
}

export { agregarMateria, obtenerMaterias, obtenerMateria, actualizarMateria, eliminarMateria };