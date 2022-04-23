import AvailabilitiesList from "./Availabilities/AvailabilitiesList";
import CreateAvailability from "./Availabilities/CreateAvailability";
import {Index as BackMaterialIndex} from "./BackMaterial/Index";
import AllPhones from "./Phone/AllPhones";

function App() {
  return (
    <div className="ui container">
      <AvailabilitiesList />
      <CreateAvailability />
      <AllPhones />
      <BackMaterialIndex />
    </div>
  );
}

export default App;
