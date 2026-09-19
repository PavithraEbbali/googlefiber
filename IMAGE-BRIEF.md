# Image Brief — Google Fiber Authorized Retailer

Everything needed to generate the site's photography with Gemini Nano Banana
(Gemini 2.5 Flash Image), and exactly where each file goes.

**Save every file to `public/images/` using the exact filename given.**
Hand them back when done and they get wired in — no renaming needed.

---

## ⚠️ Read first — compliance rules for every image

These are not style preferences. Breaking them creates a real advertising
problem for an *authorized retailer* (as opposed to the carrier itself).

| Rule | Why |
| ---- | --- |
| **No Google / Google Fiber logos, wordmarks or colours on uniforms, vans, routers or equipment** | Showing branded carrier assets implies this site *is* Google Fiber. It is an independent retailer. This is the single biggest risk in the whole set. |
| **No company vehicles with any livery** | Same reason. An unbranded van is fine; a liveried one is not. |
| **No readable text, signage or screen content anywhere** | Generated text is the clearest "this is AI" tell, and any invented brand name creates its own problem. |
| **No visible router or modem hardware** | Avoids implying a specific device is included. Equipment inclusions are stated in copy, not pictured. |
| **No speed-test screens, dashboards or UI** | Would read as a performance claim we cannot substantiate. |

Everything else is an aesthetic call.

---

## Where each image goes

| # | Filename | Placement | Ratio | Target size |
| - | -------- | --------- | ----- | ----------- |
| 1 | `hero-background.jpg` | Hero section backdrop, behind the centred headline | 16:9 | 2400 × 1350 (1536 min) |
| 2 | `plan-1gig.jpg` | Bottom of the **Google Fiber 1 Gig** card | 3:2 | 1200 × 800 |
| 3 | `plan-3gig.jpg` | Bottom of the **Google Fiber 3 Gig** card | 3:2 | 1200 × 800 |
| 4 | `plan-8gig.jpg` | Bottom of the **Google Fiber 8 Gig** card | 3:2 | 1200 × 800 |
| 5 | `why-fiber.jpg` | Why Fiber section (dark `#202124` background) | 4:3 | 1600 × 1200 |
| 6 | `installation.jpg` | How It Works / ordering steps section | 3:2 | 1200 × 800 |
| 7 | `og-share.jpg` *(optional)* | Link preview card for ads and social | 1.91:1 | 1200 × 630 |

**Note on the hero:** it renders behind dark centred text, under a
white-to-transparent overlay. That is why the prompt asks for a bright image
with an *empty middle*. A busy or dark hero image will break legibility no
matter how the overlay is tuned.

---

## The prompts

Copy each block whole. They are written long on purpose — camera, lens,
lighting and imperfection details are what stop Nano Banana producing the
glossy "AI render" look.

### 1 — `hero-background.jpg`

```
Candid interior photograph of a bright, modern American living room in the late
morning. Large windows on the left with sheer white curtains diffusing daylight
across a pale oak floor. A neutral linen sofa sits to the right of frame, a low
bookshelf and a trailing pothos plant at the far left. The centre of the frame
is deliberately uncluttered — mostly empty wall and soft light. Shot on a Canon
EOS R5 with a 35mm lens at f/4, ISO 200, natural available light only, no flash.
Softly blown highlights near the window, gentle shadows, cool-neutral white
balance. Subtle 35mm film grain, slight lens vignetting, unretouched. Editorial
real-estate photography, eye level, straight on. Aspect ratio 16:9.

Do not include: people, text, signage, logos, brand marks, screens, routers,
cables, heavy saturation, HDR glow, lens flare, or symmetrical composition.
```

### 2 — `plan-1gig.jpg` (everyday home)

