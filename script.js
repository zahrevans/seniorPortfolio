gsap.registerPlugin(ScrollTrigger);

// ── MONTH DATA ─────────────────────────────────────────────────────────────
const MONTHS = [
    {
        name: "JANUARY",
        num: "01",
        theme: "New Year · Winter",
        sky1: "#020d1f",
        sky2: "#0a1e3d",
        fogColor: 0x0d1830,
        fogDensity: 0.018,
        accent: "rgba(140,190,255,0.8)",
        accentHex: 0x8cbeff,
        accentCSS: "#8cbeff",
        uiMuted: "rgba(140,190,255,0.35)",
        projects: [
            {
                tag: "REACT / THREE.JS",
                title: "Aurora Dashboard",
                desc: "Real-time data visualization with particle-based rendering and animated WebGL charts.",
            },
            {
                tag: "NEXT.JS / API",
                title: "Frost Commerce",
                desc: "E-commerce platform built for winter seasonal drops with serverless checkout flows.",
            },
        ],
        camFrom: { x: 0, y: 40, z: 40 },
    },
    {
        name: "FEBRUARY",
        num: "02",
        theme: "Valentine · Frost",
        sky1: "#1a0512",
        sky2: "#2d0a20",
        fogColor: 0x1a0d1a,
        fogDensity: 0.02,
        accent: "rgba(255,100,140,0.85)",
        accentHex: 0xff648c,
        accentCSS: "#ff648c",
        uiMuted: "rgba(255,100,140,0.35)",
        projects: [
            {
                tag: "SVELTE / GSAP",
                title: "Bloom UI Kit",
                desc: "Animated component library with rose-petal micro-interactions and spring physics.",
            },
        ],
        camFrom: { x: -50, y: 0, z: 20 },
    },
    {
        name: "MARCH",
        num: "03",
        theme: "Spring Bloom",
        sky1: "#0a1f08",
        sky2: "#183512",
        fogColor: 0x1a2d14,
        fogDensity: 0.014,
        accent: "rgba(120,230,100,0.8)",
        accentHex: 0x78e664,
        accentCSS: "#78e664",
        uiMuted: "rgba(120,230,100,0.35)",
        projects: [
            {
                tag: "WEBGL / SHADER",
                title: "Pollen Viz",
                desc: "GPU-powered particle field simulating pollen dispersal using custom GLSL shaders.",
            },
            {
                tag: "NODE / EXPRESS",
                title: "Garden API",
                desc: "REST API for plant tracking with ML-powered growth prediction endpoints.",
            },
        ],
        camFrom: { x: 50, y: 0, z: 20 },
    },
    {
        name: "APRIL",
        num: "04",
        theme: "Cherry Blossom · Rain",
        sky1: "#150a1a",
        sky2: "#221228",
        fogColor: 0x1a1020,
        fogDensity: 0.022,
        accent: "rgba(255,170,200,0.8)",
        accentHex: 0xffaac8,
        accentCSS: "#ffaac8",
        uiMuted: "rgba(255,170,200,0.35)",
        projects: [
            {
                tag: "REACT / P5.JS",
                title: "Rain Garden",
                desc: "Generative art piece using perlin noise to simulate rainfall on a canvas petal field.",
            },
        ],
        camFrom: { x: -35, y: -35, z: 30 },
    },
    {
        name: "MAY",
        num: "05",
        theme: "Wildflower Fields",
        sky1: "#1a1500",
        sky2: "#2a2200",
        fogColor: 0x201a00,
        fogDensity: 0.012,
        accent: "rgba(255,220,60,0.85)",
        accentHex: 0xffdc3c,
        accentCSS: "#ffdc3c",
        uiMuted: "rgba(255,220,60,0.35)",
        projects: [
            {
                tag: "VUE / D3",
                title: "Field Data",
                desc: "Interactive botanical dataset explorer with SVG-based bloom visualizations.",
            },
            {
                tag: "TYPESCRIPT",
                title: "Meadow CMS",
                desc: "Headless content system built for nature photography publications.",
            },
        ],
        camFrom: { x: 0, y: -50, z: 30 },
    },
    {
        name: "JUNE",
        num: "06",
        theme: "Ocean · Beach",
        sky1: "#01111e",
        sky2: "#051e35",
        fogColor: 0x041825,
        fogDensity: 0.016,
        accent: "rgba(40,190,255,0.85)",
        accentHex: 0x28beff,
        accentCSS: "#28beff",
        uiMuted: "rgba(40,190,255,0.35)",
        projects: [
            {
                tag: "THREE.JS / WATER",
                title: "Tide Renderer",
                desc: "Real-time ocean simulation using GPU vertex displacement and foam particle systems.",
            },
            {
                tag: "REACT NATIVE",
                title: "Shore App",
                desc: "Surf forecast mobile application with tidal animation and geolocation features.",
            },
            {
                tag: "WEBGL",
                title: "Reef Explorer",
                desc: "Underwater WebGL experience for marine biology education.",
            },
        ],
        camFrom: { x: 50, y: 25, z: 20 },
    },
    {
        name: "JULY",
        num: "07",
        theme: "Independence · Fire",
        sky1: "#1a0400",
        sky2: "#2d0800",
        fogColor: 0x1a0500,
        fogDensity: 0.018,
        accent: "rgba(255,100,30,0.85)",
        accentHex: 0xff641e,
        accentCSS: "#ff641e",
        uiMuted: "rgba(255,100,30,0.35)",
        projects: [
            {
                tag: "WEBGL / PARTICLES",
                title: "Ember Engine",
                desc: "Real-time fire particle simulation with heat-distortion post-processing effects.",
            },
            {
                tag: "CANVAS API",
                title: "Spark Draw",
                desc: "Interactive firework canvas tool with physics-based trajectory simulation.",
            },
        ],
        camFrom: { x: 0, y: 0, z: 80 },
    },
    {
        name: "AUGUST",
        num: "08",
        theme: "Desert · Mirage",
        sky1: "#1a0e00",
        sky2: "#2a1800",
        fogColor: 0x201400,
        fogDensity: 0.013,
        accent: "rgba(255,165,40,0.85)",
        accentHex: 0xffa528,
        accentCSS: "#ffa528",
        uiMuted: "rgba(255,165,40,0.35)",
        projects: [
            {
                tag: "SHADER / GLSL",
                title: "Mirage Post",
                desc: "Heat shimmer post-processing filter using custom fragment shaders and UV distortion.",
            },
            {
                tag: "THREE.JS",
                title: "Dune World",
                desc: "Procedural terrain generator with wind erosion simulation and LOD optimization.",
            },
        ],
        camFrom: { x: -50, y: 25, z: 20 },
    },
    {
        name: "SEPTEMBER",
        num: "09",
        theme: "Harvest · Amber",
        sky1: "#180a00",
        sky2: "#2a1200",
        fogColor: 0x200e00,
        fogDensity: 0.018,
        accent: "rgba(255,140,40,0.85)",
        accentHex: 0xff8c28,
        accentCSS: "#ff8c28",
        uiMuted: "rgba(255,140,40,0.35)",
        projects: [
            {
                tag: "REACT / FRAMER",
                title: "Harvest Journal",
                desc: "Editorial-style blog platform with leaf-fall scroll animations and amber color theming.",
            },
        ],
        camFrom: { x: 50, y: -25, z: 25 },
    },
    {
        name: "OCTOBER",
        num: "10",
        theme: "Halloween · Dusk",
        sky1: "#05001a",
        sky2: "#0d0028",
        fogColor: 0x080015,
        fogDensity: 0.022,
        accent: "rgba(160,60,255,0.85)",
        accentHex: 0xa03cff,
        accentCSS: "#a03cff",
        uiMuted: "rgba(160,60,255,0.35)",
        projects: [
            {
                tag: "THREE.JS / HORROR",
                title: "Haunt Experience",
                desc: "Immersive WebGL horror experience with procedural shadow casting and audio sync.",
            },
            {
                tag: "CANVAS / AUDIO",
                title: "Spectral Synth",
                desc: "Audio visualizer using FFT analysis mapped to ghostly particle formations.",
            },
            {
                tag: "NEXT.JS",
                title: "Midnight Market",
                desc: "Dark-mode e-commerce experience for Halloween merchandise with cart animations.",
            },
        ],
        camFrom: { x: -50, y: -25, z: 25 },
    },
    {
        name: "NOVEMBER",
        num: "11",
        theme: "Fog · Gratitude",
        sky1: "#0a0c0e",
        sky2: "#141618",
        fogColor: 0x101214,
        fogDensity: 0.028,
        accent: "rgba(160,180,200,0.75)",
        accentHex: 0xa0b4c8,
        accentCSS: "#a0b4c8",
        uiMuted: "rgba(160,180,200,0.3)",
        projects: [
            {
                tag: "GSAP / SVG",
                title: "Fog Motion",
                desc: "Atmospheric SVG animation library for moody, minimal storytelling sites.",
            },
            {
                tag: "TYPESCRIPT / API",
                title: "Gratitude Log",
                desc: "Minimalist journaling application with emotion-tracking and weekly reflection summaries.",
            },
        ],
        camFrom: { x: 0, y: 0, z: -10 },
    },
    {
        name: "DECEMBER",
        num: "12",
        theme: "Winter · Solstice",
        sky1: "#01081a",
        sky2: "#040f28",
        fogColor: 0x04101e,
        fogDensity: 0.018,
        accent: "rgba(120,200,255,0.85)",
        accentHex: 0x78c8ff,
        accentCSS: "#78c8ff",
        uiMuted: "rgba(120,200,255,0.35)",
        projects: [
            {
                tag: "THREE.JS / SNOW",
                title: "Crystal World",
                desc: "Interactive snow globe renderer with physics-based snowflake accumulation and refraction.",
            },
            {
                tag: "REACT / LOTTIE",
                title: "Advent Calendar",
                desc: "24-door animated advent calendar with daily interactive WebGL surprises.",
            },
        ],
        camFrom: { x: 35, y: 35, z: 40 },
    },
];

