import {
  fantomPublicClient,
  sonicPublicClient,
  getChunkedNFTs,
  getNFTs,
  writeMd,
} from "./veNFT.mjs";

const RUN_FANTOM = false;
const RUN_SONIC = true;

// veEqual
if (RUN_FANTOM) {
  const veContractAddressFantom = "0x8313f3551c4d3984ffbadfb42f780d0c8763ce94";

  const fantomData = await getChunkedNFTs(
    fantomPublicClient,
    veContractAddressFantom
    500n,
    ["0xc424c343554afd6cd270887d4232765850f5e93f"] // this is the treasury migrated NFT address
  );

  writeMd(fantomData, "veEqual.md", "ftm");
}

if (RUN_SONIC) {
  const veContractAddressSonic = "0x3045119766352fF250b3d45312Bd0973CBF7235a";

  const sonicData = await getChunkedNFTs(
    sonicPublicClient,
    veContractAddressSonic,
    250n,
    []
  );

  writeMd(sonicData, "veEqualSonic.md", "sonic");
}
