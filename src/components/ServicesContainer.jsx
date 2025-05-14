const ServicesContainer = () => {
  return (
      // Hoofdcontainer voor de sectie met diensten
      <div className="w-full px-6 py-16">
          
          {/* Container voor de inhoud met een grens aan de boven- en onderkant */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-20 border-t border-b py-16">

              {/* Innovatie sectie */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                  
                  {/* Titel van de Innovatie sectie */}
                  <h2 className="text-3xl font-extrabold mb-8">Innovatie</h2>
                  
                  {/* Beschrijving van de Innovatie sectie */}
                  <p className="text-gray-700 mb-8 leading-relaxed">
                      Wij bieden AI-advies om organisaties in de gezondheidszorg te helpen
                      gegevens en AI te benutten voor innovatie en efficiëntie.
                  </p>
                  
                  {/* Lijst van diensten die verband houden met Innovatie */}
                  <ul className="list-disc list-inside md:list-outside pl-0 md:pl-5 space-y-6 text-gray-700">
                      <li>AI voor patiëntenervaring en -betrokkenheid.</li>
                      <li>Operationele efficiëntie via AI-gestuurde resourcetoewijzing.</li>
                      <li>AI-gestuurde fraudedetectie en revenu-cycle management.</li>
                  </ul>
              </div>

              {/* Gezondheids Analytics sectie */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                  
                  {/* Titel van de Gezondheids Analytics sectie */}
                  <h2 className="text-3xl font-extrabold mb-8">Gezondheids Analytics</h2>
                  
                  {/* Beschrijving van de Gezondheids Analytics sectie */}
                  <p className="text-gray-700 mb-8 leading-relaxed">
                      Wij leveren strategisch AI-advies aan organisaties in de gezondheidszorg,
                      waarbij de nadruk ligt op waarde-gebaseerde zorg, operationele transformatie en
                      klinische innovatie.
                  </p>
                  
                  {/* Lijst van diensten die verband houden met Gezondheids Analytics */}
                  <ul className="list-disc list-inside md:list-outside pl-0 md:pl-5 space-y-6 text-gray-700">
                      <li>AI voor klinische beslissingsondersteuning en gepersonaliseerde zorg.</li>
                      <li>Voorspellende analyses voor risicostratificatie van patiënten en populatiegezondheid.</li>
                      <li>AI-gebaseerde digitale transformatie en personeelsoptimalisatie.</li>
                  </ul>
              </div>

          </div>
      </div>
  );
};

export default ServicesContainer;
