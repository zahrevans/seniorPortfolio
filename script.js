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
        projects: {
            sophomore: [
                // { tag: "REACT / THREE.JS", title: "Aurora Dashboard", desc: "Real-time data visualization with particle-based rendering." },
            ],
            junior: [
                // { tag: "NEXT.JS / API", title: "Frost Commerce", desc: "E-commerce platform built for winter seasonal drops." },
            ],
            senior: [
                // { tag: "THREE.JS", title: "Crystal World", desc: "Interactive snow globe renderer." },
            ],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [
                { tag: "HTML / CSS", title: "Summer Tainment", desc: "Create a website to describe what you did over the summer", link: "https://zahrevans.github.io/Summer-taiment/" }

            ],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [
                { tag: "HTML / CSS", title: "Look Ma' I'm Famous", desc: "Create an autobiographical website for a Famous Historical Figure (born before 1900).", link: "https://zahrevans.github.io/LookMaImFamous/" }
            ],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
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
        projects: {
            sophomore: [],
            junior: [],
            senior: [],
        },
        camFrom: { x: 35, y: 35, z: 40 },
    },
];

// ── THREE.JS SETUP ─────────────────────────────────────────────────────────
const canvas3d = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas3d,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputEncoding = THREE.sRGBEncoding;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0d1830, 0.018);

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    500,
);
camera.position.set(0, 2, 28);

const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambLight);
const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
sunLight.position.set(20, 30, 10);
scene.add(sunLight);
const fillLight = new THREE.PointLight(0x8cbeff, 1.2, 100);
fillLight.position.set(-20, -5, 15);
scene.add(fillLight);

// ── PROCEDURAL ENVIRONMENT MAP
const pmrem = new THREE.PMREMGenerator(renderer);
pmrem.compileEquirectangularShader();
function rebuildEnvMap(topHex, botHex) {
    const c = document.createElement("canvas");
    c.width = 256; c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createLinearGradient(0, 0, 0, 128);
    g.addColorStop(0, topHex);
    g.addColorStop(0.5, topHex);
    g.addColorStop(1, botHex);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 128);
    const grd = ctx.createRadialGradient(180, 40, 0, 180, 40, 60);
    grd.addColorStop(0, "rgba(255,255,255,0.9)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 256, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    const env = pmrem.fromEquirectangular(tex).texture;
    tex.dispose();
    if (scene.environment) scene.environment.dispose();
    scene.environment = env;
}
rebuildEnvMap("#0a1e3d", "#020d1f");

// ── POST-PROCESSING
const composer = new THREE.EffectComposer(renderer);
composer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
composer.setSize(window.innerWidth, window.innerHeight);

const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.85, 0.6, 0.25,
);
composer.addPass(bloomPass);

