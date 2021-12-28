import React, { useRef, useState, useEffect } from "react";

function Reviews({ styles }) {
  const reviews = useRef(null);
  return (
    <section ref={reviews} className={styles._reviews}>
      <h1>TESTIMONIAL</h1>
      <div className={styles._reviews_Child}>
        <div></div>
      </div>
    </section>
  );
}

export default Reviews;
