import React, { useRef, useState, useEffect } from 'react'
import { select, line, curveCardinal, axisLeft, scaleLinear } from 'd3'
import { useSelector, shallowEqual } from 'react-redux';
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);
    return dimensions;
};


const TestResultGraph = () => {
    const {
        tests
    } = useSelector(state => ({
        tests: state.user.tests
    }), shallowEqual);

    const svgRef = useRef();
    const svgWrapper = useRef();
    const dimensions = useResizeObserver(svgWrapper);

    useEffect(() => {
        const svg = select(svgRef.current);
        if (!dimensions) return;
        if (tests.length < 3) return;
        let lowest = Number.POSITIVE_INFINITY;
        let highest = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < tests.length; i++) {
            if (tests[i].wordsPerMin > highest) {
                highest = tests[i].wordsPerMin;
            } else if (tests[i].wordsPerMin < lowest) {
                lowest = tests[i].wordsPerMin;
            }
        }

        const diff = (highest - lowest) / 5

        const yScale = scaleLinear()
            .domain([lowest - diff, highest + diff])
            .range([dimensions.height, 0])


        const yAxis = axisLeft(yScale).ticks(4);
        svg
            .select(".y-axis")
            .call(yAxis)


        const myLine = line()
            .x((value, index) => index * (dimensions.width / (tests.length - 1)))
            .y(value => yScale(value.wordsPerMin))
            .curve(curveCardinal)

        svg
            .selectAll("path")
            .data([tests])
            .join("path")
            .attr("class", "line")
            .attr("d", value => myLine(value))
            .attr("fill", "none")

    }, [tests, dimensions])


    return (
        <div className="svg-wrapper" ref={svgWrapper}>
            <svg ref={svgRef} width="100%" height="100%">
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    )
}

export default TestResultGraph
