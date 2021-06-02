const areaDoCodigo = document.querySelector("pre")
const linguagem = document.querySelector("#linguagem")
const botao = document.querySelector("#botao-highlight")

areaDoCodigo.firstChild.focus()

function mudaLinguagem(){
    const codigo = areaDoCodigo.querySelector("code")
    areaDoCodigo.innerHTML = `<code class="editor hljs ${linguagem.value}" contenteditable="true" spellcheck="false"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () =>{
    mudaLinguagem()
})

botao.addEventListener('click', () =>{
    const codigo = areaDoCodigo.querySelector("code")
    hljs.highlightBlock(codigo)
})