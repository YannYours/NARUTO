import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersoCard } from './PersoCard';

const variants = {
    enter: dir => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: dir => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 })
};

export function CharacterCarousel({ characters }) {
    const [[page, direction], setPage] = useState([0, 0]);

    if (!Array.isArray(characters) || characters.length === 0) {
        console.log("Carousel guard triggered, characters:", characters);
        return <p className="text-center">Chargement des personnages…</p>;
    }
    const count = characters.length;

    const paginate = newDir => {
        setPage([
            (page + newDir + count) % count,
            newDir
        ]);
    };

    const current = characters[page];

    return (
        <div className="carousel-container">
            <AnimatePresence custom={direction}>
                <motion.div
                    key={current.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'tween', duration: 0.5 }}
                    className="carousel-slide"
                >
                    <PersoCard
                        name={current.name}
                        avatarPlaceholder={current.images[0]}
                        debut={current.debut}
                        family={current.family}
                        jutsu={current.jutsu}
                        natureType={current.natureType}
                        personal={current.personal}
                    />
                </motion.div>
            </AnimatePresence>

            <button
                className="carousel-nav carousel-nav--prev btn btn-light"
                onClick={() => paginate(-1)}
                disabled={ page === 0}
            >
                ←
            </button>
            <button
                className="carousel-nav carousel-nav--next btn btn-light"
                onClick={() => paginate(1)}
            >
                →
            </button>
        </div>
    );
}
