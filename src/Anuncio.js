import React, {Component} from 'react'
import HeaderInterno from './HeaderInterno'
import {baseF} from './Base'


class Anuncio extends Component{
    constructor(props){
        super(props)
        this.parametro = props.match.params.nome
        this.state={
            nome: [],
            descricao: [],
            foto: [],
            categoria: [],
            preco: [],
            vendedor: [],
            telefone: []
        }
        
        var busca = baseF.ref('anuncios').orderByChild("slug").equalTo(this.parametro).limitToFirst(1);
        busca.on('value', dados, errData);
        
        function dados(data){
            var dados = data.val();
            var keys = Object.keys(dados)
            dados = dados[keys]
            const anuncioVer = {
                nome: dados.nome,
                descricao: dados.descricao,
                foto: dados.foto,
                categoria: dados.categoria,
                preco: dados.preco,
                vendedor: dados.vendedor,
                telefone: dados.telefone
            }
            return anuncioVer
            
        }

        function errData(err){
            console.log('Error')
            console.log(err)
        }


        console.log(this.state.anuncio)
        
    }
    
    render(){
        
        return (
            
            <div>
                <HeaderInterno />
                <h1>{this.anuncioVer}</h1>
            </div>
        )
    }
}


export default Anuncio