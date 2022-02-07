import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

library.add(faAngleLeft, faChevronLeft, faChevronRight, faSearch, faFilm);
dom.watch();

export default FontAwesomeIcon;
