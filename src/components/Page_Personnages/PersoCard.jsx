import React from 'react';
import { motion } from 'framer-motion';

export function PersoCard({
    name,
    avatarPlaceholder,
    debut,
    family,
    jutsu,
    natureType,
    personal
}) {
    return (
        <div className="d-flex flex-column align-items-center py-4">
            <motion.div
                className="profile-avatar mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
                <img src={avatarPlaceholder} alt={name} />
            </motion.div>

            <motion.h3
                className="profile-name mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {name}
            </motion.h3>

            <motion.div
                className="profile-card shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="profile-content">
                    <div className="mb-3">
                        <strong>Début :</strong>
                        <p className="mb-1"><strong>Manga :</strong> {debut.manga}</p>
                        <p className="mb-1"><strong>Anime :</strong> {debut.anime}</p>
                    </div>

                    <div className="mb-3">
                        <strong>Famille :</strong>
                        <ul className="list-unstyled mb-0">
                            {family && Object.entries(family).length > 0 && (
                                <ul>
                                    {Object.entries(family).map(([role, perso]) => (
                                        <li key={role}>
                                            <strong>{role.charAt(0).toUpperCase() + role.slice(1)} :</strong> {perso}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong>Quelques Jutsus :</strong>
                        <ul className="list-unstyled mb-0">
                            {jutsu.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-3">
                        <strong>Nature Chakra :</strong>
                        <ul className="list-unstyled mb-0">
                            {natureType.map((nature, i) => (
                                <li key={i}>{nature}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <strong>Personnel :</strong>
                        <ul className="list-unstyled mb-0">
                            {Object.entries(personal).flatMap(([key, val]) => {
                                if (typeof val === 'object') {
                                    return Object.entries(val).map(([subKey, subVal]) => (
                                        <li key={`${key}-${subKey}`}>
                                            <strong>{subKey} :</strong> {subVal}
                                        </li>
                                    ));
                                }
                                return (
                                    <li key={key}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)} :</strong> {val}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