```
Candid documentary photograph of a woman in her early thirties sitting
cross-legged on a grey sofa in a small sunlit apartment living room, scrolling
on a tablet with a mug of coffee on the wooden side table beside her. She is
looking down at the tablet, not at the camera, relaxed and mid-movement, wearing
a plain mustard sweater and jeans. Ordinary lived-in details: a folded throw
blanket, a stack of books, a slightly crooked picture frame. Shot on a Sony A7
III with a 50mm lens at f/2.0, ISO 400, natural window light from camera left,
no flash. Warm neutral tones, visible skin texture and a few flyaway hairs,
unretouched, mild 35mm grain. Aspect ratio 3:2.

Do not include: text, signage, logos, brand marks, legible screen content,
routers, cables, studio lighting, glossy retouching, or eye contact with camera.
```

### 3 — `plan-3gig.jpg` (busy household)

```
Candid documentary photograph of a family of four in an open-plan American
kitchen and living area on a weekday evening. A father stands at the kitchen
island helping a ten-year-old with homework on a laptop, while a mother sits on
the sofa behind them with a toddler, both looking at a picture book. Everyone is
mid-activity and unposed; nobody looks at the camera. Real lived-in clutter — a
school bag on a stool, a cereal box on the counter, crayons scattered across the
island. Shot on a Nikon Z6 with a 35mm lens at f/2.8, ISO 800, mixed warm indoor
lighting and fading blue daylight through the window, no flash. Natural colour,
slight motion blur on the toddler's hand, visible skin texture, unretouched,
fine grain. Aspect ratio 3:2.

Do not include: text, signage, logos, brand marks, legible screen content,
routers, cables, studio lighting, showroom tidiness, or posed smiling at camera.
```

### 4 — `plan-8gig.jpg` (creator / heavy upload)

```
Candid documentary photograph of a man in his late twenties working at a home
desk in a spare bedroom at night, seen from a three-quarter rear angle over his
shoulder. He wears over-ear headphones and a plain dark t-shirt, leaning
slightly forward with his hands on a mechanical keyboard. Two monitors face away
from the camera so their contents are not legible. The room is lit by a warm
desk lamp and cool ambient spill from the monitors. The desk is slightly messy —
a water glass, an open notebook, a coiled cable. Shot on a Fujifilm X-T4 with a
23mm lens at f/1.8, ISO 1600, available light only, no flash. Moody but natural
low-light colour, mild sensor noise, unretouched. Aspect ratio 3:2.

Do not include: text, signage, logos, brand marks, legible screen content, RGB
strip lighting, purple-and-cyan gamer colour grading, lens flare, rim-light glow,
or a face turned toward the camera.
```

> The RGB / neon exclusions matter — that palette is the fastest way to make a
> desk photo look like stock or AI output.

### 5 — `why-fiber.jpg` (sits on a dark section)

```
Tight macro photograph of a bundle of bare optical fibre strands emerging from a
stripped grey cable jacket, resting on a dark matte workbench. The fibre ends
catch a small amount of warm light. The strands are slightly uneven and
imperfect; there is a fingerprint smudge on the bench and a pair of fibre
cleaving pliers sitting out of focus in the background. Shot on a Canon EOS R6
with a 100mm macro lens at f/4, ISO 400, a single soft light source from camera
right, deep shadows falling to near black on the left. Muted desaturated colour,
narrow plane of focus, unretouched, fine grain. Aspect ratio 4:3.

Do not include: text, signage, logos, brand marks, glowing blue neon fibre-optic
bursts, starburst or light-streak effects, digital particles, or a clean white
studio background.
```

> Avoid the glowing-blue-fibre cliché deliberately — it is the most obviously
> stock/AI image in this entire category.

### 6 — `installation.jpg` (technician)

```
Candid documentary photograph of a field technician kneeling beside the exterior
wall of a suburban American house, terminating a thin fibre cable into a small
grey network enclosure. He wears a plain unbranded navy work shirt, work gloves
and a tool belt — no logos or insignia anywhere on his clothing or equipment.
Photographed from a short distance at a slightly low angle, his face in profile
and partly obscured, concentrating on the work. Real surroundings: a downspout,
a patch of lawn, a coiled garden hose. Overcast daylight. Shot on a Canon EOS R6
with a 35mm lens at f/4, ISO 200, flat natural light, no flash. Realistic muted
colour, unretouched, fine grain. Aspect ratio 3:2.

Do not include: text, signage, logos, brand marks, company vehicles, branded
uniforms, hard-hat stock-photo posing, thumbs-up gestures, or eye contact with
the camera.
```

