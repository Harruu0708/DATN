import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import rentalOrders from "../assets/data/orderData"; // Dữ liệu đơn thuê
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/purchase-details.css";

const PurchaseDetails = () => {
  const { slug } = useParams();
  const [orderItem, setOrderItem] = useState(
    rentalOrders.find((item) => item.orderId === Number(slug))
  );
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCancelModalOpen, setCancelModalOpen] = useState(false); // Trạng thái modal hủy đơn

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi tải
  }, []);

  const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);

  const toggleCancelModal = () => setCancelModalOpen(!isCancelModalOpen); // Hàm mở/đóng modal hủy

  const handleCancelOrder = () => {
    setCancelModalOpen(true); // Mở modal xác nhận hủy khi nhấn Cancel Order
  };

  const handleConfirmCancel = () => {
    setOrderItem({ ...orderItem, status: "Cancelled" });
    setCancelModalOpen(false); // Đóng modal hủy sau khi xác nhận
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      ...orderItem,
      returnDate: e.target.returnDate.value,
      quantity: Number(e.target.quantity.value),
    };
    setOrderItem(updatedOrder);
    setEditModalOpen(false);
  };

  if (!orderItem) {
    return (
      <Helmet title="Order Not Found">
        <div className="purchase-details">
          <h2>Order not found</h2>
        </div>
      </Helmet>
    );
  }

  return (
    <Helmet title={`Order ${orderItem.orderId}`}>
      <section>
        <Container>
          <Row>
            {/* Hình ảnh của xe */}
            <Col lg="6">
              <img src={orderItem.imgUrl} alt={orderItem.carName} className="w-100" />
            </Col>

            {/* Thông tin chi tiết */}
            <Col lg="6">
              <div className="order__info">
                <h2 className="section__title">{orderItem.carName}</h2>
                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="order__price fw-bold fs-4">${orderItem.totalAmount}</h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-user-fill"></i>
                    </span>
                    {orderItem.customerName}
                  </span>
                </div>

                <p className="section__description">
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color: getStatusColor(orderItem.status),
                      fontWeight: "bold",
                    }}
                  >
                    {orderItem.status}
                  </span>
                </p>

                <div className="d-flex flex-column mt-3">
                  <p>
                    <strong>Rental Date:</strong> {orderItem.rentalDate}
                  </p>
                  <p>
                    <strong>Return Date:</strong> {orderItem.returnDate}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {orderItem.quantity}
                  </p>
                  <p>
                    <strong>Car Owner:</strong> {orderItem.carOwner}
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Nút hành động */}
          <Row className="mt-4">
            <Col lg="12" className="text-center">
              <Button color="primary" className="me-2" onClick={toggleEditModal}>
                Edit
              </Button>
              <Button color="danger" onClick={handleCancelOrder}>
                Cancel Order
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Modal chỉnh sửa */}
        <Modal isOpen={isEditModalOpen} toggle={toggleEditModal}>
          <ModalHeader toggle={toggleEditModal}>Update the Order Information</ModalHeader>
          <Form onSubmit={handleEditSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="returnDate">Return Date</Label>
                <Input
                  type="date"
                  name="returnDate"
                  id="returnDate"
                  defaultValue={orderItem.returnDate}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={orderItem.quantity}
                  min="1"
                  required
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button color="secondary" onClick={toggleEditModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Modal xác nhận hủy đơn */}
        <Modal isOpen={isCancelModalOpen} toggle={toggleCancelModal}>
          <ModalHeader toggle={toggleCancelModal}>Confirm Cancel</ModalHeader>
          <ModalBody>
          Are you sure you want to cancel this order? This action cannot be undone.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleConfirmCancel}>
              Yes, Cancel Order
            </Button>
            <Button color="secondary" onClick={toggleCancelModal}>
              No, Keep Order
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </Helmet>
  );
};

// Hàm xác định màu sắc trạng thái
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "confirmed":
      return "#4CAF50";
    case "pending":
      return "#FFC107";
    case "completed":
      return "#2196F3";
    case "cancelled":
      return "#F44336";
    default:
      return "#000";
  }
};

export default PurchaseDetails;
