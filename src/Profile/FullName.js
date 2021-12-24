import React from "react";
export default function Name() {
  let firstName = "Amin";
  let lastName = "Elmlegy";
  let full = (_) => {
    return `${firstName}${lastName}`;
  };
  return (
    <>
      <p>{full}</p>
    </>
  );
}
