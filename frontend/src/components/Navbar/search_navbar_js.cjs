const fs = require('fs');

const filePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a5f9e31b-8a18-4abc-a4cd-f189302667ae\\.system_generated\\steps\\416\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== SEARCHING JS FOR NAVBAR STATE MUTATIONS ===");

// Search for patterns related to setActiveDropdown, setActiveNestedDropdown, etc.
const keywords = ['setActiveDropdown', 'activeDropdown', 'setActiveNestedDropdown', 'activeNestedDropdown', 'toggleDropdown'];

keywords.forEach(kw => {
  const index = content.indexOf(kw);
  if (index !== -1) {
    console.log(`Found keyword: ${kw}`);
    // Print around the keyword
    console.log(content.substring(Math.max(0, index - 80), Math.min(content.length, index + 80)));
  } else {
    console.log(`Keyword not found: ${kw}`);
  }
});
