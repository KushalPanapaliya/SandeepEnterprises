package com.webapp.senterprise.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.senterprise.entities.Review;
import com.webapp.senterprise.repositories.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewRepository reviewRepository;
	
	@Override
	public Review getReview(Long id) {
		return reviewRepository.getOne(id);
	}

	@Override
	public Review addReview(Review review) {
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getProductReviews(Long pId) {
		return reviewRepository.getReviewByProductId(pId);
	}

	@Override
	public List<Review> getUserReviews(Long uId) {
		return reviewRepository.getReviewByUserId(uId);
	}

	

}
