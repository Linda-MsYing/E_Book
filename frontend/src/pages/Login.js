import React from 'react';
import '../App.css';
import '../css/Login.css';
import validate from '../service/validateInfo';
import useForm from '../service/useForm';
// import { Button } from '../components/Button';
import { Button, Space,Checkbox, Form, Input } from 'antd';


  const SignUp = ({submitForm}) => {

      const {handleChange, handleSubmit, values, errors} = useForm(
            submitForm,
            validate,
        );

  return (
      <div className="container" id="login">
          <div className="row">
              <div className="col-lg-3 col-md-2"></div>
              <div className="col-lg-6 col-md-8 login-box" id="login" onSubmit={handleSubmit} noValidate>
                  <div className="col-lg-12 login-key">
                      <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-12 login-title">
                      ADMIN PANEL
                  </div>
                  <div className="col-lg-12 login-form">
                      <div className="col-lg-12 login-form">
                <form>
                    <div className="form-group">
                        <label className="form-control-label">USERNAME</label>
                        {/*<input type="text" class="form-control" />*/}

                        <input
                            className="form-control"
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={handleChange}
                        />{errors.username && <p>{errors.username}</p>}

                    </div>
                    <div className="form-group">
                        <label className="form-control-label">PASSWORD</label>
                        <input
                            className='form-control'
                            type="password"
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />{errors.password && <p>{errors.password}</p>}
                    </div>

                <div class="col-lg-12 loginbttm">
                  <Space className="site-button-ghost-wrapper" wrap>
                  <Button ghost buttonStyle='btn--outline' onClick={handleSubmit}>Log in  </Button>
                  <Button ghost>Register</Button>
                  </Space>
                </div>
                </form>

            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
      </div>





  );
}

export default SignUp;


