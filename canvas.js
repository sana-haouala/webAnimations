window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

	//On n'oublie pas de récupérer le canvas et son context.

context.beginPath();//On démarre un nouveau tracé
context.moveTo(0, 300);//On se déplace au coin inférieur gauche
context.lineTo(150, 0);
context.lineTo(300, 300);
context.lineTo(0, 300);
context.stroke();//On trace seulement les lignes.
context.closePath()
//On n'oublie pas de récupérer l'objet canvas et son context.
//On n'oublie pas de récupérer l'objet canvas et son context.

context.beginPath(); //On démarre un nouveau tracé.
context.arc(100, 100, 50, 0, Math.PI*2); //On trace la courbe délimitant notre forme
context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
context.closePath();
//On n'oublie pas de récupérer l'objet canvas et son context.

context.font = "18px Helvetica";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
context.strokeText("Hello World", 0, 30);//strokeText(); fonctionne aussi, vous vous en doutez.
var mon_image = new Image();
mon_image.src = "mon_image.png";
context.drawImage(mon_image, 0, 0);

    //C'est ici que l'on placera tout le code servant à nos dessins.
};