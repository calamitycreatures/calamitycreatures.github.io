(function () {
    const scriptTag = document.currentScript;

    const role = scriptTag.getAttribute('role');
    const name = scriptTag.getAttribute('name');
    const last = scriptTag.getAttribute('last');

    const buttonHTML = `
    <h3 class="text-2xl font-bold text-center">${role}</h3>
	<p class="text-xl font-medium text-center mb-${last === "true" ? 0 : 4}">${name}</p>
	${last === "true" ? `` : `<div class="border-2 border-[#543b46] mb-4"></div>`}
    `;

    scriptTag.insertAdjacentHTML('beforebegin', buttonHTML);
    scriptTag.remove();
})();