import re
import os

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
city_updates = []

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
    
    # Format contact string:
    clean_phones = []
    for p in re.split(r'/|\|', phone):
        p_clean = p.strip()
        if p_clean:
            if not p_clean.startswith('+91') and len(p_clean) == 10:
                p_clean = f"+91 {p_clean}"
            clean_phones.append(p_clean)
    
    phones_str = " / ".join(clean_phones)
    
    def format_name(name):
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
        
    city_updates.append({
        "city": city,
        "canon_city": canon_city,
        "state": state,
        "contact": contact_str,
        "map_link": map_link
    })

# 2. Modify backend/create_branches_table.js
create_branches_path = r"c:\Users\DELL\Desktop\work\nivara_website_version2\backend\create_branches_table.js"

with open(create_branches_path, 'r', encoding='utf-8') as f:
    cb_content = f.read()

# 2.1 Update table schema to include map_link VARCHAR(1000) DEFAULT NULL
if "map_link VARCHAR(1000)" not in cb_content:
    cb_content = cb_content.replace(
        "contact VARCHAR(255) NOT NULL,",
        "contact VARCHAR(255) NOT NULL,\n            map_link VARCHAR(1000) DEFAULT NULL,"
    )

# 2.2 Update insertion SQL statement
if "map_link" not in cb_content.split('\n')[747]: # line 747 has insertSql in some versions, but check presence
    cb_content = cb_content.replace(
        "const insertSql = \"INSERT INTO branches (city, state, opened, address, contact, is_new) VALUES ?\";",
        "const insertSql = \"INSERT INTO branches (city, state, opened, address, contact, map_link, is_new) VALUES ?\";"
    )

# 2.3 Update seeder mapping logic to include map_link field in values list:
cb_content = cb_content.replace(
    """                    values.push([
                        branch.city,
                        mappedStateName,
                        branch.opened,
                        branch.address,
                        branch.contact,
                        isNew ? 1 : 0
                    ]);""",
    """                    values.push([
                        branch.city,
                        mappedStateName,
                        branch.opened,
                        branch.address,
                        branch.contact,
                        branch.map_link || null,
                        isNew ? 1 : 0
                    ]);"""
)

# 2.4 Update defaultBranchesByState in create_branches_table.js using block substitution:
start_match = re.search(r'const defaultBranchesByState = \{', cb_content)
if start_match:
    brace_count = 1
    idx = start_match.end()
    while brace_count > 0 and idx < len(cb_content):
        if cb_content[idx] == '{':
            brace_count += 1
        elif cb_content[idx] == '}':
            brace_count -= 1
        idx += 1
    end_idx = idx
    default_branches_block = cb_content[start_match.start():end_idx]
    
    # Dictionary of updates for easy lookup
    city_up_dict = {up["canon_city"]: up for up in city_updates}
    
    def replacer(match):
        full_block = match.group(0)
        city_name = match.group(1).strip()
        canon_city = canonicalize_city(city_name)
        if canon_city in city_up_dict:
            update = city_up_dict[canon_city]
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

    object_pattern = re.compile(r'\{\s*city:\s*"([^"]+)"[^\}]+?\}', re.DOTALL)
    new_default_branches_block = object_pattern.sub(replacer, default_branches_block)
    cb_content = cb_content[:start_match.start()] + new_default_branches_block + cb_content[end_idx:]

with open(create_branches_path, 'w', encoding='utf-8') as f:
    f.write(cb_content)

print("Updated create_branches_table.js")

