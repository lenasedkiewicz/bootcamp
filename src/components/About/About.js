import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <PageTitle>About</PageTitle>
        <p>Lorem ipsum</p>
      </Container>
    </div>
  );
};

export default About;
