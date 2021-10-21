const fs = require('fs');

const createComponentTemplate = (Component) => `
import './${Component}.css';

import React from 'react';

function ${Component}(props) {
  return (
    <div className="${Component}">
    </div>
  );
};

export default ${Component};
`;

const createContainerTemplate = (Component) => `
import React from 'react';

function ${Component}(props) {
  return (
    <div className="${Component}"}>
    </div>
  );
};

export default ${Component};
`;

const createStyleTemplate = (Component) => `

.${Component} {
}
`;

function generate() {
  const type = process.argv[2];
  const name = process.argv[3];

  if (!type || !name) {
    console.info('Usage: npm run gen [type] [name]');
    process.exit();
  }

  let filePath = `src/${type}s/${name}.jsx`;
  const isExist = fs.existsSync(filePath);
  if (isExist) throw new Error(`File already exists at ${filePath}`);

  switch (type) {
    case 'container':
      fs.writeFileSync(filePath, createContainerTemplate(name).trim());
      return;
    case 'component':
    case 'page':
      fs.writeFileSync(filePath, createComponentTemplate(name).trim());
      fs.writeFileSync(`src/${type}s/${name}.css`, createStyleTemplate(name).trim());
      return;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
}

generate();
