axios.get("https://catfact.ninja/.fact")
.then(resp => {
       document.write(resp.data);
})
 