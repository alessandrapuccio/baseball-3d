import { Text } from "@react-three/drei";

function Clock() {
  const clockRadius = 0.133;
  const numberSize = 0.013;

  // Numbers 1–12
  const numbers = [];
  for (let i = 1; i <= 12; i++) {
    const angle = (90 - i * 30) * (Math.PI / 180);
    const x = Math.cos(angle) * clockRadius * 0.85;
    const y = Math.sin(angle) * clockRadius * 0.85;

    numbers.push(
      <Text
        key={`num-${i}`}
        position={[x, y+.0085, 0.001]} // small z to avoid z-fighting
        fontSize={numberSize}
        color="#ffffffff"
        anchorX="center"
        anchorY="center"
      >
        {i}  
      </Text>
    );
  }

  // Ticks: 60 total, hour ticks every 5
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const angle = (90 - i * 6) * (Math.PI / 180); // 6° per tick, 12 at top
    const isHour = i % 5 === 0;

    const outerR = clockRadius * 0.985;                  // near the ring
    const innerR = isHour
      ? outerR - clockRadius * 0.06                       // longer hour tick
      : outerR - clockRadius * 0.03;                      // shorter minute tick

    const midR = (outerR + innerR) / 2;
    const tickLength = outerR - innerR;                   // exactly spans gap
    const tickThickness = isHour ? clockRadius * 0.01 : clockRadius * 0.005;

    const x = Math.cos(angle) * midR;
    const y = Math.sin(angle) * midR;

    // Rotate so the tick's long (Y) axis points radially
    const rotZ = angle - Math.PI / 2;

    ticks.push(
      <mesh key={`tick-${i}`} position={[x, y, 0]} rotation={[0, 0, rotZ]}>
        <boxGeometry args={[tickThickness, tickLength, 0.001]} />
        <meshBasicMaterial color="#ffffffff" />
      </mesh>
    );
  }

  return (
    <group>
      {/* Clock circle outline */}
      <mesh>
        <ringGeometry args={[clockRadius * 0.985, clockRadius, 64]} />
        <meshBasicMaterial color="#ffffffff" />
      </mesh>

      {/* Numbers */}
      {numbers}

      {/* Tick marks */}
      {ticks}
    </group>
  );
}

export default Clock;
