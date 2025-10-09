
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
