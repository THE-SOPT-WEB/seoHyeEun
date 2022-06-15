import React from "react";

export default function Tournament() {
    return (
        <>
            {fighterList.map((fighter, index) => {
                if (index < 2) {
                    return (
                        <article onClick={() => getSelectWinner(index)}>
                            <img src={fighter.img} />
                            <div>{fighter.name}</div>
                        </article>
                    );
                }
            })}
            <p>VS</p>
        </>
    );
}
