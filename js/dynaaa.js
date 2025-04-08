function copy(arg) {
    let copyText = document.getElementById(arg);
    if (copyText) {
        const tempInput = document.createElement("textarea");
        tempInput.value = copyText.textContent || copyText.value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        console.log("Texte copié dans le presse-papiers !");
    } else {
        console.error("Élément introuvable !");
    }
}

// Liste des fichiers PDF (vous pouvez la récupérer dynamiquement depuis le serveur)
const documentaions = [
    'acl-cisco.pdf',
    'Active-Directory.pdf',
    'GLPI.pdf'
];

// Fonction pour générer les boutons
function afficherCertificats() {
    const container = document.getElementById('mes-docs');

    documentaions.forEach(fichier => {
        // Créer un bouton pour chaque fichier PDF
        const btn = document.createElement('button');
        btn.className = 'btn btn-info';
        btn.style.margin = '1%';

        // Créer le lien vers le fichier
        const link = document.createElement('a');
        link.target = '_blank';
        link.href = './docs/' + fichier;
        link.style.color = 'white';
        link.textContent = fichier;

        // Ajouter le lien au bouton
        btn.appendChild(link);

        // Ajouter le bouton au conteneur
        container.appendChild(btn);
    });
}

afficherCertificats();