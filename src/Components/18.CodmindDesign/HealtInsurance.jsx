import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class HealtInsurance extends Component {
  render() {
    return (
      <div className='bg-primary'> 
            <Container className='pt-5'>
                <h2>Zero Hassle healt policies starting @₹18day<sup>A</sup></h2>
                <p>No medical checkup required<sup>B</sup>  |  Instant policy<sup>P</sup>  |  All plans cover COVID-19  |  7500+ Healthcare provider<sup>C</sup>  |  60 mins<sup>D</sup> TAT for cashless hospitalization</p>
                <Container>
                    <Container>
                        <h5>Comprehensive<br></br> Health Insurance</h5>
                        
                    </Container>
                </Container>
            </Container>
      </div>
    )
  }
}

export default HealtInsurance
