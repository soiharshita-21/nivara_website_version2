const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a5f9e31b-8a18-4abc-a4cd-f189302667ae\\.system_generated\\steps\\393\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all media query definitions
const mediaQueries = content.match(/@media[^{]*\{/g);

console.log("=== STAGING MEDIA QUERIES ===");
if (mediaQueries) {
  mediaQueries.forEach(mq => console.log(mq));
} else {
  console.log("No media queries found");
}
