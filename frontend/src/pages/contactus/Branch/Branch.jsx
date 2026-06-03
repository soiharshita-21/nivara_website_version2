import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBuilding,
  FaCalendarAlt,
  FaChevronDown,
  FaDirections,
  FaMapMarkerAlt,
  FaPhoneAlt,
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
      contact: "1800-309-1516"
    },
    {
      city: "Haveri",
      opened: "2025-05-15",
      address: "2nd Floor, Plot No 11B/1, ward no 10, Block no 12, Near JH Patel circle road, Haveri, Karnataka-581110",
      contact: "1800-309-1516"
    },
    {
      city: "Ballari",
      opened: "2025-06-20",
      address: "1st Floor, KMF Towers, Beside Baba Engg Works Kalamma Street, Ballari, Karnataka- 583101",
      contact: "1800-309-1516"
    },
    {
      city: "Hospet",
      opened: "2025-07-25",
      address: "1st Floor, H No 479, Indira Nagar, Near Sapthagiri High School, Basaveshwara Badavane, Hospet, Bellary, Karnataka-583201",
      contact: "1800-309-1516"
    },
    {
      city: "Belagavi",
      opened: "2025-08-19",
      address: "BENKE Complex, First Floor, 1283/B Ramlingkhind Galli, Belagavi-590001",
      contact: "1800-309-1516"
    },
    {
      city: "Gulbarga(Kalburgi)",
      opened: "2025-08-29",
      address: "No.2-907/23/2/1F, 2nd Floor 100 Feet Road, Badepur, Gulbarga 585105, Karnataka",
      contact: "1800-309-1516"
    },
    {
      city: "Gangavathi",
      opened: "2025-09-09",
      address: "1st floor, Near udbhava Lakmi Temple, Kampli road, Gangavathi, Karnataka-583227",
      contact: "1800-309-1516"
    },
    {
      city: "Gokak",
      opened: "2025-10-17",
      address: "2nd floor, No 3254/3, Hosapeth Galli, Gokak, Belgaum, Karnataka - 591307",
      contact: "1800-309-1516"
    },
    {
      city: "Sindhanur",
      opened: "2025-11-12",
      address: "2nd floor, No 42B, Bagodi Heights, Ward No 19, Behind Kammavari, Bhavana Railway Station Road, Sindhanur, Raichur Dist., Karnataka- 584128",
      contact: "1800-309-1516"
    },
    {
      city: "Chikkodi",
      opened: "2025-11-14",
      address: "1st floor, Nooli commercial building Nippani-mudhol road, Basaveshwar Nagar, Opposite keb, besides Kamal hospital, Chikodi - 591201",
      contact: "1800-309-1516"
    },
    {
      city: "Bidar",
      opened: "2025-11-25",
      address: "3rd floor, No 9-2-164, DCC Bank Opp, Shah Gunj, Bidar, Karnataka - 585401",
      contact: "1800-309-1516"
    },
    {
      city: "Vijayapura",
      opened: "2025-11-29",
      address: "1st floor, Mahalaxmi Arcade, Plot No. 65, Manas Residency, Darga Road, Vijayapura, Karnataka PIN - 586103",
      contact: "1800-309-1516"
    },
    {
      city: "Raichur",
      opened: "2025-11-29",
      address: "1st floor, Santoshi Enclave, Door No 11-2-71/1 (New) Shop No - FFS-3, 1st Floor, Bresthwarpet Raichur, Karnataka - 584101",
      contact: "1800-309-1516"
    },
    {
      city: "Ranebennur",
      opened: "2026-01-23",
      address: "1st Floor, Sri Kalmeshwar, Gourishankar Nagar, Old Magod Road, Ranebennur, Karnataka-581115",
      contact: "1800-309-1516"
    },
    {
      city: "Bangarpet",
      opened: "2026-03-30",
      address: "1st floor, #3191, opp Indian bank, Seshachalam Mudaliar Road, Bangarpet, Pincode - 563114",
      contact: "+91 9742366443"
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
      contact: "1800-309-1516"
    },
    {
      city: "Tiruppur",
      opened: "2025-06-16",
      address: "1st Floor, No.27C10, Gandhi Road, Anuparpalayam, Tirupur, Tamilnadu-641652",
      contact: "1800-309-1516"
    },
    {
      city: "Coimbatore",
      opened: "2025-06-30",
      address: "1st Floor, No.273-3, Maruthamalai Road, Mullai Nagar, P.N.Pudur, Coimbatore, Tamil Nadu - 641041",
      contact: "1800-309-1516"
    },
    {
      city: "Pochampalli",
      opened: "2025-10-28",
      address: "Door No 1/31, 1st Floor, Canara bank Upstairs, Tirupathur main road, Pochampalli, Krishnagiri – 635206",
      contact: "1800-309-1516"
    },
    {
      city: "Arakkonam",
      opened: "2025-11-22",
      address: "Door No.22, First floor, Gandhi High Road, Arakkonam, Tamilnadu-631001",
      contact: "1800-309-1516"
    },
    {
      city: "Kancheepuram",
      opened: "2025-12-12",
      address: "2nd Floor, No.72-A Aladi Pillaiyar Koil Street, Kancheepuram, Tamilnadu-631501",
      contact: "1800-309-1516"
    },
    {
      city: "Thiruvallur",
      opened: "2026-02-28",
      address: "2nd Floor, Plot No.403, MIG TNUDP- Kakkalur Scheme, S.F.No. 196-2 Part, Block No.1, Bypass road, Kakkalur Village, Thiruvallur Taluk, Tamilnadu",
      contact: "1800-309-1516"
    },
    {
      city: "Viluppuram",
      opened: "2026-04-07",
      address: "3rd Floor, TNHB-SHOP SITE No. II(VPM-030A), KEELPERUMBAKKAM-Phase-II- Neighbourhood Scheme, 3rd Floor, T.S.No. 50/1, Viluppuram, Tamil Nadu - 605602",
      contact: "+91 9865310336"
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
      contact: "1800-309-1516"
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
      contact: "1800-309-1516"
    },
    {
      city: "Medchal",
      opened: "2025-07-11",
      address: "2nd Floor, MIGH-14, Housing Board Colony, Beside R R Shopping Mall, Medchal- 501401, Telangana",
      contact: "1800-309-1516"
    },
    {
      city: "Mahabubnagar",
      opened: "2025-11-27",
      address: "D.No: 10-4-4/D, 1st Floor, Opp. SVS Hospital, Mahabubnagar, Telangana – 509002",
      contact: "1800-309-1516"
    },
    {
      city: "Suryapet",
      opened: "2025-12-29",
      address: "1st Floor, D No. 1-2-162/3/1, Shanker Vilas, KK Road, Suryapet, Telangana - 508213",
      contact: "1800-309-1516"
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
      contact: "1800-309-1516"
    },
    {
      city: "Tadepalligudem",
      opened: "2025-07-31",
      address: "Door No :1-47-5-2, 1St floor, Raghvendra complex, Opp - RTC complex IN gate, Tadepalligudem - 534101",
      contact: "1800-309-1516"
    },
    {
      city: "Tirupati",
      opened: "2025-11-29",
      address: "2nd Floor ,Door NO: 14-40/1 , Mr Palli police station to Vaikunta Puram Arch road ,Dhanalakshmi Nagar, Gandhi Puram GP, Tirupati",
      contact: "1800-309-1516"
    },
    {
      city: "Puttur",
      opened: "2026-01-23",
      address: "# 17-149/1, First floor, Ward NO 17, RTC Colony, KARVETI NAGARAM ROAD, PUTTUR - 517583",
      contact: "1800-309-1516"
    },
    {
      city: "Penukonda",
      opened: "2026-01-22",
      address: "1st Floor, 10-264, Narayanamma Colony, Revenue ward No 10, Penukonda, Andhra Pradesh-515110",
      contact: "1800-309-1516"
    },
    {
      city: "Nuziveedu",
      opened: "2026-01-31",
      address: "D No-7-153/1, 1st floor, Jangalapeta, Revenue ward No 7, Near Bus stand main road, Nuziveedu, Eluru District, 521201.",
      contact: "1800-309-1516"
    },
    {
      city: "Machilipatnam",
      opened: "2026-01-31",
      address: "1st Floor, D No-10/400/-401 Balaramuni Peta Revenue Ward-10 Machilipatnam 521001",
      contact: "1800-309-1516"
    },
    {
      city: "Kandukur",
      opened: "2026-02-12",
      address: "1st Floor, Simhadri Nagar, Revenue Ward No-2, Pamuru Road, Kandukur-523105",
      contact: "1800-309-1516"
    },
    {
      city: "Venkatagiri",
      opened: "2026-02-24",
      address: "No-5-8/4, First floor, Ammavaripet, Revenue Ward No 5, Palakendram Area, Venkatagiri-524132",
      contact: "1800-309-1516"
    },
    {
      city: "Addanki",
      opened: "2026-02-28",
      address: "1st Floor, Door No-13-95/1/2/3/4, ward no- 15, Sanjeev Nagar, Addanki-523201, Prakasam District, Andhra Pradesh",
      contact: "1800-309-1516"
    },
    {
      city: "Kurnool",
      opened: "2026-03-25",
      address: "Shop No. 420, 421 & 422, 4th Floor, Ucon Legend Complex, Kurnool District, Andhra Pradesh-518004.",
      contact: "+91 9494438553"
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
      contact: "1800-309-1516"
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
    city: "Padappai",
    state: "Tamil Nadu",
    opened: "2026-05-20",
    address: "Door No.2/403, Second Floor, Bazaar Street, Padappai Town, Poonamallee Taluk, Kanchipuram District, Tamilnadu, Padappai-601301",
    contact: "1800-309-1516",
    is_new: true
  },
  {
    city: "Chengalpattu",
    state: "Tamil Nadu",
    opened: "2026-05-19",
    address: "Door No.2/B, First floor, Rajeswari Vethachalam Street, Opposite to Govt Arts College, GST Main road, Chengalpattu town, Tamil Nadu - 603001",
    contact: "1800-309-1516",
    is_new: true
  },
  {
    city: "Viluppuram",
    state: "Tamil Nadu",
    opened: "2026-04-07",
    address: "3rd Floor, TNHB Shop Site No.11 (VPM-030A), Keelperumbakkam Phase-II, Ward-B, Block-26, Viluppuram, Tamil Nadu - 605602.",
    contact: "+91 9865310336",
    is_new: true
  },
  {
    city: "Bangarpet",
    state: "Karnataka",
    opened: "2026-03-30",
    address: "1st Floor, #3191, opp Indian Bank, Seshachalam Mudaliar Road, Bangarpet - 563114.",
    contact: "+91 9742366443",
    is_new: true
  },
  {
    city: "Kurnool",
    state: "Andhra Pradesh",
    opened: "2026-03-25",
    address: "Shop No. 420, 421 & 422, 4th Floor, Ucon Legend Complex, Kurnool District, Andhra Pradesh - 518004.",
    contact: "+91 9494438553",
    is_new: true
  },
  {
    city: "Kolhapur",
    state: "Maharashtra",
    opened: "2026-03-17",
    address: "No. 115-B, First Floor, Parag Complex, 596/1, E Ward, Shahupuri, 1st Lane, Kolhapur - 416001.",
    contact: "+91 9373059622",
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Static branch locator transition: no backend fetch is required
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
 
  const openBranchMap = (city) => {
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
          <h1>NIVARA LOCATIONS</h1>
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
      </div>
 
      {/* State List */}
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
      </div>
 
      {/* Newly Opened Branches */}
      <section className="new-branches-section" aria-label="Newly Opened Branches">
        <div className="new-branches-header">
          <span className="branch-section-eyebrow">JUST OPENED</span>
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
                onClick={() => openBranchMap(branch.city)}
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
                <span className="info-label">🏢 COMPANY</span>
                <p>Nivara Home Finance LTD.</p>
              </div>
 
              <div className="info-divider"></div>
 
              <div className="info-item">
                <span className="info-label">📍 ADDRESS</span>
                <p>
                  {selectedBranch.address || `${selectedBranch.city}, ${selectedBranch.state}, India`}
                </p>
              </div>
 
              <div className="info-divider"></div>
 
              <div className="info-item">
                <span className="info-label">📞 CONTACT SUPPORT</span>
                <p>{selectedBranch.contact || "1800-309-1516"}</p>
              </div>
            </div>
 
            <div className="modal-actions-container">
              <button
                className="btn-get-directions-final"
                onClick={() => openBranchMap(selectedBranch.city)}
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
