import mongoose from "mongoose";

// Conectándose a la DB
const conectarDB = async () => {
    try {
        // Conectándose al servidor de mongo db atlas
        const db = await mongoose.connect(process.env.MONGO_URI, {
            // Objecto de configuración
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en ${url}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;