const fs = require('fs');

const filePath = 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\a5f9e31b-8a18-4abc-a4cd-f189302667ae\\.system_generated\\steps\\416\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== SEARCHING STAGING JS FOR MOUSE EVENTS ===");
const hasMouseEnter = content.includes('onMouseEnter') || content.includes('onmouseenter') || content.includes('mouseenter');
const hasMouseLeave = content.includes('onMouseLeave') || content.includes('onmouseleave') || content.includes('mouseleave');

console.log("hasMouseEnter:", hasMouseEnter);
console.log("hasMouseLeave:", hasMouseLeave);

// Let's find any occurrences of 'onmouseenter' or 'onmouseleave' with context
const regex = /.{0,50}(mouseenter|mouseleave|onMouseEnter|onMouseLeave).{0,50}/gi;
const matches = content.match(regex);
if (matches) {
  matches.slice(0, 10).forEach(m => console.log(m));
} else {
  console.log("No specific mouse event triggers found in JS.");
}
