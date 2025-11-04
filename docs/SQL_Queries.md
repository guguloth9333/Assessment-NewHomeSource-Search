Table for Main Listings Page:



CREATE TABLE listings (

&nbsp; id INT PRIMARY KEY,

&nbsp; price DECIMAL(12,2),

&nbsp; bedrooms INT,

&nbsp; bathrooms INT,

&nbsp; address VARCHAR(255),

&nbsp; community VARCHAR(100),

&nbsp; image\_url VARCHAR(255),

&nbsp; rating DECIMAL(3,2),

&nbsp; brochure\_url VARCHAR(255)

);





1. Validate listings within price range selected by filter:



SELECT id, price, bedrooms, bathrooms

FROM listings

WHERE price BETWEEN 350000 AND 400000

&nbsp; AND bedrooms >= 3

&nbsp; AND bathrooms >= 2;



2\. Find listings if any required fields missing:



SELECT id, address, price, image\_url, brochure\_url

FROM listings

WHERE address IS NULL OR price IS NULL OR image\_url IS NULL OR brochure\_url IS NULL;





3\. Price outside the boundary Values:



SELECT id, price

FROM listings

WHERE price < 50000 OR price > 5000000;





