import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap';
import URL from '../Assets/url';




const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with first name, last name, email and password
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <div className="text-center">
            <h1 className="mb-4">Sign up</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
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
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                {' '}
                I want to receive inspiration, marketing promotions and updates via email.
              </Label>
            </FormGroup>
            <Button color="primary" type="submit">Sign Up</Button>
          </Form>
          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <Link to="/signin">Sign in</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
