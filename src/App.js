import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Footer from'./Components/Footer/Footer';
import axios from 'axios'
import Card from './Components/Card/Card'
import './App.css';
import Loader from './Components/Loader/Loader'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieList:[],
      showLoader: true,
     }
  }
  componentDidMount(){
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => this.setState({movieList: res.data.Search, showLoader: false}))
  }
  render() {
    let {movieList, showLoader} = this.state; 
    return ( <div>
      <Header/>
      <div className="main">
      {showLoader && <Loader/>}
      {movieList.map((item, index) => 
          <Card title={item.Title} key={index} imgUrl={item.Poster}/>
        )
      }
      </div>
      <Footer/>
    </div> );
  }
}
 
export default App;