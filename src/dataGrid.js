//************************************//
//**                                **//
//**   Designed by                  **//
//**   Antonio Ennio de Jesus       **//
//**   Eia_99@yahoo.com             **//
//**   Class DataGrid.js 02/2024    **//
//**   Vera Cruz - Itaparica Bahia  **//
//**   Ver . 1.0.3                  **//
//**                                **//
//************************************//

class DataGrid {
    static campoRetorno = undefined;
    static titulo = undefined;
    static grid = undefined;
    static dgDestino = undefined
    static titulo = 'Janela Grid View';
    static dgDados = undefined;
    static dgData = undefined;
    static dgBase = undefined;
    static baseStyle = 'display: flex;' 
        +' justify-content: flex-start;' 
        +' align-items: flex-start;' 
        +' flex-direction: column;'
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
        + 'padding:  0px 5px 0px  5px;'

    static dataStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: column;'
        + 'width : 100%;'
        + 'background-color : white;'
        
    static rodapeStyle = 'display: flex;'
        + 'justify-content: flex-start;'
        + 'align-items: flex-start;'
        + 'flex-direction: row;'
        + 'background-color: rgb(206, 206, 206);'
        + 'border-radius: 0px 0px 5px 5px;'
        + 'width : 100%;'
        + 'padding:  5px 3px 5px 3px;'

    static filtroStyle = 'display : flex;'
        + 'justify-content : center;'
        + 'align-itens : center;'
        + 'width : 70%;'
        + 'margin-bottom : 10px;'
    static inputStyle = 'display : flex;'
        + 'border-radius : 5px;'
        + 'width : 60%;'
        + 'padding : 5px;'
        + 'background-color : rgb(223,223,233);'
    static selectStyle = 'display : flex;'
        + 'border-radius : 5px;'
        + 'min-width : 20%;'
        + 'padding : 5px;'
        + 'margin-right :5px;'
        + 'background-color : rgb(223,223,233);'
        
