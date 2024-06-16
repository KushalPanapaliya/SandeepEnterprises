package com.webapp.senterprise.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.webapp.senterprise.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{

	@Query("select r from Review r where r.product.id=:id")
	public List<Review> getReviewByProductId(@Param("id") Long id);
	
	@Query("select r from Review r where r.user.id=:id")
	public List<Review> getReviewByUserId(@Param("id") Long id);
}
