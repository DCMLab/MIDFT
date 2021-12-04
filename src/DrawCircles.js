import * as d3 from 'd3';
import * as math from 'mathjs';
import { gradient } from './colorMapping';
//import { useEffect, useRef } from 'react';

//Minus before every y coordinate due to the fact that svg has positive y
//downward, meanwhile cartesian plane has positive y upward

export const DrawCircles = ({
  printablePitchClasses,
  traceData,
  userPcv,
  currentSubdiv,
  coeffNumber,
}) => {
  //Size and N number of subdivisions of the arches
  const width = 300;
  const height = width;
  const innerWidth = 0.9 * width;
  //const innerHeight = innerWidth;
  const N = 100;
  const K = 50;

  //console.log(traceData);

  /* const canvasRef = useRef(null);

   useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    //ctx.setTransform(1, 0, 0, -1, 0, ctx.canvas.height);

    let margins = [100, 100];
    let innerSize = [canvas.width - margins[0], canvas.height - margins[1]];
  }, []); */

  let traces = [];

  if (traceData.length > 0) {
    let tData = traceData[0];

    for (let j = 1; j < tData[0].length; j++) {
      let temp = [];
      for (let i = 0; i < tData.length; i++) {
        let roundedRe = Math.round(tData[i][j].re * 10000) / 10000;
        let roundedIm = Math.round(tData[i][j].im * 10000) / 10000;

        temp.push({ re: roundedRe, im: roundedIm });
      }
      traces.push(temp);
    }
  }

  const drawTrace = (traceDot, i, j) => {
    const dot = d3
      .arc()
      .innerRadius(0)
      .outerRadius(3)
      .startAngle(0)
      .endAngle(2 * math.pi);

    return (
      <path
        transform={`translate(${(traceDot.re * innerWidth) / 2},${
          -(traceDot.im * innerWidth) / 2
        })`}
        fill={'black'}
        key={`trace${i}.${j}`}
        d={dot()}
      ></path>
    );
  };

  console.log(currentSubdiv);

  /* const outerRadius = (0.9 * height) / 2;
  const innerRadius = (0.7 * height) / 2; */

  const theta = (2 * math.pi) / N;
  const angles = d3.range(0, 2 * math.pi, theta);
  const circularSectors = d3.range(0, 1, 1 / K);

  //Generates all the arches that compose the circle
  const arc = (angle, id, index, inner) => {
    const offset = -math.pi / 2;

    const d = d3
      .arc()
      .innerRadius((inner * innerWidth) / 2)
      .outerRadius(((inner + 1 / K) * innerWidth) / 2)
      .startAngle(-(angle + offset))
      .endAngle(-(angle + theta + offset));

    return (
      <path
        key={`${index}.${id}`}
        fill={gradient(angle)}
        fillOpacity={inner}
        stroke={gradient(angle)}
        strokeOpacity={inner / 10}
        d={d()}
        /* shapeRendering={'geometricPrecision'} */
      ></path>
    );
  };

  const circleMark = (pcvData, radiusScaleWidth, color) => {
    const mark = d3
      .arc()
      .innerRadius((radiusScaleWidth * width) / 2)
      .outerRadius(((radiusScaleWidth + 0.01) * width) / 2)
      .startAngle(0)
      .endAngle(2 * math.pi);

    return (
      <path
        transform={`translate(${(pcvData.x * innerWidth) / 2},${
          -(pcvData.y * innerWidth) / 2
        })`}
        fill={color}
        key={pcvData.id}
        d={mark()}
      ></path>
    );
  };

  const highlightSubdiv = (i) => {
    return (
      <path
        transform={`translate(${
          (traces[i][currentSubdiv].re * innerWidth) / 2
        },${-(traces[i][currentSubdiv].im * innerWidth) / 2})`}
        fill={'white'}
        key={`currentSubdiv${currentSubdiv}`}
        d={d3
          .arc()
          .innerRadius((0.03 * width) / 2)
          .outerRadius(((0.05 + 0.01) * width) / 2)
          .startAngle(0)
          .endAngle(2 * math.pi)()}
      ></path>
    );
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      key={`circle${coeffNumber}`}
      width={width}
      height={height}
    >
      <g transform={`translate(${width / 2},${height / 2})`}>
        {circularSectors.map((innerRadius) =>
          angles.map((angle, id) => arc(angle, id, coeffNumber, innerRadius))
        )}
      </g>
      {/* <canvas width={width} height={height} ref={canvasRef}></canvas> */}
      <g transform={`translate(${width / 2},${width / 2})`}>
        {printablePitchClasses.map((pc) => {
          if (pc.coeff.includes(coeffNumber + 1)) {
            return circleMark(pc, 0.05, 'grey');
          } else;
          return null;
        })}
      </g>
      <g transform={`translate(${width / 2},${width / 2})`}>
        {userPcv.map((pcv, k) => {
          return pcv.map((coeff, j) => {
            if (j > 0 && coeffNumber + 1 === j) {
              return circleMark(
                {
                  x: coeff.re,
                  y: coeff.im,
                  id: `userpcv${coeffNumber}.${k}.${j}`,
                },
                0.03,
                'navy'
              );
            } else return null;
          });
        })}
      </g>
      <g transform={`translate(${width / 2},${width / 2})`}>
        {traces.length > 1
          ? traces[coeffNumber].map((dot, j) => drawTrace(dot, coeffNumber, j))
          : null}
      </g>
      <g transform={`translate(${width / 2},${width / 2})`}>
        {traces.length > 1 ? highlightSubdiv(coeffNumber) : null}
      </g>
    </svg>
  );
};
