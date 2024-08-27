package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.management.AttributeNotFoundException;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class MyController {
	

	
	@Autowired
	addbookrepo addbookrepo;
	@Autowired
	adminrepo admin;
	@Autowired 
	contactrepo contactrepo;
	@Autowired 
	regrepo regrepo;

	
	
//	addbook
	@RequestMapping("read")
	public List<addbook> read(){
		return addbookrepo.findAll();
	}
	

	
	@RequestMapping("add12{id}and{code}and{name}and{author}and{price}and{qnt}")
	public addbook add(@PathVariable int id,@PathVariable int code,@PathVariable String name,@PathVariable String author,@PathVariable int price,@PathVariable int qnt)
	{
		addbook addbook1=new addbook(id,code,name,author,price,qnt);
		addbook save=addbookrepo.save(addbook1);
		return save;
	}
	
	@RequestMapping("delete{id}")
	public boolean delete(@PathVariable int id)
	{
		addbookrepo.deleteById(id);
		return true;
	}
	
	
	
	
	
	
//	contact
	@RequestMapping("read1")
	public List<contact> read1(){
		return contactrepo.findAll();
	}
	
	
	
	@RequestMapping("add13{id}and{name}and{email}and{msg}")
	public contact add(@PathVariable int id,@PathVariable String name,@PathVariable String email,@PathVariable String msg)
	{
		contact contact1=new contact(id,name,email,msg);
		contact save=contactrepo.save(contact1);
		return save;
	}
	
	
	
// Register
	@RequestMapping("read2")
	public List<reg> read2(){
		return regrepo.findAll();
	}
	

	
	@RequestMapping("add14{id}and{username}and{email}and{password}")
	public reg add1(@PathVariable int id,@PathVariable String username,@PathVariable String email,@PathVariable String password)
	{
		reg reg1=new reg(id,username,email,password);
		reg save=regrepo.save(reg1);
		return save;
	}
	
	

	
//userlogin
	
	
	
	

// adminLogin
  @RequestMapping("alogin{username}and{password}")
	public int alogin(@PathVariable String username ,@PathVariable String password)
	{
		List<com.example.demo.admin> list=admin.findAll();
		for(com.example.demo.admin alogin:list)
		{
			if(alogin.getUsername().equals(username))
			{
				if(alogin.getPassword().equals(password))
				{
					return 1;
				}
				else
					
				{
					return 3;
				}
			}
		}
		return 2;
	}
	
	
  
  
  
 
}