// ── THREE.JS SETUP ─────────────────────────────────────────────────────────
const canvas3d = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas3d,
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
});
// Cap pixel ratio at 1.5 for performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
// Disable expensive shadow maps
renderer.shadowMap.enabled = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0d1830, 0.018);

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    500,
);
camera.position.set(0, 2, 28);

// Lights — simplified, no shadow casting
const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambLight);
const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
sunLight.position.set(20, 30, 10);
scene.add(sunLight);
const fillLight = new THREE.PointLight(0x8cbeff, 1.2, 100);
fillLight.position.set(-20, -5, 15);
scene.add(fillLight);

// ── HELPERS ────────────────────────────────────────────────────────────────
function rr(a, b) {
    return a + Math.random() * (b - a);
}
function makeMat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({
        color,
        metalness: opts.m || 0,
        roughness: opts.r !== undefined ? opts.r : 0.8,
        transparent: !!(opts.op || opts.op === 0),
        opacity: opts.op !== undefined ? opts.op : 1,
        side: opts.double ? THREE.DoubleSide : THREE.FrontSide,
        emissive: opts.emit
            ? new THREE.Color(opts.emit)
            : new THREE.Color(0x000000),
        emissiveIntensity: opts.emitI || 0,
    });
}
function makeSphere(r, d = 8) {
    return new THREE.SphereGeometry(r, d, d);
}
function makeBox(w, h, d) {
    return new THREE.BoxGeometry(w, h, d);
}
function makeCone(r, h, s = 7) {
    return new THREE.ConeGeometry(r, h, s);
}
function makeCyl(rt, rb, h, s = 8) {
    return new THREE.CylinderGeometry(rt, rb, h, s);
}
function makeTorus(r, t, rs = 8, ts = 24) {
    return new THREE.TorusGeometry(r, t, rs, ts);
}
function makeOcta(r) {
    return new THREE.OctahedronGeometry(r);
}
function makePlane(w, h, sw = 1, sh = 1) {
    return new THREE.PlaneGeometry(w, h, sw, sh);
}