const FinishingShader = {
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uVignette: { value: 1.15 },
        uGrain: { value: 0.04 },
        uTint: { value: new THREE.Color(0xffffff) },
        uTintMix: { value: 0.0 },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uVignette;
        uniform float uGrain;
        uniform vec3 uTint;
        uniform float uTintMix;
        varying vec2 vUv;
        float rand(vec2 co) {
            return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }
        void main() {
            vec4 col = texture2D(tDiffuse, vUv);
            vec2 c = vUv - 0.5;
            float v = 1.0 - dot(c, c) * uVignette;
            v = clamp(v, 0.0, 1.0);
            col.rgb *= mix(0.55, 1.0, v);
            float g = (rand(vUv + fract(uTime)) - 0.5) * uGrain;
            col.rgb += g;
            col.rgb = mix(col.rgb, col.rgb * uTint, uTintMix);
            gl_FragColor = col;
        }`,
};
const finishingPass = new THREE.ShaderPass(FinishingShader);
finishingPass.renderToScreen = true;
composer.addPass(finishingPass);

// ── ATMOSPHERIC SHADER SKY
const SkyShader = {
    uniforms: {
        uTime: { value: 0 },
        uTop: { value: new THREE.Color(0x020d1f) },
        uHorizon: { value: new THREE.Color(0x0a1e3d) },
        uGround: { value: new THREE.Color(0x010305) },
        uSunDir: { value: new THREE.Vector3(0.4, 0.25, -0.85).normalize() },
        uSunColor: { value: new THREE.Color(0xffffff) },
        uSunSize: { value: 0.985 },
        uSunIntensity: { value: 1.2 },
        uCloudiness: { value: 0.35 },
        uCloudColor: { value: new THREE.Color(0xffffff) },
    },
    vertexShader: `
        varying vec3 vWorldDir;
        void main() {
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vWorldDir = normalize(wp.xyz - cameraPosition);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform float uSunSize;
        uniform float uSunIntensity;
        uniform float uCloudiness;
        uniform vec3 uCloudColor;
        varying vec3 vWorldDir;

        float hash(vec3 p) {
            p = fract(p * 0.3183099 + 0.1);
            p *= 17.0;
            return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }
        float noise(vec3 x) {
            vec3 i = floor(x);
            vec3 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(hash(i+vec3(0,0,0)), hash(i+vec3(1,0,0)), f.x),
                           mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
                       mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
                           mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
        }
        float fbm(vec3 p) {
            float v = 0.0; float a = 0.5;
            for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
            return v;
        }

        void main() {
            vec3 dir = normalize(vWorldDir);
            float h = dir.y;
            vec3 sky;
            if (h < 0.0) {
                sky = mix(uHorizon, uGround, clamp(-h * 1.5, 0.0, 1.0));
            } else {
                float t = pow(clamp(h, 0.0, 1.0), 0.55);
                sky = mix(uHorizon, uTop, t);
            }
            float sun = max(dot(dir, normalize(uSunDir)), 0.0);
            float disk = smoothstep(uSunSize, uSunSize + 0.005, sun);
            float halo = pow(sun, 8.0) * 0.35 + pow(sun, 32.0) * 0.6;
            sky += uSunColor * (disk * uSunIntensity * 2.5 + halo * uSunIntensity);
            if (h > -0.05 && uCloudiness > 0.001) {
                vec3 cp = dir / max(dir.y, 0.05);
                float c = fbm(cp * 1.8 + vec3(uTime * 0.015, 0.0, uTime * 0.01));
                c = smoothstep(0.55 - uCloudiness * 0.35, 0.85, c);
                float fade = smoothstep(-0.05, 0.15, h);
                sky = mix(sky, uCloudColor, c * uCloudiness * fade);
            }
            gl_FragColor = vec4(sky, 1.0);
        }`,
};

const skyMat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(SkyShader.uniforms),
    vertexShader: SkyShader.vertexShader,
    fragmentShader: SkyShader.fragmentShader,
    side: THREE.BackSide,
    depthWrite: false,
});
const skyMesh = new THREE.Mesh(new THREE.SphereGeometry(300, 32, 16), skyMat);
skyMesh.renderOrder = -1000;
scene.add(skyMesh);

const SKY_CONFIGS = [
    { top: 0x05101f, horizon: 0x162a4a, ground: 0x010407, sunDir: [-0.25, 0.18, -0.95], sunColor: 0xbcd6ff, sunSize: 0.992, sunI: 0.85, cloudiness: 0.55, cloudColor: 0xb8c8e0, tint: 0xc8d8ff, tintMix: 0.18, bloom: 0.8 },
    { top: 0x180420, horizon: 0x6b1838, ground: 0x100208, sunDir: [0.5, 0.08, -0.86], sunColor: 0xff6890, sunSize: 0.988, sunI: 1.0, cloudiness: 0.35, cloudColor: 0xff9cb6, tint: 0xffb0c8, tintMix: 0.25, bloom: 0.95 },
    { top: 0x0d2a18, horizon: 0x4a7a3a, ground: 0x081208, sunDir: [0.3, 0.4, -0.86], sunColor: 0xfff4c0, sunSize: 0.99, sunI: 0.5, cloudiness: 0.5, cloudColor: 0xeaf6d8, tint: 0xd8ffd0, tintMix: 0.12, bloom: 0.45 },
    { top: 0x1f1428, horizon: 0x55304a, ground: 0x0c0814, sunDir: [-0.4, 0.3, -0.85], sunColor: 0xffd0e8, sunSize: 0.993, sunI: 0.4, cloudiness: 0.85, cloudColor: 0xc09ab8, tint: 0xeacde0, tintMix: 0.18, bloom: 0.5 },
    { top: 0x1a2a1f, horizon: 0xc0884a, ground: 0x140e08, sunDir: [0.6, 0.15, -0.78], sunColor: 0xffd380, sunSize: 0.985, sunI: 0.6, cloudiness: 0.3, cloudColor: 0xfff0c8, tint: 0xffe0a8, tintMix: 0.22, bloom: 0.55 },
    { top: 0x081a4a, horizon: 0x4a90c8, ground: 0x041020, sunDir: [0.2, 0.55, -0.82], sunColor: 0xfff8e0, sunSize: 0.988, sunI: 1.0, cloudiness: 0.25, cloudColor: 0xffffff, tint: 0xd0e8ff, tintMix: 0.14, bloom: 0.8 },
    { top: 0x18051a, horizon: 0xc83820, ground: 0x100208, sunDir: [-0.45, 0.1, -0.88], sunColor: 0xffa040, sunSize: 0.987, sunI: 0.6, cloudiness: 0.4, cloudColor: 0xff8050, tint: 0xffb070, tintMix: 0.28, bloom: 0.6 },
    { top: 0x4a3818, horizon: 0xd89858, ground: 0x281408, sunDir: [0.55, 0.25, -0.79], sunColor: 0xfff0c0, sunSize: 0.982, sunI: 0.8, cloudiness: 0.1, cloudColor: 0xffe8c0, tint: 0xffd890, tintMix: 0.3, bloom: 0.7 },
    { top: 0x1a0d04, horizon: 0xa8581c, ground: 0x100604, sunDir: [-0.35, 0.18, -0.92], sunColor: 0xffb060, sunSize: 0.988, sunI: 1.3, cloudiness: 0.45, cloudColor: 0xd89058, tint: 0xffb878, tintMix: 0.25, bloom: 1.05 },
    { top: 0x100418, horizon: 0x3c1230, ground: 0x080208, sunDir: [0.3, 0.05, -0.95], sunColor: 0xff6028, sunSize: 0.99, sunI: 1.0, cloudiness: 0.65, cloudColor: 0x5a2848, tint: 0xb060a0, tintMix: 0.3, bloom: 1.25 },
    { top: 0x1a1815, horizon: 0x6a5a48, ground: 0x100c08, sunDir: [-0.2, 0.2, -0.96], sunColor: 0xffe8b8, sunSize: 0.995, sunI: 0.7, cloudiness: 0.95, cloudColor: 0x9a8870, tint: 0xc8b898, tintMix: 0.22, bloom: 0.85 },
    { top: 0x020810, horizon: 0x0a3060, ground: 0x010305, sunDir: [0.0, 0.08, -0.99], sunColor: 0xd0e8ff, sunSize: 0.993, sunI: 0.7, cloudiness: 0.6, cloudColor: 0x6080a0, tint: 0xa0c0ff, tintMix: 0.2, bloom: 0.9 },
];

function applySkyConfig(idx) {
    const cfg = SKY_CONFIGS[idx];
    if (!cfg) return;
    const u = skyMat.uniforms;
    u.uTop.value.setHex(cfg.top);
    u.uHorizon.value.setHex(cfg.horizon);
    u.uGround.value.setHex(cfg.ground);
    u.uSunDir.value.set(...cfg.sunDir).normalize();
    u.uSunColor.value.setHex(cfg.sunColor);
    u.uSunSize.value = cfg.sunSize;
    u.uSunIntensity.value = cfg.sunI;
    u.uCloudiness.value = cfg.cloudiness;
    u.uCloudColor.value.setHex(cfg.cloudColor);
    finishingPass.uniforms.uTint.value.setHex(cfg.tint);
    finishingPass.uniforms.uTintMix.value = cfg.tintMix;
    bloomPass.strength = 0.7 * cfg.bloom;
    const topHex = "#" + cfg.top.toString(16).padStart(6, "0");
    const horHex = "#" + cfg.horizon.toString(16).padStart(6, "0");
    rebuildEnvMap(topHex, horHex);
}
applySkyConfig(0);

// ── BETTER PARTICLE TEXTURE
const _particleCanvas = (() => {
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.4, "rgba(255,255,255,0.55)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.encoding = THREE.sRGBEncoding;
    return t;
})();

// ── HELPERS
function rr(a, b) { return a + Math.random() * (b - a); }
function makeMat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({
        color,
        metalness: opts.m || 0,
        roughness: opts.r !== undefined ? opts.r : 0.8,
        transparent: !!(opts.op || opts.op === 0),
        opacity: opts.op !== undefined ? opts.op : 1,
        side: opts.double ? THREE.DoubleSide : THREE.FrontSide,
        emissive: opts.emit ? new THREE.Color(opts.emit) : new THREE.Color(0x000000),
        emissiveIntensity: opts.emitI || 0,
    });
}
function makeSphere(r, d = 8) { return new THREE.SphereGeometry(r, d, d); }
function makeBox(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function makeCone(r, h, s = 7) { return new THREE.ConeGeometry(r, h, s); }
function makeCyl(rt, rb, h, s = 8) { return new THREE.CylinderGeometry(rt, rb, h, s); }
function makeTorus(r, t, rs = 8, ts = 24) { return new THREE.TorusGeometry(r, t, rs, ts); }
function makeOcta(r) { return new THREE.OctahedronGeometry(r); }
function makePlane(w, h, sw = 1, sh = 1) { return new THREE.PlaneGeometry(w, h, sw, sh); }

// ── SKY BACKDROP
function buildSky(g, c1, c2) {
    const geo = new THREE.SphereGeometry(195, 16, 10);
    geo.scale(-1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, transparent: true, opacity: 0.0, depthWrite: false });
    const colors = [];
    const pos = geo.attributes.position;
    const col1 = new THREE.Color(c1), col2 = new THREE.Color(c2);
    for (let i = 0; i < pos.count; i++) {
        const y = (pos.getY(i) + 200) / 400;
        const c = col1.clone().lerp(col2, Math.max(0, Math.min(1, y)));
        colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    g.add(new THREE.Mesh(geo, mat));
}

// ── TERRAIN
function buildTerrain(g, color, roughness = 0.95) {
    const geo = new THREE.PlaneGeometry(200, 120, 40, 20);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.05) * 2 + Math.sin(z * 0.08) * 1.5 + Math.sin(x * 0.12 + z * 0.09) * 1 - 5);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, makeMat(color, { r: roughness }));
    mesh.position.y = -8;
    g.add(mesh);
    return mesh;
}

// ── PARTICLE HELPER
function makeParticles(g, count, color, size, xr, yr, zr, userData) {
    const geo = new THREE.BufferGeometry();
    const verts = [];
    for (let i = 0; i < count; i++)
        verts.push(rr(xr[0], xr[1]), rr(yr[0], yr[1]), rr(zr[0], zr[1]));
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    const isAdditive = userData && (userData.snowfall || userData.firefly || userData.spark);
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
        color, size: size * 1.4, map: _particleCanvas, transparent: true, opacity: 0.85,
        depthWrite: false, sizeAttenuation: true,
        blending: isAdditive ? THREE.AdditiveBlending : THREE.NormalBlending, alphaTest: 0.01,
    }));
    if (userData) pts.userData = userData;
    g.add(pts);
    return pts;
}

// ── SCENE OBJECT HELPERS
function _bareTree(g, x, z, h, col) {
    const mat = makeMat(col, { r: 0.95 });
    const trunk = new THREE.Mesh(makeCyl(0.06, 0.2, h, 7), mat);
    trunk.position.set(x, -8 + h / 2, z);
    g.add(trunk);
    for (let b = 0; b < 3; b++) {
        const ba = (b / 3) * Math.PI * 2 + rr(-0.3, 0.3);
        const bLen = h * rr(0.38, 0.55);
        const br = new THREE.Mesh(makeCyl(0.02, 0.07, bLen, 5), mat);
        br.position.set(x + Math.cos(ba) * bLen * 0.4, -8 + h * 0.58 + rr(0, 0.6), z + Math.sin(ba) * bLen * 0.4);
        br.rotation.z = Math.cos(ba) * 0.6;
        br.rotation.x = Math.sin(ba) * 0.6;
        g.add(br);
        for (let t = 0; t < 3; t++) {
            const ta = ba + rr(-1.0, 1.0);
            const tl = bLen * rr(0.28, 0.48);
            const tw = new THREE.Mesh(makeCyl(0.005, 0.02, tl, 4), mat);
            tw.position.set(
                x + Math.cos(ba) * bLen * 0.7 + Math.cos(ta) * tl * 0.4,
                -8 + h * 0.65 + rr(0.2, 1.4),
                z + Math.sin(ba) * bLen * 0.7 + Math.sin(ta) * tl * 0.4,
            );
            tw.rotation.z = Math.cos(ta) * 0.85;
            tw.rotation.x = Math.sin(ta) * 0.85;
            g.add(tw);
        }
    }
}

function _firTree(g, x, y, z, h, col, snow) {
    const trunkH = h * 0.3;
    const trunk = new THREE.Mesh(makeCyl(0.1, 0.22, trunkH, 7), makeMat(0x3a1f0a, { r: 0.95 }));
    trunk.position.set(x, y + trunkH / 2, z);
    g.add(trunk);
    const layers = Math.round(rr(3, 5));
    for (let l = 0; l < layers; l++) {
        const t = layers > 1 ? l / (layers - 1) : 0;
        const rad = h * (0.44 - t * 0.3);
        const lh = h * 0.3;
        const cone = new THREE.Mesh(makeCone(rad, lh, 8), makeMat(col, { r: 0.85 }));
        cone.position.set(x, y + trunkH + l * (h * 0.22), z);
        g.add(cone);
        if (snow && Math.random() > 0.4) {
            const cap = new THREE.Mesh(makeCone(rad * 0.5, lh * 0.3, 7), makeMat(0xddeeff, { r: 1.0, op: 0.88 }));
            cap.position.set(x, y + trunkH + l * (h * 0.22) + lh * 0.55, z);
            g.add(cap);
        }
    }
}

function _leafTree(g, x, z, h, canopyCol, trunkCol) {
    const trunk = new THREE.Mesh(makeCyl(0.1, 0.22, h, 7), makeMat(trunkCol || 0x4a2a0a, { r: 0.95 }));
    trunk.position.set(x, -8 + h / 2, z);
    g.add(trunk);
    const blobN = Math.round(rr(5, 9));
    for (let c = 0; c < blobN; c++) {
        const a = (c / blobN) * Math.PI * 2 + rr(-0.3, 0.3);
        const r = rr(0.2, 1.1);
        const blob = new THREE.Mesh(makeSphere(rr(1.1, 2.2), 7), makeMat(canopyCol, { r: 0.88, op: rr(0.82, 0.98) }));
        blob.position.set(x + Math.cos(a) * r, -8 + h + rr(-0.3, 1.0), z + Math.sin(a) * r);
        g.add(blob);
    }
}

function _cherryTree(g, x, z, h, col) {
    const mat = makeMat(0x3d1a0a, { r: 0.9 });
    const trunk = new THREE.Mesh(makeCyl(0.1, 0.22, h, 7), mat);
    trunk.position.set(x, -8 + h / 2, z);
    g.add(trunk);
    for (let b = 0; b < 4; b++) {
        const ba = (b / 4) * Math.PI * 2;
        const bl = h * rr(0.45, 0.65);
        const branch = new THREE.Mesh(makeCyl(0.025, 0.08, bl, 5), mat);
        branch.position.set(x + Math.cos(ba) * bl * 0.38, -8 + h * 0.62, z + Math.sin(ba) * bl * 0.38);
        branch.rotation.z = Math.cos(ba) * 0.52;
        branch.rotation.x = Math.sin(ba) * 0.52;
        g.add(branch);
    }
    for (let c = 0; c < Math.round(rr(10, 16)); c++) {
        const a = Math.random() * Math.PI * 2;
        const r = rr(0.1, 1.7);
        const blob = new THREE.Mesh(makeSphere(rr(0.6, 1.4), 6), makeMat(col || 0xffb8cc, { r: 0.88, op: rr(0.4, 0.65) }));
        blob.position.set(x + Math.cos(a) * r, -8 + h + rr(-0.5, 1.3), z + Math.sin(a) * r);
        g.add(blob);
    }
}

function _palmTree(g, x, z, lean) {
    const h = rr(5, 8);
    const segs = 7;
    for (let s = 0; s < segs; s++) {
        const seg = new THREE.Mesh(makeCyl(0.07, 0.14, h / segs, 7), makeMat(0x7a5530, { r: 0.9 }));
        seg.position.set(x + (lean || 0) * s * 0.12, -8 + (s + 0.5) * (h / segs), z);
        seg.rotation.z = (lean || 0) * 0.06;
        g.add(seg);
    }
    const topX = x + (lean || 0) * segs * 0.12;
    const topY = -8 + h;
    for (let l = 0; l < 8; l++) {
        const a = (l / 8) * Math.PI * 2;
        const leaf = new THREE.Mesh(new THREE.PlaneGeometry(rr(2.8, 4.5), rr(0.35, 0.6), 5, 1), makeMat(0x1a6a22, { r: 0.85, double: true }));
        leaf.position.set(topX + Math.cos(a) * 1.5, topY + rr(0.1, 0.7), z + Math.sin(a) * 1.5);
        leaf.rotation.y = a;
        leaf.rotation.z = rr(0.4, 0.75);
        g.add(leaf);
    }
    for (let c = 0; c < 3; c++) {
        const na = (c / 3) * Math.PI * 2;
        const nut = new THREE.Mesh(makeSphere(0.2, 6), makeMat(0x5a3a0a, { r: 0.8 }));
        nut.position.set(topX + Math.cos(na) * 0.45, topY - 0.35, z + Math.sin(na) * 0.45);
        g.add(nut);
    }
}

function _cactus(g, x, z, h) {
    const mat = makeMat(0x2a6622, { r: 0.82 });
    const body = new THREE.Mesh(makeCyl(0.2, 0.3, h, 9), mat);
    body.position.set(x, -8 + h / 2, z);
    g.add(body);
    const arms = Math.random() > 0.3 ? 2 : 1;
    for (let a = 0; a < arms; a++) {
        const side = a === 0 ? 1 : -1;
        const aty = -8 + h * rr(0.42, 0.62);
        const alen = h * rr(0.28, 0.44);
        const horiz = new THREE.Mesh(makeCyl(0.09, 0.13, alen, 7), mat);
        horiz.rotation.z = Math.PI / 2;
        horiz.position.set(x + side * alen / 2, aty, z);
        g.add(horiz);
        const vert = new THREE.Mesh(makeCyl(0.07, 0.1, alen * 0.7, 7), mat);
        vert.position.set(x + side * alen, aty + alen * 0.35, z);
        g.add(vert);
    }
}

function _pumpkin(g, x, z) {
    const s = rr(0.7, 1.4);
    for (let p = -1; p <= 1; p++) {
        const lobe = new THREE.Mesh(makeSphere(s * 0.72, 10), makeMat(0xdd5500, { r: 0.65 }));
        lobe.scale.set(0.72, 0.82, 0.85);
        lobe.position.set(x + p * s * 0.42, -7.4 + s * 0.42, z);
        g.add(lobe);
    }
    const stem = new THREE.Mesh(makeCyl(0.05, 0.09, s * 0.32, 5), makeMat(0x2a4a10, { r: 0.8 }));
    stem.position.set(x, -7.4 + s * 0.9, z);
    g.add(stem);
    const glow = new THREE.Mesh(makeSphere(s * 0.42, 7), makeMat(0xff8800, { emit: 0xff7700, emitI: 2.5, r: 0.3, op: 0.85 }));
    glow.position.set(x, -7.4 + s * 0.38, z);
    g.add(glow);
    const pl = new THREE.PointLight(0xff6600, 1.0, 7);
    pl.position.set(x, -7.4 + s * 0.38, z);
    g.add(pl);
}

function _stars(g, count, radius, size) {
    const verts = [];
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(rr(-1, 1));
        const r = rr(radius * 0.7, radius);
        verts.push(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: size || 0.5, transparent: true, opacity: 0.7 })));
}

// ── MONTH SCENE BUILDERS (unchanged from original)
function buildJanuary(g) {
    buildSky(g, "#010810", "#061530");
    _stars(g, 180, 160, 0.55);
    const geo = new THREE.PlaneGeometry(200, 120, 48, 28);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.042) * 1.9 + Math.sin(z * 0.058) * 1.3 + Math.cos(x * 0.09 + z * 0.07) * 0.7 - 6);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0xb8d0e8, { r: 0.82 })));
    const snowPlane = new THREE.Mesh(makePlane(200, 120), makeMat(0xeef5ff, { r: 1.0, op: 0.72 }));
    snowPlane.rotation.x = -Math.PI / 2;
    snowPlane.position.y = -5.6;
    g.add(snowPlane);
    const moon = new THREE.Mesh(makeSphere(5.5, 20), makeMat(0xeef5ff, { r: 0.8, emit: 0xaaccff, emitI: 0.45 }));
    moon.position.set(-20, 28, -88);
    g.add(moon);
    const halo = new THREE.Mesh(makeTorus(8.5, 0.55, 6, 28), makeMat(0x8ab4ff, { op: 0.1, r: 1.0 }));
    halo.position.copy(moon.position);
    halo.rotation.x = 0.28;
    g.add(halo);
    const moonLight = new THREE.PointLight(0x8ab4ff, 2.0, 130);
    moonLight.position.copy(moon.position);
    g.add(moonLight);
    [[-26, -7], [-16, -13], [-6, -20], [6, -17], [18, -11], [29, -7], [22, -16], [-20, -22], [11, -9], [-4, -26]].forEach(([x, z]) => {
        _bareTree(g, x, z, rr(4, 9), 0x263444);
    });
    for (let i = 0; i < 20; i++) {
        const s = rr(0.15, 1.1);
        const crystal = new THREE.Mesh(makeOcta(s), makeMat(0xaad4ff, { m: 0.85, r: 0.05, op: rr(0.5, 0.85) }));
        crystal.position.set(rr(-28, 28), rr(-4, 8), rr(-22, 6));
        crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        crystal.userData.spin = { y: rr(0.003, 0.009), x: rr(0.001, 0.004) };
        g.add(crystal);
    }
    for (let m = 0; m < 5; m++) {
        const mtn = new THREE.Mesh(makeCone(rr(9, 20), rr(20, 32), 6), makeMat(0x0c1e3a, { r: 0.95 }));
        mtn.position.set(rr(-65, 65), -6, rr(-105, -55));
        g.add(mtn);
        const cap = new THREE.Mesh(makeCone(rr(3, 7), rr(7, 13), 6), makeMat(0xddeeff, { r: 0.92 }));
        cap.position.set(mtn.position.x, mtn.position.y + rr(9, 15), mtn.position.z);
        g.add(cap);
    }
    for (let ic = 0; ic < 14; ic++) {
        const ilen = rr(0.4, 1.5);
        const icicle = new THREE.Mesh(makeCone(0.05, ilen, 5), makeMat(0xbbddff, { m: 0.8, r: 0.04, op: 0.75 }));
        icicle.rotation.z = Math.PI;
        icicle.position.set(rr(-22, 22), rr(1, 5), rr(-14, -3));
        g.add(icicle);
    }
    makeParticles(g, 420, 0xddeeff, 0.13, [-55, 55], [-14, 30], [-55, 12], { snowfall: true });
    makeParticles(g, 70, 0xffffff, 0.26, [-28, 28], [-10, 15], [-20, 8], { snowfall: true });
}

function buildFebruary(g) {
    buildSky(g, "#0d020e", "#200510");
    buildTerrain(g, 0x3d1020, 0.9);
    _stars(g, 100, 155, 0.45);
    const sun = new THREE.Mesh(makeSphere(6.5, 18), makeMat(0xff2255, { r: 0.6, emit: 0xff1144, emitI: 0.55 }));
    sun.position.set(12, 20, -78);
    g.add(sun);
    for (let r = 1; r <= 3; r++) {
        const ring = new THREE.Mesh(makeTorus(6.5 + r * 3.5, 0.35, 6, 24), makeMat(0xff4466, { op: 0.1 / r, r: 1.0 }));
        ring.position.copy(sun.position);
        ring.rotation.x = 0.2;
        g.add(ring);
    }
    const sunLight = new THREE.PointLight(0xff2255, 2.5, 200);
    sunLight.position.copy(sun.position);
    g.add(sunLight);
    for (let i = 0; i < 18; i++) {
        const s = rr(0.18, 0.75);
        const hcols = [0xcc1133, 0xff3355, 0xff6688, 0xee0044, 0xff99bb];
        const hc = hcols[Math.floor(Math.random() * hcols.length)];
        const hx = rr(-30, 30), hy = rr(-10, 12), hz = rr(-28, 5);
        for (let lobe = -1; lobe <= 1; lobe += 2) {
            const l = new THREE.Mesh(makeSphere(s * 0.6, 8), makeMat(hc, { m: 0.2, r: 0.45, emit: hc, emitI: 0.12 }));
            l.position.set(hx + lobe * s * 0.4, hy + s * 0.22, hz);
            l.userData.float = { ys: rr(0.003, 0.009), p: Math.random() * Math.PI * 2 };
            g.add(l);
        }
        const tip = new THREE.Mesh(makeCone(s * 0.6, s * 1.1, 6), makeMat(hc, { m: 0.2, r: 0.45, emit: hc, emitI: 0.12 }));
        tip.position.set(hx, hy - s * 0.3, hz);
        tip.rotation.z = Math.PI;
        tip.userData.float = { ys: rr(0.003, 0.009), p: Math.random() * Math.PI * 2 };
        g.add(tip);
    }
    for (let fl = 0; fl < 14; fl++) {
        const fx = rr(-36, 36), fz = rr(-26, 0);
        const sh = rr(1.5, 3.5);
        const stem = new THREE.Mesh(makeCyl(0.028, 0.04, sh, 4), makeMat(0x1a5520, { r: 0.9 }));
        stem.position.set(fx, -8 + sh / 2, fz);
        g.add(stem);
        const leafM = new THREE.Mesh(new THREE.CircleGeometry(0.38, 6), makeMat(0x225522, { double: true, r: 0.85 }));
        leafM.position.set(fx + 0.28, -8 + sh * 0.55, fz);
        leafM.rotation.set(0.4, 0.5, 0.8);
        g.add(leafM);
        const rCols = [0xdd1133, 0xff2244, 0xff6688, 0xcc0033];
        const rc = rCols[Math.floor(Math.random() * rCols.length)];
        for (let layer = 0; layer < 4; layer++) {
            const pCount = 5 + layer;
            for (let p = 0; p < pCount; p++) {
                const pa = (p / pCount) * Math.PI * 2;
                const pr = layer * 0.16 + 0.08;
                const petal = new THREE.Mesh(new THREE.CircleGeometry(rr(0.13, 0.26), 5), makeMat(rc, { op: 0.72 + layer * 0.06, double: true, r: 0.7 }));
                petal.position.set(fx + Math.cos(pa) * pr, -8 + sh + layer * 0.09, fz + Math.sin(pa) * pr);
                petal.rotation.set(Math.PI / 2 - layer * 0.28, pa, 0);
                g.add(petal);
            }
        }
    }
    for (let i = 0; i < 55; i++) {
        const petal = new THREE.Mesh(new THREE.CircleGeometry(rr(0.08, 0.35), 5), makeMat([0xff4466, 0xdd1133, 0xff8899][Math.floor(Math.random() * 3)], { op: 0.65, double: true }));
        petal.position.set(rr(-38, 38), rr(-14, 18), rr(-32, 6));
        petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        petal.userData.float = { ys: rr(0.002, 0.007), p: Math.random() * Math.PI * 2, drift: rr(-0.005, 0.005) };
        g.add(petal);
    }
}

function buildMarch(g) {
    buildSky(g, "#041008", "#0c2010");
    const geo = new THREE.PlaneGeometry(200, 120, 48, 28);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.048) * 1.5 + Math.sin(z * 0.07 + x * 0.04) * 1.1 + Math.cos(x * 0.11) * 0.6 - 5.5);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0x2a6020, { r: 0.9 })));
    const sun = new THREE.Mesh(makeSphere(8, 20), makeMat(0xffee88, { r: 0.4, emit: 0xffdd44, emitI: 0.65 }));
    sun.position.set(22, 34, -90);
    g.add(sun);
    for (let r = 1; r <= 3; r++) {
        const cr = new THREE.Mesh(makeTorus(8 + r * 4.5, 0.28, 6, 24), makeMat(0xffee88, { op: 0.07 / r, r: 1.0 }));
        cr.position.copy(sun.position);
        g.add(cr);
    }
    const sunLt = new THREE.PointLight(0xffee88, 2.2, 240);
    sunLt.position.copy(sun.position);
    g.add(sunLt);
    for (let i = 0; i < 30; i++) {
        const cx = rr(-36, 36), cz = rr(-28, 2);
        const sh = rr(0.6, 2.0);
        const r = rr(0.22, 0.7);
        const flCols = [0xffcc00, 0xff8800, 0xff4488, 0xaa55ff, 0x22ccff, 0xffffff, 0xff6644];
        const fc = flCols[Math.floor(Math.random() * flCols.length)];
        const stem = new THREE.Mesh(makeCyl(0.022, 0.032, sh, 4), makeMat(0x2a6020, { r: 0.9 }));
        stem.position.set(cx, -5.5 + sh / 2 - 2, cz);
        g.add(stem);
        const pCount = Math.round(rr(5, 8));
        for (let j = 0; j < pCount; j++) {
            const pa = (j / pCount) * Math.PI * 2;
            const petal = new THREE.Mesh(makeSphere(r * 0.26, 5), makeMat(fc, { r: 0.72 }));
            petal.scale.set(1, 1.5, 0.45);
            petal.position.set(cx + Math.cos(pa) * r * 0.7, -5.5 + sh - 1.8, cz + Math.sin(pa) * r * 0.7);
            petal.userData.float = { ys: rr(0.004, 0.01), p: Math.random() * Math.PI * 2 };
            g.add(petal);
        }
        const ctr = new THREE.Mesh(makeSphere(r * 0.35, 6), makeMat(0xffcc00, { r: 0.6 }));
        ctr.position.set(cx, -5.5 + sh - 1.8, cz);
        g.add(ctr);
    }
    makeParticles(g, 280, 0xffee88, 0.065, [-55, 55], [-8, 22], [-45, 10], null);
    for (let i = 0; i < 8; i++) {
        _leafTree(g, rr(-42, 42), rr(-30, -10), rr(4, 8), 0x2a8830, 0x3a1f0a);
    }
    for (let c = 0; c < 4; c++) {
        const cx = rr(-38, 38), cy = rr(10, 20), cz2 = rr(-65, -22);
        for (let b = 0; b < 5; b++) {
            const cloud = new THREE.Mesh(makeSphere(rr(2, 4), 7), makeMat(0xeeeeff, { op: rr(0.82, 0.95), r: 1.0 }));
            cloud.position.set(cx + b * rr(2, 3.5), cy + rr(-0.5, 1.5), cz2);
            cloud.userData.float = { ys: rr(0.0005, 0.001), p: Math.random() * Math.PI * 2, drift: 0.001 };
            g.add(cloud);
        }
    }
}

function buildApril(g) {
    buildSky(g, "#0c0614", "#18101e");
    buildTerrain(g, 0x1a0f24, 0.9);
    _stars(g, 80, 150, 0.4);
    const moon = new THREE.Mesh(makeSphere(5, 18), makeMat(0xddbbff, { r: 0.7, emit: 0xaa88dd, emitI: 0.28 }));
    moon.position.set(18, 26, -80);
    g.add(moon);
    const moonGlow = new THREE.PointLight(0xaa88dd, 1.5, 100);
    moonGlow.position.copy(moon.position);
    g.add(moonGlow);
    [[-22, -6], [-8, -14], [6, -10], [20, -7], [-14, -20], [12, -22]].forEach(([x, z]) => {
        _cherryTree(g, x, z, rr(5, 9), 0xffb8cc);
    });
    for (let i = 0; i < 75; i++) {
        const rl = rr(0.8, 2.0);
        const rain = new THREE.Mesh(makeCyl(0.004, 0.004, rl, 3), makeMat(0x8899cc, { op: rr(0.12, 0.22) }));
        rain.position.set(rr(-40, 40), rr(-12, 20), rr(-30, 6));
        rain.rotation.z = 0.12;
        rain.rotation.x = 0.04;
        rain.userData.rain = true;
        g.add(rain);
    }
    for (let p = 0; p < 7; p++) {
        const puddle = new THREE.Mesh(new THREE.CircleGeometry(rr(0.7, 2.2), 10), makeMat(0x3344aa, { m: 0.9, r: 0.05, op: 0.32 }));
        puddle.rotation.x = -Math.PI / 2;
        puddle.position.set(rr(-28, 28), -7.6, rr(-20, 2));
        g.add(puddle);
    }
    for (let i = 0; i < 90; i++) {
        const petal = new THREE.Mesh(new THREE.CircleGeometry(rr(0.07, 0.36), 4), makeMat([0xffb8cc, 0xffaabb, 0xff99bb, 0xffddee][Math.floor(Math.random() * 4)], { op: 0.7, double: true }));
        petal.position.set(rr(-40, 40), rr(-12, 20), rr(-32, 6));
        petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        petal.userData.float = { ys: rr(0.001, 0.006), p: Math.random() * Math.PI * 2, drift: rr(-0.006, 0.006) };
        g.add(petal);
    }
}

function buildMay(g) {
    buildSky(g, "#0e0c00", "#1e1800");
    const geo = new THREE.PlaneGeometry(200, 120, 48, 28);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.058) * 1.2 + Math.cos(z * 0.076 + x * 0.05) * 0.9 - 5.5);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0x3a6818, { r: 0.88 })));
    const sun = new THREE.Mesh(makeSphere(9, 20), makeMat(0xffee44, { r: 0.4, emit: 0xffcc00, emitI: 0.65 }));
    sun.position.set(18, 36, -90);
    g.add(sun);
    const sunLt2 = new THREE.PointLight(0xffee44, 2.0, 240);
    sunLt2.position.copy(sun.position);
    g.add(sunLt2);
    for (let i = 0; i < 65; i++) {
        const flCols = [0xffcc00, 0xff8800, 0xff3366, 0xaa55ff, 0x22bbff, 0xffffff, 0xff6644, 0xffaacc];
        const fc = flCols[Math.floor(Math.random() * flCols.length)];
        const bx = rr(-40, 40), bz = rr(-30, 3);
        const sh = rr(0.6, 2.2);
        const stem = new THREE.Mesh(makeCyl(0.02, 0.03, sh, 3), makeMat(0x2a5a14, { r: 0.9 }));
        stem.position.set(bx, -5.5 + sh / 2 - 2, bz);
        g.add(stem);
        const pr = rr(0.1, 0.28);
        const pCount = Math.round(rr(4, 7));
        for (let p = 0; p < pCount; p++) {
            const pa = (p / pCount) * Math.PI * 2;
            const petal = new THREE.Mesh(makeSphere(pr, 5), makeMat(fc, { r: 0.7 }));
            petal.scale.set(1, 1.5, 0.5);
            petal.position.set(bx + Math.cos(pa) * pr * 1.8, -5.5 + sh - 1.8, bz + Math.sin(pa) * pr * 1.8);
            petal.userData.float = { ys: rr(0.004, 0.01), p: Math.random() * Math.PI * 2 };
            g.add(petal);
        }
        const ctr = new THREE.Mesh(makeSphere(pr * 0.65, 6), makeMat(0xffcc00, { r: 0.6 }));
        ctr.position.set(bx, -5.5 + sh - 1.8, bz);
        g.add(ctr);
    }
    for (let c = 0; c < 5; c++) {
        const cx = rr(-38, 38), cy = rr(10, 20), cz2 = rr(-65, -22);
        for (let b = 0; b < 6; b++) {
            const cloud = new THREE.Mesh(makeSphere(rr(2, 4.5), 7), makeMat(0xeeeeff, { op: rr(0.82, 0.95), r: 1.0 }));
            cloud.position.set(cx + b * rr(2, 3.5), cy + rr(-0.5, 1.5), cz2);
            cloud.userData.float = { ys: rr(0.0005, 0.001), p: Math.random() * Math.PI * 2, drift: 0.001 };
            g.add(cloud);
        }
    }
    for (let i = 0; i < 6; i++) {
        _leafTree(g, rr(-44, 44), rr(-30, -12), rr(4, 7), 0x44aa22, 0x3a1f0a);
    }
}

function buildJune(g) {
    buildSky(g, "#000d1a", "#011828");
    _stars(g, 90, 150, 0.42);
    const waveGeo = new THREE.PlaneGeometry(200, 90, 24, 16);
    waveGeo.rotateX(-Math.PI / 2);
    const waveMat = new THREE.MeshStandardMaterial({ color: 0x005588, metalness: 0.7, roughness: 0.1, transparent: true, opacity: 0.9 });
    const wave = new THREE.Mesh(waveGeo, waveMat);
    wave.position.y = -6;
    wave.userData.ocean = true;
    g.add(wave);
    const beachGeo = new THREE.PlaneGeometry(200, 45, 18, 8);
    beachGeo.rotateX(-Math.PI / 2);
    const bp = beachGeo.attributes.position;
    for (let i = 0; i < bp.count; i++) bp.setY(i, Math.sin(bp.getX(i) * 0.08) * 0.28);
    bp.needsUpdate = true;
    beachGeo.computeVertexNormals();
    const beach = new THREE.Mesh(beachGeo, makeMat(0xddbb88, { r: 0.98 }));
    beach.position.set(0, -7.5, 22);
    g.add(beach);
    const sun = new THREE.Mesh(makeSphere(10, 20), makeMat(0xff7733, { r: 0.35, emit: 0xff5511, emitI: 0.55 }));
    sun.position.set(0, 8, -90);
    g.add(sun);
    const sunLt3 = new THREE.PointLight(0xff6633, 2.8, 200);
    sunLt3.position.copy(sun.position);
    g.add(sunLt3);
    [[-18, 16], [-5, 14], [9, 18], [22, 13]].forEach(([px, pz]) => {
        _palmTree(g, px, pz, rr(-0.5, 0.5));
    });
    for (let s = 0; s < 12; s++) {
        const geo2 = new THREE.BufferGeometry();
        geo2.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -0.65, 0.22, 0, 0.65, 0.22, 0], 3));
        geo2.setIndex([0, 1, 2]);
        geo2.computeVertexNormals();
        const bird = new THREE.Mesh(geo2, makeMat(0xffffff, { r: 0.9, double: true }));
        bird.position.set(rr(-30, 30), rr(4, 14), rr(-40, -5));
        bird.userData.float = { ys: rr(0.006, 0.012), p: Math.random() * Math.PI * 2, drift: rr(0.002, 0.006) };
        g.add(bird);
    }
    for (let i = 0; i < 35; i++) {
        const b = new THREE.Mesh(makeSphere(rr(0.05, 0.28), 6), makeMat(0x88ddff, { m: 0.8, r: 0.0, op: 0.2 }));
        b.position.set(rr(-30, 30), rr(-8, 6), rr(-30, 5));
        b.userData.float = { ys: rr(0.006, 0.016), p: Math.random() * Math.PI * 2 };
        g.add(b);
    }
}

function buildJuly(g) {
    buildSky(g, "#0e0200", "#1e0400");
    buildTerrain(g, 0x1a0800, 0.95);
    const burstCols = [
        [0xff4400, 0xff8800], [0xffdd00, 0xff9900], [0xff0044, 0xff4488],
        [0x00ccff, 0x0088ff], [0xffffff, 0xffeecc], [0x44ff00, 0x88ff44], [0xff44ff, 0xaa00ff],
    ];
    for (let burst = 0; burst < 9; burst++) {
        const cx = rr(-24, 24), cy = rr(3, 16), cz = rr(-32, -6);
        const [c1, c2] = burstCols[burst % burstCols.length];
        const core = new THREE.Mesh(makeSphere(0.32, 8), makeMat(c1, { emit: c1, emitI: 2.2, r: 0.1 }));
        core.position.set(cx, cy, cz);
        core.userData.float = { ys: rr(0.01, 0.02), p: Math.random() * Math.PI * 2 };
        g.add(core);
        const bl = new THREE.PointLight(c1, rr(1.5, 3.0), 22);
        bl.position.set(cx, cy, cz);
        g.add(bl);
        for (let s = 0; s < 22; s++) {
            const a = (s / 22) * Math.PI * 2;
            const r = rr(1.8, 6);
            const spark = new THREE.Mesh(makeSphere(rr(0.055, 0.17), 4), makeMat(s % 2 === 0 ? c1 : c2, { r: 0.2, emit: c1, emitI: 0.9 }));
            spark.position.set(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.65, cz + rr(-0.5, 0.5));
            spark.userData.float = { ys: rr(0.008, 0.022), p: Math.random() * Math.PI * 2 };
            g.add(spark);
        }
        for (let t = 0; t < 6; t++) {
            const ta = Math.random() * Math.PI * 2;
            const tr = rr(0.5, 3.2);
            const trail = new THREE.Mesh(makeCyl(0.01, 0.03, tr, 3), makeMat(c2, { op: 0.45, emit: c2, emitI: 0.35 }));
            trail.position.set(cx + Math.cos(ta) * tr * 0.5, cy + Math.sin(ta) * tr * 0.4, cz);
            trail.rotation.z = ta;
            g.add(trail);
        }
    }
    makeParticles(g, 500, 0xff8833, 0.08, [-60, 60], [0, 35], [-60, -5], null);
    makeParticles(g, 120, 0xffdd44, 0.11, [-40, 40], [0, 25], [-45, -5], null);
    for (let b = 0; b < 20; b++) {
        const bh = rr(4, 14), bw = rr(1.5, 4);
        const building = new THREE.Mesh(makeBox(bw, bh, rr(1.5, 3)), makeMat(0x0d0400, { r: 0.98 }));
        building.position.set(rr(-55, 55), -8 + bh / 2, rr(-90, -50));
        g.add(building);
        for (let w = 0; w < 4; w++) {
            const win = new THREE.Mesh(makeBox(0.16, 0.16, 0.05), makeMat(0xff8833, { emit: 0xff6611, emitI: 1.4 }));
            win.position.set(building.position.x + rr(-bw / 2 + 0.2, bw / 2 - 0.2), building.position.y + rr(-bh / 2 + 0.3, bh / 2 - 0.5), building.position.z + 1.5);
            g.add(win);
        }
    }
}

function buildAugust(g) {
    buildSky(g, "#120800", "#201200");
    const duneGeo = new THREE.PlaneGeometry(200, 120, 48, 32);
    duneGeo.rotateX(-Math.PI / 2);
    const dpos = duneGeo.attributes.position;
    for (let i = 0; i < dpos.count; i++) {
        const x = dpos.getX(i), z = dpos.getZ(i);
        dpos.setY(i, Math.sin(x * 0.036) * 4.2 + Math.sin(z * 0.052 + x * 0.018) * 2.6 + Math.cos(x * 0.068 + z * 0.04) * 1.4 - 5.5);
    }
    dpos.needsUpdate = true;
    duneGeo.computeVertexNormals();
    g.add(new THREE.Mesh(duneGeo, makeMat(0xc88030, { r: 0.98 })));
    const sun = new THREE.Mesh(makeSphere(14, 22), makeMat(0xffaa22, { r: 0.25, emit: 0xff8800, emitI: 0.95 }));
    sun.position.set(0, 32, -90);
    g.add(sun);
    for (let r = 1; r <= 4; r++) {
        const corona = new THREE.Mesh(makeTorus(14 + r * 5.5, 0.45, 6, 26), makeMat(0xff9922, { op: 0.06 / r, r: 1.0 }));
        corona.position.copy(sun.position);
        g.add(corona);
    }
    const sunHeat = new THREE.PointLight(0xff8822, 4.0, 280);
    sunHeat.position.copy(sun.position);
    g.add(sunHeat);
    [[-28, -8], [-14, -18], [0, -12], [16, -20], [28, -9], [-20, -24], [10, -6], [-5, -4]].forEach(([cx, cz]) => {
        _cactus(g, cx, cz, rr(2.5, 6));
    });
    for (let r = 0; r < 14; r++) {
        const rock = new THREE.Mesh(makeSphere(rr(0.4, 1.8), 7), makeMat(0x8a6020, { r: 0.98 }));
        rock.scale.y = rr(0.3, 0.6);
        rock.position.set(rr(-38, 38), -7, rr(-28, 0));
        g.add(rock);
    }
    for (let h = 0; h < 14; h++) {
        const shimmer = new THREE.Mesh(makePlane(rr(2, 8), rr(4, 9), 1, 4), makeMat(0xffaa44, { op: rr(0.02, 0.055), r: 1.0, double: true }));
        shimmer.position.set(rr(-40, 40), rr(-4, 4), rr(-35, -5));
        shimmer.userData.float = { ys: rr(0.001, 0.003), p: Math.random() * Math.PI * 2 };
        g.add(shimmer);
    }
    for (let v = 0; v < 5; v++) {
        const a = (v / 5) * Math.PI * 2;
        const vgeo = new THREE.BufferGeometry();
        vgeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -1.2, 0.2, 0, 1.2, 0.2, 0], 3));
        vgeo.setIndex([0, 1, 2]);
        vgeo.computeVertexNormals();
        const vulture = new THREE.Mesh(vgeo, makeMat(0x111111, { r: 0.9, double: true }));
        vulture.position.set(Math.cos(a) * 14, rr(14, 20), Math.sin(a) * 14 - 20);
        vulture.userData.spin = { y: 0.006 };
        g.add(vulture);
    }
}

function buildSeptember(g) {
    buildSky(g, "#100600", "#1e0e00");
    _stars(g, 70, 148, 0.4);
    const geo = new THREE.PlaneGeometry(200, 120, 44, 26);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.044) * 1.8 + Math.cos(z * 0.062 + x * 0.03) * 1.2 - 5.8);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0x4a2808, { r: 0.92 })));
    const moon = new THREE.Mesh(makeSphere(8, 20), makeMat(0xff9944, { r: 0.5, emit: 0xff7722, emitI: 0.38 }));
    moon.position.set(20, 24, -88);
    g.add(moon);
    const moonLt = new THREE.PointLight(0xff8833, 2.5, 180);
    moonLt.position.copy(moon.position);
    g.add(moonLt);
    const leafCols = [0xcc4400, 0xdd6600, 0xee8800, 0xff4400, 0xaa3300, 0xdd9900, 0xff6600];
    [[-26, -8], [-12, -14], [0, -20], [14, -12], [26, -7], [-18, -22], [10, -24]].forEach(([tx, tz]) => {
        _leafTree(g, tx, tz, rr(5, 10), leafCols[Math.floor(Math.random() * leafCols.length)], 0x4a2a0a);
    });
    for (let i = 0; i < 110; i++) {
        const lc = leafCols[Math.floor(Math.random() * leafCols.length)];
        const leaf = new THREE.Mesh(new THREE.CircleGeometry(rr(0.1, 0.4), 5), makeMat(lc, { op: rr(0.75, 0.95), double: true }));
        leaf.scale.set(1, rr(0.6, 1.4), 1);
        leaf.position.set(rr(-42, 42), rr(-10, 20), rr(-35, 6));
        leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        leaf.userData.leaf = { ys: rr(0.002, 0.008), p: Math.random() * Math.PI * 2, drift: rr(-0.009, 0.009), spin: rr(0.004, 0.018) };
        g.add(leaf);
    }
    for (let h = 0; h < 5; h++) {
        const bale = new THREE.Mesh(makeCyl(0.8, 0.8, 1.4, 10), makeMat(0xddaa44, { r: 0.95 }));
        bale.rotation.z = Math.PI / 2;
        bale.position.set(rr(-28, 28), -7, rr(-18, -2));
        g.add(bale);
    }
    for (let p = 0; p < 4; p++) {
        _pumpkin(g, rr(-22, 22), rr(-14, -2));
    }
}

function buildOctober(g) {
    buildSky(g, "#03000a", "#080015");
    buildTerrain(g, 0x0a0018, 0.95);
    _stars(g, 120, 150, 0.45);
    const moon = new THREE.Mesh(makeSphere(6.5, 20), makeMat(0xddcc88, { r: 0.65, emit: 0xbbaa66, emitI: 0.28 }));
    moon.position.set(-10, 24, -75);
    g.add(moon);
    const moonRing = new THREE.Mesh(makeTorus(10, 0.38, 6, 26), makeMat(0xddcc88, { op: 0.1, r: 1.0 }));
    moonRing.position.copy(moon.position);
    moonRing.rotation.x = 0.2;
    g.add(moonRing);
    const moonLt2 = new THREE.PointLight(0x8866cc, 2.2, 120);
    moonLt2.position.copy(moon.position);
    g.add(moonLt2);
    for (let i = 0; i < 10; i++) {
        _bareTree(g, rr(-40, 40), rr(-30, -2), rr(5, 12), 0x0a0a10);
    }
    for (let i = 0; i < 16; i++) {
        const bx = rr(-24, 24), by = rr(-2, 14), bz = rr(-25, 3);
        const body = new THREE.Mesh(makeBox(0.28, 0.13, 0.1), makeMat(0x0d0a1a, { r: 0.85 }));
        body.position.set(bx, by, bz);
        body.userData.bat = { ys: rr(0.012, 0.02), p: Math.random() * Math.PI * 2 };
        g.add(body);
        for (let wing = -1; wing <= 1; wing += 2) {
            const wgeo = new THREE.BufferGeometry();
            wgeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, wing * 0.75, 0.08, 0, wing * 0.52, -0.3, 0], 3));
            wgeo.setIndex([0, 1, 2]);
            wgeo.computeVertexNormals();
            const wm = new THREE.Mesh(wgeo, makeMat(0x0d0a1a, { r: 0.9, double: true }));
            wm.position.set(bx + wing * 0.14, by, bz);
            wm.userData.bat = { ys: rr(0.012, 0.02), p: Math.random() * Math.PI * 2 };
            g.add(wm);
        }
    }
    [[-14, -4], [0, -8], [10, -3], [-6, -14], [18, -10]].forEach(([px, pz]) => _pumpkin(g, px, pz));
    for (let i = 0; i < 28; i++) {
        const orb = new THREE.Mesh(makeSphere(rr(0.08, 0.5), 6), makeMat([0x8800ff, 0x6600cc, 0xaa44ff, 0x440088][Math.floor(Math.random() * 4)], { m: 0.85, r: 0.05, op: rr(0.3, 0.65), emit: 0x6600cc, emitI: 0.55 }));
        orb.position.set(rr(-30, 30), rr(-6, 14), rr(-28, 4));
        orb.userData.float = { ys: rr(0.004, 0.012), p: Math.random() * Math.PI * 2 };
        g.add(orb);
    }
    for (let ring = 1; ring <= 4; ring++) {
        const web = new THREE.Mesh(makeTorus(ring * 1.1, 0.016, 4, 14), makeMat(0xaaaacc, { op: 0.18, r: 0.5 }));
        web.position.set(-10, 8, -6);
        web.rotation.x = 0.2;
        g.add(web);
    }
}

function buildNovember(g) {
    buildSky(g, "#060708", "#0e1012");
    const geo = new THREE.PlaneGeometry(200, 120, 38, 22);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        pos.setY(i, Math.sin(pos.getX(i) * 0.04) * 0.8 + Math.cos(pos.getZ(i) * 0.05) * 0.5 - 6.2);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0x111418, { r: 0.97 })));
    for (let i = 0; i < 22; i++) {
        const fog = new THREE.Mesh(makeSphere(rr(4, 10), 7), makeMat(0x8899aa, { op: rr(0.022, 0.048), r: 1.0 }));
        fog.position.set(rr(-35, 35), rr(-7, 5), rr(-35, 6));
        fog.userData.float = { ys: rr(0.0005, 0.002), p: Math.random() * Math.PI * 2, drift: 0.0008 };
        g.add(fog);
    }
    for (let i = 0; i < 18; i++) {
        _bareTree(g, rr(-42, 42), rr(-34, -2), rr(3, 9), 0x1c1c22);
    }
    const post = new THREE.Mesh(makeCyl(0.055, 0.08, 7, 6), makeMat(0x2a2a30, { r: 0.7, m: 0.5 }));
    post.position.set(0, -8 + 3.5, 5);
    g.add(post);
    const arm = new THREE.Mesh(makeCyl(0.035, 0.035, 1.8, 5), makeMat(0x2a2a30, { r: 0.7, m: 0.5 }));
    arm.rotation.z = Math.PI / 2;
    arm.position.set(0.9, -8 + 7.2, 5);
    g.add(arm);
    const lampHead = new THREE.Mesh(makeSphere(0.32, 8), makeMat(0xffcc66, { emit: 0xffaa44, emitI: 3.5, r: 0.1 }));
    lampHead.position.set(1.8, -8 + 7.2, 5);
    g.add(lampHead);
    const lampLight = new THREE.PointLight(0xffaa44, 3.5, 22);
    lampLight.position.copy(lampHead.position);
    g.add(lampLight);
    for (let p = 0; p < 6; p++) {
        const puddle = new THREE.Mesh(new THREE.CircleGeometry(rr(0.5, 2.0), 10), makeMat(0x334455, { m: 0.9, r: 0.05, op: 0.38 }));
        puddle.rotation.x = -Math.PI / 2;
        puddle.position.set(rr(-15, 15), -6.1, rr(-8, 8));
        g.add(puddle);
    }
    for (let c = 0; c < 8; c++) {
        const crow = new THREE.Mesh(makeSphere(0.14, 5), makeMat(0x050508, { r: 0.9 }));
        crow.position.set(rr(-28, 28), rr(-2, 8), rr(-26, -3));
        g.add(crow);
    }
}

function buildDecember(g) {
    buildSky(g, "#000818", "#020f28");
    _stars(g, 200, 160, 0.55);
    const geo = new THREE.PlaneGeometry(200, 120, 48, 30);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        pos.setY(i, Math.sin(x * 0.048) * 2.2 + Math.cos(z * 0.068 + x * 0.04) * 1.6 + Math.sin(x * 0.11) * 0.8 - 5.8);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, makeMat(0x9ab8d0, { r: 0.82 })));
    const snowPlane2 = new THREE.Mesh(makePlane(200, 120), makeMat(0xddeeff, { r: 1.0, op: 0.65 }));
    snowPlane2.rotation.x = -Math.PI / 2;
    snowPlane2.position.y = -5.5;
    g.add(snowPlane2);
    const auroraCols = [0x00ff88, 0x0088ff, 0xff44aa, 0x44ffcc, 0x88ff00];
    for (let i = 0; i < 8; i++) {
        const aGeo = new THREE.PlaneGeometry(rr(30, 60), rr(10, 22), 12, 5);
        const apos = aGeo.attributes.position;
        for (let v = 0; v < apos.count; v++) apos.setY(v, apos.getY(v) + Math.sin(apos.getX(v) * 0.14 + i) * 3);
        apos.needsUpdate = true;
        const aurora = new THREE.Mesh(aGeo, new THREE.MeshBasicMaterial({ color: auroraCols[i % auroraCols.length], transparent: true, opacity: rr(0.04, 0.1), side: THREE.DoubleSide }));
        aurora.position.set(rr(-30, 30), rr(12, 30), -85);
        aurora.rotation.z = rr(-0.4, 0.4);
        aurora.userData.float = { ys: rr(0.0008, 0.002), p: Math.random() * Math.PI * 2 };
        g.add(aurora);
    }
    [[0, -7.8, 9], [-12, -7.8, 3], [14, -7.8, 5], [-24, -7.8, -4], [22, -7.8, -6], [-6, -7.8, -12], [30, -7.8, 1], [-32, -7.8, 2]].forEach(([tx, ty, tz]) => {
        _firTree(g, tx, ty, tz, rr(3, 8), 0x1a5220, true);
    });
    const star = new THREE.Mesh(makeOcta(1.6), makeMat(0xffffaa, { m: 1.0, r: 0.0, emit: 0xffee66, emitI: 2.5 }));
    star.position.set(0, 6, 9);
    star.userData.spin = { y: 0.018, x: 0.009 };
    g.add(star);
    const starLight = new THREE.PointLight(0xffffaa, 2.0, 20);
    starLight.position.copy(star.position);
    g.add(starLight);
    const oCols = [0xff2233, 0x22cc66, 0xddaa00, 0x4488ff, 0xff66aa, 0xff8800];
    for (let i = 0; i < 38; i++) {
        const orb = new THREE.Mesh(makeSphere(rr(0.18, 0.55), 8), makeMat(oCols[i % oCols.length], { m: 0.95, r: 0.03, emit: oCols[i % oCols.length], emitI: 0.38 }));
        orb.position.set(rr(-30, 30), rr(-7, 10), rr(-28, 10));
        orb.userData.float = { ys: rr(0.003, 0.009), p: Math.random() * Math.PI * 2 };
        g.add(orb);
    }
    makeParticles(g, 550, 0xddeeff, 0.12, [-65, 65], [-12, 30], [-55, 14], { snowfall: true });
    makeParticles(g, 80, 0xffffff, 0.23, [-30, 30], [-10, 16], [-20, 10], { snowfall: true });
    for (let m = 0; m < 6; m++) {
        const mtn = new THREE.Mesh(makeCone(rr(10, 22), rr(20, 36), 6), makeMat(0x0a1830, { r: 0.95 }));
        mtn.position.set(rr(-70, 70), -6, rr(-110, -60));
        g.add(mtn);
        const cap = new THREE.Mesh(makeCone(rr(4, 8), rr(8, 14), 6), makeMat(0xddeeff, { r: 0.92 }));
        cap.position.set(mtn.position.x, mtn.position.y + rr(10, 18), mtn.position.z);
        g.add(cap);
    }
}

const BUILDERS = [
    buildJanuary, buildFebruary, buildMarch, buildApril,
    buildMay, buildJune, buildJuly, buildAugust,
    buildSeptember, buildOctober, buildNovember, buildDecember,
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

// ── DOM MONTH LABEL
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

// ── STATE
let currentMonth = 0;
let isTransitioning = false;
let siteEntered = false;
let activeTab = "sophomore"; // track current tab

// ── THEME APPLICATION
function applyTheme(m, idx) {
    document.documentElement.style.setProperty("--ui-accent", m.accentCSS);
    document.documentElement.style.setProperty("--ui-muted", m.uiMuted);
    document.getElementById("month-counter").textContent = `${m.num} / 12`;
    document.getElementById("theme-tag").textContent = m.theme;
    scene.fog.color.setHex(m.fogColor);
    scene.fog.density = m.fogDensity;
    renderer.setClearColor(m.fogColor, 1);
    const col = new THREE.Color(m.accentHex);
    fillLight.color.copy(col);
    document.querySelectorAll(".nav-dot").forEach((d, i) => d.classList.toggle("active", i === (idx ?? currentMonth)));
    updateMonthLabel(m.name, m.accentCSS);
    applySkyConfig(idx ?? currentMonth);
}

// ── TRANSITION
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
    tl.to("#theme-tag", { opacity: 0, y: -10, duration: 0.25, ease: "power2.in" });
    tl.to(monthLabelEl, { opacity: 0, scale: 0.9, duration: 0.25, ease: "power2.in" }, "<");
    tl.call(() => {
        monthGroups[currentMonth].visible = false;
        monthGroups[idx].visible = true;
        applyTheme(m, idx);
        camera.position.set(cf.x, cf.y, cf.z);
        camera.lookAt(0, 0, 0);
        gsap.set(monthLabelEl, { scale: 1.1 });
    });
    tl.to(camera.position, { x: 0, y: 2, z: 28, duration: 1.2, ease: "power3.out" });
    tl.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 1.0, ease: "power2.out" }, "<");
    tl.to(monthLabelEl, { opacity: 0.92, scale: 1, duration: 0.6, ease: "back.out(1.2)" }, "-=0.4");
    tl.to("#theme-tag", { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, "-=0.4");
}

// ── SCROLL
const scrollEl = document.getElementById("scroll-driver");
scrollEl.addEventListener("scroll", () => {
    if (!siteEntered) return;
    const prog = scrollEl.scrollTop / (scrollEl.scrollHeight - scrollEl.clientHeight);
    document.getElementById("progress").style.width = prog * 100 + "%";
    const idx = Math.min(11, Math.round(prog * 11));
    if (idx !== currentMonth && !isTransitioning) goToMonth(idx);
});

// ── NAV DOTS
const navDots = document.getElementById("nav-dots");
MONTHS.forEach((m, i) => {
    const btn = document.createElement("button");
    btn.className = "nav-dot" + (i === 0 ? " active" : "");
    btn.title = m.name;
    btn.addEventListener("click", () => {
        if (!siteEntered) return;
        const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
        scrollEl.scrollTo({ top: (i / 11) * maxScroll, behavior: "smooth" });
        goToMonth(i);
    });
    navDots.appendChild(btn);
});

// ── PROJECTS OVERLAY — TABBED
const TAB_KEYS = ["sophomore", "junior", "senior"];
const TAB_LABELS = ["Sophomore", "Junior", "Senior"];

function renderProjectCards(projects) {
    const proj = document.getElementById("overlay-projects");
    proj.innerHTML = "";
    if (!projects || projects.length === 0) {
        proj.innerHTML = '<div id="overlay-empty">no projects yet — check back soon</div>';
        return;
    }
    projects.forEach((p) => {
        proj.innerHTML += `<div class="project-card"><div class="card-tag">${p.tag}</div><div class="card-title">${p.title}</div><div class="card-desc">${p.desc}</div></div>`;
    });
}

function switchTab(key) {
    activeTab = key;
    // Update tab button states
    document.querySelectorAll(".overlay-tab-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === key);
    });
    // Render cards for this tab
    const m = MONTHS[currentMonth];
    renderProjectCards(m.projects[key] || []);
}

function openProjects() {
    const m = MONTHS[currentMonth];
    document.getElementById("overlay-header").textContent = m.name;
    document.getElementById("overlay-subhead").textContent = m.theme;
    document.getElementById("overlay-header").style.color = m.accentCSS;

    // Build tab buttons if not already present
    let tabBar = document.getElementById("overlay-tab-bar");
    if (!tabBar) {
        tabBar = document.createElement("div");
        tabBar.id = "overlay-tab-bar";
        TAB_KEYS.forEach((key, i) => {
            const btn = document.createElement("button");
            btn.className = "overlay-tab-btn" + (key === activeTab ? " active" : "");
            btn.dataset.tab = key;
            btn.textContent = TAB_LABELS[i];
            btn.addEventListener("click", () => switchTab(key));
            tabBar.appendChild(btn);
        });
        // Insert tab bar before the projects grid
        const overlay = document.getElementById("projects-overlay");
        const projGrid = document.getElementById("overlay-projects");
        overlay.insertBefore(tabBar, projGrid);
    } else {
        // Sync active state without rebuilding
        document.querySelectorAll(".overlay-tab-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.tab === activeTab);
        });
    }

    // Render current tab
    renderProjectCards(m.projects[activeTab] || []);
    document.getElementById("projects-overlay").classList.add("open");
    document.getElementById("close-btn").style.display = "block";
}

function closeProjects() {
    document.getElementById("projects-overlay").classList.remove("open");
    document.getElementById("close-btn").style.display = "none";
}
window.openProjects = openProjects;
window.closeProjects = closeProjects;

// ── INTRO
function enterSite() {
    siteEntered = true;
    gsap.to("#intro", { opacity: 0, duration: 0.8, ease: "power2.in", onComplete: () => { document.getElementById("intro").style.display = "none"; } });
    gsap.from("#ui", { opacity: 0, duration: 0.8, delay: 0.6, ease: "power1.out" });
    gsap.to("#projects-btn", { opacity: 1, duration: 0.5, delay: 1.1 });
    setTimeout(() => {
        document.getElementById("projects-btn").classList.add("visible");
        applyTheme(MONTHS[0]);
    }, 1100);
    const scrollLabel = document.getElementById("scroll-label");
    scrollLabel.style.pointerEvents = "all";
    scrollLabel.style.cursor = "pointer";
    scrollLabel.addEventListener("click", returnToIntro);
}

function returnToIntro() {
    siteEntered = false;
    scrollEl.scrollTo({ top: 0, behavior: "instant" });
    goToMonth(0);
    gsap.to("#ui", { opacity: 0, duration: 0.5, ease: "power2.in", onComplete: () => gsap.set("#ui", { opacity: 1 }) });
    const intro = document.getElementById("intro");
    intro.style.display = "flex";
    gsap.fromTo("#intro", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" });
    gsap.fromTo("#intro-name", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "expo.out" });
    gsap.fromTo("#intro-title", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.85, ease: "power1.out" });
    gsap.fromTo("#intro-sub", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.05, ease: "power1.out" });
    gsap.fromTo("#enter-btn, #about-btn", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.25, ease: "back.out(1.3)", stagger: 0.08 });
    gsap.set("#ui", { opacity: 1, delay: 0 });
    document.getElementById("scroll-label").style.pointerEvents = "none";
}
window.returnToIntro = returnToIntro;
window.enterSite = enterSite;

window.addEventListener("load", () => {
    applyTheme(MONTHS[0]);
    renderer.setClearColor(0x0d1830, 1);
    gsap.from("#intro-name", { y: 80, opacity: 0, duration: 1.1, delay: 0.3, ease: "expo.out" });
    gsap.from("#intro-title", { opacity: 0, duration: 1, delay: 0.75, ease: "power1.out" });
    gsap.from("#intro-sub", { opacity: 0, duration: 1, delay: 1.0, ease: "power1.out" });
    gsap.fromTo("#enter-btn, #about-btn", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.3, ease: "back.out(1.3)", stagger: 0.08 });
});

// ── CURSOR
const cur = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + "px"; cur.style.top = my + "px";
});
(function tickCursor() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    requestAnimationFrame(tickCursor);
})();
document.querySelectorAll("button,a").forEach((el) => {
    el.addEventListener("mouseenter", () => { ring.style.width = "54px"; ring.style.height = "54px"; ring.style.opacity = "0.6"; });
    el.addEventListener("mouseleave", () => { ring.style.width = "32px"; ring.style.height = "32px"; ring.style.opacity = "1"; });
});

// ── ANIMATION LOOP
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const t = clock.elapsedTime;
    const grp = monthGroups[currentMonth];

    grp.children.forEach((obj) => {
        if (obj.userData.float) {
            const f = obj.userData.float;
            obj.position.y += Math.sin(t * f.ys * 60 + f.p) * 0.002;
            if (f.drift) obj.position.x += Math.sin(t * 0.3 + f.p) * f.drift * 0.15;
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
            if (Math.floor(t * 60) % 2 === 0) {
                const pos = obj.geometry.attributes.position;
                for (let i = 0; i < pos.count; i++) {
                    const x = pos.getX(i), z = pos.getZ(i);
                    pos.setY(i, Math.sin(x * 0.28 + t) * 0.55 + Math.sin(z * 0.38 + t * 1.1) * 0.35);
                }
                pos.needsUpdate = true;
                obj.geometry.computeVertexNormals();
            }
        }
    });

    grp.rotation.y = Math.sin(t * 0.12) * 0.04;
    grp.rotation.x = Math.sin(t * 0.09) * 0.014;
    monthLabelEl.style.transform = `translate(-50%, calc(-50% + ${Math.sin(t * 0.4) * 5}px))`;
    sunLight.intensity = 1.7 + Math.sin(t * 0.6) * 0.3;
    skyMat.uniforms.uTime.value = t;
    finishingPass.uniforms.uTime.value = t;
    skyMesh.position.copy(camera.position);
    composer.render();
}
animate();

// ── RESIZE
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});