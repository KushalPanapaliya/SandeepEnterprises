package com.webapp.senterprise.service;

import java.util.List;

import com.webapp.senterprise.entities.User;
import com.webapp.senterprise.repositories.UserRepository;

public interface UserService {

	public List<User> getAllUsers();
	public Object getUser(Long id);
	public User addUser(User user);
	public User deleteUser(Long id);
	public UserRepository updateUser(Long id, User user);
}