// ── SKY BACKDROP ────────────────────────────────────────────────────────────
function buildSky(g, c1, c2) {
    const geo = new THREE.SphereGeometry(200, 16, 10);
    geo.scale(-1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
        vertexColors: true,
        side: THREE.BackSide,
    });
    const colors = [];
    const pos = geo.attributes.position;
    const col1 = new THREE.Color(c1),
        col2 = new THREE.Color(c2);
    for (let i = 0; i < pos.count; i++) {
        const y = (pos.getY(i) + 200) / 400;
        const c = col1.clone().lerp(col2, Math.max(0, Math.min(1, y)));
        colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    g.add(new THREE.Mesh(geo, mat));
}

// ── TERRAIN ────────────────────────────────────────────────────────────────
function buildTerrain(g, color, roughness = 0.95) {
    const geo = new THREE.PlaneGeometry(200, 120, 40, 20);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i),
            z = pos.getZ(i);
        pos.setY(
            i,
            Math.sin(x * 0.05) * 2 +
            Math.sin(z * 0.08) * 1.5 +
            Math.sin(x * 0.12 + z * 0.09) * 1 -
            5,
        );
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, makeMat(color, { r: roughness }));
    mesh.position.y = -8;
    g.add(mesh);
    return mesh;
}

// ── PARTICLE HELPER (reusable) ──────────────────────────────────────────────
function makeParticles(g, count, color, size, xr, yr, zr, userData) {
    const geo = new THREE.BufferGeometry();
    const verts = [];
    for (let i = 0; i < count; i++)
        verts.push(rr(xr[0], xr[1]), rr(yr[0], yr[1]), rr(zr[0], zr[1]));
    geo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(verts, 3),
    );
    const pts = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
            color,
            size,
            transparent: true,
            opacity: 0.7,
        }),
    );
    if (userData) pts.userData = userData;
    g.add(pts);
    return pts;
}

// ── MONTH SCENE BUILDERS ───────────────────────────────────────────────────
function buildJanuary(g) {
    buildSky(g, "#010810", "#061530");
    buildTerrain(g, 0x8ab4d4, 0.7);
    const snow = new THREE.Mesh(
        makePlane(200, 120, 1, 1),
        makeMat(0xddeeff, { r: 1.0 }),
    );
    snow.rotation.x = -Math.PI / 2;
    snow.position.y = -7.8;
    g.add(snow);
    // Moon
    const moon = new THREE.Mesh(
        makeSphere(5, 16),
        makeMat(0xeef5ff, { r: 0.9, emit: 0xbbddff, emitI: 0.3 }),
    );
    moon.position.set(-18, 30, -80);
    g.add(moon);
    // Ice crystals
    for (let i = 0; i < 15; i++) {
        const s = rr(0.2, 1.0);
        const crystal = new THREE.Mesh(
            makeOcta(s),
            makeMat(0xaad4ff, { m: 0.8, r: 0.1, op: 0.7 }),
        );
        crystal.position.set(rr(-25, 25), rr(-5, 7), rr(-20, 5));
        crystal.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );
        crystal.userData.spin = { y: rr(0.003, 0.008) };
        g.add(crystal);
    }
    // Snowfall
    makeParticles(g, 300, 0xddeeff, 0.12, [-50, 50], [-15, 28], [-50, 10], {
        snowfall: true,
    });
    // Bare trees
    for (let i = 0; i < 8; i++) {
        const h = rr(3, 7);
        const trunk = new THREE.Mesh(
            makeCyl(0.08, 0.2, h, 5),
            makeMat(0x334455, { r: 0.95 }),
        );
        trunk.position.set(rr(-35, 35), -8 + h / 2, rr(-28, -5));
        g.add(trunk);
    }
}

function buildFebruary(g) {
    buildSky(g, "#0d020e", "#200510");
    buildTerrain(g, 0x3d1020, 0.9);
    const sun = new THREE.Mesh(
        makeSphere(6, 16),
        makeMat(0xff3366, { r: 0.8, emit: 0xff2244, emitI: 0.4 }),
    );
    sun.position.set(10, 20, -70);
    g.add(sun);
    // Floating hearts (toruses)
    for (let i = 0; i < 16; i++) {
        const cols = [0xcc2244, 0xff4466, 0xff8899, 0xff1155];
        const r = rr(0.2, 1.0);
        const t = new THREE.Mesh(
            makeTorus(r, r * 0.35),
            makeMat(cols[Math.floor(Math.random() * cols.length)], {
                m: 0.2,
                r: 0.5,
            }),
        );
        t.position.set(rr(-28, 28), rr(-12, 12), rr(-28, 5));
        t.userData.float = {
            ys: rr(0.003, 0.008),
            p: Math.random() * Math.PI * 2,
        };
        g.add(t);
    }
    // Petals
    for (let i = 0; i < 40; i++) {
        const petal = new THREE.Mesh(
            new THREE.CircleGeometry(rr(0.1, 0.5), 5),
            makeMat([0xff4466, 0xcc2244][Math.floor(Math.random() * 2)], {
                op: 0.7,
                double: true,
            }),
        );
        petal.position.set(rr(-35, 35), rr(-18, 18), rr(-28, 5));
        petal.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );
        petal.userData.float = {
            ys: rr(0.002, 0.006),
            p: Math.random() * Math.PI * 2,
            drift: rr(-0.003, 0.003),
        };
        g.add(petal);
    }
}

