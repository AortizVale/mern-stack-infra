import React, { Component} from 'react';
class App extends Component {


    constructor() {
        super();
        this.state ={
            cod_historia:'',
            cod_paciente: '',
            cod_medico: '',
            rif:'',
            motivos:'',
            antecedentes:'',
            lenz_iz:'',
            lenz_der:'',
            cover_iz:'',
            cover_der:'',
            subj_iz:'',
            subj_der:'',
            hirschberg:'',
            diagnostico:'',
            tratamiento:'',
            versiones:'',
            ppc:'',
            evolucion:'',
            historias:[],
            _id:''

        };
        this.handleChange =this.handleChange.bind(this);
        this.addHistoria =this.addHistoria.bind(this);
        
    }

    addHistoria(e){
        //console.log("adding Historia");
        console.log(this.state);
        if(this.state._id){
            fetch(`/api/historia/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html:"Historia Updated"});
                console.log(data);
                this.setState({cod_historia:'', cod_paciente: '', cod_medico: '', rif: '', motivos: '', antecedentes: '', lenz_iz: '', lenz_der: '', cover_iz: '', cover_der: '', subj_iz: '', subj_der: '', hirschberg: '', diagnostico: '', tratamiento: '', versiones: '', ppc: '', evolucion: ''});
            } );
            this.fetchHistorias();
            document.querySelector('#boton').textContent='Send';
        }else{
            fetch('/api/historia', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
    
            })
                .then (res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html: 'Historia Saved'});
                    this.setState({cod_historia:'',cod_paciente: '', cod_medico: '', rif: '', motivos: '', antecedentes: '', lenz_iz: '', lenz_der: '', cover_iz: '', cover_der: '', subj_iz: '', subj_der: '', hirschberg: '', diagnostico: '', tratamiento: '', versiones: '', ppc: '', evolucion: ''});
                    this.fetchHistorias();
                    
                })
                .catch(err => console.log(err));
        };
        
            e.preventDefault();
        
    }

    componentDidMount(){
        console.log('el componente fue montado');
        this.fetchHistorias();
    }
    fetchHistorias(){
        fetch('api/historia')
        .then(res => res.json())
        .then(data =>{
            this.setState({historias:data});
            console.log(this.state.historias)});
      
    }

    editHistoria(id){
        console.log("Editando")
        fetch(`/api/historia/${id}` )
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                this.setState({
                    cod_historia: data.cod_historia,
                    cod_paciente:data.cod_paciente,
                    cod_medico:data.cod_medico,
                    rif:data.rif,
                    motivos:data.motivos,
                    antecedentes:data.antecedentes,
                    lenz_iz:data.lenz_iz,
                    lenz_der:data.lenz_der,
                    cover_iz:data.cover_iz,
                    cover_der:data.cover_der,
                    subj_iz:data.subj_iz,
                    subj_der:data.subj_der,
                    hirschberg:data.hirschberg,
                    diagnostico:data.diagnostico,
                    tratamiento:data.tratamiento,
                    versiones:data.versiones,
                    ppc:data.ppc,
                    evolucion:data.evolucion,
                    _id:data._id
                })
            });
            document.querySelector('#boton').textContent='Update';
    }
   
    deleteHistoria(id){
        console.log("eliminando", id);
        fetch(`/api/historia/${id}`, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            M.toast({html: 'Historia Deleted'});
            console.log(data);
            this.fetchHistorias();
        })
    }

    handleChange(e){
        //console.log('escribiendo');
        //console.log(e.target.name);
        const {name,value}=e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (

            <div>{/* Navigation*/ }
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Grand Registro Pre-Alfa 1</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row ">

                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addHistoria}>
                                        <div className="row">
                                        <a>Codigo de historia</a>
                                            <div className="input-field col s12">
                                                <input name="cod_historia" onChange={this.handleChange} type="text" placeholder="Codigo de historia" value={this.state.cod_historia}></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Codigo de paciente</a>
                                            <div className="input-field col s12">
                                                <textarea name="cod_paciente" onChange={this.handleChange} placeholder="Codigo de paciente" className="materialize-textarea" value={this.state.cod_paciente}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Codigo de medico</a>
                                            <div className="input-field col s12">
                                                <textarea name="cod_medico" onChange={this.handleChange} placeholder="Codigo de medico" className="materialize-textarea" value={this.state.cod_medico}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>R.I.F</a>
                                            <div className="input-field col s12">
                                                <textarea name="rif" onChange={this.handleChange} placeholder="R.I.F." className="materialize-textarea" value={this.state.rif}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Motivos</a>
                                            <div className="input-field col s12">
                                                <textarea name="motivos" onChange={this.handleChange} placeholder="Motivos" className="materialize-textarea" value={this.state.motivos}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Antecedentes</a>
                                            <div className="input-field col s12">
                                                <textarea name="antecedentes" onChange={this.handleChange} placeholder="Antecedentes" className="materialize-textarea" value={this.state.antecedentes}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Lensometria ojo izquierdo</a>
                                            <div className="input-field col s12">
                                                <textarea name="lenz_iz" onChange={this.handleChange} placeholder="Lensometria O.I." className="materialize-textarea" value={this.state.lenz_iz}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Lensometria ojo derecho</a>
                                            <div className="input-field col s12">
                                                <textarea name="lenz_der" onChange={this.handleChange} placeholder="Lensometria O.D." className="materialize-textarea" value={this.state.lenz_der}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Cover test izquierdo</a>
                                            <div className="input-field col s12">
                                                <textarea name="cover_iz" onChange={this.handleChange} placeholder="Cover test O.I." className="materialize-textarea" value={this.state.cover_iz}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Cover test derecho</a>
                                            <div className="input-field col s12">
                                                <textarea name="cover_der" onChange={this.handleChange} placeholder="Cover test O.D." className="materialize-textarea" value={this.state.cover_der}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Hirschberg</a>
                                            <div className="input-field col s12">
                                                <textarea name="hirschberg" onChange={this.handleChange} placeholder="hirschberg" className="materialize-textarea" value={this.state.hirschberg}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Versiones</a>
                                            <div className="input-field col s12">
                                                <textarea name="versiones" onChange={this.handleChange} placeholder="Versiones" className="materialize-textarea" value={this.state.versiones}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>PPC</a>
                                            <div className="input-field col s12">
                                                <textarea name="ppc" onChange={this.handleChange} placeholder="PPC" className="materialize-textarea" value={this.state.ppc}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Diagnostico</a>
                                            <div className="input-field col s12">
                                                <textarea name="diagnostico" onChange={this.handleChange} placeholder="Diagnostico" className="materialize-textarea" value={this.state.diagnostico}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Subjetivo ojo izquierdo</a>
                                            <div className="input-field col s12">
                                                <textarea name="subj_iz" onChange={this.handleChange} placeholder="Subjetivo O.I." className="materialize-textarea" value={this.state.subj_iz}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Subjetivo ojo derecho</a>
                                            <div className="input-field col s12">
                                                <textarea name="subj_der" onChange={this.handleChange} placeholder="Subjetivo O.D." className="materialize-textarea" value={this.state.subj_der}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Tratamiento</a>
                                            <div className="input-field col s12">
                                                <textarea name="tratamiento" onChange={this.handleChange} placeholder="Tratamiento" className="materialize-textarea" value={this.state.tratamiento}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <a>Evolucion</a>
                                            <div className="input-field col s12">
                                                <textarea name="evolucion" onChange={this.handleChange} placeholder="Evolucion" className="materialize-textarea" value={this.state.evolucion}></textarea>
                                            </div>
                                        </div>
                                        <button id='boton' type="submit" className="btn light-blue darken-4">Send</button>
                                    </form>

                                </div>
                    

                            </div>

                        
                        </div>

                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>cod_historia</th>
                                        <th>cod_paciente</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.historias.map(historia => {
                                            return(
                                                <tr key={historia._id}>
                                                    <td>{historia.cod_historia}</td>
                                                    <td>{historia.cod_paciente}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={()=> this.deleteHistoria(historia._id)}> <i className="material-icons">delete</i>  Delete</button>
                                                        <button onClick={() => this.editHistoria(historia._id)} className="btn light-blue darken-4" style={{margin: '4px'}}> <i className="material-icons">edit</i>  Edit</button>
                                                        
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }
                                </tbody>
                            </table>


                        </div>

                     </div>



                    </div>

                    


            </div>

        )
    }
}

export default App;