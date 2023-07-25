import React from 'react'

const ListRenderingInFunctioanalComp = (props) => {

  const { persons } = props
  console.log(persons)
  return (
    <>
      <h2>List Rendering In Functioanal Comp</h2>
      {
        persons.map((person, index) => (
          <p key={index}>Name: {person.name}  Age: {person.age} Company:{person.company}</p>
        ))
      }
    </>
  )
}

export default ListRenderingInFunctioanalComp