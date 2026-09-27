let categoriaAtual = "Todos";


let itens = [

/* =========================
   ANCIENTS
========================= */

{
    nome: "Gingerscope",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Harvester",
    categoria: "Ancient",
    tipo: "Gun",
    preco: ""
},

{
    nome: "Icepiercer",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Traveler's Axe",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Vampire's Axe",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Celestial",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Icebreaker",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Swirly Axe",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Elderwood Scythe",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Batwing",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Hallowscythe",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Logchopper",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},

{
    nome: "Icewing",
    categoria: "Ancient",
    tipo: "Knife",
    preco: ""
},


/* =========================
   VINTAGES
========================= */

...[
    "America",
    "Blood",
    "Cowboy",
    "Ghost",
    "Golden",
    "Laser",
    "Phaser",
    "Prince",
    "Shadow",
    "Splitter"
].map(nome => ({
    nome,
    categoria: "Vintage",
    tipo: "Knife / Gun",
    preco: ""
})),


/* =========================
   CHROMAS
========================= */

...[
    "Chroma Traveler's Gun",
    "Chroma Evergun",
    "Chroma Evergreen",
    "Chroma Bauble",
    "Chroma Constellation",
    "Chroma Vampire's Gun",
    "Chroma Alienbeam",
    "Chroma Raygun",
    "Chroma Sun Set",
    "Chroma Beach Set",
    "Chroma Snow Dagger",
    "Chroma Lightbringer",
    "Chroma Darkbringer",
    "Chroma Luger",
    "Chroma Heat",
    "Chroma Laser",
    "Chroma Fang",
    "Chroma Shark",
    "Chroma Slasher",
    "Chroma Gemstone",
    "Chroma Saw",
    "Chroma Seer",
    "Chroma Deathshard",
    "Chroma Gingerblade",
    "Chroma Boneblade",
    "Chroma Candleflame",
    "Chroma Cookiecane",
    "Chroma Swirlygun"
].map(nome => ({
    nome,
    categoria: "Chroma",
    tipo: "Chroma",
    preco: ""
})),


/* =========================
   GODLY GUNS
========================= */

...[
    "Traveler's Gun",
    "Evergun",
    "Constellation",
    "Vampire's Gun",
    "Darkshot",
    "Blossom",
    "Sunrise",
    "Alienbeam",
    "Raygun",
    "Ocean Gun",
    "Rainbow Gun",
    "Snowcannon",
    "Blizzard",
    "Flowerwood Gun",
    "Xenoshot",
    "Pearlshine Gun",
    "Sands Gun",
    "Lightbringer",
    "Darkbringer",
    "Luger",
    "Laser",
    "Shark",
    "Blaster",
    "Virtual",
    "Amerilaser",
    "Old Glory",
    "Clockwork",
    "Pixel",
    "Iceblaster",
    "Jinglegun",
    "Lugercane",
    "Green Luger",
    "Red Luger",
    "Ginger Luger",
    "Minty",
    "Peppermint",
    "Frostbite",
    "Hallowgun",
    "Pumpking",
    "Gingermint"
].map(nome => ({
    nome,
    categoria: "Godly",
    tipo: "Gun",
    preco: ""
})),


/* =========================
   GODLY KNIVES
========================= */

...[
    "Evergreen",
    "Darksword",
    "Sakura",
    "Sunset",
    "Spirit",
    "Soul",
    "Rainbow",
    "Xenoknife",
    "Bloom",
    "Heart Wand",
    "Waves",
    "Flowerwood Knife",
    "Snowstorm Knife",
    "Snow Dagger",
    "Gemstone",
    "Bioblade",
    "Prismatic",
    "Heartblade",
    "Eggblade",
    "Cookieblade",
    "Ghostblade",
    "Nightblade",
    "Flames",
    "Heat",
    "Tides",
    "Fang",
    "Slasher",
    "Saw",
    "Deathshard",
    "Seer",
    "Blue Seer",
    "Red Seer",
    "Purple Seer",
    "Yellow Seer",
    "Orange Seer",
    "Candy",
    "Sugar",
    "Ice Dragon",
    "Snowflake",
    "Frostsaber",
    "Gingerblade",
    "Winters Edge",
    "Xmas",
    "Chill",
    "Cane",
    "Handsaw",
    "Hallows Blade",
    "Hallow's Edge",
    "Battle Axe",
    "Battle Axe II",
    "Boneblade",
    "Vampire's Edge",
    "Spider",
    "Corrupt",
    "Pearl",
    "Sweet Knife",
    "Icecream Knife",
    "Beachy Knife",
    "Swirlyblade",
    "Eternal",
    "Eternal II",
    "Eternal III",
    "Eternal IV",
    "Eternalcane"
].map(nome => ({
    nome,
    categoria: "Godly",
    tipo: "Knife",
    preco: ""
}))

];


