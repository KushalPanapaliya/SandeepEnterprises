package com.webapp.senterprise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.senterprise.entities.Cart;
import com.webapp.senterprise.repositories.CartRepository;

@Service
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CartRepository cartRepository;

	@Override
	public List<Cart> getCarts() {
		return cartRepository.findAll();
	}

	@Override
	public Object getCart(Long id) {
		return cartRepository.findById(id);
	}

	@Override
	public Cart addCart(Cart cart) {
		cartRepository.save(cart);
		return cart;
	}

	@Override
	public List<Cart> getCartByUser(Long id) {
		return cartRepository.getCartByUserID(id);
	}

}
