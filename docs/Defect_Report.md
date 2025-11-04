Sample Defect Report:



Title: Filter for Beds/Baths is Not Applied on the First Attempt



Environment: Prod or Dev or Staging, https://www.newhomesource.com/



Browser: Chrome, Edge



OS: Windows 11



Steps to Reproduce:



1. Navigate to https://www.newhomesource.com/



2\. Search for location: Trenton



3\. Open the Beds/Baths filter



4\. Select "3+" Bedrooms and "2+" Bathrooms



5\. Click "Apply Filters" button



Expected Result:



Page should update and display only listings with at least 3 bedrooms and 2 bathrooms.



Actual Result:



Page remains unchanged after first attempt, Filter must be applied a second time to display appropriate results.



Evidence:



ScreenRecording or Screenshots



Severity:



Medium - if there is any work around

High - Filter does not apply at all (means after the second attempt)



Suggested Fix:



Investigate if the filter "Apply" button triggers the correct backend/search request on the first click.



Check for throttling issues or missing event binding on the filter control.





