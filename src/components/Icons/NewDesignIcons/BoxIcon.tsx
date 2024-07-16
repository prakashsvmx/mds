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

const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.98487 0.906251C7.29362 0.728347 7.6437 0.634697 8.00005 0.634697C8.3564 0.634697 8.70648 0.728347 9.01522 0.906251C9.01572 0.906538 9.01622 0.906825 9.01672 0.907112L13.6834 3.57377C13.9922 3.75206 14.2487 4.00842 14.4271 4.31713C14.6056 4.62584 14.6997 4.97604 14.7 5.33261L14.7 10.6667C14.6997 11.0232 14.6056 11.3742 14.4271 11.6829C14.2487 11.9916 13.9922 12.2479 13.6834 12.4262L13.6807 12.4278L9.01672 15.0929C9.01621 15.0932 9.0157 15.0935 9.01518 15.0938C8.72225 15.2625 8.39211 15.3555 8.0547 15.3646C8.03667 15.366 8.01844 15.3667 8.00005 15.3667C7.98166 15.3667 7.96343 15.366 7.9454 15.3646C7.60799 15.3555 7.27784 15.2625 6.98491 15.0938C6.9844 15.0935 6.98389 15.0932 6.98338 15.0929L2.31942 12.4278L2.31672 12.4262C2.00792 12.2479 1.75143 11.9916 1.57299 11.6829C1.39454 11.3742 1.30041 11.024 1.30005 10.6674L1.30005 5.33333C1.30041 4.97676 1.39454 4.62584 1.57299 4.31713C1.75143 4.00842 2.00792 3.75206 2.31672 3.57378L2.31941 3.57222L6.98338 0.907112C6.98388 0.906825 6.98438 0.906538 6.98487 0.906251ZM8.70005 13.6614V8.40507L13.3 5.76139L13.3 10.6659C13.3 10.6657 13.3 10.6662 13.3 10.6659C13.2998 10.7768 13.2705 10.8863 13.215 10.9822C13.1597 11.078 13.0802 11.1576 12.9845 11.2131C12.9841 11.2133 12.9838 11.2136 12.9834 11.2138L8.70005 13.6614ZM12.5841 4.55809L8.31671 2.11955C8.22043 2.06397 8.11122 2.0347 8.00005 2.0347C7.88888 2.0347 7.77966 2.06396 7.68338 2.11955L7.68068 2.12111L3.41595 4.55809L8.00005 7.19263L12.5841 4.55809ZM7.30005 8.40507V13.6614L3.01672 11.2138C3.01633 11.2136 3.01595 11.2133 3.01557 11.2131C2.9199 11.1576 2.84042 11.078 2.78506 10.9822C2.72953 10.8862 2.70021 10.7772 2.70005 10.6662V5.76139L7.30005 8.40507Z"
      fill="currentColor"
    />
  </svg>
);
export default BoxIcon;