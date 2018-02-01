package com.bpm.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bpm.model.DashboardDetails;
import com.bpm.service.DashboardServiceInf;
import com.google.gson.Gson;


@RestController
@RequestMapping("/dashboard")
public class DashboardController {
    
	@Autowired
	DashboardServiceInf dashboardService; 
	
	/**
	 * This service returns Dashboard details
	 * @return String
	 */
	@RequestMapping(value = "/getDashboardDetails", method = RequestMethod.GET)
	public @ResponseBody
	String getDashBoardDetails(HttpServletRequest request) {
		System.out.println("Dashboardcontroller : getDashBoardDetails()");
		String response = null;

//    	List<DashboardDetails> dashboardBeanList = dashboardService.getDashBoardDetails();
//    	response = new Gson().toJson(dashboardBeanList);
    	
    	return response;
	}

	/**
	 * This service returns Dashboard details
	 * @return String
	 */
	@RequestMapping(value = "/getCatalogDetails", method = RequestMethod.GET)
	public @ResponseBody
	String getCatalogDetails(HttpServletRequest request) {
		System.out.println("Dashboardcontroller : getCatalogDetails()");
		String response = null;

    	List<DashboardDetails> dashboardBeanList = dashboardService.getCatalogDetails();
    	response = new Gson().toJson(dashboardBeanList);
    	
    	return response;
	}
	
	/**
	 * This service save selected catalog item to cart
	 * @return String
	 */
	@RequestMapping(value = "/saveToCart", method = RequestMethod.POST)
	public @ResponseBody
	String saveToCart(HttpServletRequest request) {
		System.out.println("Dashboardcontroller : saveToCart()");
		
		String cartItemList = request.getParameter("postJson");
		System.out.println("\t cartItemList : " + cartItemList);
		String response = null;

    	HashMap cartItemMap = dashboardService.saveToCart(cartItemList);
    	response = new Gson().toJson(cartItemMap);
    	
    	return response;
	}
	
	/**
	 * This service creates user
	 * @return String
	 */
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public @ResponseBody
	String createUser(HttpServletRequest request) {
		System.out.println("Dashboardcontroller : createUser()");
		
		String userDetails = request.getParameter("postJson");
		String response = null;

    	HashMap userDetailsMap = dashboardService.createUser(userDetails);
    	response = new Gson().toJson(userDetailsMap);
    	
    	return response;
	}
	
}
