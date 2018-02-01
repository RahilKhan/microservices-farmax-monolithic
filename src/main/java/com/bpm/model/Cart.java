package com.bpm.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
//import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;


public class Cart implements Serializable {
    private List<CartItem> items;
    
    @Autowired
    CartItem currentCartItem;
    
    public List<CartItem> getItems() {
        return items;
    }
    
    public void addItemToCart() {
    	System.out.println("Cart.java : addItemToCart()");
    }
    
    public void clearCart() {
    	System.out.println("Cart.java : clearCart()");
        items.clear();
    }
}
