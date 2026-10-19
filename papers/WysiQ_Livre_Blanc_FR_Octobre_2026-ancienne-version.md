# WysiQ

## De la donnée vivante à l'intelligence analytique

**Livre blanc — édition octobre 2026**

*Catalogue WWW multi-domaines · Tables Static / Live · SQL Assistant · Query multi-graphes · Values / Percent · Rules & Vars · Scénarios*

**Comprendre le passé. Suivre le présent. Simuler l'avenir.**

Un environnement intégré, conçu autour du graphe, qui relie l'accès aux données, la préparation, l'observation, la mesure et le raisonnement — sans imposer de programmation à l'analyste.

**Édition de développement — 18 octobre 2026.** Certaines intégrations et certains connecteurs demandent encore une validation sur les services réels avant diffusion commerciale.

---

# Résumé exécutif

Une donnée intéressante existe rarement au même endroit que les outils nécessaires pour la comprendre. Elle se trouve dans un fichier, une base d'entreprise, un catalogue statistique ou une API Internet ; elle doit ensuite être sélectionnée, rapprochée, visualisée, mesurée et expliquée. Les pratiques habituelles répartissent ces étapes entre plusieurs logiciels, exports et scripts, au risque de perdre les transformations et le contexte de l'analyse.

**WysiQ propose une chaîne continue : découvrir les données, les rendre utilisables localement, travailler directement dans des graphes vivants, formaliser les règles métier, confronter des hypothèses et réutiliser les résultats.** La plateforme repose sur une conception intégrée, et non sur une succession de modules rapportés après coup. Le graphe est l'espace permanent d'observation et d'interaction, tandis que SQL, DuckDB et les tables gardent leurs rôles de préparation, contrôle et conservation.

WysiQ intègre un **catalogue de connexions WWW multi-domaines**, donnant accès aux sources Internet et à leurs historiques dans un parcours homogène de préparation, de Query, de Metrics et d'analyse. Une Query réunit les tables et plusieurs graphes nommés : elle permet de distinguer les valeurs réelles, les tendances, les séries analytiques et les scénarios, avec un affichage **Values** ou **Percent** propre à chaque vue, sans altérer les données d'origine.

WysiQ ne prétend ni posséder les données des fournisseurs ni remplacer les bases ou les plateformes BI. Il relie leurs données à un atelier d'exploration et d'analyse indépendant, local et portable, susceptible de restituer ensuite des tables, graphiques et résultats exploitables dans les systèmes existants.

## Les fonctions réunies dans WysiQ

| Domaine | Fonctions et possibilités |
|---|---|
| Données Internet | WWW Connections, catalogue mondial, connecteurs préconfigurés, découverte et validation des séries |
| Tables | Six modes LS, LW, RS, RL, WS et WL ; données locales statiques, fichiers évolutifs et sources distantes ou WWW |
| Préparation | SQL Assistant, rapprochement de sources, matérialisation et réduction des tables avant analyse |
| Query | Graphes dédiés aux valeurs réelles, moyennes, Signals/PCA et scénarios, réunis dans une même Query |
| Représentation | LINE / POLAR et bascule Values / Percent par graphe ; bornes et contextes de vue conservés |
| Pilotage | Graph Remote, fenêtres indépendantes, transparence, affichage côte à côte et Pan / Zoom / rotation POLAR liés |
| Analyse | Metrics, Areas, Signals, Identify, tests statistiques, PCA et corrélations |
| Raisonnement | Rules & Vars, seuils dynamiques, scénarios et contraintes de simulation |
| Exploitation | Historique, captures, exports, IA contextualisée, partage et retour vers la BI |

# 1. L'analyse change de point de départ

Les systèmes relationnels ont rendu la donnée fiable et interrogeable ; les outils de BI ont permis de la publier à grande échelle. Ils demeurent essentiels. Pourtant, lorsqu'une question n'est pas encore stabilisée, un tableau de bord ne suffit pas toujours : il faut parcourir les données brutes, identifier une forme inattendue, déplacer les bornes, comparer une autre période, puis seulement décider quels indicateurs sont pertinents.