function selecionarCategoria(categoria) {

    categoriaAtual = categoria;

    mostrarItens();

}


function mostrarItens() {

    let pesquisa =
        document
        .getElementById("pesquisa")
        .value
        .toLowerCase();


    let filtrados = itens.filter(item => {

        let categoriaOk =
            categoriaAtual === "Todos" ||
            item.categoria === categoriaAtual;


        let pesquisaOk =
            item.nome
            .toLowerCase()
            .includes(pesquisa);


        return categoriaOk && pesquisaOk;

    });


    document.getElementById("quantidade").innerText =
        filtrados.length + " item(ns) encontrado(s)";


    let lista =
        document.getElementById("listaItens");


    if (filtrados.length === 0) {

        lista.innerHTML =
            "<p>Nenhum item encontrado.</p>";

        return;

    }


    lista.innerHTML =
        filtrados.map(item => `

            <div class="item">

                <div class="categoria">
                    ${item.categoria}
                </div>

                <h3>
                    ${item.nome}
                </h3>

                <div class="tipo">
                    ${item.tipo}
                </div>

                <div class="preco">

                    ${
                        item.preco
                        ? "R$ " + item.preco
                        : "Preço não definido"
                    }

                </div>

            </div>

        `).join("");

}


function abrirPainel() {

    document.getElementById("painel")
        .style.display = "flex";

    atualizarPainel();

}


function fecharPainel() {

    document.getElementById("painel")
        .style.display = "none";

}


function salvarPreco() {

    let nome =
        document
        .getElementById("nomeItem")
        .value
        .trim();


    let preco =
        document
        .getElementById("precoItem")
        .value;


    if (!nome) {

        alert("Digite o nome do item.");

        return;

    }


    let item =
        itens.find(
            x =>
            x.nome.toLowerCase() ===
            nome.toLowerCase()
        );


    if (!item) {

        alert("Item não encontrado.");

        return;

    }


    item.preco = Number(preco)
        .toFixed(2)
        .replace(".", ",");


    salvarDados();

    atualizarPainel();

    mostrarItens();


    document.getElementById("nomeItem")
        .value = "";

    document.getElementById("precoItem")
        .value = "";

}


function atualizarPainel() {

    let painel =
        document.getElementById("listaPainel");


    painel.innerHTML = itens.map(item => `

        <div class="admin-item">

            <span>
                ${item.nome}
                —
                ${
                    item.preco
                    ? "R$ " + item.preco
                    : "Sem preço"
                }
            </span>

            <button
                class="editar"
                onclick="editarItem('${item.nome.replace(/'/g, "\\'")}')"
            >
                Editar
            </button>

        </div>

    `).join("");

}


function editarItem(nome) {

    let item =
        itens.find(x => x.nome === nome);


    document.getElementById("nomeItem")
        .value = item.nome;


    document.getElementById("categoriaItem")
        .value = item.categoria;


    document.getElementById("precoItem")
        .value =
        item.preco
        ? item.preco.replace(",", ".")
        : "";

}


function salvarDados() {

    localStorage.setItem(
        "YUKI_MM2_ITENS",
        JSON.stringify(itens)
    );

}


function carregarDados() {

    let dados =
        localStorage.getItem(
            "YUKI_MM2_ITENS"
        );


    if (dados) {

        itens = JSON.parse(dados);

    }

}


carregarDados();

mostrarItens();