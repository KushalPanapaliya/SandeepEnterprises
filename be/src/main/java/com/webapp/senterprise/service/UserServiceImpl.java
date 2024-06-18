package com.webapp.senterprise.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.senterprise.entities.User;
import com.webapp.senterprise.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@Override
	public Object getUser(Long id) {
		return userRepository.findById(id);
	}

	@Override
	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}

	@Override
	public User deleteUser(Long id) {
		Object u = userRepository.findById(id);
		userRepository.delete((User) u);
		return (User) u;
	}

	@Override
	public UserRepository updateUser(Long id, User user) {
		Object u = userRepository.findById(id);
		mapper.map(user, u);
		//((User) u).setId(id);
		return mapper.map(user, UserRepository.class);
	}

	
}
