package com.example.demo;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	String email;
	String msg;
	
	
	
	
	public contact() {
		super();
		// TODO Auto-generated constructor stub
	}




	public contact(int id, String name, String email, String msg) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.msg = msg;
	}




	@Override
	public String toString() {
		return "contact [id=" + id + ", name=" + name + ", email=" + email + ", msg=" + msg + "]";
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getMsg() {
		return msg;
	}




	public void setMsg(String msg) {
		this.msg = msg;
	}




	public static List<contact> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}

