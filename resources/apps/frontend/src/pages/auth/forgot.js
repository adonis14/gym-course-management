import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

import withAuth from 'enhancers/withAuth';

class Forgot extends Component {
  state = {
    isLoading: false,
  };

  isStillMounted = false;

  componentDidMount() {
    this.isStillMounted = true;
  }

  componentWillUnmount() {
    this.isStillMounted = false;
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({isLoading: true});

    await this.props.forgot({
      email: this.email.value,
    });

    this.isStillMounted && this.setState({isLoading: false});
  };

  render() {
    return (
      <div className="card card-login mx-auto mt-5">
        <div className="card-header text-center">Forgot Password</div>
        <div className="card-body">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <div className="form-label-group">
                <Input
                  innerRef={email => (this.email = email)}
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  autoFocus
                  disabled={this.state.isLoading}
                />
                <Label for="inputEmail">Email address</Label>
              </div>
            </FormGroup>
            <Button
              disabled={this.state.isLoading}
              size="lg"
              color="primary"
              block
            >
              {this.state.isLoading ? 'Please Wait...' : 'Recover'}
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/auth/login" className="d-block small">
              Back To Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Forgot);
