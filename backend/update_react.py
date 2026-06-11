import os
import re

raw_data = """4/10/2026 15:02:07	Andhra Pradesh	TIRUPATI 	https://maps.app.goo.gl/fXvoB22tBz8oFGiU6?g_st=ic	G.VENNELA	6303348841
4/10/2026 18:16:49	Maharashtra	Pimpri	https://maps.app.goo.gl/DQgbhwLuSRzbcapP9	Kajal	9657530664
4/11/2026 9:55:13	Tamil Nadu	Pochampalli	https://maps.app.goo.gl/HpHRJoGsVvLpC41A6?g_st=ic	Pradap C	8637459290
4/11/2026 12:50:35	Tamil Nadu	Tiruppur	https://maps.app.goo.gl/Qik9XfcNqKMwZ2tPA	Nivetha S (RO)	9176776110
5/6/2026 13:01:09	Andhra Pradesh	Machilipatnam	https://maps.app.goo.gl/s9u3JMjDmiNW5vfi7?g_st=ic	JOGI SURESH/SHAIK MALIKA	9666204616/9390753665
5/14/2026 10:25:46	Telangana	Suryapet	https://maps.app.goo.gl/UDh6WnsPyGKmKxEA6?g_st=ic	P.Sravya	7729096802
5/14/2026 10:27:23	Andhra Pradesh	Venkatagiri	https://maps.app.goo.gl/w477PJ1Yq4zwfMs78?g_st=ic	TELU SURYA 	8374488428
5/14/2026 10:28:45	Tamil Nadu	Thiruvallur	https://maps.app.goo.gl/pLK2cAm92ZUZeZTp8?g_st=aw	Aarthi R	7639374963
5/14/2026 10:29:04	Karnataka	Chikkodi	https://maps.app.goo.gl/rNzi17UhQx6dL9SG8?g_st=ic	Laxmi G 	8197159252
5/14/2026 10:30:15	Tamil Nadu	Pollachi	https://maps.app.goo.gl/oeDXgxe2aMiCyZrt9?g_st=aw	SURYA M 	6369952297
5/14/2026 10:32:19	Tamil Nadu	Kancheepuram	https://maps.app.goo.gl/Gh2dchYHGX9K9LHf9?g_st=aw	Lalithambigai D	6385820837
5/14/2026 10:32:37	Tamil Nadu	Arakkonam	https://maps.app.goo.gl/kqYp6VrXQ6ZzuMTU8?g_st=aw	GIRIJA M	9994650424
5/14/2026 10:42:45	Karnataka	Haveri	https://maps.app.goo.gl/Z8kb1nj83wJ1cgDL7	Srujanshree P B	7975410976
5/14/2026 11:00:15	Andhra Pradesh	Nuziveedu	https://maps.app.goo.gl/VB7nzjedXwcG7qoG6	Usha Rani 	9676828958
5/14/2026 11:04:46	Karnataka	Gangavathi	https://maps.app.goo.gl/ZC8SMC8JerKacSEJ8?g_st=ic	Mallesh 	7996357499
5/14/2026 11:11:07	Andhra Pradesh	Kandukur	https://maps.app.goo.gl/8vxCtEWGa7watGc18	BRAHMANAKAKA. LAKSHMI PRIYANKA	8187005368
5/14/2026 11:14:38	Karnataka	Gulbarga(Kalburgi)	https://maps.app.goo.gl/dHLFRQQzy8BJ6WPa8?g_st=ic	Priyanka  S	7624918101
5/14/2026 11:15:05	Karnataka	Hospet	https://maps.app.goo.gl/tzXfRCaXb62DBd1v7?g_st=ic	SHIVARAM H	9663574680
5/14/2026 11:15:52	Andhra Pradesh	Addanki	https://maps.app.goo.gl/MvoDYVAa7M5ZboYq8?g_st=ic	Pallerla Navya sri 	7207303889
5/14/2026 11:28:57	Karnataka	Bidar	https://maps.app.goo.gl/DcAadJD3U3UXM6QY9?g_st=aw	Ashwini 	8197007286
5/14/2026 11:32:43	Telangana	Adoni	https://share.google/IMgXJ7pmSvqpxKyva	S.Swapna	9398329925
5/14/2026 11:35:02	Telangana	Mahabubnagar	https://maps.app.goo.gl/52sjrWKNxGVR1BgT6	A. Navaneetha 	9052484810
5/14/2026 11:48:10	Andhra Pradesh	Tadepalligudam	https://maps.app.goo.gl/k2FRofUy5vaFyu9h6?g_st=aw	Sowmya mounavi 	7416231324
5/14/2026 11:53:34	Telangana	Nirmal	https://maps.app.goo.gl/em3o9TmGVUP6qq8t7	B.Lavanya	7671831461
5/14/2026 12:11:03	Karnataka	Belagavi	https://maps.app.goo.gl/1pz1aZyDUB5G6znU9?g_st=ic	Savita Narayan Kammar	9632290307
5/14/2026 12:13:45	Andhra Pradesh	Puttur	https://maps.app.goo.gl/AsHRbPJJqJFzwNbMA?g_st=ic	B Venkataharitha	8179690530
5/14/2026 12:19:29	Karnataka	Bangarpet	https://maps.app.goo.gl/qfPSBtm48Getk2Hb6	Akhila V 	7348969517
5/14/2026 14:46:13	Karnataka	Gokak	https://maps.app.goo.gl/gdbXd7JiAZCRwsKC7?g_st=ic	Shreya Medar	6363126322
5/14/2026 17:42:50	Karnataka	Sindhanur	https://maps.app.goo.gl/mbkKdZnU2obRaMZs9?g_st=ic	Sharanabasava 	8310330744
5/14/2026 18:01:23	Karnataka	Raichur	https://maps.app.goo.gl/h2JSb7fbzXdhkGnL8	Pooja	7337652360
	Karnataka	Gadag	https://maps.app.goo.gl/G4iCKG1trMmgWCWJ9?g_st=ic	Jayalakshmi	9591360411
	Karnataka	Vijayapura	https://maps.app.goo.gl/CUX7ZdqfbbM3qxmf6?g_st=ic	anitha	7338160082
	Karnataka	Ballari	https://maps.app.goo.gl/ghJMpbtGgaVnkBFo9?g_st=ic	H Ravichandra	8971085401
	Karnataka	Ranebennur	https://maps.app.goo.gl/jMB7NkRm5vLy6fP4A?g_st=ic	Vidya S Narayani	7483012269 / 8904869819
	Tamilnadu	Coimbatore	https://maps.app.goo.gl/zNn83AvdMeQp9ScH8?g_st=ic	R Silambharashan	8608202031
	Maharashtra	Kolhapur	https://maps.app.goo.gl/skwTbxEDqV6BASF7A?g_st=ic	Tejashri Arjunrav Rege	7499291015
	Andhra Pradesh	Medchal	https://maps.app.goo.gl/dwekCocRy5Hm2Gv1A?g_st=ic	Chennuri Supraja	7032476824
	Telangana	Penukonda	https://maps.app.goo.gl/97xGuRogfRMh6YXq5?g_st=ic	Boya Ajay Kumar	6301679384
	Tamilnadu	Villuppuram	https://maps.app.goo.gl/BrWK45qUQqG9rV3s6?g_st=ic	Yuvaraj Natarajan	7397702149
	Andhra Pradesh	Kurnool	https://maps.app.goo.gl/RehThnUxW5tT34zEA?g_st=ic	Madhusudhan	9121945895"""

