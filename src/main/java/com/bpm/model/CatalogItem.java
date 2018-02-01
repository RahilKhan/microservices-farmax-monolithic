package com.bpm.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CatalogItem implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int id;
    private String name;
    private String type;
    private String manufacturer;
    private String cost;
    private String description;
    private String discount;
    private String availability;
    
    public CatalogItem() { }

    public CatalogItem(String name, String type,String manufacturer,String cost,String discount,String availability) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.cost = cost;
        this.discount = discount;
        this.availability = availability;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public String getDiscount() {
		return discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "CatalogItem [id=" + id + ", name=" + name + ", type=" + type + ", manufacturer=" + manufacturer
				+ ", cost=" + cost + ", description=" + description + ", discount=" + discount + ", availability="
				+ availability + "]";
	}	
	
}
