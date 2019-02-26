import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Images from './components/images/images';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const unsplash = new Unsplash({
  applicationId:  "3c8cd1ea7ecf01c074bb6622656a9faafb9d522d9683f74bfdb80c63ae60fb57",
  secret: "e25269afd074f82b12a7a181e0e4cd01134be5fdd602ccbd01989fc1e5143788"
});



class App extends Component {

  state = {
    url1 : "",
    url2: "",
    url3: "",
    url4: "",
    searchkey: "cat",
    des1: "",
    des2: "",
    des3: "",
    des4: ""
  }

componentDidMount = () => {
    this.fetchNext(this.state.searchkey);
}

handleSearch = (e) => {
  this.setState({
    searchkey: e.target.value
  })
}

fetchNext = (query) => {
  unsplash.search.photos(query, 1)
    .then(toJson)
    .then(json => {
     this.setState({
       url1 : json.results[0].urls.raw,
       url2 : json.results[1].urls.raw,
       url3 : json.results[2].urls.raw,
       url4 : json.results[3].urls.raw,
       des1: json.results[0].description,
       des2: json.results[1].description,
       des3: json.results[2].description,
       des4: json.results[3].description
     })
   });
}

renderNext=(e)=>{
  e.preventDefault();
  this.fetchNext(this.state.searchkey);
}
  


  render() {
    return (
      <div style={{backgroundColor: "bisque"}}>
        
        <Header
          renderNext = {this.renderNext}
          handleSearch = {this.handleSearch}
        />

        <Images
          image1 = {this.state.url1}
          image2 = {this.state.url2}
          image3 = {this.state.url3}
          image4 = {this.state.url4}
          des1 = {this.state.des1}
          des2 = {this.state.des2}
          des3 = {this.state.des3}
          des4 = {this.state.des4}
        />

        <Footer/>

      </div>
    );
  }
}

export default App;
