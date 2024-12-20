import React, { useState } from 'react';
import '../styles/profile.css';
import Helmet from '../components/Helmet/Helmet';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa
  const [user, setUser] = useState({
    name: "John Doe",
    dob: "January 1, 1990",
    gender: "Male",
    email: "johndoe@example.com",
    address: "123 Main St, City, Country",
    phone: "+1234567890"
  });
  
  const [avatar, setAvatar] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Lưu ảnh vào state
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSave = () => {
    setIsEditing(false); // Lưu thay đổi và thoát khỏi chế độ chỉnh sửa
    setShowPopup(true); // Hiển thị pop-up
    setTimeout(() => {
      setShowPopup(false); // Ẩn pop-up sau 3 giây
    }, 3000);
    // Bạn có thể thực hiện thêm hành động như gửi dữ liệu lên server ở đây
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value
    });
  };

  const handleChangePassword = () => {
    if (password.newPassword === password.confirmPassword) {
      alert('Password changed successfully!'); // Xử lý logic đổi mật khẩu
      setShowChangePasswordPopup(false);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <Helmet title="Profile">
    <div className="profile-container">
      <div className="avatar-section">
        {/* Hiển thị ảnh đại diện hoặc hình ảnh mặc định nếu không có */}
        <img 
          src={avatar || "https://via.placeholder.com/150"} 
          alt="Avatar" 
          className="avatar"
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleAvatarChange} 
          className="avatar-upload-button"
        />
      </div>
      
      <h2>{user.name}</h2>

      <div className="profile-card">
        <div className="profile-info">
          <label>Date of Birth:</label>
          {isEditing ? (
            <input 
              type="date" 
              name="dob" 
              value={user.dob} 
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <span>{user.dob}</span>
          )}
        </div>
        <div className="profile-info">
          <label>Gender:</label>
          {isEditing ? (
            <select 
            name="gender" 
            value={user.gender} 
            onChange={handleInputChange} 
            className="profile-input"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          ) : (
            <span>{user.gender}</span>
          )}
        </div>
        <div className="profile-info">
          <label>Email:</label>
          {isEditing ? (
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>
        <div className="profile-info">
          <label>Address:</label>
          {isEditing ? (
            <input 
              type="text" 
              name="address" 
              value={user.address} 
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <span>{user.address}</span>
          )}
        </div>
        <div className="profile-info">
          <label>Phone:</label>
          {isEditing ? (
            <input 
              type="text" 
              name="phone" 
              value={user.phone} 
              onChange={handleInputChange}
              className="profile-input"
            />
          ) : (
            <span>{user.phone}</span>
          )}
        </div>
      </div>

      {/* Nút Edit Profile ở dưới thẻ profile */}
      <div className="edit-button-container">
        <button onClick={handleEditClick} className="edit-button">
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        <button 
          onClick={() => setShowChangePasswordPopup(true)} 
          className="change-password-button"
        >
          Change Password
        </button>
      </div>

      {/* Nếu đang chỉnh sửa, hiển thị nút Save */}
      {isEditing && (
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      )}

      {/* Hiển thị pop-up khi cập nhật thành công */}
      {showPopup && (
        <div className="popup">
          <p>Cập nhật thành công!</p>
        </div>
      )}

      {/* Hiển thị pop-up đổi mật khẩu */}
      {showChangePasswordPopup && (
      <>
        {/* Lớp overlay */}
        <div className="overlay" onClick={() => setShowChangePasswordPopup(false)}></div>

        {/* Popup */}
        <div className="change-password-popup">
          <h3>Change Password</h3>
          <input 
            type="password" 
            name="oldPassword" 
            placeholder="Current Password" 
            value={password.oldPassword} 
            onChange={handlePasswordChange} 
          />
          <input 
            type="password" 
            name="newPassword" 
            placeholder="New Password" 
            value={password.newPassword} 
            onChange={handlePasswordChange} 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={password.confirmPassword} 
            onChange={handlePasswordChange} 
          />
          <button onClick={handleChangePassword}>Submit</button>
          <button onClick={() => setShowChangePasswordPopup(false)}>Cancel</button>
        </div>
      </>
    )}
    </div>
  </Helmet>
  );
};

export default Profile;
