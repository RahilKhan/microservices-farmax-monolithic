package com.bpm.service;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bpm.dao.inf.CurrencyDao;
import com.bpm.dao.inf.DashboardDaoInf;
import com.bpm.model.CartItem;
import com.bpm.model.CatalogItem;
import com.bpm.model.Currency;
import com.bpm.model.DashboardDetails;
import com.bpm.model.User;
import com.bpm.service.DashboardServiceInf;
//import org.codehaus.jettison.json.JSONObject;
import com.google.gson.Gson;

@Service("dashboardService")
@Transactional
public class DashboardServiceImpl implements DashboardServiceInf{
	private static Logger log = Logger.getLogger(DashboardServiceImpl.class.getName());
	
	@Autowired
	DashboardDaoInf dashboardDao;

	@Autowired
	CurrencyDao currencyDao;
	
	@Override
	public List getDashBoardDetails() {
		System.out.println("DashboardServiceImpl");
		List<DashboardDetails> dashboardList = dashboardDao.getDashBoardDetails();
		System.out.println("\t dashboardList.size() : " + dashboardList.size());
		
		List<Currency> currencyList = currencyDao.getAllCurrency();
		System.out.println("\t currencyList.size() : " + currencyList.size());
		
		return dashboardList;
	}

	@Override
	public List getCatalogDetails() {
		System.out.println("DashboardServiceImpl.java : getCatalogDetails()");
		
		List<CatalogItem> catalogItemList = dashboardDao.getCatalogDetails();
		System.out.println("\t catalogItemList.size() : " + catalogItemList.size());
		
		return catalogItemList;
	}
	
	@Override
	public HashMap saveToCart(String cartItemList) {
		log.info("DashboardServiceImpl.java : saveToCart()");
		System.out.println("\t cartItemList : " + cartItemList);
		
        Gson gsonObj = new Gson();

        HashMap cartMap = gsonObj.fromJson(cartItemList, HashMap.class);
		System.out.println("\t cartMap : " + cartMap.toString()); 
		
		HashMap cartItemMapResponse = dashboardDao.saveToCart(cartMap);
		System.out.println("\t cartItemListResponse.size() : " + cartItemMapResponse.size());
		log.info("\t cartItemListResponse.size() : " + cartItemMapResponse.size());
		return cartItemMapResponse;
	}

	@Override
	public HashMap createUser(String userDetails) {
		System.out.println("DashboardServiceImpl");
		HashMap userMap = dashboardDao.createUser(userDetails);
		System.out.println("\t userMap.size() : " + userMap.size());
		return userMap;
	}



	
}
