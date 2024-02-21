const dgDados={ 
    destino : 'divDbGrid',
    local   : 'pt-br'    ,
    moeda   : 'BRL'      ,
    funcoes: {
        grid   : { linha : "H"    , cor   : "black"},
        filtro : { hide  : false , campo  : 1 },
        rodape : { hide  : false},
        titulo : { hide  : false , cor    : '#49F' },
        acoes  : { hide  : false , titulo : 'Ações', width: '90px', align: 'center'},
        icones : {
            switch : { hide: false  , name: 'lock-open-outline', func : ()=>{alert("Executa Função para switch")}},
            edit   : { hide: false  , name: 'pencil-outline'   , func : ()=>{alert("Executa Função para Editar")}},
            delete : { hide: false  , name: 'trash-outline'    , func : ()=>{alert("Executa Função Apagar")}},
            view   : { hide: false  , name: 'call-outline'     , func : ()=>{alert("Executa Função Mostrar")}},
            photo  : { hide: false  , name: 'camera-outline'   , func : ()=>{alert("Executa Função Foto")}},
        }
    },
    campos: [
        { campo : 'CODIGO', titulo: 'Id'                , formato: 'g'        , width: '70px' , align: 'left'  , soma : false},
        { campo : 'NOME'  , titulo: 'Nome Produto'      , formato: 'g'        , width: '350px', align: 'left'  , soma : false},
        { campo : 'PRECO1', titulo: 'Preço'             , formato: 'monetario', width: '150px', align: 'right' , soma : true },
        { campo : 'DATAUV', titulo: 'Data Venda'        , formato: 'date'     , width: '150px', align: 'center', soma : false},
    ]
}