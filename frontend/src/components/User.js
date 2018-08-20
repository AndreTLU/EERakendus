import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { AutoComplete } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring';

const FormItem = Form.Item;

class User extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    user: {},
    message: ''
  }
  
  componentDidMount(){
    const { id } = this.props.match.params;

    axios.get(`http://localhost/api/users/${id}`)
      .then(user =>{
        this.setState({user:user.data});
      })
      .catch(err=>{
        console.log(err);
      });

      
  }

  handleSubmit = e =>{
    e.preventDefault();
    const {user}=this.state;
    this.props.form.validateFields((err, values) =>{
      if(!err){
        values.id=user.id;
        console.log('Received values of from: ', values);
        axios.put('http://localhost/api/users', querystring.stringify(values))
          .then(res =>{
            this.setState({message: res.data.message});
          })
          .catch(err =>{
            console.log(err);
          });
      }
    })

  }
  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const {user, message} = this.state;
    console.log(this.state);

    const fromStyle = {
      width: '500px',
      overflow: 'hidden'
    };

    

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
              rules: [{ required: true, message: 'Palun lisage eesnimi' }], initialValue: user.firstName
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Firstname" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Palun lisage perekonnanimi' }], initialValue: user.lastName
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Lastname" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'Vale email',
              },{ required: true, message: 'Palun sisestage email' }], initialValue: user.email
            })(<Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
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
export default Form.create()(User);