# 3. Modify backend/index.js
index_js_path = r"c:\Users\DELL\Desktop\work\nivara_website_version2\backend\index.js"
with open(index_js_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

# 3.1 Update GET /api/branches query
index_content = index_content.replace(
    "SELECT id, city, state, DATE_FORMAT(opened, '%Y-%m-%d') AS opened, address, contact, is_new FROM branches ORDER BY city ASC",
    "SELECT id, city, state, DATE_FORMAT(opened, '%Y-%m-%d') AS opened, address, contact, map_link, is_new FROM branches ORDER BY city ASC"
)

# 3.2 Update POST /api/branches validation & insert query
index_content = index_content.replace(
    "const { city, state, opened, address, contact, is_new } = req.body;\n    const query = \"INSERT INTO branches (city, state, opened, address, contact, is_new) VALUES (?, ?, ?, ?, ?, ?)\";\n    db.query(query, [city, state, opened, address, contact, is_new ? 1 : 0]",
    "const { city, state, opened, address, contact, map_link, is_new } = req.body;\n    const query = \"INSERT INTO branches (city, state, opened, address, contact, map_link, is_new) VALUES (?, ?, ?, ?, ?, ?, ?)\";\n    db.query(query, [city, state, opened, address, contact, map_link || null, is_new ? 1 : 0]"
)

# 3.3 Update PUT /api/branches validation & update query
index_content = index_content.replace(
    "const { city, state, opened, address, contact, is_new } = req.body;\n    const query = \"UPDATE branches SET city = ?, state = ?, opened = ?, address = ?, contact = ?, is_new = ? WHERE id = ?\";\n    db.query(query, [city, state, opened, address, contact, is_new ? 1 : 0, req.validatedId]",
    "const { city, state, opened, address, contact, map_link, is_new } = req.body;\n    const query = \"UPDATE branches SET city = ?, state = ?, opened = ?, address = ?, contact = ?, map_link = ?, is_new = ? WHERE id = ?\";\n    db.query(query, [city, state, opened, address, contact, map_link || null, is_new ? 1 : 0, req.validatedId]"
)

with open(index_js_path, 'w', encoding='utf-8') as f:
    f.write(index_content)

print("Updated backend/index.js")

# 4. Generate MySQL migration & update script
db_update_script = r"c:\Users\DELL\Desktop\work\nivara_website_version2\backend\apply_metadata_db.js"

updates_array_js = "[\n"
for up in city_updates:
    updates_array_js += f"  {{ city: \"{up['city']}\", canon_city: \"{up['canon_city']}\", contact: \"{up['contact']}\", map_link: \"{up['map_link']}\" }},\n"
updates_array_js += "]"

js_db_code = f"""const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({{
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
}});

const updates = {updates_array_js};

db.connect(err => {{
  if (err) {{
    console.error("❌ Failed to connect to MySQL database:", err.message);
    process.exit(1);
  }}
  console.log("✅ Connected to MySQL database.");

  // 1. Add map_link column if not exists
  db.query("ALTER TABLE branches ADD COLUMN IF NOT EXISTS map_link VARCHAR(1000) DEFAULT NULL", (err, result) => {{
    if (err) {{
      // Try alternative for older MySQL versions
      console.log("Adding column using ALTER statement...");
      db.query("ALTER TABLE branches ADD COLUMN map_link VARCHAR(1000) DEFAULT NULL", (err2) => {{
        if (err2 && !err2.message.includes("Duplicate column name")) {{
          console.error("❌ Error adding map_link column:", err2.message);
          process.exit(1);
        }}
        console.log("✅ map_link column verified/created.");
        runUpdates();
      }});
    }} else {{
      console.log("✅ map_link column verified/created.");
      runUpdates();
    }}
  }});

  function runUpdates() {{
    let completed = 0;
    updates.forEach(up => {{
      const sql = "UPDATE branches SET contact = ?, map_link = ? WHERE LOWER(city) = LOWER(?) OR LOWER(city) = LOWER(?)";
      db.query(sql, [up.contact, up.map_link, up.city, up.canon_city], (err, res) => {{
        if (err) {{
          console.error("Error updating " + up.city + ":", err.message);
        }} else {{
          console.log("Updated " + up.city + ". Affected rows: " + res.affectedRows);
        }}
        next();
      }});
    }});

    function next() {{
      completed++;
      if (completed === updates.length) {{
        console.log("Database updates successfully applied.");
        db.end(err => {{
          if (err) console.error("Error closing connection:", err.message);
          process.exit(0);
        }});
      }}
    }}
  }}
}});
"""

with open(db_update_script, 'w', encoding='utf-8') as f:
    f.write(js_db_code)

print("Generated backend database migration script.")
