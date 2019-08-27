import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './component/userlist';

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <div>{this.props.title}
        </div>
        <UserList data={this.data} />
    	</div>
    );
  }	

}

export default App;

