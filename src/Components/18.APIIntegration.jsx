import axios from 'axios';
import React, { Component } from 'react'

import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

export class APIIntegration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            products: [],
            loading: true,
        }
    }


    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = async () => {
        try {
            const users = await axios.get(`https://fakestoreapi.com/users`)
            console.log(users.data);
            this.setState({ users: users.data, loading: false })

            const products = await axios.get(`https://fakestoreapi.com/products`)
            console.log(products);
            this.setState({ products: products.data, loading: false })
        }
        catch (error) {
            console.error(`Error Fetching User: ${error}`);
        }
    }

    render() {
        const { users, products, loading } = this.state
        if(loading){
            //return <div><strong>Loading...</strong></div>
            return <Spinner className='' animation="border" />;
        }
        return (
            <div>
                <h3>Users List</h3>
                {/* <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name.firstname} {user.name.lastname}</li>
                    ))}
                </ul> */}

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name.firstname}</td>
                                <td>{user.name.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


                <h3>Product List</h3>
                {/* <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}, Price: {product.price}</li>
                    ))}
                </ul> */}


                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Rating Count</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.rating.count}</td>
                                <td>{product.rating.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default APIIntegration; 
