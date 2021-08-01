import { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContnet';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject'
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 0,
      subject: { title: "WEB", sub: "World Wide Web!!! YEAH!!" },
      test2: { sub: "test용" },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaStript is interactive" }
      ]
    }
  }
  getReadContent(){
    var i = 0;
    for (i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i];
      if (i == 0) {
        _title = this.state.subject.title;
        _desc = this.state.subject.sub;
      }
      if (data.id === this.state.selected_content_id) {
        _title = data.title;
        _desc = data.desc;
        break;
      }
  }

  getContent(){
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      var i = 0;
      for (i = 0; i < this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if (i == 0) {
          _title = this.state.subject.title;
          _desc = this.state.subject.sub;
        }
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {

        // add content to this.state.contents
        this.max_id = this.max_id + 1;
        // console.log(this.max_id);
        // this.state.contents.push(
        // { id: this.max_id, title: _title, desc: _desc }
        // );
        // var _contents = this.state.contents.concat({id:this.max_id, title:_title, desc:_desc})

        var newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_id, title: _title, desc: _desc })

        this.setState({
          contents: newContents
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent onSubmit={function (_title, _desc) {

        // add content to this.state.contents
        this.max_id = this.max_id + 1;
        // console.log(this.max_id);
        // this.state.contents.push(
        // { id: this.max_id, title: _title, desc: _desc }
        // );
        // var _contents = this.state.contents.concat({id:this.max_id, title:_title, desc:_desc})

        var newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_id, title: _title, desc: _desc })

        this.setState({
          contents: newContents
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject title=
          {this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'read',
              selected_content_id: 0
            });
          }.bind(this)}
        >
        </Subject>

        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data={this.state.contents}></TOC>

        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });

        }.bind(this)}></Control>


        {this.getContent()}
      </div>
    );
  }
}

export default App;
