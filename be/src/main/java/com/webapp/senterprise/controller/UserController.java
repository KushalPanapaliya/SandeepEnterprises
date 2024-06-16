package com.webapp.senterprise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.senterprise.service.UserService;
import com.webapp.senterprise.entities.User;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.userService.getAllUsers();
	}
	
	@GetMapping("/users/{uid}")
	public Object getUser(Long uid) {
		return this.userService.getUser(uid);
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		System.out.println(user.toString());
		return this.userService.addUser(user);
	}
	
	@DeleteMapping("/users")
	public User deleteUser(@RequestBody Long id) {
		return this.userService.deleteUser(id);
	}
}