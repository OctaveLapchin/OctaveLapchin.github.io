fetch('./js/json/scripts.json')
  .then(response => response.json())
  .then(data => {
    data['scripts'].forEach(element => {
      const preCodeElement = document.createElement('pre');
      const codeElement = document.createElement('code');
      codeElement.style.textAlign = 'left';
      codeElement.textContent = element["script"];
      codeElement.classList = element["langage"]
      preCodeElement.appendChild(codeElement);
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copier';
      copyButton.style.marginBottom = '15px';
      copyButton.style.borderRadius = '5px';
      copyButton.style.padding = '4px';
      copyButton.onclick = function () { copy(codeElement); };
      let codes = document.getElementById('codes')
      codes.appendChild(preCodeElement)
      codes.appendChild(copyButton)
    })
  })
  .catch(error => {
    console.error("Erreur lors du chargement du fichier JSON:", error);
  });