WysiQ se situe à ce moment de découverte. Son principe **Graph First** ne signifie pas « abandonner les tables » : les tables restent nécessaires pour enregistrer, filtrer et contrôler les valeurs ; le graphe devient le support principal du raisonnement humain. Au lieu d'illustrer à la fin une réponse déjà définie, il sert à trouver la question et à éprouver l'explication.

Le parcours analytique associe **Data First, puis Graph First**. L'accès WWW réduit la distance entre une donnée disponible sur Internet et son exploration. Le chercheur indépendant peut explorer une statistique publique ; l'analyste d'entreprise peut rapprocher cette statistique de ses données internes. Le même moteur visuel sert aux deux usages.

## Une chaîne unique, pas une juxtaposition

| Étape | Dans WysiQ | Résultat durable |
|---|---|---|
| Accéder | Fichiers, bases, WWW Connections | Source identifiable |
| Préparer | SQL Assistant, filtres, JOIN / UNION, Shrink | Table de travail matérialisée |
| Explorer | Query, LINE / POLAR, graphes multiples | Vues et sélections enregistrées |
| Mesurer | Metrics, Areas, Signals, Tests, PCA | Objets analytiques réutilisables |
| Raisonner | Rules & Vars, seuils, scénarios | Hypothèses et contraintes explicites |
| Expliquer / diffuser | AI Feeds, captures, HTML, exports | Résultat transmissible avec son contexte |

# 2. WWW Connections : les données Internet entrent dans WysiQ

Avec **WWW Connections**, l'utilisateur peut commencer directement par la recherche de données Internet, sans téléchargement manuel préalable. Il peut rechercher un fournisseur et un dataset, examiner les ressources accessibles, sélectionner les dimensions et séries publiées, tester la disponibilité des observations numériques, puis construire une table WysiQ. Les données peuvent provenir d'API JSON, CSV, XML ou SDMX, suivant les capacités du fournisseur.

Le champ est volontairement multi-domaines : énergie et prix de marché, statistiques publiques, économie, météo, environnement, mobilité, recherche et autres données ouvertes. Les connecteurs du projet couvrent notamment des familles de fournisseurs comme RTE, INSEE, Eurostat, Banque mondiale, Open-Meteo ou des sources énergétiques européennes. **La présence d'un connecteur au catalogue n'est pas une garantie universelle de service** : URL, période, dimensions, quotas, authentification et licence doivent être respectés et validés pour chaque source.

Pour les jeux SDMX, choisir un indicateur ne signifie pas nécessairement choisir une série unique. La série réelle est définie par une combinaison de dimensions. L'interface conduit donc à une sélection explicite des codes, à un **Test selection / Ready** fondé sur la présence de valeurs datées, puis à **Preview table** avant Download. Elle distingue un filtre valable d'une série réellement observable sur la période choisie. Cette prévisualisation protège l'utilisateur contre des requêtes trop larges et des tables vides.

**Un accès aux données, pas un transfert de propriété.** WysiQ agit comme catalogue, agrégateur de connexions et outil d'accès aux sources de tiers. Les données restent régies par les conditions de leurs éditeurs ; leur réutilisation, leur mise en cache et toute diffusion commerciale doivent respecter les droits, clés et obligations applicables.

![Catalogue WWW Connections, avec les fournisseurs et les ressources sélectionnables.](assets/www_catalog.png)

# 3. Un même modèle de tables, qu'elles soient locales, distantes ou Live

Une fois acquises, les données ne devraient pas changer de nature au seul motif qu'elles proviennent d'un serveur, d'un fichier ou d'Internet. Le Workspace distingue **six types de tables**, mais les présente comme des objets utilisables dans les Query, graphiques, Metrics et analyses. Le mode indique comment la table est alimentée ; il ne définit pas un autre langage d'analyse.

