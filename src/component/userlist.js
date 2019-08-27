import React from 'react';
import DisplyUserButton from './displyUserButton';
import '../App.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          isLoading: false,
          error: null,
          isShowing : false,
        }
      }

      componentDidMount() {
        this.setState({ isLoading: true });

        // fetch('http://localhost:9256/api/users/fetchusers') // Local URL
        fetch('https://jsonplaceholder.typicode.com/users') // Server URL
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
      })
      .then(data => this.setState({ users: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
      }

	render() {
        const { users, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        
        return (
            <div>
                <p></p>
                {
                    users.map(user => <div key={user.id}> <DisplyUserButton user={user} />
                    </div>
                    )}
            </div>
        );
    }
}


export default UserList;