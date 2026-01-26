(function () {
    const scriptTag = document.currentScript;

    const icon = scriptTag.getAttribute('icon');
    const name = scriptTag.getAttribute('name');
    const desc = scriptTag.getAttribute('desc');
    const buttonTxt = scriptTag.getAttribute('buttonTxt');
    const link = scriptTag.getAttribute('link');

    const buttonHTML = `
    <div class="download-card rounded-xl p-4">
        <div class="flex items-center mb-2">
            <div class="platform-icon-bg p-2 rounded-lg mr-3">
                <img src="${icon}" class="w-6 h-6">
            </div>
            <h3 class="text-2xl font-bold">${name}</h3>
        </div>
        <p class="text-[#e0e0e0] mb-4">${desc}</p>
        <a href="${link}" class="download-btn bg-[#9c6b6c] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full">
            ${buttonTxt}
        </a>
    </div>
    `;

    scriptTag.insertAdjacentHTML('beforebegin', buttonHTML);
    scriptTag.remove();
})();