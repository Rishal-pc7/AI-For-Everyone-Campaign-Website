"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

function MapGeometry() {
  // Create a custom map shape using BufferGeometry
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()

    // Create Kerala state outline (simplified coordinates)
    // Normalized to fit in a reasonable space
    const points = [
      [0, 0],
      [1, -0.2],
      [1.2, 0],
      [1.3, 0.5],
      [1.2, 1],
      [1, 1.2],
      [0.5, 1.3],
      [0, 1.2],
      [-0.2, 0.8],
      [-0.3, 0.3],
    ]

    points.forEach((point, index) => {
      if (index === 0) {
        shape.moveTo(point[0], point[1])
      } else {
        shape.lineTo(point[0], point[1])
      }
    })
    shape.lineTo(points[0][0], points[0][1])

    const geometry = new THREE.ShapeGeometry(shape)
    return geometry
  }, [])

  return (
    <mesh rotation={[0, 0, Math.PI * 0.1]} position={[0, 0, 0]}>
      <bufferGeometry attach="geometry" {...geometry} />
      <meshPhongMaterial
        color="#f093fb"
        emissive="#f093fb"
        emissiveIntensity={0.5}
        wireframe={false}
        transparent={true}
        opacity={0.8}
        side={THREE.DoubleSide}
      />

      {/* Glow layer */}
      <meshPhongMaterial
        color="#667eea"
        emissive="#667eea"
        emissiveIntensity={0.3}
        transparent={true}
        opacity={0.4}
        side={THREE.BackSide}
        attach="material-1"
      />
    </mesh>
  )
}

function CircuitLines() {
  // Create animated circuit-like lines
  const linePoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 5; i++) {
      const x = (Math.random() - 0.5) * 3
      const y = (Math.random() - 0.5) * 3
      const z = Math.random() * 0.5
      points.push(new THREE.Vector3(x, y, z))
    }
    return points
  }, [])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(linePoints.flatMap((p) => [p.x, p.y, p.z]))}
          count={linePoints.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#667eea" linewidth={2} transparent opacity={0.4} />
    </line>
  )
}

export default function MapVisualization() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="w-full h-full"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 3], fov: 50 }}
      >
        <ambientLight intensity={0.6} color="#f093fb" />
        <pointLight position={[2, 2, 2]} intensity={1} color="#667eea" />
        <pointLight position={[-2, -2, 2]} intensity={0.6} color="#764ba2" />

        <MapGeometry />
        <CircuitLines />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} dampingFactor={0.05} />
      </Canvas>

      {/* Holographic glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-transparent to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
    </div>
  )
}
