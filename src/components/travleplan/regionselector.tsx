import { travleStyle } from "src/styles/style";
import { AiTwotoneEnvironment } from "react-icons/ai";
import {useRegionselectorstore} from "src/stores/store";
import { Regiondata} from "src/types/type";

export const Regionselector = () => {
    const {isopen, selectedregion, selectedsubregion, setIsopen, setSelectedregion, setSelectedsubregion} = useRegionselectorstore();
  
    const handleRegionClick = (region: string) => {
        setSelectedregion(region);
    };
  
    const handleSubRegionClick = (subRegion: string) => {
        setSelectedsubregion(subRegion);
        setIsopen(false);
    };

    return (
      <div css={{position: "relative", display:"inline-flex"}}>
        <div css={[travleStyle.form.div, { alignItems: 'center',justifyContent:"space-between" }]}>
          <div 
            onClick={() => setIsopen(!isopen)} 
            css={travleStyle.form.input(selectedregion)}
          >
            { selectedsubregion ? `${selectedregion} ${selectedsubregion}` : "지역을 선택해주세요."}
          </div>
          <AiTwotoneEnvironment  css={travleStyle.form.iputemoge}/>
        </div>
      
          {isopen && (
            <div css={travleStyle.RegionSelector.div}>
              <div style={{ flex: 1 }}>
                {Object.keys(Regiondata).map((region: string) => (
                  <div key={region} onClick={() => handleRegionClick(region)}>
                    {region}
                  </div>
                ))}
              </div>
    
              <div style={{ flex: 1 }}>
                {selectedregion && Regiondata[selectedregion].map((subRegion) => (
                  <div key={subRegion} onClick={() => handleSubRegionClick(subRegion)}>
                    {subRegion}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
}