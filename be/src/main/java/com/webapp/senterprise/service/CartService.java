package com.webapp.senterprise.service;

import java.util.List;

import com.webapp.senterprise.entities.Cart;

public interface CartService {

	public List<Cart> getCarts();
	public Object getCart(Long id);
	public Cart addCart(Cart cart);
	public List<Cart> getCartByUser(Long id);
}
