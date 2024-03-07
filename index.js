import { DataGrid } from "./src/dataGrid.js"; 
const divBase = document.querySelector('#divBase')
const divHead = document.querySelector('#divHead')
const divParte1 = document.querySelector('#divParte1')
const divGrupo1 = document.querySelector('#divGrupo1')
const divParte2E= document.querySelector('#divParte2E')
var h1TextArea = document.querySelector('#h1TextArea')
const divParte2D = document.querySelector('#divParte2D')
var h2TextArea = document.querySelector('#h2TextArea')
const divBotoes = document.querySelector('#divBotoes')
const divDbGrid = document.querySelector('#divDbGrid')
const divConteudo = document.querySelector('#divConteudo')
const btnGerar = document.querySelector('#btnGerar')
const btnClasse = document.querySelector('#btnClasse')
const btnObjeto = document.querySelector('#btnObjeto')
const teste = document.querySelector('#teste')
const dataJson =[
    {
        "CODIGO": 1,
        "LINHA": "01.02               ",
        "NOME": "BATERIA ELETRAN 150 HA  (CANCELADO)",
        "REFERE": "RANGER",
        "UNIDAD": "UND",
        "CBARRA": "-0",
        "IMPOST": "II      ",
        "CODFAB": "150AH",
        "DATAPA": "2010-07-12T03:00:00.000Z",
        "DATAUV": "2010-10-23T02:00:00.000Z",
        "DATAUC": "2010-07-15T03:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 262,
        "CUSTO": 262,
        "VALOUC": 262,
        "VALOUV": 372.6,
        "PRECO1": 544.47,
        "PRECO2": 574.13,
    },
    {
        "CODIGO": 2,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 255 75-15 SCORPION",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "2557515ST",
        "DATAPA": null,
        "DATAUV": "2009-07-10T03:00:00.000Z",
        "DATAUC": null,
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 500,
        "CUSTO": 500,
        "VALOUC": 500,
        "VALOUV": 622,
        "PRECO1": 626.89,
        "PRECO2": 659.88,
    },
    {
        "CODIGO": 3,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 1757013 P400",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "1757013P40",
        "DATAPA": null,
        "DATAUV": "2010-04-20T03:00:00.000Z",
        "DATAUC": "2010-04-08T03:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 139.31,
        "CUSTO": 140,
        "VALOUC": 140,
        "VALOUV": 163,
        "PRECO1": 179,
        "PRECO2": 188,
    },
    {
        "CODIGO": 4,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 1657013CINT P4",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "1657013P4",
        "DATAPA": null,
        "DATAUV": "2009-12-10T02:00:00.000Z",
        "DATAUC": "2009-12-03T02:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 154.5,
        "CUSTO": 154.5,
        "VALOUC": 154.5,
        "VALOUV": 189,
        "PRECO1": 190.49,
        "PRECO2": 200.51,
    },
    {
        "CODIGO": 5,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 1657013 P400",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "1657013P40",
        "DATAPA": null,
        "DATAUV": "2010-04-12T03:00:00.000Z",
        "DATAUC": "2009-12-04T02:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 126,
        "CUSTO": 126,
        "VALOUC": 126,
        "VALOUV": 175,
        "PRECO1": 176.38,
        "PRECO2": 185.66,
    },
    {
        "CODIGO": 6,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 195 70-14 P400",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "1957014P40",
        "DATAPA": null,
        "DATAUV": "2009-12-04T02:00:00.000Z",
        "DATAUC": "2009-09-02T03:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 0,
        "CUSTO": 215,
        "VALOUC": 215,
        "VALOUV": 262,
        "PRECO1": 264.06,
        "PRECO2": 277.96,
    },
    {
        "CODIGO": 7,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 600-16MILITAR",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "600-16MILI",
        "DATAPA": null,
        "DATAUV": "2009-05-09T03:00:00.000Z",
        "DATAUC": null,
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 271,
        "CUSTO": 271,
        "VALOUC": 271,
        "VALOUV": 363.46,
        "PRECO1": 366.32,
        "PRECO2": 385.59,
    },
    {
        "CODIGO": 8,
        "LINHA": "01.01               ",
        "NOME": "PNEU PIRELLI 225-75-15 ST",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "2257515ST",
        "DATAPA": null,
        "DATAUV": "2007-12-24T02:00:00.000Z",
        "DATAUC": null,
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 345,
        "CUSTO": 345,
        "VALOUC": 345,
        "VALOUV": 508.48,
        "PRECO1": 512.48,
        "PRECO2": 539.44,
    },
    {
        "CODIGO": 9,
        "LINHA": "01.04               ",
        "NOME": "CAMARA PIRELLI 1000-20PIRELLI",
        "REFERE": "PIRELLI CAR",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "ARO1000-20",
        "DATAPA": null,
        "DATAUV": "2010-04-15T03:00:00.000Z",
        "DATAUC": "2010-04-13T03:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 70.48,
        "CUSTO": 73,
        "VALOUC": 73,
        "VALOUV": 96.32,
        "PRECO1": 90.18,
        "PRECO2": 94.42,
    },
    {
        "CODIGO": 10,
        "LINHA": "01.01               ",
        "NOME": "CAMARA MAGION CAMARA ARO 13 MAGION",
        "REFERE": "MAGION",
        "UNIDAD": "UND",
        "IMPOST": "II      ",
        "CANCEL": -1,
        "CODFAB": "ARO 13 MAG",
        "DATAPA": null,
        "DATAUV": "2010-04-15T03:00:00.000Z",
        "DATAUC": "2010-04-22T03:00:00.000Z",
        "ESTOQU": 0,
        "BASECA": 0,
        "ICMS": 17,
        "IPI": 5,
        "CUSTOM": 15.37,
        "CUSTO": 15.5,
        "VALOUC": 15.5,
        "VALOUV": 22.5,
        "PRECO1": 22.02,
        "PRECO2": 23.18,
    }
]
const dgDados={
    destino : '#divDbGrid',
    local   : 'pt-br'    ,
    moeda   : 'BRL'      ,
    funcoes: {
        grid   : { linha : ""   , cor : "black"},
        filtro : { hide : false , campo : 1       ,selectHide : false},
        rodape : { hide : false},
        onclose: { hide : false , funcao : ()=>{}},
        titulo : { hide : false , cor   : '#49F' },
        acoes  : { hide : false , titulo: 'Ações' , width: '90px', align: 'center',"material" : "ion-icon",clicklinha : ()=>{} },
        icones : {
            switch : { hide: false  , name: 'lock-open-outline', func : ()=>{alert("Executa Função para switch")}},
            edit   : { hide: false  , name: 'pencil-outline'   , func : ()=>{alert("Executa Função para Editar")}},
            delete : { hide: false  , name: 'trash-outline'    , func : ()=>{alert("Executa Função Apagar")}},
            view   : { hide: false  , name: 'call-outline'     , func : ()=>{alert("Executa Função Mostrar")}},
            photo  : { hide: false  , name: 'camera-outline'   , func : ()=>{alert("Executa Função Foto")}},
        }
    },
    campos: [
        { campo : 'CODIGO', titulo: 'Id'                , formato: 'g' , width: '70px' , align: 'left'  , soma : false},
        { campo : 'NOME'  , titulo: 'Nome Produto'      , formato: 'g' , width: '350px', align: 'left'  , soma : false},
        { campo : 'PRECO1', titulo: 'Preço'             , formato: 'M' , width: '150px', align: 'right' , soma : true },
        { campo : 'DATAUV', titulo: 'Data Venda'        , formato: 'D' , width: '150px', align: 'center', soma : false},
    ]
}

