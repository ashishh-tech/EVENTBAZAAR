const fs = require('fs');

function build(file, name) {
  if(!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  let styleMatch = content.match(/<style>([\s\S]*)<\/style>/i);
  let style = styleMatch ? styleMatch[1] : '';
  let bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : '';
  body = body.replace(/<script>[\s\S]*<\/script>/gi, '');
  
  // write css
  fs.writeFileSync(`client/src/pages/${name}.css`, style);
  // write jsx
  let jsx = `import React from 'react';\nimport './${name}.css';\n\nexport default function ${name}() {\n  return (\n    <div className="__bazaar_${name}" dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />\n  );\n}\n`;
  fs.writeFileSync(`client/src/pages/${name}.jsx`, jsx);
}

build('eventbazaar-auth.html', 'Auth');
build('eventbazaar-booking.html', 'Booking');
build('eventbazaar-chat.html', 'Chat');
console.log('Conversion successful!');