function buildMarch(g) {
    buildSky(g, "#041008", "#0c2010");
    buildTerrain(g, 0x2d5520, 0.9);
    // Flowers
    for (let i = 0; i < 20; i++) {
        const cx = rr(-35, 35),
            cy = rr(-7, 2),
            cz = rr(-28, 0);
        const r = rr(0.3, 0.9);
        const center = new THREE.Mesh(
            makeSphere(r * 0.4, 6),
            makeMat([0xffcc00, 0xff8800][Math.floor(Math.random() * 2)], {
                r: 0.7,
            }),
        );
        center.position.set(cx, cy, cz);
        g.add(center);
        for (let j = 0; j < 5; j++) {
            const a = (j / 5) * Math.PI * 2;
            const petal = new THREE.Mesh(
                makeSphere(r * 0.3, 5),
                makeMat(
                    [0xffffff, 0xffccdd, 0xaaffaa][Math.floor(Math.random() * 3)],
                    { r: 0.8 },
                ),
            );
            petal.position.set(
                cx + Math.cos(a) * r * 0.65,
                cy + Math.sin(a) * r * 0.65,
                cz,
            );
            g.add(petal);
        }
    }
    makeParticles(
        g,
        200,
        0xffee88,
        0.07,
        [-50, 50],
        [-10, 20],
        [-40, 10],
        null,
    );
    const sun = new THREE.Mesh(
        makeSphere(7, 16),
        makeMat(0xffee88, { r: 0.5, emit: 0xffdd44, emitI: 0.5 }),
    );
    sun.position.set(20, 35, -90);
    g.add(sun);
}

function buildApril(g) {
    buildSky(g, "#0c0614", "#18101e");
    buildTerrain(g, 0x1a0f24, 0.9);
    // Cherry trees (simplified)
    for (let i = 0; i < 5; i++) {
        const x = rr(-30, 30),
            h = rr(4, 8);
        const trunk = new THREE.Mesh(
            makeCyl(0.15, 0.25, h, 7),
            makeMat(0x4a2a1a, { r: 0.9 }),
        );
        trunk.position.set(x, -8 + h / 2, rr(-22, -3));
        g.add(trunk);
        for (let b = 0; b < 8; b++) {
            const bs = new THREE.Mesh(
                makeSphere(rr(0.6, 1.2), 6),
                makeMat(0xffb8cc, { op: 0.55, r: 0.9 }),
            );
            bs.position.set(
                x + rr(-1.8, 1.8),
                -8 + h + rr(-0.8, 1.5),
                trunk.position.z + rr(-1.5, 1.5),
            );
            g.add(bs);
        }
    }
    // Rain
    for (let i = 0; i < 50; i++) {
        const rain = new THREE.Mesh(
            makeCyl(0.007, 0.007, rr(1, 2), 3),
            makeMat(0x8899cc, { op: 0.2 }),
        );
        rain.position.set(rr(-38, 38), rr(-12, 18), rr(-28, 5));
        rain.rotation.z = 0.15;
        rain.userData.rain = true;
        g.add(rain);
    }
    // Petals
    for (let i = 0; i < 60; i++) {
        const petal = new THREE.Mesh(
            new THREE.CircleGeometry(rr(0.1, 0.4), 4),
            makeMat([0xffb8cc, 0xffaabb][Math.floor(Math.random() * 2)], {
                op: 0.75,
                double: true,
            }),
        );
        petal.position.set(rr(-38, 38), rr(-12, 18), rr(-28, 5));
        petal.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );
        petal.userData.float = {
            ys: rr(0.001, 0.005),
            p: Math.random() * Math.PI * 2,
            drift: rr(-0.005, 0.005),
        };
        g.add(petal);
    }
}

function buildMay(g) {
    buildSky(g, "#0e0c00", "#1e1800");
    buildTerrain(g, 0x4a7020, 0.85);
    for (let i = 0; i < 55; i++) {
        const cols = [
            0xffcc00, 0xff8800, 0xff3366, 0xaa55ff, 0x22bbff, 0xffffff,
        ];
        const stem = new THREE.Mesh(
            makeCyl(0.03, 0.04, rr(0.5, 1.8), 3),
            makeMat(0x338822, { r: 0.9 }),
        );
        const bx = rr(-38, 38),
            bz = rr(-28, 2);
        stem.position.set(bx, -7, bz);
        g.add(stem);
        const flower = new THREE.Mesh(
            makeSphere(rr(0.15, 0.38), 5),
            makeMat(cols[Math.floor(Math.random() * cols.length)], { r: 0.7 }),
        );
        flower.position.set(bx, -6.5 + rr(0.5, 1.8), bz);
        flower.userData.float = {
            ys: rr(0.004, 0.009),
            p: Math.random() * Math.PI * 2,
        };
        g.add(flower);
    }
    const sun = new THREE.Mesh(
        makeSphere(8, 18),
        makeMat(0xffee44, { r: 0.5, emit: 0xffcc00, emitI: 0.6 }),
    );
    sun.position.set(15, 35, -90);
    g.add(sun);
    // Clouds (fewer spheres)
    for (let c = 0; c < 4; c++) {
        for (let b = 0; b < 4; b++) {
            const cloud = new THREE.Mesh(
                makeSphere(rr(2, 4), 7),
                makeMat(0xeeeeff, { op: 0.85, r: 1.0 }),
            );
            cloud.position.set(rr(-35, 35) + b * 3, rr(10, 18), rr(-60, -20));
            g.add(cloud);
        }
    }
}

