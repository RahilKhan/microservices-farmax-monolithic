package com.bpm.service;

import java.util.HashMap;
import java.util.List;

import com.bpm.model.CatalogItem;
import com.bpm.model.DashboardDetails;

public interface DashboardServiceInf {

	/**
	 * This service gets dashboard details based on user id
	 * @param userId
	 * @return
	 */
	public List getDashBoardDetails();

	public HashMap saveToCart(String cartItemList);

	public HashMap createUser(String userDetails);

	public List getCatalogDetails();
}
