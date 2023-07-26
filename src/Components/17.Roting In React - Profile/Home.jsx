import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <div class="container position-relative mt-5">
                    <div class="image d-inline-block">
                        <img src="assets/bill.png" alt="" width="150" height="150" class="rounded-bottom-circle mt-3 me-3"/>
                    </div>
                    <div class="name d-inline-block mt-5 ms-5 position-absolute">
                        <h4 class="mt-3 mb-3">Rohit Sharma</h4>
                        <p class="fw-bold"><i class="fa fa-phone-square me-3" aria-hidden="true"></i>+91 9876543210</p>
                        <p class="fw-bold"><i class="fa fa-envelope me-3" aria-hidden="true"></i>rohitsharma@gmail.com</p>
                    </div>
                    <hr />
                </div>

                <div class="container">
                    <div class="summary">
                        <h2>Professional Summary</h2>
                        <ul>
                            <li>Having 1 years of experience in developing single page Web Applications using <span>ReactJS,</span> HTML5,
                                CSS3, Booststrap5, JavaScript, TypeScript</li>
                            <li>Experience on working with version control system-GIT anf GitHub</li>
                            <li>Experience working with JIRA for user stories and bug tracking</li>
                            <li>Strong Debugging & Troubleshooting code experience using Chrome Developer Tool</li>
                            <li>Working exposure on ID's like VS Code and Notepad++</li>
                            <li>Good Working experience under Agile methodologies environment</li>
                            <li>Experience in using Chrome Developer Tool for debugging and Troublshooting the code</li>
                            <li>Knowledge of NodeJS</li>
                            <li>Ability to work with people at all levels in the program</li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default Home
