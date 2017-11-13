import React, { Component } from 'react';

//footer
import FooterApp from './FooterApp'

//bd
import base from './Base'

//paginas
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import Anuncio from './Anuncio'

//rotas
import {BrowserRouter as Router, Route} from 'react-router-dom'



class App extends Component {
  constructor (props){
    super (props)

    this.state={
      categorias: []
    }
    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    })
  }
  render() {
    
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={()=> <Home categorias={this.state.categorias}/>} />
          <Route path="/novo-anuncio" exact render={()=><NovoAnuncio categorias={this.state.categorias}/>} />
          <Route path="/anuncio/:nome" component={Anuncio}/>
          <FooterApp />

        </div>
      </Router>
    );
  }
}

export default App
