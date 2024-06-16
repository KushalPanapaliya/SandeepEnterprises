package com.webapp.senterprise.service;

import java.util.List;

import com.webapp.senterprise.entities.OrderItem;

public interface OrderItemService {

	public Object getOrderItem(Long id);
	public List<OrderItem> getAllOrderItem();
	public List<OrderItem> getOrderItemByOrderId(Long id);
	public List<OrderItem> getOrderItemByProductId(Long id);
}
