const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createImage = () => {
  const max = 1;
  const min = 10;
  const width = getRandom(min, max);
  const randomColor =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  return `<svg width="${width}px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> 
      <rect>
          <animate id="o1" begin="0;o1.end" dur="10s"
          attributeName="visibility" from="hide" to="hide"/>
      </rect>
      <circle cx="50" cy="75" r="20" fill="${randomColor}">
        <animate id="anim-up" begin="o1.begin" attributeType="XML" attributeName="cy" from="75" to="25"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-down" begin="anim-up.end + 0.1s" attributeType="XML" attributeName="cy" from="25" to="75"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-up-sm" begin="anim-down.end + 0.1s" attributeType="XML" attributeName="cy" from="75" to="45"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-down-sm" begin="anim-up-sm.end + 0.1s" attributeType="XML" attributeName="cy" from="45" to="75"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-up-xsm" begin="anim-down-sm.end + 0.1s" attributeType="XML" attributeName="cy" from="75" to="65"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate begin="anim-up-xsm.end + 0.1s" attributeType="XML" attributeName="cy" from="65" to="75"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-right" begin="0s" attributeType="XML" attributeName="cx" from="50" to="55"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-right-sm" begin="anim-right.end + 0.1s" attributeType="XML" attributeName="cx" from="55" to="60"
          dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-right-xsm" begin="anim-right-sm.end + 0.1s" attributeType="XML" attributeName="cx" from="60"           to="65" dur="1s" repeatCount="1" fill="freeze"/>
        <animate id="anim-right-xxsm" begin="anim-right-xsm.end + 0.1s" attributeType="XML" attributeName="cx" from="65"           to="70" dur="1s" repeatCount="1" fill="freeze"/>
        <animate begin="anim-right-xxsm.end + 0.1s" attributeType="XML" attributeName="cx" from="70" to="75"
          dur="1s" repeatCount="1" fill="freeze"/>
      </circle>
    </svg>`;
};

const toBase64 = (str) => Buffer.from(str).toString("base64");

const createNFTMetadata = (name, description) => {
  const image = createImage();
  const nftMetadata = {
    name,
    description,
    image: `data:image/svg+xml;base64,${toBase64(image)}`,
  };

  return `data:application/json;base64,${toBase64(
    JSON.stringify(nftMetadata)
  )}`;
};

module.exports = createNFTMetadata;

