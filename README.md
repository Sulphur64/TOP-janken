# TOP-janken
Odin's favourite decision making tool


regles : 
	pierre bat ciseaux
	ciseaux bat papier
	papier bat pierre


déroulement : chaque joueur tape la main qui fait le signe sur l'autre main et déclenche son signe apres le décompte "pierre, feuille, ciseaux" 
celui qui a le signe gagnant remporte le jeu. 

probleme : 

le joueur doit savoir comment sélectionner le symbole et connaitre les regles.
il doit comprendre s'il a gagné ou perdu et pourquoi.
la machine doit choisir un symbole.
chaque symbole doit etre ascendant sur un autre, egal a lui meme et perdre face a un autre.


pseudocode : 
pierre		ciseaux		papier	=  symbol, défault value 

player1=user

player2= bot generate a number between 1 and 3
	if 1 p2s=pierre
	if 2 p2s=ciseaux
	if 3 p2s=papier




if s=pierre	 => papier = plus , ciseaux = moins , pierre egal;	 // use increments ? a matrix ? 
else if s=ciseau	 => pierre = plus , papier =moins, ciseaux egal;
else s=papier	 => ciseaux = plus , pierre=moins, papier egal;

if p1s > que p2s 	=> p1 wins
else if p1s=p2s	=> égalité
else		=> p2 wins



