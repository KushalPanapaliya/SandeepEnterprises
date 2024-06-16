package com.webapp.senterprise.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webapp.senterprise.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	@Query("select oi from OrderItem oi where oi.order.id=:id")
	public List<OrderItem> getOrderItemByOrderId(Long id);
	
	@Query("select oi from OrderItem oi where oi.product.id=:id")
	public List<OrderItem> getOrderItemByProductId(Long id);
}
