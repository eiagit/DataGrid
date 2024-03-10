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
            bntFuncao.setAttribute('style', 'display:flex ; flex-direction:row; margin-left : 5px; gap:5px')
            filtros.appendChild(bntFuncao);            

            const xmlins="http://www.w3.org/2000/svg"

            const btnJClose =  document.createElementNS(xmlins,"svg");
            btnJClose.setAttributeNS(null,'width',27)
            btnJClose.setAttributeNS(null,'heigth',27)
            btnJClose.setAttributeNS(null,'id','BtnClose')
            btnJClose.setAttributeNS(null,"viewBox","0 0 13 13")
            btnJClose.style='cursor : pointer'
            bntFuncao.appendChild(btnJClose);            
            var path = document.createElementNS(xmlins, "path");
            path.setAttributeNS(null, 'd', cloPath);
            path.setAttributeNS(null,'fill',dgDados.funcoes.titulo.cor)
            path.setAttributeNS(null,'width','40')
            path.setAttributeNS(null, 'stroke-width', '1:3')
            path.setAttributeNS(null,'height','0.5')
            btnJClose.appendChild(path)
            btnJClose.addEventListener('click', (eve) => {
                this.hideLista()
            })

            const btnRefresch =  document.createElementNS(xmlins,"svg");
            btnRefresch.setAttributeNS(null,'width',25)
            btnRefresch.setAttributeNS(null,'heigth',25)
            btnRefresch.setAttributeNS(null,'id','BtnReviw')
            btnRefresch.setAttributeNS(null,"viewBox","0 0 13 13")
            btnRefresch.style='cursor : pointer'
            bntFuncao.appendChild(btnRefresch);
            var path = document.createElementNS(xmlins, "path");
            path.setAttributeNS(null, 'd', revPath);
            path.setAttributeNS(null,'fill',dgDados.funcoes.titulo.cor)
            path.setAttributeNS(null,'width','40')
            path.setAttributeNS(null, 'stroke-width', '1:3')
            path.setAttributeNS(null,'height','0.5')
            btnRefresch.appendChild(path)
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

const revPath=`M 6.557739 0.16743163 C 3.0283706 0.16743169 0.14831133 3.047491 0.14831135 6.5768593 C 0.14831172 10.106228 3.0283709 12.984737 6.557739 12.984737 C 9.7202354 12.984737 12.357959 10.672941 12.872599 7.6532793 L 11.202933 7.6532793 C 10.71772 9.7734977 8.8301219 11.344527 6.557739 11.344527 C 3.9146824 11.344527 1.7885215 9.2199158 1.7885212 6.5768593 C 1.7885212 3.9338026 3.9146822 1.8071249 6.557739 1.8071248 C 7.8233106 1.8071244 9.0251127 2.3113938 9.9120561 3.1915363 L 8.7178138 3.6540404 L 12.146545 5.3903684 L 12.630236 2.1921142 C 12.636136 2.1745302 12.621948 2.1408142 12.602848 2.1481892 L 11.546582 2.5574665 C 10.331455 1.0486855 8.4977106 0.16743097 6.557739 0.16743163 z `
const cloPath = `m 9.3957838,2.7599818 0.7803222,0.7803225 c 0.02045,0.020446 0.02045,0.053366 0,0.073813 L 3.655199,10.135024 c -0.020446,0.02045 -0.053366,0.02045 -0.073812,0 L 2.8010644,9.3547012 c -0.020446,-0.020446 -0.020447,-0.053367 -7e-7,-0.073813 L 9.3219704,2.7599818 c 0.020446,-0.020446 0.053367,-0.020447 0.073813,0 z M 2.8010645,3.5403042 3.5813871,2.7599816 c 0.020446,-0.020446 0.053366,-0.020446 0.073813,4e-7 l 6.5209068,6.5209071 c 0.02044,0.020442 0.02044,0.053364 -2e-6,0.07381 L 9.3957823,10.135022 c -0.020446,0.02045 -0.053368,0.02045 -0.07381,2e-6 L 2.8010645,3.6141169 c -0.020446,-0.020446 -0.020446,-0.053367 0,-0.073813 z M 6.4609375,1.4290224e-5 C 2.8989132,1.4290224e-5 1.2707942e-8,2.8989275 1.2707942e-8,6.4609518 1.2707943e-8,10.022976 2.8989134,12.923843 6.4609381,12.923841 10.022963,12.923842 12.921876,10.022975 12.921862,6.4609374 12.921862,2.8989129 10.022949,0 6.4609249,0 Z m 0,1.099609309776 c 2.9675407,1e-7 5.3613285,2.3937875 5.3613285,5.3613281 0,2.9675406 -2.3937877,5.3613283 -5.3613289,5.3613273 -2.9675407,0 -5.3613277,-2.3937865 -5.3613277,-5.3613273 -1e-7,-2.9675406 2.3937874,-5.361328 5.3613281,-5.3613281 z`


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