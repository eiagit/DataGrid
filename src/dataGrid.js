//************************************//
//**                                **//
//**   Designed by                  **//
//**   Antonio Ennio de Jesus       **//
//**   Eia_99@yahoo.com             **//
//**   Class DataGrid.js 02/2024    **//
//**   Vera Cruz - Itaparica Bahia  **//
//**                                **//
//************************************//

class DataGrid {
    static campoRetorno = undefined;
    static titulo = undefined;
    static grid = undefined;
    static dgDestino = undefined
    static titulo = 'Janela Grid View';
    static dgDados = undefined;
    static baseStyle = 'display: flex;' +
        'justify-content: flex-start;' +
        'align-items: flex-start;' +
        'flex-direction: column;'
        'background-color = white;'
    static titleStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: row;'
        + 'background-color: rgb(206, 206, 206);'
        + 'border-radius: 5px 5px 0 0;'
        + 'width : 100%;'
        + 'padding:  5px 3px 5px 3px'
    static lineStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: row;'
        + 'width : 100%;'
    static dataStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: column;'
        + 'width : 100%'
    static rodapeStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: row;'
        + 'background-color: rgb(206, 206, 206);'
        + 'border-radius: 0px 0px 5px 5px;'
        + 'width : 100%;'
        + 'padding:  5px 3px 5px 3px'
    static filtroStyle = 'display : flex;'
        + 'justify-content : center;'
        + 'align-itens : center;'
        + 'width : 100%;'
        + 'margin-bottom : 10px;'
    static inputStyle = 'display : flex;'
        + 'border-radius : 5px;'
        + 'width : 250px;'
        + 'padding : 5px;'
        + 'background-color : rgb(223,223,233)'
    static criaLista = (dgDados, dgData) => {
        this.dgDados = dgDados
        this.dgDestino = document.querySelector('#'+dgDados.destino)
        const doc = this.dgDestino.querySelector('#dgBase')
        if (doc) doc.remove()
        const documento = document.head
        const scriptIcons = document.createElement('script')
        scriptIcons.setAttribute('type', 'module');
        scriptIcons.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js')
        document.head.appendChild(scriptIcons)

        const stylelinha = '.dgvLinha:nth-child(odd){' +
            'background-color: rgb(241, 241, 241);}' +
            '.dgvLinha:hover{' +
            'background-color: rgb(223, 223, 233);' +
            'cursor: pointer;}' +
            '.dgvTitulos div, .dgvLinha div{' +
            'padding:  5px 0 5px 0;}'

        const styleLinha = document.createElement('style')
        styleLinha.innerHTML += stylelinha;
        documento.appendChild(styleLinha)

        const base = document.createElement('DIV')
        base.setAttribute('id', 'dgBase');
        base.setAttribute('class', 'dgBase');
        base.setAttribute('style', this.baseStyle)
        this.dgDestino.appendChild(base);

        if (!dgDados.funcoes.filtro.hide) {
            const filtro = document.createElement('DIV');
            filtro.setAttribute('id', 'dgFiltro');
            filtro.setAttribute('class', 'divFiltro');
            filtro.setAttribute('style', this.filtroStyle)
            base.appendChild(filtro);
            const inputFiltro = document.createElement('INPUT')
            inputFiltro.setAttribute('ID', 'inputFiltro');
            inputFiltro.setAttribute('class', 'inputFiltro');
            inputFiltro.setAttribute('style', this.inputStyle);
            inputFiltro.setAttribute('type', 'text');
            inputFiltro.setAttribute('placeholder', 'Entre com a informação para filtragem');
            filtro.appendChild(inputFiltro)
        }

        const titulo = document.createElement('DIV');
        titulo.setAttribute('id', 'dgTitulo');
        titulo.setAttribute('class', 'dgTitulo');
        titulo.setAttribute('style', this.titleStyle)
        titulo.style.backgroundColor=`${dgDados.funcoes.titulo.cor}`
        if (!dgDados.funcoes.titulo.hide) base.appendChild(titulo);
        this.titulo = titulo

        const dados = document.createElement('DIV');
        dados.setAttribute('id', 'dgData');
        dados.setAttribute('class', 'dgData');
        dados.setAttribute('style', this.dataStyle)
        base.appendChild(dados);

        const rodape = document.createElement('DIV');
        rodape.setAttribute('id', 'dgRodape');
        rodape.setAttribute('class', 'dgRodape');
        rodape.setAttribute('style', this.rodapeStyle)
        rodape.style.backgroundColor=`${dgDados.funcoes.titulo.cor}`
        if (!dgDados.funcoes.rodape.hide) base.appendChild(rodape);

        const dgHead = dgDados.campos;
        var dgBaseWidth = 0;// Largura da Base
        var somados = []; // soma
        dgHead.map((dat, id) => {
            const dgField = document.createElement('DIV');
            dgField.setAttribute('id', 'dgCampo' + id);
            dgField.setAttribute('class', 'dgCampo');
            const fildStyle = 'display : flex ;'
                + 'width : ' + dat.width + ';'
                + 'align-items :flex-start !important;'
                + 'justify-content: ' + dat.align + ';'
            dgField.setAttribute('style', fildStyle);
            dgField.innerHTML = dat.titulo;
            titulo.appendChild(dgField);
            dgBaseWidth += parseInt(dgField.style.width)

            const dgRodape = document.createElement('DIV');
            dgRodape.setAttribute('id', 'dgRodape' + id);
            dgRodape.setAttribute('class', 'dgCampo');
            dgRodape.setAttribute('style', fildStyle);

            rodape.appendChild(dgRodape);

            somados[dgRodape.id] = 0 /// cria o repositório da soma
        })
        if (!dgDados.funcoes.titulo.hide) {
            const dgFuncoesTitulo = document.createElement('DIV');
            dgFuncoesTitulo.setAttribute('id', 'dgCampo-1');
            dgFuncoesTitulo.setAttribute('class', 'dgCampo');
            const fildStyle = 'display : flex ;'
                + 'width : ' + dgDados.funcoes.acoes.width + ';'
                + 'align-items :flex-start;'
                + 'justify-content :' + dgDados.funcoes.acoes.align + ';'
            ;
            if (!dgDados.funcoes.acoes.hide) {
                dgFuncoesTitulo.setAttribute('style', fildStyle);
                dgFuncoesTitulo.innerHTML = dgDados.funcoes.acoes.titulo;
                titulo.appendChild(dgFuncoesTitulo);
                dgBaseWidth += parseInt(dgFuncoesTitulo.style.width)
            }
        }
        base.style.setProperty('width', dgBaseWidth + 'px');
        rodape.style.setProperty('width', dgBaseWidth + 'px');
        dgData.map((ele, id) => {
            const linha = document.createElement('DIV');
            linha.setAttribute('id', 'dgLinha' + id);
            linha.setAttribute('class', 'dgvLinha');
            linha.setAttribute('style', this.lineStyle)
            dados.appendChild(linha);
            dgHead.map((chave, id) => {
                const dgDataField = document.createElement('DIV');
                dgDataField.setAttribute('id', 'dgData' + id);
                dgDataField.setAttribute('class', 'dgData');
                const fieldStyle = 'display : flex ;'
                    + 'width : ' + dgDados.campos[id].width + ';'
                    + 'align-items :flex-start;'
                    + 'justify-content :' + dgDados.campos[id].align + ';';
                dgDataField.setAttribute('style', fieldStyle);

                var lineData = ele[chave.campo];
                if (chave.soma) {
                    somados['dgRodape' + id] += lineData;
                }
                if (chave.formato == 'date') {
                    lineData = new Date(lineData)
                    lineData = `${('0' + lineData.getDate()).slice(-2)}/${('0' + (parseInt(lineData.getMonth()) + 1)).slice(-2)}/${('0000' + lineData.getFullYear()).slice(-4)}`
                }
                if (chave.formato == 'monetario') {
                    lineData = ele[chave.campo];
                    lineData = lineData.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda });
                }
                dgDataField.innerHTML = lineData;
                linha.appendChild(dgDataField);
            })
            if (!dgDados.funcoes.titulo.hide) {
                const dgvFuncoesIcones = document.createElement('DIV');
                dgvFuncoesIcones.setAttribute('id', 'funcoesIcones')
                dgvFuncoesIcones.setAttribute('class', "dgData")
                if (!dgDados.funcoes.acoes.hide) {
                    const iconStyle = 'display : flex ;'
                        + 'width : ' + dgDados.funcoes.acoes.width + ';'
                        + 'align-items : flex-start;'
                        + 'gap : 3px;'
                        + 'justify-content :' + dgDados.funcoes.acoes.align + ';'
                    ;
                    dgvFuncoesIcones.setAttribute('style', iconStyle);
                    linha.appendChild(dgvFuncoesIcones);

                    const icons = Object.keys(dgDados.funcoes.icones);
                    icons.forEach((eli) => {
                        if (!dgDados.funcoes.icones[eli].hide) {
                            const dgvLinhaIv = document.createElement('ion-icon');
                            dgvLinhaIv.setAttribute('id', 'dgv' + eli)
                            dgvLinhaIv.setAttribute('name', dgDados.funcoes.icones[eli].name)
                            dgvLinhaIv.addEventListener('click', (eve) => {
                                const campo = document.querySelector('#dgData0');
                                this.campoRetorno = ele;
                                dgDados.campoRetorno = linha.children;
                                dgDados.funcoes.icones[eli].func()
                            })
                            dgvFuncoesIcones.appendChild(dgvLinhaIv);
                        }
                    })
                }
            }
        });
        if (!dgDados.funcoes.rodape.hide) {
            dgHead.map((dat, id) => {
                if (dat.soma) {
                    var lineSoma = somados['dgRodape' + id];
                    if (dat.formato == 'monetario') {
                        lineSoma = lineSoma.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda })
                    }
                    rodape.children['dgRodape' + id].innerHTML = lineSoma
                }
            })
        }
        this.grid = this.dgDestino.querySelector('#dgData').children
        if (!dgDados.funcoes.filtro.hide) {
            inputFiltro.style.width=(dgBaseWidth/2)+'px'
            const filtroLinhas = [].slice.call(this.grid)
            inputFiltro.addEventListener('keyup', () => {
                dgHead.map((chave, id) => {somados['dgRodape' + id]=0})
                filtroLinhas.map((ele, idLine) => {
                    let eleBusca = ele.children[1].innerHTML.toUpperCase()
                    let regex = new RegExp(inputFiltro.value.toUpperCase());
                    if (!regex.test(eleBusca)) {
                        ele.style.display = 'none'
                    } else { 
                        ele.style.display = 'flex ' 
                        dgHead.map((chave, id) => {
                            if (chave.soma) {
                                somados['dgRodape' + id] += dgData[idLine][chave.campo];
                            }                            
                        })                        
                    }
                })
                dgHead.map((chave, id) => { 
                    if (chave.soma) {
                        var lineData = somados['dgRodape' + id]
                        if (chave.formato == 'monetario') {
                            lineData = lineData.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda });
                            document.querySelector('#dgRodape' + id).innerHTML=lineData
                        }else {document.querySelector('#dgRodape' + id).innerHTML=lineData}
                        
                    }
                })
            })
        }
    }
    static hideLista = () => {
        const doc = this.dgDestino.querySelector('#dgBase')
        if (doc) doc.remove()
    }

}

