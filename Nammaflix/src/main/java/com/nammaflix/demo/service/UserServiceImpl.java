package com.nammaflix.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nammaflix.demo.entity.User;
import com.nammaflix.demo.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	
}
