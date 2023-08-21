const About = (props) =>  {
  return (
    <>
      <h1>{props.message}</h1>
      <p>my name is {props.name}!</p>
    </>
  )
}

export default About;