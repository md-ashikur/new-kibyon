import React from "react";

const LegalPage = () => {
  return (
    <section className="lg:mx-20 mx-5 my-28 text-justify">
      <h1 className="text-center text-secondary lg:text-5xl text-3xl font-bold my-20">
        Conditions générales de vente
      </h1>
      {/* --------------article-1------------ */}
      <div>
        <h2 className="font-bold text-secondary lg:text-2xl my-5">
        Article 1 : dispositions générales
        </h2>
        <p>
          Les présentes Conditions Générales de Vente de prestations de
          services, ci-après dénommées CGV, constituent l’accord régissant
          pendant sa durée, les relations entre les consultants du cabinet
          Kibyon, ci-après dénommé le Prestataire et ses clients dans le cadre
          de la vente de prestations de services. A défaut de contrat conclu
          entre le prestataire et son client, les prestations effectuées sont
          soumises aux CGV décrites ci-après. Toute commande passée ainsi que
          tout contrat conclu avec l’un des consultants du cabinet Kibyon
          implique l’adhésion pleine et entière et sans réserve du client à ces
          CGV. Le fait que le prestataire ne mette pas en oeuvre l’une ou
          l’autre clause établie en sa faveur dans les présentes conditions, ne
          peut être interprété comme une renonciation de sa part à s’en
          prévaloir.
        </p>
      </div>

      {/* --------------article-2------------ */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 2 : Nature des prestations
        </h2>
        <p>
          Le cabinet de conseil en stratégie d’entreprise Kibyon accompagne les
          dirigeants et futur dirigeant sur l’ensemble des domaines relatifs à
          la gestion d’entreprise : commercial, marketing, gestion des
          ressources humaines, comptabilité et finance, production, logistique…
          Nous intervenons à tous les stades de vie de l’entreprise : de la
          création à la cession. Nous proposons des services tel que la
          conception de business plan, étude de marché, prévisionnel financier,
          diagnostic d’entreprise, gestion de crise…
        </p>
      </div>

      {/* --------------article-3------------ */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">Article 3 : prix</h2>
        <p>
          Les prix des services sont ceux détaillés dans les propositions
          commerciales ou contrats, acceptés par le client. Ils sont exprimés en
          euros. Les prix peuvent être calculés au forfait, à l’heure ou à la
          journée. Il est convenu entre les parties que le règlement par le
          client de la totalité des honoraires du prestataire vaut réception et
          acceptation définitive des prestations. En aucun cas le tarif de la
          prestation ne peut être renégocié après que la prestation soit
          réalisée. Le prestataire s'accorde le droit de modifier ses tarifs à
          tout moment. Toutefois, Kibyon s'engage à facturer ses services aux
          prix indiqués lors de la signature des contrats et selon les
          conditions indiquées dans ces derniers.
        </p>
      </div>

      {/* --------------article-4------------ */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 4 : proposition commerciale et contrat
        </h2>
        <p className="font-semibold mb-5">
          Toutes prestations interviennent à la suite de la demande du client et
          a la rédaction systématique d’un contrat par le prestataire détaillant
          :
        </p>
        <ul class="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5">
          <li>La nature de la prestation</li>
          <li>Les modalités de paiement</li>
          <li>Le prix de la prestation </li>
          <li>Le montant des rabais et ristournes éventuels</li>
          <li>La durée estimé pour la réalisation de la prestation</li>
          <li>
            Afin de confirmer définitivement la demande de prestation, le client
            devra retourner le contrat tel qu’il la reçu, signé.
          </li>
          <li>Une facture d’acompte sera dès lors transmise.</li>
          <li>
            Le prestataire pourra démarrer la prestation une fois la facture
            d’acompte réglée.
          </li>
        </ul>
        <p className="my-5">
          A default de la réception du contrat signé, du règlement de la facture
          d’acompte ou à la date d’expiration de la proposition commerciale
          (valable 1 mois), la proposition est considérée comme annulée. Le
          prestataire se réserve le droit de ne pas démarrer la prestation.
        </p>
        <p>
          En outre, La validation de la commande implique l’adhésion pleine et
          entière et sans réserve du client aux présentes CGV{" "}
        </p>
      </div>
      {/* ------------article-5----------- */}
      <div>
        <h2 className="font-bold text-secondary text-2xl my-5">Article 5 : Escompte</h2>
        <p className="">
          Aucun escompte ne sera consenti en cas de paiement anticipé.
        </p>
      </div>

      {/* ------------article-6----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 6 : Modalités paiement
        </h2>
        <p className="my-5">
          Le règlement des commandes s'effectue par virement bancaire
          uniquement.
        </p>
        <p>
          Les factures d’acomptes et de solde sont payable dès la réception et
          sous 30 jours y compris en cas d’absence du délai de règlement sur les
          factures en question. Sauf dispositions contraires convenues entre les
          parties dans un délais maximum de 45 jours fin de mois ou soixante
          jours à compter de la date d'émission de la facture.
        </p>
      </div>
      {/* ------------article-7----------- */}
      <div>
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 7 : retard de paiement
        </h2>
        <p className="mb-5">
          Tout retard de paiement entrainera le droit d’exigibilité immédiate de
          toute somme restant due, pour le prestataire de suspendre toute
          prestations en cours et toute nouvelle commande ou livraison.
        </p>
        <p className="mb-5">
          En cas de défaut de paiement total ou partiel des prestations livrées,
          l'acheteur doit verser au prestataire une pénalité de retard égale à
          trois fois le taux de l'intérêt légal.
        </p>
        <p className="mb-5">
          Le taux de l'intérêt légal retenu est celui en vigueur au jour de la
          livraison de la prestation.
        </p>
        <p>
          Cette pénalité est calculée sur le montant TTC de la somme restant
          due, et court à compter de deux jours suivant la date de règlement
          indiqué sur la facture et jusqu’à son paiement total sans qu'aucun
          rappel ou mise en demeure préalable ne soit nécessaire.
        </p>
        <p>
          En sus des indemnités de retard, toute somme, y compris l’acompte, non
          payée à sa date d’exigibilité produira de plein droit le paiement
          d’une indemnité égal au titre des frais de recouvrement.
        </p>
      </div>
      {/* ------------article-8----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 8 : Clause résolutoire
        </h2>
        <p className="">
          Si dans les quinze jours qui suivent la mise en œuvre de la clause
          "Retard de paiement", l'acheteur ne s'est pas acquitté des sommes
          restant dues, la vente sera résolue de plein droit et pourra ouvrir
          droit à l'allocation de dommages et intérêts au profit du prestataire
        </p>
      </div>
      {/* ------------article-9----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 9 : durée et résiliation
        </h2>
        <p className="my-5">
          La durée des prestations est définie dans la proposition commerciale
          ou le contrat. Chacune des parties pourra résilier immédiatement le
          contrat en cas de cessation d’activité de l’une des parties, cessation
          de paiement, redressement judiciaire, liquidation judiciaire ou toute
          autre situation produisant les mêmes effets après l’envoi d’une mise
          en demeure adressée à l’administrateur judiciaire (ou liquidateur)
          restée plus d’un mois sans réponse, conformément aux dispositions
          légales en vigueur.
        </p>
        <p className="font-semibold my-5">
          En cas d’arrivée du terme ou de la résiliation du contrat :
        </p>
        <ul class="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5 mb-5">
          <li>
            Le contrat de prestation de service cessera automatiquement à la
            date correspondante,
          </li>
          <li>
            Le prestataire se trouve dégagé de ses obligations relatives à
            l’objet du présent contrat à la date de résiliation ou d’expiration
            du contrat,
          </li>
        </ul>
        <p>
          En cas de résiliation de l’accord par le client, seront dues par le
          client les sommes correspondant aux prestations réalisées jusqu’à la
          date de prise d’effet de la résiliation et non encore payées. Pour
          toute prestation, l'arrêt de la prestation à l'initiative du client
          entrainera une facturation de 90 % du montant du solde de la
          prestation engagée et validée le contrat.
        </p>
      </div>
      {/* ------------article-10----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 10 : Force majeure
        </h2>
        <p className="my-5">
          La responsabilité du prestataire ne pourra pas être mise en œuvre si
          la non-exécution ou le retard dans l'exécution de l'une de ses
          obligations décrites dans les présentes conditions générales de vente
          découle d'un cas de force majeure. À ce titre, la force majeure
          s'entend de tout événement extérieur, imprévisible et irrésistible au
          sens de l'article 1148 du Code civil, indépendant de sa volonté et qui
          échappe à son contrôle, tels que notamment, à titre indicatif et non
          limitatif : catastrophes naturelles, restrictions gouvernementales,
          troubles sociaux et émeutes, guerres, malveillance, sinistres dans les
          locaux du prestataire, les interruptions de service EDF supérieure à 2
          jours, défaillance du matériel informatique, absence longue durée
          (accident ou maladie).
        </p>
      </div>
      {/* ------------article-11----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5 text-left ">
        Article 11 : obligation et responsabilités
        </h2>
        <p className="my-5 font-semibold">Le prestataire s’engage à :</p>
        <ul class="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5 mb-5">
          <li>
            Respecter la plus stricte confidentialité concernant les
            informations fournies par le client, et désignées comme telles,
          </li>
          <li>
            Ne divulguer aucune information sur les prestations de services
            réalisés pour ses clients,
          </li>
          <li>Signer un accord de confidentialité si le client le souhaite.</li>
          <li>
            Réaliser les prestations conformément aux règles de l’art et de la
            meilleure manière, aux termes et conditions de l’accord, ainsi que
            dans le respect des dispositions légales et réglementaires
            applicables.
          </li>
        </ul>
        <p className="my-5">
          Les clauses du contrat signé entre les parties sont réputées
          confidentielles, et à ce titre ne peuvent être communiquées à des
          tiers non autorisés.
        </p>
        <p className="font-semibold my-5">Le client s’engage à : </p>
        <ul class="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5 mb-5">
          <li>
            Respecter les dates et heures des rendez-vous fixés pour le bon
            déroulement de la prestation
          </li>
          <li>
            Tout mettre en œuvre pour replanifier dans un délai conforme au bon
            déroulement du dispositif les actions annulées
          </li>
          <li>
            Mettre en œuvre tous les moyens nécessaires au bon déroulement de la
            mission
          </li>
          <li>
            Se rendre disponible autant que nécessaire au bon déroulement de la
            mission
          </li>
          <li>
            Mettre à disposition du prestataire dans les délais convenus,
            l’ensemble des informations et documents indispensables à la bonne
            réalisation de la prestation ainsi qu’à la bonne compréhension des
            problèmes posés.
          </li>
          <li>Régler toute prestation due à réception de facture</li>
        </ul>

        <p className="font-semibold my-5">
          La responsabilité du prestataire ne pourra pas être engagée pour :
        </p>
        <ul class="marker:text-black list-disc pl-5 lg:space-y-3 space-y-1 mx-5 mb-5">
          <li>
            Une erreur engendrée par un manque d’information ou des informations
            erronées remises par le client.
          </li>
          <li>
            Un retard occasionné par le client qui entrainerait l’impossibilité
            de respecter les délais convenus
          </li>
          <li>
            Chacune des parties est responsable envers l’autre de tout
            manquement aux obligations mises à sa charge.
          </li>
        </ul>
      </div>
      {/* ------------article-12----------- */}
      <div className="my-10">
        <h2 className="font-bold text-secondary text-2xl my-5">
        Article 12 : Tribunal compétent
        </h2>
        <p className="my-5">
          Tout litige relatif à l'interprétation et à l'exécution des présentes
          conditions générales de vente et du contrat signé entre les parties
          sont soumis au droit français.
        </p>
        <p>
          À défaut de résolution amiable, le litige sera porté devant le
          Tribunal de commerce choisi par le prestataire Kibyon.
        </p>
      </div>


      <div className="text-center my-20">
        <h2 className="font-bold text-secondary text-2xl my-5 text-center">Mentions légales</h2>
        <p>Kibyon (E.I) détenu par Geoffrey THUILLIER, 71 route de la prieurée, 45110 Germigny-des-prés.</p>
        <p className="font-semibold">N° Siren : 912 667 995</p>
        <p className="font-semibold">contact@kibyon.fr</p>
        <p><span className="font-semibold">Hebergeur :</span> HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre. fr@hostinger.com</p>
      </div>
      
    </section>
  );
};

export default LegalPage;
