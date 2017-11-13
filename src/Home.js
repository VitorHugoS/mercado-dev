import React, {Component} from 'react'

//layout página
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './Categoria'

//banco de dados
import base from './Base'

class Home extends Component{
    constructor (props){
        super(props)
    
        this.state={
          anuncios: []
        }
    
    
        base.bindToState('anuncios', {
          context: this,
          state: 'anuncios',
          queries:{
            limitToLast:3
          }
        })
      }

    render (){
        let index = 0
        return (
            <div>
                <HeaderHome />
                <div className="container">
                <h3>Últimos Anúncios</h3>
                <div className="row">
                    { Object.keys(this.state.anuncios).map( (key) => {
                        const anuncio = this.state.anuncios[key]
                        return [ <AnuncioHome anuncio={anuncio} key={key}/>, ++index%4 === 0 && <div key={'c'+key} className="w-100"/> ]
                    }) }
                </div>
            
                <h3>Categorias</h3>
                <div className="row">
                {/* mapeia a tabela categorias e faz o laço
                comos os dados já estão em json n é necessário tratar
                */}
                { this.props.categorias.map( (cat, indice) => {
                return [
                    <LinkCategoria categoria={cat} key={indice}/>, ++index%4 === 0 && <div key={'c'+indice} className="w-100"/>
                ]
                }) }
                </div>
            </div>
          </div>
        )
    }
    
}

export default Home