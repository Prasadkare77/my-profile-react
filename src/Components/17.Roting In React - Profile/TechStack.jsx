import React, { Component } from 'react'

export class TechStack extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="techStack" id="techStackSection">
                        <h3>Technology Stack for ReactJS Web Development</h3>
                        <table class="table table-striped table-bordered table-dark table-hover table-group-divider text-center">
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="5"><strong>Technology</strong></td>
                                    <td>HTML5</td>
                                </tr>
                                <tr>
                                    <td>BootStrap</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>TypeScript</td>
                                </tr>
                                <tr>
                                    <td>ReactJS</td>
                                </tr>
                                <tr>
                                    <td rowspan="2"><strong>Tools</strong></td>
                                    <td>Git + GitHub</td>
                                </tr>
                                <tr>
                                    <td>Agile + Gira</td>
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

export default TechStack

