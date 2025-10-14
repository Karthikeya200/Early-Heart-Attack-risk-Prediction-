import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export const RiskGauge = ({ value = 42 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    const w = 380;
    const h = 200;
    const r = 150;
    
    el.innerHTML = '';
    
    const svg = d3.select(el)
      .append('svg')
      .attr('width', '100%')
      .attr('viewBox', `0 0 ${w} ${h}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');
    
    const arc = d3.arc()
      .innerRadius(r - 18)
      .outerRadius(r)
      .startAngle(-Math.PI / 1.2);
    
    const scale = d3.scaleLinear()
      .domain([0, 100])
      .range([-Math.PI / 1.2, Math.PI / 1.2]);
    
    // Get CSS custom properties
    const getColor = (varName) => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
    };
    
    const bands = [
      { threshold: 40, color: getColor('--risk-low') },
      { threshold: 70, color: getColor('--risk-med') },
      { threshold: 100, color: getColor('--risk-high') }
    ];
    
    // Draw background arcs
    const g = svg.append('g')
      .attr('transform', `translate(${w / 2},${h})`);
    
    let prevThreshold = 0;
    bands.forEach((band) => {
      g.append('path')
        .attr('d', arc
          .startAngle(scale(prevThreshold))
          .endAngle(scale(band.threshold))
        )
        .attr('fill', band.color)
        .attr('opacity', 0.25);
      prevThreshold = band.threshold;
    });
    
    // Draw needle
    const needleAngle = scale(value);
    const needleLength = r * 0.85;
    
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', Math.sin(needleAngle) * needleLength)
      .attr('y2', -Math.cos(needleAngle) * needleLength)
      .attr('stroke', '#111')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round')
      .style('transition', 'all 420ms cubic-bezier(0.2, 0.8, 0.2, 1)');
    
    // Draw center circle
    g.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 6)
      .attr('fill', '#111');
    
    // Draw value text
    svg.append('text')
      .attr('x', w / 2)
      .attr('y', h - 25)
      .attr('text-anchor', 'middle')
      .attr('class', 'font-[\'Space_Grotesk\',monospace] text-4xl font-semibold')
      .attr('fill', 'currentColor')
      .text(`${value}%`);
    
  }, [value]);

  return <div data-testid="risk-gauge" ref={ref} className="w-full" />;
};