Réponses Questions

Git

1. Commiter régulièrement permet d'avoir des sauvegardes pour chaques tâches effectués lors d'un projet. Cela permet également d'avoir une structuration et de retrouver une modification précise effectué par exemple ici l'ajout et le formatage de la Date de modification de chaque personnages.

2. La branche feature est affecté à un ajout dans notre application web, c'est pour cela que j'ai créer une banche feature/date pour l'ajout de la date dans notre application marvel-app.

3. La branche main a pour but d'être intact, nous n'allons pas créer ou modifier des fichiers sur cette branche. C'est en quelque sorte la branche finale de notre projet qui contiendra tous les fichiers finaux une fois le projet terminé. La branche develop quant à elle permet de stocker tous les fichiers en cours, en effet après chaque modification nous mergeons notre branche en cours vers la develop. Par exemple, dans notre cas une fois que notre code pour ajouter la date est bon et que nos test unitaires sont passées alors on envoi les fichiers de notre branche vers la develop.

4. Le git add permet d'ajouter nos modifications sur la branche actuelle en phase de "Staged Changes". Le git commit affecte nos modifications à github et il faut le publish afin que les modifications soient visibles dans github.


Github

1. Les protections de branche permettent de définir si les utilisateurs peuvent supprimer la branche ou effectuer des envois sur cette branche.

2. Une pull request à pour but d'ajouter des modifications d'une branche vers une autre. Par exemple, ici ajouter les modifications de nos fichiers "CharacterDetails" et "CharacterList" dans notre branche develop.

Versionning 

1. Le passage d'une version 1.0.0 à 1.0.1 signifie une modification très légère (la résolution d'un bug par exemple).

2. Le passage d'une version 1.0.0 à 1.1.0 signifie une modification et plus précisèment une mise à jour de la version actuelle.

3. Dans notre cas la version permet de savoir l'avancer de notre projet. par exemple une des étapes étaient d'ajoutés des graphiques sur les capacités des personnages. Une fois le code bon nous avons changé notre release et sommes passés de 1.2.0 à 1.3.0.

Test 

1. Les test unitaires permettent de "tester" nos codes. Cela va être de tester s'il n'y a pas des codes inutiles, mal codés ou même sur les versions des packages installés.