| TC# | Test Scenario                         | Steps                                                         | Expected Result                           |
|-----|---------------------------------------|---------------------------------------------------------------|-------------------------------------------|
| 1   | Basic search returns results          | Enter "Trenton" in search input, click Search                 | Listing cards for Trenton appears         |
| 2   | Price filter lower boundary           | Set min price to site minimum e.g. $100,000                   | Listings More Than $100,000 only Displayed|
| 3   | Price filter upper boundary           | Set max price to site maximum e.g. $5,000,000                 | Listings Less Than $5,000,000 only shown  |
| 4   | Bedrooms boundary                     | Set bedrooms to minimum e.g 1+                                | Listings with at least 1 bedroom          |
| 5   | Bedrooms upper boundary               | Set bedrooms to maximum available e.g 5+                      | Only listings with 5+ bedrooms            |
| 6   | Housing Type filter                   | Select "Single Family" from Housing Type filter               | Only Mississauga listings appear          |
| 7   | Pagination/Load more                  | Trigger "Load More" after initial results                     | Additional listings load correctly        |
| 8   | No results edge case                  | Search for city/price/bedrooms combo with no listings         | "No results" message is displayed         |
| 9   | Mandatory fields validation           | For any result, confirm presence of price, location, beds     | All listings show required fields         |
| 10  | Invalid input like wrong text         | Enter "@chdjkdjh" or non-alphanumeric in search               | Proper error or search validation         |




Exploratory Testing Charter:

Listing Search Edge Behaviors:

Goal: Identify unexpected behaviors, crashes, or usability issues with filters and search functionality on NewHomeSource Website.

Areas to Explore: Search input like Entering text, suggestions, boundary and invalid filter values, pagination and load more, mandatory field validations, error messages.

Time-box: 30 - 60  minutes

Heuristics: Boundary analysis (min/max), invalid input, combining filters in unusual ways, rapid navigation, missing data, API/network interruptions, UI feedback consistency.