import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';

const ParticleBackground = () => {
    const [particles, setParticles] = useState([]);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const animationFrameRef = useRef();
    const lastTimeRef = useRef(0);

    // Color palette - memoized for performance
    const colors = useMemo(() => [
        { color: 'rgb(255, 255, 255)', glow: 'rgba(255, 255, 255, 0.6)' }, // White
        { color: 'rgb(255, 223, 0)', glow: 'rgba(255, 223, 0, 0.6)' },     // Yellow
        { color: 'rgb(255, 69, 58)', glow: 'rgba(255, 69, 58, 0.6)' },     // Red
        { color: 'rgb(64, 156, 255)', glow: 'rgba(64, 156, 255, 0.6)' },   // Blue
        { color: 'rgb(175, 82, 222)', glow: 'rgba(175, 82, 222, 0.6)' },   // Purple
        { color: 'rgb(48, 209, 88)', glow: 'rgba(48, 209, 88, 0.6)' },     // Green
    ], []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            setDimensions({ width: newWidth, height: newHeight });

            // Update particles to fit new dimensions
            setParticles(prevParticles =>
                prevParticles.map(particle => ({
                    ...particle,
                    currentX: Math.min(particle.currentX, newWidth - 50),
                    currentY: Math.min(particle.currentY, newHeight - 50),
                }))
            );
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize particles
    useEffect(() => {
        const particleCount = 90;
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * dimensions.width;
            const y = Math.random() * dimensions.height;
            const colorData = colors[Math.floor(Math.random() * colors.length)];

            newParticles.push({
                id: i,
                currentX: x,
                currentY: y,
                size: Math.random() * 2.5 + 1,
                opacity: Math.random() * 0.8 + 0.4,
                velocityX: (Math.random() - 0.5) * 1.2,
                velocityY: (Math.random() - 0.5) * 1.2,
                color: colorData.color,
                glowColor: colorData.glow,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinkleOffset: Math.random() * Math.PI * 2,
            });
        }

        setParticles(newParticles);
    }, [dimensions, colors]);

    // Optimized animation with frame rate limiting
    useEffect(() => {
        const animateParticles = (currentTime) => {
            // Limit to ~30fps for better performance
            if (currentTime - lastTimeRef.current < 33) {
                animationFrameRef.current = requestAnimationFrame(animateParticles);
                return;
            }
            lastTimeRef.current = currentTime;

            setParticles(prevParticles =>
                prevParticles.map(particle => {
                    let newX = particle.currentX + particle.velocityX;
                    let newY = particle.currentY + particle.velocityY;
                    let newVelX = particle.velocityX;
                    let newVelY = particle.velocityY;

                    // Bounce off screen edges with current dimensions
                    if (newX <= 0 || newX >= dimensions.width) {
                        newVelX *= -0.8;
                        newX = Math.max(0, Math.min(dimensions.width, newX));
                    }
                    if (newY <= 0 || newY >= dimensions.height) {
                        newVelY *= -0.8;
                        newY = Math.max(0, Math.min(dimensions.height, newY));
                    }

                    // Add slight randomness - reduced frequency for performance
                    if (Math.random() < 0.1) {
                        newVelX += (Math.random() - 0.5) * 0.02;
                        newVelY += (Math.random() - 0.5) * 0.02;
                    }

                    // Limit velocity
                    const maxVel = 1.5;
                    newVelX = Math.max(-maxVel, Math.min(maxVel, newVelX));
                    newVelY = Math.max(-maxVel, Math.min(maxVel, newVelY));

                    return {
                        ...particle,
                        currentX: newX,
                        currentY: newY,
                        velocityX: newVelX,
                        velocityY: newVelY,
                        twinkleOffset: particle.twinkleOffset + particle.twinkleSpeed,
                    };
                })
            );

            animationFrameRef.current = requestAnimationFrame(animateParticles);
        };

        animationFrameRef.current = requestAnimationFrame(animateParticles);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [dimensions]);

    // Optimized connection calculation with memoization
    const connections = useMemo(() => {
        const connectionsList = [];
        const maxDistance = 120;
        const maxConnections = 150; // Limit total connections for performance

        for (let i = 0; i < particles.length && connectionsList.length < maxConnections; i++) {
            for (let j = i + 1; j < particles.length && connectionsList.length < maxConnections; j++) {
                const particle1 = particles[i];
                const particle2 = particles[j];

                const dx = particle1.currentX - particle2.currentX;
                const dy = particle1.currentY - particle2.currentY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.8;
                    connectionsList.push({
                        x1: particle1.currentX,
                        y1: particle1.currentY,
                        x2: particle2.currentX,
                        y2: particle2.currentY,
                        opacity: opacity,
                    });
                }
            }
        }

        return connectionsList;
    }, [particles]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
                className="w-full h-full absolute inset-0"
                width={dimensions.width}
                height={dimensions.height}
            >
                {/* Connection lines */}
                {connections.map((connection, index) => (
                    <line
                        key={index}
                        x1={connection.x1}
                        y1={connection.y1}
                        x2={connection.x2}
                        y2={connection.y2}
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth="2"
                        strokeOpacity={connection.opacity}
                        style={{
                            filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
                        }}
                    />
                ))}
            </svg>

            {/* Star particles */}
            {particles.map((particle) => {
                const twinkleOpacity = particle.opacity + Math.sin(particle.twinkleOffset) * 0.3;

                return (
                    <div
                        key={particle.id}
                        className="absolute"
                        style={{
                            left: `${particle.currentX}px`,
                            top: `${particle.currentY}px`,
                            transform: 'translate(-50%, -50%)',
                            willChange: 'transform', // Optimize for animations
                        }}
                    >
                        {/* Star shape */}
                        <div
                            className="relative"
                            style={{
                                width: `${particle.size * 4}px`,
                                height: `${particle.size * 4}px`,
                                opacity: Math.max(0.2, Math.min(1, twinkleOpacity)),
                            }}
                        >
                            {/* Star center */}
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                    width: `${particle.size * 1.2}px`,
                                    height: `${particle.size * 1.2}px`,
                                    backgroundColor: particle.color,
                                    boxShadow: `0 0 ${particle.size * 6}px ${particle.glowColor}, 0 0 ${particle.size * 12}px ${particle.glowColor}`,
                                }}
                            />
                            {/* Star rays */}
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: `${particle.size * 3}px`,
                                    height: '2px',
                                    backgroundColor: particle.color,
                                    boxShadow: `0 0 ${particle.size * 2}px ${particle.glowColor}`,
                                }}
                            />
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: '2px',
                                    height: `${particle.size * 3}px`,
                                    backgroundColor: particle.color,
                                    boxShadow: `0 0 ${particle.size * 2}px ${particle.glowColor}`,
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ParticleBackground;