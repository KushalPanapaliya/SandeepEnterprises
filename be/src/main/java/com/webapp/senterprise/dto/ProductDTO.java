package com.webapp.senterprise.dto;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class ProductDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private String name;
	private String description;
	private String catagory;
	private String material;
	private BigDecimal price;
	private String dimensions;
	private Double weight;
	private String color;
	private String imageUrl;
	private Long stock;
}