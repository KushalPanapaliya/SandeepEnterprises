package com.webapp.senterprise.service;

import java.util.List;

import com.webapp.senterprise.entities.Order;

public interface OrderService {

	public List<Order> getAllOrders();
	
	public Order addOrder(Order order);
	//public List<Order> getProductOrders(Long pId);
	public List<Order> getUserOrders(Long uId);
}
