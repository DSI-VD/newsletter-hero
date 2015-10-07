# Newsletter

For more information about this project, visit Jira issue  [CCWEB-6971](http://issuetracker.etat-de-vaud.ch/outils/jira/browse/CCWEB-6971) (internal use).

:point_right: [The newsletter is viewable here](http://vdch.github.io/newsletter-hero/). :point_left:

## Build

    $ cd path/to/project/directory/
    $ sudo npm install
    $ grunt

to publish on 'gh-pages': '$ grunt publish'

## Installation de la newsletter (in french)

1. Créer un *sysfolder*
    1. Dans les propriétées de la page, utiliser le template *Newsletter Hero*
    1. Dans les propritées de la page, ajouter le *TSCongig* `<INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/tsconfig.ts">`
1. Dans le *sysfolder*, créer deux éléments de contenu
    1. un pour le pied de page gauche
    1. un pour le pied de page droite.
1. Créer un gabarit dans le *sysfolder*
    1. Dans le champs *Constants* ajouter `<INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/constants.ts">` et renseigner les constantes suivantes:
        * Derpatment name: `lib.department`
        * Service name: `lib.service`
        * Banner text: `lib.newsletter.bannertext`
        * uid of the Content Element use in the left footer: `lib.newsletter.footer.left` (voir ci-dessus)
        * uid of the Content Element use in the right footer: `lib.newsletter.footer.right` (voir ci-dessus)
        * ID of the page where to unsubscribe: `lib.idToUnsubscribe`
    1. Dans le champs *Setup* ajouter `<INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/setup.ts">`

## TYPO3 configuration

Here are the differents setups to enable the design on TYPO3.

### Constants

    <INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/constants.ts">

    # Department name
    lib.department = Département des finances et des relations extérieurs
    # Service name
    lib.service = Service immeuble, patrimoine et logistique
    # Banner text
    lib.newsletter.bannertext = Stratégie et Développement

    # uid of the Content Element use in the left footer
    lib.newsletter.footer.left = 163203
    # uid of the Content Element use in the right footer
    lib.newsletter.footer.right = 163204

    # ID of the page where to unsubscribe
    lib.idToUnsubscribe = 5772

### Setup

    <INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/setup.ts">

### TSConfig

    <INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/extensions/direct_mail/hero-email-template/typoscript/tsconfig.ts">
