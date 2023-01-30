import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Table = ({ status, id, bill }) => {

  const tableStatus = status;

  return (
    <Row>
      <Row className="align-items-end mb-3">
        <Col className="col-2 d-flex align-items-end justify-content-between">
          <h2 className="mb-0">Table {id}</h2>
        </Col>
        <Col className="col-4">
          <strong>Status:</strong> {status} {""}
          {tableStatus === "Busy" && (
            <span>
              {""}
              <strong>Bill: </strong>
              {bill}
            </span>
          )}
        </Col>
        <Col className="col-6 d-flex justify-content-end">
          <Link to={"/table/" + id}>
            <Button variant="primary" size="sm">
              Show more
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
    </Row>
  );
};

Table.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  bill: PropTypes.string.isRequired,
};

export default Table;