| Code | Nom | Origine et fonctionnement |
|---|---|---|
| **LS** | Local Static | Table créée, transformée ou importée localement, autonome et conservée dans le Workspace |
| **LW** | Local Watched | Table locale alimentée depuis un répertoire de fichiers évolutifs, notamment hébergé sur un serveur ; actualisable à partir de ces fichiers |
| **RS** | Remote Static | Table provenant d'une base distante, matérialisée lors d'un chargement explicite |
| **RL** | Remote Live | Table alimentée incrémentalement depuis une base distante selon les clés et dates déclarées |
| **WS** | WWW Static | Copie issue d'un connecteur Internet, chargée à la demande avec son historique |
| **WL** | WWW Live | Table Internet avec acquisition planifiée et ajouts horodatés |

**LS et LW remplissent des rôles distincts.** LS conserve une table autonome dans le Workspace. LW conserve également une table locale, mais sa source est un ensemble de fichiers évolutifs dans un répertoire accessible, notamment sur un serveur. LW ne doit pas être confondu avec RL (base distante) ni avec WL (connecteur Internet).

La matérialisation locale s'appuie sur DuckDB et des fichiers Parquet. Une table RS ou WS peut ainsi continuer d'être explorée hors ligne après chargement. Une table RL ou WL conserve son historique local lorsqu'une acquisition est arrêtée. Les opérations Static / Live et leurs contrôles doivent préserver l'identité de la table, la provenance et les données existantes ; certaines conversions exigent des horodatages compatibles, notamment l'UTC pour le Live WWW.

Le contrôle d'une table Live relève du cycle de vie des données : paramètres de source, intervalle de mise à jour, Start / Stop, reprise et état d'acquisition. **Le graphe consulte une table ; il ne devrait pas avoir à créer un système parallèle pour l'alimenter.** Cette séparation permet d'utiliser les tables Live comme les autres, y compris depuis plusieurs Query.

# 4. SQL Assistant : fabriquer les tables dont l'analyse a réellement besoin

L'accès est une première étape, pas la fin du traitement. WysiQ associe un File Loader pour les fichiers usuels et un **SQL Assistant** capable d'interroger des bases et tables, de sélectionner des colonnes, filtrer, agréger, rapprocher et matérialiser les résultats. Les jointures et unions permettent de consolider plusieurs sources hétérogènes ; la réduction d'une table volumineuse évite de recharger inutilement des lignes ou colonnes hors du sujet.

L'analyste peut donc garder une table source comme archive complète, puis construire une table locale ciblée et indépendante pour une investigation. Les étapes de transformation restent distinctes de la représentation graphique : une fois la table locale créée, elle est réutilisable, sauvegardable et exploitable dans d'autres Query.

**Exemple réel du développement WysiQ :** une table WWW issue du jeu de données français eCO2mix a servi à produire, via SQL Assistant, une table `RTE_2012_2025` plus légère. Une Query initialement construite sur la source a été réorientée vers cette nouvelle table principale. Après correction des références enregistrées, la Query n'a plus demandé le chargement de l'ancienne table WWW, qui comportait environ deux fois plus de lignes. C'est un gain de temps obtenu par la bonne séparation entre provenance, table de travail et dépendances effectives de la Query — sans déplacer le calcul métier vers un script externe.

# 5. Graph First : voir avant d'agréger

Le **Data Oscilloscope** est la planche de travail permanente. Sur une vue LINE, le temps, une distance ou une autre variable ordonnée occupent l'axe X. Les séries peuvent être zoomées, déplacées, comparées, contrôlées dans la Table de travail et reliées à leurs annotations. Sur une vue POLAR, X est projeté sur un cycle : les répétitions, saisonnalités et déphasages deviennent visibles autrement qu'en linéaire.

Une large plage de données peut être abordée d'abord comme un ensemble, puis progressivement à l'échelle d'une journée ou d'un point. Les modes de dessin accéléré, la possibilité de masquer des éléments, l'affichage transparent et les palettes indépendantes rendent possible une exploration dense sur de grands écrans. L'utilisateur choisit ce qu'il observe et quand il demande un recalcul complet.

**Le point essentiel : la représentation ne remplace pas les données.** Les valeurs conservent leurs unités et leur provenance. Les opérations de zoom, de pan, de rotation ou de transparence agissent sur une vue, non sur les observations enregistrées.

![Vue LINE : séries superposées et fenêtre de détail polaire.](assets/graph_line_overlay.png)

# 6. Une Query, plusieurs graphes pour plusieurs lectures

