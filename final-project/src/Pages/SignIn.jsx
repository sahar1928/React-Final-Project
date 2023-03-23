import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import URL from '../Assets/url';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with email and password
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="6" className="p-5 border">
          <div className="text-center">
            <FontAwesomeIcon icon={faLock} size="3x" />
            <h1 className="mt-3 mb-4">Sign in</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                <span className="ml-2">Remember me</span>
              </Label>
            </FormGroup>
            <Button
              color="primary"
              size="lg"
              className="mt-4 w-100"
              type="submit"
            >
              Sign In
            </Button>
            <div className="mt-3 text-center">
              <Link to="#" className="mr-4">
                Forgot password?
              </Link>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