function buildJune(g) {
    buildSky(g, "#000d1a", "#011828");
    // Simplified ocean — use a time-uniform based shader or just gentle static mesh
    const waveGeo = new THREE.PlaneGeometry(200, 80, 20, 12); // fewer vertices
    waveGeo.rotateX(-Math.PI / 2);
    const waveMat = new THREE.MeshStandardMaterial({
        color: 0x006699,
        metalness: 0.6,
        roughness: 0.15,
        transparent: true,
        opacity: 0.85,
    });
    const wave = new THREE.Mesh(waveGeo, waveMat);
    wave.position.y = -6;
    wave.userData.ocean = true;
    g.add(wave);
    const beach = new THREE.Mesh(
        makePlane(200, 40, 1, 1),
        makeMat(0xddbb88, { r: 1.0 }),
    );
    beach.rotation.x = -Math.PI / 2;
    beach.position.set(0, -7.5, 20);
    g.add(beach);
    const sun = new THREE.Mesh(
        makeSphere(9, 18),
        makeMat(0xff8844, { r: 0.4, emit: 0xff6622, emitI: 0.5 }),
    );
    sun.position.set(0, 12, -80);
    g.add(sun);
    // Fewer bubbles
    for (let i = 0; i < 40; i++) {
        const b = new THREE.Mesh(
            makeSphere(rr(0.06, 0.35), 6),
            makeMat(0x44ccff, { m: 0.7, r: 0.0, op: 0.25 }),
        );
        b.position.set(rr(-28, 28), rr(-8, 8), rr(-28, 5));
        b.userData.float = {
            ys: rr(0.006, 0.015),
            p: Math.random() * Math.PI * 2,
        };
        g.add(b);
    }
    // Palm trees
    for (let i = 0; i < 3; i++) {
        const x = rr(-20, 20);
        const trunk = new THREE.Mesh(
            makeCyl(0.1, 0.2, 5, 7),
            makeMat(0x8b6914, { r: 0.9 }),
        );
        trunk.position.set(x, -5, rr(10, 18));
        g.add(trunk);
        for (let l = 0; l < 6; l++) {
            const a = (l / 6) * Math.PI * 2;
            const leaf = new THREE.Mesh(
                new THREE.PlaneGeometry(3.5, 0.55, 4, 1),
                makeMat(0x228844, { r: 0.9, double: true }),
            );
            leaf.position.set(
                x + Math.cos(a) * 1.8,
                trunk.position.y + 2.2,
                trunk.position.z + Math.sin(a) * 1.8,
            );
            leaf.rotation.y = a;
            leaf.rotation.z = 0.5;
            g.add(leaf);
        }
    }
}

function buildJuly(g) {
    buildSky(g, "#0e0200", "#1e0400");
    buildTerrain(g, 0x1a0800, 0.95);
    // Firework bursts
    for (let burst = 0; burst < 6; burst++) {
        const cx = rr(-22, 22),
            cy = rr(2, 14),
            cz = rr(-28, -5);
        const cols = [0xff4400, 0xff8800, 0xffdd00, 0xff0044, 0xffffff];
        const col = cols[Math.floor(Math.random() * cols.length)];
        for (let s = 0; s < 14; s++) {
            const a = (s / 14) * Math.PI * 2;
            const r = rr(1.5, 5);
            const spark = new THREE.Mesh(
                makeSphere(rr(0.05, 0.16), 4),
                makeMat(col, { r: 0.2, emit: col, emitI: 0.8 }),
            );
            spark.position.set(
                cx + Math.cos(a) * r,
                cy + Math.sin(a) * r * 0.8,
                cz,
            );
            spark.userData.float = {
                ys: rr(0.008, 0.02),
                p: Math.random() * Math.PI * 2,
            };
            g.add(spark);
        }
    }
    makeParticles(
        g,
        500,
        0xffeecc,
        0.1,
        [-100, 100],
        [0, 80],
        [-100, -10],
        null,
    );
}

function buildAugust(g) {
    buildSky(g, "#120800", "#201200");
    const duneGeo = new THREE.PlaneGeometry(200, 120, 30, 20);
    duneGeo.rotateX(-Math.PI / 2);
    const dpos = duneGeo.attributes.position;
    for (let i = 0; i < dpos.count; i++) {
        const x = dpos.getX(i),
            z = dpos.getZ(i);
        dpos.setY(
            i,
            Math.sin(x * 0.04) * 3 + Math.sin(z * 0.06 + x * 0.02) * 2 - 6,
        );
    }
    dpos.needsUpdate = true;
    duneGeo.computeVertexNormals();
    g.add(new THREE.Mesh(duneGeo, makeMat(0xcc8833, { r: 1.0 })));
    const sun = new THREE.Mesh(
        makeSphere(12, 20),
        makeMat(0xffaa22, { r: 0.3, emit: 0xff8800, emitI: 0.8 }),
    );
    sun.position.set(0, 30, -80);
    g.add(sun);
    // Cacti
    for (let i = 0; i < 7; i++) {
        const x = rr(-30, 30),
            h = rr(2, 5),
            z = rr(-26, -3);
        const trunk = new THREE.Mesh(
            makeCyl(0.2, 0.28, h, 8),
            makeMat(0x2a5522, { r: 0.85 }),
        );
        trunk.position.set(x, -8 + h / 2, z);
        g.add(trunk);
        const arm = new THREE.Mesh(
            makeCyl(0.12, 0.15, h * 0.35, 6),
            makeMat(0x2a5522, { r: 0.85 }),
        );
        arm.rotation.z = Math.PI / 2.5;
        arm.position.set(x + 0.8, -8 + h * 0.5, z);
        g.add(arm);
    }
}

function buildSeptember(g) {
    buildSky(g, "#100600", "#1e0e00");
    buildTerrain(g, 0x5a3010, 0.9);
    const leafCols = [
        0xcc4400, 0xdd6600, 0xee8800, 0xff4400, 0xaa3300, 0xdd9900,
    ];
    for (let i = 0; i < 80; i++) {
        const leaf = new THREE.Mesh(
            new THREE.CircleGeometry(rr(0.12, 0.45), 5),
            makeMat(leafCols[Math.floor(Math.random() * leafCols.length)], {
                op: 0.85,
                double: true,
            }),
        );
        leaf.position.set(rr(-38, 38), rr(-12, 18), rr(-32, 5));
        leaf.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );
        leaf.userData.leaf = {
            ys: rr(0.002, 0.007),
            p: Math.random() * Math.PI * 2,
            drift: rr(-0.008, 0.008),
            spin: rr(0.005, 0.02),
        };
        g.add(leaf);
    }
    for (let i = 0; i < 6; i++) {
        const h = rr(4, 9);
        const x = rr(-30, 30);
        const trunk = new THREE.Mesh(
            makeCyl(0.12, 0.22, h, 6),
            makeMat(0x4a2a0a, { r: 0.95 }),
        );
        trunk.position.set(x, -8 + h / 2, rr(-26, -5));
        g.add(trunk);
        const foliage = new THREE.Mesh(
            makeSphere(rr(1.5, 3), 7),
            makeMat(leafCols[Math.floor(Math.random() * leafCols.length)], {
                op: 0.8,
                r: 0.95,
            }),
        );
        foliage.position.set(x, -8 + h + 0.5, trunk.position.z);
        g.add(foliage);
    }
    const moon = new THREE.Mesh(
        makeSphere(7, 16),
        makeMat(0xff9944, { r: 0.5, emit: 0xff7722, emitI: 0.3 }),
    );
    moon.position.set(20, 25, -80);
    g.add(moon);
}

