import { useEffect, useRef } from "react";

const GlassIntro = () => {
  const introRef = useRef(null);
  const shakeRef = useRef(null);
  const hammerRef = useRef(null);
  const flashRef = useRef(null);
  const cracksRef = useRef(null);
  const canvasRef = useRef(null);
  const glassRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const shake = shakeRef.current;
    const hammer = hammerRef.current;
    const flash = flashRef.current;
    const cracks = cracksRef.current;
    const canvas = canvasRef.current;
    const glass = glassRef.current;

    if (
      !intro ||
      !shake ||
      !hammer ||
      !flash ||
      !cracks ||
      !canvas ||
      !glass
    ) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    // Prevent page scrolling while intro is playing
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // --------------------------------------------------
    // CANVAS SETUP
    // --------------------------------------------------

    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    // --------------------------------------------------
    // SHARDS
    // --------------------------------------------------

    let shards = [];
    let animationFrame;

    const spawnShards = (cx, cy) => {
      shards = [];

      const count = isMobile ? 18 : 45;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 80;

        const speed = 6 + Math.random() * 15;

        const size =
          14 + Math.random() * (isMobile ? 45 : 90);

        const sides = 3 + Math.floor(Math.random() * 3);

        const points = [];

        for (let s = 0; s < sides; s++) {
          const pointAngle = (s / sides) * Math.PI * 2;

          const pointRadius =
            size * (0.6 + Math.random() * 0.6);

          points.push([
            Math.cos(pointAngle) * pointRadius,
            Math.sin(pointAngle) * pointRadius,
          ]);
        }

        shards.push({
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,

          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,

          rotation: Math.random() * Math.PI * 2,

          rotationSpeed:
            (Math.random() - 0.5) * 0.3,

          points,

          life: 1,
          alpha: 0.9,
        });
      }
    };

    const drawShards = () => {
      ctx.clearRect(0, 0, W, H);

      for (const shard of shards) {
        shard.x += shard.vx;
        shard.y += shard.vy;

        shard.vy += 0.5;

        shard.rotation += shard.rotationSpeed;

        shard.life -= 0.025;

        shard.alpha = Math.max(0, shard.life);

        ctx.save();

        ctx.translate(shard.x, shard.y);

        ctx.rotate(shard.rotation);

        ctx.beginPath();

        ctx.moveTo(
          shard.points[0][0],
          shard.points[0][1]
        );

        for (let i = 1; i < shard.points.length; i++) {
          ctx.lineTo(
            shard.points[i][0],
            shard.points[i][1]
          );
        }

        ctx.closePath();

        ctx.fillStyle = `rgba(
          220,
          235,
          255,
          ${shard.alpha * 0.3}
        )`;

        ctx.strokeStyle = `rgba(
          255,
          255,
          255,
          ${shard.alpha}
        )`;

        ctx.lineWidth = 1;

        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }

      shards = shards.filter(
        (shard) => shard.life > 0
      );

      if (shards.length > 0) {
        animationFrame =
          requestAnimationFrame(drawShards);
      }
    };

    // --------------------------------------------------
    // CRACK GENERATOR
    // --------------------------------------------------

    const buildCracks = (cx, cy) => {
      cracks.innerHTML = "";

      const SVG_NS =
        "http://www.w3.org/2000/svg";

      const numberOfCracks = isMobile ? 10 : 18;

      for (let i = 0; i < numberOfCracks; i++) {
        const angle =
          (i / numberOfCracks) * Math.PI * 2 +
          (Math.random() - 0.5) * 0.35;

        const length =
          (isMobile ? 220 : 420) +
          Math.random() * 380;

        const segments = isMobile ? 3 : 5;

        let x = cx;
        let y = cy;

        let pathData = `M ${x} ${y}`;

        for (let s = 0; s < segments; s++) {
          const step = length / segments;

          const jitter = 26;

          x +=
            Math.cos(angle) * step +
            (Math.random() - 0.5) * jitter;

          y +=
            Math.sin(angle) * step +
            (Math.random() - 0.5) * jitter;

          pathData += ` L ${x} ${y}`;

          // Secondary crack
          if (Math.random() > 0.55) {
            const branchAngle =
              angle +
              (Math.random() - 0.5) * 1.6;

            const branchLength =
              40 + Math.random() * 90;

            const branchX =
              x +
              Math.cos(branchAngle) *
                branchLength;

            const branchY =
              y +
              Math.sin(branchAngle) *
                branchLength;

            const branch =
              document.createElementNS(
                SVG_NS,
                "path"
              );

            branch.setAttribute(
              "d",
              `M ${x} ${y} L ${branchX} ${branchY}`
            );

            branch.setAttribute(
              "stroke",
              "rgba(255,255,255,0.55)"
            );

            branch.setAttribute(
              "stroke-width",
              "0.8"
            );

            branch.setAttribute(
              "fill",
              "none"
            );

            branch.style.strokeDasharray =
              "600";

            branch.style.strokeDashoffset =
              "600";

            branch.style.transition =
              "stroke-dashoffset 0.45s ease-out";

            cracks.appendChild(branch);

            requestAnimationFrame(() => {
              branch.style.strokeDashoffset = "0";
            });
          }
        }

        const path =
          document.createElementNS(
            SVG_NS,
            "path"
          );

        path.setAttribute(
          "d",
          pathData
        );

        path.setAttribute(
          "stroke",
          "rgba(255,255,255,0.9)"
        );

        path.setAttribute(
          "stroke-width",
          "1.4"
        );

        path.setAttribute(
          "fill",
          "none"
        );

        path.style.strokeDasharray =
          "1400";

        path.style.strokeDashoffset =
          "1400";

        path.style.transition =
          "stroke-dashoffset 0.5s cubic-bezier(.2,.8,.3,1)";

        cracks.appendChild(path);

        requestAnimationFrame(() => {
          path.style.strokeDashoffset = "0";
        });
      }

      // Impact circle
      const ring =
        document.createElementNS(
          SVG_NS,
          "circle"
        );

      ring.setAttribute("cx", cx);
      ring.setAttribute("cy", cy);
      ring.setAttribute("r", "6");

      ring.setAttribute(
        "fill",
        "rgba(255,255,255,0.9)"
      );

      cracks.appendChild(ring);

      ring.animate(
        [
          {
            r: 6,
            opacity: 0.9,
          },
          {
            r: 60,
            opacity: 0,
          },
        ],
        {
          duration: 600,
          easing: "ease-out",
        }
      );
    };

    // --------------------------------------------------
    // FINISH INTRO
    // --------------------------------------------------

    let finished = false;

    const finishIntro = () => {
      if (finished) return;

      finished = true;

      intro.classList.add("glass-intro-done");

      document.body.style.overflow =
        previousOverflow;

      // Tell the React website that intro finished
      window.dispatchEvent(
        new CustomEvent("glassIntroComplete")
      );

      // Remove component after fade
      setTimeout(() => {
        if (intro) {
          intro.remove();
        }
      }, 700);
    };

    // --------------------------------------------------
    // SKIP BUTTON
    // --------------------------------------------------

    const skipButton =
      intro.querySelector(
        ".glass-intro-skip"
      );

    if (skipButton) {
      skipButton.addEventListener(
        "click",
        finishIntro
      );
    }

    // --------------------------------------------------
    // REDUCED MOTION
    // --------------------------------------------------

    if (reduceMotion) {
      finishIntro();

      return () => {
        document.body.style.overflow =
          previousOverflow;

        window.removeEventListener(
          "resize",
          resize
        );

        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }

    // --------------------------------------------------
    // TIMELINE
    // --------------------------------------------------

    const T = {
      glassIn: 500,

      hammerStart: 500,

      impact: 1300,

      crackDuration: 500,

      reveal: 1900,

      end: 3200,
    };

    // --------------------------------------------------
    // GLASS FADE IN
    // --------------------------------------------------

    glass.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: T.glassIn,
        easing: "ease-out",
        fill: "forwards",
      }
    );

    // --------------------------------------------------
    // HAMMER SWING
    // --------------------------------------------------

    const hammerTimer = setTimeout(() => {
      hammer.animate(
        [
          {
            transform:
              "translate(-50%, -40%) rotate(-55deg)",
            offset: 0,
          },

          {
            transform:
              "translate(-50%, -55%) rotate(-85deg)",
            offset: 0.35,
          },

          {
            transform:
              "translate(-50%, -30%) rotate(15deg)",
            offset: 0.85,
          },

          {
            transform:
              "translate(-50%, -25%) rotate(10deg)",
            offset: 1,
          },
        ],
        {
          duration:
            T.impact - T.hammerStart,

          easing:
            "cubic-bezier(.5,.05,.7,.2)",

          fill: "forwards",
        }
      );
    }, T.hammerStart);

    // --------------------------------------------------
    // IMPACT
    // --------------------------------------------------

    const impactTimer = setTimeout(() => {
      // Flash
      flash.animate(
        [
          {
            opacity: 0,
          },

          {
            opacity: 1,
            offset: 0.15,
          },

          {
            opacity: 0,
          },
        ],
        {
          duration: 220,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      // Screen shake
      shake.animate(
        [
          {
            transform: "translate(0, 0)",
          },

          {
            transform:
              "translate(7px, -5px)",
          },

          {
            transform:
              "translate(-6px, 6px)",
          },

          {
            transform:
              "translate(5px, 3px)",
          },

          {
            transform:
              "translate(-3px, -2px)",
          },

          {
            transform: "translate(0, 0)",
          },
        ],
        {
          duration: 420,
          easing: "ease-out",
        }
      );

      // Hammer recoil
      hammer.animate(
        [
          {
            transform:
              "translate(-50%, -25%) rotate(10deg)",
          },

          {
            transform:
              "translate(-50%, -35%) rotate(-5deg)",
          },

          {
            transform:
              "translate(-50%, -45%) rotate(-15deg)",
          },
        ],
        {
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      // Create cracks
      buildCracks(
        window.innerWidth / 2,
        window.innerHeight / 2
      );

      // --------------------------------------------------
      // GLASS SHATTER
      // --------------------------------------------------

      const shatterTimer = setTimeout(() => {
        spawnShards(
          window.innerWidth / 2,
          window.innerHeight / 2
        );

        cancelAnimationFrame(animationFrame);

        animationFrame =
          requestAnimationFrame(drawShards);

        glass.animate(
          [
            {
              opacity: 1,
              backdropFilter:
                "blur(4px)",
              WebkitBackdropFilter:
                "blur(4px)",
            },

            {
              opacity: 0,
              backdropFilter:
                "blur(0px)",
              WebkitBackdropFilter:
                "blur(0px)",
            },
          ],
          {
            duration: 700,
            easing: "ease-in",
            fill: "forwards",
          }
        );

        // Fade cracks away
        setTimeout(() => {
          cracks.animate(
            [
              {
                opacity: 1,
              },
              {
                opacity: 0,
              },
            ],
            {
              duration: 500,
              easing: "ease-out",
              fill: "forwards",
            }
          );
        }, 300);
      }, T.crackDuration);

      // --------------------------------------------------
      // WEBSITE REVEAL
      // --------------------------------------------------

      const revealTimer = setTimeout(() => {
        intro.classList.add(
          "glass-intro-revealed"
        );
      }, T.reveal);

      // --------------------------------------------------
      // FINISH
      // --------------------------------------------------

      const finishTimer = setTimeout(
        finishIntro,
        T.end
      );

      // Store timers for cleanup
      intro._glassTimers = [
        shatterTimer,
        revealTimer,
        finishTimer,
      ];
    }, T.impact);

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {
      clearTimeout(hammerTimer);
      clearTimeout(impactTimer);

      if (intro._glassTimers) {
        intro._glassTimers.forEach(
          clearTimeout
        );
      }

      window.removeEventListener(
        "resize",
        resize
      );

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      document.body.style.overflow =
        previousOverflow;

      if (skipButton) {
        skipButton.removeEventListener(
          "click",
          finishIntro
        );
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .glass-intro {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0.58),
              rgba(0,0,0,0.82)
            );
          cursor: default;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition:
            opacity 0.7s ease,
            visibility 0.7s ease;
        }

        .glass-intro.glass-intro-done {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .glass-intro-shake {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
        }

        /*
         * GLASS
         */

        .glass-intro-glass {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              115deg,
              rgba(255,255,255,0.14) 0%,
              rgba(255,255,255,0) 22%,
              rgba(255,255,255,0) 55%,
              rgba(255,255,255,0.10) 70%,
              rgba(255,255,255,0) 100%
            ),

            radial-gradient(
              120% 80% at 30% 10%,
              rgba(255,255,255,0.10),
              transparent 60%
            ),

            linear-gradient(
              180deg,
              rgba(120,180,255,0.07),
              rgba(255,255,255,0.02)
            );

          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);

          box-shadow:
            inset 0 0 120px rgba(0,0,0,0.65),
            inset 0 0 0 1px
              rgba(255,255,255,0.07);

          will-change:
            transform,
            opacity;

          opacity: 0;
        }

        /*
         * SUBTLE GLASS REFLECTION
         */

        .glass-intro-glass::before {
          content: "";
          position: absolute;
          inset: -20%;

          background:
            linear-gradient(
              120deg,
              transparent 30%,
              rgba(255,255,255,0.08) 42%,
              rgba(255,255,255,0.18) 47%,
              rgba(255,255,255,0.05) 51%,
              transparent 63%
            );

          transform:
            translateX(-30%)
            rotate(2deg);

          animation:
            glassIntroReflection 3s
            ease-in-out infinite;

          pointer-events: none;
        }

        @keyframes glassIntroReflection {
          0% {
            transform:
              translateX(-35%)
              rotate(2deg);
          }

          50% {
            transform:
              translateX(35%)
              rotate(2deg);
          }

          100% {
            transform:
              translateX(-35%)
              rotate(2deg);
          }
        }

        /*
         * HAMMER
         */

        .glass-intro-hammer {
          position: absolute;

          top: -30%;
          left: 50%;

          width: min(38vw, 420px);

          height: auto;

          transform:
            translate(-50%, -40%)
            rotate(-55deg);

          transform-origin: 85% 85%;

          will-change: transform;

          filter:
            drop-shadow(
              0 30px 40px
              rgba(0,0,0,0.75)
            );

          pointer-events: none;
        }

        /*
         * FLASH
         */

        .glass-intro-flash {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(255,255,255,0.95),
              rgba(255,255,255,0.55) 15%,
              rgba(255,255,255,0) 45%
            );

          opacity: 0;

          mix-blend-mode: screen;

          z-index: 5;
        }

        /*
         * CRACKS
         */

        .glass-intro-cracks {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 4;

          overflow: visible;
        }

        /*
         * SHARDS
         */

        .glass-intro-shards {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 6;
        }

        /*
         * SKIP BUTTON
         */

        .glass-intro-skip {
          position: fixed;

          top: 18px;
          right: 18px;

          z-index: 20;

          padding:
            0.55rem
            0.95rem;

          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          font-size: 0.78rem;

          letter-spacing: 0.05em;

          color:
            rgba(255,255,255,0.78);

          background:
            rgba(0,0,0,0.38);

          border:
            1px solid
            rgba(255,255,255,0.2);

          border-radius: 8px;

          cursor: pointer;

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          transition:
            all 0.25s ease;
        }

        .glass-intro-skip:hover {
          color: #ffffff;

          background:
            rgba(0,0,0,0.7);

          border-color:
            rgba(255,255,255,0.4);

          transform:
            translateY(-1px);
        }

        .glass-intro-skip:active {
          transform:
            translateY(0);
        }

        /*
         * MOBILE
         */

        @media (max-width: 640px) {
          .glass-intro-hammer {
            width:
              min(60vw, 270px);
          }

          .glass-intro-skip {
            top: 12px;
            right: 12px;

            padding:
              0.5rem
              0.8rem;

            font-size: 0.72rem;
          }
        }

        /*
         * REDUCED MOTION
         */

        @media (prefers-reduced-motion: reduce) {
          .glass-intro {
            transition:
              opacity 0.3s ease;
          }

          .glass-intro-glass::before {
            animation: none;
          }
        }
      `}</style>

      <div
        ref={introRef}
        className="glass-intro"
        aria-hidden="true"
      >
        <div
          ref={shakeRef}
          className="glass-intro-shake"
        >
          {/* Glass */}
          <div
            ref={glassRef}
            className="glass-intro-glass"
          />

          {/* Cracks */}
          <svg
            ref={cracksRef}
            className="glass-intro-cracks"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Glass shards */}
          <canvas
            ref={canvasRef}
            className="glass-intro-shards"
          />

          {/* Flash */}
          <div
            ref={flashRef}
            className="glass-intro-flash"
          />

          {/* Hammer */}
          <svg
            ref={hammerRef}
            className="glass-intro-hammer"
            viewBox="0 0 400 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Metal */}
              <linearGradient
                id="glassIntroMetal"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0"
                  stopColor="#e9edf2"
                />

                <stop
                  offset="0.35"
                  stopColor="#8e97a3"
                />

                <stop
                  offset="0.55"
                  stopColor="#5c646f"
                />

                <stop
                  offset="0.75"
                  stopColor="#aab2bd"
                />

                <stop
                  offset="1"
                  stopColor="#3a4049"
                />
              </linearGradient>

              {/* Wood */}
              <linearGradient
                id="glassIntroWood"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0"
                  stopColor="#3a2415"
                />

                <stop
                  offset="0.5"
                  stopColor="#6b4426"
                />

                <stop
                  offset="1"
                  stopColor="#2a180d"
                />
              </linearGradient>

              {/* Wood Highlight */}
              <linearGradient
                id="glassIntroWoodHighlight"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0"
                  stopColor="#8a5a33"
                  stopOpacity="0.9"
                />

                <stop
                  offset="1"
                  stopColor="#2a180d"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Hammer Handle */}
            <rect
              x="215"
              y="120"
              width="26"
              height="130"
              rx="10"
              fill="url(#glassIntroWood)"
            />

            {/* Handle Highlight */}
            <rect
              x="215"
              y="120"
              width="10"
              height="130"
              rx="6"
              fill="url(#glassIntroWoodHighlight)"
            />

            {/* Handle End */}
            <rect
              x="222"
              y="240"
              width="12"
              height="18"
              rx="6"
              fill="#1a0f07"
            />

            {/* Hammer Head */}
            <rect
              x="120"
              y="60"
              width="160"
              height="70"
              rx="12"
              fill="url(#glassIntroMetal)"
            />

            {/* Head Highlight */}
            <rect
              x="120"
              y="60"
              width="160"
              height="14"
              rx="7"
              fill="#ffffff"
              opacity="0.35"
            />

            {/* Head Shadow */}
            <rect
              x="120"
              y="118"
              width="160"
              height="10"
              rx="5"
              fill="#000000"
              opacity="0.35"
            />

            {/* Face */}
            <rect
              x="112"
              y="66"
              width="16"
              height="58"
              rx="6"
              fill="#cfd6df"
            />

            {/* Face Highlight */}
            <rect
              x="112"
              y="66"
              width="16"
              height="20"
              rx="6"
              fill="#ffffff"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Skip */}
        <button
          type="button"
          className="glass-intro-skip"
        >
          Skip Intro
        </button>
      </div>
    </>
  );
};

export default GlassIntro;