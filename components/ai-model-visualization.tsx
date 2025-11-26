"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function InteractiveAIMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.003
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005
      particlesRef.current.rotation.y += 0.0008
    }
  })

  // Create particle geometry
  const particleCount = 100
  const particles = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i += 3) {
    particles[i] = (Math.random() - 0.5) * 6
    particles[i + 1] = (Math.random() - 0.5) * 6
    particles[i + 2] = (Math.random() - 0.5) * 6
  }

  return (
    <group>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1.5, 8]} />
        <MeshDistortMaterial color="#f093fb" distort={0.4} speed={1.5} roughness={0.3} metalness={0.7} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#667eea" sizeAttenuation={true} />
      </points>

      {[0, 1, 2].map((index) => (
        <group key={index} rotation={[Math.PI / 4 + index * 0.3, Math.PI / 5 + index * 0.2, 0]}>
          <mesh>
            <torusGeometry args={[2.5 + index * 0.4, 0.15, 16, 32]} />
            <meshBasicMaterial color={["#667eea", "#764ba2", "#f093fb"][index]} wireframe opacity={0.6} />
          </mesh>
        </group>
      ))}

      {/* Central glow sphere */}
      <mesh scale={0.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#f093fb" />
      </mesh>
    </group>
  )
}

export default function AIModelVisualization() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#f093fb" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#667eea" />

      <InteractiveAIMesh />

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={3}
        maxDistance={10}
        minDistance={3}
      />
    </Canvas>
  )
}
