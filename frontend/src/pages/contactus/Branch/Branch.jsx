import React, { useState, useEffect } from "react";
import axios from "axios";  
import {
  FaBuilding,
  FaCalendarAlt,
  FaChevronDown,
  FaDirections,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaThLarge,
  FaList,
} from "react-icons/fa";
 
import "./Branch.css";
import BranchMap from "../../../components/BranchMap";
 
const defaultBranchesByState = {
  KARNATAKA: [
    {
      city: "JP Nagar",
      opened: "2015-05-11",
      address: "No. 22, 23, 24, 25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, Opposite RBI Layout, 7th Phase JP Nagar, Puttenahalli, Bangalore - 560078",
      contact: "1800-309-1516"
    },
    {
      city: "Nagarbhavi",
      opened: "2023-07-07",
      address: "Venugopal Arcade, 3rd Floor, No. 31, SI No. 1960, Ass No.53/2, Kottigepalya, SriGandadakaval, Yeshwanthpura(H), Bangalore North, Bangalore - 560091",
      contact: "1800-309-1516"
    },
    {
      city: "Bagalur",
      opened: "2016-07-09",
      address: "No.37,38,39. RR Krupa complex, Near Reva college circle, Bagalur Main Road, Bengaluru - 560063",
      contact: "1800-309-1516"
    },
    {
      city: "TC Palya",
      opened: "2016-10-06",
      address: "Site No.6, 1st Floor, TC Palya Main Road, Akshayanagar, Bengaluru - 560016",
      contact: "1800-309-1516"
    },
    {
      city: "Mysore",
      opened: "2017-07-26",
      address: "No.2917,Jeevan Arcade, 3rd Floor,1st Mian, 5th Cross, Opp Ttl College, Kanthraju URS Road, Sarswathipuram, Mysore - 570009",
      contact: "1800-309-1516"
    },
    {
      city: "Ramnagara",
      opened: "2017-08-19",
      address: "LAKSHMI ARCADE, 1ST FLOOR, VIVEKANANDA NAGAR, BM ROAD, RAMANAGARA - 562159",
      contact: "1800-309-1516"
    },
    {
      city: "Gottigere",
      opened: "2023-02-16",
      address: "No. 43, First Floor, Bhagya Nagar, Jambusavarai Dinne Main Road, Gottigere, Bangalore - 560083",
      contact: "1800-309-1516"
    },
    {
      city: "Anekal",
      opened: "2021-01-20",
      address: "No 320/295, New Khatha No. 109/358 No - 02 2nd Floor B' Wing Situated at Mirza Road Hosapet, Anekal Town, Anekal Taluk, Bangalore - 562106",
      contact: "1800-309-1516"
    },
    {
      city: "Nelamangala",
      opened: "2021-01-20",
      address: "Mothhi Plaza\" #317, Shop No: 01, 1st FloorT R Muttyya Layout Bh Road Nelamangla, Karnataka - 562123",
      contact: "1800-309-1516"
    },
    {
      city: "Doddabalapur",
      opened: "2021-02-16",
      address: "No 1762/66, 2nd FLOOR, ABOVE RBL BANK, D.CROSS MAIN ROAD, Doddaballapura - 561203",
      contact: "1800-309-1516"
    },
    {
      city: "Tumkur",
      opened: "2021-03-31",
      address: "No. 1092/852, 2nd Floor, SS Puram Main Road, opp. Byraveshwaea bank, Tumkur - 572102",
      contact: "1800-309-1516"
    },
    {
      city: "Mandya",
      opened: "2021-08-05",
      address: "No D3/349/1690 2nd floor 100 feet road opp Big shop Vidyanagar Mandya - 571401",
      contact: "1800-309-1516"
    },
    {
      city: "Kanakpura",
      opened: "2022-06-27",
      address: "Yashaswi Nilaya, 1st Floor, S L N Road, 1st cross, Opposite Raksha medical, J C Extension, Kanakapura, Ramanagara, Karnataka – 562117",
      contact: "1800-309-1516"
    },
    {
      city: "Hunsur",
      opened: "2022-06-27",
      address: "20/B, # T, HD Kote Road, Hunsur, Mysore District, Karnataka – 571105",
      contact: "1800-309-1516"
    },
    {
      city: "Kengeri",
      opened: "2022-09-26",
      address: "2nd Floor, E 53 Kumbalagodu Mysore Road, Mysore, Kengeri, Hobli, Bangalore - 560074",
      contact: "1800-309-1516"
    },
    {
      city: "Gauribidanur",
      opened: "2022-09-30",
      address: "No. 1143/881/11 Gowda Complex First Floor B H Road, Near National College, Gowribidnuru Town, Chikkaballapur District, Pin- 561208",
      contact: "1800-309-1516"
    },
    {
      city: "Sarjapur",
      opened: "2022-10-29",
      address: "68/1, Sy No. 10/2, Burgunte, Sarjapura Attible Main Road, Sarjapura, Pin- 562125",
      contact: "1800-309-1516"
    },
    {
      city: "Kunigal",
      opened: "2022-10-30",
      address: "No 7, MG Tower, 1st Floor, BM Road, Opp To BGS Collages, Kunigal, Karnataka- 572130",
      contact: "1800-309-1516"
    },
    {
      city: "Chamrajnagar",
      opened: "2022-10-30",
      address: "SPK Complex, Court Road, Opp To Jail, Chamrajnagar, Karnataka- 571313",
      contact: "1800-309-1516"
    },
    {
      city: "Kolar",
      opened: "2022-11-25",
      address: "1st Floor, Behind SNR Hospital, Bangarpet Road, Kanakanapalya Kolar, Karnataka- 563101",
      contact: "1800-309-1516"
    },
    {
      city: "Hassan",
      opened: "2022-11-29",
      address: "KARI GOWDA Complex, Arali Mara Circle Gowri Koppal 2nd Floor, Hassan, Karnataka- 573201",
      contact: "1800-309-1516"
    },
    {
      city: "Sira",
      opened: "2022-11-30",
      address: "# 5-6160/5/136, Hanumanthanagar, Sira Town Municipal, Sira Taluk, Tumkur, Karnataka- 572137",
      contact: "1800-309-1516"
    },
    {
      city: "Chikkabalapur",
      opened: "2022-12-16",
      address: "No. 714/461/2, Opp. Lic Office, Chikkaballapura, Karnataka- 562101",
      contact: "1800-309-1516"
    },
    {
      city: "Tiptur",
      opened: "2022-12-24",
      address: "Plot No.3588/98, 4985/1, 4984/11/1-A, Yt Road Tiptur, Karnataka - 572201",
      contact: "1800-309-1516"
    },
    {
      city: "Thalaghattapura",
      opened: "2023-01-25",
      address: "#223, Balaji Layout, 100 Feet Road, Vajarahalli, Kanakpura Road, Bengaluru, Karnataka- 560109",
      contact: "1800-309-1516"
    },
    {
      city: "Srirangapatna",
      opened: "2023-02-06",
      address: "Aruna Complex, Kirangoor (Baburayanakoppalu), Bengaluru Mysore Road, Opp. Bhuvaneswari Hotel, Srirangapattana, Karnataka- 571438",
      contact: "1800-309-1516"
    },
    {
      city: "Davanagere",
      opened: "2023-02-28",
      address: "M/s Ashirvad Complex Door no. 1259/1 Bagiratha, Circle, S S Hitech Hospital Road, Jayanagara, Davanagere District, Karnataka - 577004",
      contact: "1800-309-1516"
    },
    {
      city: "Malur",
      opened: "2023-03-10",
      address: "Bengaluru Main Road, Reliance Petrol Bunk Opposite, Malur, Kolar District, Karnataka - 563130",
      contact: "1800-309-1516"
    },
    {
      city: "Chitradurga",
      opened: "2023-03-24",
      address: "Jana Nilaya, V.P extension 1st Cross, Aishwarya Fort Road, Chitradurga District, Karnataka, Pincode-577501",
      contact: "1800-309-1516"
    },
    {
      city: "Maddur",
      opened: "2023-04-04",
      address: "Simsha Complex, Maddur, Tumkur Road, Hemmanhalli Circle, Maddur, Mandya District, Karnataka 571428",
      contact: "1800-309-1516"
    },
    {
      city: "Hubli",
      opened: "2024-10-18",
      address: "Plot No 37, SBS Avenue, Opp. Arajun Vihar Cross, Second Floor, Shop No 4 Gokul Road, Hubli - 580030",
      contact: "1800-309-1516"
    },
    {
      city: "Gadag",
      opened: "2025-04-30",
      address: "1st Floor, Plot No.19, Kalasapur Road, Ramanagar, near devarajaarasubhavan, Gadag, Karnataka - 582103",
      contact: "Jayalakshmi (+91 9591360411)",
      map_link: "https://maps.app.goo.gl/G4iCKG1trMmgWCWJ9?g_st=ic"
    },
    {
      city: "Haveri",
      opened: "2025-05-15",
      address: "2nd Floor, Plot No 11B/1, ward no 10, Block no 12, Near JH Patel circle road, Haveri, Karnataka-581110",
      contact: "Srujanshree P B (+91 7975410976)",
      map_link: "https://maps.app.goo.gl/Z8kb1nj83wJ1cgDL7"
    },
    {
      city: "Ballari",
      opened: "2025-06-20",
      address: "1st Floor, KMF Towers, Beside Baba Engg Works Kalamma Street, Ballari, Karnataka- 583101",
      contact: "H Ravichandra (+91 8971085401)",
      map_link: "https://maps.app.goo.gl/ghJMpbtGgaVnkBFo9?g_st=ic"
    },
    {
      city: "Hospet",
      opened: "2025-07-25",
      address: "1st Floor, H No 479, Indira Nagar, Near Sapthagiri High School, Basaveshwara Badavane, Hospet, Bellary, Karnataka-583201",
      contact: "Shivaram H (+91 9663574680)",
      map_link: "https://maps.app.goo.gl/tzXfRCaXb62DBd1v7?g_st=ic"
    },
    {
      city: "Belagavi",
      opened: "2025-08-19",
      address: "BENKE Complex, First Floor, 1283/B Ramlingkhind Galli, Belagavi-590001",
      contact: "Savita Narayan Kammar (+91 9632290307)",
      map_link: "https://maps.app.goo.gl/1pz1aZyDUB5G6znU9?g_st=ic"
    },
    {
      city: "Gulbarga(Kalburgi)",
      opened: "2025-08-29",
      address: "No.2-907/23/2/1F, 2nd Floor 100 Feet Road, Badepur, Gulbarga 585105, Karnataka",
      contact: "Priyanka S (+91 7624918101)",
      map_link: "https://maps.app.goo.gl/dHLFRQQzy8BJ6WPa8?g_st=ic"
    },
    {
      city: "Gangavathi",
      opened: "2025-09-09",
      address: "1st floor, Near udbhava Lakmi Temple, Kampli road, Gangavathi, Karnataka-583227",
      contact: "Mallesh (+91 7996357499)",
      map_link: "https://maps.app.goo.gl/ZC8SMC8JerKacSEJ8?g_st=ic"
    },
    {
      city: "Gokak",
      opened: "2025-10-17",
      address: "2nd floor, No 3254/3, Hosapeth Galli, Gokak, Belgaum, Karnataka - 591307",
      contact: "Shreya Medar (+91 6363126322)",
      map_link: "https://maps.app.goo.gl/gdbXd7JiAZCRwsKC7?g_st=ic"
    },
    {
      city: "Sindhanur",
      opened: "2025-11-12",
      address: "2nd floor, No 42B, Bagodi Heights, Ward No 19, Behind Kammavari, Bhavana Railway Station Road, Sindhanur, Raichur Dist., Karnataka- 584128",
      contact: "Sharanabasava (+91 8310330744)",
      map_link: "https://maps.app.goo.gl/mbkKdZnU2obRaMZs9?g_st=ic"
    },
    {
      city: "Chikkodi",
      opened: "2025-11-14",
      address: "1st floor, Nooli commercial building Nippani-mudhol road, Basaveshwar Nagar, Opposite keb, besides Kamal hospital, Chikodi - 591201",
      contact: "Laxmi G (+91 8197159252)",
      map_link: "https://maps.app.goo.gl/rNzi17UhQx6dL9SG8?g_st=ic"
    },
    {
      city: "Bidar",
      opened: "2025-11-25",
      address: "3rd floor, No 9-2-164, DCC Bank Opp, Shah Gunj, Bidar, Karnataka - 585401",
      contact: "Ashwini (+91 8197007286)",
      map_link: "https://maps.app.goo.gl/DcAadJD3U3UXM6QY9?g_st=aw"
    },
    {
      city: "Vijayapura",
      opened: "2025-11-29",
      address: "1st floor, Mahalaxmi Arcade, Plot No. 65, Manas Residency, Darga Road, Vijayapura, Karnataka PIN - 586103",
      contact: "Anitha (+91 7338160082)",
      map_link: "https://maps.app.goo.gl/CUX7ZdqfbbM3qxmf6?g_st=ic"
    },
    {
      city: "Raichur",
      opened: "2025-11-29",
      address: "1st floor, Santoshi Enclave, Door No 11-2-71/1 (New) Shop No - FFS-3, 1st Floor, Bresthwarpet Raichur, Karnataka - 584101",
      contact: "Pooja (+91 7337652360)",
      map_link: "https://maps.app.goo.gl/h2JSb7fbzXdhkGnL8"
    },
    {
      city: "Ranebennur",
      opened: "2026-01-23",
      address: "1st Floor, Sri Kalmeshwar, Gourishankar Nagar, Old Magod Road, Ranebennur, Karnataka-581115",
      contact: "Vidya S Narayani (+91 7483012269 / +91 8904869819)",
      map_link: "https://maps.app.goo.gl/jMB7NkRm5vLy6fP4A?g_st=ic"
    },
    {
      city: "Bangarpet",
      opened: "2026-03-30",
      address: "1st floor, #3191, opp Indian bank, Seshachalam Mudaliar Road, Bangarpet, Pincode - 563114",
      contact: "Akhila V (+91 7348969517)",
      map_link: "https://maps.app.goo.gl/qfPSBtm48Getk2Hb6"
    }
  ],
  "TAMIL NADU": [
    {
      city: "Hosur",
      opened: "2017-12-30",
      address: "Srivari Towers, 20/1, 2nd floor, Rayakotta Road, Opp to srinivasa Theatre, Hosur – 635109",
      contact: "1800-309-1516"
    },
    {
      city: "Salem",
      opened: "2021-10-25",
      address: "Saroja Complex 206-2, Junction main road, State bank Colony, Suramangalam, Salem - 636005",
      contact: "1800-309-1516"
    },
    {
      city: "Krishnagiri",
      opened: "2022-03-16",
      address: "No:14, 1st floor, PTV Colony, adjacent to Canara Bank, Bangalore Road krishnagiri-635001",
      contact: "1800-309-1516"
    },
    {
      city: "Dharmapuri",
      opened: "2022-07-13",
      address: "No.5/195, 2nd Floor, Salem Main Road, Elakkiampatti, Dharmapuri 636705",
      contact: "1800-309-1516"
    },
    {
      city: "Tirupattur",
      opened: "2022-10-14",
      address: "K N Apartments, Ground Floor, Sai Baba Nagar, Achamangalam Road, Tirupattur - 635602",
      contact: "1800-309-1516"
    },
    {
      city: "Tiruvannamalai",
      opened: "2022-12-12",
      address: "No. 15/1, First Floor, R R Complex, Polur Road, Tiruvannamalai, Tamil Nadu-606601",
      contact: "1800-309-1516"
    },
    {
      city: "Vellore",
      opened: "2023-02-24",
      address: "Srinivasa plaza No.8, 3rd street, BalajiNagar, Katpadi, Vellore, Tamil Nadu – 632007",
      contact: "1800-309-1516"
    },
    {
      city: "Namakkal",
      opened: "2023-05-25",
      address: "DNo.55/4/26 C, 3rd floor, Mohanur Road- A, Namakkal Town Pin code - 637001",
      contact: "1800-309-1516"
    },
    {
      city: "Erode",
      opened: "2024-11-22",
      address: "No 024/2-H95/-2, 2nd Floor, (Ward-44) 80 Feet Road, Periyar Nagar 2, Erode, Tamil Nadu-638001",
      contact: "1800-309-1516"
    },
    {
      city: "Pollachi",
      opened: "2025-05-28",
      address: "1st Floor, No.2/6 Rasakkapalam, Palladam Main Road Puliampatti post, Pollachi T.K, Tamilnadu - 642002",
      contact: "Surya M (+91 6369952297)",
      map_link: "https://maps.app.goo.gl/oeDXgxe2aMiCyZrt9?g_st=aw"
    },
    {
      city: "Tiruppur",
      opened: "2025-06-16",
      address: "1st Floor, No.27C10, Gandhi Road, Anuparpalayam, Tirupur, Tamilnadu-641652",
      contact: "Nivetha S (RO) (+91 9176776110)",
      map_link: "https://maps.app.goo.gl/Qik9XfcNqKMwZ2tPA"
    },
    {
      city: "Coimbatore",
      opened: "2025-06-30",
      address: "1st Floor, No.273-3, Maruthamalai Road, Mullai Nagar, P.N.Pudur, Coimbatore, Tamil Nadu - 641041",
      contact: "R Silambharashan (+91 8608202031)",
      map_link: "https://maps.app.goo.gl/zNn83AvdMeQp9ScH8?g_st=ic"
    },
    {
      city: "Pochampalli",
      opened: "2025-10-28",
      address: "Door No 1/31, 1st Floor, Canara bank Upstairs, Tirupathur main road, Pochampalli, Krishnagiri – 635206",
      contact: "Pradap C (+91 8637459290)",
      map_link: "https://maps.app.goo.gl/HpHRJoGsVvLpC41A6?g_st=ic"
    },
    {
      city: "Arakkonam",
      opened: "2025-11-22",
      address: "Door No.22, First floor, Gandhi High Road, Arakkonam, Tamilnadu-631001",
      contact: "Girija M (+91 9994650424)",
      map_link: "https://maps.app.goo.gl/kqYp6VrXQ6ZzuMTU8?g_st=aw"
    },
    {
      city: "Kancheepuram",
      opened: "2025-12-12",
      address: "2nd Floor, No.72-A Aladi Pillaiyar Koil Street, Kancheepuram, Tamilnadu-631501",
      contact: "Lalithambigai D (+91 6385820837)",
      map_link: "https://maps.app.goo.gl/Gh2dchYHGX9K9LHf9?g_st=aw"
    },
    {
      city: "Thiruvallur",
      opened: "2026-02-28",
      address: "2nd Floor, Plot No.403, MIG TNUDP- Kakkalur Scheme, S.F.No. 196-2 Part, Block No.1, Bypass road, Kakkalur Village, Thiruvallur Taluk, Tamilnadu",
      contact: "Aarthi R (+91 7639374963)",
      map_link: "https://maps.app.goo.gl/pLK2cAm92ZUZeZTp8?g_st=aw"
    },
    {
      city: "Viluppuram",
      opened: "2026-04-07",
      address: "3rd Floor, TNHB-SHOP SITE No. II(VPM-030A), KEELPERUMBAKKAM-Phase-II- Neighbourhood Scheme, 3rd Floor, T.S.No. 50/1, Viluppuram, Tamil Nadu - 605602",
      contact: "Yuvaraj Natarajan (+91 7397702149)",
      map_link: "https://maps.app.goo.gl/BrWK45qUQqG9rV3s6?g_st=ic"
    },
    {
      city: "Chengalpattu",
      opened: "2026-05-19",
      address: "Door No.2/B, First floor, Rajeswari Vethachalam Street, Opposite to Govt Arts College, GST Main road, Chengalpattu town, Tamil Nadu - 603001",
      contact: "1800-309-1516"
    },
    {
      city: "Padappai",
      opened: "2026-05-20",
      address: "Door No.2/403, Second Floor, Bazaar Street, Padappai Town, Poonamallee Taluk, Kanchipuram District, Tamilnadu, Padappai-601301",
      contact: "+91 9884234610"
    },
    {
      city: "Gummidipoondi",
      opened: "2026-05-28",
      address: "S.F.No.339/2A1, Door No.67, Second floor, G.N.T Road, Gummidipoondi Town and Taluk, Tiruvallur District. Tamilnadu, Gummidipoondi-601 201",
      contact: "+91 9884234610"
    }
  ],
  TELANGANA: [
    {
      city: "Vanasthalipuram",
      opened: "2023-02-20",
      address: "1st Floor, 3-14-17/2, Plot No.18, Survey No.18, Ward No.3, Block No.9. Sri Ram Nagar Colony, Mansoorabad Village, Saroonagar Mandal, Ranga Reddy District, Telangana - 500070",
      contact: "1800-309-1516"
    },
    {
      city: "Karimnagar",
      opened: "2022-06-22",
      address: "HNo -6-6-1039, Survey No- 54, 1st floor, Shivaji Nagar, Subhas Nagar, Karimnagar-505001",
      contact: "1800-309-1516"
    },
    {
      city: "Warangal",
      opened: "2022-09-12",
      address: "GWMC H.No. 3-2-171/1,1st Floor, Enugula Gadda, Hanuma Konda, Warangal District, Telangana - 506011",
      contact: "1800-309-1516"
    },
    {
      city: "Khammam",
      opened: "2022-09-26",
      address: "H/No.15-9-33, Second Floor, Wyra Road, Opp To District Court,East Side Shop, Khammam-507001",
      contact: "1800-309-1516"
    },
    {
      city: "Siddipet",
      opened: "2023-01-13",
      address: "H/No. 15-2-66/1 Hanuman Nagar, Beside Citizen Public School, Narasapur Chowrastha, Karimnagar Road, Siddipet, Telangana - 502103",
      contact: "1800-309-1516"
    },
    {
      city: "Kodad",
      opened: "2023-01-21",
      address: "Commercial Complex, H.NO.12-138/B, 1st Floor, Old Block No.9, New Block No.12, Beside HP Petrol Bunk, Near Srinivasa Theater, Kodad, Telangana - 508206",
      contact: "1800-309-1516"
    },
    {
      city: "Siricilla",
      opened: "2023-02-17",
      address: "H.NO.7-5-87 & 7-5-89, Subhashnagar, Mandal, Rajanna Sircilla district, Telangana - 505301",
      contact: "1800-309-1516"
    },
    {
      city: "Sangareddy",
      opened: "2024-08-17",
      address: "H.No.5-1-128/6, 2nd Floor, Dhanalakshmi Kirana and General Stores, Opp: Inspection Bungalow, Shanthi Nagar, Sangareddy, Telangana - 502001",
      contact: "1800-309-1516"
    },
    {
      city: "Nirmal",
      opened: "2025-04-22",
      address: "First Floor, 1-3-131/4 Shastri Nagar, Nirmal, Telangana-504106",
      contact: "B.Lavanya (+91 7671831461)",
      map_link: "https://maps.app.goo.gl/em3o9TmGVUP6qq8t7"
    },
    {
      city: "Medchal",
      opened: "2025-07-11",
      address: "2nd Floor, MIGH-14, Housing Board Colony, Beside R R Shopping Mall, Medchal- 501401, Telangana",
      contact: "Chennuri Supraja (+91 7032476824)",
      map_link: "https://maps.app.goo.gl/dwekCocRy5Hm2Gv1A?g_st=ic"
    },
    {
      city: "Mahabubnagar",
      opened: "2025-11-27",
      address: "D.No: 10-4-4/D, 1st Floor, Opp. SVS Hospital, Mahabubnagar, Telangana – 509002",
      contact: "A. Navaneetha (+91 9052484810)",
      map_link: "https://maps.app.goo.gl/52sjrWKNxGVR1BgT6"
    },
    {
      city: "Suryapet",
      opened: "2025-12-29",
      address: "1st Floor, D No. 1-2-162/3/1, Shanker Vilas, KK Road, Suryapet, Telangana - 508213",
      contact: "P.Sravya (+91 7729096802)",
      map_link: "https://maps.app.goo.gl/UDh6WnsPyGKmKxEA6?g_st=ic"
    }
  ],
  "ANDHRA PRADESH": [
    {
      city: "Guntur",
      opened: "2018-01-31",
      address: "D.No: 4-10-2, Paradise Plaza, 2nd floor, Naidupeta 3rd line, Koretipadu main road, Guntur 522002.",
      contact: "1800-309-1516"
    },
    {
      city: "Eluru",
      opened: "2021-02-16",
      address: "D.No. 22C-10-10/1, First Floor, Badeti vari street, Andhra Bank Road, Near old bus stand, Powerpeta, Eluru - 534002",
      contact: "1800-309-1516"
    },
    {
      city: "Ongole",
      opened: "2021-02-16",
      address: "No. 5- 38, Y R Complex, N G O Colony, Kurnool Road, Ongole, Prakasam, Andhra Pradesh - 523001",
      contact: "1800-309-1516"
    },
    {
      city: "Narasaraopeta",
      opened: "2021-02-16",
      address: "No-16-01-208, ASR Supermarket, 1st Floor, Chilakaluripeta Road, Over Bridge Entrance, Narasaraopet-522601",
      contact: "1800-309-1516"
    },
    {
      city: "Bhimavaram",
      opened: "2021-07-24",
      address: "D.No. 24-1-5/1, 2nd Floor, Upstair of Sri Abhiruchi Restuarant, Juvvala palem Road, Bhimavaram -534202, Andhra Pradesh",
      contact: "1800-309-1516"
    },
    {
      city: "Hindupur",
      opened: "2023-05-22",
      address: "7-3-245/246 Ward No. 7 Main Bazaar Road, Hindupur Town, Near Jala Durgamma Gudi-Pin -515201",
      contact: "1800-309-1516"
    },
    {
      city: "Chirala",
      opened: "2023-07-12",
      address: "Door No.218, 219, 220 & 221, 2nd Floor, Balaji Gold Complex, RR Road, Near Axis Bank, MGC Market, Chirala – 523155, Andhra Pradesh",
      contact: "1800-309-1516"
    },
    {
      city: "Kanuru",
      opened: "2023-07-20",
      address: "Door No: 11-288, KunapaReddy, Srimannarayana Street, Near Time Hospital, Kanuru, Vijayawada-520007",
      contact: "1800-309-1516"
    },
    {
      city: "Anantapur",
      opened: "2023-07-24",
      address: "Door No 13-3-1122, First Floor, Sreenivas Nagar, Anantapur, Andhra Pradesh, Pin code – 515001, Opp. to Reliance Smart.",
      contact: "1800-309-1516"
    },
    {
      city: "Adoni",
      opened: "2025-07-31",
      address: "No: 15/766/A, First Floor, Victoria Pet, Near Panduranga Swamy Temple, Adoni – 518301, Andhra Pradesh",
      contact: "S.Swapna (+91 9398329925)",
      map_link: "https://share.google/IMgXJ7pmSvqpxKyva"
    },
    {
      city: "Tadepalligudem",
      opened: "2025-07-31",
      address: "Door No :1-47-5-2, 1St floor, Raghvendra complex, Opp - RTC complex IN gate, Tadepalligudem - 534101",
      contact: "Sowmya Mounavi (+91 7416231324)",
      map_link: "https://maps.app.goo.gl/k2FRofUy5vaFyu9h6?g_st=aw"
    },
    {
      city: "Tirupati",
      opened: "2025-11-29",
      address: "2nd Floor ,Door NO: 14-40/1 , Mr Palli police station to Vaikunta Puram Arch road ,Dhanalakshmi Nagar, Gandhi Puram GP, Tirupati",
      contact: "G.Vennela (+91 6303348841)",
      map_link: "https://maps.app.goo.gl/fXvoB22tBz8oFGiU6?g_st=ic"
    },
    {
      city: "Puttur",
      opened: "2026-01-23",
      address: "# 17-149/1, First floor, Ward NO 17, RTC Colony, KARVETI NAGARAM ROAD, PUTTUR - 517583",
      contact: "B Venkataharitha (+91 8179690530)",
      map_link: "https://maps.app.goo.gl/AsHRbPJJqJFzwNbMA?g_st=ic"
    },
    {
      city: "Penukonda",
      opened: "2026-01-22",
      address: "1st Floor, 10-264, Narayanamma Colony, Revenue ward No 10, Penukonda, Andhra Pradesh-515110",
      contact: "Boya Ajay Kumar (+91 6301679384)",
      map_link: "https://maps.app.goo.gl/97xGuRogfRMh6YXq5?g_st=ic"
    },
    {
      city: "Nuziveedu",
      opened: "2026-01-31",
      address: "D No-7-153/1, 1st floor, Jangalapeta, Revenue ward No 7, Near Bus stand main road, Nuziveedu, Eluru District, 521201.",
      contact: "Usha Rani (+91 9676828958)",
      map_link: "https://maps.app.goo.gl/VB7nzjedXwcG7qoG6"
    },
    {
      city: "Machilipatnam",
      opened: "2026-01-31",
      address: "1st Floor, D No-10/400/-401 Balaramuni Peta Revenue Ward-10 Machilipatnam 521001",
      contact: "Jogi Suresh/Shaik Malika (+91 9666204616 / +91 9390753665)",
      map_link: "https://maps.app.goo.gl/s9u3JMjDmiNW5vfi7?g_st=ic"
    },
    {
      city: "Kandukur",
      opened: "2026-02-12",
      address: "1st Floor, Simhadri Nagar, Revenue Ward No-2, Pamuru Road, Kandukur-523105",
      contact: "Brahmanakaka. Lakshmi Priyanka (+91 8187005368)",
      map_link: "https://maps.app.goo.gl/8vxCtEWGa7watGc18"
    },
    {
      city: "Venkatagiri",
      opened: "2026-02-24",
      address: "No-5-8/4, First floor, Ammavaripet, Revenue Ward No 5, Palakendram Area, Venkatagiri-524132",
      contact: "Telu Surya (+91 8374488428)",
      map_link: "https://maps.app.goo.gl/w477PJ1Yq4zwfMs78?g_st=ic"
    },
    {
      city: "Addanki",
      opened: "2026-02-28",
      address: "1st Floor, Door No-13-95/1/2/3/4, ward no- 15, Sanjeev Nagar, Addanki-523201, Prakasam District, Andhra Pradesh",
      contact: "Pallerla Navya Sri (+91 7207303889)",
      map_link: "https://maps.app.goo.gl/MvoDYVAa7M5ZboYq8?g_st=ic"
    },
    {
      city: "Kurnool",
      opened: "2026-03-25",
      address: "Shop No. 420, 421 & 422, 4th Floor, Ucon Legend Complex, Kurnool District, Andhra Pradesh-518004.",
      contact: "Madhusudhan (+91 9121945895)",
      map_link: "https://maps.app.goo.gl/RehThnUxW5tT34zEA?g_st=ic"
    }
  ],
  MAHARASHTRA: [
    {
      city: "Nasik",
      opened: "2017-09-28",
      address: "Office No. 206, Second Floor, Shreeji Bizz World, Nr. Kathe Galli Signal, Nashik- Pune Road, Dwarka, Nashik 422011",
      contact: "1800-309-1516"
    },
    {
      city: "Chinchwad",
      opened: "2020-03-09",
      address: "Office No. 7, First Floor, Avani Bizworld, Plot No. GP 184, Thermax Chowk, Chinchwad, MIDC, Pune 411019",
      contact: "Kajal (+91 9657530664)",
      map_link: "https://maps.app.goo.gl/DQgbhwLuSRzbcapP9"
    },
    {
      city: "Ahmednagar",
      opened: "2021-03-31",
      address: "No.10, Excel Arcade First Floor, Near Amar Hotel, Laltaki Road, Ahmednagar-414001",
      contact: "1800-309-1516"
    },
    {
      city: "Aurangabad",
      opened: "2022-09-06",
      address: "Ankita Hight 2nd Floor, Plot No.48/B, S No.-14 Shivshankar Colony, Near SBI Bank, Roplekar Chowk, Aurangabad - 431001",
      contact: "1800-309-1516"
    },
    {
      city: "Jalgaon",
      opened: "2022-12-24",
      address: "2nd Floor, 270 Baliram Peth, Shivaji Chowk, Jalgaon, Maharashtra-425001",
      contact: "1800-309-1516"
    },
    {
      city: "Dhule",
      opened: "2023-02-08",
      address: "no.10, Excel Arcade First Floor, Near Amar Hotel, Laltaki Road, Ahmednagar-414001",
      contact: "1800-309-1516"
    },
    {
      city: "Kolhapur",
      opened: "2026-03-17",
      address: "No. 115-B, First Floor, Parag Complex, 596/1, E Ward, Shahupuri, 1st Lane, Kolhapur- 416001.",
      contact: "Tejashri Arjunrav Rege (+91 7499291015)",
      map_link: "https://maps.app.goo.gl/skwTbxEDqV6BASF7A?g_st=ic"
    },
    {
      city: "Baramati",
      opened: "2026-05-28",
      address: "2nd floor, C.S.No.38/2, 38/3(Old C.S.No.38A/2/2), Atriya Business Centre, Office No.207,2nd Floor, Near Hotel Nilam Palace, Dhavan Patil Chowk, Baramati-413102",
      contact: "+91 9373059622"
    },
    {
      city: "Malegaon",
      opened: "2026-05-31",
      address: "1st Floor, Himani Sankul Near Dr. Ajit Powar Hospital,Patel nagar road Satana Naka Malegaon 423203",
      contact: "+91 9373059622"
    }
  ]
};

