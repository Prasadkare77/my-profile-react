import React, { Component } from 'react'

export class Personal extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="personal" id="personalInfo">
                        <h3>Personal Details</h3>
                        <div class="personalInfo">
                            <strong>Name:</strong> Rohit Sharma
                            <p><strong>Mobile Number:</strong> 9900885066</p>
                            <p><strong>Email:</strong> rohitsharma@gmail.com</p>
                            <p><strong>Date of Birth:</strong> Feb-19-2004</p>
                            <p><strong>Address:</strong> OM Vrindawan Colony, Pune</p>
                            <details>
                                <summary><strong>Family Details</strong></summary>
                                <ul>
                                    <li>Father Name: Taraka Sharma</li>
                                    <li>Mother Name : Manika Sharma</li>
                                </ul>
                            </details>
                            <h4>Achivement</h4>
                            <ul>
                                <li>I got II nd Prize in Technical Quiz organized by Sinhgad Institute of technology</li>
                                <li>Got Ist prize in Paper presentation organized by Sinhgad Institute of technology</li>
                            </ul>
                            <h4>Hobbies</h4>
                            <ul>
                                <li>Programming</li>
                                <li>Travelling</li>
                                <li>Watching Movies</li>
                                <li>Music Listening</li>
                            </ul>
                        </div>
                    </div><hr/>
                </div>
            </div>
        )
    }
}

export default Personal
