package com.nammaflix.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cast {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long castId;
	private String castName;
	private String castType;
}
