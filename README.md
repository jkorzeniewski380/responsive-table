# Responsive, styled data tables

Responsive data tables created with React.js

Work correctly on devices with width >= 320px

## Instalation

Use npm to install the package

```bash

npm i responsive-styled-table

```

## Usage

Component expects 2 props:

- headers: Array of strings; headers of table columns

- content: Array of arrays of strings; each array of strings representing a table row

```javascript
function App() {
  const headers = ['Small', 'Medium', 'Large'];
  const content = [
    ['Test1', 'test2', 'tEsT3'],
    ['One', 'Two', 'Three'],
    ['1', '234', 'TEST'],
  ];

  return (
    <div id="app">
      <Table headers={headers} content={content} />
    </div>
  );
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
