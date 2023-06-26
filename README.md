# Comment démarrer l'application 

1 - Pour se faire, vous devez commencer par cloner le projet. 

Vous pouvez ainsi en ligne de commande dans un terminal utiliser la commande ci-joint : 

- En htttp : 
### `git clone https://github.com/nbeun25/testTechnique.git`

- A l'aide d'une clé SSH :
### `git clone git@github.com:nbeun25/testTechnique.git`

2 - Lorsque l'application a été clonée, vous devez rester sur le terminal et regarder si vous êtes bien dans le dossier source : testtechnique. 
Ainsi, lorsque vous utilisez la commande `ls`, vous devez découvrir que vous avez les dossiers back-end ainsi que front-end. 

3 - Vérifiez que vous ayez docker d'installé et lancé, à la suite de cela, vous pouvez utiliser la commande suivante sur votre VSCode ou l'IDE de votre choix : 

### `docker compose up`

Celui-ci va ainsi mettre en place une dockerisation du projet côté Back, n'ayant pas réussi à mettre en place la dockerisation côté Front, ce dernier n'est pas sur docker.

4 - Vérifier dans Docker que l'application avec les containers associés sont mis en route, si c'est le cas, le côté back est dockerisé ! Ainsi, le serveur NodeJS est mis en place. 

5 - Reprenez votre terminal et dupliquez le afin d'en avoir un nouveau. A la suite de cela, vous pouvez réeffectuer la commande `ls`, vous devez une nouvelle fois, retrouver les dossiers front-end ainsi que back-end. 

Vous pouvez effectuer les commandes suivantes afin de rentrer dans le projet front, pour lancer React : 

### `cd front-end`

Lorsque vous êtes entré dans le dossier front-end, vous pouvez réutiliser la commande suivante : 

### `cd excuses-projet`

6 - Lorsque vous êtes dans le bon dossier, vous pouvez utiliser la commande suivante, afin d'installer les dépendances de React : 

### `npm i`

Les dépendances installés, vous pouvez de nouveau lancer une commande npm afin de lancer le projet en React. 

### `npm start`

Lorsque cela est effectué, vous pouvez utiliser l'application comme vous utilisez, les autres sites. Ce qui diffère c'est que vous utilisez localhost afin de visiter votre site. 

Voilà, vous venez d'installer un serveur NodeJS, qui est utilisé par mysql. Vous avez normalement des datas dans la base de donnée. Ainsi, l'application devrait fonctionner. 