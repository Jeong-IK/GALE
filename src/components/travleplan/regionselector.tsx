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
        <div>
          <div 
            onClick={() => setIsopen(!isopen)} 
            style={{ width: 200, height: 50, border: '1px solid black' }}
          >
            {selectedsubregion || '지역 선택'}
          </div>
    
          {isopen && (
            <div style={{ width: 400, height: 200, border: '1px solid black', display: 'flex' }}>
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