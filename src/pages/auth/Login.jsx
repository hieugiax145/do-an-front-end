import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      window.location.href="/";
    } catch (error) {
     
    }
  };

  return (
    <>
        <Card>
            <TextInput
                label="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <TextInput
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <Button onClick={handleLogin}>Đăng nhập</Button>    
        </Card>
    </>
    // <div className="auth-container">
    //   <div className="auth-form-container">
    //     <h1 className="auth-title">Đăng nhập</h1>
    //     <form onSubmit={handleLogin} className="auth-form">
    //       <div className="flex flex-col mb-4 g">
    //         <label htmlFor="email">Email</label>
    //         <input
    //         //   type="email"
    //         //   id="email"
    //         //   name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Mật khẩu</label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <button type="submit" className="auth-button">
    //         Đăng nhập
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;