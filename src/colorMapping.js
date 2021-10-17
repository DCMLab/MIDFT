import * as d3 from 'd3';
import * as math from 'mathjs';

//Convert rgb values from [0,1] to [0,255]
const contToDiscRGB = d3
  .scaleQuantize()
  .domain([0, 1])
  .range(d3.range(0, 255, 1));

//Generate the color space using the color mapping suggested in the paper
export const gradient = (angle) => {
  let r, g, b;

  if (angle >= 0 && angle < math.pi / 3) {
    r = 1;
    g = (3 * angle) / math.pi;
    b = 0;
  } else if (angle >= math.pi / 3 && angle < (math.pi * 2) / 3) {
    r = 2 - (3 * angle) / math.pi;
    g = 1;
    b = 0;
  } else if (angle >= (math.pi * 2) / 3 && angle < math.pi) {
    r = 0;
    g = 1;
    b = (3 * angle) / math.pi - 2;
  } else if (angle >= math.pi && angle < (math.pi * 4) / 3) {
    r = 0;
    g = 4 - (3 * angle) / math.pi;
    b = 1;
  } else if (angle >= (math.pi * 4) / 3 && angle < (math.pi * 5) / 3) {
    r = (3 * angle) / math.pi - 4;
    g = 0;
    b = 1;
  } else if (angle >= (math.pi * 5) / 3 && angle < 2 * math.pi) {
    r = 1;
    g = 0;
    b = 6 - (3 * angle) / math.pi;
  }

  r = contToDiscRGB(r);
  g = contToDiscRGB(g);
  b = contToDiscRGB(b);

  return `rgb(${r}, ${g}, ${b})`;
};

//Generate the color space using the color mapping suggested in the paper
export const pixelColor = (x, y, distance) => {
  let r, g, b, a;
  //atan2 out in [-pi, pi]
  let angle = Math.atan2(y, x);
  angle = -angle;
  //we need it in [0, 2pi]
  if (angle < 0) angle += 2 * Math.PI;

  if (angle >= 0 && angle < math.pi / 3) {
    r = 1;
    g = (3 * angle) / math.pi;
    b = 0;
  } else if (angle >= math.pi / 3 && angle < (math.pi * 2) / 3) {
    r = 2 - (3 * angle) / math.pi;
    g = 1;
    b = 0;
  } else if (angle >= (math.pi * 2) / 3 && angle < math.pi) {
    r = 0;
    g = 1;
    b = (3 * angle) / math.pi - 2;
  } else if (angle >= math.pi && angle < (math.pi * 4) / 3) {
    r = 0;
    g = 4 - (3 * angle) / math.pi;
    b = 1;
  } else if (angle >= (math.pi * 4) / 3 && angle < (math.pi * 5) / 3) {
    r = (3 * angle) / math.pi - 4;
    g = 0;
    b = 1;
  } else if (angle >= (math.pi * 5) / 3 && angle < 2 * math.pi) {
    r = 1;
    g = 0;
    b = 6 - (3 * angle) / math.pi;
  }

  r = contToDiscRGB(r);
  g = contToDiscRGB(g);
  b = contToDiscRGB(b);
  a = contToDiscRGB(distance);

  return { r, g, b, a };
};

export function getRgbaFromComplex(complex) {
  let polarComplex = complex.toPolar();
  let angle = polarComplex.phi; // phi from [-pi, pi], but color mapping defined in [0,2pi]
  let mod = polarComplex.r;

  //negative angle mapped to their positive representation
  if (angle < 0) angle += 2 * math.pi;

  let ris = gradient(angle).slice(3, -1);

  return `rgba${ris}, ${mod})`;
}
