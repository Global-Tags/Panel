'use client'

import React, { useEffect, useMemo, useState } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import { minecraft } from '../fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 28, stiffness: 180 },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const makeRevealVariant = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 28, stiffness: 180, delay },
  },
});

function Reveal({
  children,
  delay = 0,
  className,
  customVariants,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  customVariants?: Variants;
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  const variants = customVariants ?? makeRevealVariant(delay);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const GAMESCOM_DATE = new Date('2026-08-27T12:00:00+02:00').getTime();

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

function getTimeLeft(target: number): CountdownState {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    isExpired: false,
  };
}

function useCountdown(target: number) {
  const [time, setTime] = useState<CountdownState | null>(null);
  useEffect(() => {
    setTime(getTimeLeft(target));
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);
  return time;
}

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex min-w-18 flex-col items-center gap-2 sm:min-w-23">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className={`text-[clamp(2.2rem,5.5vw,5rem)] font-extrabold leading-none tracking-tight text-white tabular-nums ${minecraft.className}`}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
    </AnimatePresence>
    <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/30">
      {label}
    </span>
  </div>
);

const Sep = () => (
  <span
    className={`pb-4 text-[clamp(1.2rem,3vw,2.5rem)] font-bold leading-none text-yellow-500/35 sm:pb-5 ${minecraft.className}`}
    aria-hidden="true"
  >
    :
  </span>
);

const ImageTile = ({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4 }}
    className={`relative aspect-square overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07070e] ${className}`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 33vw, 16vw"
      className="object-cover"
      loading="lazy"
    />
  </motion.div>
);

export default function GamescomPage() {
  const time = useCountdown(GAMESCOM_DATE);

  const countdownLabel = useMemo(() => {
    if (!time) return 'Countdown to Gamescom';
    if (time.isExpired) return 'Gamescom is live.';
    return 'Countdown to Gamescom';
  }, [time]);

  const countdownAriaLabel = useMemo(() => {
    if (!time) return 'Loading countdown';
    if (time.isExpired) return 'Gamescom is live now';
    return `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds remaining`;
  }, [time]);

  return (
    <div className="overflow-x-hidden text-white selection:bg-yellow-400/20">
      <section className="relative flex min-h-svh flex-col items-center justify-center px-4 text-center sm:px-8">
        <div className="pointer-events-none absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 24, stiffness: 160 }}
          className="relative flex w-full select-none justify-center"
        >
          <span
            className={`block bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text font-extrabold leading-[0.8] text-transparent ${minecraft.className}`}
            style={{ fontSize: 'clamp(7rem, 29vw, 30rem)' }}
          >
            250
          </span>
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl sm:h-24" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1
            className="mt-3 font-extrabold leading-tight tracking-tight text-white"
            style={{ fontSize: 'clamp(1.4rem, 3.8vw, 3.5rem)' }}
          >
            Free Premium codes. Grab yours at Gamescom.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mb-4 text-[25px] font-bold uppercase tracking-[0.28em] text-yellow-400/55"
        >
          {countdownLabel}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', damping: 25, stiffness: 200 }}
          className="mb-16 sm:mb-20"
        >
          {!time ? (
            <div
              role="timer"
              aria-live="polite"
              aria-atomic="true"
              aria-label="Loading countdown"
              className="flex items-center gap-3 sm:gap-5 lg:gap-8"
            >
              <Unit value={0} label="Days" />
              <Sep />
              <Unit value={0} label="Hours" />
              <Sep />
              <Unit value={0} label="Min" />
            </div>
          ) : time.isExpired ? (
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-2.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3"
              >
                <span className="text-lg leading-none">🟡</span>
                <span className={`font-extrabold text-yellow-400 ${minecraft.className}`}
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                  Gamescom is live now
                </span>
              </motion.div>
              <p className="text-sm font-medium text-white/50">
                Find us at the LabyMod area — Koelnmesse, Cologne
              </p>
            </div>
          ) : (
            <div
              role="timer"
              aria-live="polite"
              aria-atomic="true"
              aria-label={countdownAriaLabel}
              className="flex items-center gap-3 sm:gap-5 lg:gap-8"
            >
              <Unit value={time.days} label="Days" />
              <Sep />
              <Unit value={time.hours} label="Hours" />
              <Sep />
              <Unit value={time.minutes} label="Min" />
            </div>
          )}
        </motion.div>
      </section>

      <section className="px-8 py-24 sm:px-14 sm:py-32 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <Reveal className="relative h-95 overflow-hidden rounded-3xl bg-[#07070e] sm:h-110 lg:h-150">
              <Image
                src="/gamescom/card.jpg"
                alt="GlobalTags Premium card"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', damping: 22, stiffness: 180 }}
                className="absolute bottom-6 left-6 rounded-2xl bg-yellow-400 px-5 py-3.5 text-black shadow-2xl shadow-yellow-500/30"
              >
                <p className={`text-3xl font-extrabold leading-none ${minecraft.className}`}>6</p>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider opacity-70">months</p>
              </motion.div>
            </Reveal>

            <div>
              <motion.p variants={fadeUp} className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-400/70">
                What you get
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className={`mb-6 font-extrabold leading-[1.05] tracking-tight text-white ${minecraft.className}`}
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
              >
                6 Months
                <br />
                GlobalTags
                <br />
                <span className="bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Premium.
                </span>
              </motion.h2>

              <motion.div variants={stagger} className="mb-10 flex flex-col gap-4">
                <motion.div variants={fadeUp} className="flex items-center gap-2.5">
                  <span className="text-xl leading-none" aria-hidden="true">🖼️</span>
                  <span className="text-sm font-semibold text-white/60">Custom icon next to your tag</span>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-center gap-2.5">
                  <span className="text-xl leading-none" aria-hidden="true">💠</span>
                  <span className="text-sm font-semibold text-white/60">Exclusive supporter icon</span>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-center gap-2.5">
                  <span className="text-xl leading-none" aria-hidden="true">🎭</span>
                  <span className="text-sm font-semibold text-white/60">Discord role</span>
                </motion.div>
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
                <ImageTile src="/gamescom/pen.jpg" alt="GlobalTags branded premium pen" />
                <ImageTile src="/gamescom/lighter.jpg" alt="GlobalTags branded rechargeable lighter" />
                <ImageTile src="/gamescom/stickers.jpg" alt="GlobalTags Premium round stickers" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="redeem" className="border-y rounded-2xl border-white/5 bg-black/10 px-8 py-24 sm:px-14 sm:py-36 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-14 grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24"
          >
            <div>
              <motion.p variants={fadeUp} className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-400/70">
                Got the card?
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className={`font-extrabold leading-[1.05] tracking-tight text-white ${minecraft.className}`}
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                How to
                <br />
                Redeem
                <br />
                <span className="text-white/30">Your Code.</span>
              </motion.h2>
            </div>

            <motion.p variants={fadeUp} className="max-w-2xl self-end text-xl leading-relaxed text-white/40">
              Your code is printed on the card. Choose the method that is easier for you. Both take
              less than a minute.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="mb-7 grid gap-5 sm:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/3"
            >
              <div className="flex items-center gap-3 border-b border-white/6 bg-white/2 px-6 py-4">
                <span className="text-xl leading-none" aria-hidden="true">🎮</span>
                <div>
                  <p className="text-sm font-bold text-white">Redeem in-game</p>
                  <p className="text-xs text-white/30">Requires the GlobalTags Addon</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="rounded-xl border border-white/5 bg-black/30 px-5 py-4 font-mono text-sm">
                  <div className={`flex flex-wrap items-center gap-1.5 ${minecraft.className}`}>
                    <span className="select-none text-white/20">›</span>
                    <span className="text-green-400">/gt redeem</span>
                    <span className="text-white/35">[your-code]</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/40">
                  Open Minecraft with the{' '}
                  <span className="font-medium text-white/60">GlobalTags Addon</span> installed and
                  run the command in chat with the code from your card.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/3"
            >
              <div className="flex items-center gap-3 border-b border-white/6 bg-white/2 px-6 py-4">
                <span className="text-xl leading-none" aria-hidden="true">💬</span>
                <div>
                  <p className="text-sm font-bold text-white">Redeem on Discord</p>
                  <p className="text-xs text-white/30">No Minecraft needed</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="rounded-xl border border-white/5 bg-black/30 px-5 py-4 font-mono text-sm">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="select-none text-white/20">›</span>
                    <span className="text-indigo-400">/redeem</span>
                    <span className="text-white/35">[your-code]</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/40">
                  Join our Discord at{' '}
                  <Link href="/discord" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    globaltags.xyz/discord
                  </Link>
                  {' '}and use the <code className="font-mono text-xs text-indigo-400">/redeem</code> command in{' '}
                  <Link href="discord://-/channels/1254446736999579740/1254454288424505506" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    #commands
                  </Link>
                  {' '}with the code printed on your card.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-36 text-center sm:py-52">
        <div className="pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative"
        >
          <motion.h2
            variants={fadeUp}
            className={`mb-6 font-extrabold leading-tight tracking-tight text-white ${minecraft.className}`}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)' }}
          >
            See you in
            <br />
            <span className="bg-linear-to-br from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Cologne.
            </span>
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/18"
          >
            <span>📍 Koelnmesse, Cologne</span>
            <span>🗓 Aug 27–30, 2026</span>
            <span>🆓 Free to grab</span>
          </motion.div>

          <motion.a
            href="/discord"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ y: -4, backgroundColor: '#fde047' }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-10 py-4 text-base font-bold text-black shadow-2xl shadow-yellow-500/20 sm:px-14 sm:py-5"
          >
            Join Discord
            <svg
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}