import { Component } from "react";
import api from '../../service/api';
export default class EditClientes extends Component{
    
    state = {

      id:this.props.match.params.id,
      cad_nome:'',
      cad_email:'',
      cad_idade:'',
    };

    componentDidMount = async e =>{
   
      const response = await api.get(`/cliente/${this.state.id}`)
      
      this.setState({
        cad_nome:response.data.nome,
        cad_idade:response.data.idade,
        cad_email:response.data.email,
      });
    
      console.log(response);

    }

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
      const {id,cad_nome,cad_idade ,cad_email} = this.state; 

       e.preventDefault();
  
       const Cliente = {'id': Number(id),'nome':cad_nome,'idade':cad_idade,'email':cad_email}
  
        await api.put(`/cliente`,Cliente)
        .then(console.log(Cliente));

        alert('Usuário atualizado com sucesso!')
    }

    render(){

      const {id,cad_nome,cad_idade,cad_email} = this.state;

        return(

            <div className="container" >
                
            <div className="content">      
            
              <div id="Alterar Cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Alterar Cadastro</h1> 
                  
                  <p> 
                    <label Htmlfor="nome_cad">Id</label>
                    <input id="nome_cad" 
                    name="nome_cad" 
                    type="number"
                    readOnly
                    value={id}
                    />
                  </p>  
        
                  <p> 
                    <label Htmlfor="nome_cad">Seu nome</label>
                    <input id="nome_cad" 
                      name="nome_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu nome" 
                      value={cad_nome}
                      onChange={this.handleNomeChange}
                      />
                  </p>
            
                  <p> 
                    <label Htmlfor="idade_cad">Sua idade</label>
                    <input id="idade_cad" 
                      name="idade_cad"
                       required="required"
                        type="text"
                         placeholder="Digite sua idade"
                         value={cad_idade}
                         onChange={this.handleIdadeChange}
                         />
                  </p>

                   <p> 
                    <label Htmlfor="email_cad">Seu email</label>
                    <input id="email_cad" 
                      name="email_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu email"
                      value={cad_email}
                      onChange={this.handleEmailChange}
                      /> 
                  </p>

                  <p> 
                    <input type="submit" /> 
                  </p>
                </form>
              </div>
            </div>
          </div>
        )
    }     
}