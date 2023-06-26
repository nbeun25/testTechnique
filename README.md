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

Celui-ci va ainsi mettre en place une dockerisation du projet côté Back et Front. ATTENTION - La dockerisation du côté front prend du temps.  

4 - Vérifier dans Docker que l'application avec les containers associés sont mis en route. Ainsi, le serveur NodeJS et React sont mis en place. 

Lorsque cela est effectué, vous pouvez utiliser l'application, comme vous utilisez les autres sites. Ce qui diffère c'est que vous utilisez localhost afin de visiter votre site. 

Voilà, vous venez d'installer un container NodeJS, qui est utilisé avec une base de donnée mysql, et un container ReactJS. Vous avez normalement des datas dans la base de donnée. Ainsi, l'application va fonctionner. 