### 7 — `og-share.jpg` *(optional)*

```
Wide candid photograph of a bright modern American living room at golden hour,
shot from a low corner angle. A neutral sofa, a pale rug and a window with warm
late light falling across the floor. Composition weighted to the right, leaving
the left third open and uncluttered. Shot on a Canon EOS R5 with a 24mm lens at
f/5.6, ISO 200, natural light only, no flash. Warm realistic colour, soft
contrast, subtle grain, unretouched. Aspect ratio 1.91:1.

Do not include: people, text, signage, logos, brand marks, screens, routers,
cables, HDR glow, or lens flare.
```

---

## Technical notes

- **Format:** save as `.jpg`. Next.js converts to WebP/AVIF automatically at
  build time, so there is no benefit to converting by hand.
- **Filenames are case-sensitive** — lowercase, exactly as listed.
- **Nano Banana typically outputs ~1024px on the long edge.** That is fine for
  the plan cards and the dark section. For `hero-background.jpg`, upscale to at
  least 1536px wide (2400 preferred) — it spans the full viewport, and the
  overlay hides softness but not visible pixelation.
- **If a result still looks AI-generated,** the usual culprits are: too-perfect
  symmetry, plastic skin, and everything in focus. Re-roll with
  `shot on Kodak Portra 400, slight underexposure, imperfect framing` appended.
- **People:** vary age and ethnicity across images 2, 3 and 4 so the set reads as
  a real customer base rather than one stock family.

---

## When the files are ready

Drop them into `public/images/` and say the word. Wiring them up covers:

1. Hero backdrop with a tuned white-gradient overlay so the centred headline
   keeps its contrast ratio.
2. `next/image` for all seven, with correct `sizes`, `priority` on the hero only,
   and explicit width/height to prevent layout shift.
3. An `image` + `imageAlt` field added to `PlanItem` in `lib/content.ts`, so
   plan photography stays driven by the single source of truth like everything
   else.
4. Descriptive alt text on each (the decorative hero backdrop gets `alt=""`).
5. Re-run of the 320px overflow check and a Lighthouse pass — images are the
   most common cause of both regressions.

---

## Addendum — image 8, `plan-phone.jpg`

The Home Phone section is the one plan card still without photography. The card
already renders an image slot when the file exists, so this drops straight in.

**Save as:** `public/images/plan-phone.jpg` · **ratio 3:1 (wide banner)** ·
target 1600 × 533, minimum 1200 wide.

> The phone card uses the wide layout, so its image is a **3:1 banner** rather
> than the 2:1 used on the fiber cards. Generate at 16:9 and it will be
> centre-cropped, or ask for a panoramic frame directly.

```
Candid documentary photograph of an older woman standing at a kitchen counter in
a warmly lit American home, holding a cordless landline handset to her ear and
smiling slightly at something being said. She is mid-conversation and not
looking at the camera. One hand rests on the counter beside a mug and a small
notepad. Ordinary domestic detail: a fruit bowl, a tea towel over the oven rail,
soft late-afternoon light through a window to camera left. Shot on a Canon EOS
R6 with a 50mm lens at f/2.2, ISO 400, available light only, no flash. Warm
natural colour, visible skin texture, unretouched, fine 35mm grain. Composition
weighted to the right so the left third stays open. Aspect ratio 16:9.

Do not include: text, signage, logos, brand marks, a smartphone, a visible
router or modem, screens, studio lighting, glossy retouching, or eye contact
with the camera.
```

**Why a landline handset and not a mobile:** the product is a home phone line
delivered over fiber. A smartphone in frame would misrepresent what is being
sold.

**Watermark reminder:** every image in the first batch carried the Gemini
sparkle in the bottom-right, which had to be cropped out and cost roughly 25% of
each frame. If you can generate through the Gemini **API** rather than the
consumer app, the visible mark is normally absent and the full frame survives.