# 1. Parse raw data into dictionary
city_updates = {}

def canonicalize_city(name):
    n = name.strip().lower()
    mapping = {
        "pimpri": "chinchwad",
        "tadepalligudam": "tadepalligudem",
        "villuppuram": "viluppuram"
    }
    return mapping.get(n, n)

for line in raw_data.split('\n'):
    if not line.strip():
        continue
    parts = line.split('\t')
    if re.match(r'^\d+/\d+/\d+', parts[0].strip()):
        parts = parts[1:]
    elif parts[0].strip() == "":
        parts = parts[1:]
    
    if len(parts) >= 5:
        state = parts[0].strip()
        city = parts[1].strip()
        map_link = parts[2].strip()
        contact_person = parts[3].strip()
        phone = parts[4].strip().replace('"', '').strip()
    else:
        continue
    
    canon_city = canonicalize_city(city)
    
    # Format contact string nicely:
    # E.g. "G. VENNELA (+91 6303348841)"
    # Clean up phone number: if it has slashes, format both
    clean_phones = []
    for p in re.split(r'/|\|', phone):
        p_clean = p.strip()
        if p_clean:
            if not p_clean.startswith('+91') and len(p_clean) == 10:
                p_clean = f"+91 {p_clean}"
            clean_phones.append(p_clean)
    
    phones_str = " / ".join(clean_phones)
    
    # Title-case contact person name nicely
    # G.VENNELA -> G.Vennela, Nivetha S (RO) -> Nivetha S (RO), Kajal -> Kajal
    def format_name(name):
        # simple title casing but keep parts like (RO) intact
        words = name.split()
        formatted_words = []
        for w in words:
            if w.upper() in ["(RO)", "RO"]:
                formatted_words.append(w.upper())
            else:
                formatted_words.append(w.title())
        return " ".join(formatted_words)
        
    formatted_contact_person = format_name(contact_person)
    
    if phones_str:
        contact_str = f"{formatted_contact_person} ({phones_str})"
    else:
        contact_str = formatted_contact_person
        
    city_updates[canon_city] = {
        "city": city,
        "state": state,
        "contact": contact_str,
        "map_link": map_link
    }

