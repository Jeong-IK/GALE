import { travleStyle } from "src/styles/style";
import {useRegionselectorstore} from "src/stores/store";
import {AiOutlineRight} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import { Regiondata } from "src/types/type";


export const Regionselector = () => {
    const {isopen, selectedregion, selectedsubregion, setSelectedregion, setSelectedsubregion, setIsopen} = useRegionselectorstore();

    const handleRegionClick = (region: string) => {
      setSelectedregion(region);
  };

  const handleSubRegionClick = (subRegion: string) => {
      setSelectedsubregion(subRegion);
      setIsopen(false);
  };

    return (
      <>
      {isopen && (
        <div css={travleStyle.RegionSelector.div}>
          지역  선택
          <div css={{display:"flex", marginTop:"3rem"}}>
            <div style={{ flex: 1 }}>
              {Object.keys(Regiondata).map((region: string) => (
                <div key={region} css={travleStyle.RegionSelector.regioncontent(region === selectedregion)} onClick={() => handleRegionClick(region)} >
                  {region}
                  < AiOutlineRight/>
                </div>
              ))}
            </div>
              
            <div css={travleStyle.RegionSelector.subregionlist}>
              {selectedregion && Regiondata[selectedregion].map((subRegion) => (
                <div key={subRegion} css={travleStyle.RegionSelector.subregioncontent(subRegion === selectedsubregion)} onClick={() => handleSubRegionClick(subRegion)}>
                  <MdDone />
                  {subRegion}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </>
      );
}