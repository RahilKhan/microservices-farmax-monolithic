package com.bpm.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CartItem {
	
    private int itemId;
    private String itemName;
    private int itemCount;
    
    public CartItem() { }
    
    public CartItem(int itemId, String itemName, int itemCount) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemCount = itemCount;
    }
    
    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getItemCount() {
        return itemCount;
    }

    public void setItemCount(int itemCount) {
        this.itemCount = itemCount;
    }

    public String getItemName() {
        return itemName;
    }

    public void setName(String name) {
        this.itemName = name;
    }

	@Override
	public String toString() {
		return "CartItem [itemId=" + itemId + ", itemName=" + itemName + ", itemCount=" + itemCount + "]";
	}  
    
}
