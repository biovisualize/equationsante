const menuPartial = `
<div class="ui secondary pointing menu">
  <div class="right menu">
    <a class="item" href="index.html">Accueil</a>
    <a class="item" href="services.html">Services</a>
    <a class="item" href="professionnels.html">Professionnels</a>
    <a class="item" href="espace.html">Espace de travail</a>
    <a class="item" href="contact.html">Contact</a>
  </div>
</div>
`

function addMenu(containerSelector) {
  const parsedDocument = new DOMParser().parseFromString(menuPartial, 'text/html')
  document.querySelector(containerSelector).append(parsedDocument.body.firstChild)
}