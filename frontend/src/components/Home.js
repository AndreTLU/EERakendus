import React from 'react';
import { Form, Icon, Input, Button, AutoComplete } from 'antd';
import {Link, Router, Route} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring';

const FormItem = Form.Item;
const Option = AutoComplete.Option;

function renderOption(item){
  return (
    <Option key={item.id} text={item.fullName}>
    {item.fullName}
    </Option>
  );
}

class Home extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  state = {
    dataSource:[],
    users: {},
    search: ''
  }
  
  componentDidMount(){
    this.getUsers();
  }

  onSelect = value =>{
    console.log('onSelect', value);
    this.props.history.push(`/user/${value}`);
  
  }

  getUsers(){
    axios.get('http://localhost/api/users')
      .then((users)=>{
        this.setState({dataSource:users.data});
      })
      .catch(err =>{
        console.log(err);
      });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    
  }
  searchResult = (query) =>{
    return (dataSource.map((item, id) =>{
      query
    }));
  }

  renderOption = (item)=> {
    return (
      <Option key={item.id} text={item.fullName}>
        {item.query}
      </Option>
    );
  }

  render(){
    const {users, dataSource} = this.state;
    console.log(this.state);
    return(
      <div >
        <div>
          <h1>Rakendus</h1>
        </div>
        <div>
          <ul>
            <li><Link to="/add">Lisa kasutaja</Link></li>
          </ul>
        </div>
        <div style={{width: 300}}>
          <AutoComplete size='large' style={{ width: '100%' }} 
          onSearch={this.handleSearch} 
          placeholder="Otsi" 
          dataSource={dataSource.map(renderOption)}
          onSelect={this.onSelect}
          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
          >
          </AutoComplete>
        </div>
      </div>
    )
  }
  
}
export default Home