const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database");
    db.serialize(() => {
      db.run(
        `CREATE TABLE representatives (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        locality TEXT NOT NULL,
        name TEXT NOT NULL,
        designation TEXT NOT NULL,
        phone TEXT,
        email TEXT
    )`,
        (err) => {
          if (err) {
            console.error("Error creating table:", err.message);
          }
        }
      );

      // Pre-populate data for all states and UTs in India
      const representatives = [
        // Andhra Pradesh
        {
          locality: "Andhra Pradesh",
          name: "Y. S. Jagan Mohan Reddy",
          designation: "Chief Minister",
          phone: "1234567890",
          email: "cm@ap.gov.in",
        },
        {
          locality: "Andhra Pradesh",
          name: "Galla Jayadev",
          designation: "MP",
          phone: "9876543210",
          email: "mp@ap.gov.in",
        },
        {
          locality: "Andhra Pradesh",
          name: "B. Chandra Mohan",
          designation: "MLA",
          phone: "2233445567",
          email: "mla@ap.gov.in",
        },
        {
          locality: "Andhra Pradesh",
          name: "M. Gurumoorthy",
          designation: "MLA",
          phone: "3344556678",
          email: "mla@ap.gov.in",
        },
        // Arunachal Pradesh
        {
          locality: "Arunachal Pradesh",
          name: "Pema Khandu",
          designation: "Chief Minister",
          phone: "0987654321",
          email: "cm@arunachal.gov.in",
        },
        {
          locality: "Arunachal Pradesh",
          name: "Tapir Gao",
          designation: "MP",
          phone: "2345678901",
          email: "mp@arunachal.gov.in",
        },
        {
          locality: "Arunachal Pradesh",
          name: "Taba Tedir",
          designation: "MLA",
          phone: "4455667789",
          email: "mla@arunachal.gov.in",
        },
        {
          locality: "Arunachal Pradesh",
          name: "Mama Natung",
          designation: "MLA",
          phone: "5566778890",
          email: "mla@arunachal.gov.in",
        },
        // Assam
        {
          locality: "Assam",
          name: "Himanta Biswa Sarma",
          designation: "Chief Minister",
          phone: "1122334455",
          email: "cm@assam.gov.in",
        },
        {
          locality: "Assam",
          name: "Queen Oja",
          designation: "MP",
          phone: "9988776655",
          email: "mp@assam.gov.in",
        },
        {
          locality: "Assam",
          name: "Rituparna Baruah",
          designation: "MLA",
          phone: "6677889901",
          email: "mla@assam.gov.in",
        },
        {
          locality: "Assam",
          name: "Utpal Borah",
          designation: "MLA",
          phone: "7788990012",
          email: "mla@assam.gov.in",
        },
        // Bihar
        {
          locality: "Bihar",
          name: "Nitish Kumar",
          designation: "Chief Minister",
          phone: "6677889900",
          email: "cm@bihar.gov.in",
        },
        {
          locality: "Bihar",
          name: "Ravi Shankar Prasad",
          designation: "MP",
          phone: "5566778899",
          email: "mp@bihar.gov.in",
        },
        {
          locality: "Bihar",
          name: "Maheshwar Yadav",
          designation: "MLA",
          phone: "8899001123",
          email: "mla@bihar.gov.in",
        },
        {
          locality: "Bihar",
          name: "Lalan Singh",
          designation: "MLA",
          phone: "9900112234",
          email: "mla@bihar.gov.in",
        },
        // Chhattisgarh
        {
          locality: "Chhattisgarh",
          name: "Vishnu Deo Sai",
          designation: "Chief Minister",
          phone: "1122334456",
          email: "cm@chhattisgarh.gov.in",
        },
        {
          locality: "Chhattisgarh",
          name: "Deepak Baij",
          designation: "MP",
          phone: "2233445566",
          email: "mp@chhattisgarh.gov.in",
        },
        {
          locality: "Chhattisgarh",
          name: "Shivratan Sharma",
          designation: "MLA",
          phone: "3344556677",
          email: "mla@chhattisgarh.gov.in",
        },
        {
          locality: "Chhattisgarh",
          name: "Nand Kumar Sai",
          designation: "MLA",
          phone: "4455667788",
          email: "mla@chhattisgarh.gov.in",
        },
        // Goa
        {
          locality: "Goa",
          name: "Pramod Sawant",
          designation: "Chief Minister",
          phone: "9988776655",
          email: "cm@goa.gov.in",
        },
        {
          locality: "Goa",
          name: "Shripad Naik",
          designation: "MP",
          phone: "8877665544",
          email: "mp@goa.gov.in",
        },
        {
          locality: "Goa",
          name: "Vinod Palyekar",
          designation: "MLA",
          phone: "9988776611",
          email: "mla@goa.gov.in",
        },
        {
          locality: "Goa",
          name: "Isidore Fernandes",
          designation: "MLA",
          phone: "6677886655",
          email: "mla@goa.gov.in",
        },
        // Gujarat
        {
          locality: "Gujarat",
          name: "Bhupendra Patel",
          designation: "Chief Minister",
          phone: "1010101010",
          email: "cm@gujarat.gov.in",
        },
        {
          locality: "Gujarat",
          name: "Amit Shah",
          designation: "MP",
          phone: "2020202020",
          email: "mp@gujarat.gov.in",
        },
        {
          locality: "Gujarat",
          name: "Nitin Patel",
          designation: "MLA",
          phone: "3030303030",
          email: "mla@gujarat.gov.in",
        },
        {
          locality: "Gujarat",
          name: "Shankar Chaudhary",
          designation: "MLA",
          phone: "4040404040",
          email: "mla@gujarat.gov.in",
        },
        // Haryana
        {
          locality: "Haryana",
          name: "Manohar Lal Khattar",
          designation: "Chief Minister",
          phone: "5050505050",
          email: "cm@haryana.gov.in",
        },
        {
          locality: "Haryana",
          name: "Deepender Hooda",
          designation: "MP",
          phone: "6060606060",
          email: "mp@haryana.gov.in",
        },
        {
          locality: "Haryana",
          name: "Anil Vij",
          designation: "MLA",
          phone: "7070707070",
          email: "mla@haryana.gov.in",
        },
        {
          locality: "Haryana",
          name: "Kamal Gupta",
          designation: "MLA",
          phone: "8080808080",
          email: "mla@haryana.gov.in",
        },
        // Himachal Pradesh
        {
          locality: "Himachal Pradesh",
          name: "Jai Ram Thakur",
          designation: "Chief Minister",
          phone: "9090909090",
          email: "cm@himachal.gov.in",
        },
        {
          locality: "Himachal Pradesh",
          name: "Shanta Kumar",
          designation: "MP",
          phone: "9191919191",
          email: "mp@himachal.gov.in",
        },
        {
          locality: "Himachal Pradesh",
          name: "Rohit Thakur",
          designation: "MLA",
          phone: "9292929292",
          email: "mla@himachal.gov.in",
        },
        {
          locality: "Himachal Pradesh",
          name: "Suresh Kumar",
          designation: "MLA",
          phone: "9393939393",
          email: "mla@himachal.gov.in",
        },
        // Jharkhand
        {
          locality: "Jharkhand",
          name: "Hemant Soren",
          designation: "Chief Minister",
          phone: "4445556666",
          email: "cm@jharkhand.gov.in",
        },
        {
          locality: "Jharkhand",
          name: "Shibu Soren",
          designation: "MP",
          phone: "5556667777",
          email: "mp@jharkhand.gov.in",
        },
        {
          locality: "Jharkhand",
          name: "Raghubar Das",
          designation: "MLA",
          phone: "6667778888",
          email: "mla@jharkhand.gov.in",
        },
        {
          locality: "Jharkhand",
          name: "Dilip Kumar",
          designation: "MLA",
          phone: "7778889999",
          email: "mla@jharkhand.gov.in",
        },
        // Karnataka
        {
          locality: "Karnataka",
          name: "Basavaraj Bommai",
          designation: "Chief Minister",
          phone: "1112223333",
          email: "cm@karnataka.gov.in",
        },
        {
          locality: "Karnataka",
          name: "Siddaramaiah",
          designation: "MP",
          phone: "4445556666",
          email: "mp@karnataka.gov.in",
        },
        {
          locality: "Karnataka",
          name: "K. S. Eshwarappa",
          designation: "MLA",
          phone: "5556667777",
          email: "mla@karnataka.gov.in",
        },
        {
          locality: "Karnataka",
          name: "Priyanka Chikkali",
          designation: "MLA",
          phone: "6667778888",
          email: "mla@karnataka.gov.in",
        },
        // Kerala
        {
          locality: "Kerala",
          name: "Pinarayi Vijayan",
          designation: "Chief Minister",
          phone: "3334445555",
          email: "cm@kerala.gov.in",
        },
        {
          locality: "Kerala",
          name: "K. C. Venugopal",
          designation: "MP",
          phone: "8889990000",
          email: "mp@kerala.gov.in",
        },
        {
          locality: "Kerala",
          name: "M. K. Raghavan",
          designation: "MLA",
          phone: "9990001111",
          email: "mla@kerala.gov.in",
        },
        {
          locality: "Kerala",
          name: "A. K. Antony",
          designation: "MLA",
          phone: "1112223333",
          email: "mla@kerala.gov.in",
        },
        // Madhya Pradesh
        {
          locality: "Madhya Pradesh",
          name: "Shivraj Singh Chouhan",
          designation: "Chief Minister",
          phone: "6677889900",
          email: "cm@mp.gov.in",
        },
        {
          locality: "Madhya Pradesh",
          name: "Jyotiraditya Scindia",
          designation: "MP",
          phone: "1234567890",
          email: "mp@mp.gov.in",
        },
        {
          locality: "Madhya Pradesh",
          name: "Nand Kumar Patel",
          designation: "MLA",
          phone: "2233445566",
          email: "mla@mp.gov.in",
        },
        {
          locality: "Madhya Pradesh",
          name: "Rameshwar Sharma",
          designation: "MLA",
          phone: "3344556677",
          email: "mla@mp.gov.in",
        },
        // Maharashtra
        {
          locality: "Maharashtra",
          name: "Uddhav Thackeray",
          designation: "Chief Minister",
          phone: "6677889900",
          email: "cm@maharashtra.gov.in",
        },
        {
          locality: "Maharashtra",
          name: "Amit Deshmukh",
          designation: "MP",
          phone: "5566778899",
          email: "mp@maharashtra.gov.in",
        },
        {
          locality: "Maharashtra",
          name: "Devendra Fadnavis",
          designation: "MLA",
          phone: "4455667788",
          email: "mla@maharashtra.gov.in",
        },
        {
          locality: "Maharashtra",
          name: "Sanjay Raut",
          designation: "MLA",
          phone: "3344556677",
          email: "mla@maharashtra.gov.in",
        },
        // Manipur
        {
          locality: "Manipur",
          name: "N. Biren Singh",
          designation: "Chief Minister",
          phone: "2233445566",
          email: "cm@manipur.gov.in",
        },
        {
          locality: "Manipur",
          name: "M. S. Kiran Kumar",
          designation: "MP",
          phone: "3344556677",
          email: "mp@manipur.gov.in",
        },
        {
          locality: "Manipur",
          name: "Kh. Joykisan Singh",
          designation: "MLA",
          phone: "4455667788",
          email: "mla@manipur.gov.in",
        },
        {
          locality: "Manipur",
          name: "Thounaojam Shyamkumar",
          designation: "MLA",
          phone: "5566778899",
          email: "mla@manipur.gov.in",
        },
        // Meghalaya
        {
          locality: "Meghalaya",
          name: "Conrad K. Sangma",
          designation: "Chief Minister",
          phone: "1122334455",
          email: "cm@meghalaya.gov.in",
        },
        {
          locality: "Meghalaya",
          name: "Agatha Sangma",
          designation: "MP",
          phone: "2233445566",
          email: "mp@meghalaya.gov.in",
        },
        {
          locality: "Meghalaya",
          name: "Nongthombam Biren Singh",
          designation: "MLA",
          phone: "3344556677",
          email: "mla@meghalaya.gov.in",
        },
        {
          locality: "Meghalaya",
          name: "James K. Sangma",
          designation: "MLA",
          phone: "4455667788",
          email: "mla@meghalaya.gov.in",
        },
        // Mizoram
        {
          locality: "Mizoram",
          name: "Zoramthanga",
          designation: "Chief Minister",
          phone: "5566778899",
          email: "cm@mizoram.gov.in",
        },
        {
          locality: "Mizoram",
          name: "Lalchhandama Ralte",
          designation: "MP",
          phone: "6677889900",
          email: "mp@mizoram.gov.in",
        },
        {
          locality: "Mizoram",
          name: "R. Lalthangliana",
          designation: "MLA",
          phone: "7788990011",
          email: "mla@mizoram.gov.in",
        },
        {
          locality: "Mizoram",
          name: "C. Lalrosanga",
          designation: "MLA",
          phone: "8899001122",
          email: "mla@mizoram.gov.in",
        },
        // Nagaland
        {
          locality: "Nagaland",
          name: "Neiphiu Rio",
          designation: "Chief Minister",
          phone: "1122334455",
          email: "cm@nagaland.gov.in",
        },
        {
          locality: "Nagaland",
          name: "T.R. Zeliang",
          designation: "MP",
          phone: "2233445566",
          email: "mp@nagaland.gov.in",
        },
        {
          locality: "Nagaland",
          name: "P. Longon",
          designation: "MLA",
          phone: "3344556677",
          email: "mla@nagaland.gov.in",
        },
        {
          locality: "Nagaland",
          name: "K. P. Yaden",
          designation: "MLA",
          phone: "4455667788",
          email: "mla@nagaland.gov.in",
        },
        // Odisha
        {
          locality: "Odisha",
          name: "Naveen Patnaik",
          designation: "Chief Minister",
          phone: "1234567890",
          email: "cm@odisha.gov.in",
        },
        {
          locality: "Odisha",
          name: "Damareswar Thakur",
          designation: "MP",
          phone: "2345678901",
          email: "mp@odisha.gov.in",
        },
        {
          locality: "Odisha",
          name: "Pradip Kumar Amat",
          designation: "MLA",
          phone: "4455667789",
          email: "mla@odisha.gov.in",
        },
        {
          locality: "Odisha",
          name: "Debi Prasad Mishra",
          designation: "MLA",
          phone: "5566778890",
          email: "mla@odisha.gov.in",
        },
        // Punjab
        {
          locality: "Punjab",
          name: "Amarinder Singh",
          designation: "Chief Minister",
          phone: "6677889900",
          email: "cm@punjab.gov.in",
        },
        {
          locality: "Punjab",
          name: "Harsimrat Kaur Badal",
          designation: "MP",
          phone: "7788990011",
          email: "mp@punjab.gov.in",
        },
        {
          locality: "Punjab",
          name: "Balbir Singh Sidhu",
          designation: "MLA",
          phone: "8899001122",
          email: "mla@punjab.gov.in",
        },
        {
          locality: "Punjab",
          name: "Jaswinder Singh",
          designation: "MLA",
          phone: "9900112233",
          email: "mla@punjab.gov.in",
        },

        // Rajasthan
        {
          locality: "Rajasthan",
          name: "Gajendra Singh Shekhawat",
          designation: "MP",
          phone: "9900112335",
          email: "mp@rajasthan.gov.in",
        },
        {
          locality: "Rajasthan",
          name: "Kailash Chandra Meena",
          designation: "MP",
          phone: "9988776654",
          email: "mp@rajasthan.gov.in",
        },
        {
          locality: "Rajasthan",
          name: "Ashok Gehlot",
          designation: "Chief Minister",
          phone: "2233445561",
          email: "cm@rajasthan.gov.in",
        },
        {
          locality: "Rajasthan",
          name: "Raghu Sharma",
          designation: "MLA",
          phone: "4455667789",
          email: "mla@rajasthan.gov.in",
        },

        // Sikkim
        {
          locality: "Sikkim",
          name: "Prem Singh Tamang",
          designation: "Chief Minister",
          phone: "0011223346",
          email: "cm@sikkim.gov.in",
        },
        {
          locality: "Sikkim",
          name: "Indra Hang Subba",
          designation: "MP",
          phone: "1122334457",
          email: "mp@sikkim.gov.in",
        },
        {
          locality: "Sikkim",
          name: "D.D. Bhutia",
          designation: "MLA",
          phone: "2233445562",
          email: "mla@sikkim.gov.in",
        },

        // Tamil Nadu
        {
          locality: "Tamil Nadu",
          name: "M. K. Stalin",
          designation: "Chief Minister",
          phone: "2233445568",
          email: "cm@tn.gov.in",
        },
        {
          locality: "Tamil Nadu",
          name: "Kanimozhi",
          designation: "MP",
          phone: "3344556679",
          email: "mp@tn.gov.in",
        },
        {
          locality: "Tamil Nadu",
          name: "O. Panneerselvam",
          designation: "MLA",
          phone: "5566778890",
          email: "mla@tn.gov.in",
        },

        // Telangana
        {
          locality: "Telangana",
          name: "A. Revanth Reddy",
          designation: "Chief Minister",
          phone: "4455667790",
          email: "cm@telangana.gov.in",
        },
        {
          locality: "Telangana",
          name: "G. Kishan Reddy",
          designation: "MP",
          phone: "5566778891",
          email: "mp@telangana.gov.in",
        },
        {
          locality: "Telangana",
          name: "K. Kavitha",
          designation: "MLA",
          phone: "6677889903",
          email: "mla@telangana.gov.in",
        },

        // Tripura
        {
          locality: "Tripura",
          name: "Manik Saha",
          designation: "Chief Minister",
          phone: "6677889902",
          email: "cm@tripura.gov.in",
        },
        {
          locality: "Tripura",
          name: "Pratima Bhoumik",
          designation: "MP",
          phone: "7788990013",
          email: "mp@tripura.gov.in",
        },
        {
          locality: "Tripura",
          name: "Sudip Roy Barman",
          designation: "MLA",
          phone: "8899001128",
          email: "mla@tripura.gov.in",
        },

        // Uttar Pradesh
        {
          locality: "Uttar Pradesh",
          name: "Yogi Adityanath",
          designation: "Chief Minister",
          phone: "8899001125",
          email: "cm@up.gov.in",
        },
        {
          locality: "Uttar Pradesh",
          name: "Rajnath Singh",
          designation: "MP",
          phone: "9900112336",
          email: "mp@up.gov.in",
        },
        {
          locality: "Uttar Pradesh",
          name: "Dinesh Sharma",
          designation: "MLA",
          phone: "1122334499",
          email: "mla@up.gov.in",
        },

        // Uttarakhand
        {
          locality: "Uttarakhand",
          name: "Pushkar Singh Dhami",
          designation: "Chief Minister",
          phone: "0011223347",
          email: "cm@uttarakhand.gov.in",
        },
        {
          locality: "Uttarakhand",
          name: "Ajay Bhatt",
          designation: "MP",
          phone: "1122334458",
          email: "mp@uttarakhand.gov.in",
        },
        {
          locality: "Uttarakhand",
          name: "Harbans Kapoor",
          designation: "MLA",
          phone: "2233445569",
          email: "mla@uttarakhand.gov.in",
        },

        // West Bengal
        {
          locality: "West Bengal",
          name: "Mamata Banerjee",
          designation: "Chief Minister",
          phone: "2233445569",
          email: "cm@wb.gov.in",
        },
        {
          locality: "West Bengal",
          name: "Abhishek Banerjee",
          designation: "MP",
          phone: "3344556670",
          email: "mp@wb.gov.in",
        },
        {
          locality: "West Bengal",
          name: "Suvendu Adhikari",
          designation: "MLA",
          phone: "5566778893",
          email: "mla@wb.gov.in",
        },

        // Andaman and Nicobar Islands
        {
          locality: "Andaman and Nicobar Islands",
          name: "Admiral D K Joshi",
          designation: "Lieutenant Governor",
          phone: "4455667781",
          email: "lg@andaman.gov.in",
        },
        {
          locality: "Andaman and Nicobar Islands",
          name: "Kuldeep Rai Sharma",
          designation: "MP",
          phone: "5566778882",
          email: "mp@andaman.gov.in",
        },
        {
          locality: "Andaman and Nicobar Islands",
          name: "Rupendra Bhuvan",
          designation: "MLA",
          phone: "6677889985",
          email: "mla@andaman.gov.in",
        },

        // Chandigarh
        {
          locality: "Chandigarh",
          name: "Banwarilal Purohit",
          designation: "Administrator",
          phone: "6677889983",
          email: "admin@chandigarh.gov.in",
        },
        {
          locality: "Chandigarh",
          name: "Kirron Kher",
          designation: "MP",
          phone: "7788990084",
          email: "mp@chandigarh.gov.in",
        },
        {
          locality: "Chandigarh",
          name: "Gurpreet Singh",
          designation: "MLA",
          phone: "8899001195",
          email: "mla@chandigarh.gov.in",
        },

        // Dadra and Nagar Haveli and Daman and Diu
        {
          locality: "Dadra and Nagar Haveli and Daman and Diu",
          name: "Praful Patel",
          designation: "Administrator",
          phone: "8899001185",
          email: "admin@dnhdd.gov.in",
        },
        {
          locality: "Dadra and Nagar Haveli and Daman and Diu",
          name: "Lalubhai Patel",
          designation: "MP",
          phone: "9900112286",
          email: "mp@dnhdd.gov.in",
        },
        {
          locality: "Dadra and Nagar Haveli and Daman and Diu",
          name: "Vijay Naik",
          designation: "MLA",
          phone: "1122334459",
          email: "mla@dnhdd.gov.in",
        },

        // Delhi
        {
          locality: "Delhi",
          name: "Vinai Kumar Saxena",
          designation: "Lieutenant Governor",
          phone: "0011223387",
          email: "lg@delhi.gov.in",
        },
        {
          locality: "Delhi",
          name: "Arvind Kejriwal",
          designation: "Chief Minister",
          phone: "1122334488",
          email: "cm@delhi.gov.in",
        },
        {
          locality: "Delhi",
          name: "Manoj Tiwari",
          designation: "MP",
          phone: "2233445589",
          email: "mp@delhi.gov.in",
        },
        {
          locality: "Delhi",
          name: "Saurabh Bharadwaj",
          designation: "MLA",
          phone: "3344556698",
          email: "mla@delhi.gov.in",
        },

        // Jammu and Kashmir
        {
          locality: "Jammu and Kashmir",
          name: "Manoj Sinha",
          designation: "Lieutenant Governor",
          phone: "3344556690",
          email: "lg@jk.gov.in",
        },
        {
          locality: "Jammu and Kashmir",
          name: "Farooq Abdullah",
          designation: "MP",
          phone: "4455667791",
          email: "mp@jk.gov.in",
        },
        {
          locality: "Jammu and Kashmir",
          name: "Devender Singh Rana",
          designation: "MLA",
          phone: "5566778894",
          email: "mla@jk.gov.in",
        },

        // Ladakh
        {
          locality: "Ladakh",
          name: "B D Mishra",
          designation: "Lieutenant Governor",
          phone: "5566778892",
          email: "lg@ladakh.gov.in",
        },
        {
          locality: "Ladakh",
          name: "Jamyang Tsering Namgyal",
          designation: "MP",
          phone: "6677889993",
          email: "mp@ladakh.gov.in",
        },
        {
          locality: "Ladakh",
          name: "Ghulam Ahmed",
          designation: "MLA",
          phone: "7788990095",
          email: "mla@ladakh.gov.in",
        },

        // Lakshadweep
        {
          locality: "Lakshadweep",
          name: "Praful Patel",
          designation: "Administrator",
          phone: "7788990094",
          email: "admin@lakshadweep.gov.in",
        },
        {
          locality: "Lakshadweep",
          name: "Mohammed Faizal P. P.",
          designation: "MP",
          phone: "8899001195",
          email: "mp@lakshadweep.gov.in",
        },
        {
          locality: "Lakshadweep",
          name: "Ashraf Ali",
          designation: "MLA",
          phone: "9900112297",
          email: "mla@lakshadweep.gov.in",
        },

        // Puducherry
        {
          locality: "Puducherry",
          name: "Tamilisai Soundararajan",
          designation: "Lieutenant Governor",
          phone: "9900112296",
          email: "lg@puducherry.gov.in",
        },
        {
          locality: "Puducherry",
          name: "N. Rangasamy",
          designation: "Chief Minister",
          phone: "0011223397",
          email: "cm@puducherry.gov.in",
        },
        {
          locality: "Puducherry",
          name: "V. Vaithilingam",
          designation: "MP",
          phone: "1122334498",
          email: "mp@puducherry.gov.in",
        },
        {
          locality: "Puducherry",
          name: "M. D. R. P. Raghavan",
          designation: "MLA",
          phone: "2233445590",
          email: "mla@puducherry.gov.in",
        },
      ];

      const insertStmt = db.prepare(
        `INSERT INTO representatives (locality, name, designation, phone, email) VALUES (?, ?, ?, ?, ?)`
      );
      representatives.forEach((rep) => {
        insertStmt.run(
          rep.locality,
          rep.name,
          rep.designation,
          rep.phone,
          rep.email
        );
      });
      insertStmt.finalize();

      console.log("Pre-populated representative data with MLAs and MPs");
    });
  }
});