const defaultBranchesData = Object.keys(defaultBranchesByState).reduce((acc, state) => {
  acc[state] = defaultBranchesByState[state].map((branch) => ({ ...branch, state }));
  return acc;
}, {});

const defaultNewBranches = [
  {
    city: "Malegaon",
    state: "Maharashtra",
    opened: "2026-05-31",
    address: "1st Floor, Himani Sankul Near Dr. Ajit Powar Hospital,Patel nagar road Satana Naka Malegaon 423203",
    contact: "+91 9373059622",
    is_new: true
  },
  {
    city: "Baramati",
    state: "Maharashtra",
    opened: "2026-05-28",
    address: "2nd floor, C.S.No.38/2, 38/3(Old C.S.No.38A/2/2), Atriya Business Centre, Office No.207,2nd Floor, Near Hotel Nilam Palace, Dhavan Patil Chowk, Baramati-413102",
    contact: "+91 9373059622",
    is_new: true
  },
  {
    city: "Gummidipoondi",
    state: "Tamil Nadu",
    opened: "2026-05-28",
    address: "S.F.No.339/2A1, Door No.67, Second floor, G.N.T Road, Gummidipoondi Town and Taluk, Tiruvallur District. Tamilnadu, Gummidipoondi-601 201",
    contact: "+91 9884234610",
    is_new: true
  },
  {
    city: "Padappai",
    state: "Tamil Nadu",
    opened: "2026-05-20",
    address: "Door No.2/403, Second Floor, Bazaar Street, Padappai Town, Poonamallee Taluk, Kanchipuram District, Tamilnadu, Padappai-601301",
    contact: "+91 9884234610",
    is_new: true
  }
];
 
