'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const counters = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '+', label: 'Technologies Used' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

function CountUp({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1400;
    const startTime = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.round(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end]);

  return <>{count}{suffix}</>;
}

function Counter() {
  const [started, setStarted] = useState<Record<number, boolean>>({});

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {counters.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onViewportEnter={() =>
              setStarted((prev) => (prev[index] ? prev : { ...prev, [index]: true }))
            }
            className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm p-5 sm:p-6 text-center"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-secondary">
              <CountUp end={item.value} suffix={item.suffix} start={!!started[index]} />
            </p>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
