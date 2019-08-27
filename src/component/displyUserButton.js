import React from 'react';
import '../App.css';
import TogglePhone from './togglePhone';

class displyUserButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isShowing : false,
        }

        this.toggleDivItem = this.toggleDivItem.bind(this);
      }

    toggleDivItem = () => {
        const {isShowing} = this.state;
        this.setState({isShowing : !isShowing});
    }

	render() {
        const { isShowing } = this.state;

        return (
            <div>
                <button onClick={this.toggleDivItem}>{this.props.user.name}</button>
                {isShowing && <TogglePhone userData={this.props.user} />}
            </div>
        );
    }
}


export default displyUserButton;