function buildOctober(g) {
    buildSky(g, "#03000a", "#080015");
    buildTerrain(g, 0x0a0018, 0.95);
    const moon = new THREE.Mesh(
        makeSphere(6, 18),
        makeMat(0xddcc88, { r: 0.7, emit: 0xbbaa66, emitI: 0.2 }),
    );
    moon.position.set(-8, 22, -70);
    g.add(moon);
    // Witch trees
    for (let i = 0; i < 7; i++) {
        const h = rr(5, 11);
        const x = rr(-38, 38);
        const trunk = new THREE.Mesh(
            makeCyl(0.08, 0.2, h, 5),
            makeMat(0x111111, { r: 0.95 }),
        );
        trunk.position.set(x, -8 + h / 2, rr(-28, -3));
        g.add(trunk);
    }
    // Bats (simplified — no children wing geometry, just body boxes)
    for (let i = 0; i < 12; i++) {
        const body = new THREE.Mesh(
            makeBox(0.3, 0.15, 0.1),
            makeMat(0x111122, { r: 0.9 }),
        );
        body.position.set(rr(-22, 22), rr(-4, 13), rr(-22, 2));
        body.userData.bat = {
            ys: rr(0.01, 0.018),
            p: Math.random() * Math.PI * 2,
        };
        g.add(body);
    }
    // Purple orbs
    for (let i = 0; i < 20; i++) {
        const orb = new THREE.Mesh(
            makeSphere(rr(0.1, 0.45), 6),
            makeMat(
                [0x8800ff, 0x6600cc, 0xaa44ff][Math.floor(Math.random() * 3)],
                { m: 0.8, r: 0.1, op: 0.5, emit: 0x6600cc, emitI: 0.5 },
            ),
        );
        orb.position.set(rr(-28, 28), rr(-8, 13), rr(-26, 3));
        orb.userData.float = {
            ys: rr(0.004, 0.01),
            p: Math.random() * Math.PI * 2,
        };
        g.add(orb);
    }
    // Pumpkins
    for (let i = 0; i < 4; i++) {
        const r = rr(0.5, 1.2);
        const pumpkin = new THREE.Mesh(
            makeSphere(r, 10),
            makeMat(0xff5500, { r: 0.7 }),
        );
        pumpkin.position.set(rr(-18, 18), -7.5, rr(-14, -1));
        pumpkin.scale.y = 0.8;
        g.add(pumpkin);
        const inner = new THREE.Mesh(
            makeSphere(r * 0.45, 7),
            makeMat(0xff8800, { emit: 0xff8800, emitI: 2.0, r: 0.5 }),
        );
        inner.position.copy(pumpkin.position);
        g.add(inner);
    }
}

function buildNovember(g) {
    buildSky(g, "#060708", "#0e1012");
    buildTerrain(g, 0x1a1a1a, 0.95);
    // Fog volumes
    for (let i = 0; i < 12; i++) {
        const fog = new THREE.Mesh(
            makeSphere(rr(3, 7), 6),
            makeMat(0x8899aa, { op: 0.035, r: 1.0 }),
        );
        fog.position.set(rr(-28, 28), rr(-7, 4), rr(-28, 5));
        fog.userData.float = {
            ys: rr(0.001, 0.003),
            p: Math.random() * Math.PI * 2,
        };
        g.add(fog);
    }
    for (let i = 0; i < 14; i++) {
        const h = rr(3, 8);
        const x = rr(-38, 38);
        const trunk = new THREE.Mesh(
            makeCyl(0.07, 0.16, h, 5),
            makeMat(0x2a2a2a, { r: 0.95 }),
        );
        trunk.position.set(x, -8 + h / 2, rr(-32, -2));
        g.add(trunk);
    }
    const lamp = new THREE.PointLight(0xffaa44, 2.5, 20);
    lamp.position.set(0, 2, 5);
    g.add(lamp);
    const lampSph = new THREE.Mesh(
        makeSphere(0.3, 7),
        makeMat(0xffcc66, { emit: 0xffaa44, emitI: 3, r: 0.1 }),
    );
    lampSph.position.copy(lamp.position);
    g.add(lampSph);
}

