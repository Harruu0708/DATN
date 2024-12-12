import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom"; // Import NavLink
import RentalOrderItem from "../components/UI/RentalOrderItem"; // Import RentalOrderItem
import rentalOrders from "../assets/data/orderData"; // Import dữ liệu đơn thuê từ orderData.js
import "../styles/purchase.css"; // Thêm CSS tùy chỉnh nếu cần

const Purchase = () => {
  const [filter, setFilter] = useState("all"); // Trạng thái mặc định là "All"

  // Hàm lọc các đơn thuê theo trạng thái
  const filteredOrders = rentalOrders.filter((order) => {
    if (filter === "all") return true;
    return order.status.toLowerCase() === filter;
  });

  const renderContent = () => {
    return filteredOrders.length > 0 ? (
      filteredOrders.map((order, index) => (
        <Col key={order.orderId} lg="4" sm="6" className="mb-5">
          <RentalOrderItem order={order} />
        </Col>
      ))
    ) : (
      <div>No orders found for the selected filter.</div>
    );
  };

  return (
    <div>
      <nav className="status-nav">
        <NavLink
          to="#"
          className={({ isActive }) => (filter === "all" ? "active-link" : "link")}
          onClick={() => setFilter("all")}
        >
          All
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (filter === "pending" ? "active-link" : "link")}
          onClick={() => setFilter("pending")}
        >
          Pending
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (filter === "confirmed" ? "active-link" : "link")}
          onClick={() => setFilter("confirmed")}
        >
          Confirmed
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (filter === "completed" ? "active-link" : "link")}
          onClick={() => setFilter("completed")}
        >
          Completed
        </NavLink>

        <NavLink
        to="#"
        className={({ isActive }) => (filter === "cancelled" ? "active-link" : "link")}
        onClick={() => setFilter("cancelled")}>
          Cancelled
        </NavLink>
      </nav>

      <Container>
        <Row>
          {renderContent()}
        </Row>
      </Container>
    </div>
  );
};

export default Purchase;
