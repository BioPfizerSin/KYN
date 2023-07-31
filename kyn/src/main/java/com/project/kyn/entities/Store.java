package com.project.kyn.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
@EnableAutoConfiguration
@Table(name = "store")
public class Store {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "id")
	private int storeid;
	
	@Column(name = "store_name")
	private String storeName;
	
	@Column(name = "store_num")
	private String storeNumber;
	
	@Column(name = "store_location")
	private String storeLocation;

	public int getStoreid() {
		return storeid;
	}

	public void setStoreid(int storeid) {
		this.storeid = storeid;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getStoreNumber() {
		return storeNumber;
	}

	public void setStoreNumber(String storeNumber) {
		this.storeNumber = storeNumber;
	}

	public String getStoreLocation() {
		return storeLocation;
	}

	public void setStoreLocation(String storeLocation) {
		this.storeLocation = storeLocation;
	}

	public Store() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Store(int storeid, String storeName, String storeNumber, String storeLocation) {
		super();
		this.storeid = storeid;
		this.storeName = storeName;
		this.storeNumber = storeNumber;
		this.storeLocation = storeLocation;
	}
	
	
	
}