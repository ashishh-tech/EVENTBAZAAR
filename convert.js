const fs = require('fs');
const path = require('path');

function convertHtmlToReact(htmlFile, reactName, destination) {
  const htmlPath = path.join(__dirname, htmlFile);
  if (!fs.existsSync(htmlPath)) {
    console.log(`File not found: ${htmlPath}`);
    return;
  }
  let content = fs.readFileSync(htmlPath, 'utf-8');
  
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
  const styles = styleMatch ? styleMatch[1] : '';
  
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';
  
  bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/gi, '');
  
  // Basic replacements
  bodyContent = bodyContent.replace(/class=/g, 'className=')
                           .replace(/for=/g, 'htmlFor=')
                           .replace(/onclick="[^"]*"/g, 'onClick={() => {}}')
                           .replace(/oninput="[^"]*"/g, 'onChange={() => {}}')
                           .replace(/style="display:\s*none;?"/g, 'style={{display: "none"}}')
                           .replace(/style="([^"]*)"/g, (match, p1) => {
                                const stylePairs = p1.split(';').filter(s => s.trim() !== '');
                                const jsonStyle = {};
                                stylePairs.forEach(pair => {
                                    const parts = pair.split(':');
                                    if(parts.length >= 2) {
                                      const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                                      jsonStyle[key] = parts[1].trim();
                                    }
                                });
                                return `style={${JSON.stringify(jsonStyle)}}`;
                           })
                           .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
                           .replace(/<svg(.*?)>/g, (m) => m.replace(/fill-rule/g, 'fillRule').replace(/clip-rule/g, 'clipRule'))
                           .replace(/tabindex/gi, 'tabIndex')
                           .replace(/<br>/g, '<br/>')
                           .replace(/<hr>/g, '<hr/>');

  // Fix void elements (input, img). We assume they might not be self-closed properly.
  // Actually, standard HTML might not self-close them. Let's just remove existing '/>' and put it back.
  bodyContent = bodyContent.replace(/<input([^>]*?)>/g, (m, p1) => {
      let inner = p1.replace(/\s*\/?$/, '');
      // fix unclosed onChange arrow
      inner = inner.replace(/onChange=\{.*?=>.*?\{.*?\}\}/g, 'onChange={() => {}}');
      return `<input${inner} />`;
  });
  bodyContent = bodyContent.replace(/<img([^>]*?)>/g, (m, p1) => {
      let inner = p1.replace(/\s*\/?$/, '');
      return `<img${inner} />`;
  });
  
  const compCode = `import React, { useState } from 'react';
import './${reactName}.css';

export default function ${reactName}() {
  return (
    <>
      ${bodyContent.trim()}
    </>
  );
}
`;

  fs.mkdirSync(path.join(__dirname, destination), { recursive: true });
  fs.writeFileSync(path.join(__dirname, destination, `${reactName}.css`), styles);
  fs.writeFileSync(path.join(__dirname, destination, `${reactName}.jsx`), compCode);
  console.log(`Converted ${htmlFile} to ${reactName}`);
}

convertHtmlToReact('eventbazaar-auth.html', 'Auth', 'client/src/pages');
convertHtmlToReact('eventbazaar-booking.html', 'Booking', 'client/src/pages');
