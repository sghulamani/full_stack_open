import React from 'react'

const Header = ({props}) =>{
  return(
    <>
    <h1>{props}</h1>
    </>
  ) 
}

const Content = ({props}) => {
  return (
    <> 
    <p>{props[0].name} {props[0].exercises}</p>
    <p>{props[1].name} {props[1].exercises}</p>
    <p>{props[2].name} {props[2].exercises}</p>
    </>
  )
}

const Total = ({props}) => {
  return (
  <>
  Total: {props[0].exercises + props[1].exercises + props[2].exercises }
  </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    sections: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header props = {course.name} />
      <Content props = {course.sections} />
      <Total props = {course.sections} />
    </div>
  )
}

export default App