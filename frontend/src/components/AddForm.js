import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { AutoComplete } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring';

const FormItem = Form.Item;
const Option = AutoComplete.Option;

class AddForm extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    result: [],
    users: [],
    message: ''
  }
  
  componentDidMount(){
    this.props.form.validateFields();
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
    this.props.form.validateFields((err, values) =>{
      if(!err){
        console.log('Received values of from: ', values);
        axios.post('http://localhost/api/users', querystring.stringify(values))
          .then(res =>{
            this.setState({message: res.data.message});
          })
          .catch(err =>{
            console.log(err);
          });
      }
    })
  }

  handleSearch = (value) =>{
    let result;
    if(!value || value.indexOf('@') >=0){
      result = [];
    } else {
      result = ['gmail.com', 'protonmail.com', 'mail.ee', 'hot.ee', 'hotmail.com', 'outlook.com', 'live.com', 'live.co.uk'].map(domain => `${value}@${domain}`);
    }
    this.setState({result});
  }

  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const fromStyle = {
      width: '500px',
      overflow: 'hidden'
    };

    const {result, users, message} = this.state;
    console.log(this.state);

    const children = result.map((email) =>{
      return <Option key={email}>{email}</Option>;
    });

    return(
      <div >
        <div>
          <h1>Kasutaja lisamine</h1>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
        <div>
          {message}
        </div>
        <div style={fromStyle}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Palun lisage eesnimi' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Firstname" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Palun lisage perekonnanimi' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Lastname" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'Vale email',
              },{ required: true, message: 'Palun sisestage email' }],
            })(<AutoComplete onSearch={this.handleSearch} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Email'>{children}</AutoComplete>)}
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit'>Salvesta</Button>
            </FormItem>
          </Form>
        </div>
        <div>

        </div>
      </div>
    )
  }
  
}
export default Form.create()(AddForm);