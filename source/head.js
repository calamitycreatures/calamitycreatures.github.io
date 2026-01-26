const scriptTag = document.currentScript;

document.head.innerHTML = `
    <head>
        <base href='../'>
        <link rel='icon' href='assets/${scriptTag.getAttribute('icon') || 'icon'}.png'>
        <link rel='stylesheet' href='${scriptTag.getAttribute('stylesheet') || 'site'}.css'>
        <title>${scriptTag.getAttribute('title') || 'Untitled Page'}</title>
    </head>
`;

scriptTag.remove();