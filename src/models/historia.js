const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const HistoriaSchema = new Schema({
    cod_historia: {type: String, require:true},
    cod_paciente:{ type: String, require: true},
    cod_medico:{ type: String, require: true},
    rif:{ type: String, require: true},
    motivos:{ type: String, require: true},
    antecedentes:{ type: String, require: true},
    lens_iz:{ type: String, require: true},
    lenz_der:{ type: String, require: true},
    cover_iz:{ type: String, require: true},
    cover_der:{ type: String, require: true},
    subj_iz:{ type: String, require: true},
    subj_der:{ type: String, require: true},
    hirschberg:{ type: String, require: true},
    diagnostico:{ type: String, require: true},
    tratamiento:{ type: String, require: true},
    versiones:{ type: String, require: true},
    ppc:{ type: String, require: true},
    evolucion:{ type: String, require: true},
});

module.exports = mongoose.model('historia', HistoriaSchema)