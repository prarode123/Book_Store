package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class addbook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	int id;
	int code;
	String name;
	String author;
	int price;
	int qnt;
	
	
	public addbook(int id, int code, String name, String author, int price, int qnt) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.author = author;
		this.price = price;
		this.qnt = qnt;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getQnt() {
		return qnt;
	}
	public void setQnt(int qnt) {
		this.qnt = qnt;
	}
	public addbook() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "addbook [id=" + id + ", code=" + code + ", name=" + name + ", author=" + author + ", price=" + price
				+ ", qnt=" + qnt + "]";
	}
	
}