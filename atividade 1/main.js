const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addF-ventListerner("submit",(e)=> {
    const nome = frm.inNome.Value 
    resp.innerText = `Olá, ${nome}`
    e.preventDefault()
})