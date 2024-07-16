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

const Layers3Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.15671 0.816227C7.42146 0.695561 7.70903 0.633118 7.99998 0.633118C8.29096 0.633118 8.57855 0.69557 8.84331 0.816252L14.5669 3.42151C14.8075 3.52862 15.012 3.70297 15.1559 3.92363C15.3006 4.14565 15.3777 4.40498 15.3777 4.67002C15.3777 4.93507 15.3006 5.19439 15.1559 5.41642C15.012 5.63714 14.8073 5.81153 14.5667 5.91863L13.6433 6.33832L14.5599 6.75471C14.8006 6.86181 15.0053 7.03621 15.1492 7.25696C15.2939 7.47899 15.371 7.73831 15.371 8.00336C15.371 8.2684 15.2939 8.52773 15.1492 8.74975C15.0053 8.97048 14.8007 9.14487 14.56 9.25197L13.64 9.67014L14.56 10.0881C14.8007 10.1952 15.0053 10.3696 15.1492 10.5903C15.2939 10.8123 15.371 11.0716 15.371 11.3367C15.371 11.6017 15.2939 11.8611 15.1492 12.0831C15.0053 12.3038 14.8007 12.4782 14.56 12.5853L8.84207 15.1844C8.57855 15.3037 8.2926 15.3654 8.00332 15.3654C7.71404 15.3654 7.42809 15.3037 7.16457 15.1844L1.42217 12.5736C1.18738 12.4632 0.988883 12.2882 0.849826 12.0692C0.710769 11.8502 0.636925 11.5961 0.636925 11.3367C0.636925 11.0773 0.710769 10.8232 0.849826 10.6042C0.988883 10.3851 1.18741 10.2102 1.4222 10.0999L1.42894 10.0967L2.36491 9.66886L1.42217 9.24024C1.18738 9.12987 0.988883 8.95491 0.849826 8.73589C0.710769 8.51687 0.636925 8.26279 0.636925 8.00336C0.636925 7.74392 0.710769 7.48985 0.849826 7.27082C0.988883 7.0518 1.18741 6.87689 1.4222 6.76652L1.42894 6.76335L2.37048 6.33298L1.44626 5.9118C1.20575 5.80468 1.00127 5.63036 0.857442 5.40975C0.712689 5.18773 0.63562 4.9284 0.63562 4.66336C0.63562 4.39831 0.71269 4.13898 0.857442 3.91696C1.00131 3.69629 1.20586 3.52193 1.44645 3.41483L7.15671 0.816227ZM4.05679 7.10145L2.08406 8.00326L4.31269 9.01651C4.33329 9.02473 4.35351 9.03392 4.37327 9.04406L7.74207 10.5757C7.7419 10.5756 7.74224 10.5758 7.74207 10.5757C7.82401 10.6127 7.9134 10.6321 8.00332 10.6321C8.09317 10.6321 8.18199 10.613 8.26388 10.576C8.26365 10.5761 8.26411 10.5759 8.26388 10.576L11.5651 9.07545C11.6197 9.04088 11.6788 9.01406 11.7406 8.99568L13.9237 8.00336L11.9514 7.10739L8.85048 8.5169C8.8502 8.51702 8.85076 8.51677 8.85048 8.5169M11.5497 5.75214L8.27032 7.24277C8.18781 7.2804 8.09734 7.30026 8.00665 7.30026C7.91596 7.30026 7.82633 7.28078 7.74382 7.24315L2.08283 4.66337L7.73659 2.09048C7.8191 2.05285 7.90929 2.03312 7.99998 2.03312C8.09067 2.03312 8.18031 2.05259 8.26282 2.09023L13.9304 4.67L11.7583 5.65733C11.6842 5.67728 11.6137 5.70927 11.5497 5.75214ZM11.9481 10.4392L8.84207 11.851C8.57855 11.9704 8.2926 12.0321 8.00332 12.0321C7.71404 12.0321 7.42809 11.9704 7.16457 11.851L7.1636 11.8506L4.05318 10.4364L2.08406 11.3366L7.74207 13.909C7.7419 13.9089 7.74224 13.9091 7.74207 13.909C7.82401 13.946 7.9134 13.9654 8.00332 13.9654C8.09329 13.9654 8.18223 13.9462 8.26422 13.9092C8.2641 13.9092 8.26433 13.9091 8.26422 13.9092L13.9237 11.3367L11.9481 10.4392ZM4.05679 7.10145L7.16282 8.5169C7.16274 8.51686 7.16289 8.51693 7.16282 8.5169"
      fill="currentColor"
    />
  </svg>
);
export default Layers3Icon;