package com.webapp.senterprise.entities;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="review")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Review extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "product_id", referencedColumnName="id")
	private Product product;
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id", referencedColumnName="id")
	private User user;
	@Column
	private Double rating;
	@Column
	private String comment;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime reviewDate;
}
