package com.user.rest.api;

import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.user.rest.User;
import com.user.rest.UserDataService;

@Path("users")
public class UserRestResource {
	
	private UserDataService dataService = new UserDataService();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUsers(){
		return dataService.getUsers();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id") int id) {
		return dataService.getUserById(id);
	}
	
	@POST
	@Consumes({"application/x-www-form-urlencoded"})
	public String createUser(@FormParam("firstName") String firstName, @FormParam("lastName") String lastName, @FormParam("email") String email) throws JsonProcessingException {
		System.out.println(firstName);
		User u = new User();
		u.setFirstName(firstName);
		u.setLastName(lastName);
		u.setEmail(email);
		//return "test";
		return dataService.addUser(u);
	}
	@PUT
	@Consumes({"application/x-www-form-urlencoded"})
	public String updateUser(@FormParam("firstName") String firstName, @FormParam("lastName") String lastName, @FormParam("email") String email, @FormParam("id") int id) {
		System.out.println(id);
		return dataService.UpdateUser(firstName, lastName, email, id);
	}
}
