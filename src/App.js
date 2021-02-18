import React,{Component} from 'react';

class App extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {

   	var x={
   		color : 'Blue'
   	}
      return (
         <div>
            <h1 style={x}>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content Updated</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;