print(f"Loaded {len(city_updates)} city updates.")

# 2. Modify frontend/src/pages/contactus/Branch/Branch.jsx
branch_jsx_path = r"c:\Users\DELL\Desktop\work\nivara_website_version2\frontend\src\pages\contactus\Branch\Branch.jsx"

with open(branch_jsx_path, 'r', encoding='utf-8') as f:
    branch_jsx_content = f.read()

# We need to find block-by-block in defaultBranchesByState
# An object starts with { and ends with } under defaultBranchesByState
# Let's find defaultBranchesByState range
start_match = re.search(r'const defaultBranchesByState = \{', branch_jsx_content)
if not start_match:
    print("Could not find defaultBranchesByState in Branch.jsx")
    exit(1)

# Find matching closing brace for defaultBranchesByState
# Simple brace counting
brace_count = 1
idx = start_match.end()
while brace_count > 0 and idx < len(branch_jsx_content):
    if branch_jsx_content[idx] == '{':
        brace_count += 1
    elif branch_jsx_content[idx] == '}':
        brace_count -= 1
    idx += 1

end_idx = idx
default_branches_block = branch_jsx_content[start_match.start():end_idx]

# Within default_branches_block, match each branch object:
# {
#   city: "...",
#   opened: "...",
#   address: "...",
#   contact: "..."
# }
# Let's parse each object block and rebuild it.
def replacer(match):
    full_block = match.group(0)
    city_name = match.group(1).strip()
    canon_city = canonicalize_city(city_name)
    
    if canon_city in city_updates:
        update = city_updates[canon_city]
        # Extract existing opened and address from full_block
        opened_match = re.search(r'opened:\s*"([^"]+)"', full_block)
        address_match = re.search(r'address:\s*"([^"]+)"', full_block)
        
        opened_str = f'\n      opened: "{opened_match.group(1)}",' if opened_match else ""
        address_str = f'\n      address: "{address_match.group(1)}",' if address_match else ""
        
        new_block = f"""{{
      city: "{city_name}",{opened_str}{address_str}
      contact: "{update['contact']}",
      map_link: "{update['map_link']}"
    }}"""
        return new_block
    return full_block

# Regex to find each branch object
object_pattern = re.compile(r'\{\s*city:\s*"([^"]+)"[^\}]+?\}', re.DOTALL)
new_default_branches_block = object_pattern.sub(replacer, default_branches_block)

branch_jsx_content = branch_jsx_content[:start_match.start()] + new_default_branches_block + branch_jsx_content[end_idx:]

# Also, update openBranchMap in Branch.jsx to use map_link
# Find openBranchMap function in Branch.jsx:
# const openBranchMap = (city) => {
#   let searchQuery = `Nivara Home Finance ${city}`;
#   ...
#   window.open(...);
# };
# Let's replace it with a version that supports mapLink parameter:
open_branch_map_pattern = re.compile(r'const openBranchMap = \(city\) => \{.*?window\.open\(.*?https://www\.google\.com/maps/.*?_blank"\s*\);\s*\};', re.DOTALL)

new_open_branch_map = """const openBranchMap = (city, mapLink) => {
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
  };"""

branch_jsx_content = open_branch_map_pattern.sub(new_open_branch_map, branch_jsx_content)

# Replace the calls to openBranchMap in Branch.jsx
# 1. onClick={() => openBranchMap(branch.city)} -> onClick={() => openBranchMap(branch.city, branch.map_link)}
branch_jsx_content = branch_jsx_content.replace(
    'onClick={() => openBranchMap(branch.city)}',
    'onClick={() => openBranchMap(branch.city, branch.map_link)}'
)
branch_jsx_content = branch_jsx_content.replace(
    'onClick={() => openBranchMap(selectedBranch.city)}',
    'onClick={() => openBranchMap(selectedBranch.city, selectedBranch.map_link)}'
)

with open(branch_jsx_path, 'w', encoding='utf-8') as f:
    f.write(branch_jsx_content)

print("✅ Successfully updated frontend Branch.jsx default data and maps navigation behavior.")
