// Importeren van de StrictMode van React voor ontwikkelingsomgevingen. 
// Het zorgt voor extra controles om potentiële problemen vroegtijdig te ontdekken.
import { StrictMode } from 'react'; 

// Importeren van de createRoot functie van react-dom voor het renderen van de applicatie in de DOM
import { createRoot } from 'react-dom/client'; 

// Importeren van de BrowserRouter van react-router-dom om routing-functionaliteit te bieden
import { BrowserRouter } from 'react-router-dom'; 

// Importeren van de hoofdcomponent van de applicatie
import App from './App.jsx';

// De root van de applicatie wordt ingesteld met de `createRoot` API van React 18
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode inschakelen voor betere foutcontrole tijdens de ontwikkeling */}
    <BrowserRouter> {/* BrowserRouter maakt gebruik van de HTML5 History API voor routing */}
      <App/> {/* De hoofdcomponent van de applicatie */}
    </BrowserRouter>
  </StrictMode>,
)
