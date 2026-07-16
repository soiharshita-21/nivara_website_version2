const fs = require('fs');

const filePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a5f9e31b-8a18-4abc-a4cd-f189302667ae\\.system_generated\\steps\\393\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all matches for dropdown-menu
const matches = content.match(/\.dropdown-menu[^{]*\{[^}]*\}/g);

console.log("=== STAGING DROPDOWN-MENU RULES ===");
if (matches) {
  matches.forEach(m => {
    if (m.includes('hover') || m.includes('display') || m.includes('opacity') || m.includes('visibility')) {
      console.log(m);
    }
  });
} else {
  console.log("No dropdown-menu rules found");
}

// Find any hover selector on nav-item
const navItemHover = content.match(/\.nav-item[^{]*hover[^{]*\{[^}]*\}/g);
console.log("=== STAGING NAV-ITEM HOVER RULES ===");
if (navItemHover) {
  navItemHover.forEach(m => console.log(m));
}
