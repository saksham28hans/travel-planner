import React, { useState } from 'react';
import '../styles/login.css';
import axios from "axios";
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate} from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userICon from '../assets/images/user.png';
const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL});
const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username:null,
    email: null,
    password: null,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/auth/register',credentials);
      navigate('/login')
    } catch (error) {
     console.log(error);
    }
  };
  return (
    <section>
      <div className='container'>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg}></img>
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userICon} alt=""></img>
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/register">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </div>
    </section>
  );
};

export default Register;
