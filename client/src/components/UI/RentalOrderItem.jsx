import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/rental-order-item.css"; // Đảm bảo có tệp CSS cho component này

const RentalOrderItem = (props) => {
  const { 
    orderId, 
    carName, 
    ownerAvatar, 
    totalAmount, 
    status, 
    imgUrl, 
    carOwner, 
    quantity,
  } = props.order;

  return (
    <Col className="mb-5">
      <div className="rental__order-item">
        {/* Ảnh xe */}
        <div className="rental__order-img">
          <img src={imgUrl} alt={carName} className="w-100" />
        </div>

        {/* Nội dung */}
        <div className="rental__order-content mt-4 text-center">
          <h4 className="section__title">{carName}</h4>
          <h6 className="rental__price">
            ${totalAmount} ({quantity}<i class='ri-car-line'></i>)
          </h6>
        </div>

        {/* Thông tin chủ xe */}
        <div className="rental__order-info d-flex align-items-center justify-content-between mt-3 mb-4">
          <span className="d-flex align-items-center gap-1">
            <img src={ownerAvatar} alt={carOwner} className="avatar" />
            {carOwner}
          </span>
        </div>

        {/* Trạng thái đơn thuê */}
        <div className="rental__order-status text-center">
          <span
            className="status-badge"
            style={{
              backgroundColor: getStatusColor(status),
            }}
          >
            {status}
          </span>
        </div>

        {/* Nút chi tiết */}
        <div className="rental__order-buttons mt-3 text-center">
          <button className="w-50 rental__order-btn rental__btn-details">
            <Link to={`/purchases/${orderId}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

// Hàm chọn màu cho trạng thái đơn thuê
const getStatusColor = (status) => {
  switch (status) {
    case "Confirmed":
      return "#4CAF50"; // Màu xanh lá
    case "Pending":
      return "#FFC107"; // Màu vàng
    case "Completed":
      return "#2196F3"; // Màu xanh dương
    case "Cancelled":
      return "#F44336"; // Màu đỏ
    default:
      return "#000"; // Màu đen
  }
};

export default RentalOrderItem;
