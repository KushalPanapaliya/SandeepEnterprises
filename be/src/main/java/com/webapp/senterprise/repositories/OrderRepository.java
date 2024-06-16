package com.webapp.senterprise.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.webapp.senterprise.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

	@Query("select o from Order o where o.user.id=:id")
	public List<Order> getOrderByUserId(Long id);
	//public List<Order> getOrderByProductId(Long id);
	
}
