package com.user.rest;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UserDataService {
	private static List<User> userList = new ArrayList<User>();
	ObjectMapper mapper = new ObjectMapper();
	
	public String addUser(User user) throws JsonProcessingException {
		for(User u: userList) {
			if(u.getFullName().equals(user.getFullName())){
				return "{ \"message\" : \"User exists\"}";
			}
		}
		int newId = userList.size()+1;
		user.setId(newId);
		userList.add(user);
		
		return "{ \"message\" : \"User added\"}";
	}
	public String UpdateUser(String firstName, String lastName, String email, int id) {
		for(User u:userList) {
			if(u.getId() == id) {
				u.setEmail(email);
				u.setFirstName(firstName);
				u.setLastName(lastName);
				return "{ \"message\" : \"User Updated\"}";
			}
		}
		return "{ \"message\" : \"Cant update User\"}";
		
	}
	public List<User> getUsers(){
		return userList;
	}
	
	public User getUserById(int id) {
		for(User u : userList) {
			if(u.getId() == id) {
				return u;
			}
		}
		return null;
	}
}