function buildDecember(g) {
    buildSky(g, "#000818", "#020f28");
    buildTerrain(g, 0x8ab4d4, 0.7);
    const snow = new THREE.Mesh(
        makePlane(200, 120, 1, 1),
        makeMat(0xddeeff, { r: 1.0 }),
    );
    snow.rotation.x = -Math.PI / 2;
    snow.position.y = -7.7;
    g.add(snow);
    // Aurora
    for (let i = 0; i < 5; i++) {
        const aGeo = new THREE.PlaneGeometry(rr(20, 45), rr(8, 16), 8, 3);
        const aMat = new THREE.MeshBasicMaterial({
            color: [0x00ff88, 0x0088ff, 0xff44aa, 0x44ffcc][i % 4],
            transparent: true,
            opacity: rr(0.04, 0.09),
            side: THREE.DoubleSide,
        });
        const aurora = new THREE.Mesh(aGeo, aMat);
        aurora.position.set(rr(-28, 28), rr(10, 28), -80);
        aurora.rotation.z = rr(-0.3, 0.3);
        aurora.userData.float = {
            ys: rr(0.001, 0.003),
            p: Math.random() * Math.PI * 2,
        };
        g.add(aurora);
    }
    const star = new THREE.Mesh(
        makeOcta(1.4),
        makeMat(0xffffaa, { m: 1.0, r: 0.0, emit: 0xffee66, emitI: 2.0 }),
    );
    star.position.set(0, 14, -8);
    star.userData.spin = { y: 0.02, x: 0.01 };
    g.add(star);
    const oCols = [0xff2233, 0x22cc66, 0xddaa00, 0x4488ff, 0xff66aa];
    for (let i = 0; i < 25; i++) {
        const orb = new THREE.Mesh(
            makeSphere(rr(0.2, 0.7), 8),
            makeMat(oCols[Math.floor(Math.random() * 5)], { m: 0.9, r: 0.05 }),
        );
        orb.position.set(rr(-28, 28), rr(-8, 13), rr(-26, 5));
        orb.userData.float = {
            ys: rr(0.003, 0.008),
            p: Math.random() * Math.PI * 2,
        };
        g.add(orb);
    }
    makeParticles(g, 400, 0xddeeff, 0.1, [-60, 60], [-12, 28], [-50, 12], {
        snowfall: true,
    });
    // Fir trees
    [
        [0, -8, 8],
        [-10, -8, 3],
        [12, -8, 5],
    ].forEach(([tx, ty, tz]) => {
        const trunk = new THREE.Mesh(
            makeCyl(0.18, 0.25, 2, 7),
            makeMat(0x4a2a1a, { r: 0.9 }),
        );
        trunk.position.set(tx, ty + 1, tz);
        g.add(trunk);
        [3.2, 2.3, 1.5].forEach((rs, li) => {
            const layer = new THREE.Mesh(
                makeCone(rs, 2.0, 7),
                makeMat(0x1a4820, { r: 0.85 }),
            );
            layer.position.set(tx, ty + 2 + li * 1.7, tz);
            g.add(layer);
        });
    });
}

const BUILDERS = [
    buildJanuary,
    buildFebruary,
    buildMarch,
    buildApril,
    buildMay,
    buildJune,
    buildJuly,
    buildAugust,
    buildSeptember,
    buildOctober,
    buildNovember,
    buildDecember,
];
const monthGroups = [];
BUILDERS.forEach((fn, i) => {
    const grp = new THREE.Group();
    grp.visible = false;
    fn(grp);
    scene.add(grp);
    monthGroups.push(grp);
});
monthGroups[0].visible = true;

// ── DOM MONTH LABEL — no canvas texture, just a CSS element ───────────────
const monthLabelEl = document.getElementById("month-label");

function updateMonthLabel(name, accentCSS) {
    monthLabelEl.textContent = name;
    monthLabelEl.style.setProperty("color", accentCSS);
    document.documentElement.style.setProperty("--label-color", accentCSS);
    document.documentElement.style.setProperty(
        "--label-glow",
        accentCSS.replace(")", ", 0.25)").replace("rgb", "rgba"),
    );
}

// ── STATE ──────────────────────────────────────────────────────────────────
let currentMonth = 0;
let isTransitioning = false;
let siteEntered = false;

// ── THEME APPLICATION ──────────────────────────────────────────────────────
function applyTheme(m) {
    document.documentElement.style.setProperty("--ui-accent", m.accentCSS);
    document.documentElement.style.setProperty("--ui-muted", m.uiMuted);
    document.getElementById("month-counter").textContent = `${m.num} / 12`;
    document.getElementById("theme-tag").textContent = m.theme;
    scene.fog.color.setHex(m.fogColor);
    scene.fog.density = m.fogDensity;
    renderer.setClearColor(m.fogColor, 1);
    const col = new THREE.Color(m.accentHex);
    fillLight.color.copy(col);
    document
        .querySelectorAll(".nav-dot")
        .forEach((d, i) => d.classList.toggle("active", i === currentMonth));
    updateMonthLabel(m.name, m.accentCSS);
}

// ── TRANSITION ─────────────────────────────────────────────────────────────
function goToMonth(idx) {
    if (isTransitioning || idx === currentMonth) return;
    if (idx < 0 || idx > 11) return;
    isTransitioning = true;
    const m = MONTHS[idx];
    const cf = m.camFrom;
    const tl = gsap.timeline({
        onComplete: () => {
            currentMonth = idx;
            isTransitioning = false;
            document.getElementById("projects-btn").classList.add("visible");
        },
    });
    tl.to("#theme-tag", {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
    });
    tl.to(
        monthLabelEl,
        { opacity: 0, scale: 0.9, duration: 0.25, ease: "power2.in" },
        "<",
    );
    tl.call(() => {
        monthGroups[currentMonth].visible = false;
        monthGroups[idx].visible = true;
        applyTheme(m);
        camera.position.set(cf.x, cf.y, cf.z);
        camera.lookAt(0, 0, 0);
        gsap.set(monthLabelEl, { scale: 1.1 });
    });
    tl.to(camera.position, {
        x: 0,
        y: 2,
        z: 28,
        duration: 1.2,
        ease: "power3.out",
    });
    tl.to(
        camera.rotation,
        { x: 0, y: 0, z: 0, duration: 1.0, ease: "power2.out" },
        "<",
    );
    tl.to(
        monthLabelEl,
        { opacity: 0.92, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
        "-=0.4",
    );
    tl.to(
        "#theme-tag",
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
        "-=0.4",
    );
}

// ── SCROLL ─────────────────────────────────────────────────────────────────
const scrollEl = document.getElementById("scroll-driver");
scrollEl.addEventListener("scroll", () => {
    if (!siteEntered) return;
    const prog =
        scrollEl.scrollTop / (scrollEl.scrollHeight - scrollEl.clientHeight);
    document.getElementById("progress").style.width = prog * 100 + "%";
    const idx = Math.min(11, Math.floor(prog * 12));
    if (idx !== currentMonth && !isTransitioning) goToMonth(idx);
});

// ── NAV DOTS ────────────────────────────────────────────────────────────────
const navDots = document.getElementById("nav-dots");
MONTHS.forEach((m, i) => {
    const btn = document.createElement("button");
    btn.className = "nav-dot" + (i === 0 ? " active" : "");
    btn.title = m.name;
    btn.addEventListener("click", () => {
        if (!siteEntered) return;
        const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
        scrollEl.scrollTo({
            top: (i / 12) * maxScroll + 1,
            behavior: "smooth",
        });
    });
    navDots.appendChild(btn);
});

// ── PROJECTS OVERLAY ────────────────────────────────────────────────────────
function openProjects() {
    const m = MONTHS[currentMonth];
    document.getElementById("overlay-header").textContent = m.name;
    document.getElementById("overlay-subhead").textContent = m.theme;
    document.getElementById("overlay-header").style.color = m.accentCSS;
    const proj = document.getElementById("overlay-projects");
    proj.innerHTML = "";
    if (m.projects && m.projects.length > 0) {
        m.projects.forEach((p) => {
            proj.innerHTML += `<div class="project-card"><div class="card-tag">${p.tag}</div><div class="card-title">${p.title}</div><div class="card-desc">${p.desc}</div></div>`;
        });
    } else {
        proj.innerHTML =
            '<div id="overlay-empty">no projects yet — check back soon</div>';
    }
    document.getElementById("projects-overlay").classList.add("open");
    document.getElementById("close-btn").style.display = "block";
}
function closeProjects() {
    document.getElementById("projects-overlay").classList.remove("open");
    document.getElementById("close-btn").style.display = "none";
}
window.openProjects = openProjects;
window.closeProjects = closeProjects;

// ── INTRO ──────────────────────────────────────────────────────────────────
function enterSite() {
    siteEntered = true;
    gsap.to("#intro", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
            document.getElementById("intro").style.display = "none";
        },
    });
    gsap.from("#ui", {
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power1.out",
    });
    gsap.to("#projects-btn", { opacity: 1, duration: 0.5, delay: 1.1 });
    setTimeout(() => {
        document.getElementById("projects-btn").classList.add("visible");
        applyTheme(MONTHS[0]);
    }, 1100);
}
window.enterSite = enterSite;