var dgDados1=[]
dgDados1.push('{')
dgDados1.push('"destino" : "#divDbGrid",')
dgDados1.push('"local"   : "pt-br"    ,') 
dgDados1.push('"moeda"   : "BRL"      ,')
dgDados1.push('"funcoes" : {')
dgDados1.push('    "grid"   : { "linha" : "" , "cor" : "black"},')
dgDados1.push('    "filtro" : { "hide" : false , "campo" : 1       ,"selectHide" : false},')
dgDados1.push('    "rodape" : { "hide" : false},')
dgDados1.push('    "onclose": { "hide" : false , "funcao" : "()=>{suaFuncaoAqui()}"},')
dgDados1.push('    "titulo" : { "hide" : false , "cor"   : "#49F"} ,')
dgDados1.push('    "acoes"  : { "hide" : false , "titulo": "Ações" , "width": "90px", "align": "center","material" : "ion-icon" ,"clicklinha" : "()=>{suaFuncaoAqui()}"},')
dgDados1.push('    "icones" : {')
dgDados1.push('"switch" : { "hide": false  , "name": "lock-open-outline", "func" : ()=>{SuaFuncao()}},')
dgDados1.push('"edit"   : { "hide": false  , "name": "pencil-outline"   , "func" : ()=>{SuaFuncao()}},')
dgDados1.push('"delete" : { "hide": false  , "name": "trash-outline"    , "func" : ()=>{SuaFuncao()}},')
dgDados1.push('"view"   : { "hide": false  , "name": "call-outline"     , "func" : ()=>{SuaFuncao()}},')
dgDados1.push('"photo"  : { "hide": false  , "name": "camera-outline"   , "func" : ()=>{SuaFuncao()}}')
dgDados1.push('     }')
dgDados1.push('},')
dgDados1.push('"campos": [')
dgDados1.push('{ "campo" : "CODIGO", "titulo": "Id"        , "formato": "g" , "width": "70px" , "align": "left"  , "soma" : false},')
dgDados1.push('{ "campo" : "NOME"  , "titulo": "Produto"   , "formato": "g" , "width": "350px", "align": "left"  , "soma" : false},')
dgDados1.push('{ "campo" : "PRECO1", "titulo": "Preço"     , "formato": "M" , "width": "150px", "align": "right" , "soma" : true },')
dgDados1.push('{ "campo" : "DATAUV", "titulo": "Data Venda", "formato": "D" , "width": "150px", "align": "center", "soma" : false}')
dgDados1.push('    ]')
dgDados1.push('}')
h2TextArea.value=JSON.stringify(dataJson,null,4)
h1TextArea.value=""
dgDados1.map((ele,id)=>{
    h1TextArea.value += '\n'+ele
})
btnGerar.addEventListener('click',(evt)=>{
    const h1TextJason= h1TextArea.value.replaceAll('()=>{SuaFuncao()}','""');
    
    DataGrid.criaLista((JSON.parse(h1TextJason)),JSON.parse(h2TextArea.value))
    DataGrid.dgDados.funcoes.icones.switch.func=()=>{alert('Você clicou na função DESATIVAR, crie um funcão para executar aquilo que você que e coloque a chamada aqui. o produto que você clicou foi "'+DataGrid.campoRetorno.NOME+'" com Id = '+DataGrid.campoRetorno.CODIGO)}
    DataGrid.dgDados.funcoes.icones.edit.func=()=>{alert('Você clicou na função EDITAR, crie um funcão para executar aquilo que você que e coloque a chamada aqui. o produto que você clicou foi "'+DataGrid.campoRetorno.NOME+'"'+'" com Id = '+DataGrid.campoRetorno.CODIGO)}
    DataGrid.dgDados.funcoes.icones.delete.func=()=>{alert('Você clicou na função APAGAR, crie um funcão para executar aquilo que você que e coloque a chamada aqui. o produto que você clicou foi "'+DataGrid.campoRetorno.NOME+'"'+'" com Id = '+DataGrid.campoRetorno.CODIGO)}
    DataGrid.dgDados.funcoes.icones.view.func=()=>{alert('Você clicou na função TELEFONES, crie um funcão para executar aquilo que você que e coloque a chamada aqui. o produto que você clicou foi "'+DataGrid.campoRetorno.NOME+'"'+'" com Id = '+DataGrid.campoRetorno.CODIGO)}
    DataGrid.dgDados.funcoes.icones.photo.func=()=>{alert('Você clicou na função FOTO, crie um funcão para executar aquilo que você que e coloque a chamada aqui. o produto que você clicou foi "'+DataGrid.campoRetorno.NOME+'"'+'" com Id = '+DataGrid.campoRetorno.CODIGO)}
})

btnClasse.addEventListener('click', (evt) => {
    fetch('./src/dagaGrid.js')
        .then(response => response.blob())
        .then(blob => {
            var downloadUrl = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.style.display = 'none';
            a.href = downloadUrl;
            a.download = 'dataGrid.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
        });
})

btnObjeto.addEventListener('click', (evt) => {
    fetch('./src/objeto.js')
        .then(response => response.blob())
        .then(blob => {
            var downloadUrl = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.style.display = 'none';
            a.href = downloadUrl;
            a.download = 'objeto.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(downloadUrl);
        });
})