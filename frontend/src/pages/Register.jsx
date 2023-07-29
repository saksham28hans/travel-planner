import React from 'react';
import '../styles/login.css';
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { Link} from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userICon from '../assets/images/user.png';
const Register = () => {
  const handleChange = (e) => {

  };

  const handleClick = async (e) => {
    e.preventDeafult();
    
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
