const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const matter = require('gray-matter');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// External essays (not generated from markdown)
const externalEssays = [
  {
    title: "First, Do No Harm: How the FDA Crippled America's COVID Response",
    description: "An analysis of how FDA regulations delayed critical COVID testing and contributed to the pandemic's spread in America.",
    date: "2024-03-15",
    url: "https://bengoldhaber.substack.com/p/first-do-no-harm-how-the-fda-crippled",
    external: true
  }
];

// Read all markdown files from content directory
const contentDir = path.join(__dirname, 'content');
const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

// Collect essay metadata
const essays = [];

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter and markdown content
  const { data, content } = matter(fileContent);

  // Convert markdown to HTML
  const htmlContent = md.render(content);

  // Build the complete HTML page
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} - Ben Goldhaber</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="back-link">
        <a href="index.html">← Back to Ben Goldhaber</a>
    </div>
    ${data.status ? `
    <div class="status-notice">
        Status: ${data.status}
    </div>` : ''}

    ${htmlContent}
</body>
</html>
`;

  // Write HTML file to root directory
  const outputFileName = file.replace('.md', '.html');
  const outputPath = path.join(__dirname, outputFileName);
  fs.writeFileSync(outputPath, html);

  // Collect metadata for essays.json
  essays.push({
    title: data.title,
    description: data.description || '',
    date: data.date || '',
    status: data.status || '',
    filename: outputFileName,
    slug: outputFileName.replace('.html', '')
  });

  console.log(`Built: ${outputFileName}`);
});

// Merge external essays with generated ones
const allEssays = [...essays, ...externalEssays];

// Sort essays by date (newest first)
allEssays.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

// Write essays metadata to JSON file
const essaysJsonPath = path.join(__dirname, 'essays.json');
fs.writeFileSync(essaysJsonPath, JSON.stringify(allEssays, null, 2));

console.log(`\nBuild complete! ${files.length} file(s) processed.`);
console.log(`Generated essays.json with ${allEssays.length} essay(s) (${externalEssays.length} external).`);
