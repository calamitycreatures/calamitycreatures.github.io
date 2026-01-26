document.querySelectorAll('include').forEach(async include => {
    try {
        const response = await fetch(include.getAttribute('src'));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const scripts = Array.from(tempDiv.querySelectorAll('script'));

        include.replaceWith(...Array.from(tempDiv.childNodes));

        scripts.forEach(oldScript => {
            const parent = oldScript.parentNode;
            if (!parent) return;

            const newScript = document.createElement('script');

            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            if (oldScript.textContent) {
                newScript.textContent = oldScript.textContent;
            }

            parent.replaceChild(newScript, oldScript);
        });
    } catch (error) {
        console.error('Error loading include:', include.getAttribute('src'), error);
    }
});