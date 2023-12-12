(function(window, undefined) {
  var dictionary = {
    "108f9eee-0b5f-4e70-99fc-e51d7184100b": "chefs des projets",
    "bfefd207-e8f0-4268-aeb4-97539588dfb0": "Bureau de travail-a",
    "57b03540-7917-46c9-95df-53da70e7de25": "ajouter-ligne-suivi",
    "ff1d152e-647f-4af1-8958-6387fb88914a": "Suivi",
    "e0bcffe7-e78c-466a-b4a1-6bee281fcb2a": "importer-planning-acceuil",
    "63151f2d-1ee8-4e7a-a45d-c78eeb2efb98": "modifierU",
    "6c85b7a9-ede5-4c52-b988-65d769e19086": "importer-suivi-acceuil",
    "442d08b3-8164-4d0b-83c7-e38964d9adc7": "chef-1-sup",
    "4e5528cd-84fe-4f8d-bba4-b44f4fba1e7b": "exporter-planning",
    "e5f83860-46d5-420f-a817-86e92c285689": "acceuil-U",
    "ddf1d301-2c19-4cf1-809f-56ad08bfc277": "suivi-1",
    "129e74d5-0b66-40aa-b7ac-a1727aa6f022": "acceuil-A",
    "890f41e5-0e6e-4d84-b989-52e9bc5d4596": "Création du compte",
    "262860fe-7e2c-432b-87c9-a9557c5786ef": "Plannings",
    "fb0c3370-a8b9-49d1-9135-0e68ab9f6f14": "telechargement_photo_profile",
    "5ab7e9c6-45ba-4061-b74e-65f8a294257d": "importer-planning",
    "6e4d8813-701d-4849-8572-1cac968f2893": "Planning-1",
    "76834e70-b7f7-4984-b604-0778385320c3": "ajouter-ligne-planning",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "connexion",
    "0bdcd149-7947-4506-a910-b249e25ad59d": "Bureau de travail",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);