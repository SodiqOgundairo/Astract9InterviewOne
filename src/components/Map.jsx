import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = () => {
    const NigerianStates = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

  const states = [
    { name: "Abia", color: "#ff0000" },
    { name: "Adamawa", color: "#00ff00" },
    { name: "Akwa Ibom", color: "#0000ff" },
    { name: "Anambra", color: "#0000ff" },
    { name: "Bauchi", color: "#0000ff" },
    { name: "Bayelsa", color: "#0000ff" },
    { name: "Benue", color: "#0000ff" },
    { name: "Borno", color: "#0000ff" },
    { name: "Cross River", color: "#0000ff" },
    { name: "Delta", color: "#0000ff" },
    { name: "Ebonyi", color: "#ffffff" },
    { name: "Edo", color: "#0000ff" },
    { name: "Ekiti", color: "#0000ff" },
    { name: "Enugu", color: "#0000ff" },
    { name: "Gombe", color: "#0000ff" },
    { name: "Imo", color: "#0000ff" },
    { name: "Jigawa", color: "#0000ff" },
    { name: "Kaduna", color: "#0000ff" },
    { name: "Kano", color: "#0000ff" },
    { name: "Kastina", color: "#0000ff" },
    { name: "Kebbi", color: "#0000ff" },
    { name: "Kogi", color: "#0000ff" },
    { name: "Kwara", color: "#0000ff" },
    { name: "Lagos", color: "#0000ff" },
    { name: "Nasarawa", color: "#0000ff" },
    { name: "Niger", color: "#0000ff" },
    { name: "Ogun", color: "#0000ff" },
    { name: "Ondo", color: "#0000ff" },
    { name: "Osun", color: "#0000ff" },
    { name: "Oyo", color: "#0000ff" },
    { name: "Plateau", color: "#0000ff" },
    { name: "Rivers", color: "#0000ff" },
    { name: "Sokoto", color: "#0000ff" },
    { name: "Taraba", color: "#0000ff" },
    { name: "Yobe", color: "#0000ff" },
    { name: "Zamfara", color: "#0000ff" },
  ];
  return (
    <>
      <ComposableMap>
        <Geographies geography={NigerianStates} >
            {({ geographies }) => 
            geographies.map((geo) => {
                const state = states.find((s) => s.name === geo.properties.NAME_1)
                return (
                    <Geography 
                        key={geo.rsmKey}
                        geography={geo}
                        fill={state ? state.color : '#ffffff'}
                    />
                )
            })}

        </Geographies>
      </ComposableMap>
    </>
  );
};

export default Map;
