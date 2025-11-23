// Create a button click handler
function handleClick() {
    alert('Button clicked!');
}

// Create a React element with nested elements and a button
const Element = React.createElement(
    'div',
    { className: 'container', style: { textAlign: 'center', marginTop: '50px' } },
    React.createElement('h2', { className: 'sub-heading' }, 'Hello, Anuu!'),
    React.createElement('p', null, 'This is a paragraph. You can click the button below!'),
    React.createElement(
        'button',
        { onClick: handleClick, style: { padding: '10px 20px', fontSize: '16px', cursor: 'pointer' } },
        'Click Me'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement('li', null, 'Item 1'),
        React.createElement('li', null, 'Item 2'),
        React.createElement('li', null, 'Item 3')
    )
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(Element);
