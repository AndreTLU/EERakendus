package com.user.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.user.rest.api.UserRestResource;

import javax.ws.rs.core.Application;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;

public class UserRestTest extends JerseyTest{
	UserDataService dataService = new UserDataService();
	
	@Override
	protected Application configure() {
		return new ResourceConfig(UserRestResource.class);
	}
	
	@Test
	public void createNewUserTest() throws JsonProcessingException {
		User u = new User();
		u.setFirstName("Karl");
		u.setLastName("Saar");
		u.setEmail("karl.saar@hot.com");
		
		dataService.addUser(u);
		
		String response = target("users/1").request().get(String.class);
		Assert.assertTrue("id: 1".equals(response));
	}
}
