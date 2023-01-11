package com.nammaflix.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nammaflix.demo.entity.User;
import com.nammaflix.demo.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getusers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}

}
