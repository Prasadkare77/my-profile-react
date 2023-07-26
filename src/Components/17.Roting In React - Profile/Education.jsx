import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <div>
                <div class="container ">
                    <div class="education" id="educationDetails">
                        <h3>My Educational Details</h3>
                        <table class="table table-striped table-bordered table-dark table-hover table-group-divider text-center">
                            <thead>
                                <th>Qualification</th>
                                <th>School/College</th>
                                <th>Board/University</th>
                                <th>Year</th>
                                <th>Percentage</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BE</td>
                                    <td>CSMIT, Shedung, Panvel</td>
                                    <td>Mumbai</td>
                                    <td>2019</td>
                                    <td>61.27%</td>
                                </tr>
                                <tr>
                                    <td>Diploma</td>
                                    <td>VJIT, Matunga, Mumbai</td>
                                    <td>Autonoumous</td>
                                    <td>2016</td>
                                    <td>72.29</td>
                                </tr>
                                <tr>
                                    <td>SSC</td>
                                    <td>DVS High School, KoparKhairane, Navi Mumbai</td>
                                    <td>State Board</td>
                                    <td>2013</td>
                                    <td>90.73%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                </div>

            </div>
        )
    }
}

export default Education