export { DataGrid }

/*   EXEMPLO DO OBJETO DE CONFIGURAÇÃO
const dgDados={
    destino : 'dataGridJ',
    local   : 'pt-br'   ,
    moeda   : 'BRL'     ,
    funcoes: {
        "filtro" : { "hide" : false , "campo" : 1 },
        "rodape" : { "hide" : false},
        "titulo" : { "hide" : false , "cor"   : "#49F"},
        "acoes"  : { "hide" : false , "titulo": "Ações", "width": "90px", "align": "center" },
        icones : {
            switch : { hide: false  , name: 'lock-open-outline', func: ()=>{toggleAtivar()}},
            edit   : { hide: false  , name: 'pencil-outline'   , func: ()=>{alterar()}},
            delete : { hide: false  , name: 'trash-outline'    , func: ()=>{apagar()}},
            view   : { hide: false  , name: 'call-outline'     , func: ()=>{listaTelefones()}},
            photo  : { hide: false  , name: 'camera-outline'   , func: ()=>{mostraFoto()}},
        }
    },
    campos: [
        { campo : 'FOR_ID'    , titulo: 'Id'                    , formato: 'g'   , width: '70px' , align: 'left', soma : false},
        { campo : 'FOR_NOME'  , titulo: 'Nome Colaborador'      , formato: 'g'   , width: '300px', align: 'left', soma : false},
        { campo : 'FOR_CNPJ'  , titulo: 'CNPJ'                , formato: 'g'   , width: '150px', align: 'left', soma : false},        
        { campo : 'FOR_STANOM', titulo: 'Status'                , formato: 'g'   , width: '150px', align: 'left', soma : false},

    ]
}
*/