import './App.css';
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject'
import { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test1:{title:"WEB", sub:"World Wide Web!!! YEAH!!"},
      test2:{sub:"test용"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaStript is interactive"}
      ]
    }
  }

  render() {
    return(
      <div className="App"> 
          <Subject title={this.state.test1.title} sub={this.state.test2.sub}></Subject>
          <Subject title="React" sub="For UI"></Subject>
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Languate."></Content>
      </div>
    );
  }
}

export default App;