    static criaLista = (dgDados, dgData) => {
        this.dgDados = dgDados
        this.dgData = dgData
        this.dgDestino = document.querySelector(this.dgDados.destino)
        const doc = document.querySelector('#dgBase')
        if (doc!=undefined) {doc.remove()}
        const documento = document.head
        const scriptIcons = document.createElement('script')
        scriptIcons.setAttribute('type', 'module');
        scriptIcons.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js')
        document.head.appendChild(scriptIcons)

        const linkIcons = document.createElement('link')
        linkIcons.setAttribute('href','https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200 ')
        linkIcons.setAttribute('rel',"stylesheet")
        document.head.appendChild(linkIcons)

        const stylelinha = '.dgvLinha:nth-child(odd){' +
            'background-color: rgb(241, 241, 241);}' +
            '.dgvLinha:nth-child(even){' +
            'background-color: rgb(255, 255, 255);}' +            
            '.dgvLinha:hover{' +
            'background-color: rgb(223, 223, 233);' +
            'cursor: pointer;}' +
            '.dgvTitulos div, .dgvLinha div{' +
            'padding:  3px 5px 3px 3px;}'

        const styleLinha = document.createElement('style')
        styleLinha.innerHTML += stylelinha;
        documento.appendChild(styleLinha)

        this.dgbase = document.createElement('DIV')
        this.dgbase.setAttribute('id', 'dgBase');
        this.dgbase.setAttribute('class', 'dgBase');
        this.dgbase.setAttribute('style', this.baseStyle)
        this.dgDestino.appendChild(this.dgbase);

        const pesNome = []
        const pesCampo =[]
        dgDados.campos.map((ite,id)=>{
            pesNome.push(ite.titulo)
            pesCampo.push(ite.campo)
        })
        
        const filtros = document.createElement('DIV');
        filtros.setAttribute('id', 'dgFiltro');
        filtros.setAttribute('class', '');
        filtros.setAttribute('style', 'display:flex ; width : 100% ; justify-content : center')
        this.dgbase.appendChild(filtros);

        if (!dgDados.funcoes.filtro.hide) {

            var filtro = document.createElement('DIV');
            filtro.setAttribute('id', 'dgFiltro');
            filtro.setAttribute('class', 'divFiltro');
            filtro.setAttribute('style', this.filtroStyle)
            filtros.appendChild(filtro);            
            
            if (!dgDados.funcoes.filtro.selectHide) {
                var inpFCampo = document.createElement('Select');
                inpFCampo.setAttribute('id', 'SelCamPes');
                inpFCampo.setAttribute('class', 'selectFiltro');
                inpFCampo.setAttribute('style', this.selectStyle);
                filtro.appendChild(inpFCampo);
                pesNome.map((ite, id) => {
                    var inpOCampos = document.createElement('option');
                    inpOCampos.innerHTML = ite
                    inpFCampo.appendChild(inpOCampos);
                })
            }
            const inputFiltro = document.createElement('INPUT')
            inputFiltro.setAttribute('ID', 'inputFiltro');
            inputFiltro.setAttribute('class', 'inputFiltro');
            inputFiltro.setAttribute('style', this.inputStyle);
            inputFiltro.setAttribute('type', 'text');
            inputFiltro.setAttribute('placeholder', 'Entre com a informação para filtragem');
            filtro.appendChild(inputFiltro)
            inputFiltro.focus()

        }
        if (!dgDados.funcoes.onclose.hide) {
            
            var bntFuncao = document.createElement('DIV');
            bntFuncao.setAttribute('id', 'dgBtnsFuncao');
            bntFuncao.setAttribute('class', 'divBtnFuncao');
            bntFuncao.setAttribute('style', 'display:flex ; flex-direction:row; margin-left : 5px;')
            filtros.appendChild(bntFuncao);            

            const btnJClose = document.createElement('ion-icon');
            btnJClose.setAttribute('id', 'dgvJClose')
            btnJClose.setAttribute('name', 'close-circle-outline')
            btnJClose.setAttribute('style', ' display-flex ; right ;width : 30px; cursor: pointer; height : 30px; color : ' + dgDados.funcoes.titulo.cor)
            bntFuncao.appendChild(btnJClose);
            btnJClose.addEventListener('click', (eve) => {
                this.hideLista()
            })

            const btnRefresch = document.createElement('SPAN');
            btnRefresch.setAttribute('class','material-symbols-outlined')
            btnRefresch.innerHTML='Refresh'
            btnRefresch.style='color : '+dgDados.funcoes.titulo.cor+ '; font-size : 180%;font-weight: bolder;cursor : pointer'
            bntFuncao.appendChild(btnRefresch);
            btnRefresch.addEventListener('click',(evt)=>{
                 this.criaLista(dgDados,dgData)                
            })

            document.addEventListener('keyup',(evt)=>{
                if (evt.key==='Escape') this.hideLista()
            })            
        }

        const titulo = document.createElement('DIV');
        titulo.setAttribute('id', 'dgTitulo');
        titulo.setAttribute('class', 'dgTitulo');
        titulo.setAttribute('style', this.titleStyle)
        titulo.style.backgroundColor=`${dgDados.funcoes.titulo.cor}`
        if (!dgDados.funcoes.titulo.hide) this.dgbase.appendChild(titulo);
        this.titulo = titulo

        const dados = document.createElement('DIV');
        dados.setAttribute('id', 'dgData');
        dados.setAttribute('class', 'dgData');
        dados.setAttribute('style', this.dataStyle)
        this.dgbase.appendChild(dados);

        const rodape = document.createElement('DIV');
        rodape.setAttribute('id', 'dgRodape');
        rodape.setAttribute('class', 'dgRodape');
        rodape.setAttribute('style', this.rodapeStyle)
        rodape.style.backgroundColor=`${dgDados.funcoes.titulo.cor}`
        if (!dgDados.funcoes.rodape.hide) this.dgbase.appendChild(rodape);

        const dgHead = dgDados.campos;
        var dgBaseWidth = 0;// Largura da Base
        var somados = []; // soma
        dgHead.map((dat, id) => {
            const fieldStyle = 'display : flex ;'
                + 'width : ' + dat.width +' !important;'            
                + 'align-items :flex-start !important;'
                + 'justify-content: ' + dat.align + ';'
                + 'padding:  3px 5px 3px 3px !important'
            const dgField = document.createElement('DIV');
            dgField.setAttribute('id', 'dgCampo' + id);
            dgField.setAttribute('class', 'dgCampo');
            dgField.setAttribute('style', fieldStyle);

            dgField.innerHTML = dat.titulo;
            titulo.appendChild(dgField);

            const dgRodape = document.createElement('DIV');
            dgRodape.setAttribute('id', 'dgRodape' + id);
            dgRodape.setAttribute('class', 'dgCampo');
            dgRodape.setAttribute('style', fieldStyle);
            rodape.appendChild(dgRodape);
            dgBaseWidth += parseInt(dgField.style.width)
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
                
                const dgFuncoesRodape = document.createElement('DIV');
                dgFuncoesRodape.setAttribute('id', 'dgCampo-1');
                dgFuncoesRodape.setAttribute('class', 'dgCampo');
                dgFuncoesRodape.setAttribute('style', fildStyle);   
                 dgFuncoesRodape.innerHTML=''
                 rodape.appendChild(dgFuncoesRodape);

                dgBaseWidth += parseInt(dgFuncoesTitulo.style.width)

            }
        }
        dgBaseWidth += 10
        this.dgbase.style.setProperty('width', dgBaseWidth + 'px');
        rodape.style.setProperty('width', dgBaseWidth + 'px');
        dgData.map((ele, id) => {
            const linha = document.createElement('DIV');
            linha.setAttribute('id', 'dgLinha' + id);
            linha.setAttribute('class', 'dgvLinha');
            linha.setAttribute('style', this.lineStyle)
            dados.appendChild(linha);
            linha.addEventListener('click',(evt)=>{
                const campo = document.querySelector('#dgData0');
                this.campoRetorno = ele;
                dgDados.campoRetorno = linha.children;
                dgDados.funcoes.acoes.clicklinha()                
            })
            dgHead.map((chave, id) => {
                const dgDataField = document.createElement('DIV');
                dgDataField.setAttribute('id', 'dgData' + id);
                dgDataField.setAttribute('class', 'dgData');
                var fieldStyle = 'display : flex ;'
                    + ' width : ' + chave.width + ';'
                    + ' align-items :flex-start !important ;'
                    + ' justify-content :' + chave.align + ';'
                    if(dgDados.funcoes.grid.linha.toUpperCase().indexOf('V')>=0) {fieldStyle += `border-right  : 1px ${dgDados.funcoes.grid.cor} solid;`}
                    if(dgDados.funcoes.grid.linha.toUpperCase().indexOf('H')>=0) {fieldStyle += `border-bottom : 1px ${dgDados.funcoes.grid.cor} solid;`}

                dgDataField.setAttribute('style', fieldStyle);
                var lineData = ele[chave.campo];
                if (chave.soma) {
                    somados['dgRodape' + id] += parseFloat(lineData);
                }
                if (chave.formato.toUpperCase() == 'D') {
                    lineData = new Date(lineData)
                    lineData = `${('0' + lineData.getDate()).slice(-2)}/${('0' + (parseInt(lineData.getMonth()) + 1)).slice(-2)}/${('0000' + lineData.getFullYear()).slice(-4)}`
                }
                if (chave.formato.toUpperCase() == 'T') {
                    const linehor = new  Date(lineData).getHours()
                    const linemin = new  Date(lineData).getMinutes()
                    const linesec = new  Date(lineData).getSeconds()
                    lineData = `${('0'+linehor).slice(-2)}:${('0'+linemin).slice(-2)}:${('0'+linesec).slice(-2)}`
                }                
                if (chave.formato.toUpperCase() == 'N') {
                    lineData = ele[chave.campo];
                    lineData = parseFloat(lineData);
                }                
                if (chave.formato.toUpperCase() == 'M') {
                    lineData = ele[chave.campo];
                    lineData = parseFloat(lineData).toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda });
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
                            if (this.dgDados.funcoes.acoes.material=='ion-icon'){
                            var dgvLinhaIv = document.createElement('ion-icon');}
                            if (this.dgDados.funcoes.acoes.material=='google'){
                                var dgvLinhaIv = document.createElement('SPAN');
                                dgvLinhaIv.setAttribute('class','material-symbols-outlined')
                                dgvLinhaIv.innerHTML=dgDados.funcoes.icones[eli].name
                            }

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
                    var lineSoma = parseFloat(somados['dgRodape' + id]);
                    
                    if (dat.formato.toUpperCase() == 'M') {
                        lineSoma = lineSoma.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda } )
                    }
                    if (dat.formato.toUpperCase() == 'N') {
                        lineSoma = lineSoma
                    }
                    rodape.children['dgRodape' + id].innerHTML = lineSoma
                }
            })
        }
        this.grid = document.querySelector('#dgData').children
        if (!dgDados.funcoes.filtro.hide) {
            
            if(!dgDados.funcoes.filtro.selectHide){inpFCampo.selectedIndex=dgDados.funcoes.filtro.campo}
            const filtroLinhas = [].slice.call(this.grid)
            inputFiltro.addEventListener('keyup', () => {
                if(!dgDados.funcoes.filtro.selectHide){dgDados.funcoes.filtro.campo=inpFCampo.selectedIndex}
                dgHead.map((chave, id) => {somados['dgRodape' + id]=0})
                filtroLinhas.map((ele, idLine) => {
                    let eleBusca = ele.children[dgDados.funcoes.filtro.campo].innerHTML.toUpperCase().trim()
                    if (eleBusca.indexOf(inputFiltro.value.toUpperCase())!=0) {
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
                        if (chave.formato.toUpperCase() == 'M') {
                            lineData = parseFloat(lineData).toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda });
                            document.querySelector('#dgRodape' + id).innerHTML=lineData
                        }
                        if (chave.formato.toUpperCase() == 'N') {
                            lineData = parseFloat(lineData);
                            document.querySelector('#dgRodape' + id).innerHTML=lineData
                        }                        
                        else {document.querySelector('#dgRodape' + id).innerHTML=lineData}
                    }
                })
            })
        }
    }
    static hideLista = () => {
        const doc = document.querySelector('#dgBase')
        if (doc!=undefined) dgBase.remove()
        this.dgDados.funcoes.onclose.funcao()

    }
    static refreshLista = () => {
         this.criaLista(this.dgDados,this.dgData)
    }
}

export { DataGrid }

/*   EXEMPLO DO OBJETO DE CONFIGURAÇÃO
const dgDados={
    destino : 'dataGridJ',
    local   : 'pt-br'    ,
    moeda   : 'BRL'      ,
    funcoes: {
        "titulo" : { "hide" : false , "cor"   : "#49F"},
        "filtro" : { "hide" : false , "campo" : 1      ,"selectHide" : false },
        "onclose" : { "hide" : false , "funcao" : ()=>{dbgridFecha()}},
        "grid"   : { "linha" : "" , "cor" : "black"},
        "rodape" : { "hide" : false},
        "acoes"  : { "hide" : false , "titulo": "Ações", "width": "90px", "align": "center","material" : "ion-icon", "clicklinha" : ()=>{} },
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