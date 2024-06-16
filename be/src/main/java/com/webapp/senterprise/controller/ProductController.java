package com.webapp.senterprise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.senterprise.entities.Product;
import com.webapp.senterprise.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Product> getAllProduct(){
		return this.productService.getAllProduct();
	}
	
	@GetMapping("/product/{id}")
	public Object getProdtct(@PathVariable Long id) {
		return this.productService.getProduct(id);
	}
	
	@PostMapping("/product")
	@CrossOrigin(origins = "http://localhost:3000")
	public Product addProduct(@RequestBody Product product) {
		System.out.println(product.toString());
		return this.productService.addProduct(product);
	}
}
