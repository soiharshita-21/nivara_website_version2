const fs = require('fs');

const stagingFilePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a5f9e31b-8a18-4abc-a4cd-f189302667ae\\.system_generated\\steps\\393\\content.md';
const stagingContent = fs.readFileSync(stagingFilePath, 'utf8');

const localFilePath = 'c:\\Users\\DELL\\Desktop\\v2\\nivara_website_version2\\frontend\\src\\components\\Navbar\\navbar.css';
const localContent = fs.readFileSync(localFilePath, 'utf8');

function cleanCSS(str) {
  return str.replace(/\s+/g, '').replace(/;/g, ';').toLowerCase();
}

console.log("=== COMPARING MAIN HOVER SELECTORS ===");

const selectors = [
  '.nav-item.dropdown:hover>.dropdown-menu',
  '.nested-dropdown:hover>.nested-menu',
  '.sub-nested-dropdown:hover>.sub-nested-menu',
  '.nested-dropdown:hover>.nested-trigger',
  '.sub-nested-dropdown:hover>.sub-nested-trigger'
];

selectors.forEach(sel => {
  const cleanSel = cleanCSS(sel);
  const stagingMatch = stagingContent.match(new RegExp(cleanSel.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '[^{]*\\{[^}]*\\}', 'i'));
  const localMatch = localContent.match(new RegExp(sel.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '\\s*\\{[^}]*\\}', 'i'));

  console.log(`\nSelector: ${sel}`);
  console.log("Staging match:", stagingMatch ? stagingMatch[0] : "NOT FOUND");
  console.log("Local match:", localMatch ? localMatch[0] : "NOT FOUND");
});
