import { useSelector, useDispatch } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { getTableById, updateTableRequest } from "../../redux/tablesRedux";
import { getStatus } from "../../redux/statusRedux";
import { Navigate } from "react-router-dom";

function TableForm({ actionText, ...props }) {
  const { tableId } = useParams();
  const dispatch = useDispatch();

  const statusData = useSelector(getStatus);
  const tableData = useSelector((state) => getTableById(state, tableId));
  const { id } = tableData;

  const [people, setPeople] = useState(props.people || "");
  const [status, setStatus] = useState(props.status || "");
  const [maxPeople, setMaxPeople] = useState(props.maxPeople || "");
  const [bill, setBill] = useState(props.bill || "");
  const [statusError, setStatusError] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setStatusError(!status);
    if (maxPeople) {
      dispatch(updateTableRequest({ id, people, maxPeople, bill, status }));
    }
  };

  if (maxPeople > 10) setMaxPeople("10");
  if (maxPeople < 0) setMaxPeople("0");
  if (people > maxPeople) setPeople(maxPeople);
  if (people < 0) setPeople("0");
  if (bill < 0) setBill("0");

  if (!tableData) return <Navigate to="/" />;

  return (
    <div>
      <Row className="mb-5">
        <h1>Table {id} </h1>
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3">
            <Row className="mb-3">
              <Col md={1}>
                <b>People:</b>
              </Col>
              <Form.Control
                {...register("people", { required: true })}
                className="pl-3"
                style={{
                  width: "50px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                type="number"
                onChange={(e) => setPeople(e.target.value)}
                value={status === "Busy" ? people : 0}
              />
              /
              <Form.Control
                {...register("maxPeople", { required: true })}
                style={{ width: "50px", marginLeft: "10px" }}
                type="number"
                onChange={(e) => setMaxPeople(e.target.value)}
                value={maxPeople}
              />
              {errors.people && (
                <small className="d-block form-text text-danger mt-2">
                  This field is required
                </small>
              )}
              {errors.maxPeople && (
                <small className="d-block form-text text-danger mt-2">
                  This field is required
                </small>
              )}
            </Row>
            <Row className="mb-3">
              <Col md={1}>
                <b>Status:</b>
              </Col>
              <Col md={2}>
                <Form.Select
                  {...register("status", { required: true })}
                  as="select"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  aria-label="Select status"
                >
                  <option value="" disabled>Select status</option>
                  {statusData.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              {statusError && (
                <small className="d-block form-text text-danger mt-2">
                  Please choose status
                </small>
              )}
            </Row>
            {status === "Busy" && (
              <Row>
                <Col md={1}>
                  <Form.Label>
                    <b>Bill:</b>
                  </Form.Label>
                </Col>
                <Col md={2}>
                  <Form.Control
                    {...register("bill", { required: true })}
                    type="number"
                    placeholder="current bill"
                    onChange={(e) => setBill(e.target.value)}
                    value={status === "Busy" ? bill : 0}
                  />
                </Col>
                {errors.bill && (
                  <small className="d-block form-text text-danger mt-2">
                    This field is required
                  </small>
                )}
              </Row>
            )}
          </Form.Group>
          <Button
            as="input"
            value={actionText}
            type="submit"
            style={{ marginTop: "10px" }}
          />
        </Form>
      </Row>
    </div>
  );
}

TableForm.propTypes = {
  actionText: PropTypes.string.isRequired,
  people: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  maxPeople: PropTypes.string.isRequired,
  bill: PropTypes.string.isRequired,
};

export default TableForm;
