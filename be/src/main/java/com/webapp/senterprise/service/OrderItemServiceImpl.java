package com.webapp.senterprise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.webapp.senterprise.entities.OrderItem;
import com.webapp.senterprise.repositories.OrderItemRepository;

public class OrderItemServiceImpl implements OrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Override
	public Object getOrderItem(Long id) {
		return orderItemRepository.findById(id);
	}

	@Override
	public List<OrderItem> getAllOrderItem() {
		return orderItemRepository.findAll();
	}

	@Override
	public List<OrderItem> getOrderItemByOrderId(Long id) {
		return orderItemRepository.getOrderItemByOrderId(id);
	}

	@Override
	public List<OrderItem> getOrderItemByProductId(Long id) {
		return orderItemRepository.getOrderItemByProductId(id);
	}

}