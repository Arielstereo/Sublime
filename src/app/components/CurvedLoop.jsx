import { useRef, useEffect, useState, useMemo, useId } from "react";

const CurvedLoop = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const uid = useId();
  // useId can return colons (e.g. ":r0:") which break SVG url(#...) references
  const pathId = `curve-${uid.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const pathY = 40;
  const curvePeak = pathY + curveAmount / 2;
  const viewBoxH = Math.max(70, Math.ceil(curvePeak + 30));
  const pathD = `M-100,${pathY} Q500,${pathY + curveAmount} 1540,${pathY}`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);
  const offsetRef = useRef(0);

  // Repeat generously so the path is always fully covered at any offset
  const totalText = spacing
    ? Array(Math.ceil(3200 / spacing) + 4)
        .fill(text)
        .join("")
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current)
      setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  // Initialize the marquee from the path start
  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    offsetRef.current = -spacing;
    textPathRef.current.setAttribute("startOffset", offsetRef.current + "px");
  }, [spacing]);

  // Keep the DOM attribute in sync after any re-render (e.g. parent autoplay),
  // without forcing a re-render per animation frame.
  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    textPathRef.current.setAttribute("startOffset", offsetRef.current + "px");
  });

  // Continuous loop driven directly on the DOM node
  useEffect(() => {
    if (!spacing || !ready) return;
    dirRef.current = direction;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(
          textPathRef.current.getAttribute("startOffset") || "0",
        );
        let newOffset = currentOffset + delta;
        const wrapPoint = spacing;
        if (newOffset < -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        offsetRef.current = newOffset;
        textPathRef.current.setAttribute("startOffset", newOffset + "px");
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready, direction]);

  const applyOffset = (value) => {
    if (!textPathRef.current) return;
    const wrapPoint = spacing;
    let newOffset = value;
    if (newOffset < -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    offsetRef.current = newOffset;
    textPathRef.current.setAttribute("startOffset", newOffset + "px");
  };

  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(
      textPathRef.current?.getAttribute("startOffset") || "0",
    );
    applyOffset(currentOffset + dx);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  return (
    <div
      className={`flex items-center justify-center w-full mt-16 ${
        interactive ? "cursor-grab active:cursor-grabbing" : ""
      }`}
      style={{ visibility: ready ? "visible" : "hidden" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block font-bold uppercase leading-none"
        style={{ aspectRatio: `1440 / ${viewBoxH}` }}
        viewBox={`0 0 1440 ${viewBoxH}`}
      >
        <text
          ref={measureRef}
          className={className}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={`fill-white ${className ?? ""}`}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset="0px"
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
