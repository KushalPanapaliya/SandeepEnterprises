package com.webapp.senterprise.service;

import java.util.List;

import com.webapp.senterprise.entities.Product;

public interface ProductService {

	public List<Product> getAllProduct();
	public Object getProduct(Long id);
	public Product addProduct(Product product);
	
}