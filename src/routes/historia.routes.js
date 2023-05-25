const express = require('express');
const router = express.Router();


const Historia =  require('../models/historia');

router.get('/', async (req, res) => {

    const historias = await Historia.find();
    res.json(historias);
    
});

router.get('/:id', async (req, res) => {
    const historia = await Historia.findById({_id:req.params.id},);
    
    res.json(historia);
    
});

router.post('/', async (req,res) => {
    
    const { cod_historia , cod_paciente, cod_medico, rif, motivos, antecedentes, lenz_iz, lenz_der, cover_iz, cover_der, subj_iz, subj_der, hirschberg, diagnostico, tratamiento, versiones, ppc, evolucion } = req.body;
    const historia = new Historia({cod_historia, cod_paciente, cod_medico, rif, motivos, antecedentes, lenz_iz, lenz_der, cover_iz, cover_der, subj_iz, subj_der, hirschberg, diagnostico, tratamiento, versiones, ppc, evolucion});
    await historia.save();
    res.json({status: 'Historia Saved'});
        
});

router.put('/:id', async (req,res) => {
    const { cod_historia , cod_paciente, cod_medico, rif, motivos, antecedentes, lenz_iz, lenz_der, cover_iz, cover_der, subj_iz, subj_der, hirschberg, diagnostico, tratamiento, versiones, ppc, evolucion } = req.body;  
    
    const newHistoria = {cod_historia, cod_paciente, cod_medico, rif, motivos, antecedentes, lenz_iz, lenz_der, cover_iz, cover_der, subj_iz, subj_der, hirschberg, diagnostico, tratamiento, versiones, ppc, evolucion};
    await Historia.findOneAndUpdate({_id:req.params.id}, newHistoria);
    
    console.log(`${req.params.id} ${newHistoria.cod_historia}`);
    res.json({status: 'Historia Updated'});
    
});

router.delete('/:id', async (req,res) => {
    await Historia.findOneAndRemove({_id:req.params.id});
    res.json({status: "Historia Deleted" });

});

module.exports = router;