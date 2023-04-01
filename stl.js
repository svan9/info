/**
 *
 * @param {String} a
 * @returns {any|undefined}
 */
Array.prototype.findString = function (a) {
    for (const e of this) if (e == a) return e;
    return undefined;
};

async function readLocalFile(path) {
    const promise = new Promise(async function (res, rej) {
        const f = await fetch(path);
        if (f.status == 404) res("");
        res(await f.text());
    });
    let a = await promise;
    return a;
}
[...$("c")].forEach(function (e) {
    let div = document.createElement("div");
    div.classList = "flex center w1";
    div.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(div, e);
});
[...$("b")].forEach(function (e) {
    let div = document.createElement("div");
    div.classList = "bold";
    div.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(div, e);
});
[...$("tab")].forEach(function (e) {
    e.children[0].innerHTML =
        "&#10240;&#10240;&#10240;&#10240;" + e.children[0].innerHTML;
});

[...$("flist")].forEach(async (e) => {
    const fname = [...e.attributes].find((a) => a.name == "name").value;
    const fval = (await readLocalFile(fname))
        .trim()
        .replace(/\r\n/gm, "")
        .split(/;/gm)
        .filter((e) => e.length != 0);
    let htmlList = "";
    fval.forEach((val) => {
        htmlList += `<label title="${val.split(" ")[0]}"><a href="${val.split(" ")[0]}">${
            val.split(" ")[1]
        }</a></label>`;
    });
    document.body.innerHTML += `
    <div class="flist">
        <label class="bold cambo unselect pointer h_gray color"> GO TO</label>
        <list class="flex llist">
        ${htmlList}
        </list>
    </div>
    `;
});
