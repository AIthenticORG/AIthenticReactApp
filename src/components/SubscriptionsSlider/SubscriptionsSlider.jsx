// Importeer de SubscriptionsSliderItems component die de daadwerkelijke abonnementen weergeeft
import SubscriptionsSliderItems from "./SubscriptionsSliderItems";

const SubscriptionsSlider = () => {
  return (
    // Container voor de slider, met responsieve marges en flexbox-indeling
    <div className="w-full mx-auto flex flex-col items-center justify-center mt-12 lg:mt-24 mb-12 lg:mb-24">

      {/* Titel die de gebruiker uitnodigt om de abonnementen te bekijken */}
      <h1 className="text-[#34949D] text-lg sm:text-xl md:text-2xl font-light text-center">
        Check out our current subscription plans
      </h1>

      {/* Hoofdtitel voor de abonnementen sectie */}
      <h1 className="text-[#0D5B58] text-xl sm:text-2xl md:text-4xl font-bold text-center mt-2">
        Check our subscriptions
      </h1>

      {/* Container voor de abonnements-slider, die het overlopende gedeelte verbergt */}
      <div className="w-full overflow-hidden mt-6">
        {/* Importeer en toon de daadwerkelijke abonnements-items */}
        <SubscriptionsSliderItems from={0} to="-100%" />
      </div>
    </div>
  );
};

export default SubscriptionsSlider;
