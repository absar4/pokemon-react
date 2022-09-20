import React from 'react';
function PokimonList({ pokemonname }) {
    return (
        <div>
            {pokemonname.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>

    )
}

export default PokimonList