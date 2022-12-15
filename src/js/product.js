import { placeABid } from './components/Api/placebid.js';
import { changeImageThumb } from './components/thumbnail.js';
import { hamburgerAnimation } from './components/hamburger.js';
import { ShowSpecificListing } from './components/Api/spesificprod.js';
import { showBiddersFunc } from './components/helpers/showbidders.js';
import { createEntryListing } from './components/Api/createlisting.js';
import { pageHelpers } from './components/helpers/helpers.js';

hamburgerAnimation();
placeABid();
changeImageThumb();
showBiddersFunc();
ShowSpecificListing();
pageHelpers();
createEntryListing();
