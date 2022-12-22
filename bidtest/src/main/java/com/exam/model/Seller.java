package com.exam.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



@Entity
@Table(name="Seller")
public class Seller {
	@Id
	@Column(name = "Seller_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
	@SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
	private Integer sellerID;
	
	
	private String sellerName;
	
	private String sellerEmail;
	
	private String sellerAddress;
	
	private Long sellerNumber;
	
	private Integer productID;
	
	private String productName;
	
	private String productDescription;
	
	private Double productStartamt;
	
	private Double productPrice;
	private Date productBiddingdate;
	
	private String productCategory;
	
	public Seller() {
		super();
	}

	public Seller(Integer sellerID, String sellerName, String sellerEmail, String sellerAddress, Long sellerNumber,
			String productName, String productDescription, Double productStartamt, Double productPrice,
			Date productBiddingdate, String productCategory) {
		super();
		this.sellerID = sellerID;
		this.sellerName = sellerName;
		this.sellerEmail = sellerEmail;
		this.sellerAddress = sellerAddress;
		this.sellerNumber = sellerNumber;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productStartamt = productStartamt;
		this.productPrice = productPrice;
		this.productBiddingdate = productBiddingdate;
		this.productCategory = productCategory;
	}

	public Integer getSellerID() {
		return sellerID;
	}

	public void setSellerID(Integer sellerID) {
		this.sellerID = sellerID;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getSellerEmail() {
		return sellerEmail;
	}

	public void setSellerEmail(String sellerEmail) {
		this.sellerEmail = sellerEmail;
	}

	public String getSellerAddress() {
		return sellerAddress;
	}

	public void setSellerAddress(String sellerAddress) {
		this.sellerAddress = sellerAddress;
	}

	public Long getSellerNumber() {
		return sellerNumber;
	}

	public void setSellerNumber(Long sellerNumber) {
		this.sellerNumber = sellerNumber;
	}

	public Integer getProductID() {
		return productID;
	}

	public void setProductID(Integer productID) {
		this.productID = productID;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Double getProductStartamt() {
		return productStartamt;
	}

	public void setProductStartamt(Double productStartamt) {
		this.productStartamt = productStartamt;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public Date getProductBiddingdate() {
		return productBiddingdate;
	}

	public void setProductBiddingdate(Date productBiddingdate) {
		this.productBiddingdate = productBiddingdate;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	
	
}
