package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.Product;
import com.exam.repo.ProductRepo;

@RestController
@RequestMapping("/product/vi")
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductRepo productrepo;
	
	@GetMapping("/allproducts")
	public List<Product> getProducts(){
		return productrepo.findAll();
	}
	@GetMapping("/welcome")
	public String getall() {
		return "welcome";
	}
	
	@PostMapping("/addproduct")
	public Product addProduct(@RequestBody Product product) {
		Product product1 = productrepo.save(product);
		return product1;
		
	}
	@DeleteMapping("/products/{id}")
	public String deleteemp(@PathVariable Integer id){
		Product delproduct=productrepo.getById(id);
		productrepo.delete(delproduct);
		return "deleted";
	}
	
	

}
