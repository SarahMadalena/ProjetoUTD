import { Component } from "react";
import api from '../../service/api';
export default class AddClientes extends Component{

    state = {
      novoCliente:{
        nome:'',
        idade:'',
        email:'',
      },
      cad_nome:'',
      cad_idade:'',
      cad_email:'',
    };


    handleNomeChange = e =>{
      this.setState({cad_nome: e.target.value});
    };

    handleIdadeChange = e =>{
      this.setState({cad_idade: e.target.value});
    };

    handleEmailChange = e =>{
      this.setState({cad_email: e.target.value});
    };

    handleOnSubmit = async e =>{
      const {cad_nome,cad_idade,cad_email} = this.state;  
        e.preventDefault();

        const Cliente = {'nome':cad_nome,'idade':cad_idade,'email':cad_email}

        await api.post(`/cliente`,Cliente)
        .then(console.log(Cliente))

        alert('usuário adicionado com sucesso.');

    }

    render(){

        const {cad_nome,cad_idade,cad_email} = this.state;

        return(

            <div className="container" >
            
            <div className="content">      
            
              <div id="cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Cadastro</h1> 
                  
                  <p> 
                    <label >Seu nome</label>
                    <input required="required"
                         type="text" 
                         placeholder="Digite seu nome"
                         value={cad_nome}
                         onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label>Sua idade</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite sua idade"
                         value={cad_idade}
                         onChange={this.handleIdadeChange}/> 
                  </p>
                  
                  <p> 
                    <label>Seu email</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite seu email"
                         value={cad_email}
                            onChange={this.handleEmailChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="Cadastrar"/> 
                  </p>
                </form>
              </div>
            </div>
          </div>

        )
    }
}