const Branch = () => {
  const [search, setSearch] = useState("");
  const [openState, setOpenState] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchesData, setBranchesData] = useState(defaultBranchesData);
  const [newBranches, setNewBranches] = useState(defaultNewBranches);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/branches");
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          const grouped = {};
          const newB = [];
          
          response.data.forEach(branch => {
            const stateKey = branch.state.toUpperCase();
            if (!grouped[stateKey]) {
              grouped[stateKey] = [];
            }
            
            const formattedBranch = {
              id: branch.id,
              city: branch.city,
              state: branch.state,
              opened: branch.opened ? branch.opened.split('T')[0] : "",
              address: branch.address,
              contact: branch.contact,
              map_link: branch.map_link,
              is_new: !!branch.is_new
            };
            
            grouped[stateKey].push(formattedBranch);
            
            if (branch.is_new) {
              newB.push(formattedBranch);
            }
          });
          
          setBranchesData(grouped);
          setNewBranches(newB);
        }
      } catch (err) {
        console.error("Failed to load branches from backend, using fallback data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBranches();
  }, []);
 
  const toggleState = (state) => {
    setOpenState(openState === state ? null : state);
  };
 
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.trim().length > 0);
  };
 
  const selectBranch = (state, branch) => {
    setOpenState(state);
    setSearch(branch.city);
    setShowResults(false);
    setSelectedBranch(branch);
 
    setTimeout(() => {
      const element = document.getElementById(
        `state-${state.replace(/\s+/g, "-")}`
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };
 
  const clearSearch = () => {
    setSearch("");
    setShowResults(false);
    setOpenState(null);
  };
 
  const closeBranchModal = () => {
    setSelectedBranch(null);
  };
 
  const getAllResults = () => {
    const results = [];
    Object.keys(branchesData).forEach((state) => {
      branchesData[state].forEach((branch) => {
        if (branch.city.toLowerCase().includes(search.toLowerCase())) {
          results.push({ state, branch });
        }
      });
    });
    return results;
  };
 
  const getFilteredData = () => {
    if (!search.trim()) return branchesData;
 
    const filtered = {};
    Object.keys(branchesData).forEach((state) => {
      const matchedCities = branchesData[state].filter((branch) =>
        branch.city.toLowerCase().includes(search.toLowerCase())
      );
      if (matchedCities.length > 0) {
        filtered[state] = matchedCities;
      }
    });
    return filtered;
  };
 
  const openBranchMap = (city, mapLink) => {
    if (mapLink) {
      window.open(mapLink, "_blank");
      return;
    }
    let searchQuery = `Nivara Home Finance ${city}`;

    if (city === "JP Nagar" || city === "JPNagar") {
      searchQuery = "Nivara Home Finance JP Nagar Bengaluru";
    } else if (city === "Puttenahalli") {
      searchQuery = "Nivara Home Finance Puttenahalli Bengaluru";
    } else if (city === "Kanuru") {
      searchQuery = "Nivara Home Finance Kanuru Vijayawada";
    }

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`,
      "_blank"
    );
  };
 
  return (
    <div className="branch-page">
 
      {/* Banner */}
      <div className="branch-banner animate-pop-up">
        <div className="banner-con animate-pop-up">
          <h1>NIVARA BRANCHES</h1>
          <p>
            Our headquarters and branches span across multiple states to serve
            customers efficiently. Nivara Housing Finance continues to expand
            across India to make home loans accessible for everyone.
          </p>
        </div>
 
        <div className="banner-map animate-pop-up">
          <BranchMap branchesData={branchesData} />
        </div>
      </div>
      {/* Locator */}
      <div className="branch-locator">
        <h2 className="animate-pop-up">
          <FaMapMarkerAlt className="pin-icon" /> NIVARA BRANCH LOCATOR
        </h2>
 
        <div className="search-container">
          <input
            type="text"
            placeholder="Search branch name..."
            value={search}
            onChange={handleSearchChange}
            onFocus={() => search.trim() && setShowResults(true)}
          />
 
          {search && (
            <button className="search-clear-btn" onClick={clearSearch}>
              &times;
            </button>
          )}
 
          {showResults && (
            <div className="search-results-dropdown">
              {getAllResults().length > 0 ? (
                getAllResults().map((res, i) => (
                  <div
                    key={i}
                    className="search-result-item"
                    onClick={() => selectBranch(res.state, res.branch)}
                  >
                    <span className="res-city">{res.branch.city}</span>
                    <span className="res-state">{res.state}</span>
                  </div>
                ))
              ) : (
                <div className="no-res">No branches found</div>
              )}
            </div>
          )}
        </div>
        <div className="view-toggle-container animate-pop-up">
          <button
            className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <FaThLarge className="toggle-icon" /> Grid View
          </button>
          <button
            className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <FaList className="toggle-icon" /> List View
          </button>
        </div>
      </div>
 
      {/* Branch Listings */}
      {viewMode === "grid" ? (
        /* State List (Accordion Grid View) */
        <div className="state-list">
          {Object.keys(getFilteredData()).sort((a, b) => {
            const order = ["KARNATAKA", "TAMIL NADU", "TELANGANA", "ANDHRA PRADESH", "MAHARASHTRA"];
            const indexA = order.indexOf(a);
            const indexB = order.indexOf(b);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.localeCompare(b);
          }).map((state) => (
            <div
              className="state-wrapper"
              key={state}
              id={`state-${state.replace(/\s+/g, "-")}`}
            >
              <div
                className="state-card"
                onClick={() => toggleState(state)}
              >
                <span>{state}</span>

                <FaChevronDown
                  className={`down-icon ${
                    openState === state ? "rotate" : ""
                  }`}
                />
              </div>

              {(openState === state || search) && (
                <div className="location-grid">
                  {getFilteredData()[state].map((branch) => (
                    <div
                      key={branch.city}
                      className={`location-item ${
                        search &&
                        branch.city.toLowerCase().includes(search.toLowerCase())
                          ? "highlight-branch"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedBranch(branch)
                      }
                    >
                      📍 {branch.city}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {Object.keys(getFilteredData()).length === 0 && (
            <div className="no-branches-found animate-pop-up">
              <h3>No branches found</h3>
              <p>We couldn't find any branches matching "{search}". Try searching for another city.</p>
            </div>
          )}
        </div>
      ) : (
        /* Detailed List View */
        <div className="detailed-state-list">
          {Object.keys(getFilteredData()).sort((a, b) => {
            const order = ["KARNATAKA", "TAMIL NADU", "TELANGANA", "ANDHRA PRADESH", "MAHARASHTRA"];
            const indexA = order.indexOf(a);
            const indexB = order.indexOf(b);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.localeCompare(b);
          }).map((state) => (
            <div
              className="detailed-state-section animate-pop-up"
              key={state}
              id={`state-detailed-${state.replace(/\s+/g, "-")}`}
            >
              <div className="detailed-state-header">
                <h3>{state}</h3>
                <span className="branch-count-badge">
                  {getFilteredData()[state].length} {getFilteredData()[state].length === 1 ? "Branch" : "Branches"}
                </span>
              </div>
              <div className="detailed-branch-grid">
                {getFilteredData()[state].map((branch) => (
                  <div className="detailed-branch-card" key={branch.city}>
                    <div className="branch-card-title-row">
                      <span className="branch-pin-icon">📍</span>
                      <h4>{branch.city}</h4>
                      {branch.is_new && <span className="new-badge">NEW</span>}
                    </div>
                    <div className="branch-card-details">
                      <div className="branch-card-detail-item">
                        <strong>Address</strong>
                        <p>{branch.address || `${branch.city}, ${branch.state}`}</p>
                      </div>
                      <div className="branch-card-detail-item">
                        <strong>Contact</strong>
                        <p>{branch.contact || "1800-309-1516"}</p>
                      </div>
                    </div>
                    <button
                      className="branch-card-directions-btn"
                      onClick={() => openBranchMap(branch.city, branch.map_link)}
                    >
                      <FaDirections className="btn-icon" /> Get Directions
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {Object.keys(getFilteredData()).length === 0 && (
            <div className="no-branches-found animate-pop-up">
              <h3>No branches found</h3>
              <p>We couldn't find any branches matching "{search}". Try searching for another city.</p>
            </div>
          )}
        </div>
      )}
 
      {/* Newly Opened Branches */}
      <section className="new-branches-section" aria-label="Newly Opened Branches">
        <div className="new-branches-header">
          <span className="branch-section-eyebrow">Just Opened</span>
          <h2>Newly Opened Branches</h2>
          <p>
            We are constantly expanding our footprint to bring home finance closer to you.
            Discover our latest locations across different states.
          </p>
        </div>
 
        <div className="branch-openings-grid">
          {newBranches.map((branch, index) => (
            <div className="branch-card" key={index}>
              <div className="branch-card-head">
                <div className="branch-card-icon">
                  <FaBuilding />
                </div>
                <div>
                  <h3>{branch.city}</h3>
                  <p>{branch.state}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaCalendarAlt />
                <div>
                  <strong>Opened</strong>
                  <p>{branch.opened}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaMapMarkerAlt />
                <div>
                  <strong>Address</strong>
                  <p>{branch.address}</p>
                </div>
              </div>
 
              <div className="branch-card-detail">
                <FaPhoneAlt />
                <div>
                  <strong>Contact</strong>
                  <p>{branch.contact}</p>
                </div>
              </div>
 
              <button
                className="branch-card-directions"
                onClick={() => openBranchMap(branch.city, branch.map_link)}
              >
                <FaDirections /> Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>
 
      {/* Modal */}
      {selectedBranch && (
        <div
          className="branch-modal-overlay"
          onClick={closeBranchModal}
        >
          <div
            className="branch-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeBranchModal}
            >
              &times;
            </button>
 
            <div className="modal-header">
              <div className="modal-icon-container">
                <FaMapMarkerAlt className="modal-icon" />
              </div>
 
              <h3>{selectedBranch.city} Branch</h3>
 
              <p className="modal-state-label">
                {selectedBranch.state}
              </p>
            </div>
 
            <div className="modal-body">
              <div className="info-item">
                <span className="info-label">🏢 Company</span>
                <p>Nivara Home Finance LTD.</p>
              </div>
 
              <div className="info-divider"></div>
 
              <div className="info-item">
                <span className="info-label">📍 Address</span>
                <p>
                  {selectedBranch.address || `${selectedBranch.city}, ${selectedBranch.state}, India`}
                </p>
              </div>
 
              <div className="info-divider"></div>
 
              <div className="info-item">
                <span className="info-label">📞 Contact Support</span>
                <p>{selectedBranch.contact || "1800-309-1516"}</p>
              </div>
            </div>
 
            <div className="modal-actions-container">
              <button
                className="btn-get-directions-final"
                onClick={() => openBranchMap(selectedBranch.city, selectedBranch.map_link)}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Branch;
