package com.webapp.senterprise.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.senterprise.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