window.addEventListener("load", () => {
    applyTheme(MONTHS[0]);
    renderer.setClearColor(0x0d1830, 1);
    gsap.from("#intro-name", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.3,
        ease: "expo.out",
    });
    gsap.from("#intro-title", {
        opacity: 0,
        duration: 1,
        delay: 0.75,
        ease: "power1.out",
    });
    gsap.from("#intro-sub", {
        opacity: 0,
        duration: 1,
        delay: 1.0,
        ease: "power1.out",
    });
    gsap.from("#enter-btn", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 1.3,
        ease: "back.out(1.3)",
    });
});

// ── CURSOR ─────────────────────────────────────────────────────────────────
const cur = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + "px";
    cur.style.top = my + "px";
});
(function tickCursor() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(tickCursor);
})();
document.querySelectorAll("button,a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        ring.style.width = "54px";
        ring.style.height = "54px";
        ring.style.opacity = "0.6";
    });
    el.addEventListener("mouseleave", () => {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.opacity = "1";
    });
});

// ── ANIMATION LOOP ─────────────────────────────────────────────────────────
const clock = new THREE.Clock();
let oceanTimeAcc = 0;

function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const t = clock.elapsedTime;
    const grp = monthGroups[currentMonth];

    grp.children.forEach((obj) => {
        if (obj.userData.float) {
            const f = obj.userData.float;
            obj.position.y += Math.sin(t * f.ys * 60 + f.p) * 0.002;
            if (f.drift)
                obj.position.x += Math.sin(t * 0.3 + f.p) * f.drift * 0.15;
        }
        if (obj.userData.leaf) {
            const l = obj.userData.leaf;
            obj.position.y -= l.ys * 0.1;
            obj.position.x += Math.sin(t * 0.5 + l.p) * l.drift * 0.15;
            obj.rotation.z += l.spin;
            if (obj.position.y < -15) obj.position.y = 17;
        }
        if (obj.userData.rain) {
            obj.position.y -= 0.08;
            if (obj.position.y < -15) obj.position.y = 18;
        }
        if (obj.userData.spin) {
            if (obj.userData.spin.y) obj.rotation.y += obj.userData.spin.y;
            if (obj.userData.spin.x) obj.rotation.x += obj.userData.spin.x;
        }
        if (obj.userData.snowfall) {
            const pos = obj.geometry.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                pos.setY(i, pos.getY(i) - 0.018);
                if (pos.getY(i) < -14) pos.setY(i, 26);
            }
            pos.needsUpdate = true;
        }
        if (obj.userData.bat) {
            const b = obj.userData.bat;
            obj.position.y += Math.sin(t * b.ys * 60 + b.p) * 0.003;
            obj.rotation.y += 0.007;
        }
        if (obj.userData.ocean) {
            // Only update ocean vertices every other frame for perf
            if (Math.floor(t * 60) % 2 === 0) {
                const pos = obj.geometry.attributes.position;
                for (let i = 0; i < pos.count; i++) {
                    const x = pos.getX(i),
                        z = pos.getZ(i);
                    pos.setY(
                        i,
                        Math.sin(x * 0.28 + t) * 0.55 +
                        Math.sin(z * 0.38 + t * 1.1) * 0.35,
                    );
                }
                pos.needsUpdate = true;
                obj.geometry.computeVertexNormals();
            }
        }
    });

    // Gentle scene sway
    grp.rotation.y = Math.sin(t * 0.12) * 0.04;
    grp.rotation.x = Math.sin(t * 0.09) * 0.014;

    // Month label float (CSS transform via JS)
    monthLabelEl.style.transform = `translate(-50%, calc(-50% + ${Math.sin(t * 0.4) * 5}px))`;

    sunLight.intensity = 1.7 + Math.sin(t * 0.6) * 0.3;
    renderer.render(scene, camera);
}
animate();

// ── RESIZE ─────────────────────────────────────────────────────────────────
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});