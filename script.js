// script.js
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'
];

// Remove leading "a ", "an ", or "the " (case-insensitive)
function stripLeadingArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Create a shallow copy, sort by the stripped title
const sorted = bands.slice().sort((a, b) => {
    const aKey = stripLeadingArticle(a).toLowerCase();
    const bKey = stripLeadingArticle(b).toLowerCase();
    if (aKey < bKey) return -1;
    if (aKey > bKey) return 1;
    return 0;
});

// Build the page body content without overwriting document.body
(function buildList() {
    // Optional container for nicer layout (doesn't overwrite body)
    const container = document.createElement('div');
    container.className = 'container';

    const heading = document.createElement('h2');
    heading.textContent = 'Article List (Alphabetically Sorted)';
    container.appendChild(heading);

    const ul = document.createElement('ul');
    ul.id = 'band'; // required id
    container.appendChild(ul);

    // Append list items
    for (const item of sorted) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }

    // Append container to the body (preserves anything else in <body>)
    document.body.appendChild(container);
})();