Une **WysiQuery** conserve les tables de travail, les séries sélectionnées, les Metrics et les paramètres de l'investigation. Elle contient plusieurs **Graph** nommés, chacun avec sa propre sélection de séries, sa légende, ses bornes et sa représentation. Les différentes lectures reposent sur le même contexte analytique ; elles ne demandent ni de dupliquer les données ni de tout empiler dans un graphique unique.

L'organisation peut suivre quatre niveaux de lecture complémentaires : **Graph 1**, les séries réelles et les valeurs observées ; **Graph 2**, les moyennes, lissages et tendances ; **Graph 3**, les signaux calculés ou les composantes **PCA transformées en séries** ; **Graph 4**, les scénarios et les trajectoires simulées. L'analyste peut ainsi passer des faits aux tendances, puis aux structures détectées et aux hypothèses, sans mélanger ces résultats sur une seule échelle illisible.

Dans le sélecteur Graph, **un clic suffit pour basculer** d'une vue à l'autre, sans reconstruire l'investigation. Chaque vue dispose de son affichage **Values / Percent** et conserve son cadrage. La Query peut aussi combiner plusieurs tables, alignées sur l'axe X ou disposées en séquence. Sa table principale est celle effectivement sélectionnée, et non une ancienne table source conservée par erreur après une transformation dans SQL Assistant.

Pour une comparaison simultanée, les Graph peuvent être **détachés dans des fenêtres indépendantes**, **accolés** ou **superposés avec un fond transparent**. **Graph Link** permet de synchroniser le **Pan**, le **Zoom** et, en mode **POLAR**, la **rotation**, tout en conservant la liberté de choisir les séries et les réglages de chaque fenêtre. On examine ainsi le même instant ou le même cycle à plusieurs niveaux d'analyse, sans surcharger une seule visualisation.

# 7. Values / Percent : comparer les formes sans modifier les nombres

Le mode **Values** représente une série dans ses valeurs et unités d'origine. Le mode **Percent** apporte une lecture comparative : **chaque série est exprimée en pourcentage de son propre maximum absolu**. Formellement, pour une série de valeurs y, la valeur affichée est `100 × y / max(|y|)`, lorsque le maximum est non nul. Le zéro reste zéro ; le signe des valeurs est conservé.

Cette convention donne un langage graphique commun à des séries de grandeurs différentes. On peut rapprocher les trajectoires d'une production électrique, d'une consommation ou d'un autre indicateur sans confondre la comparaison des formes avec celle des volumes absolus. **100 % signifie ici le maximum absolu propre à la série considérée, pas une part d'un total.** Cette précision doit accompagner toute interprétation ou export.

La bascule **Values / Percent est un mode d'affichage du graphe**, et non une transformation destructive de la table ou de la Metric. Chaque graphique de la Query peut adopter sa propre lecture. Les réglages conservent les contextes de bornes adaptés à chaque mode et au type de graphe, afin que le passage de l'un à l'autre n'efface pas inutilement le cadrage construit par l'utilisateur.

# 8. Graph Remote, graphes liés et pilotage direct

Graph Remote concentre les opérations qui doivent rester disponibles pendant l'observation : LINE / POLAR, Plot, défilement X, Zoom, Pan, historique, capture, superposition et accès aux palettes. La navigation au clavier et à la souris permet de travailler directement sur des graphes de grande taille sans revenir à des menus de préparation.

Le **Graph Hub multiprocessus** coordonne les fenêtres de graphe ouvertes dans plusieurs processus WysiQ : une Remote commune suit le graphe actif et les commandes pertinentes peuvent être transférées aux graphes liés. Les vues superposées ou détachées restent manipulables, sans être fondues en un unique dessin. Dans un Graph LINK, les opérations synchronisées sont choisies pour comparer correctement des séries et des époques.

Dans Display, l'utilisateur règle séparément le **pas de zoom (%)**, le **pas de pan (%)**, la **répétition des flèches (ms)** et le **délai de liaison des graphes (ms)**. Le zoom horizontal ne change pas les limites verticales et inversement. En POLAR, rotation << X / X >> et zoom radial privilégient une réaction immédiate, avec un rafraîchissement complet limité lorsque c'est utile. Ces réglages donnent à l'analyste la main sur la précision et la fluidité, sans lui imposer une animation automatique.

