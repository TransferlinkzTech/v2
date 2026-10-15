// Geometry of the routes drawn over the closing illustration. Everything is in
// the artwork's own pixels (2098 x 632), so the overlay scales with the image.
// The paths were traced from the dashed routes that used to be baked into the
// picture, then smoothed; the routes run in the direction of travel.

export const VIEW = { width: 2098, height: 632 };

export type Arc = {
  id: string;
  d: string;
  color: string;
  // When the route starts drawing and how long it takes, in seconds
  delay: number;
  duration: number;
};

export const ARCS: Arc[] = [
  // Pin to plane
  {
    id: "route-pin-plane",
    d: "M647 359 L684 334",
    color: "#0733d5",
    delay: 0,
    duration: 0.35,
  },
  // Plane to the orange marker
  {
    id: "route-plane-marker",
    d: "M886.0 307.6 L891.0 308.4 L896.0 309.4 L901.0 310.5 L906.0 311.7 L911.0 313.0 L916.0 314.4 L921.0 315.9 L926.0 317.5 L931.0 319.3 L936.0 321.1 L941.0 323.0 L946.0 325.0 L951.0 327.0 L956.0 329.2 L961.0 331.4 L966.0 333.8 L971.0 336.2 L976.0 338.6 L981.0 341.2 L986.0 343.8 L991.0 346.5 L996.0 349.2 L1001.0 352.0 L1006.0 354.8 L1011.0 357.7 L1016.0 360.7 L1021.0 363.7 L1026.0 366.7 L1031.0 369.8 L1036.0 373.0 L1041.0 376.1 L1046.0 379.4 L1051.0 382.6 L1056.0 385.9 L1061.0 389.2 L1066.0 392.5 L1071.0 395.8 L1076.0 399.2 L1081.0 402.6 L1086.0 406.0 L1091.0 409.4 L1096.0 412.8 L1101.0 416.2 L1106.0 419.6 L1111.0 423.0 L1116.0 426.4 L1121.0 429.8 L1126.0 433.2 L1131.0 436.6 L1136.0 440.0 L1141.0 443.4 L1146.0 446.7 L1151.0 450.0 L1156.0 453.3 L1161.0 456.6 L1166.0 459.8 L1175.0 465.6",
    color: "#0733d5",
    delay: 0.35,
    duration: 1.5,
  },
  // Orange marker to the far pin
  {
    id: "route-marker-pin",
    d: "M1222.0 474.4 L1227.0 473.7 L1232.0 472.8 L1237.0 472.0 L1242.0 471.0 L1247.0 470.0 L1252.0 469.0 L1257.0 467.9 L1262.0 466.7 L1267.0 465.5 L1272.0 464.3 L1277.0 463.0 L1282.0 461.7 L1287.0 460.3 L1292.0 458.9 L1297.0 457.5 L1302.0 456.1 L1307.0 454.6 L1312.0 453.1 L1317.0 451.6 L1322.0 450.1 L1327.0 448.6 L1332.0 447.1 L1337.0 445.6 L1342.0 444.0 L1347.0 442.5 L1352.0 440.9 L1357.0 439.4 L1362.0 437.9 L1367.0 436.3 L1372.0 434.8 L1377.0 433.3 L1382.0 431.8 L1387.0 430.4 L1392.0 428.9 L1397.0 427.5 L1402.0 426.0 L1407.0 424.7 L1412.0 423.3 L1417.0 421.9 L1422.0 420.6 L1427.0 419.3 L1432.0 418.1 L1437.0 416.9 L1442.0 415.7 L1447.0 414.5 L1452.0 413.4 L1457.0 412.3 L1462.0 411.3 L1467.0 410.3 L1472.0 409.3 L1477.0 408.4 L1482.0 407.5 L1487.0 406.7 L1492.0 405.9 L1497.0 405.1 L1502.0 404.4 L1507.0 403.8 L1512.0 403.2 L1517.0 402.6 L1522.0 402.1 L1527.0 401.6 L1532.0 401.2 L1537.0 400.9 L1542.0 400.5 L1547.0 400.3 L1552.0 400.0 L1557.0 399.9 L1562.0 399.8 L1567.0 399.7 L1572.0 399.7 L1577.0 399.7 L1582.0 399.8 L1587.0 399.9 L1592.0 400.1 L1597.0 400.3 L1602.0 400.6 L1607.0 401.0 L1612.0 401.3 L1617.0 401.8 L1622.0 402.2 L1627.0 402.7 L1632.0 403.3 L1637.0 403.9 L1642.0 404.6 L1647.0 405.3 L1652.0 406.0 L1657.0 406.8 L1662.0 407.6 L1667.0 408.5 L1672.0 409.3 L1677.0 410.3 L1682.0 411.3 L1687.0 412.3 L1692.0 413.3 L1697.0 414.4 L1702.0 415.5 L1707.0 416.6 L1712.0 417.7 L1717.0 418.9 L1722.0 420.1 L1727.0 421.4 L1732.0 422.6 L1737.0 423.9 L1742.0 425.2 L1747.0 426.5 L1752.0 427.8 L1757.0 429.1",
    color: "#e15012",
    delay: 1.85,
    duration: 1.9,
  },
];

export type Pin = {
  id: string;
  // Centre of the pin's round head
  x: number;
  y: number;
  color: string;
  // Seconds before its first pulse, timed to when a route reaches it
  delay: number;
};

export const PINS: Pin[] = [
  { id: "pin-start", x: 625.5, y: 363, color: "#0733d5", delay: 0.2 },
  { id: "pin-marker", x: 1195, y: 436, color: "#e15012", delay: 1.85 },
  { id: "pin-end", x: 1776, y: 395, color: "#0733d5", delay: 3.75 },
];

// Dash and gap lengths of the routes, and their line width
export const DASH = "26 11";
export const LINE_WIDTH = 3.4;
