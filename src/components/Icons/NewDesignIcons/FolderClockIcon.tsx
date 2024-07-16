// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const FolderClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.57746 2.77425C5.48397 2.72446 5.37948 2.69892 5.27356 2.69996L5.2667 2.70002L2.6667 2.69999C2.49872 2.69999 2.33763 2.76672 2.21886 2.88549C2.10009 3.00426 2.03336 3.16535 2.03336 3.33332V12C2.03336 12.168 2.10009 12.3291 2.21886 12.4478C2.33763 12.5666 2.49872 12.6333 2.6667 12.6333H4.66669C5.05329 12.6333 5.36669 12.9467 5.36669 13.3333C5.36669 13.7199 5.05329 14.0333 4.66669 14.0333H2.6667C2.12742 14.0333 1.61023 13.8191 1.22891 13.4378C0.847588 13.0564 0.633362 12.5393 0.633362 12V3.33332C0.633362 2.79405 0.847587 2.27686 1.22891 1.89554C1.61024 1.51422 2.12742 1.29999 2.6667 1.29999H5.26363C5.60239 1.2973 5.93648 1.3793 6.23553 1.53855C6.53439 1.69771 6.78875 1.92897 6.97556 2.21132L7.51801 3.01497C7.57568 3.10253 7.65415 3.17444 7.74645 3.22418C7.83872 3.27391 7.94188 3.29995 8.04669 3.29999C8.04666 3.29999 8.04673 3.29999 8.04669 3.29999H13.3334C13.8726 3.29999 14.3898 3.51422 14.7711 3.89554C15.1525 4.27686 15.3667 4.79405 15.3667 5.33332C15.3667 5.71992 15.0533 6.03332 14.6667 6.03332C14.2801 6.03332 13.9667 5.71992 13.9667 5.33332C13.9667 5.16535 13.9 5.00426 13.7812 4.88549C13.6624 4.76672 13.5013 4.69999 13.3334 4.69999H8.04669C7.71007 4.69994 7.3786 4.6163 7.08227 4.4566C6.78723 4.2976 6.53608 4.06814 6.35117 3.78866L5.80869 2.98498C5.75043 2.89651 5.67096 2.82404 5.57746 2.77425ZM10.6667 7.36666C8.84415 7.36666 7.36669 8.84412 7.36669 10.6667C7.36669 12.4892 8.84415 13.9667 10.6667 13.9667C12.4892 13.9667 13.9667 12.4892 13.9667 10.6667C13.9667 8.84412 12.4892 7.36666 10.6667 7.36666ZM5.96669 10.6667C5.96669 8.07092 8.07096 5.96666 10.6667 5.96666C13.2624 5.96666 15.3667 8.07092 15.3667 10.6667C15.3667 13.2624 13.2624 15.3667 10.6667 15.3667C8.07096 15.3667 5.96669 13.2624 5.96669 10.6667ZM10.6667 8.63332C11.0533 8.63332 11.3667 8.94672 11.3667 9.33332V10.3767L11.8283 10.8383C12.1017 11.1117 12.1017 11.5549 11.8283 11.8283C11.555 12.1017 11.1118 12.1017 10.8384 11.8283L10.1717 11.1616C10.0404 11.0304 9.96669 10.8523 9.96669 10.6667V9.33332C9.96669 8.94672 10.2801 8.63332 10.6667 8.63332Z"
      fill="currentColor"
    />
  </svg>
);
export default FolderClockIcon;