![Vue POLAR : lecture cyclique des séries et palettes d'analyse.](assets/graph_polar.png)

# 9. Mesurer : Areas, Metrics, Signals, statistiques, PCA, Identify

L'observation devient exploitable dès qu'elle laisse des objets nommés. Une **Area** définit un périmètre X/Y, les séries concernées et les statistiques à calculer. Plusieurs Areas peuvent être conservées pour comparer des périodes ; un post-it fige un résultat ponctuel alors qu'une Area paramétrée peut être recalculée. Un phénomène repéré visuellement peut ainsi être mesuré sans quitter son contexte.

Une **Metric** est une série calculée dont la recette reste éditable : somme, différence, combinaison pondérée, décalage, décalage temporel, résidu ou formule métier. Une Metric peut exploiter des séries issues de plusieurs tables ; elle conserve les clés qualifiées et les paramètres qui rendent le calcul reproductible. Ces résultats restent de véritables séries utilisables dans Graph, Table, Areas et analyses ultérieures.

**Signals** décrit la dynamique des séries : variations, dérives, pics, changements de signe, oscillations, fréquences ou caractéristiques locales. Les **tests statistiques** quantifient les différences et relations en tenant compte des hypothèses et des corrections de tests multiples. La **PCA / ACP** éclaire les structures communes ; **Identify** explore les distributions et leurs ajustements ; la recherche de corrélation et de décalage peut conduire à une Metric de résidu.

La démarche reste scientifique : une corrélation ne démontre pas une causalité, un bon ajustement ne prouve pas une loi physique, et une simulation ne valide pas ses propres hypothèses. WysiQ vise à conserver les paramètres, échantillons, bornes et résultats pour qu'une interprétation puisse être vérifiée.

# 10. Rules & Vars : l'intelligence métier derrière les graphes vivants

Les variables ne sont pas seulement des constantes posées sur un graphique. Dans **Rules & Vars**, les **Vars** représentent des capacités, hypothèses, coefficients ou consignes ; les **Rules** expriment les contraintes métier à partir de ces valeurs et des séries observées. Une Rule peut produire à chaque instant une limite minimale ou maximale différente. Les seuils graphiques deviennent alors l'expression visible de règles dynamiques, et non de simples lignes fixes arbitraires.

Dans l'électricité, la consommation ne peut pas être satisfaite au-delà de la **production disponible + l'import réellement mobilisable**, lui-même limité par les interconnexions et par la capacité des voisins à fournir. Inversement, une production excédentaire ne peut pas toujours être absorbée : consommation, export autorisé et stockage disponible fixent ensemble une limite. Les instants où le système s'approche de ces bornes — ou les dépasse — deviennent des situations qu'une Area peut isoler et qu'une Metric peut chiffrer.

**Les mêmes règles servent à analyser le réel puis à contraindre l'hypothèse.** Modifier une Var ne change pas le passé enregistré : cela modifie le calcul explicite d'une règle ou d'un scénario. On peut comparer ce que les données ont montré et ce que des décisions différentes auraient produit, dans les limites du modèle choisi.

# 11. Scénarios : du constat au futur possible

Un scénario prend une série ou un ensemble de séries, applique des hypothèses et conserve le résultat comme une trajectoire distincte des données observées. Dans un modèle d'équilibre, réduire une part du nucléaire au profit du solaire ne se juge pas sur les seules productions annuelles. La question devient horaire ou infra-horaire : **à quels instants manque-t-il de l'énergie disponible ? À quels instants une production potentielle doit-elle être écrêtée ?**

Rules & Vars peuvent fixer la capacité des importations, des exportations, du stockage ou les bornes d'exploitation. Les scénarios comparent alors les consommations non pourvues, les excédents non valorisés et les moments où la contrainte est atteinte. Cette logique s'applique aussi aux besoins de stocks, aux capacités industrielles, aux flux logistiques, à l'eau ou à tout système soumis à des limites variables dans le temps.

WysiQ distingue trois plans : **les valeurs constatées**, **les paramètres de la simulation** et **les résultats calculés**. Les scénarios sont des outils de raisonnement dont la pertinence dépend des contraintes et données disponibles ; ils ne constituent pas une prévision certifiée par eux-mêmes. Certaines automatisations avancées de suivi Live et de simulation restent en cours de validation sur des cas réels.

# 12. L'intelligence artificielle après les faits calculés

Une IA peut accélérer l'explication, la rédaction, la recherche d'hypothèses et la comparaison d'interprétations. Elle devient plus utile quand elle reçoit une question étayée : séries sélectionnées, Areas, Metrics, statistiques, tests, résultats de PCA, scénarios, captures et provenance. WysiQ construit ce contexte dans des **AI Feeds**, plutôt que d'expédier sans discernement toutes les données brutes à un modèle.

Cette approche protège à la fois la qualité du raisonnement et la maîtrise des données. Les mesures scientifiques sont effectuées par les moteurs analytiques ; le modèle de langage commente, formule ou aide à explorer. L'utilisateur conserve la décision, le contrôle des éléments transmis et la vérification des réponses. Les modèles locaux peuvent être utilisés pour des usages compatibles avec leurs capacités ; les services cloud restent facultatifs et supposent une connexion et les droits correspondants.

L'IA n'est donc pas la source de vérité de WysiQ. Elle complète une investigation déjà structurée par des objets calculés et des règles identifiées. **Observer, mesurer, raisonner, puis expliquer** : cet ordre limite les interprétations sans fondement.

# 13. Un environnement intégré, local, portable et réutilisable

L'architecture WysiQ s'appuie sur des composants open source et sur un stockage analytique local. Le Workspace regroupe les définitions, tables, fichiers de sauvegarde, Query et paramètres nécessaires à la reprise. Une fois matérialisées, les données restent accessibles sans que la connexion WWW ou DB doive être active en permanence. Le fonctionnement courant des analyses locales ne nécessite ni serveur cloud WysiQ, ni compte Internet obligatoire.

La distribution Windows vise un **exécutable autonome**, sans installation lourde, dont la taille se situe dans l'ordre de 150 Mo suivant la compilation ; Workspace et documents peuvent être transportés à côté du programme. La copie d'un Workspace permet de reprendre les enquêtes, sous réserve d'emporter les dépendances et de respecter les règles de licence des sources. Les aides et l'interface sont organisées en cinq langues : français, anglais, allemand, espagnol et italien.

La sortie ne se limite pas à l'image : tableaux de résultats, fichiers, graphiques haute résolution, formats HTML, snapshots, historiques et mécanismes de partage peuvent servir à transmettre les observations. WysiQ peut aussi fournir à une plateforme BI les tables préparées et les calculs validés : l'exploration et la diffusion gouvernée deviennent complémentaires.

# 14. Trois enquêtes qui illustrent la plateforme

## Énergie : rapprocher système électrique, prix et météo

Le catalogue WWW ouvre l'accès aux séries d'énergie, de météo et, selon les fournisseurs, de prix. SQL Assistant transforme des jeux de données volumineux en tables adaptées à la période étudiée. Plusieurs graphes de la même Query isolent production, consommation, renouvelables et échanges ; LINE montre la chronologie, POLAR les cycles et Percent les formes relatives. Areas et Metrics chiffrent les événements, tandis que Rules & Vars modélisent les capacités et scénarios. Aucune hypothèse n'écrase les observations originales.

## Économie et territoire : croiser des sources hétérogènes

Une statistique publique, une série démographique, une donnée météorologique ou un indicateur d'entreprise peuvent partager une même enquête malgré des formats et fréquences différents. WysiQ explicite l'alignement temporel, la période et les unités avant de les représenter ensemble. Les analyses par Area, tests et PCA permettent de distinguer une coïncidence graphique d'une relation qui mérite une étude approfondie.

## Entreprise et exploitation : réduire le temps entre anomalie et décision

Un analyste charge plusieurs sources de production, vente ou logistique, les consolide par SQL Assistant et conserve une Query. Les graphes nommés permettent à plusieurs lectures métier de coexister : résultat, cadence, qualité, coût. Signals détecte des changements de comportement ; des règles dynamiques expriment les capacités ; les objets calculés alimentent un rapport ou un dashboard existant, sans réécrire toute l'investigation.

# 15. Ce que WysiQ est — et ce qu'il n'affirme pas

WysiQ se présente comme un **atelier d'accès, d'observation et de raisonnement sur les données**, qui sert autant à l'exploration individuelle qu'à la préparation d'analyses d'entreprise. Sa spécificité n'est pas de tracer davantage de courbes : elle est de faire travailler la donnée, la mesure, les règles métier, les scénarios et les graphes dans un même espace enregistré.

Le produit n'est pas présenté comme déjà commercialisé dans cette édition. Les connecteurs WWW forment un catalogue extensible dont la disponibilité dépend de services externes. La gestion Live, les opérations multi-graphes, les intégrations IA et certains scénarios doivent continuer d'être validés par fournisseur et par usage, avec leurs performances et leurs limites. Une démonstration ou un test de développement ne constitue pas une certification industrielle.

L'analyste reste responsable de l'alignement de X, des fuseaux horaires, des unités, des valeurs manquantes, des doublons, de la qualité statistique et de l'interprétation des résultats. En matière de données tierces, il doit aussi vérifier licences, quotas, clés d'API et règles de redistribution. WysiQ rend cette enquête plus continue et plus reproductible ; il ne supprime ni la complexité du monde réel ni la nécessité de l'expertise métier.

# Conclusion — le graphe n'est plus une illustration finale

Les **WWW Connectors** donnent accès à un catalogue de données Internet multi-domaines ; **SQL Assistant** les transforme en tables de travail locales. Les **Query multi-graphes** permettent de séparer réel, moyennes, séries analytiques et scénarios, puis de comparer les vues en transparence ou côte à côte avec navigation synchronisée. **Values / Percent** enrichit ces lectures sans changer les données. **Areas**, **Metrics**, **Signals**, tests, **PCA** et **Identify** transforment l'observation en mesure ; **Rules & Vars** relient la mesure aux contraintes métier et à la simulation.

Ce parcours est conçu comme un tout : **accéder → préparer → observer → mesurer → raisonner → simuler → expliquer → partager**. Les systèmes relationnels gardent les données, la BI peut diffuser les indicateurs validés, et l'IA peut aider à expliquer. Entre eux, WysiQ donne à l'utilisateur un espace durable pour construire les questions, vérifier les faits et explorer les conséquences de ses décisions.

**WysiQ — Comprendre le passé. Suivre le présent. Simuler l'avenir.**

# Glossaire essentiel

| Terme | Sens dans WysiQ |
|---|---|
| WWW Connector | Définition d'accès à un dataset Internet via une API ou ressource publiée |
| LS / LW / RS / RL / WS / WL | Modes des tables : local statique, local alimenté par fichiers évolutifs, base distante statique/live et WWW statique/live |
| Workspace | Ensemble local de tables, Query, paramètres et fichiers de travail |
| Query / WysiQuery | Investigation sauvegardée avec tables, séries, graphiques et objets analytiques |
| Graph View | Vue nommée d'une Query, avec sélection de séries et réglages propres |
| Values / Percent | Valeurs d'origine / représentation de chaque série en % de son maximum absolu |
| Graph Hub | Coordination des graphes et commandes entre processus WysiQ |
| Area | Périmètre de mesure attaché à des bornes et des séries |
| Metric | Série calculée avec une recette et des références de source explicites |
| Rules & Vars | Règles métier dynamiques et paramètres modifiables |
| Scenario | Trajectoire hypothétique distincte des données observées |
| AI Feed | Contexte analytique structuré transmis volontairement à une IA |

*Note éditoriale — Cette édition s'appuie sur les livres blancs WysiQ précédents, les décisions produit d'octobre 2026 et l'état des sources de développement jusqu'à FIX71. Les captures illustrent l'interface de développement et sont susceptibles d'évoluer. Les conditions d'accès aux API et les droits des données des fournisseurs restent ceux de chaque éditeur.*
