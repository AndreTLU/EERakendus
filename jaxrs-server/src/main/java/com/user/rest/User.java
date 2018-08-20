package com.user.rest;

import javax.xml.bind.annotation.XmlRootElement; 

@SuppressWarnings("restriction")
@XmlRootElement
public class User {

	private int id;
	private String firstName;
	private String lastName;
	private String email;
	
	public User() {}
	
	public User(int id) {
		this.id = id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setFirstName(String name) {
		this.firstName = name;
	}
	public void setLastName(String name) {
		this.lastName = name;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getFirstName() {
		return this.firstName;
	}
	public String getLastName() {
		return this.lastName;
	}
	public String getFullName() {
		return this.firstName+ " " +this.lastName;
	}
	
	public String getEmail() {
		return this.email;
	}
	
	public int getId() {
		return this.id;
	}
}
