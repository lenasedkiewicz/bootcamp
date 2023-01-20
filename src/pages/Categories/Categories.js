import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../redux/postsRedux';
import { Row, Col, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { dateToString } from '../../utils/dateToStr';
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  const { category } = useParams();
  const postsData = useSelector((state) => getPostsByCategory(state, category));

  if (!postsData) return <Navigate to='/' />;
  return (
    <section>
      <Row>
        {postsData.map((post) => (
          <Col key={post.id} md={4} className='justify-content-md-start mb-5 mr-2'>
            <Card className='rounded' style={{ maxHeight: '20rem' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published:</b> {dateToString(post.publishedDate)}
                </Card.Text>
                <Card.Text>
                  <b>Category:</b> {post.category}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link className='justify-content-md-center' to={'/post/' + post.id}>
                  <Button variant='primary'>Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategoryFilter;