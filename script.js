
setInterval(() => { getHora()}, "1000");

    function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
        const getHora = () => {
            let tag = document.getElementById('relogio')
            let d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            let time = h + ":" + m ;
            tag.innerText=time
        }
const paginaCarregada  = () => {
  console.log("eu fui executado quando a pagina foi carregada")
  let identidadeElement = document.getElementById("identidade");

  // cria dois elementos datas, um com a data atual e outro com a data do nascimento e subitrai os dois, depois dividos por 1000m, 60s,60m,24h,365d
  let idade = parseInt((new Date() - new Date(1993,2,26))/(1000*60*60*24*365));
  let idadeElement = document.createElement("li")
   idadeElement.innerText= `Idade: ${idade} anos`
  identidadeElement.appendChild(idadeElement) }