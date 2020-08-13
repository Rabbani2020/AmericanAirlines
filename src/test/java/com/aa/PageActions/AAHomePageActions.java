package com.aa.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import com.aa.PageElements.AAHomePageLocators;

import aa.utilities.SetupDrivers;

public class AAHomePageActions {
	AAHomePageLocators AAHomePageLocatorsObj;
	
	public AAHomePageActions(){
		AAHomePageLocatorsObj = new AAHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, AAHomePageLocatorsObj);
		
	}
	
	public void loadAAHomePage(){
		SetupDrivers.driver.manage().window().maximize();
		SetupDrivers.driver.get("https://www.aa.com/");
		SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	public void clickPlanTravel(){
		AAHomePageLocatorsObj.btnPlanTravel.click();
	}
	
	public void navigateBookFlightPage(){
		AAHomePageLocatorsObj.lnkFlights.click();
	}
}
