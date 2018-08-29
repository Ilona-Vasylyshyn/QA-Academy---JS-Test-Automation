1. Write 4 XPath locators

	1.1 Wiki logo
	//*[@role='banner']

	1.2 Div element for Article count
	//div[@id="articlecount"]

	1.3 4-th item from "Did you know..." list
	//h2[contains(.,'Did you know...')]//following::*//ul/li[4]

	1.4 Count of 'Interaction' elements
	(//details | //dialog | //menu | //menuitem | //summary | //input | //select | //textarea | //button)

2.Write 4 CSS selectors

	2.1 Wiki logo
	[role='banner']

	2.2 Div element for Article count 
	deiv#articlecount

	2.3 Main page link
	#p-logo a[href*='Main_Page']
