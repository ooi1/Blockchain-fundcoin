import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa5096E3Cfd7cDcD5EC1e161f7dFf1116BCFec945',
);

export default instance;
