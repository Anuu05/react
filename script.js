const Element = React.createElement('h2', {className: 'sub-heading'}, 'Hello',
    React.createElement('p',null,'This is a paragraph')
)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(Element)