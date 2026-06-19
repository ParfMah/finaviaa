/**
 * FINAVIA - SYSTÈME I18N (INTERNATIONALISATION)
 * ===============================================
 * Gère la traduction de toute l'interface dans 5 langues :
 * - Français (fr) [langue par défaut]
 * - Espagnol (es)
 * - Allemand (de)
 * - Portugais (pt)
 * - Italien (it)
 *
 * UTILISATION :
 * - Chaque élément HTML à traduire a un attribut data-i18n="clé"
 * - Les placeholders : data-i18n-placeholder="clé"
 * - Les aria-labels : data-i18n-aria="clé"
 * - Appeler i18n.setLanguage('code') pour changer la langue
 *
 * La langue choisie est sauvegardée dans localStorage.
 */

const i18n = (() => {

  // ============================================
  // DONNÉES DE TRADUCTION - TOUTES LES LANGUES
  // ============================================
  const translations = {

    /* ==========================================
       FRANÇAIS (défaut)
       ========================================== */
    fr: {
      /* Navigation */
      "nav.home": "Accueil",
      "nav.loans": "Nos Prêts",
      "nav.howItWorks": "Comment ça marche",
      "nav.about": "À Propos",
      "nav.contact": "Contact",
      "nav.apply": "Demande de Prêt",

      /* Hero - Accueil */
      "hero.badge": "Votre partenaire financier de confiance en Europe",
      "hero.title": "Financer vos projets,",
      "hero.titleBold": "simplement et sûrement",
      "hero.subtitle": "FINAVIA vous accompagne dans tous vos projets avec des solutions de financement adaptées à votre situation et vos besoins.",
      "hero.cta1": "Faire une demande",
      "hero.cta2": "En savoir plus",
      "hero.trust1": "Réponse en 24h",
      "hero.trust2": "100% Sécurisé",
      "hero.trust3": "Sans engagement",
      "hero.card.badge": "Approuvé",
      "hero.card.amount": "25 000 €",
      "hero.card.label": "Prêt personnel approuvé",
      "hero.card.progress": "65% complété",
      "hero.card.stat1.value": "24h",
      "hero.card.stat1.label": "Délai de réponse",
      "hero.card.stat2.value": "3,9%",
      "hero.card.stat2.label": "TAEG à partir de",
      "hero.float.title": "Dossier validé",
      "hero.float.text": "Il y a 2 minutes",
      "hero.scroll": "DÉCOUVRIR",

      /* Statistiques */
      "stats.1.value": "50 000",
      "stats.1.suffix": "+",
      "stats.1.label": "Clients satisfaits",
      "stats.2.value": "500",
      "stats.2.suffix": "M€+",
      "stats.2.label": "Financés en Europe",
      "stats.3.value": "15",
      "stats.3.suffix": "+",
      "stats.3.label": "Années d'expertise",
      "stats.4.value": "94",
      "stats.4.suffix": "%",
      "stats.4.label": "Taux d'approbation",

      /* Avantages */
      "advantages.badge": "Pourquoi FINAVIA ?",
      "advantages.title": "Des avantages qui font la différence",
      "advantages.subtitle": "Nous mettons tout en œuvre pour vous offrir la meilleure expérience de financement.",
      "adv.1.title": "Réponse en 24 heures",
      "adv.1.desc": "Obtenez une décision rapide sur votre demande. Notre équipe analyse votre dossier en moins de 24 heures ouvrées.",
      "adv.2.title": "Taux compétitifs",
      "adv.2.desc": "Bénéficiez de taux d'intérêt parmi les plus avantageux du marché européen, adaptés à votre profil.",
      "adv.3.title": "100% Sécurisé",
      "adv.3.desc": "Vos données personnelles et financières sont protégées par les plus hauts standards de sécurité.",
      "adv.4.title": "Conseillers experts",
      "adv.4.desc": "Une équipe de spécialistes vous accompagne tout au long de votre projet, de la demande au déblocage.",
      "adv.5.title": "Sans engagement",
      "adv.5.desc": "Demandez une simulation gratuite sans aucun engagement. Vous êtes libre d'accepter ou de refuser.",
      "adv.6.title": "9 pays couverts",
      "adv.6.desc": "FINAVIA opère dans 9 pays européens pour vous accompagner quelle que soit votre localisation.",

      /* Services */
      "services.badge": "Nos solutions",
      "services.title": "Des prêts adaptés à chaque projet",
      "services.subtitle": "FINAVIA propose une gamme complète de solutions financières pour accompagner tous vos projets de vie.",
      "service.personal.tag": "Jusqu'à 75 000 €",
      "service.personal.title": "Prêt Personnel",
      "service.personal.desc": "Financez vos projets personnels avec des conditions avantageuses. Vacances, mariage, études... tout est possible.",
      "service.personal.cta": "En savoir plus",
      "service.auto.tag": "Jusqu'à 80 000 €",
      "service.auto.title": "Prêt Automobile",
      "service.auto.desc": "Obtenez votre véhicule neuf ou d'occasion rapidement avec notre financement automobile sur mesure.",
      "service.auto.cta": "En savoir plus",
      "service.travaux.tag": "Jusqu'à 75 000 €",
      "service.travaux.title": "Prêt Travaux",
      "service.travaux.desc": "Transformez votre habitat avec notre financement dédié à la rénovation et l'amélioration de votre logement.",
      "service.travaux.cta": "En savoir plus",
      "service.immo.tag": "Jusqu'à 1 000 000 €",
      "service.immo.title": "Prêt Immobilier",
      "service.immo.desc": "Réalisez votre projet immobilier grâce à notre accompagnement expert et nos taux immobiliers attractifs.",
      "service.immo.cta": "En savoir plus",
      "service.regroupement.tag": "Jusqu'à 150 000 €",
      "service.regroupement.title": "Regroupement de Crédits",
      "service.regroupement.desc": "Simplifiez la gestion de vos finances en regroupant tous vos crédits en une seule mensualité réduite.",
      "service.regroupement.cta": "En savoir plus",
      "service.other.tag": "Solutions sur mesure",
      "service.other.title": "Autres Solutions",
      "service.other.desc": "Vous avez un projet particulier ? Nos conseillers étudient toutes les situations pour trouver la meilleure solution.",
      "service.other.cta": "Nous contacter",

      /* Comment ça marche (aperçu accueil) */
      "how.badge": "Notre processus",
      "how.title": "Simple, rapide et transparent",
      "how.subtitle": "Nous avons conçu un processus clair et efficace pour vous offrir la meilleure expérience possible.",
      "how.step1.title": "Faites votre demande",
      "how.step1.desc": "Remplissez notre formulaire en ligne en 5 minutes. Simple, intuitif et sans papier.",
      "how.step2.title": "Analyse de dossier",
      "how.step2.desc": "Notre équipe analyse votre dossier avec soin sous 24 heures ouvrées.",
      "how.step3.title": "Proposition personnalisée",
      "how.step3.desc": "Recevez une offre sur mesure adaptée à votre situation et votre profil.",
      "how.step4.title": "Déblocage des fonds",
      "how.step4.desc": "Après signature, les fonds sont virés sur votre compte rapidement.",
      "how.cta": "Voir le processus complet",

      /* Témoignages */
      "testimonials.badge": "Témoignages",
      "testimonials.title": "Ce que disent nos clients",
      "testimonials.subtitle": "Des milliers de clients nous font confiance pour leurs projets financiers à travers l'Europe.",
      "testimonial.1.text": "J'avais besoin d'un financement rapide pour rénover ma maison. FINAVIA m'a proposé une offre en 24h avec des conditions excellentes. Je recommande vraiment !",
      "testimonial.1.name": "Marie Dupont",
      "testimonial.1.info": "Paris, France • Prêt Travaux 35 000 €",
      "testimonial.2.text": "Service exceptionnel ! Mon conseiller m'a accompagné tout au long du processus. J'ai obtenu mon prêt auto en quelques jours seulement. Très professionnel.",
      "testimonial.2.name": "Carlos García",
      "testimonial.2.info": "Madrid, Espagne • Prêt Auto 22 000 €",
      "testimonial.3.text": "Regroupement de crédits réussi grâce à FINAVIA. Ma mensualité a baissé de 35% et je peux enfin respirer financièrement. Merci à toute l'équipe !",
      "testimonial.3.name": "Klaus Müller",
      "testimonial.3.info": "Berlin, Allemagne • Regroupement 80 000 €",

      /* Sécurité */
      "security.badge": "Sécurité & Confiance",
      "security.title": "Votre sécurité, notre priorité absolue",
      "security.subtitle": "FINAVIA met en œuvre les plus hauts standards de sécurité pour protéger vos données personnelles et financières.",
      "security.1.title": "Chiffrement SSL",
      "security.1.desc": "Toutes vos données sont chiffrées avec un protocole SSL 256 bits, le même standard utilisé par les grandes banques.",
      "security.2.title": "RGPD Conforme",
      "security.2.desc": "Vos données sont traitées en conformité avec le Règlement Général sur la Protection des Données européen.",
      "security.3.title": "Régulé & Agréé",
      "security.3.desc": "FINAVIA est régulé et agréé par les autorités financières compétentes de chaque pays où nous opérons.",
      "security.4.title": "Zéro Arnaque",
      "security.4.desc": "Nous ne demandons jamais de frais avant l'octroi du prêt. Notre modèle est 100% transparent et sans frais cachés.",

      /* FAQ */
      "faq.badge": "Questions fréquentes",
      "faq.title": "Vous avez des questions ?",
      "faq.subtitle": "Retrouvez les réponses aux questions les plus posées par nos clients.",
      "faq.q1": "Quels documents faut-il fournir pour une demande de prêt ?",
      "faq.a1": "Pour une demande de prêt, vous aurez besoin de votre pièce d'identité (passeport ou carte nationale d'identité), de vos 3 derniers bulletins de salaire ou bilans comptables si vous êtes indépendant, de vos 3 derniers relevés bancaires, d'un justificatif de domicile récent et, pour un prêt immobilier, des documents relatifs au bien.",
      "faq.q2": "Quel est le délai de traitement d'une demande ?",
      "faq.a2": "Notre équipe s'engage à analyser votre dossier en moins de 24 heures ouvrées. Une fois votre dossier complet soumis, vous recevrez une décision de principe par email. Si votre demande est acceptée, les fonds peuvent être disponibles sous 48 à 72 heures après la signature.",
      "faq.q3": "Quels sont les montants et durées disponibles ?",
      "faq.a3": "Nos prêts vont de 1 000 € à 1 000 000 € selon le type de projet. Les durées varient de 12 à 84 mois pour les prêts personnels, et jusqu'à 300 mois (25 ans) pour les prêts immobiliers. Chaque offre est adaptée à votre situation.",
      "faq.q4": "Ma demande est-elle sans engagement ?",
      "faq.a4": "Absolument. Faire une simulation ou une demande sur FINAVIA n'engendre aucune obligation de votre part. Vous êtes libre d'accepter ou de refuser l'offre qui vous sera proposée. Aucun frais n'est prélevé avant l'acceptation définitive et le déblocage des fonds.",
      "faq.q5": "Comment sont calculés les taux d'intérêt ?",
      "faq.a5": "Les taux sont calculés en fonction de votre profil (revenus, situation professionnelle, historique bancaire), du montant demandé et de la durée souhaitée. Nos TAEG démarrent à 2,9% pour les prêts immobiliers et à 3,5% pour les prêts personnels. Une simulation gratuite vous donnera le taux précis correspondant à votre situation.",
      "faq.q6": "Puis-je rembourser mon prêt par anticipation ?",
      "faq.a6": "Oui, le remboursement anticipé est possible à tout moment. Des indemnités de remboursement anticipé peuvent s'appliquer conformément à la réglementation en vigueur dans votre pays. Dans la plupart des cas européens, ces frais sont plafonnés et peuvent être nuls selon les montants.",
      "faq.q7": "FINAVIA est-il disponible dans mon pays ?",
      "faq.a7": "FINAVIA opère actuellement en France, Espagne, Allemagne, Portugal, Italie, Suisse, Belgique, Monaco et Luxembourg. Si vous résidez dans l'un de ces pays, vous pouvez faire une demande en ligne dès maintenant.",
      "faq.q8": "Que se passe-t-il si ma demande est refusée ?",
      "faq.a8": "En cas de refus, vous en serez informé par email avec les raisons principales. Nos conseillers peuvent vous contacter pour discuter d'alternatives adaptées à votre situation, comme un montant différent, une durée ajustée ou d'autres solutions de financement. Nous cherchons toujours la meilleure option pour vous.",

      /* CTA */
      "cta.title": "Prêt à financer votre projet ?",
      "cta.subtitle": "Rejoignez plus de 50 000 clients satisfaits et obtenez votre financement rapidement.",
      "cta.button": "Faire une demande",
      "cta.button2": "Nous contacter",
      "cta.note": "Sans engagement • Réponse en 24h • 100% Sécurisé",

      /* Pays couverts */
      "countries.badge": "Zone de couverture",
      "countries.title": "Présents dans 9 pays européens",
      "countries.subtitle": "FINAVIA accompagne vos projets partout en Europe avec une expertise locale.",

      /* Footer */
      "footer.tagline": "Votre partenaire financier de confiance",
      "footer.links": "Liens rapides",
      "footer.services": "Nos services",
      "footer.legal": "Informations légales",
      "footer.newsletter": "Newsletter",
      "footer.newsletter.desc": "Recevez nos offres et actualités financières.",
      "footer.newsletter.placeholder": "Votre adresse email",
      "footer.newsletter.btn": "S'abonner",
      "footer.rights": "Tous droits réservés",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "Conditions générales",
      "footer.legal_notice": "Mentions légales",
      "footer.cookies": "Politique des cookies",

      /* Page Nos Prêts */
      "loans.hero.badge": "Nos solutions financières",
      "loans.hero.title": "Des prêts pour chaque projet",
      "loans.hero.subtitle": "Découvrez notre gamme complète de solutions de financement, conçues pour s'adapter à votre situation et vos ambitions.",
      "loan.personal.badge": "PRÊT PERSONNEL",
      "loan.personal.title": "Financez vos projets personnels",
      "loan.personal.desc": "Le prêt personnel FINAVIA vous permet de financer tous vos projets personnels sans justificatif d'utilisation. Vacances, mariage, équipement, études ou imprévus : nous vous accompagnons.",
      "loan.personal.f1": "Montant de 1 000 € à 75 000 €",
      "loan.personal.f2": "Durée de 12 à 84 mois",
      "loan.personal.f3": "TAEG à partir de 3,5%",
      "loan.personal.f4": "Sans justificatif d'utilisation",
      "loan.personal.f5": "Réponse en 24 heures",
      "loan.personal.cond.amount": "1 000 € – 75 000 €",
      "loan.personal.cond.duration": "12 – 84 mois",
      "loan.personal.cond.rate": "À partir de 3,5%",
      "loan.personal.cond.response": "24h ouvrées",
      "loan.auto.badge": "PRÊT AUTOMOBILE",
      "loan.auto.title": "Roulez vers votre prochain véhicule",
      "loan.auto.desc": "Que vous souhaitiez acquérir une voiture neuve, un véhicule d'occasion ou une moto, FINAVIA finance votre projet automobile avec des conditions avantageuses.",
      "loan.auto.f1": "Financement neuf et occasion",
      "loan.auto.f2": "Montant jusqu'à 80 000 €",
      "loan.auto.f3": "TAEG à partir de 2,9%",
      "loan.auto.f4": "Durée de 24 à 84 mois",
      "loan.auto.f5": "Décision rapide en 24h",
      "loan.auto.cond.amount": "5 000 € – 80 000 €",
      "loan.auto.cond.duration": "24 – 84 mois",
      "loan.auto.cond.rate": "À partir de 2,9%",
      "loan.auto.cond.response": "24h ouvrées",
      "loan.travaux.badge": "PRÊT TRAVAUX",
      "loan.travaux.title": "Transformez votre logement",
      "loan.travaux.desc": "Rénovation, extension, cuisine équipée, salle de bains, isolation énergétique... Le prêt travaux FINAVIA vous permet de transformer votre habitat sans puiser dans votre épargne.",
      "loan.travaux.f1": "Tous types de travaux acceptés",
      "loan.travaux.f2": "Montant jusqu'à 75 000 €",
      "loan.travaux.f3": "TAEG à partir de 3,2%",
      "loan.travaux.f4": "Durée jusqu'à 84 mois",
      "loan.travaux.f5": "Conseils personnalisés inclus",
      "loan.travaux.cond.amount": "3 000 € – 75 000 €",
      "loan.travaux.cond.duration": "12 – 84 mois",
      "loan.travaux.cond.rate": "À partir de 3,2%",
      "loan.travaux.cond.response": "24h ouvrées",
      "loan.immo.badge": "PRÊT IMMOBILIER",
      "loan.immo.title": "Devenez propriétaire avec FINAVIA",
      "loan.immo.desc": "Achat de résidence principale, investissement locatif, résidence secondaire... FINAVIA vous accompagne dans votre projet immobilier avec des taux attractifs et un suivi personnalisé.",
      "loan.immo.f1": "Financement jusqu'à 1 000 000 €",
      "loan.immo.f2": "Durée jusqu'à 25 ans",
      "loan.immo.f3": "TAEG à partir de 1,8%",
      "loan.immo.f4": "Assurance emprunteur incluse",
      "loan.immo.f5": "Conseiller dédié",
      "loan.immo.cond.amount": "50 000 € – 1 000 000 €",
      "loan.immo.cond.duration": "5 – 25 ans",
      "loan.immo.cond.rate": "À partir de 1,8%",
      "loan.immo.cond.response": "48h ouvrées",
      "loan.regroupement.badge": "REGROUPEMENT DE CRÉDITS",
      "loan.regroupement.title": "Simplifiez vos remboursements",
      "loan.regroupement.desc": "Vous avez plusieurs crédits en cours ? Le regroupement de crédits FINAVIA vous permet de les fusionner en un seul prêt, avec une mensualité unique et souvent réduite.",
      "loan.regroupement.f1": "Réduction de mensualité jusqu'à 40%",
      "loan.regroupement.f2": "Tous types de crédits regroupables",
      "loan.regroupement.f3": "TAEG à partir de 2,9%",
      "loan.regroupement.f4": "Durée adaptée à votre budget",
      "loan.regroupement.f5": "Étude gratuite et sans engagement",
      "loan.regroupement.cond.amount": "5 000 € – 150 000 €",
      "loan.regroupement.cond.duration": "12 – 120 mois",
      "loan.regroupement.cond.rate": "À partir de 2,9%",
      "loan.regroupement.cond.response": "24h ouvrées",

      /* Labels conditions communes */
      "loan.cond.amount": "Montant",
      "loan.cond.duration": "Durée",
      "loan.cond.rate": "TAEG",
      "loan.cond.response": "Délai de réponse",
      "loan.cta": "Faire une demande",
      "loan.simulate": "Simuler mon prêt",

      /* Comment ça marche (page complète) */
      "how.page.hero.badge": "Processus simplifié",
      "how.page.hero.title": "Comment fonctionne FINAVIA ?",
      "how.page.hero.subtitle": "Un processus entièrement digital, transparent et rapide pour obtenir votre financement en toute sérénité.",
      "how.page.step1.title": "1. Faites votre demande en ligne",
      "how.page.step1.desc": "Remplissez notre formulaire de demande en ligne en seulement 5 minutes. Aucun déplacement nécessaire, aucun rendez-vous en agence. Indiquez votre projet, le montant souhaité et votre situation personnelle.",
      "how.page.step1.d1": "Formulaire intuitif en 3 étapes",
      "how.page.step1.d2": "Téléchargement des documents sécurisé",
      "how.page.step1.d3": "Disponible 24h/24, 7j/7",
      "how.page.step2.title": "2. Analyse de votre dossier",
      "how.page.step2.desc": "Notre équipe d'experts financiers analyse votre dossier avec soin et réactivité. Nous étudions votre profil de manière globale pour trouver la meilleure solution de financement.",
      "how.page.step2.d1": "Analyse en moins de 24 heures ouvrées",
      "how.page.step2.d2": "Évaluation personnalisée et bienveillante",
      "how.page.step2.d3": "Possibilité de complément de dossier",
      "how.page.step3.title": "3. Proposition personnalisée",
      "how.page.step3.desc": "Si votre dossier est accepté, vous recevez une proposition de financement sur mesure, détaillant le taux, les mensualités et les conditions. Vous avez tout le temps nécessaire pour l'examiner.",
      "how.page.step3.d1": "Offre claire et détaillée par email",
      "how.page.step3.d2": "Délai de réflexion de 14 jours",
      "how.page.step3.d3": "Signature électronique sécurisée",
      "how.page.step4.title": "4. Déblocage des fonds",
      "how.page.step4.desc": "Après votre acceptation et la signature électronique du contrat, les fonds sont virés directement sur votre compte bancaire. Simple, rapide, efficace.",
      "how.page.step4.d1": "Virement sous 24 à 72 heures",
      "how.page.step4.d2": "Notification par email et SMS",
      "how.page.step4.d3": "Accès à votre espace client",

      /* À Propos */
      "about.hero.badge": "Notre histoire",
      "about.hero.title": "Qui est FINAVIA ?",
      "about.hero.subtitle": "Une FinTech européenne née de la conviction que le financement doit être accessible, transparent et humain.",
      "about.story.badge": "Notre histoire",
      "about.story.title": "Nés pour simplifier le financement",
      "about.story.p1": "FINAVIA a été fondée en 2009 par une équipe de professionnels de la finance qui partageaient une conviction forte : les services financiers doivent être accessibles à tous, sans complexité inutile.",
      "about.story.p2": "Depuis nos débuts à Paris, nous avons progressivement étendu nos activités à travers l'Europe, en ouvrant des bureaux en Espagne, en Allemagne, au Portugal, en Italie, en Suisse, en Belgique, à Monaco et au Luxembourg.",
      "about.story.p3": "Aujourd'hui, FINAVIA accompagne plus de 50 000 clients dans leurs projets financiers, avec une équipe de 200 collaborateurs passionnés par leur mission.",
      "about.mission.badge": "Notre mission",
      "about.mission.title": "Démocratiser l'accès au financement",
      "about.mission.text": "Notre mission est de rendre le financement accessible, transparent et humain pour tout individu ou famille qui souhaite réaliser ses projets de vie, quelle que soit sa situation.",
      "about.values.badge": "Nos valeurs",
      "about.values.title": "Ce qui nous guide chaque jour",
      "about.val1.title": "Transparence",
      "about.val1.desc": "Nous communiquons clairement sur tous nos frais, taux et conditions. Aucun frais caché, aucune surprise.",
      "about.val2.title": "Accessibilité",
      "about.val2.desc": "Nous croyons que chaque personne mérite d'accéder au financement pour réaliser ses projets.",
      "about.val3.title": "Bienveillance",
      "about.val3.desc": "Nous traitons chaque dossier avec attention et humanité, en cherchant toujours la meilleure solution.",
      "about.val4.title": "Innovation",
      "about.val4.desc": "Nous utilisons les dernières technologies pour offrir une expérience digitale fluide et sécurisée.",
      "about.val5.title": "Sécurité",
      "about.val5.desc": "La protection de vos données et de vos finances est au cœur de tout ce que nous faisons.",
      "about.val6.title": "Excellence",
      "about.val6.desc": "Nous nous engageons à offrir un service de la plus haute qualité, avec une expertise reconnue.",
      "about.team.badge": "Notre équipe",
      "about.team.title": "Les personnes derrière FINAVIA",
      "about.team.subtitle": "Une équipe multiculturelle et expérimentée, unie par la passion du service client.",
      "team.1.name": "Sophie Martin",
      "team.1.role": "CEO & Co-fondatrice",
      "team.1.bio": "15 ans d'expérience en finance d'entreprise et FinTech",
      "team.2.name": "Marc Leroy",
      "team.2.role": "Directeur des Opérations",
      "team.2.bio": "Expert en gestion des risques et conformité bancaire",
      "team.3.name": "Ana Fernandez",
      "team.3.role": "Directrice Commerciale Europe",
      "team.3.bio": "Spécialiste du développement commercial en zone EMEA",
      "team.4.name": "Thomas Berger",
      "team.4.role": "Directeur Technique",
      "team.4.bio": "Architecte de systèmes financiers et expert cybersécurité",

      /* Contact */
      "contact.hero.badge": "Contactez-nous",
      "contact.hero.title": "Nous sommes là pour vous",
      "contact.hero.subtitle": "Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.",
      "contact.info.title": "Nos coordonnées",
      "contact.info.desc": "N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.",
      "contact.phone.label": "Téléphone",
      "contact.phone.value": "+33 1 23 45 67 89",
      "contact.email.label": "Email",
      "contact.email.value": "contact@finavia.eu",
      "contact.address.label": "Siège social",
      "contact.address.value": "15 Avenue des Champs-Élysées, 75008 Paris, France",
      "contact.hours.label": "Horaires",
      "contact.hours.value": "Lundi – Vendredi : 9h00 – 18h00",
      "contact.form.title": "Envoyez-nous un message",
      "contact.form.subtitle": "Nous vous répondrons dans les meilleurs délais.",
      "contact.form.firstname": "Prénom",
      "contact.form.lastname": "Nom",
      "contact.form.email": "Adresse email",
      "contact.form.phone": "Téléphone",
      "contact.form.subject": "Sujet",
      "contact.form.message": "Votre message",
      "contact.form.submit": "Envoyer le message",
      "contact.form.success": "Message envoyé ! Nous vous répondrons sous 24 heures.",
      "contact.subject.general": "Question générale",
      "contact.subject.loan": "Demande de prêt",
      "contact.subject.status": "Suivi de dossier",
      "contact.subject.complaint": "Réclamation",
      "contact.subject.other": "Autre",
      "contact.map": "Carte interactive",
      "contact.map.sub": "À remplacer par une intégration Google Maps",

      /* Formulaire de demande */
      "form.hero.badge": "Demande de financement",
      "form.hero.title": "Faites votre demande de prêt",
      "form.hero.subtitle": "Complétez ce formulaire en quelques minutes. Votre demande sera traitée sous 24 heures.",
      "form.step1.title": "Vos informations personnelles",
      "form.step1.desc": "Ces informations nous permettent d'identifier votre dossier.",
      "form.step2.title": "Votre situation financière",
      "form.step2.desc": "Ces données sont nécessaires pour analyser votre capacité de remboursement.",
      "form.step3.title": "Votre projet de financement",
      "form.step3.desc": "Décrivez le projet que vous souhaitez financer.",
      "form.step4.title": "Récapitulatif et confirmation",
      "form.step4.desc": "Vérifiez vos informations avant de soumettre votre demande.",
      "form.progress.step1": "Identité",
      "form.progress.step2": "Finances",
      "form.progress.step3": "Projet",
      "form.progress.step4": "Confirmation",
      "form.field.firstname": "Prénom",
      "form.field.lastname": "Nom de famille",
      "form.field.email": "Adresse email",
      "form.field.phone": "Téléphone",
      "form.field.country": "Pays de résidence",
      "form.field.city": "Ville",
      "form.field.birthdate": "Date de naissance",
      "form.field.profession": "Profession",
      "form.field.income": "Revenus nets mensuels (€)",
      "form.field.charges": "Charges mensuelles (€)",
      "form.field.loanType": "Type de prêt souhaité",
      "form.field.amount": "Montant souhaité (€)",
      "form.field.duration": "Durée souhaitée (mois)",
      "form.field.description": "Description de votre projet",
      "form.field.consent": "J'accepte les conditions générales d'utilisation et la politique de confidentialité de FINAVIA.",
      "form.field.newsletter": "Je souhaite recevoir les offres et actualités de FINAVIA.",
      "form.ph.firstname": "Jean",
      "form.ph.lastname": "Dupont",
      "form.ph.email": "jean.dupont@email.com",
      "form.ph.phone": "+33 6 12 34 56 78",
      "form.ph.city": "Paris",
      "form.ph.income": "Ex : 3 000",
      "form.ph.charges": "Ex : 500",
      "form.ph.amount": "Ex : 15 000",
      "form.ph.duration": "Ex : 60",
      "form.ph.description": "Décrivez votre projet en quelques mots...",
      "form.btn.next": "Continuer",
      "form.btn.back": "Retour",
      "form.btn.submit": "Soumettre ma demande",
      "form.btn.submitting": "Envoi en cours...",
      "form.step.of": "Étape {current} sur {total}",
      "form.recap.identity": "Identité",
      "form.recap.financial": "Situation financière",
      "form.recap.project": "Projet",
      "form.success.title": "Demande envoyée avec succès !",
      "form.success.text": "Votre demande a bien été reçue. Notre équipe l'analysera et vous contactera sous 24 heures ouvrées.",
      "form.error.required": "Ce champ est obligatoire.",
      "form.error.email": "Adresse email invalide.",
      "form.error.phone": "Numéro de téléphone invalide.",
      "form.error.amount": "Veuillez entrer un montant valide.",
      "form.error.consent": "Vous devez accepter les conditions pour continuer.",
      "form.trust.secure": "Formulaire 100% sécurisé",
      "form.trust.no_commitment": "Sans engagement",
      "form.trust.fast": "Réponse en 24h",

      /* Profession options */
      "profession.employee": "Salarié(e)",
      "profession.civil": "Fonctionnaire",
      "profession.self": "Indépendant(e) / Auto-entrepreneur",
      "profession.manager": "Dirigeant(e) d'entreprise",
      "profession.retired": "Retraité(e)",
      "profession.student": "Étudiant(e)",
      "profession.other": "Autre",

      /* Loan type options */
      "loantype.personal": "Prêt Personnel",
      "loantype.auto": "Prêt Automobile",
      "loantype.travaux": "Prêt Travaux",
      "loantype.immo": "Prêt Immobilier",
      "loantype.regroupement": "Regroupement de Crédits",
      "loantype.other": "Autre",

      /* Country options */
      "country.fr": "France",
      "country.es": "Espagne",
      "country.de": "Allemagne",
      "country.pt": "Portugal",
      "country.it": "Italie",
      "country.ch": "Suisse",
      "country.be": "Belgique",
      "country.mc": "Monaco",
      "country.lu": "Luxembourg",

      /* 404 / Erreurs */
      "404.title": "Page introuvable",
      "404.text": "La page que vous cherchez n'existe pas ou a été déplacée.",
      "404.cta": "Retour à l'accueil",
    },

    /* ==========================================
       ESPAGNOL
       ========================================== */
    es: {
      "nav.home": "Inicio",
      "nav.loans": "Nuestros Préstamos",
      "nav.howItWorks": "Cómo funciona",
      "nav.about": "Sobre Nosotros",
      "nav.contact": "Contacto",
      "nav.apply": "Solicitar Préstamo",
      "hero.badge": "Su socio financiero de confianza en Europa",
      "hero.title": "Financie sus proyectos,",
      "hero.titleBold": "de forma simple y segura",
      "hero.subtitle": "FINAVIA le acompaña en todos sus proyectos con soluciones de financiación adaptadas a su situación y necesidades.",
      "hero.cta1": "Solicitar ahora",
      "hero.cta2": "Más información",
      "hero.trust1": "Respuesta en 24h",
      "hero.trust2": "100% Seguro",
      "hero.trust3": "Sin compromiso",
      "hero.card.badge": "Aprobado",
      "hero.card.amount": "25 000 €",
      "hero.card.label": "Préstamo personal aprobado",
      "hero.card.progress": "65% completado",
      "hero.card.stat1.value": "24h",
      "hero.card.stat1.label": "Plazo de respuesta",
      "hero.card.stat2.value": "3,9%",
      "hero.card.stat2.label": "TAE desde",
      "hero.float.title": "Expediente validado",
      "hero.float.text": "Hace 2 minutos",
      "hero.scroll": "DESCUBRIR",
      "stats.1.value": "50 000",
      "stats.1.suffix": "+",
      "stats.1.label": "Clientes satisfechos",
      "stats.2.value": "500",
      "stats.2.suffix": "M€+",
      "stats.2.label": "Financiados en Europa",
      "stats.3.value": "15",
      "stats.3.suffix": "+",
      "stats.3.label": "Años de experiencia",
      "stats.4.value": "94",
      "stats.4.suffix": "%",
      "stats.4.label": "Tasa de aprobación",
      "advantages.badge": "¿Por qué FINAVIA?",
      "advantages.title": "Ventajas que marcan la diferencia",
      "advantages.subtitle": "Hacemos todo lo posible para ofrecerle la mejor experiencia de financiación.",
      "adv.1.title": "Respuesta en 24 horas",
      "adv.1.desc": "Obtenga una decisión rápida sobre su solicitud. Nuestro equipo analiza su expediente en menos de 24 horas hábiles.",
      "adv.2.title": "Tasas competitivas",
      "adv.2.desc": "Benefíciese de las tasas de interés más ventajosas del mercado europeo, adaptadas a su perfil.",
      "adv.3.title": "100% Seguro",
      "adv.3.desc": "Sus datos personales y financieros están protegidos con los más altos estándares de seguridad.",
      "adv.4.title": "Asesores expertos",
      "adv.4.desc": "Un equipo de especialistas le acompaña durante todo el proceso, desde la solicitud hasta el desembolso.",
      "adv.5.title": "Sin compromiso",
      "adv.5.desc": "Solicite una simulación gratuita sin ningún compromiso. Es libre de aceptar o rechazar la oferta.",
      "adv.6.title": "9 países cubiertos",
      "adv.6.desc": "FINAVIA opera en 9 países europeos para acompañarle dondequiera que se encuentre.",
      "services.badge": "Nuestras soluciones",
      "services.title": "Préstamos adaptados a cada proyecto",
      "services.subtitle": "FINAVIA ofrece una gama completa de soluciones financieras para acompañar todos sus proyectos de vida.",
      "service.personal.tag": "Hasta 75 000 €",
      "service.personal.title": "Préstamo Personal",
      "service.personal.desc": "Financie sus proyectos personales con condiciones ventajosas. Vacaciones, boda, estudios... todo es posible.",
      "service.personal.cta": "Más información",
      "service.auto.tag": "Hasta 80 000 €",
      "service.auto.title": "Préstamo de Coche",
      "service.auto.desc": "Obtenga su vehículo nuevo o de ocasión rápidamente con nuestra financiación a medida.",
      "service.auto.cta": "Más información",
      "service.travaux.tag": "Hasta 75 000 €",
      "service.travaux.title": "Préstamo para Reformas",
      "service.travaux.desc": "Transforme su hogar con nuestra financiación dedicada a la renovación y mejora de su vivienda.",
      "service.travaux.cta": "Más información",
      "service.immo.tag": "Hasta 1 000 000 €",
      "service.immo.title": "Préstamo Hipotecario",
      "service.immo.desc": "Realice su proyecto inmobiliario con nuestro acompañamiento experto y nuestras tasas atractivas.",
      "service.immo.cta": "Más información",
      "service.regroupement.tag": "Hasta 150 000 €",
      "service.regroupement.title": "Reagrupación de Créditos",
      "service.regroupement.desc": "Simplifique la gestión de sus finanzas agrupando todos sus créditos en una sola cuota mensual reducida.",
      "service.regroupement.cta": "Más información",
      "service.other.tag": "Soluciones a medida",
      "service.other.title": "Otras Soluciones",
      "service.other.desc": "¿Tiene un proyecto especial? Nuestros asesores estudian todas las situaciones para encontrar la mejor solución.",
      "service.other.cta": "Contáctenos",
      "how.badge": "Nuestro proceso",
      "how.title": "Simple, rápido y transparente",
      "how.subtitle": "Hemos diseñado un proceso claro y eficiente para ofrecerle la mejor experiencia posible.",
      "how.step1.title": "Haga su solicitud",
      "how.step1.desc": "Complete nuestro formulario en línea en 5 minutos. Simple, intuitivo y sin papel.",
      "how.step2.title": "Análisis del expediente",
      "how.step2.desc": "Nuestro equipo analiza su expediente con cuidado en menos de 24 horas hábiles.",
      "how.step3.title": "Oferta personalizada",
      "how.step3.desc": "Reciba una oferta a medida adaptada a su situación y perfil.",
      "how.step4.title": "Desembolso de fondos",
      "how.step4.desc": "Tras la firma, los fondos se transfieren a su cuenta rápidamente.",
      "how.cta": "Ver el proceso completo",
      "testimonials.badge": "Testimonios",
      "testimonials.title": "Lo que dicen nuestros clientes",
      "testimonials.subtitle": "Miles de clientes confían en nosotros para sus proyectos financieros en toda Europa.",
      "testimonial.1.text": "Necesitaba financiación rápida para reformar mi casa. FINAVIA me ofreció una propuesta en 24h con excelentes condiciones. ¡Lo recomiendo totalmente!",
      "testimonial.1.name": "Marie Dupont",
      "testimonial.1.info": "París, Francia • Préstamo Reformas 35 000 €",
      "testimonial.2.text": "¡Servicio excepcional! Mi asesor me acompañó durante todo el proceso. Obtuve mi préstamo de coche en pocos días. Muy profesional.",
      "testimonial.2.name": "Carlos García",
      "testimonial.2.info": "Madrid, España • Préstamo Auto 22 000 €",
      "testimonial.3.text": "Reagrupación de créditos exitosa gracias a FINAVIA. Mi cuota mensual bajó un 35% y por fin puedo respirar económicamente. ¡Gracias a todo el equipo!",
      "testimonial.3.name": "Klaus Müller",
      "testimonial.3.info": "Berlín, Alemania • Reagrupación 80 000 €",
      "security.badge": "Seguridad y Confianza",
      "security.title": "Su seguridad, nuestra prioridad absoluta",
      "security.subtitle": "FINAVIA implementa los más altos estándares de seguridad para proteger sus datos personales y financieros.",
      "security.1.title": "Cifrado SSL",
      "security.1.desc": "Todos sus datos están cifrados con protocolo SSL de 256 bits, el mismo estándar utilizado por los grandes bancos.",
      "security.2.title": "Conforme al RGPD",
      "security.2.desc": "Sus datos se tratan de conformidad con el Reglamento General de Protección de Datos europeo.",
      "security.3.title": "Regulado y Autorizado",
      "security.3.desc": "FINAVIA está regulado y autorizado por las autoridades financieras competentes de cada país.",
      "security.4.title": "Cero Fraude",
      "security.4.desc": "Nunca solicitamos honorarios antes de conceder el préstamo. Nuestro modelo es 100% transparente.",
      "faq.badge": "Preguntas frecuentes",
      "faq.title": "¿Tiene preguntas?",
      "faq.subtitle": "Encuentre las respuestas a las preguntas más frecuentes de nuestros clientes.",
      "faq.q1": "¿Qué documentos se necesitan para solicitar un préstamo?",
      "faq.a1": "Para una solicitud de préstamo, necesitará su documento de identidad, sus 3 últimas nóminas o declaraciones de impuestos si es autónomo, sus 3 últimos extractos bancarios y un comprobante de domicilio reciente.",
      "faq.q2": "¿Cuál es el plazo de tramitación?",
      "faq.a2": "Nuestro equipo se compromete a analizar su expediente en menos de 24 horas hábiles. Una vez presentado el expediente completo, recibirá una decisión por correo electrónico. Los fondos pueden estar disponibles en 48-72 horas tras la firma.",
      "faq.q3": "¿Qué importes y plazos están disponibles?",
      "faq.a3": "Nuestros préstamos van de 1.000 € a 1.000.000 € según el tipo de proyecto. Los plazos varían de 12 a 84 meses para préstamos personales, y hasta 300 meses para hipotecas.",
      "faq.q4": "¿Es mi solicitud sin compromiso?",
      "faq.a4": "Absolutamente. Realizar una simulación o solicitud en FINAVIA no genera ninguna obligación. Usted es libre de aceptar o rechazar la oferta que se le proponga. No se cobra ninguna comisión antes de la aceptación definitiva.",
      "faq.q5": "¿Cómo se calculan las tasas de interés?",
      "faq.a5": "Las tasas se calculan en función de su perfil (ingresos, situación profesional, historial bancario), el importe solicitado y el plazo deseado. Nuestras TAE empiezan en el 1,8% para hipotecas y el 3,5% para préstamos personales.",
      "faq.q6": "¿Puedo amortizar mi préstamo anticipadamente?",
      "faq.a6": "Sí, el reembolso anticipado es posible en cualquier momento. Pueden aplicarse comisiones de amortización anticipada según la normativa vigente en su país.",
      "faq.q7": "¿Está FINAVIA disponible en mi país?",
      "faq.a7": "FINAVIA opera actualmente en Francia, España, Alemania, Portugal, Italia, Suiza, Bélgica, Mónaco y Luxemburgo.",
      "faq.q8": "¿Qué pasa si se rechaza mi solicitud?",
      "faq.a8": "En caso de denegación, le informaremos por email con los principales motivos. Nuestros asesores pueden contactarle para discutir alternativas adaptadas a su situación.",
      "cta.title": "¿Listo para financiar su proyecto?",
      "cta.subtitle": "Únase a más de 50.000 clientes satisfechos y obtenga su financiación rápidamente.",
      "cta.button": "Solicitar ahora",
      "cta.button2": "Contáctenos",
      "cta.note": "Sin compromiso • Respuesta en 24h • 100% Seguro",
      "countries.badge": "Zona de cobertura",
      "countries.title": "Presentes en 9 países europeos",
      "countries.subtitle": "FINAVIA acompaña sus proyectos en toda Europa con experiencia local.",
      "footer.tagline": "Su socio financiero de confianza",
      "footer.links": "Enlaces rápidos",
      "footer.services": "Nuestros servicios",
      "footer.legal": "Información legal",
      "footer.newsletter": "Newsletter",
      "footer.newsletter.desc": "Reciba nuestras ofertas y noticias financieras.",
      "footer.newsletter.placeholder": "Su dirección de email",
      "footer.newsletter.btn": "Suscribirse",
      "footer.rights": "Todos los derechos reservados",
      "footer.privacy": "Política de privacidad",
      "footer.terms": "Condiciones generales",
      "footer.legal_notice": "Aviso legal",
      "footer.cookies": "Política de cookies",
      "contact.form.firstname": "Nombre",
      "contact.form.lastname": "Apellido",
      "contact.form.email": "Correo electrónico",
      "contact.form.phone": "Teléfono",
      "contact.form.subject": "Asunto",
      "contact.form.message": "Su mensaje",
      "contact.form.submit": "Enviar mensaje",
      "form.btn.next": "Continuar",
      "form.btn.back": "Atrás",
      "form.btn.submit": "Enviar mi solicitud",
      "form.progress.step1": "Identidad",
      "form.progress.step2": "Finanzas",
      "form.progress.step3": "Proyecto",
      "form.progress.step4": "Confirmación",
    },

    /* ==========================================
       ALLEMAND
       ========================================== */
    de: {
      "nav.home": "Startseite",
      "nav.loans": "Kredite",
      "nav.howItWorks": "So funktioniert es",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "nav.apply": "Kredit beantragen",
      "hero.badge": "Ihr vertrauenswürdiger Finanzpartner in Europa",
      "hero.title": "Finanzieren Sie Ihre Projekte,",
      "hero.titleBold": "einfach und sicher",
      "hero.subtitle": "FINAVIA begleitet Sie bei all Ihren Projekten mit maßgeschneiderten Finanzierungslösungen für Ihre Situation.",
      "hero.cta1": "Jetzt beantragen",
      "hero.cta2": "Mehr erfahren",
      "hero.trust1": "Antwort in 24h",
      "hero.trust2": "100% Sicher",
      "hero.trust3": "Unverbindlich",
      "hero.card.badge": "Genehmigt",
      "hero.card.amount": "25 000 €",
      "hero.card.label": "Persönlicher Kredit genehmigt",
      "hero.card.progress": "65% abgeschlossen",
      "hero.card.stat1.value": "24h",
      "hero.card.stat1.label": "Bearbeitungszeit",
      "hero.card.stat2.value": "3,9%",
      "hero.card.stat2.label": "Effektivzins ab",
      "hero.float.title": "Antrag validiert",
      "hero.float.text": "Vor 2 Minuten",
      "hero.scroll": "ENTDECKEN",
      "stats.1.value": "50 000",
      "stats.1.suffix": "+",
      "stats.1.label": "Zufriedene Kunden",
      "stats.2.value": "500",
      "stats.2.suffix": "M€+",
      "stats.2.label": "Finanziert in Europa",
      "stats.3.value": "15",
      "stats.3.suffix": "+",
      "stats.3.label": "Jahre Erfahrung",
      "stats.4.value": "94",
      "stats.4.suffix": "%",
      "stats.4.label": "Genehmigungsrate",
      "advantages.badge": "Warum FINAVIA?",
      "advantages.title": "Vorteile, die den Unterschied machen",
      "advantages.subtitle": "Wir tun alles, um Ihnen die bestmögliche Finanzierungserfahrung zu bieten.",
      "adv.1.title": "Antwort in 24 Stunden",
      "adv.1.desc": "Erhalten Sie schnell eine Entscheidung zu Ihrem Antrag. Unser Team prüft Ihre Unterlagen in weniger als 24 Stunden.",
      "adv.2.title": "Wettbewerbsfähige Zinsen",
      "adv.2.desc": "Profitieren Sie von den vorteilhaftesten Zinssätzen des europäischen Markts, angepasst an Ihr Profil.",
      "adv.3.title": "100% Sicher",
      "adv.3.desc": "Ihre persönlichen und finanziellen Daten sind durch höchste Sicherheitsstandards geschützt.",
      "adv.4.title": "Experten-Berater",
      "adv.4.desc": "Ein Team von Spezialisten begleitet Sie durch den gesamten Prozess, von der Antragstellung bis zur Auszahlung.",
      "adv.5.title": "Unverbindlich",
      "adv.5.desc": "Fordern Sie kostenlos eine Simulation ohne Verpflichtung an. Sie können das Angebot frei annehmen oder ablehnen.",
      "adv.6.title": "9 Länder abgedeckt",
      "adv.6.desc": "FINAVIA ist in 9 europäischen Ländern tätig, um Sie überall zu begleiten.",
      "services.badge": "Unsere Lösungen",
      "services.title": "Kredite für jedes Projekt",
      "services.subtitle": "FINAVIA bietet ein umfassendes Angebot an Finanzierungslösungen für alle Ihre Lebensprojekte.",
      "service.personal.tag": "Bis zu 75 000 €",
      "service.personal.title": "Privatkredit",
      "service.personal.desc": "Finanzieren Sie Ihre persönlichen Projekte zu vorteilhaften Konditionen. Urlaub, Hochzeit, Studium... alles ist möglich.",
      "service.personal.cta": "Mehr erfahren",
      "service.auto.tag": "Bis zu 80 000 €",
      "service.auto.title": "Autokredit",
      "service.auto.desc": "Erhalten Sie Ihr Neu- oder Gebrauchtfahrzeug schnell mit unserer maßgeschneiderten Kfz-Finanzierung.",
      "service.auto.cta": "Mehr erfahren",
      "service.travaux.tag": "Bis zu 75 000 €",
      "service.travaux.title": "Renovierungskredit",
      "service.travaux.desc": "Verwandeln Sie Ihr Zuhause mit unserer speziellen Finanzierung für Renovierung und Modernisierung.",
      "service.travaux.cta": "Mehr erfahren",
      "service.immo.tag": "Bis zu 1 000 000 €",
      "service.immo.title": "Immobilienkredit",
      "service.immo.desc": "Realisieren Sie Ihr Immobilienprojekt mit unserer Expertenbegleitung und attraktiven Hypothekenzinsen.",
      "service.immo.cta": "Mehr erfahren",
      "service.regroupement.tag": "Bis zu 150 000 €",
      "service.regroupement.title": "Kreditumschuldung",
      "service.regroupement.desc": "Vereinfachen Sie Ihre Finanzen, indem Sie alle Kredite zu einer einzigen reduzierten Monatsrate zusammenfassen.",
      "service.regroupement.cta": "Mehr erfahren",
      "service.other.tag": "Maßgeschneiderte Lösungen",
      "service.other.title": "Weitere Lösungen",
      "service.other.desc": "Haben Sie ein besonderes Projekt? Unsere Berater prüfen alle Situationen, um die beste Lösung zu finden.",
      "service.other.cta": "Kontaktieren Sie uns",
      "how.badge": "Unser Prozess",
      "how.title": "Einfach, schnell und transparent",
      "how.subtitle": "Wir haben einen klaren und effizienten Prozess entwickelt, um Ihnen die bestmögliche Erfahrung zu bieten.",
      "how.step1.title": "Antrag stellen",
      "how.step1.desc": "Füllen Sie unser Online-Formular in 5 Minuten aus. Einfach, intuitiv und ohne Papierkram.",
      "how.step2.title": "Antragsanalyse",
      "how.step2.desc": "Unser Team analysiert Ihren Antrag sorgfältig in weniger als 24 Stunden.",
      "how.step3.title": "Personalisiertes Angebot",
      "how.step3.desc": "Erhalten Sie ein maßgeschneidertes Angebot, das Ihrer Situation entspricht.",
      "how.step4.title": "Auszahlung",
      "how.step4.desc": "Nach der Unterzeichnung werden die Mittel schnell auf Ihr Konto überwiesen.",
      "how.cta": "Den vollständigen Prozess ansehen",
      "testimonials.badge": "Erfahrungsberichte",
      "testimonials.title": "Was unsere Kunden sagen",
      "testimonials.subtitle": "Tausende von Kunden vertrauen uns für ihre Finanzprojekte in ganz Europa.",
      "testimonial.1.text": "Ich brauchte schnell eine Finanzierung für die Renovierung meines Hauses. FINAVIA hat mir in 24h ein Angebot mit hervorragenden Konditionen gemacht. Ich empfehle es wirklich!",
      "testimonial.1.name": "Marie Dupont",
      "testimonial.1.info": "Paris, Frankreich • Renovierungskredit 35 000 €",
      "testimonial.2.text": "Außergewöhnlicher Service! Mein Berater hat mich durch den gesamten Prozess begleitet. Ich erhielt meinen Autokredit in wenigen Tagen. Sehr professionell.",
      "testimonial.2.name": "Carlos García",
      "testimonial.2.info": "Madrid, Spanien • Autokredit 22 000 €",
      "testimonial.3.text": "Erfolgreiche Kreditumschuldung dank FINAVIA. Meine Monatsrate sank um 35% und ich kann endlich finanziell aufatmen. Danke an das gesamte Team!",
      "testimonial.3.name": "Klaus Müller",
      "testimonial.3.info": "Berlin, Deutschland • Umschuldung 80 000 €",
      "security.badge": "Sicherheit & Vertrauen",
      "security.title": "Ihre Sicherheit, unsere oberste Priorität",
      "security.subtitle": "FINAVIA implementiert die höchsten Sicherheitsstandards zum Schutz Ihrer persönlichen und finanziellen Daten.",
      "security.1.title": "SSL-Verschlüsselung",
      "security.1.desc": "Alle Ihre Daten werden mit 256-Bit-SSL-Protokoll verschlüsselt, demselben Standard wie bei großen Banken.",
      "security.2.title": "DSGVO-konform",
      "security.2.desc": "Ihre Daten werden gemäß der europäischen Datenschutz-Grundverordnung verarbeitet.",
      "security.3.title": "Reguliert & Zugelassen",
      "security.3.desc": "FINAVIA ist in jedem Land, in dem wir tätig sind, von den zuständigen Finanzaufsichtsbehörden reguliert.",
      "security.4.title": "Betrugsschutz",
      "security.4.desc": "Wir verlangen niemals Gebühren vor der Kreditgewährung. Unser Modell ist 100% transparent.",
      "faq.badge": "Häufige Fragen",
      "faq.title": "Haben Sie Fragen?",
      "faq.subtitle": "Finden Sie Antworten auf die häufigsten Fragen unserer Kunden.",
      "faq.q1": "Welche Dokumente werden für einen Kreditantrag benötigt?",
      "faq.a1": "Für einen Kreditantrag benötigen Sie Ihren Personalausweis oder Reisepass, Ihre letzten 3 Gehaltsabrechnungen oder Steuererklärungen bei Selbstständigen, Ihre letzten 3 Kontoauszüge und einen aktuellen Wohnsitznachweis.",
      "faq.q2": "Wie lang ist die Bearbeitungszeit?",
      "faq.a2": "Unser Team verpflichtet sich, Ihren Antrag in weniger als 24 Werktunden zu analysieren. Nach Einreichung Ihrer vollständigen Unterlagen erhalten Sie eine Grundsatzentscheidung per E-Mail. Bei Genehmigung können die Mittel 48-72 Stunden nach Unterzeichnung verfügbar sein.",
      "faq.q3": "Welche Beträge und Laufzeiten sind verfügbar?",
      "faq.a3": "Unsere Kredite reichen von 1.000 € bis 1.000.000 € je nach Projektart. Die Laufzeiten variieren von 12 bis 84 Monaten für Privatkredite und bis zu 300 Monaten für Immobilienkredite.",
      "faq.q4": "Ist mein Antrag unverbindlich?",
      "faq.a4": "Absolut. Eine Simulation oder ein Antrag bei FINAVIA begründet keinerlei Verpflichtung Ihrerseits. Sie können das Angebot frei annehmen oder ablehnen. Vor der endgültigen Annahme werden keine Gebühren erhoben.",
      "faq.q5": "Wie werden die Zinssätze berechnet?",
      "faq.a5": "Die Zinssätze werden auf der Grundlage Ihres Profils (Einkommen, Beschäftigungssituation, Bankhistorie), des beantragten Betrags und der gewünschten Laufzeit berechnet. Unsere effektiven Jahreszinsen beginnen bei 1,8% für Immobilienkredite.",
      "faq.q6": "Kann ich meinen Kredit vorzeitig zurückzahlen?",
      "faq.a6": "Ja, eine vorzeitige Rückzahlung ist jederzeit möglich. Vorfälligkeitsentschädigungen können gemäß den geltenden Vorschriften in Ihrem Land anfallen.",
      "faq.q7": "Ist FINAVIA in meinem Land verfügbar?",
      "faq.a7": "FINAVIA ist derzeit in Frankreich, Spanien, Deutschland, Portugal, Italien, der Schweiz, Belgien, Monaco und Luxemburg tätig.",
      "faq.q8": "Was passiert, wenn mein Antrag abgelehnt wird?",
      "faq.a8": "Bei einer Ablehnung werden Sie per E-Mail über die Hauptgründe informiert. Unsere Berater können sich mit Ihnen in Verbindung setzen, um auf Ihre Situation zugeschnittene Alternativen zu besprechen.",
      "cta.title": "Bereit, Ihr Projekt zu finanzieren?",
      "cta.subtitle": "Schließen Sie sich über 50.000 zufriedenen Kunden an und erhalten Sie schnell Ihre Finanzierung.",
      "cta.button": "Jetzt beantragen",
      "cta.button2": "Kontaktieren Sie uns",
      "cta.note": "Unverbindlich • Antwort in 24h • 100% Sicher",
      "countries.badge": "Abdeckungsgebiet",
      "countries.title": "In 9 europäischen Ländern vertreten",
      "countries.subtitle": "FINAVIA begleitet Ihre Projekte in ganz Europa mit lokaler Expertise.",
      "footer.tagline": "Ihr vertrauenswürdiger Finanzpartner",
      "footer.links": "Schnelllinks",
      "footer.services": "Unsere Dienste",
      "footer.legal": "Rechtliche Informationen",
      "footer.newsletter": "Newsletter",
      "footer.newsletter.desc": "Erhalten Sie unsere Angebote und Finanznachrichten.",
      "footer.newsletter.placeholder": "Ihre E-Mail-Adresse",
      "footer.newsletter.btn": "Abonnieren",
      "footer.rights": "Alle Rechte vorbehalten",
      "footer.privacy": "Datenschutzrichtlinie",
      "footer.terms": "Allgemeine Geschäftsbedingungen",
      "footer.legal_notice": "Impressum",
      "footer.cookies": "Cookie-Richtlinie",
      "contact.form.firstname": "Vorname",
      "contact.form.lastname": "Nachname",
      "contact.form.email": "E-Mail-Adresse",
      "contact.form.phone": "Telefon",
      "contact.form.subject": "Betreff",
      "contact.form.message": "Ihre Nachricht",
      "contact.form.submit": "Nachricht senden",
      "form.btn.next": "Weiter",
      "form.btn.back": "Zurück",
      "form.btn.submit": "Antrag einreichen",
      "form.progress.step1": "Identität",
      "form.progress.step2": "Finanzen",
      "form.progress.step3": "Projekt",
      "form.progress.step4": "Bestätigung",
    },

    /* ==========================================
       PORTUGAIS
       ========================================== */
    pt: {
      "nav.home": "Início",
      "nav.loans": "Os Nossos Empréstimos",
      "nav.howItWorks": "Como funciona",
      "nav.about": "Sobre Nós",
      "nav.contact": "Contacto",
      "nav.apply": "Pedir Empréstimo",
      "hero.badge": "O seu parceiro financeiro de confiança na Europa",
      "hero.title": "Finance os seus projetos,",
      "hero.titleBold": "de forma simples e segura",
      "hero.subtitle": "A FINAVIA acompanha-o em todos os seus projetos com soluções de financiamento adaptadas à sua situação e necessidades.",
      "hero.cta1": "Fazer um pedido",
      "hero.cta2": "Saber mais",
      "hero.trust1": "Resposta em 24h",
      "hero.trust2": "100% Seguro",
      "hero.trust3": "Sem compromisso",
      "hero.card.badge": "Aprovado",
      "hero.card.amount": "25 000 €",
      "hero.card.label": "Empréstimo pessoal aprovado",
      "hero.card.progress": "65% concluído",
      "hero.card.stat1.value": "24h",
      "hero.card.stat1.label": "Prazo de resposta",
      "hero.card.stat2.value": "3,9%",
      "hero.card.stat2.label": "TAEG a partir de",
      "hero.float.title": "Processo validado",
      "hero.float.text": "Há 2 minutos",
      "hero.scroll": "DESCOBRIR",
      "stats.1.value": "50 000",
      "stats.1.suffix": "+",
      "stats.1.label": "Clientes satisfeitos",
      "stats.2.value": "500",
      "stats.2.suffix": "M€+",
      "stats.2.label": "Financiados na Europa",
      "stats.3.value": "15",
      "stats.3.suffix": "+",
      "stats.3.label": "Anos de experiência",
      "stats.4.value": "94",
      "stats.4.suffix": "%",
      "stats.4.label": "Taxa de aprovação",
      "advantages.badge": "Porquê a FINAVIA?",
      "advantages.title": "Vantagens que fazem a diferença",
      "advantages.subtitle": "Fazemos tudo para lhe oferecer a melhor experiência de financiamento.",
      "adv.1.title": "Resposta em 24 horas",
      "adv.1.desc": "Obtenha uma decisão rápida sobre o seu pedido. A nossa equipa analisa o seu processo em menos de 24 horas úteis.",
      "adv.2.title": "Taxas competitivas",
      "adv.2.desc": "Beneficie das taxas de juro mais vantajosas do mercado europeu, adaptadas ao seu perfil.",
      "adv.3.title": "100% Seguro",
      "adv.3.desc": "Os seus dados pessoais e financeiros estão protegidos pelos mais altos padrões de segurança.",
      "adv.4.title": "Consultores especializados",
      "adv.4.desc": "Uma equipa de especialistas acompanha-o durante todo o processo.",
      "adv.5.title": "Sem compromisso",
      "adv.5.desc": "Solicite uma simulação gratuita sem qualquer compromisso. É livre de aceitar ou recusar a oferta.",
      "adv.6.title": "9 países cobertos",
      "adv.6.desc": "A FINAVIA opera em 9 países europeus para o acompanhar onde quer que esteja.",
      "services.badge": "As nossas soluções",
      "services.title": "Empréstimos adaptados a cada projeto",
      "services.subtitle": "A FINAVIA oferece uma gama completa de soluções financeiras para todos os seus projetos de vida.",
      "service.personal.tag": "Até 75 000 €",
      "service.personal.title": "Empréstimo Pessoal",
      "service.personal.desc": "Finance os seus projetos pessoais com condições vantajosas. Férias, casamento, estudos... tudo é possível.",
      "service.personal.cta": "Saber mais",
      "service.auto.tag": "Até 80 000 €",
      "service.auto.title": "Crédito Automóvel",
      "service.auto.desc": "Adquira o seu veículo novo ou usado rapidamente com o nosso financiamento automóvel personalizado.",
      "service.auto.cta": "Saber mais",
      "service.travaux.tag": "Até 75 000 €",
      "service.travaux.title": "Crédito Obras",
      "service.travaux.desc": "Transforme a sua habitação com o nosso financiamento dedicado à renovação e melhoria da sua casa.",
      "service.travaux.cta": "Saber mais",
      "service.immo.tag": "Até 1 000 000 €",
      "service.immo.title": "Crédito Habitação",
      "service.immo.desc": "Realize o seu projeto imobiliário com o nosso acompanhamento especializado e taxas atrativas.",
      "service.immo.cta": "Saber mais",
      "service.regroupement.tag": "Até 150 000 €",
      "service.regroupement.title": "Consolidação de Créditos",
      "service.regroupement.desc": "Simplifique as suas finanças agrupando todos os seus créditos numa só prestação mensal reduzida.",
      "service.regroupement.cta": "Saber mais",
      "service.other.tag": "Soluções à medida",
      "service.other.title": "Outras Soluções",
      "service.other.desc": "Tem um projeto especial? Os nossos consultores estudam todas as situações para encontrar a melhor solução.",
      "service.other.cta": "Contacte-nos",
      "how.badge": "O nosso processo",
      "how.title": "Simples, rápido e transparente",
      "how.subtitle": "Concebemos um processo claro e eficiente para lhe oferecer a melhor experiência possível.",
      "how.step1.title": "Faça o seu pedido",
      "how.step1.desc": "Preencha o nosso formulário online em 5 minutos. Simples, intuitivo e sem papel.",
      "how.step2.title": "Análise do processo",
      "how.step2.desc": "A nossa equipa analisa o seu processo com cuidado em menos de 24 horas úteis.",
      "how.step3.title": "Proposta personalizada",
      "how.step3.desc": "Receba uma oferta à medida adaptada à sua situação e perfil.",
      "how.step4.title": "Libertação de fundos",
      "how.step4.desc": "Após a assinatura, os fundos são transferidos para a sua conta rapidamente.",
      "how.cta": "Ver o processo completo",
      "testimonials.badge": "Testemunhos",
      "testimonials.title": "O que dizem os nossos clientes",
      "testimonials.subtitle": "Milhares de clientes confiam em nós para os seus projetos financeiros em toda a Europa.",
      "testimonial.1.text": "Precisava de financiamento rápido para renovar a minha casa. A FINAVIA propôs-me uma oferta em 24h com excelentes condições. Recomendo mesmo!",
      "testimonial.1.name": "Marie Dupont",
      "testimonial.1.info": "Paris, França • Crédito Obras 35 000 €",
      "testimonial.2.text": "Serviço excecional! O meu consultor acompanhou-me durante todo o processo. Obtive o meu crédito automóvel em poucos dias. Muito profissional.",
      "testimonial.2.name": "Carlos García",
      "testimonial.2.info": "Madrid, Espanha • Crédito Auto 22 000 €",
      "testimonial.3.text": "Consolidação de créditos bem-sucedida graças à FINAVIA. A minha prestação mensal baixou 35% e finalmente posso respirar financeiramente. Obrigado a toda a equipa!",
      "testimonial.3.name": "Klaus Müller",
      "testimonial.3.info": "Berlim, Alemanha • Consolidação 80 000 €",
      "security.badge": "Segurança e Confiança",
      "security.title": "A sua segurança, a nossa prioridade absoluta",
      "security.subtitle": "A FINAVIA implementa os mais altos padrões de segurança para proteger os seus dados pessoais e financeiros.",
      "security.1.title": "Encriptação SSL",
      "security.1.desc": "Todos os seus dados são encriptados com protocolo SSL de 256 bits.",
      "security.2.title": "Conforme ao RGPD",
      "security.2.desc": "Os seus dados são tratados em conformidade com o Regulamento Geral de Proteção de Dados europeu.",
      "security.3.title": "Regulado e Licenciado",
      "security.3.desc": "A FINAVIA é regulada e licenciada pelas autoridades financeiras competentes de cada país.",
      "security.4.title": "Zero Fraude",
      "security.4.desc": "Nunca solicitamos honorários antes da concessão do empréstimo. O nosso modelo é 100% transparente.",
      "faq.badge": "Perguntas frequentes",
      "faq.title": "Tem dúvidas?",
      "faq.subtitle": "Encontre as respostas às perguntas mais frequentes dos nossos clientes.",
      "faq.q1": "Que documentos são necessários para pedir um empréstimo?",
      "faq.a1": "Para um pedido de empréstimo, precisará do seu documento de identificação, dos seus últimos 3 recibos de vencimento, dos seus últimos 3 extratos bancários e de um comprovativo de morada recente.",
      "faq.q2": "Qual é o prazo de processamento?",
      "faq.a2": "A nossa equipa compromete-se a analisar o seu processo em menos de 24 horas úteis.",
      "faq.q3": "Que montantes e prazos estão disponíveis?",
      "faq.a3": "Os nossos empréstimos vão de 1.000 € a 1.000.000 € conforme o tipo de projeto.",
      "faq.q4": "O meu pedido é sem compromisso?",
      "faq.a4": "Absolutamente. Fazer uma simulação ou pedido na FINAVIA não gera qualquer obrigação da sua parte.",
      "faq.q5": "Como são calculadas as taxas de juro?",
      "faq.a5": "As taxas são calculadas em função do seu perfil, do montante solicitado e do prazo desejado. As nossas TAEG começam em 1,8% para crédito habitação.",
      "faq.q6": "Posso reembolsar antecipadamente?",
      "faq.a6": "Sim, o reembolso antecipado é possível a qualquer momento.",
      "faq.q7": "A FINAVIA está disponível no meu país?",
      "faq.a7": "A FINAVIA opera atualmente em França, Espanha, Alemanha, Portugal, Itália, Suíça, Bélgica, Mónaco e Luxemburgo.",
      "faq.q8": "O que acontece se o meu pedido for recusado?",
      "faq.a8": "Em caso de recusa, será informado por email com os principais motivos. Os nossos consultores podem contactá-lo para discutir alternativas.",
      "cta.title": "Pronto para financiar o seu projeto?",
      "cta.subtitle": "Junte-se a mais de 50.000 clientes satisfeitos e obtenha o seu financiamento rapidamente.",
      "cta.button": "Fazer um pedido",
      "cta.button2": "Contacte-nos",
      "cta.note": "Sem compromisso • Resposta em 24h • 100% Seguro",
      "countries.badge": "Zona de cobertura",
      "countries.title": "Presentes em 9 países europeus",
      "countries.subtitle": "A FINAVIA acompanha os seus projetos em toda a Europa com experiência local.",
      "footer.tagline": "O seu parceiro financeiro de confiança",
      "footer.links": "Links rápidos",
      "footer.services": "Os nossos serviços",
      "footer.legal": "Informações legais",
      "footer.newsletter": "Newsletter",
      "footer.newsletter.desc": "Receba as nossas ofertas e notícias financeiras.",
      "footer.newsletter.placeholder": "O seu endereço de email",
      "footer.newsletter.btn": "Subscrever",
      "footer.rights": "Todos os direitos reservados",
      "footer.privacy": "Política de privacidade",
      "footer.terms": "Termos e condições",
      "footer.legal_notice": "Aviso legal",
      "footer.cookies": "Política de cookies",
      "contact.form.firstname": "Nome",
      "contact.form.lastname": "Apelido",
      "contact.form.email": "Endereço de email",
      "contact.form.phone": "Telefone",
      "contact.form.subject": "Assunto",
      "contact.form.message": "A sua mensagem",
      "contact.form.submit": "Enviar mensagem",
      "form.btn.next": "Continuar",
      "form.btn.back": "Voltar",
      "form.btn.submit": "Submeter o meu pedido",
      "form.progress.step1": "Identidade",
      "form.progress.step2": "Finanças",
      "form.progress.step3": "Projeto",
      "form.progress.step4": "Confirmação",
    },

    /* ==========================================
       ITALIEN
       ========================================== */
    it: {
      "nav.home": "Home",
      "nav.loans": "I Nostri Prestiti",
      "nav.howItWorks": "Come funziona",
      "nav.about": "Chi siamo",
      "nav.contact": "Contatti",
      "nav.apply": "Richiedi un Prestito",
      "hero.badge": "Il vostro partner finanziario di fiducia in Europa",
      "hero.title": "Finanziate i vostri progetti,",
      "hero.titleBold": "in modo semplice e sicuro",
      "hero.subtitle": "FINAVIA vi accompagna in tutti i vostri progetti con soluzioni di finanziamento adattate alla vostra situazione e ai vostri bisogni.",
      "hero.cta1": "Fai una richiesta",
      "hero.cta2": "Scopri di più",
      "hero.trust1": "Risposta in 24h",
      "hero.trust2": "100% Sicuro",
      "hero.trust3": "Senza impegno",
      "hero.card.badge": "Approvato",
      "hero.card.amount": "25 000 €",
      "hero.card.label": "Prestito personale approvato",
      "hero.card.progress": "65% completato",
      "hero.card.stat1.value": "24h",
      "hero.card.stat1.label": "Tempi di risposta",
      "hero.card.stat2.value": "3,9%",
      "hero.card.stat2.label": "TAEG da",
      "hero.float.title": "Pratica validata",
      "hero.float.text": "2 minuti fa",
      "hero.scroll": "SCOPRIRE",
      "stats.1.value": "50 000",
      "stats.1.suffix": "+",
      "stats.1.label": "Clienti soddisfatti",
      "stats.2.value": "500",
      "stats.2.suffix": "M€+",
      "stats.2.label": "Finanziati in Europa",
      "stats.3.value": "15",
      "stats.3.suffix": "+",
      "stats.3.label": "Anni di esperienza",
      "stats.4.value": "94",
      "stats.4.suffix": "%",
      "stats.4.label": "Tasso di approvazione",
      "advantages.badge": "Perché FINAVIA?",
      "advantages.title": "Vantaggi che fanno la differenza",
      "advantages.subtitle": "Facciamo tutto il possibile per offrirvi la migliore esperienza di finanziamento.",
      "adv.1.title": "Risposta in 24 ore",
      "adv.1.desc": "Ottenete una decisione rapida sulla vostra richiesta. Il nostro team analizza il vostro dossier in meno di 24 ore lavorative.",
      "adv.2.title": "Tassi competitivi",
      "adv.2.desc": "Beneficiate dei tassi di interesse più vantaggiosi del mercato europeo, adattati al vostro profilo.",
      "adv.3.title": "100% Sicuro",
      "adv.3.desc": "I vostri dati personali e finanziari sono protetti dai più alti standard di sicurezza.",
      "adv.4.title": "Consulenti esperti",
      "adv.4.desc": "Un team di specialisti vi accompagna per tutto il processo, dalla richiesta all'erogazione.",
      "adv.5.title": "Senza impegno",
      "adv.5.desc": "Richiedete una simulazione gratuita senza alcun impegno. Siete liberi di accettare o rifiutare l'offerta.",
      "adv.6.title": "9 paesi coperti",
      "adv.6.desc": "FINAVIA opera in 9 paesi europei per accompagnarvi ovunque vi troviate.",
      "services.badge": "Le nostre soluzioni",
      "services.title": "Prestiti adattati a ogni progetto",
      "services.subtitle": "FINAVIA offre una gamma completa di soluzioni finanziarie per tutti i vostri progetti di vita.",
      "service.personal.tag": "Fino a 75 000 €",
      "service.personal.title": "Prestito Personale",
      "service.personal.desc": "Finanziate i vostri progetti personali con condizioni vantaggiose. Vacanze, matrimonio, studi... tutto è possibile.",
      "service.personal.cta": "Scopri di più",
      "service.auto.tag": "Fino a 80 000 €",
      "service.auto.title": "Prestito Auto",
      "service.auto.desc": "Ottenete il vostro veicolo nuovo o usato rapidamente con il nostro finanziamento auto su misura.",
      "service.auto.cta": "Scopri di più",
      "service.travaux.tag": "Fino a 75 000 €",
      "service.travaux.title": "Prestito Ristrutturazione",
      "service.travaux.desc": "Trasformate la vostra abitazione con il nostro finanziamento dedicato alla ristrutturazione e al miglioramento.",
      "service.travaux.cta": "Scopri di più",
      "service.immo.tag": "Fino a 1 000 000 €",
      "service.immo.title": "Mutuo Immobiliare",
      "service.immo.desc": "Realizzate il vostro progetto immobiliare con la nostra assistenza esperta e tassi attrattivi.",
      "service.immo.cta": "Scopri di più",
      "service.regroupement.tag": "Fino a 150 000 €",
      "service.regroupement.title": "Consolidamento Debiti",
      "service.regroupement.desc": "Semplificate la gestione delle vostre finanze raggruppando tutti i vostri crediti in un'unica rata mensile ridotta.",
      "service.regroupement.cta": "Scopri di più",
      "service.other.tag": "Soluzioni su misura",
      "service.other.title": "Altre Soluzioni",
      "service.other.desc": "Avete un progetto speciale? I nostri consulenti studiano tutte le situazioni per trovare la soluzione migliore.",
      "service.other.cta": "Contattateci",
      "how.badge": "Il nostro processo",
      "how.title": "Semplice, veloce e trasparente",
      "how.subtitle": "Abbiamo progettato un processo chiaro ed efficiente per offrirvi la migliore esperienza possibile.",
      "how.step1.title": "Fate la vostra richiesta",
      "how.step1.desc": "Compilate il nostro modulo online in 5 minuti. Semplice, intuitivo e senza carta.",
      "how.step2.title": "Analisi del dossier",
      "how.step2.desc": "Il nostro team analizza il vostro dossier con cura in meno di 24 ore lavorative.",
      "how.step3.title": "Proposta personalizzata",
      "how.step3.desc": "Ricevete un'offerta su misura adattata alla vostra situazione e al vostro profilo.",
      "how.step4.title": "Erogazione dei fondi",
      "how.step4.desc": "Dopo la firma, i fondi vengono accreditati sul vostro conto rapidamente.",
      "how.cta": "Vedere il processo completo",
      "testimonials.badge": "Testimonianze",
      "testimonials.title": "Cosa dicono i nostri clienti",
      "testimonials.subtitle": "Migliaia di clienti si fidano di noi per i loro progetti finanziari in tutta Europa.",
      "testimonial.1.text": "Avevo bisogno di un finanziamento rapido per ristrutturare la mia casa. FINAVIA mi ha proposto un'offerta in 24h con ottime condizioni. Lo raccomando davvero!",
      "testimonial.1.name": "Marie Dupont",
      "testimonial.1.info": "Parigi, Francia • Prestito Ristrutturazione 35 000 €",
      "testimonial.2.text": "Servizio eccezionale! Il mio consulente mi ha accompagnato durante tutto il processo. Ho ottenuto il mio prestito auto in pochi giorni. Molto professionale.",
      "testimonial.2.name": "Carlos García",
      "testimonial.2.info": "Madrid, Spagna • Prestito Auto 22 000 €",
      "testimonial.3.text": "Consolidamento debiti riuscito grazie a FINAVIA. La mia rata mensile è scesa del 35% e finalmente posso respirare finanziariamente. Grazie a tutto il team!",
      "testimonial.3.name": "Klaus Müller",
      "testimonial.3.info": "Berlino, Germania • Consolidamento 80 000 €",
      "security.badge": "Sicurezza e Fiducia",
      "security.title": "La vostra sicurezza, la nostra priorità assoluta",
      "security.subtitle": "FINAVIA implementa i più alti standard di sicurezza per proteggere i vostri dati personali e finanziari.",
      "security.1.title": "Crittografia SSL",
      "security.1.desc": "Tutti i vostri dati sono crittografati con protocollo SSL a 256 bit, lo stesso standard utilizzato dalle grandi banche.",
      "security.2.title": "Conforme al GDPR",
      "security.2.desc": "I vostri dati sono trattati in conformità con il Regolamento Generale sulla Protezione dei Dati europeo.",
      "security.3.title": "Regolamentato e Autorizzato",
      "security.3.desc": "FINAVIA è regolamentata e autorizzata dalle autorità finanziarie competenti di ogni paese in cui operiamo.",
      "security.4.title": "Zero Frodi",
      "security.4.desc": "Non chiediamo mai commissioni prima della concessione del prestito. Il nostro modello è 100% trasparente.",
      "faq.badge": "Domande frequenti",
      "faq.title": "Avete domande?",
      "faq.subtitle": "Trovate le risposte alle domande più frequenti dei nostri clienti.",
      "faq.q1": "Quali documenti sono necessari per richiedere un prestito?",
      "faq.a1": "Per una richiesta di prestito avrete bisogno del vostro documento d'identità, delle ultime 3 buste paga, degli ultimi 3 estratti conto bancari e di un giustificativo di residenza recente.",
      "faq.q2": "Qual è il tempo di elaborazione?",
      "faq.a2": "Il nostro team si impegna ad analizzare il vostro dossier in meno di 24 ore lavorative.",
      "faq.q3": "Quali importi e durate sono disponibili?",
      "faq.a3": "I nostri prestiti vanno da 1.000 € a 1.000.000 € a seconda del tipo di progetto.",
      "faq.q4": "La mia richiesta è senza impegno?",
      "faq.a4": "Assolutamente. Fare una simulazione o una richiesta su FINAVIA non comporta alcun obbligo da parte vostra.",
      "faq.q5": "Come vengono calcolati i tassi di interesse?",
      "faq.a5": "I tassi sono calcolati in base al vostro profilo, all'importo richiesto e alla durata desiderata. I nostri TAEG partono dall'1,8% per i mutui.",
      "faq.q6": "Posso rimborsare anticipatamente?",
      "faq.a6": "Sì, il rimborso anticipato è possibile in qualsiasi momento.",
      "faq.q7": "FINAVIA è disponibile nel mio paese?",
      "faq.a7": "FINAVIA opera attualmente in Francia, Spagna, Germania, Portogallo, Italia, Svizzera, Belgio, Monaco e Lussemburgo.",
      "faq.q8": "Cosa succede se la mia richiesta viene rifiutata?",
      "faq.a8": "In caso di rifiuto, verrete informati via email con i motivi principali. I nostri consulenti possono contattarvi per discutere alternative.",
      "cta.title": "Pronti a finanziare il vostro progetto?",
      "cta.subtitle": "Unitevi a oltre 50.000 clienti soddisfatti e ottenete il vostro finanziamento rapidamente.",
      "cta.button": "Fai una richiesta",
      "cta.button2": "Contattateci",
      "cta.note": "Senza impegno • Risposta in 24h • 100% Sicuro",
      "countries.badge": "Area di copertura",
      "countries.title": "Presenti in 9 paesi europei",
      "countries.subtitle": "FINAVIA accompagna i vostri progetti in tutta Europa con competenza locale.",
      "footer.tagline": "Il vostro partner finanziario di fiducia",
      "footer.links": "Link rapidi",
      "footer.services": "I nostri servizi",
      "footer.legal": "Informazioni legali",
      "footer.newsletter": "Newsletter",
      "footer.newsletter.desc": "Ricevete le nostre offerte e notizie finanziarie.",
      "footer.newsletter.placeholder": "Il vostro indirizzo email",
      "footer.newsletter.btn": "Iscriversi",
      "footer.rights": "Tutti i diritti riservati",
      "footer.privacy": "Informativa sulla privacy",
      "footer.terms": "Termini e condizioni",
      "footer.legal_notice": "Note legali",
      "footer.cookies": "Politica sui cookie",
      "contact.form.firstname": "Nome",
      "contact.form.lastname": "Cognome",
      "contact.form.email": "Indirizzo email",
      "contact.form.phone": "Telefono",
      "contact.form.subject": "Oggetto",
      "contact.form.message": "Il vostro messaggio",
      "contact.form.submit": "Invia messaggio",
      "form.btn.next": "Continua",
      "form.btn.back": "Indietro",
      "form.btn.submit": "Invia la mia richiesta",
      "form.progress.step1": "Identità",
      "form.progress.step2": "Finanze",
      "form.progress.step3": "Progetto",
      "form.progress.step4": "Conferma",
    }
  };

  // ============================================
  // ÉTAT COURANT
  // ============================================
  let currentLang = 'fr';
  const STORAGE_KEY = 'finavia_lang';

  // Données langue (flag + nom + code html lang)
  const langData = {
    fr: { flag: '🇫🇷', code: 'FR', name: 'Français',   htmlLang: 'fr' },
    es: { flag: '🇪🇸', code: 'ES', name: 'Español',    htmlLang: 'es' },
    de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch',    htmlLang: 'de' },
    pt: { flag: '🇵🇹', code: 'PT', name: 'Português',  htmlLang: 'pt' },
    it: { flag: '🇮🇹', code: 'IT', name: 'Italiano',   htmlLang: 'it' },
  };

  // ============================================
  // MÉTHODES PUBLIQUES
  // ============================================

  /**
   * Récupère une traduction par clé
   * Si la clé n'existe pas dans la langue courante,
   * cherche en français (fallback)
   */
  function t(key) {
    const langTrans = translations[currentLang];
    if (langTrans && langTrans[key] !== undefined) {
      return langTrans[key];
    }
    // Fallback sur français
    if (translations.fr && translations.fr[key] !== undefined) {
      return translations.fr[key];
    }
    // Retourne la clé si non trouvée
    return key;
  }

  /**
   * Change la langue et met à jour toute l'interface
   */
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* localStorage peut être bloqué */ }

    applyTranslations();
    updateUI();

    // Déclenche un événement personnalisé
    document.dispatchEvent(new CustomEvent('finavia:langchange', { detail: { lang } }));
  }

  /**
   * Applique toutes les traductions au DOM
   * Cherche les attributs data-i18n sur les éléments
   */
  function applyTranslations() {
    // Texte standard : data-i18n="clé"
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    });

    // Placeholders : data-i18n-placeholder="clé"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    // Aria-labels : data-i18n-aria="clé"
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // Titles : data-i18n-title="clé"
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.getAttribute('data-i18n-title'));
    });

    // Options select : data-i18n-option="clé"
    document.querySelectorAll('[data-i18n-option]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n-option'));
    });
  }

  /**
   * Met à jour les éléments d'interface liés à la langue
   * (switcher, attribut html lang, balise title)
   */
  function updateUI() {
    const data = langData[currentLang];
    if (!data) return;

    // Attribut lang sur <html>
    document.documentElement.lang = data.htmlLang;

    // Switcher desktop
    const flagEl = document.getElementById('currentFlag');
    const codeEl = document.getElementById('currentCode');
    if (flagEl) flagEl.textContent = data.flag;
    if (codeEl) codeEl.textContent = data.code;

    // Options du dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('selected', btn.getAttribute('data-lang') === currentLang);
    });

    // Boutons mobiles
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });

    // Direction RTL (pour les langues RTL - aucune ici mais préparé)
    document.body.dir = 'ltr';
  }

  /**
   * Initialise le système i18n
   * Détermine la langue depuis localStorage ou navigateur
   */
  function init() {
    // 1. Essaie depuis localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        currentLang = saved;
      }
    } catch (e) { /* ignoré */ }

    // 2. Si pas de préférence, essaie la langue navigateur
    if (!localStorage.getItem(STORAGE_KEY)) {
      const browserLang = (navigator.language || 'fr').split('-')[0].toLowerCase();
      if (translations[browserLang]) {
        currentLang = browserLang;
      }
    }

    // 3. Attache les événements sur le switcher de langue
    attachEvents();

    // 4. Applique les traductions
    applyTranslations();
    updateUI();
  }

  /**
   * Attache les événements click sur le sélecteur de langue
   */
  function attachEvents() {
    // Bouton principal du switcher
    const langBtn = document.getElementById('langCurrent');
    const switcher = document.getElementById('langSwitcher');

    if (langBtn && switcher) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        switcher.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', switcher.classList.contains('open'));
      });

      // Ferme le dropdown si clic ailleurs
      document.addEventListener('click', () => {
        switcher.classList.remove('open');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      });

      // Stop propagation sur le dropdown
      const dropdown = document.getElementById('langDropdown');
      if (dropdown) {
        dropdown.addEventListener('click', e => e.stopPropagation());
      }
    }

    // Options de langue (desktop)
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        if (switcher) switcher.classList.remove('open');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Boutons langue mobile
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  // Interface publique
  return {
    init,
    t,
    setLanguage,
    getCurrentLang: () => currentLang,
    getLangData: () => langData,
  };
})();

// Initialise au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}