// GET root path
app.get("/", (req, res) => {
  res.send("helloo comrade");
});

// Helper function to format locality
function formatLocality(str) {
  // Remove extra spaces and normalize spaces/dashes/underscores
  str = str.trim().replace(/[-_\s]+/g, " ");

  // Handle empty or invalid input
  if (!str) {
    throw new Error("Empty locality name");
  }

  // Convert to title case
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// GET /representatives/:locality
app.get("/representatives/:locality", (req, res) => {
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");
  let { locality } = req.params;

  // URL decode and clean up locality
  try {
    locality = decodeURIComponent(locality);
    console.log("Raw locality parameter:", locality);
    locality = formatLocality(locality);
    console.log("Formatted locality:", locality);
  } catch (e) {
    console.error("Error decoding locality:", e);
    return res.status(400).json({
      error: "Invalid locality parameter",
      message: "The locality name contains invalid characters.",
    });
  }

  console.log("Querying database for locality:", locality);
  db.all(
    "SELECT name, designation, phone, email FROM representatives WHERE locality COLLATE NOCASE = ?",
    [locality],
    (err, rows) => {
      if (err) {
        console.error("Database query error:", err);
        res.status(500).json({
          error: "Database query failed",
          message:
            "An internal server error occurred while querying the database.",
        });
      } else if (rows.length === 0) {
        res.status(404).json({
          error: "No representatives found",
          message: `No representatives found for ${locality}. Please check the locality name and try again.`,
        });
      } else {
        res.json({ locality, representatives: rows });
      }
    }
  );
});

// POST /representatives/update
app.post("/representatives/update", (req, res) => {
  const { locality, name, designation, phone, email } = req.body;

  if (!locality || !name || !designation) {
    return res
      .status(400)
      .json({ error: "locality, name, and designation are required" });
  }

  db.run(
    `INSERT INTO representatives (locality, name, designation, phone, email)
    VALUES (?, ?, ?, ?, ?)`,
    [locality, name, designation, phone, email],
    function (err) {
      if (err) {
        res.status(500).json({ error: "Failed to update database" });
      } else {
        res.json({
          message: "Representative information updated",
          id: this.lastID,
        });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
