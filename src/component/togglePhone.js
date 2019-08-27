import React from 'react';
import '../App.css';

class togglePhone extends React.Component {
    constructor(props) {
        super(props);
      }

	render() {
        return (
            <div>
                {this.props.userData.phone}
            </div>
        );
    }
}


export default togglePhone;