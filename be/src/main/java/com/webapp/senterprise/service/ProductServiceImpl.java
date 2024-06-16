package com.webapp.senterprise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.senterprise.entities.Product;
import com.webapp.senterprise.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;
	
	@Override
	public List<Product> getAllProduct() {
		return this.productRepository.findAll();
	}

	@Override
	public Object getProduct(Long id) {
		return this.productRepository.findById(id);
	}

	@Override
	public Product addProduct(Product product) {
		this.productRepository.save(product);
		return product;
	}

}
