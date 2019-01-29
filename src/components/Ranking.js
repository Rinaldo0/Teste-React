import React, { Component } from 'react';
import '../App.css';
import Porcentagem from '../components/Porcentagem';
import * as fazenda from '../data/fazenda.json';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      showComponent2: false,
      showComponent3: false,
      showComponent4: false,
      showComponent5: false
    };
  }

  render() {

    this.rita = fazenda.data[0];
    this.gominho = fazenda.data[1];
    this.yudi = fazenda.data[2];
    this.andressa = fazenda.data[3];
    this.barbara = fazenda.data[4];

    return (

      <div className="container  bg-color">

        <div className="row">

          <div className="col-12 d-flex flex-column">

            {/* Card de informações Rita Cadillac */}

            <div className="col bg-cor" onClick={() => {
              this.setState({ showComponent: !this.state.showComponent })
            }}>
              {this.state.showComponent &&
                <Porcentagem pontuação={`${this.rita.positive}% ${this.rita.negative}%`} />
              }
              <img src={this.rita.picture} className="picture" />
              <p className="name">{this.rita.name}</p>

              <p className="descricao">{this.rita.description}</p>
            </div>

            {/* Card de informações Gominho */}

            <div className="col bg-cor" onClick={() => {
              this.setState({ showComponent2: !this.state.showComponent2 })
            }}>
              {this.state.showComponent2 &&
                <Porcentagem pontuação={`${this.gominho.positive}% ${this.gominho.negative}%`} />
              }
              <img src={this.gominho.picture} className="picture" />
              <p className="name">{this.gominho.name}</p>
              <p className="descricao">{this.gominho.description}</p>

            </div>

            {/* Card de informações Yudi Tamashiro*/}

            <div className="col bg-cor" onClick={() => {
              this.setState({ showComponent3: !this.state.showComponent3 })
            }}>
              {this.state.showComponent3 &&
                <Porcentagem pontuação={`${this.yudi.positive}% ${this.yudi.negative}%`} />
              }
              <img src={this.yudi.picture} className="picture" />
              <p className="name">{this.yudi.name}</p>
              <p className="descricao">{this.yudi.description}</p>

            </div>

            {/* Card de informações Andressa Urach */}

            <div className="col bg-cor" onClick={() => {
              this.setState({ showComponent4: !this.state.showComponent4 })
            }}>
              {this.state.showComponent4 &&
                <Porcentagem pontuação={`${this.andressa.positive}% ${this.andressa.age}%`} />
              }
              <img src={this.andressa.picture} className="picture" />
              <p className="name">{this.andressa.name}</p>
              <p className="descricao">{this.andressa.description}</p>

            </div>

            {/* Card de informações Bárbara Evans */}
            <div className="col bg-cor" onClick={() => {
              this.setState({ showComponent5: !this.state.showComponent5 })
            }}>
              {this.state.showComponent5 &&
                <Porcentagem pontuação={`${this.barbara.positive}% ${this.barbara.negative}%`} />
              }
              <img src={this.barbara.picture} className="picture" />
              <p className="name">{this.barbara.name}</p>
              <p className="descricao">{this.barbara.description}</p>
            </div>

          </div>
        </div>
      </div>

    );

  }
}



export default Ranking;