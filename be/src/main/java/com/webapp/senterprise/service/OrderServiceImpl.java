package com.webapp.senterprise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.webapp.senterprise.entities.Order;
import com.webapp.senterprise.repositories.OrderRepository;

public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	@Override
	public Order addOrder(Order order) {
		orderRepository.save(order);
		return order;
	}

//	@Override
//	public List<Order> getProductOrders(Long pId) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public List<Order> getUserOrders(Long uId) {
		return orderRepository.getOrderByUserId(uId);
	}

}
