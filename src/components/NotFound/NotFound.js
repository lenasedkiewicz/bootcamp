import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
    return (
      <div>
        <NavBar />
        <Container>
          <PageTitle>404 Not found</PageTitle>
        </Container>
      </div>
    );
  };

export default NotFound;