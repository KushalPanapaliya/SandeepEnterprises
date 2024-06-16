package com.webapp.senterprise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Mycontroller {

	@GetMapping("/home")
	public String home() {
		return "Welcome to Home page";
	}
}
